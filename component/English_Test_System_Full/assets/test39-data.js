const TEST = {
  id: "test39",
  grade: "Grade 7 — Global Success",
  unit: "Unit 2: Healthy Living",
  title: "Grade 7 · Unit 2: Healthy Living · Test 1",
  duration: 35,
  totalPoints: 10,
  reviewPage: "review_test39.html",
  instructions: [
    "Bài kiểm tra gồm 40 câu, chia thành 7 phần (I → VII), tổng 10 điểm.",
    "Bấm chọn đáp án A/B/C/D cho câu trắc nghiệm, hoặc gõ câu trả lời vào ô trống cho câu điền từ / viết lại câu.",
    "Em có thể dùng nút Previous / Next hoặc bấm số câu ở bảng điều hướng để di chuyển giữa các câu.",
    "Khi hết giờ, bài làm sẽ tự động được nộp.",
    "Sau khi nộp bài, em sẽ thấy điểm số, đáp án đúng và giải thích chi tiết cho từng câu."
  ],
  sections: [
    { id: "I", title: "Choose the word / phrase / sentence (A, B, C or D) that best fits the space or best answers the question given in each sentence.", points: "3.5 pts", range: [1, 14] },
    { id: "II", title: "Look at the sign or the notice. Choose the best answer (A, B, C or D).", points: "0.5 pt", range: [15, 16] },
    { id: "III", title: "Choose the word (A, B, C or D) that best fits each space in the following passage.", points: "1.5 pts", range: [17, 22] },
    { id: "IV", title: "Read the passage. Decide True/False (23–26) and choose the best answer (27–28).", points: "1.5 pts", range: [23, 28] },
    { id: "V", title: "Use the correct form of the word given in each sentence.", points: "1.5 pts", range: [29, 34] },
    { id: "VI", title: "Look at the dictionary entry of “condition”. Complete the sentences with no more than three words.", points: "0.5 pt", range: [35, 36] },
    { id: "VII", title: "Rewrite each sentence so that it means almost the same as the sentence printed before it.", points: "1.0 pt", range: [37, 40] }
  ],
  passages: {
    healthyLifestyleCloze: "Many people are trying to live a healthier lifestyle these days. One important way to improve your health is to avoid eating too much junk food. Junk food contains a lot of calories (17) ________ very few nutrients. It can decrease your energy levels and increase your risk (18) ________ becoming overweight or even obese. Experts advise people to eat more (19) ________ fruits and vegetables, drink water, and exercise regularly. A balanced diet and enough sleep will (20) ________ you recover from illness more quickly and stay in good shape. You (21) ________ also try to break bad habits like skipping meals or staying up too late. If you're not sure how to start, ask a doctor or a nutrition expert for (22) ________.",
    melihaReading: "Meliha and her children live in St. Paul. She is from Somalia and came to the US five years ago. Many things are different in America. You can buy junk food with lots of salt, sugar, and oil here. Americans don't walk as much as people in Somalia. Instead, you can drive a car or take the bus. Meliha notices that many people in America are overweight. Her children like junk food such as hamburgers and French fries, and she does too. She has noticed that she has gained weight since moving to America. Her children prefer watching TV rather than playing outside. Meliha doesn't walk very much because she has a car. Her doctor advises her to eat more fruits and vegetables. He also says that eating too much junk food like chips, fries, and sugary snacks is bad for her health and that she needs to get more exercise.",
    nutritionEntry: {
      word: "nutrition", ipa: "/njuːˈtrɪʃn/", pos: "noun",
      def: "The process of providing or obtaining the food necessary for health and growth.",
      examples: [
        "A balanced diet is essential for <b>good nutrition</b>.",
        "Many illnesses are caused by <b>poor nutrition</b> and a lack of exercise.",
        "The clinic offers free <b>nutrition advice</b> to help you eat healthier."
      ]
    }
  },
  images: {
    noticeMomHealth: "assets/images/notice_mom_health.jpg",
    signWearFaceMask: "assets/images/sign_wear_face_mask.jpg"
  },
  questions: [
    // ---------------- SECTION I (1-14) ----------------
    { id: 1, section: "I", type: "mcq",
      prompt: "Which word has the underlined part pronounced differently from that of the others?",
      display: { A: "rough", B: "although", C: "cough", D: "enough" },
      correct: "B",
      explanation: "Phần gạch chân là \"ough\". \"rough\" /rʌf/, \"cough\" /kɒf/, \"enough\" /ɪˈnʌf/ đều có \"ough\" phát âm là <b>/ʌf/ hoặc /ɒf/</b> (âm /f/). Riêng \"although\" /ɔːlˈðoʊ/ có \"ough\" phát âm là <b>/oʊ/</b> (không có âm /f/) → khác biệt, đáp án B."
    },
    { id: 2, section: "I", type: "mcq",
      prompt: "Which word has the underlined part pronounced differently from that of the others?",
      display: { A: "spot", B: "cold", C: "post", D: "open" },
      correct: "A",
      explanation: "Phần gạch chân là chữ cái \"o\". \"cold\" /koʊld/, \"post\" /poʊst/, \"open\" /ˈoʊpən/ đều có \"o\" phát âm là <b>/oʊ/</b>. Riêng \"spot\" /spɒt/ có \"o\" phát âm là <b>/ɒ/</b> → khác biệt, đáp án A."
    },
    { id: 3, section: "I", type: "mcq",
      prompt: "Which word has a different stress pattern from that of the others?",
      display: { A: "harmful", B: "tidy", C: "healthy", D: "alive" },
      correct: "D",
      explanation: "\"harmful\" /ˈhɑːrmfl/, \"tidy\" /ˈtaɪdi/, \"healthy\" /ˈhelθi/ đều có trọng âm rơi vào <b>âm tiết 1</b>. Riêng \"alive\" /əˈlaɪv/ có trọng âm rơi vào <b>âm tiết 2</b> → khác biệt, đáp án D."
    },
    { id: 4, section: "I", type: "mcq",
      prompt: "Which word has a different stress pattern from that of the others?",
      display: { A: "computer", B: "companion", C: "exercise", D: "collection" },
      correct: "C",
      explanation: "\"computer\" /kəmˈpjuːtər/, \"companion\" /kəmˈpæniən/, \"collection\" /kəˈlekʃn/ đều có trọng âm rơi vào <b>âm tiết 2</b>. Riêng \"exercise\" /ˈeksərsaɪz/ có trọng âm rơi vào <b>âm tiết 1</b> → khác biệt, đáp án C."
    },
    { id: 5, section: "I", type: "mcq",
      context: "Tom: \"We should try to keep everything around us clean.\"",
      prompt: "Mary: \"Yes, and then flu will find it __________ to spread.\"",
      display: { A: "difficulties", B: "difficultly", C: "difficult", D: "difficulty" },
      correct: "C",
      explanation: "Cấu trúc \"find + it + adj + to V\" cần tính từ. <b>difficult</b> (adj) = khó khăn."
    },
    { id: 6, section: "I", type: "mcq",
      context: "Nam: \"Why do you often play football after school?\"",
      prompt: "Long: \"Because doing outdoor activities regularly helps us keep __________.\"",
      display: { A: "fitting", B: "fitted", C: "to fit", D: "fit" },
      correct: "D",
      explanation: "Cấu trúc \"keep + adj\" (giữ ở trạng thái nào đó) cần tính từ. <b>fit</b> (adj) = khỏe mạnh, cân đối."
    },
    { id: 7, section: "I", type: "mcq",
      context: "Lucy: \"Look at your red arms! You got a bad sunburn.\"",
      prompt: "Jane: \"Oh, I forgot to wear a hat and put on suncream to avoid __________.\"",
      display: { A: "activity", B: "fitness", C: "skin", D: "sunburn" },
      correct: "D",
      explanation: "\"avoid <b>sunburn</b>\" (tránh bị cháy nắng) phù hợp với ngữ cảnh \"red arms\" (cánh tay đỏ)."
    },
    { id: 8, section: "I", type: "mcq",
      context: "Doctor: \"Activities like running and cycling are very good __________ your health.\"",
      prompt: "Patient: \"Thank you, doctor. I will try to do them every day.\"",
      display: { A: "with", B: "to", C: "for", D: "in" },
      correct: "C",
      explanation: "\"good <b>for</b> your health\" (tốt cho sức khỏe) là cụm cố định."
    },
    { id: 9, section: "I", type: "mcq",
      context: "Anna: \"Do you have __________ eyes? Why don't you use eyedrops?\"",
      prompt: "Bill: \"Yes, they are red and painful after long hours on the computer.\"",
      display: { A: "hurt", B: "ache", C: "pain", D: "sore" },
      correct: "D",
      explanation: "\"<b>sore</b> eyes\" (mắt đau rát/khó chịu) phù hợp với ngữ cảnh mắt đỏ và đau sau khi dùng máy tính lâu."
    },
    { id: 10, section: "I", type: "mcq",
      context: "Mom: \"It's necessary for you __________ the amount of sugar you have in tea and coffee.\"",
      prompt: "Son: \"Okay, Mom. I'll put less sugar from now on.\"",
      display: { A: "reduce", B: "to reduce", C: "reducing", D: "to reducing" },
      correct: "B",
      explanation: "Cấu trúc \"It's necessary for sb + to V\" cần động từ nguyên thể có \"to\". <b>to reduce</b> = để giảm bớt."
    },
    { id: 11, section: "I", type: "mcq",
      context: "Phong: \"Rob eats a lot of fast food and he __________ on a lot of weight.\"",
      prompt: "Minh: \"Really? He needs to go on a diet right away.\"",
      display: { A: "puts", B: "takes", C: "brings", D: "spends" },
      correct: "A",
      explanation: "\"<b>put</b> on weight\" (tăng cân) là cụm động từ cố định."
    },
    { id: 12, section: "I", type: "mcq",
      context: "Lauren: \"What was Irene's health workshop and party like?\"",
      prompt: "Anton: \"__________\"",
      display: { A: "That's nice. I like the food best.", B: "I didn't go to it.", C: "She was very lovely.", D: "She likes big party." },
      correct: "B",
      explanation: "\"<b>I didn't go to it.</b>\" là câu trả lời hợp lý khi người được hỏi không tham dự sự kiện nên không thể mô tả nó."
    },
    { id: 13, section: "I", type: "mcq",
      context: "Emma: \"I have started drinking more water instead of soda to stay in shape!\"",
      prompt: "Mai: \"__________ Keep up the good work!\"",
      display: { A: "Wow, that's great!", B: "I don't think so.", C: "No problem.", D: "What a pity!" },
      correct: "A",
      explanation: "\"<b>Wow, that's great!</b>\" là lời khen tự nhiên đáp lại việc Emma chia sẻ thói quen tốt cho sức khỏe."
    },
    { id: 14, section: "I", type: "mcq",
      context: "David: \"Do you know why Nick is so tired today?\"",
      prompt: "Alex: \"__________ He should sleep more.\"",
      display: { A: "He wants to have a healthy lifestyle.", B: "He usually eats fresh fruits and vegetables.", C: "Because he watches TV too much and stays up late.", D: "He always does exercise in the morning." },
      correct: "C",
      explanation: "Câu hỏi \"why...tired?\" cần một lý do: \"<b>Because he watches TV too much and stays up late.</b>\" giải thích nguyên nhân mệt mỏi."
    },

    // ---------------- SECTION II (15-16) — sign & notice ----------------
    { id: 15, section: "II", type: "mcq", image: "noticeMomHealth",
      prompt: "What does this notice from a mother mean?",
      display: {
        A: "You should take good care of your health.",
        B: "You do not need to rest when you are tired.",
        C: "You only need to drink water when you do exercise.",
        D: "You can skip meals if you are too busy."
      },
      correct: "A",
      explanation: "Thông báo \"Remember to eat well, drink water, and rest. Your body needs care.\" nghĩa là hãy chăm sóc tốt cho sức khỏe bản thân → \"<b>You should take good care of your health.</b>\", đáp án A."
    },
    { id: 16, section: "II", type: "mcq", image: "signWearFaceMask",
      prompt: "What does this sign in the school cafeteria say?",
      display: {
        A: "You must wear a face mask in this area.",
        B: "You can take off your face mask during lunchtime.",
        C: "Only teachers need to wear face masks.",
        D: "Face masks are optional if you feel healthy."
      },
      correct: "A",
      explanation: "Biển \"WEAR A FACE MASK IN THIS AREA!\" nghĩa là bắt buộc đeo khẩu trang trong khu vực này → \"<b>You must wear a face mask in this area.</b>\", đáp án A."
    },

    // ---------------- SECTION III (17-22) — cloze passage ----------------
    { id: 17, section: "III", type: "mcq", passage: "healthyLifestyleCloze", blankNum: 17,
      prompt: "Choose the best word for blank (17).",
      display: { A: "because", B: "but", C: "so", D: "or" },
      correct: "B",
      explanation: "\"contains a lot of calories <b>but</b> very few nutrients\" — \"but\" nối hai ý tương phản (nhiều calo nhưng ít dinh dưỡng)."
    },
    { id: 18, section: "III", type: "mcq", passage: "healthyLifestyleCloze", blankNum: 18,
      prompt: "Choose the best word for blank (18).",
      display: { A: "for", B: "at", C: "with", D: "of" },
      correct: "D",
      explanation: "\"risk <b>of</b> becoming overweight\" — \"risk of + V-ing\" là cấu trúc cố định."
    },
    { id: 19, section: "III", type: "mcq", passage: "healthyLifestyleCloze", blankNum: 19,
      prompt: "Choose the best word for blank (19).",
      display: { A: "sweet", B: "clean", C: "raw", D: "fresh" },
      correct: "D",
      explanation: "\"<b>fresh</b> fruits and vegetables\" (rau củ quả tươi) là cụm phổ biến trong lời khuyên dinh dưỡng."
    },
    { id: 20, section: "III", type: "mcq", passage: "healthyLifestyleCloze", blankNum: 20,
      prompt: "Choose the best word for blank (20).",
      display: { A: "help", B: "give", C: "make", D: "let" },
      correct: "A",
      explanation: "\"<b>help</b> you recover\" (giúp bạn hồi phục) — \"help sb + V (nguyên thể)\"."
    },
    { id: 21, section: "III", type: "mcq", passage: "healthyLifestyleCloze", blankNum: 21,
      prompt: "Choose the best word for blank (21).",
      display: { A: "must", B: "have", C: "need", D: "should" },
      correct: "D",
      explanation: "\"You <b>should</b> also try to...\" — lời khuyên nhẹ nhàng, phù hợp với \"should\"."
    },
    { id: 22, section: "III", type: "mcq", passage: "healthyLifestyleCloze", blankNum: 22,
      prompt: "Choose the best word for blank (22).",
      display: { A: "information", B: "idea", C: "tip", D: "advice" },
      correct: "D",
      explanation: "\"ask a doctor... for <b>advice</b>\" (hỏi xin lời khuyên) — \"advice\" là danh từ không đếm được, phù hợp ngữ cảnh."
    },

    // ---------------- SECTION IV (23-28) — reading ----------------
    { id: 23, section: "IV", type: "truefalse", passage: "melihaReading",
      prompt: "Meliha moved to the US from Somalia five years ago.",
      correct: "True",
      explanation: "Đúng. Bài đọc: \"She is from Somalia and came to the US five years ago.\""
    },
    { id: 24, section: "IV", type: "truefalse", passage: "melihaReading",
      prompt: "Meliha's children love playing outside more than watching TV.",
      correct: "False",
      explanation: "Sai. Bài đọc: \"Her children prefer watching TV rather than playing outside.\""
    },
    { id: 25, section: "IV", type: "truefalse", passage: "melihaReading",
      prompt: "Meliha walks a lot every day to stay healthy.",
      correct: "False",
      explanation: "Sai. Bài đọc: \"Meliha doesn't walk very much because she has a car.\""
    },
    { id: 26, section: "IV", type: "truefalse", passage: "melihaReading",
      prompt: "The doctor tells Meliha that she should eat more fruits and vegetables.",
      correct: "True",
      explanation: "Đúng. Bài đọc: \"Her doctor advises her to eat more fruits and vegetables.\""
    },
    { id: 27, section: "IV", type: "mcq", passage: "melihaReading",
      prompt: "What kind of food do Meliha and her children like?",
      display: { A: "Junk food like hamburgers and French fries", B: "Fresh fruits and vegetables", C: "Healthy food from Somalia", D: "Fish and chips" },
      correct: "A",
      explanation: "Bài đọc: \"Her children like junk food such as hamburgers and French fries, and she does too.\" → đáp án A."
    },
    { id: 28, section: "IV", type: "mcq", passage: "melihaReading",
      prompt: "Why has Meliha gained weight since moving to America?",
      display: { A: "Because she eats a lot of junk food and does not walk much.", B: "Because she only eats traditional food from Somalia.", C: "Because she plays sports outside with her children every day.", D: "Because she follows her doctor's advice perfectly." },
      correct: "A",
      explanation: "Bài đọc: \"she does too... has gained weight... doesn't walk very much because she has a car.\" → đáp án A."
    },

    // ---------------- SECTION V (29-34) — word form ----------------
    { id: 29, section: "V", type: "fillblank",
      prompt: "Fast food is very convenient, but eating it too often is _____________ for our bodies.",
      wordGiven: "HEALTH", accepted: ["unhealthy"], correct: "unhealthy",
      explanation: "Cần tính từ mang nghĩa phủ định sau \"is\". <b>health</b> (n) → <b>unhealthy</b> (adj, un- + y, không lành mạnh)."
    },
    { id: 30, section: "V", type: "fillblank",
      prompt: "Doing regular exercise helps to _____________ your muscles and keep you fit.",
      wordGiven: "STRONG", accepted: ["strengthen"], correct: "strengthen",
      explanation: "Cần động từ sau \"to\" trong cấu trúc \"help to V\". <b>strong</b> (adj) → <b>strengthen</b> (v, +en, làm cho mạnh hơn)."
    },
    { id: 31, section: "V", type: "fillblank",
      prompt: "The doctor told him to reduce his _____________ of fast food and soda.",
      wordGiven: "CONSUME", accepted: ["consumption"], correct: "consumption",
      explanation: "Cần danh từ sau tính từ sở hữu \"his\". <b>consume</b> (v) → <b>consumption</b> (n, tiêu thụ)."
    },
    { id: 32, section: "V", type: "fillblank",
      prompt: "Lan was _____________ absent from school yesterday because she caught the flu.",
      wordGiven: "SICK", accepted: ["sickly"], correct: "sickly",
      explanation: "Cần trạng từ bổ nghĩa cho \"absent\". <b>sick</b> (adj) → <b>sickly</b> (adv, +ly, do ốm yếu)."
    },
    { id: 33, section: "V", type: "fillblank",
      prompt: "My father always keeps his room _____________ and clean every weekend.",
      wordGiven: "TIDY", accepted: ["tidy"], correct: "tidy",
      explanation: "\"keep + O + adj\" cần tính từ, giữ nguyên dạng <b>tidy</b> (gọn gàng) vì đã là tính từ."
    },
    { id: 34, section: "V", type: "fillblank",
      prompt: "The spread of the virus caused a lot of _____________ for the local community.",
      wordGiven: "DIFFICULT", accepted: ["difficulties"], correct: "difficulties",
      explanation: "Cần danh từ số nhiều sau \"a lot of\". <b>difficult</b> (adj) → <b>difficulty</b> (n) → <b>difficulties</b> (số nhiều)."
    },

    // ---------------- SECTION VI (35-36) — dictionary entry ----------------
    { id: 35, section: "VI", type: "fillblank", passage: "nutritionEntry",
      prompt: "Eating a variety of fruits, vegetables, and whole grains is important for __________________.",
      accepted: ["good nutrition"], correct: "good nutrition",
      explanation: "Từ điển cho ví dụ \"A balanced diet is essential for <b>good nutrition</b>.\" — khớp với ngữ cảnh ăn đa dạng thực phẩm để tốt cho sức khỏe."
    },
    { id: 36, section: "VI", type: "fillblank", passage: "nutritionEntry",
      prompt: "You should speak to a doctor or a fitness trainer if you need expert __________________.",
      accepted: ["nutrition advice"], correct: "nutrition advice",
      explanation: "Từ điển cho ví dụ \"The clinic offers free <b>nutrition advice</b> to help you eat healthier.\" — khớp với ngữ cảnh cần lời khuyên chuyên gia."
    },

    // ---------------- SECTION VII (37-40) — sentence rewriting ----------------
    { id: 37, section: "VII", type: "rewrite",
      prompt: "Ben watches TV too much, so he has a headache.",
      starter: "Because Ben",
      accepted: ["because ben watches tv too much, he has a headache"],
      correct: "Because Ben watches TV too much, he has a headache.",
      explanation: "\"S1, so S2\" (kết quả) có thể viết lại bằng \"<b>Because + S1, S2</b>\" (nguyên nhân), giữ nguyên quan hệ nhân quả.<br>→ <i>Because Ben watches TV too much, he has a headache.</i>"
    },
    { id: 38, section: "VII", type: "rewrite",
      prompt: "It is not necessary for you to finish the exercise layout now.",
      starter: "You don't need",
      accepted: ["you don't need to finish the exercise layout now"],
      correct: "You don't need to finish the exercise layout now.",
      explanation: "\"It is not necessary for sb to V\" (không cần thiết) có thể viết lại bằng \"<b>sb + don't/doesn't need to V</b>\", giữ nguyên nghĩa không bắt buộc.<br>→ <i>You don't need to finish the exercise layout now.</i>"
    },
    { id: 39, section: "VII", type: "rewrite",
      prompt: "Elena should sleep more and try to relax more.",
      starter: "Elena ought",
      accepted: ["elena ought to sleep more and try to relax more"],
      correct: "Elena ought to sleep more and try to relax more.",
      explanation: "\"S + should + V\" (nên làm gì) có thể viết lại bằng \"<b>S + ought to + V</b>\", giữ nguyên nghĩa khuyên nhủ.<br>→ <i>Elena ought to sleep more and try to relax more.</i>"
    },
    { id: 40, section: "VII", type: "rewrite",
      prompt: "Brushing your teeth twice a day is a good way to avoid getting cavities.",
      starter: "You can avoid",
      accepted: ["you can avoid getting cavities by brushing your teeth twice a day"],
      correct: "You can avoid getting cavities by brushing your teeth twice a day.",
      explanation: "\"V-ing... is a good way to avoid + V-ing\" có thể viết lại bằng \"<b>You can avoid + V-ing + by + V-ing</b>\", giữ nguyên nghĩa cách phòng tránh.<br>→ <i>You can avoid getting cavities by brushing your teeth twice a day.</i>"
    }
  ]
};
