// Complete list of Indian States & Union Territories with their districts.
// Source: Ministry of Home Affairs / Census administrative divisions (2024 reorganisation reflected).
// Structure: { code, name: { en, hi, mr }, districts: [{ en, hi, mr }] }
// NOTE: Marathi/Hindi district names fall back to a transliteration where a
// distinct localised form isn't commonly used — replace freely per your brand style guide.

export const INDIA_LOCATIONS = [
  {
    code: 'AP',
    name: { en: 'Andhra Pradesh', hi: 'आंध्र प्रदेश', mr: 'आंध्र प्रदेश' },
    districts: ['Anantapur', 'Chittoor', 'East Godavari', 'Guntur', 'Krishna', 'Kurnool', 'Nellore', 'Prakasam', 'Srikakulam', 'Visakhapatnam', 'Vizianagaram', 'West Godavari', 'Kadapa', 'Alluri Sitharama Raju', 'Anakapalli', 'Annamayya', 'Bapatla', 'Eluru', 'Kakinada', 'Konaseema', 'Nandyal', 'NTR', 'Palnadu', 'Parvathipuram Manyam', 'Sri Sathya Sai', 'Tirupati'],
  },
  {
    code: 'AR',
    name: { en: 'Arunachal Pradesh', hi: 'अरुणाचल प्रदेश', mr: 'अरुणाचल प्रदेश' },
    districts: ['Tawang', 'West Kameng', 'East Kameng', 'Papum Pare', 'Kurung Kumey', 'Kra Daadi', 'Lower Subansiri', 'Upper Subansiri', 'West Siang', 'East Siang', 'Siang', 'Upper Siang', 'Lower Siang', 'Lower Dibang Valley', 'Dibang Valley', 'Anjaw', 'Lohit', 'Namsai', 'Changlang', 'Tirap', 'Longding', 'Shi Yomi', 'Kamle'],
  },
  {
    code: 'AS',
    name: { en: 'Assam', hi: 'असम', mr: 'आसाम' },
    districts: ['Baksa', 'Barpeta', 'Biswanath', 'Bongaigaon', 'Cachar', 'Charaideo', 'Chirang', 'Darrang', 'Dhemaji', 'Dhubri', 'Dibrugarh', 'Dima Hasao', 'Goalpara', 'Golaghat', 'Hailakandi', 'Hojai', 'Jorhat', 'Kamrup', 'Kamrup Metropolitan', 'Karbi Anglong', 'Karimganj', 'Kokrajhar', 'Lakhimpur', 'Majuli', 'Morigaon', 'Nagaon', 'Nalbari', 'Sivasagar', 'Sonitpur', 'South Salmara-Mankachar', 'Tinsukia', 'Udalguri', 'West Karbi Anglong'],
  },
  {
    code: 'BR',
    name: { en: 'Bihar', hi: 'बिहार', mr: 'बिहार' },
    districts: ['Araria', 'Arwal', 'Aurangabad', 'Banka', 'Begusarai', 'Bhagalpur', 'Bhojpur', 'Buxar', 'Darbhanga', 'East Champaran', 'Gaya', 'Gopalganj', 'Jamui', 'Jehanabad', 'Kaimur', 'Katihar', 'Khagaria', 'Kishanganj', 'Lakhisarai', 'Madhepura', 'Madhubani', 'Munger', 'Muzaffarpur', 'Nalanda', 'Nawada', 'Patna', 'Purnia', 'Rohtas', 'Saharsa', 'Samastipur', 'Saran', 'Sheikhpura', 'Sheohar', 'Sitamarhi', 'Siwan', 'Supaul', 'Vaishali', 'West Champaran'],
  },
  {
    code: 'CG',
    name: { en: 'Chhattisgarh', hi: 'छत्तीसगढ़', mr: 'छत्तीसगड' },
    districts: ['Balod', 'Baloda Bazar', 'Balrampur', 'Bastar', 'Bemetara', 'Bijapur', 'Bilaspur', 'Dantewada', 'Dhamtari', 'Durg', 'Gariaband', 'Gaurela-Pendra-Marwahi', 'Janjgir-Champa', 'Jashpur', 'Kabirdham', 'Kanker', 'Kondagaon', 'Korba', 'Koriya', 'Mahasamund', 'Mungeli', 'Narayanpur', 'Raigarh', 'Raipur', 'Rajnandgaon', 'Sukma', 'Surajpur', 'Surguja'],
  },
  {
    code: 'GA',
    name: { en: 'Goa', hi: 'गोवा', mr: 'गोवा' },
    districts: ['North Goa', 'South Goa'],
  },
  {
    code: 'GJ',
    name: { en: 'Gujarat', hi: 'गुजरात', mr: 'गुजरात' },
    districts: ['Ahmedabad', 'Amreli', 'Anand', 'Aravalli', 'Banaskantha', 'Bharuch', 'Bhavnagar', 'Botad', 'Chhota Udepur', 'Dahod', 'Dang', 'Devbhoomi Dwarka', 'Gandhinagar', 'Gir Somnath', 'Jamnagar', 'Junagadh', 'Kheda', 'Kutch', 'Mahisagar', 'Mehsana', 'Morbi', 'Narmada', 'Navsari', 'Panchmahal', 'Patan', 'Porbandar', 'Rajkot', 'Sabarkantha', 'Surat', 'Surendranagar', 'Tapi', 'Vadodara', 'Valsad'],
  },
  {
    code: 'HR',
    name: { en: 'Haryana', hi: 'हरियाणा', mr: 'हरियाणा' },
    districts: ['Ambala', 'Bhiwani', 'Charkhi Dadri', 'Faridabad', 'Fatehabad', 'Gurugram', 'Hisar', 'Jhajjar', 'Jind', 'Kaithal', 'Karnal', 'Kurukshetra', 'Mahendragarh', 'Nuh', 'Palwal', 'Panchkula', 'Panipat', 'Rewari', 'Rohtak', 'Sirsa', 'Sonipat', 'Yamunanagar'],
  },
  {
    code: 'HP',
    name: { en: 'Himachal Pradesh', hi: 'हिमाचल प्रदेश', mr: 'हिमाचल प्रदेश' },
    districts: ['Bilaspur', 'Chamba', 'Hamirpur', 'Kangra', 'Kinnaur', 'Kullu', 'Lahaul and Spiti', 'Mandi', 'Shimla', 'Sirmaur', 'Solan', 'Una'],
  },
  {
    code: 'JH',
    name: { en: 'Jharkhand', hi: 'झारखंड', mr: 'झारखंड' },
    districts: ['Bokaro', 'Chatra', 'Deoghar', 'Dhanbad', 'Dumka', 'East Singhbhum', 'Garhwa', 'Giridih', 'Godda', 'Gumla', 'Hazaribagh', 'Jamtara', 'Khunti', 'Koderma', 'Latehar', 'Lohardaga', 'Pakur', 'Palamu', 'Ramgarh', 'Ranchi', 'Sahibganj', 'Seraikela Kharsawan', 'Simdega', 'West Singhbhum'],
  },
  {
    code: 'KA',
    name: { en: 'Karnataka', hi: 'कर्नाटक', mr: 'कर्नाटक' },
    districts: ['Bagalkot', 'Ballari', 'Belagavi', 'Bengaluru Rural', 'Bengaluru Urban', 'Bidar', 'Chamarajanagar', 'Chikballapur', 'Chikkamagaluru', 'Chitradurga', 'Dakshina Kannada', 'Davanagere', 'Dharwad', 'Gadag', 'Hassan', 'Haveri', 'Kalaburagi', 'Kodagu', 'Kolar', 'Koppal', 'Mandya', 'Mysuru', 'Raichur', 'Ramanagara', 'Shivamogga', 'Tumakuru', 'Udupi', 'Uttara Kannada', 'Vijayapura', 'Vijayanagara', 'Yadgir'],
  },
  {
    code: 'KL',
    name: { en: 'Kerala', hi: 'केरल', mr: 'केरळ' },
    districts: ['Alappuzha', 'Ernakulam', 'Idukki', 'Kannur', 'Kasaragod', 'Kollam', 'Kottayam', 'Kozhikode', 'Malappuram', 'Palakkad', 'Pathanamthitta', 'Thiruvananthapuram', 'Thrissur', 'Wayanad'],
  },
  {
    code: 'MP',
    name: { en: 'Madhya Pradesh', hi: 'मध्य प्रदेश', mr: 'मध्य प्रदेश' },
    districts: ['Agar Malwa', 'Alirajpur', 'Anuppur', 'Ashoknagar', 'Balaghat', 'Barwani', 'Betul', 'Bhind', 'Bhopal', 'Burhanpur', 'Chhatarpur', 'Chhindwara', 'Damoh', 'Datia', 'Dewas', 'Dhar', 'Dindori', 'Guna', 'Gwalior', 'Harda', 'Hoshangabad', 'Indore', 'Jabalpur', 'Jhabua', 'Katni', 'Khandwa', 'Khargone', 'Mandla', 'Mandsaur', 'Morena', 'Narsinghpur', 'Neemuch', 'Niwari', 'Panna', 'Raisen', 'Rajgarh', 'Ratlam', 'Rewa', 'Sagar', 'Satna', 'Sehore', 'Seoni', 'Shahdol', 'Shajapur', 'Sheopur', 'Shivpuri', 'Sidhi', 'Singrauli', 'Tikamgarh', 'Ujjain', 'Umaria', 'Vidisha'],
  },
  {
    code: 'MH',
    name: { en: 'Maharashtra', hi: 'महाराष्ट्र', mr: 'महाराष्ट्र' },
    districts: ['Ahmednagar', 'Akola', 'Amravati', 'Beed', 'Bhandara', 'Buldhana', 'Chandrapur', 'Chhatrapati Sambhajinagar', 'Dharashiv', 'Dhule', 'Gadchiroli', 'Gondia', 'Hingoli', 'Jalgaon', 'Jalna', 'Kolhapur', 'Latur', 'Mumbai City', 'Mumbai Suburban', 'Nagpur', 'Nanded', 'Nandurbar', 'Nashik', 'Palghar', 'Parbhani', 'Pune', 'Raigad', 'Ratnagiri', 'Sangli', 'Satara', 'Sindhudurg', 'Solapur', 'Thane', 'Wardha', 'Washim', 'Yavatmal'],
  },
  {
    code: 'MN',
    name: { en: 'Manipur', hi: 'मणिपुर', mr: 'मणिपूर' },
    districts: ['Bishnupur', 'Chandel', 'Churachandpur', 'Imphal East', 'Imphal West', 'Jiribam', 'Kakching', 'Kamjong', 'Kangpokpi', 'Noney', 'Pherzawl', 'Senapati', 'Tamenglong', 'Tengnoupal', 'Thoubal', 'Ukhrul'],
  },
  {
    code: 'ML',
    name: { en: 'Meghalaya', hi: 'मेघालय', mr: 'मेघालय' },
    districts: ['East Garo Hills', 'East Jaintia Hills', 'East Khasi Hills', 'North Garo Hills', 'Ri Bhoi', 'South Garo Hills', 'South West Garo Hills', 'South West Khasi Hills', 'West Garo Hills', 'West Jaintia Hills', 'West Khasi Hills'],
  },
  {
    code: 'MZ',
    name: { en: 'Mizoram', hi: 'मिजोरम', mr: 'मिझोराम' },
    districts: ['Aizawl', 'Champhai', 'Hnahthial', 'Khawzawl', 'Kolasib', 'Lawngtlai', 'Lunglei', 'Mamit', 'Saiha', 'Saitual', 'Serchhip'],
  },
  {
    code: 'NL',
    name: { en: 'Nagaland', hi: 'नागालैंड', mr: 'नागालँड' },
    districts: ['Chumukedima', 'Dimapur', 'Kiphire', 'Kohima', 'Longleng', 'Mokokchung', 'Mon', 'Niuland', 'Noklak', 'Peren', 'Phek', 'Shamator', 'Tuensang', 'Tseminyu', 'Wokha', 'Zunheboto'],
  },
  {
    code: 'OD',
    name: { en: 'Odisha', hi: 'ओडिशा', mr: 'ओडिशा' },
    districts: ['Angul', 'Balangir', 'Balasore', 'Bargarh', 'Bhadrak', 'Boudh', 'Cuttack', 'Deogarh', 'Dhenkanal', 'Gajapati', 'Ganjam', 'Jagatsinghpur', 'Jajpur', 'Jharsuguda', 'Kalahandi', 'Kandhamal', 'Kendrapara', 'Kendujhar', 'Khordha', 'Koraput', 'Malkangiri', 'Mayurbhanj', 'Nabarangpur', 'Nayagarh', 'Nuapada', 'Puri', 'Rayagada', 'Sambalpur', 'Subarnapur', 'Sundargarh'],
  },
  {
    code: 'PB',
    name: { en: 'Punjab', hi: 'पंजाब', mr: 'पंजाब' },
    districts: ['Amritsar', 'Barnala', 'Bathinda', 'Faridkot', 'Fatehgarh Sahib', 'Fazilka', 'Ferozepur', 'Gurdaspur', 'Hoshiarpur', 'Jalandhar', 'Kapurthala', 'Ludhiana', 'Malerkotla', 'Mansa', 'Moga', 'Muktsar', 'Pathankot', 'Patiala', 'Rupnagar', 'Sahibzada Ajit Singh Nagar', 'Sangrur', 'Shaheed Bhagat Singh Nagar', 'Tarn Taran'],
  },
  {
    code: 'RJ',
    name: { en: 'Rajasthan', hi: 'राजस्थान', mr: 'राजस्थान' },
    districts: ['Ajmer', 'Alwar', 'Banswara', 'Baran', 'Barmer', 'Bharatpur', 'Bhilwara', 'Bikaner', 'Bundi', 'Chittorgarh', 'Churu', 'Dausa', 'Dholpur', 'Dungarpur', 'Hanumangarh', 'Jaipur', 'Jaisalmer', 'Jalore', 'Jhalawar', 'Jhunjhunu', 'Jodhpur', 'Karauli', 'Kota', 'Nagaur', 'Pali', 'Pratapgarh', 'Rajsamand', 'Sawai Madhopur', 'Sikar', 'Sirohi', 'Sri Ganganagar', 'Tonk', 'Udaipur'],
  },
  {
    code: 'SK',
    name: { en: 'Sikkim', hi: 'सिक्किम', mr: 'सिक्कीम' },
    districts: ['Gangtok', 'Gyalshing', 'Mangan', 'Namchi', 'Pakyong', 'Soreng'],
  },
  {
    code: 'TN',
    name: { en: 'Tamil Nadu', hi: 'तमिलनाडु', mr: 'तामिळनाडू' },
    districts: ['Ariyalur', 'Chengalpattu', 'Chennai', 'Coimbatore', 'Cuddalore', 'Dharmapuri', 'Dindigul', 'Erode', 'Kallakurichi', 'Kancheepuram', 'Kanyakumari', 'Karur', 'Krishnagiri', 'Madurai', 'Mayiladuthurai', 'Nagapattinam', 'Namakkal', 'Nilgiris', 'Perambalur', 'Pudukkottai', 'Ramanathapuram', 'Ranipet', 'Salem', 'Sivaganga', 'Tenkasi', 'Thanjavur', 'Theni', 'Thoothukudi', 'Tiruchirappalli', 'Tirunelveli', 'Tirupattur', 'Tiruppur', 'Tiruvallur', 'Tiruvannamalai', 'Tiruvarur', 'Vellore', 'Viluppuram', 'Virudhunagar'],
  },
  {
    code: 'TS',
    name: { en: 'Telangana', hi: 'तेलंगाना', mr: 'तेलंगणा' },
    districts: ['Adilabad', 'Bhadradri Kothagudem', 'Hanumakonda', 'Hyderabad', 'Jagtial', 'Jangaon', 'Jayashankar Bhupalpally', 'Jogulamba Gadwal', 'Kamareddy', 'Karimnagar', 'Khammam', 'Komaram Bheem', 'Mahabubabad', 'Mahabubnagar', 'Mancherial', 'Medak', 'Medchal-Malkajgiri', 'Mulugu', 'Nagarkurnool', 'Nalgonda', 'Narayanpet', 'Nirmal', 'Nizamabad', 'Peddapalli', 'Rajanna Sircilla', 'Rangareddy', 'Sangareddy', 'Siddipet', 'Suryapet', 'Vikarabad', 'Wanaparthy', 'Warangal', 'Yadadri Bhuvanagiri'],
  },
  {
    code: 'TR',
    name: { en: 'Tripura', hi: 'त्रिपुरा', mr: 'त्रिपुरा' },
    districts: ['Dhalai', 'Gomati', 'Khowai', 'North Tripura', 'Sepahijala', 'South Tripura', 'Unakoti', 'West Tripura'],
  },
  {
    code: 'UP',
    name: { en: 'Uttar Pradesh', hi: 'उत्तर प्रदेश', mr: 'उत्तर प्रदेश' },
    districts: ['Agra', 'Aligarh', 'Ambedkar Nagar', 'Amethi', 'Amroha', 'Auraiya', 'Ayodhya', 'Azamgarh', 'Baghpat', 'Bahraich', 'Ballia', 'Balrampur', 'Banda', 'Barabanki', 'Bareilly', 'Basti', 'Bhadohi', 'Bijnor', 'Budaun', 'Bulandshahr', 'Chandauli', 'Chitrakoot', 'Deoria', 'Etah', 'Etawah', 'Farrukhabad', 'Fatehpur', 'Firozabad', 'Gautam Buddha Nagar', 'Ghaziabad', 'Ghazipur', 'Gonda', 'Gorakhpur', 'Hamirpur', 'Hapur', 'Hardoi', 'Hathras', 'Jalaun', 'Jaunpur', 'Jhansi', 'Kannauj', 'Kanpur Dehat', 'Kanpur Nagar', 'Kasganj', 'Kaushambi', 'Kushinagar', 'Lakhimpur Kheri', 'Lalitpur', 'Lucknow', 'Maharajganj', 'Mahoba', 'Mainpuri', 'Mathura', 'Mau', 'Meerut', 'Mirzapur', 'Moradabad', 'Muzaffarnagar', 'Pilibhit', 'Pratapgarh', 'Prayagraj', 'Rae Bareli', 'Rampur', 'Saharanpur', 'Sambhal', 'Sant Kabir Nagar', 'Shahjahanpur', 'Shamli', 'Shravasti', 'Siddharthnagar', 'Sitapur', 'Sonbhadra', 'Sultanpur', 'Unnao', 'Varanasi'],
  },
  {
    code: 'UK',
    name: { en: 'Uttarakhand', hi: 'उत्तराखंड', mr: 'उत्तराखंड' },
    districts: ['Almora', 'Bageshwar', 'Chamoli', 'Champawat', 'Dehradun', 'Haridwar', 'Nainital', 'Pauri Garhwal', 'Pithoragarh', 'Rudraprayag', 'Tehri Garhwal', 'Udham Singh Nagar', 'Uttarkashi'],
  },
  {
    code: 'WB',
    name: { en: 'West Bengal', hi: 'पश्चिम बंगाल', mr: 'पश्चिम बंगाल' },
    districts: ['Alipurduar', 'Bankura', 'Birbhum', 'Cooch Behar', 'Dakshin Dinajpur', 'Darjeeling', 'Hooghly', 'Howrah', 'Jalpaiguri', 'Jhargram', 'Kalimpong', 'Kolkata', 'Malda', 'Murshidabad', 'Nadia', 'North 24 Parganas', 'Paschim Bardhaman', 'Paschim Medinipur', 'Purba Bardhaman', 'Purba Medinipur', 'Purulia', 'South 24 Parganas', 'Uttar Dinajpur'],
  },
  // Union Territories
  {
    code: 'AN',
    name: { en: 'Andaman and Nicobar Islands', hi: 'अंडमान और निकोबार द्वीप समूह', mr: 'अंदमान आणि निकोबार बेटे' },
    districts: ['Nicobar', 'North and Middle Andaman', 'South Andaman'],
  },
  {
    code: 'CH',
    name: { en: 'Chandigarh', hi: 'चंडीगढ़', mr: 'चंदिगड' },
    districts: ['Chandigarh'],
  },
  {
    code: 'DNHDD',
    name: { en: 'Dadra and Nagar Haveli and Daman and Diu', hi: 'दादरा और नगर हवेली और दमन और दीव', mr: 'दादरा आणि नगर हवेली आणि दमण आणि दीव' },
    districts: ['Dadra and Nagar Haveli', 'Daman', 'Diu'],
  },
  {
    code: 'DL',
    name: { en: 'Delhi', hi: 'दिल्ली', mr: 'दिल्ली' },
    districts: ['Central Delhi', 'East Delhi', 'New Delhi', 'North Delhi', 'North East Delhi', 'North West Delhi', 'Shahdara', 'South Delhi', 'South East Delhi', 'South West Delhi', 'West Delhi'],
  },
  {
    code: 'JK',
    name: { en: 'Jammu and Kashmir', hi: 'जम्मू और कश्मीर', mr: 'जम्मू आणि काश्मीर' },
    districts: ['Anantnag', 'Bandipora', 'Baramulla', 'Budgam', 'Doda', 'Ganderbal', 'Jammu', 'Kathua', 'Kishtwar', 'Kulgam', 'Kupwara', 'Poonch', 'Pulwama', 'Rajouri', 'Ramban', 'Reasi', 'Samba', 'Shopian', 'Srinagar', 'Udhampur'],
  },
  {
    code: 'LA',
    name: { en: 'Ladakh', hi: 'लद्दाख', mr: 'लडाख' },
    districts: ['Kargil', 'Leh'],
  },
  {
    code: 'LD',
    name: { en: 'Lakshadweep', hi: 'लक्षद्वीप', mr: 'लक्षद्वीप' },
    districts: ['Lakshadweep'],
  },
  {
    code: 'PY',
    name: { en: 'Puducherry', hi: 'पुडुचेरी', mr: 'पुदुच्चेरी' },
    districts: ['Karaikal', 'Mahe', 'Puducherry', 'Yanam'],
  },
];

// Helpers -------------------------------------------------------------

export function getStateOptions(lang = 'en') {
  return INDIA_LOCATIONS.map((s) => ({ code: s.code, label: s.name[lang] || s.name.en })).sort((a, b) =>
    a.label.localeCompare(b.label)
  );
}

export function getDistrictOptions(stateCode) {
  const state = INDIA_LOCATIONS.find((s) => s.code === stateCode);
  if (!state) return [];
  return [...state.districts].sort((a, b) => a.localeCompare(b));
}

export function getStateLabel(stateCode, lang = 'en') {
  const state = INDIA_LOCATIONS.find((s) => s.code === stateCode);
  return state ? state.name[lang] || state.name.en : stateCode;
}
