const choiceNamePrefix: string[] = [
  'นาย',
  'นาง',
  'นางสาว',
  'เด็กชาย',
  'เด็กหญิง',
  'อื่น ๆ',
];

const choiceMaritalStatus: string[] = ['โสด', 'สมรส', 'หย่าร้าง', 'อื่น ๆ'];

const choiceSymptom: string[] = ['เหนื่อย/อ่อนเพลีย', 'ไข้', 'หนาวสั่น'];

const choiceRespiratorySystem: string[] = ['หายใจลำบาก / หายใจมีหอบเหนื่อย', 'ไอ'];

const choiceCardiovascularSystem: string[] = [
  'ใจสั่น',
  'หัวใจเต้นเร็ว (มากกว่า 100 ครั้ง/นาที)',
  'เจ็บหน้าอก',
];

const choiceNervousSystem: string[] = [
  'จมูกไม่ได้กลิ่น/ลิ้นไม่รับรส',
  'ปวดศีรษะ',
  'เวียนศีรษะ',
  'การเคลื่อนไหวผิดปกติ',
  'สมองล้า',
  'ความจำสั้น/สมาธิสั้น',
];

const choicePsychiatricSystem: string[] = ['วิตกกังวล', 'ซึมเศร้า', 'นอนไม่ค่อยหลับ'];

const choiceStomachAndIntestinalSystem: string[] = [
  'ท้องเสียบ่อย (มากกว่า 3 ครั้ง/วัน)',
  'คลื่นไส้/อาเจียน',
  'ปวดท้อง',
];

const choiceSkinSystem: string[] = ['มีผื่นขึ้นตามร่างกาย', 'ผมร่วง', 'ผิวลอก'];

const choiceEarEyesThroatAndNoseSystem: string[] = [
  'กลืนลำบาก',
  'สูญเสียการได้ยิน',
  'ตามองเห็นไม่ชัด',
  'เจ็บหู',
];

const choiceMusculoskeletalSystem: string[] = [
  'ปวดกล้ามเนื้อ',
  'ปวดตามข้อและกระดูก',
  'คอแข็ง',
];

const choiceImmuneSystem: string[] = [
  'มีปฏิกิริยาการแพ้เพิ่มขึ้นในอาการแพ้ที่มีอยู่เดิม',
  'มีอาการแพ้ใหม่ๆ ที่ไม่เคยแพ้มาก่อน',
  'ผิวหนังเป็นเม็ดพุพอง (คล้ายอาการของโรคงูสวัด)',
];

const choiceMedicine: string[] = [
  'เซตยาตามอาการ (ยาลดไข้, ยาแก้ไอ, ยาละลายเสมหะ, ยาแก้แพ้, วิตามินซี,เกลือแร่)',
  'ยาน้ำสำหรับเด็ก',
  'ปรอทวัดไข้',
  'เครื่องวัดออกซิเจนปลายนิ้ว',
  'อาหาร 14 วัน (เฉพาะผู้ที่ไม่มีคนดูแลเท่านั้น)',
  'อื่น ๆ',
];

const choiceCovidTestResult = [
  'ATK',
  'Rapid Test ตรวจที่ รพ./คลินิก',
  'Rapid Test แบบตรวจเองที่บ้าน',
  'ไม่มีผลตรวจ',
  'อื่น ๆ',
];

const choicePregnant: string[] = ['ตั้งครรภ์', 'ไม่ได้ตั้งครรภ์', 'อื่น ๆ'];

const choiceRacers: string[] = [
  'หอบเหนื่อย วัดค่าออกซิเจนปลายนิ้วได้มากกว่า 95%',
  'หอบเหนื่อย วัดค่าออกซิเจนปลายนิ้วได้ระหว่าง 90-95%',
  'หอบเหนื่อย วัดค่าออกซิเจนปลายนิ้วได้น้อยกว่า 90%',
  'หอบเหนื่อย แต่ไม่มีเครื่องวัดออกซิเจน',
  'ไม่มีอาการหอบเหนื่อย',
  'อื่น ๆ',
];

const choiceDiabetes: string[] = [
  'เป็นเบาหวาน และ ควบคุมระดับน้ำตาลได้ดี',
  'เป็นเบาหวาน แต่ ควบคุมระดับน้ำตาลได้ไม่ดี',
  'ไม่เป็นเบาหวาน',
  'อื่น ๆ',
];

const choiceStomachUlcer: string[] = ['เป็น', 'ไม่เป็น', 'อื่น ๆ'];

const choiceHowLongSymptom: string[] = ['1-2', '3-4', '5-6', '7-8', '9-10', 'มากกว่า10'];

const choiceDisease: string[] = [
  'โรคปอด',
  'โรคไตเรื้อรัง',
  'โรคหัวใจและหลอดเลือด',
  'โรคหลอดเลือดสมอง',
  'โรคเบาหวานที่ควบคุมไม่ได้',
  'โรคอ้วน',
  'โรคตับแข็ง',
  'ภูมิคุ้มกันต่ำ',
  'ไม่มีโรคประจำตัว',
  'อื่น ๆ',
];

const choiceColorStatus: string[] = ['เขียว', 'เหลืองอ่อน', 'เหลืองเข้ม', 'แดง'];

export {
  choicePregnant,
  choiceNamePrefix,
  choiceMaritalStatus,
  choiceMedicine,
  choiceCovidTestResult,
  choiceRacers,
  choiceDiabetes,
  choiceStomachUlcer,
  choiceSymptom,
  choiceHowLongSymptom,
  choiceDisease,
  choiceColorStatus,
  choiceRespiratorySystem,
  choiceCardiovascularSystem,
  choiceNervousSystem,
  choicePsychiatricSystem,
  choiceStomachAndIntestinalSystem,
  choiceSkinSystem,
  choiceEarEyesThroatAndNoseSystem,
  choiceMusculoskeletalSystem,
  choiceImmuneSystem,
};
