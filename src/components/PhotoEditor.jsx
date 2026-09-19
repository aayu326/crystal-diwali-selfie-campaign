import { useCallback, useEffect, useRef, useState } from 'react';
import { drawPortrait, TEMPLATE_WIDTH, TEMPLATE_HEIGHT } from '../services/portraitGenerator.js';
import { clamp } from '../utils/imageUtils.js';
import { t } from '../data/translations.js';

const MIN_SCALE = 0.6;
const MAX_SCALE = 4;
const ZOOM_STEP = 0.15;

export const DEFAULT_TRANSFORM = { x: 0, y: 0, scale: 1, rotation: 0 };

function distance(touches) {
  const [a, b] = touches;
  return Math.hypot(a.clientX - b.clientX, a.clientY - b.clientY);
}

export default function PhotoEditor({
  img,
  transform,
  onTransformChange,
  name,
  districtState,
  lang,
  onRetake,
  displayWidth = 340,
}) {
  const canvasRef = useRef(null);
  const dragState = useRef(null);
  const pinchState = useRef(null);
  const [isDragging, setIsDragging] = useState(false);

  const displayHeight = Math.round((displayWidth * TEMPLATE_HEIGHT) / TEMPLATE_WIDTH);
  const toTemplateScale = TEMPLATE_WIDTH / displayWidth;

  const redraw = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    drawPortrait(ctx, {
      width: canvas.width,
      height: canvas.height,
      img,
      transform,
      name,
      districtState,
      lang,
    });
  }, [img, transform, name, districtState, lang]);

  useEffect(() => {
    redraw();
  }, [redraw]);

  const updateTransform = (partial) => {
    onTransformChange((prev) => {
      const next = { ...prev, ...partial };
      next.scale = clamp(next.scale, MIN_SCALE, MAX_SCALE);
      next.x = clamp(next.x, -TEMPLATE_WIDTH * 0.5, TEMPLATE_WIDTH * 0.5);
      next.y = clamp(next.y, -TEMPLATE_HEIGHT * 0.5, TEMPLATE_HEIGHT * 0.5);
      return next;
    });
  };

  const handlePointerDown = (e) => {
    if (!img) return;
    canvasRef.current.setPointerCapture(e.pointerId);
    dragState.current = { startX: e.clientX, startY: e.clientY, origin: { x: transform.x, y: transform.y } };
    setIsDragging(true);
  };

  const handlePointerMove = (e) => {
    if (!dragState.current) return;
    const dx = (e.clientX - dragState.current.startX) * toTemplateScale;
    const dy = (e.clientY - dragState.current.startY) * toTemplateScale;
    updateTransform({ x: dragState.current.origin.x + dx, y: dragState.current.origin.y + dy });
  };

  const endDrag = () => {
    dragState.current = null;
    setIsDragging(false);
  };

  const handleWheel = (e) => {
    if (!img) return;
    e.preventDefault();
    const delta = e.deltaY > 0 ? -ZOOM_STEP / 3 : ZOOM_STEP / 3;
    updateTransform({ scale: transform.scale + delta });
  };

  // --- Touch (pinch to zoom + single-finger drag) ---
  const handleTouchStart = (e) => {
    if (!img) return;
    if (e.touches.length === 2) {
      pinchState.current = { startDist: distance(e.touches), startScale: transform.scale };
    } else if (e.touches.length === 1) {
      const touch = e.touches[0];
      dragState.current = { startX: touch.clientX, startY: touch.clientY, origin: { x: transform.x, y: transform.y } };
      setIsDragging(true);
    }
  };

  const handleTouchMove = (e) => {
    if (e.touches.length === 2 && pinchState.current) {
      e.preventDefault();
      const newDist = distance(e.touches);
      const ratio = newDist / pinchState.current.startDist;
      updateTransform({ scale: pinchState.current.startScale * ratio });
    } else if (e.touches.length === 1 && dragState.current) {
      const touch = e.touches[0];
      const dx = (touch.clientX - dragState.current.startX) * toTemplateScale;
      const dy = (touch.clientY - dragState.current.startY) * toTemplateScale;
      updateTransform({ x: dragState.current.origin.x + dx, y: dragState.current.origin.y + dy });
    }
  };

  const handleTouchEnd = (e) => {
    if (e.touches.length === 0) {
      dragState.current = null;
      pinchState.current = null;
      setIsDragging(false);
    }
  };

  const tr = (key) => t(lang, key);

  return (
    <div className="photo-editor">
      <canvas
        ref={canvasRef}
        width={TEMPLATE_WIDTH}
        height={TEMPLATE_HEIGHT}
        className={`portrait-canvas editable ${isDragging ? 'dragging' : ''}`}
        style={{ width: displayWidth, height: displayHeight, touchAction: 'none' }}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={endDrag}
        onPointerLeave={endDrag}
        onWheel={handleWheel}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      />

      {img && (
        <>
          <p className="editor-hint">{tr('drag')}</p>
          <div className="editor-controls">
            <button type="button" className="icon-btn" onClick={() => updateTransform({ scale: transform.scale - ZOOM_STEP })} aria-label={tr('zoom') + ' -'}>
              −
            </button>
            <input
              type="range"
              min={MIN_SCALE}
              max={MAX_SCALE}
              step={0.01}
              value={transform.scale}
              onChange={(e) => updateTransform({ scale: parseFloat(e.target.value) })}
              aria-label={tr('zoom')}
            />
            <button type="button" className="icon-btn" onClick={() => updateTransform({ scale: transform.scale + ZOOM_STEP })} aria-label={tr('zoom') + ' +'}>
              +
            </button>
            <button
              type="button"
              className="icon-btn"
              onClick={() => updateTransform({ rotation: (transform.rotation + 90) % 360 })}
              aria-label={tr('rotate')}
              title={tr('rotate')}
            >
              ↻
            </button>
            <button type="button" className="text-btn" onClick={() => onTransformChange(() => ({ ...DEFAULT_TRANSFORM }))}>
              {tr('reset')}
            </button>
          </div>
          <button type="button" className="link-btn" onClick={onRetake}>
            {tr('retake')}
          </button>
        </>
      )}
    </div>
  );
}
