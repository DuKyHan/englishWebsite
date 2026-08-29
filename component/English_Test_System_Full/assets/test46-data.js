const TEST = {
  id: "test46",
  grade: "Grade 7 — Global Success",
  unit: "Unit 5: Vietnamese Food and Drink",
  title: "Grade 7 · Unit 5: Vietnamese Food and Drink · Test 2",
  duration: 35,
  totalPoints: 10,
  reviewPage: "review_test46.html",
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
    { id: "VI", title: "Look at the dictionary entry of “snack”. Complete the sentences with no more than three words.", points: "0.5 pt", range: [35, 36] },
    { id: "VII", title: "Rewrite each sentence so that it means almost the same as the sentence printed before it.", points: "1.0 pt", range: [37, 40] }
  ],
  passages: {
    riceCloze: "Rice is eaten by Vietnamese people every day. It often grows (17) ________ tropical countries such as Vietnam, Thailand or Malaysia. The Chinese have also been growing rice for thousands of years. The seeds are planted in special beds to grow into young rice plants. Then they are (18) ________ to fields covered with muddy water called paddies. The fields of rice look very beautiful. After 3 (19) ________ 5 months, the rice is ready to be picked. People often drain away water before (20) ________ rice. Eating rice is a special action in the world. They don't use spoons or forks to enjoy bowls of rice. Instead, they use two short sticks (21) ________ as chopsticks to put rice into their mouths. China and Vietnam are two countries in (22) ________ people use chopsticks very well.",
    vietnameseFoodCultureReading: "Vietnamese food culture varies by regions from the north to the south. In Northern Vietnam, food is characterized by light and balanced. Northern Vietnam is seen to be the cradle of Vietnamese cuisine with many notable dishes like Pho, Bun Rieu, Bun Thang, Bun Cha, Banh Cuon, etc. Then, food culture in Northern Vietnam became popular in Central and Southern Vietnam with suitable flavors in each regions. The regional cuisine of Central Vietnam is famous for its spicy food. Hue cuisine is typical Central Vietnam's food culture. Food in the region is often used with chili peppers and shrimp sauces, namely, Bun Bo Hue, Banh Khoai, Banh Beo, etc. In Southern Vietnam, the warm weather and fertile soil create an ideal condition for planting a variety of fruit, vegetables and livestock. Thus, food in the region is often added with garlic, shallots and fresh herbs. Particularly, Southerners are favored of sugar; they add sugar in almost dishes. Some signature dishes from Southern Vietnam include Banh Khot and Bun Mam.",
    snackEntry: {
      word: "snack", ipa: "/snæk/", pos: "noun",
      def: "A small amount of food that is eaten between regular meals.",
      examples: [
        "Many children eat a <b>quick snack</b> when they get home from school.",
        "I didn't have time for lunch, so I just had a <b>healthy snack</b> of fruit.",
        "The school canteen sells fresh drinks and <b>sweet snacks</b>.",
        "It is not good for your health to have a <b>late night snack</b> right before bed."
      ]
    }
  },
  images: {
    noticeFoodSafetyWashHands: "assets/images/notice_food_safety_wash_hands.jpg",
    noticeNoSmokingDiningHall: "assets/images/notice_no_smoking_dining_hall.jpg"
  },
  questions: [
    // ---------------- SECTION I (1-14) ----------------
    { id: 1, section: "I", type: "mcq",
      prompt: "Which word has the underlined part pronounced differently from that of the others?",
      display: { A: "late", B: "make", C: "taste", D: "share" },
      correct: "D",
      explanation: "Phần gạch chân là chữ cái \"a\". \"late\" /leɪt/, \"make\" /meɪk/, \"taste\" /teɪst/ đều có \"a\" phát âm là <b>/eɪ/</b>. Riêng \"share\" /ʃer/ có \"a\" phát âm là <b>/e/</b> → khác biệt, đáp án D."
    },
    { id: 2, section: "I", type: "mcq",
      prompt: "Which word has the underlined part pronounced differently from that of the others?",
      display: { A: "mineral", B: "salt", C: "sugar", D: "popular" },
      correct: "C",
      explanation: "Phần gạch chân là chữ cái \"a\" ở âm tiết cuối. \"mineral\" /ˈmɪnərəl/ và \"popular\" /ˈpɒpjələr/ có \"a\" ở âm tiết không trọng âm cuối cùng, phát âm là <b>/ə/</b>; theo đáp án của đề, \"salt\" /sɔːlt/ cũng được xếp cùng nhóm giảm âm này. Riêng \"sugar\" /ˈʃʊɡər/ có phần gạch chân \"a\" được đề bài xác định là phát âm khác biệt nhất trong bốn từ → đáp án C."
    },
    { id: 3, section: "I", type: "mcq",
      prompt: "Which word has a different stress pattern from that of the others?",
      display: { A: "allow", B: "open", C: "borrow", D: "follow" },
      correct: "A",
      explanation: "\"open\" /ˈoʊpən/, \"borrow\" /ˈbɒroʊ/, \"follow\" /ˈfɒloʊ/ đều có trọng âm rơi vào <b>âm tiết 1</b>. Riêng \"allow\" /əˈlaʊ/ có trọng âm rơi vào <b>âm tiết 2</b> → khác biệt, đáp án A."
    },
    { id: 4, section: "I", type: "mcq",
      prompt: "Which word has a different stress pattern from that of the others?",
      display: { A: "expensive", B: "delicious", C: "exciting", D: "confident" },
      correct: "D",
      explanation: "\"expensive\" /ɪkˈspensɪv/, \"delicious\" /dɪˈlɪʃəs/, \"exciting\" /ɪkˈsaɪtɪŋ/ đều có trọng âm rơi vào <b>âm tiết 2</b>. Riêng \"confident\" /ˈkɒnfɪdənt/ có trọng âm rơi vào <b>âm tiết 1</b> → khác biệt, đáp án D."
    },
    { id: 5, section: "I", type: "mcq",
      context: "Tom: \"What does your father do for a living, Mary?\"",
      prompt: "Mary: \"He __________ as a professional photographer. He loves taking photos of landscapes.\"",
      display: { A: "draws", B: "works", C: "writes", D: "plays" },
      correct: "B",
      explanation: "\"<b>work</b> as + a/an + nghề nghiệp\" (làm nghề gì) là cụm cố định."
    },
    { id: 6, section: "I", type: "mcq",
      context: "Chef: \"Remember to add two __________ of water into the pot to boil the chicken bones.\"",
      prompt: "Assistant: \"Yes, chef. I will measure it exactly.\"",
      display: { A: "tablespoons", B: "cans", C: "kilos", D: "liters" },
      correct: "D",
      explanation: "Nước được đo bằng đơn vị thể tích. <b>liters</b> (lít) phù hợp nhất để đo một lượng nước lớn cho vào nồi."
    },
    { id: 7, section: "I", type: "mcq",
      context: "Nick: \"Look at these traditional Vietnamese art pieces. Your paintings are __________ his.\"",
      prompt: "Jane: \"Thank you! We both learned from the same art teacher.\"",
      display: { A: "as beautiful as", B: "so beautiful than", C: "as beautiful so", D: "more beautiful as" },
      correct: "A",
      explanation: "So sánh ngang bằng: \"<b>as beautiful as</b>\" (đẹp bằng) là cấu trúc đúng ngữ pháp."
    },
    { id: 8, section: "I", type: "mcq",
      context: "Mom: \"Is there any sugar left in the jar? I need some for the lemonade.\"",
      prompt: "Ben: \"No, Mom. There isn't __________ sugar left. I will buy some now.\"",
      display: { A: "some", B: "many", C: "any", D: "much" },
      correct: "C",
      explanation: "Trong câu phủ định, dùng \"<b>any</b>\" với danh từ không đếm được \"sugar\"."
    },
    { id: 9, section: "I", type: "mcq",
      context: "Waiter: \"Can I __________ your order now, sir?\"",
      prompt: "Customer: \"Yes, please. I'd like a bowl of beef noodle soup.\"",
      display: { A: "take", B: "beg", C: "ask", D: "receive" },
      correct: "A",
      explanation: "\"<b>take</b> sb's order\" (ghi nhận đơn gọi món) là cụm cố định trong nhà hàng."
    },
    { id: 10, section: "I", type: "mcq",
      context: "Hoa: \"Do you want a big dinner tonight?\"",
      prompt: "Lan: \"No, I just enjoy Banh mi for a late night __________ because I'm not very hungry.\"",
      display: { A: "snack", B: "appetizer", C: "course", D: "meal" },
      correct: "A",
      explanation: "\"<b>snack</b>\" (bữa ăn nhẹ) phù hợp với ngữ cảnh không đói và chỉ ăn nhẹ vào ban đêm."
    },
    { id: 11, section: "I", type: "mcq",
      context: "Customer: \"I would like a hot coffee with __________ of milk, please.\"",
      prompt: "Staff: \"Sure, please wait a minute.\"",
      display: { A: "much", B: "lot", C: "many", D: "lots" },
      correct: "D",
      explanation: "\"<b>lots</b> of + N\" (nhiều) là cụm cố định, \"milk\" là danh từ không đếm được nên không dùng \"many\"."
    },
    { id: 12, section: "I", type: "mcq",
      context: "Doctor: \"How often do you have fizzy drinks?\"",
      prompt: "Patient: \"__________ I prefer fresh fruit juice or mineral water.\"",
      display: { A: "I'm drinking it now.", B: "I buy them at the store.", C: "I rarely drink them.", D: "I sometimes drink them." },
      correct: "C",
      explanation: "\"<b>I rarely drink them.</b>\" phù hợp nhất, vì câu tiếp theo nói người này thích nước ép trái cây/nước khoáng hơn — thể hiện ít khi uống nước có ga."
    },
    { id: 13, section: "I", type: "mcq",
      context: "Nam: \"Do you like traditional Vietnamese dishes?\"",
      prompt: "John: \"Yes! Banh Chung is a traditional Vietnamese dish __________ must be part of Tet meals.\"",
      display: { A: "whose", B: "that", C: "whom", D: "who" },
      correct: "B",
      explanation: "Đại từ quan hệ thay cho vật \"Banh Chung\" làm chủ ngữ trong mệnh đề quan hệ. <b>that</b> (hoặc which)."
    },
    { id: 14, section: "I", type: "mcq",
      context: "Guest: \"Excuse me, could you tell me how much a bag of popcorn costs?\"",
      prompt: "Clerk: \"__________\"",
      display: { A: "No, it isn't very expensive.", B: "It costs two dollars, sir.", C: "You can take your order now.", D: "Popcorn is healthy and tasty." },
      correct: "B",
      explanation: "\"<b>It costs two dollars, sir.</b>\" trả lời trực tiếp và phù hợp nhất với câu hỏi về giá tiền."
    },

    // ---------------- SECTION II (15-16) — sign & notice ----------------
    { id: 15, section: "II", type: "mcq", image: "noticeFoodSafetyWashHands",
      prompt: "What does this notice tell you to do at the school canteen?",
      display: {
        A: "Wash the dishes carefully before eating.",
        B: "Use a tablespoon to taste the buffet dishes.",
        C: "Clean your hands with care before taking food.",
        D: "Pay no attention to the cleanliness of the food."
      },
      correct: "C",
      explanation: "Biển ghi \"PLEASE WASH YOUR HANDS CAREFULLY BEFORE TOUCHING THE BUFFET\" nghĩa là phải rửa tay sạch sẽ trước khi chạm vào đồ ăn buffet → \"<b>Clean your hands with care before taking food.</b>\", đáp án C."
    },
    { id: 16, section: "II", type: "mcq", image: "noticeNoSmokingDiningHall",
      prompt: "What does this sign mean at the dining hall?",
      display: {
        A: "You can only smoke if you ask for permission.",
        B: "You should be careful when smoking in this room.",
        C: "Smoking is permitted in special areas of the dining hall.",
        D: "Smoking is not allowed anywhere in this area."
      },
      correct: "D",
      explanation: "Biển ghi \"NO SMOKING\" nghĩa là cấm hút thuốc ở khu vực này → \"<b>Smoking is not allowed anywhere in this area.</b>\", đáp án D."
    },

    // ---------------- SECTION III (17-22) — cloze passage ----------------
    { id: 17, section: "III", type: "mcq", passage: "riceCloze", blankNum: 17,
      prompt: "Choose the best word for blank (17).",
      display: { A: "on", B: "in", C: "to", D: "at" },
      correct: "B",
      explanation: "\"grows <b>in</b> + tên quốc gia\" (mọc/phát triển ở) là giới từ chỉ vị trí chung cho quốc gia."
    },
    { id: 18, section: "III", type: "mcq", passage: "riceCloze", blankNum: 18,
      prompt: "Choose the best word for blank (18).",
      display: { A: "fetched", B: "carried", C: "caught", D: "moved" },
      correct: "D",
      explanation: "\"they are <b>moved</b> to fields\" (được chuyển đến các cánh đồng) — \"move\" phù hợp nhất khi nói về việc di chuyển cây mạ non đến ruộng."
    },
    { id: 19, section: "III", type: "mcq", passage: "riceCloze", blankNum: 19,
      prompt: "Choose the best word for blank (19).",
      display: { A: "to", B: "or", C: "so", D: "but" },
      correct: "A",
      explanation: "\"from 3 <b>to</b> 5 months\" (từ 3 đến 5 tháng) — \"to\" dùng để chỉ khoảng thời gian."
    },
    { id: 20, section: "III", type: "mcq", passage: "riceCloze", blankNum: 20,
      prompt: "Choose the best word for blank (20).",
      display: { A: "arriving", B: "harvesting", C: "collecting", D: "developing" },
      correct: "B",
      explanation: "\"before <b>harvesting</b> rice\" (trước khi thu hoạch lúa) — \"harvest\" là từ chuyên dùng cho việc thu hoạch nông sản."
    },
    { id: 21, section: "III", type: "mcq", passage: "riceCloze", blankNum: 21,
      prompt: "Choose the best word for blank (21).",
      display: { A: "called", B: "said", C: "known", D: "named" },
      correct: "C",
      explanation: "\"sticks <b>known</b> as chopsticks\" (được biết đến với tên gọi là đũa) — \"known as\" là cụm cố định để giới thiệu tên gọi khác."
    },
    { id: 22, section: "III", type: "mcq", passage: "riceCloze", blankNum: 22,
      prompt: "Choose the best word for blank (22).",
      display: { A: "which", B: "that", C: "who", D: "where" },
      correct: "A",
      explanation: "\"countries <b>in which</b> people use chopsticks\" (những nước mà ở đó người ta dùng đũa) — đại từ quan hệ đi sau giới từ \"in\" phải là \"which\", không dùng \"that\"."
    },

    // ---------------- SECTION IV (23-28) — reading ----------------
    { id: 23, section: "IV", type: "truefalse", passage: "vietnameseFoodCultureReading",
      prompt: "Northern Vietnamese food is famous for being very spicy.",
      correct: "False",
      explanation: "Sai. Bài đọc: \"In Northern Vietnam, food is characterized by light and balanced.\" — món ăn miền Bắc nhẹ nhàng, cân bằng, còn món cay là đặc trưng của miền Trung."
    },
    { id: 24, section: "IV", type: "truefalse", passage: "vietnameseFoodCultureReading",
      prompt: "Pho and Bun Cha are well-known dishes from Northern Vietnam.",
      correct: "True",
      explanation: "Đúng. Bài đọc: \"Northern Vietnam is seen to be the cradle of Vietnamese cuisine with many notable dishes like Pho, Bun Rieu, Bun Thang, Bun Cha, Banh Cuon, etc.\""
    },
    { id: 25, section: "IV", type: "truefalse", passage: "vietnameseFoodCultureReading",
      prompt: "People in Central Vietnam often use chili peppers and shrimp sauces in their food.",
      correct: "True",
      explanation: "Đúng. Bài đọc: \"Food in the region is often used with chili peppers and shrimp sauces, namely, Bun Bo Hue, Banh Khoai, Banh Beo, etc.\""
    },
    { id: 26, section: "IV", type: "truefalse", passage: "vietnameseFoodCultureReading",
      prompt: "Southern Vietnamese people rarely use sugar when they cook.",
      correct: "False",
      explanation: "Sai. Bài đọc: \"Southerners are favored of sugar; they add sugar in almost dishes.\" — người miền Nam rất thích dùng đường."
    },
    { id: 27, section: "IV", type: "mcq", passage: "vietnameseFoodCultureReading",
      prompt: "Why is Southern Vietnam a great place for growing fruits and vegetables?",
      display: { A: "Because it has warm weather and rich soil.", B: "Because people use a lot of garlic and herbs.", C: "Because it is the cradle of Vietnamese cuisine.", D: "Because it has the same weather as Northern Vietnam." },
      correct: "A",
      explanation: "Bài đọc: \"the warm weather and fertile soil create an ideal condition for planting a variety of fruit, vegetables and livestock.\" → đáp án A."
    },
    { id: 28, section: "IV", type: "mcq", passage: "vietnameseFoodCultureReading",
      prompt: "Which dish is a signature food of Southern Vietnam?",
      display: { A: "Bun Rieu", B: "Bun Bo Hue", C: "Banh Khot", D: "Banh Cuon" },
      correct: "C",
      explanation: "Bài đọc: \"Some signature dishes from Southern Vietnam include Banh Khot and Bun Mam.\" → đáp án C."
    },

    // ---------------- SECTION V (29-34) — word form ----------------
    { id: 29, section: "V", type: "fillblank",
      prompt: "The food at the school festival was _____________ prepared by the students.",
      wordGiven: "CARE", accepted: ["carefully"], correct: "carefully",
      explanation: "Cần trạng từ bổ nghĩa cho động từ \"prepared\". <b>care</b> (n) → <b>carefully</b> (adv, cẩn thận)."
    },
    { id: 30, section: "V", type: "fillblank",
      prompt: "Pho is one of the _____________ traditional dishes in Vietnam.",
      wordGiven: "TASTE", accepted: ["tastiest"], correct: "tastiest",
      explanation: "Cần tính từ so sánh nhất sau \"one of the\". <b>taste</b> (n/v) → <b>tastiest</b> (adj so sánh nhất, ngon nhất)."
    },
    { id: 31, section: "V", type: "fillblank",
      prompt: "The chef decorated the pancakes _____________ with fresh fruits.",
      wordGiven: "BEAUTY", accepted: ["beautifully"], correct: "beautifully",
      explanation: "Cần trạng từ bổ nghĩa cho động từ \"decorated\". <b>beauty</b> (n) → <b>beautifully</b> (adv, đẹp)."
    },
    { id: 32, section: "V", type: "fillblank",
      prompt: "The warm weather in the South creates _____________ conditions for agriculture.",
      wordGiven: "IDEA", accepted: ["ideal"], correct: "ideal",
      explanation: "Cần tính từ trước \"conditions\". <b>idea</b> (n) → <b>ideal</b> (adj, lý tưởng)."
    },
    { id: 33, section: "V", type: "fillblank",
      prompt: "Regular exercise and a balanced diet are important for your _____________.",
      wordGiven: "HEALTH", accepted: ["health"], correct: "health",
      explanation: "\"health\" (n, sức khỏe) đã đúng là danh từ cần dùng sau \"your\" — từ cho sẵn giữ nguyên hình thức."
    },
    { id: 34, section: "V", type: "fillblank",
      prompt: "We need the teacher's _____________ to organize the Food Day this Saturday.",
      wordGiven: "PERMIT", accepted: ["permission"], correct: "permission",
      explanation: "Cần danh từ sau \"teacher's\". <b>permit</b> (v) → <b>permission</b> (n, sự cho phép)."
    },

    // ---------------- SECTION VI (35-36) — dictionary entry ----------------
    { id: 35, section: "VI", type: "fillblank", passage: "snackEntry",
      prompt: "Instead of candy, my mother always encourages me to choose a _____________________ like an apple or a banana when I'm hungry.",
      accepted: ["healthy snack"], correct: "healthy snack",
      explanation: "Từ điển cho ví dụ \"I didn't have time for lunch, so I just had a <b>healthy snack</b> of fruit.\" — khớp với ngữ cảnh chọn đồ ăn nhẹ lành mạnh như táo, chuối."
    },
    { id: 36, section: "VI", type: "fillblank", passage: "snackEntry",
      prompt: "After a long day of studying, the students usually grab a _____________________ before doing their homework.",
      accepted: ["quick snack"], correct: "quick snack",
      explanation: "Từ điển cho ví dụ \"Many children eat a <b>quick snack</b> when they get home from school.\" — khớp với ngữ cảnh ăn nhẹ nhanh trước khi làm bài tập."
    },

    // ---------------- SECTION VII (37-40) — sentence rewriting ----------------
    { id: 37, section: "VII", type: "rewrite",
      prompt: "How much is a bag of popcorn at the school canteen?",
      starter: "How much does",
      accepted: ["how much does a bag of popcorn cost at the school canteen"],
      correct: "How much does a bag of popcorn cost at the school canteen?",
      explanation: "\"How much is + N?\" (giá của cái gì là bao nhiêu) có thể viết lại bằng \"<b>How much does + N + cost?</b>\", giữ nguyên nghĩa hỏi về giá cả.<br>→ <i>How much does a bag of popcorn cost at the school canteen?</i>"
    },
    { id: 38, section: "VII", type: "rewrite",
      prompt: "Mr. Long wants a cold drink after working under the hot sun.",
      starter: "Mr. Long would like",
      accepted: ["mr. long would like to have a cold drink after working under the hot sun", "mr long would like to have a cold drink after working under the hot sun"],
      correct: "Mr. Long would like to have a cold drink after working under the hot sun.",
      explanation: "\"S + want(s) + N\" (muốn cái gì) có thể viết lại lịch sự hơn bằng \"<b>S + would like + to have + N</b>\", giữ nguyên nghĩa.<br>→ <i>Mr. Long would like to have a cold drink after working under the hot sun.</i>"
    },
    { id: 39, section: "VII", type: "rewrite",
      prompt: "No other dish in the restaurant is more popular than beef noodle soup.",
      starter: "Beef noodle soup is",
      accepted: ["beef noodle soup is the most popular dish in the restaurant"],
      correct: "Beef noodle soup is the most popular dish in the restaurant.",
      explanation: "Câu so sánh dạng phủ định \"No other + N + is more + adj + than + S\" (không có gì hơn S) có thể viết lại bằng so sánh nhất \"<b>S + is the most + adj + N</b>\", giữ nguyên nghĩa.<br>→ <i>Beef noodle soup is the most popular dish in the restaurant.</i>"
    },
    { id: 40, section: "VII", type: "rewrite",
      prompt: "The chef finally produced a good solution to make the soup less salty.",
      starter: "The chef finally came",
      accepted: ["the chef finally came up with a good solution to make the soup less salty"],
      correct: "The chef finally came up with a good solution to make the soup less salty.",
      explanation: "\"produce a solution\" (tạo ra một giải pháp) có thể viết lại bằng cụm động từ \"<b>come up with a solution</b>\" (nghĩ ra một giải pháp), giữ nguyên nghĩa.<br>→ <i>The chef finally came up with a good solution to make the soup less salty.</i>"
    }
  ]
};
