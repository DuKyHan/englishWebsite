const TEST = {
  id: "test40",
  grade: "Grade 7 — Global Success",
  unit: "Unit 2: Healthy Living",
  title: "Grade 7 · Unit 2: Healthy Living · Test 2",
  duration: 35,
  totalPoints: 10,
  reviewPage: "review_test40.html",
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
    caloriesCloze: "We need calories or energy to do things every day. For example, when we walk to school or ride a bike to school, we spend a (17) ________ amount of calories, and even when we sleep, we also use them. But how many calories should we have a day to (18) ________ in shape? It's difficult for us to calculate. If people want to keep fit, they should remember (19) ________ everyone should have between 1,600 and 2,500 calories a day. We get calories from the food we eat. If we eat too (20) ________ food and don't take part (21) ________ any activities, we can get fat quickly. So besides studying, we should do some exercise, play sports, or do housework, such as (22) ________ the floor, cooking, etc. Otherwise, if we don't eat enough, we will be tired and weak.",
    herbalMedicineReading: "Everyone wants to be healthy. People see doctors. They take pills to stay healthy. However, plants have been used to heal for thousands of years. More and more people are trying herbs to stay healthy. Plants used to heal are called \"herbal medicine\". There are many plants used in herbal medicine. Each plant is used in a certain way. Herbal medicine works more slowly than most pills. Many people think plants are gentle on the body. There are a lot of examples of helpful plants. Ginger can help your body. Eating ginger often may help you stay healthy. Another helpful plant is parsley. It can stop bad breath. Herbs may be gentler than some pills. However, this does not mean that anyone can take them in any way. You should always be careful. Some herbs can be harmful, too. Too much rosemary can be very bad for your stomach. It can make you sick. Foxglove is a very pretty flower. It also has poison in it. Nevertheless, if you are afraid of using herbs, you may be surprised. You have probably already used some kind of herbal medicine. Coffee, garlic, ginseng, and peppermint are all used in herbal medicine. Herbal medicine is becoming popular again, as people become more interested in their health.",
    conditionEntry: {
      word: "condition", ipa: "/kənˈdɪʃn/", pos: "noun",
      def: "1. State of something/someone: the state that something or someone is in. 2. Medical rule/illness: a long-term medical problem. 3. Rules/Terms: things that must happen or be agreed upon.",
      examples: [
        "The car is in <b>excellent condition</b>.",
        "The doctors say his <b>condition is stable</b>.",
        "He suffers from a serious <b>heart condition</b>.",
        "You can borrow the bike on <b>one condition</b>: you must wear a helmet."
      ]
    }
  },
  images: {
    signNoLittering: "assets/images/sign_no_littering.jpg",
    signBuy1Get1Free: "assets/images/sign_buy1get1_free.jpg"
  },
  questions: [
    // ---------------- SECTION I (1-14) ----------------
    { id: 1, section: "I", type: "mcq",
      prompt: "Which word has the underlined part pronounced differently from that of the others?",
      display: { A: "buses", B: "sleeps", C: "masks", D: "spots" },
      correct: "A",
      explanation: "Phần gạch chân là \"-s/-es\". \"sleeps\" /sliːps/, \"masks\" /mæsks/, \"spots\" /spɒts/ đều có \"-s\" phát âm là <b>/s/</b>. Riêng \"buses\" /ˈbʌsɪz/ có \"-es\" phát âm là <b>/ɪz/</b> → khác biệt, đáp án A."
    },
    { id: 2, section: "I", type: "mcq",
      prompt: "Which word has the underlined part pronounced differently from that of the others?",
      display: { A: "affect", B: "acne", C: "trap", D: "active" },
      correct: "A",
      explanation: "Phần gạch chân là chữ cái \"a\". \"acne\" /ˈækni/, \"trap\" /træp/, \"active\" /ˈæktɪv/ đều có \"a\" phát âm là <b>/æ/</b>. Riêng \"affect\" /əˈfekt/ có \"a\" phát âm là <b>/ə/</b> (âm schwa không nhấn) → khác biệt, đáp án A."
    },
    { id: 3, section: "I", type: "mcq",
      prompt: "Which word has a different stress pattern from that of the others?",
      display: { A: "horizon", B: "boundary", C: "tomato", D: "condition" },
      correct: "B",
      explanation: "\"horizon\" /həˈraɪzn/, \"tomato\" /təˈmeɪtoʊ/, \"condition\" /kənˈdɪʃn/ đều có trọng âm rơi vào <b>âm tiết 2</b>. Riêng \"boundary\" /ˈbaʊndri/ có trọng âm rơi vào <b>âm tiết 1</b> → khác biệt, đáp án B."
    },
    { id: 4, section: "I", type: "mcq",
      prompt: "Which word has a different stress pattern from that of the others?",
      display: { A: "pimple", B: "planet", C: "balloon", D: "cheesecake" },
      correct: "C",
      explanation: "\"pimple\" /ˈpɪmpl/, \"planet\" /ˈplænɪt/, \"cheesecake\" /ˈtʃiːzkeɪk/ đều có trọng âm rơi vào <b>âm tiết 1</b>. Riêng \"balloon\" /bəˈluːn/ có trọng âm rơi vào <b>âm tiết 2</b> → khác biệt, đáp án C."
    },
    { id: 5, section: "I", type: "mcq",
      context: "Tom: \"We need to spend less time __________ computer games.\"",
      prompt: "Ben: \"You're right. Let's go out for a walk instead.\"",
      display: { A: "to playing", B: "playing", C: "play", D: "to play" },
      correct: "B",
      explanation: "Cấu trúc \"spend + time + V-ing\" (dành thời gian làm gì). <b>playing</b> = V-ing."
    },
    { id: 6, section: "I", type: "mcq",
      context: "Anna: \"Be careful with __________ you eat and drink.\"",
      prompt: "Lucy: \"Thanks. I am trying to follow a balanced diet now.\"",
      display: { A: "this", B: "who", C: "what", D: "which" },
      correct: "C",
      explanation: "\"be careful with <b>what</b> you eat\" — \"what\" (đại từ quan hệ danh từ, những gì) phù hợp với ngữ cảnh chung chung về đồ ăn/uống."
    },
    { id: 7, section: "I", type: "mcq",
      context: "Nick: \"The Japanese eat a lot of fish instead of meat.\"",
      prompt: "Mary: \"Yes, __________ they can stay healthy and live longer.\"",
      display: { A: "although", B: "but", C: "so", D: "because" },
      correct: "C",
      explanation: "\"<b>so</b>\" giới thiệu kết quả (ăn cá nhiều → sống khỏe và lâu hơn)."
    },
    { id: 8, section: "I", type: "mcq",
      context: "Jane: \"We should play sports or do exercise regularly.\"",
      prompt: "Mark: \"I agree. It is the best way to stay in __________.\"",
      display: { A: "shape", B: "health", C: "fit", D: "look" },
      correct: "A",
      explanation: "\"stay in <b>shape</b>\" (giữ dáng, khỏe mạnh) là cụm cố định."
    },
    { id: 9, section: "I", type: "mcq",
      context: "Doctor: \"Sunscreen, hats, and gloves can protect your skin from sunburn.\"",
      prompt: "Katie: \"Should I also use __________ for my dry lips, doctor?\"",
      display: { A: "headache", B: "lip balm", C: "red spots", D: "dry hair" },
      correct: "B",
      explanation: "\"<b>lip balm</b>\" (son dưỡng môi) phù hợp với ngữ cảnh \"dry lips\" (môi khô)."
    },
    { id: 10, section: "I", type: "mcq",
      context: "Chris: \"Why is Laura going to see the doctor this afternoon?\"",
      prompt: "Jack: \"Because she has a bad __________ after working on the computer for hours.\"",
      display: { A: "diet", B: "headache", C: "vitamin", D: "exercise" },
      correct: "B",
      explanation: "\"a bad <b>headache</b>\" (đau đầu) phù hợp với ngữ cảnh làm việc máy tính nhiều giờ."
    },
    { id: 11, section: "I", type: "mcq",
      context: "Sam: \"Does your father usually __________ jogging before breakfast?\"",
      prompt: "Lily: \"Yes, he does it for half an hour every day.\"",
      display: { A: "go", B: "cycle", C: "ride", D: "take" },
      correct: "A",
      explanation: "\"<b>go</b> jogging\" (đi chạy bộ) là cụm cố định \"go + V-ing\" cho các hoạt động thể thao."
    },
    { id: 12, section: "I", type: "mcq",
      context: "Justin: \"Send me a text message tomorrow to remind me about the football match.\"",
      prompt: "Katie: \"__________\"",
      display: { A: "What's your number?", B: "How dare you?", C: "Thank you, Justin.", D: "It's my pleasure." },
      correct: "A",
      explanation: "\"<b>What's your number?</b>\" là câu hỏi hợp lý để có thể gửi tin nhắn nhắc nhở cho Justin."
    },
    { id: 13, section: "I", type: "mcq",
      context: "Brother: \"I used to eat a lot of fast food and never exercised, so I became overweight.\"",
      prompt: "Sister: \"__________\"",
      display: { A: "He also caught a cold last winter.", B: "He says he feels stronger now.", C: "I don't like his current lifestyle.", D: "That's a bad habit. You should change it." },
      correct: "D",
      explanation: "\"<b>That's a bad habit. You should change it.</b>\" là lời khuyên hợp lý đáp lại việc chia sẻ thói quen ăn uống không lành mạnh."
    },
    { id: 14, section: "I", type: "mcq",
      context: "Peter: \"I eat a lot of junk food, so I put on weight easily.\"",
      prompt: "Doctor: \"__________\"",
      display: { A: "Some herbs can cause side effects.", B: "He forgot to take his medicine yesterday.", C: "Taking care of your body is a smart habit.", D: "You should avoid junk food and follow a balanced diet." },
      correct: "D",
      explanation: "\"<b>You should avoid junk food and follow a balanced diet.</b>\" là lời khuyên trực tiếp và phù hợp nhất của bác sĩ đáp lại việc bệnh nhân ăn nhiều đồ ăn nhanh."
    },

    // ---------------- SECTION II (15-16) — sign & notice ----------------
    { id: 15, section: "II", type: "mcq", image: "signNoLittering",
      prompt: "What does the sign tell you to do?",
      display: {
        A: "You don't have to keep anything clean here.",
        B: "Someone comes to clean this place every day.",
        C: "You cannot enter this area if it is dirty.",
        D: "If you use this area, you must clean it."
      },
      correct: "D",
      explanation: "Biển với hình người bỏ rác vào thùng và cầm chổi nghĩa là phải giữ sạch khu vực khi sử dụng → \"<b>If you use this area, you must clean it.</b>\", đáp án D."
    },
    { id: 16, section: "II", type: "mcq", image: "signBuy1Get1Free",
      prompt: "What does the sign say?",
      display: {
        A: "All cakes are free on Friday.",
        B: "Get a free cake with one you buy on Friday.",
        C: "The sale lasts all day from Monday to Friday.",
        D: "You can still get the discount at 5 p.m. on Saturday."
      },
      correct: "B",
      explanation: "Biển \"BUY 1 GET 1 FREE! Friday ONLY!\" nghĩa là mua 1 tặng 1, chỉ áp dụng thứ Sáu → \"<b>Get a free cake with one you buy on Friday.</b>\", đáp án B."
    },

    // ---------------- SECTION III (17-22) — cloze passage ----------------
    { id: 17, section: "III", type: "mcq", passage: "caloriesCloze", blankNum: 17,
      prompt: "Choose the best word for blank (17).",
      display: { A: "common", B: "certain", C: "central", D: "correct" },
      correct: "B",
      explanation: "\"a <b>certain</b> amount of calories\" (một lượng calo nhất định) là cụm phù hợp."
    },
    { id: 18, section: "III", type: "mcq", passage: "caloriesCloze", blankNum: 18,
      prompt: "Choose the best word for blank (18).",
      display: { A: "stay", B: "make", C: "put", D: "hold" },
      correct: "A",
      explanation: "\"<b>stay</b> in shape\" (giữ dáng, khỏe mạnh) là cụm cố định."
    },
    { id: 19, section: "III", type: "mcq", passage: "caloriesCloze", blankNum: 19,
      prompt: "Choose the best word for blank (19).",
      display: { A: "who", B: "because", C: "which", D: "that" },
      correct: "D",
      explanation: "\"remember <b>that</b> + mệnh đề\" — \"that\" giới thiệu mệnh đề danh từ làm tân ngữ cho \"remember\"."
    },
    { id: 20, section: "III", type: "mcq", passage: "caloriesCloze", blankNum: 20,
      prompt: "Choose the best word for blank (20).",
      display: { A: "few", B: "much", C: "many", D: "little" },
      correct: "B",
      explanation: "\"food\" là danh từ không đếm được nên cần \"<b>much</b>\" (quá nhiều đồ ăn)."
    },
    { id: 21, section: "III", type: "mcq", passage: "caloriesCloze", blankNum: 21,
      prompt: "Choose the best word for blank (21).",
      display: { A: "at", B: "on", C: "in", D: "for" },
      correct: "C",
      explanation: "\"take part <b>in</b> + N\" (tham gia vào) là cấu trúc cố định."
    },
    { id: 22, section: "III", type: "mcq", passage: "caloriesCloze", blankNum: 22,
      prompt: "Choose the best word for blank (22).",
      display: { A: "cleaning", B: "wiping", C: "washing", D: "sweeping" },
      correct: "D",
      explanation: "\"<b>sweeping</b> the floor\" (quét nhà) là cụm phù hợp nhất với \"the floor\" (sàn nhà)."
    },

    // ---------------- SECTION IV (23-28) — reading ----------------
    { id: 23, section: "IV", type: "truefalse", passage: "herbalMedicineReading",
      prompt: "Herbal medicine works faster than most modern pills.",
      correct: "False",
      explanation: "Sai. Bài đọc: \"Herbal medicine works more slowly than most pills.\""
    },
    { id: 24, section: "IV", type: "truefalse", passage: "herbalMedicineReading",
      prompt: "Eating ginger on a regular basis can help people stay healthy.",
      correct: "True",
      explanation: "Đúng. Bài đọc: \"Ginger can help your body. Eating ginger often may help you stay healthy.\""
    },
    { id: 25, section: "IV", type: "truefalse", passage: "herbalMedicineReading",
      prompt: "It is safe to use any amount of rosemary because it is a plant.",
      correct: "False",
      explanation: "Sai. Bài đọc: \"Too much rosemary can be very bad for your stomach. It can make you sick.\""
    },
    { id: 26, section: "IV", type: "truefalse", passage: "herbalMedicineReading",
      prompt: "Common items like coffee and garlic are considered types of herbal medicine.",
      correct: "True",
      explanation: "Đúng. Bài đọc: \"Coffee, garlic, ginseng, and peppermint are all used in herbal medicine.\""
    },
    { id: 27, section: "IV", type: "mcq", passage: "herbalMedicineReading",
      prompt: "What is one specific benefit of using parsley mentioned in the text?",
      display: { A: "It helps you sleep better at night.", B: "It makes your breath smell better.", C: "It makes your stomach feel stronger.", D: "It helps you grow taller." },
      correct: "B",
      explanation: "Bài đọc: \"Another helpful plant is parsley. It can stop bad breath.\" → giúp hơi thở thơm hơn, đáp án B."
    },
    { id: 28, section: "IV", type: "mcq", passage: "herbalMedicineReading",
      prompt: "According to the passage, why is herbal medicine becoming popular again?",
      display: { A: "Because it is much cheaper than seeing a doctor.", B: "Because people want to find pretty flowers like foxglove.", C: "Because people are more interested in their personal health.", D: "Because pills no longer work for most people." },
      correct: "C",
      explanation: "Bài đọc: \"Herbal medicine is becoming popular again, as people become more interested in their health.\" → đáp án C."
    },

    // ---------------- SECTION V (29-34) — word form ----------------
    { id: 29, section: "V", type: "fillblank",
      prompt: "The Healthy Living Club gives us a lot of _____________ advice on diet.",
      wordGiven: "EXPERT", accepted: ["expert"], correct: "expert",
      explanation: "Cần tính từ trước \"advice\", giữ nguyên dạng <b>expert</b> (chuyên gia/thuộc về chuyên gia) vì đã dùng được như tính từ."
    },
    { id: 30, section: "V", type: "fillblank",
      prompt: "The doctor advised him to do exercise regularly because he was _____________.",
      wordGiven: "WEIGHT", accepted: ["overweight"], correct: "overweight",
      explanation: "Cần tính từ sau \"was\". <b>weight</b> (n) → <b>overweight</b> (adj, over- + weight, thừa cân)."
    },
    { id: 31, section: "V", type: "fillblank",
      prompt: "Fast food is very popular, but eating too much of it can be _____________ to our health.",
      wordGiven: "HARM", accepted: ["harmful"], correct: "harmful",
      explanation: "Cần tính từ sau \"be\". <b>harm</b> (n) → <b>harmful</b> (adj, +ful, có hại)."
    },
    { id: 32, section: "V", type: "fillblank",
      prompt: "Doing sports regularly helps students stay _____________ and full of energy.",
      wordGiven: "ACTIVITY", accepted: ["active"], correct: "active",
      explanation: "Cần tính từ sau \"stay\". <b>activity</b> (n) → <b>active</b> (adj, năng động)."
    },
    { id: 33, section: "V", type: "fillblank",
      prompt: "He feels much _____________ and healthier after changing his lifestyle.",
      wordGiven: "STRONG", accepted: ["stronger"], correct: "stronger",
      explanation: "Cần tính từ so sánh hơn sau \"much\" và song song với \"healthier\". <b>strong</b> (adj) → <b>stronger</b> (so sánh hơn)."
    },
    { id: 34, section: "V", type: "fillblank",
      prompt: "The patient needs to take this _____________ after meals.",
      wordGiven: "MEDICATE", accepted: ["medication"], correct: "medication",
      explanation: "Cần danh từ sau \"this\". <b>medicate</b> (v) → <b>medication</b> (n, +ion, thuốc)."
    },

    // ---------------- SECTION VI (35-36) — dictionary entry ----------------
    { id: 35, section: "VI", type: "fillblank", passage: "conditionEntry",
      prompt: "The old house is still in _____________ because the family takes great care of it.",
      accepted: ["excellent condition"], correct: "excellent condition",
      explanation: "Từ điển cho ví dụ \"The car is in <b>excellent condition</b>.\" — khớp với ngữ cảnh ngôi nhà được chăm sóc kỹ."
    },
    { id: 36, section: "VI", type: "fillblank", passage: "conditionEntry",
      prompt: "My grandfather cannot run very fast because he has a permanent _____________.",
      accepted: ["heart condition"], correct: "heart condition",
      explanation: "Từ điển cho ví dụ \"He suffers from a serious <b>heart condition</b>.\" — khớp với ngữ cảnh không thể chạy nhanh vì bệnh tim."
    },

    // ---------------- SECTION VII (37-40) — sentence rewriting ----------------
    { id: 37, section: "VII", type: "rewrite",
      prompt: "It's a good idea to do exercise regularly to stay in shape.",
      starter: "You should",
      accepted: ["you should do exercise regularly to stay in shape"],
      correct: "You should do exercise regularly to stay in shape.",
      explanation: "\"It's a good idea to + V\" (nên làm gì) có thể viết lại bằng \"<b>You should + V</b>\", giữ nguyên nghĩa khuyên nhủ.<br>→ <i>You should do exercise regularly to stay in shape.</i>"
    },
    { id: 38, section: "VII", type: "rewrite",
      prompt: "She eats fruits and veggies every day, but she keeps gaining weight.",
      starter: "Although",
      accepted: ["although she eats fruits and veggies every day, she keeps gaining weight"],
      correct: "Although she eats fruits and veggies every day, she keeps gaining weight.",
      explanation: "\"S1, but S2\" (hai ý tương phản nối bằng \"but\") có thể viết lại bằng \"<b>Although + S1, S2</b>\", giữ nguyên nghĩa tương phản.<br>→ <i>Although she eats fruits and veggies every day, she keeps gaining weight.</i>"
    },
    { id: 39, section: "VII", type: "rewrite",
      prompt: "She often takes paracetamol if she gets a bad headache.",
      starter: "Whenever she suffers",
      accepted: ["whenever she suffers from a bad headache, she often takes paracetamol"],
      correct: "Whenever she suffers from a bad headache, she often takes paracetamol.",
      explanation: "\"if + S + V\" (nếu) có thể viết lại bằng \"<b>Whenever + S + suffers from + N</b>\" (mỗi khi bị), giữ nguyên nghĩa điều kiện lặp lại.<br>→ <i>Whenever she suffers from a bad headache, she often takes paracetamol.</i>"
    },
    { id: 40, section: "VII", type: "rewrite",
      prompt: "Peter eats a lot of junk food, so he puts on weight.",
      starter: "Because Peter",
      accepted: ["because peter eats a lot of junk food, he puts on weight"],
      correct: "Because Peter eats a lot of junk food, he puts on weight.",
      explanation: "\"S1, so S2\" (kết quả) có thể viết lại bằng \"<b>Because + S1, S2</b>\" (nguyên nhân), giữ nguyên quan hệ nhân quả.<br>→ <i>Because Peter eats a lot of junk food, he puts on weight.</i>"
    }
  ]
};
