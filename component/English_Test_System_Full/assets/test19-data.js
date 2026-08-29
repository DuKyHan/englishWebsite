const TEST = {
  id: "test19",
  grade: "Grade 9 — Global Success",
  unit: "Unit 4: Remembering the past",
  title: "Grade 9 · Unit 4: Remembering the past · Test 1",
  duration: 35,
  totalPoints: 10,
  reviewPage: "review_test19.html",
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
    { id: "VI", title: "Look at the dictionary entry of “heritage”. Complete the sentences with no more than three words.", points: "0.5 pt", range: [35, 36] },
    { id: "VII", title: "Rewrite each sentence so that it means almost the same as the sentence printed before it.", points: "1.0 pt", range: [37, 40] }
  ],
  passages: {
    gasLightCloze: "London in the 1880s was a (17) ______ city, lit by a new marvel - gas lamps. Gone were the flickering candles and smoky torches, replaced (18) ________ a network of gas pipes that brought (19) _______ to streets and homes. The lamps cast a warm, yellow glow, illuminating shops, factories, and even grand theaters. This new technology not only improved safety at night but (20) ______ extended the workday and leisure hours. (21) ________, gaslights also had drawbacks. Leaks could cause explosions and fires. The (22) ______ from burning gas could be toxic, leading to health problems. Additionally, the strong light attracted dust and pollution, creating a hazy atmosphere in the city. Despite these challenges, gas lighting remained the dominant form of urban illumination for much of the 19th century, shaping the way Londoners lived and worked.",
    vietnamWarReading: "During the American War in Vietnam, which lasted from the early 1960s until 1975, the country faced many problems. The people were going through hard times as the war was getting worse. They had to deal with bombings and other problems caused by the war every day. In the 1960s, while American soldiers were arriving in Vietnam, Vietnamese soldiers were fighting hard to defend their country. They were facing tough conditions, like not having enough supplies and being attacked often. Many people helped by working on secret tunnels and supporting the soldiers. At the same time, the Vietnamese government was making plans to help win the war. The leaders hoped their efforts would lead to victory. They wished they had more help from other countries and hoped that others would understand their struggle. By 1975, when the war was ending, the Vietnamese people looked back with both pride and sadness. They remembered their sacrifices and were happy that their country was finally free. The victory gave them hope for a better future.",
    heritageEntry: {
      word: "heritage", ipa: "/ˈherɪtɪdʒ/", pos: "noun [uncountable]",
      def: "the history, traditions, buildings and objects that a country or society has had for many years and that are considered an important part of its character",
      examples: [
        "The city is proud of its <b>cultural heritage</b>.",
        "The building is part of our <b>national heritage</b>.",
        "Pollution is a serious threat to our <b>architectural heritage</b>.",
        "We must work together to <b>preserve our heritage</b> for future generations.",
        "The government has designated the area a <b>World Heritage Site</b>."
      ]
    }
  },
  images: {
    signReturnCart: "assets/images/sign_return_cart.jpg",
    signLibraryHours: "assets/images/sign_library_hours.jpg"
  },
  questions: [
    // ---------------- SECTION I (1-14) ----------------
    { id: 1, section: "I", type: "mcq",
      prompt: "Which word has the underlined part pronounced differently from that of the others?",
      display: { A: "promote", B: "occupy", C: "custom", D: "observe" },
      correct: "B",
      explanation: "Phần gạch chân là chữ cái \"o\". \"promote\" /prəˈmoʊt/, \"custom\" /ˈkʌstəm/, \"observe\" /əbˈzɜːrv/ đều có \"o\" phát âm là <b>/ə/</b> (âm câm, không trọng âm). Riêng \"occupy\" /ˈɒkjupaɪ/ có \"o\" phát âm là <b>/ɒ/</b> (có trọng âm) → khác biệt, đáp án B."
    },
    { id: 2, section: "I", type: "mcq",
      prompt: "Which word has the underlined part pronounced differently from that of the others?",
      display: { A: "builder", B: "culture", C: "value", D: "salmon" },
      correct: "D",
      explanation: "Phần gạch chân là chữ cái \"l\". \"builder\" /ˈbɪldər/, \"culture\" /ˈkʌltʃər/, \"value\" /ˈvæljuː/ đều có \"l\" được phát âm rõ ràng. Riêng \"salmon\" /ˈsæmən/ có \"l\" là <b>âm câm</b>, hoàn toàn không được phát âm → khác biệt, đáp án D."
    },
    { id: 3, section: "I", type: "mcq",
      prompt: "Which word has a different stress pattern from that of the others?",
      display: { A: "worship", B: "believe", C: "preserve", D: "promote" },
      correct: "A",
      explanation: "\"believe\" /bɪˈliːv/, \"preserve\" /prɪˈzɜːrv/, \"promote\" /prəˈmoʊt/ đều có trọng âm rơi vào <b>âm tiết 2</b>. Riêng \"worship\" /ˈwɜːrʃɪp/ có trọng âm rơi vào <b>âm tiết 1</b> → khác biệt, đáp án A."
    },
    { id: 4, section: "I", type: "mcq",
      prompt: "Which word has a different stress pattern from that of the others?",
      display: { A: "monument", B: "communal", C: "heritage", D: "occupied" },
      correct: "B",
      explanation: "\"monument\" /ˈmɒnjumənt/, \"heritage\" /ˈherɪtɪdʒ/, \"occupied\" /ˈɒkjupaɪd/ đều có trọng âm rơi vào <b>âm tiết 1</b>. Riêng \"communal\" /kəˈmjuːnl/ có trọng âm rơi vào <b>âm tiết 2</b> → khác biệt, đáp án B."
    },
    { id: 5, section: "I", type: "mcq",
      context: "Nam: \"What were you doing when I called you last night?\"",
      prompt: "Lan: \"I ______ in the kitchen while my family was preparing dinner.\"",
      display: { A: "was cooking", B: "have cooked", C: "cooked", D: "am cooking" },
      correct: "A",
      explanation: "Hai hành động cùng xảy ra song song trong quá khứ dùng <b>quá khứ tiếp diễn</b> (was/were + V-ing) với \"while\": \"I was cooking ... while my family was preparing dinner.\""
    },
    { id: 6, section: "I", type: "mcq",
      context: "Tom: \"Look at that ancient ______! It's so huge and majestic.\"",
      prompt: "Jerry: \"Yes. People say it has many secret passages and hidden chambers.\"",
      display: { A: "room", B: "flat", C: "office", D: "castle" },
      correct: "D",
      explanation: "\"ancient <b>castle</b>\" (lâu đài cổ) phù hợp với hình ảnh to lớn, uy nghi, có nhiều lối đi bí mật và căn phòng ẩn."
    },
    { id: 7, section: "I", type: "mcq",
      context: "An: \"Why is it important to learn about local traditions?\"",
      prompt: "Binh: \"Well, ______ customs helps us feel proud of our culture.\"",
      display: { A: "Ignoring", B: "Destroying", C: "Observing", D: "Disregarding" },
      correct: "C",
      explanation: "\"<b>Observing</b> customs\" (tuân theo/tôn trọng phong tục) phù hợp với việc giúp con người tự hào về văn hóa của mình."
    },
    { id: 8, section: "I", type: "mcq",
      context: "Teacher: \"How did the ancient warriors feel about their land?\"",
      prompt: "Student: \"They stood bravely to ______ it against any enemies.\"",
      display: { A: "protect", B: "recognize", C: "contribute", D: "attack" },
      correct: "A",
      explanation: "\"stood bravely to <b>protect</b> it\" (đứng lên dũng cảm bảo vệ) phù hợp với hành động chống lại kẻ thù để giữ đất đai."
    },
    { id: 9, section: "I", type: "mcq",
      context: "Hoa: \"I missed the important history meeting yesterday.\"",
      prompt: "Minh: \"If only you ______ to that meeting. It was very informative.\"",
      display: { A: "went", B: "had gone", C: "will go", D: "go" },
      correct: "B",
      explanation: "\"If only + S + had + V3\" diễn tả sự tiếc nuối về một việc đã xảy ra (hoặc không xảy ra) trong quá khứ: \"If only you <b>had gone</b> to that meeting\" (giá mà bạn đã đến cuộc họp đó)."
    },
    { id: 10, section: "I", type: "mcq",
      context: "Ba: \"Does your family live in a small apartment?\"",
      prompt: "Hung: \"Yes. My mother often wishes she ______ a bigger house for us.\"",
      display: { A: "will have", B: "has", C: "had", D: "can have" },
      correct: "C",
      explanation: "\"wish + S + V(quá khứ đơn)\" diễn tả điều ước không có thật ở hiện tại: \"wishes she <b>had</b> a bigger house\" (ước có một ngôi nhà lớn hơn)."
    },
    { id: 11, section: "I", type: "mcq",
      context: "Guide: \"Our school programs always ______ the importance of history.\"",
      prompt: "Student: \"That's great. We should never forget our roots.\"",
      display: { A: "contribute", B: "observe", C: "promote", D: "discover" },
      correct: "C",
      explanation: "\"<b>promote</b> the importance of history\" (đề cao/thúc đẩy tầm quan trọng của lịch sử) phù hợp với việc nhắc nhở không quên nguồn cội."
    },
    { id: 12, section: "I", type: "mcq",
      context: "Daisy: \"Would you like to drink some more tea?\"",
      prompt: "Linda: \"______\"",
      display: { A: "You are totally right.", B: "No, I don't like.", C: "Yes, please.", D: "Yes, I like you." },
      correct: "C",
      explanation: "\"<b>Yes, please.</b>\" là cách trả lời lịch sự, tự nhiên khi chấp nhận lời mời uống thêm trà."
    },
    { id: 13, section: "I", type: "mcq",
      context: "Tim: \"Have a great trip to the historical village, Nam!\"",
      prompt: "Nam: \"______\"",
      display: { A: "What's happening?", B: "Thanks! The same to you!", C: "I've no idea.", D: "OK, we do, too." },
      correct: "B",
      explanation: "\"<b>Thanks! The same to you!</b>\" là cách đáp lại lời chúc một cách lịch sự và tự nhiên."
    },
    { id: 14, section: "I", type: "mcq",
      context: "Son: \"______\"",
      prompt: "Lien: \"Sorry, the bus to the museum broke down on the way here.\"",
      display: { A: "How do you go to school every day?", B: "Can you see the bus stop?", C: "Buses are very punctual.", D: "Where have you been? I've been waiting for ages!" },
      correct: "D",
      explanation: "Câu trả lời \"Sorry, the bus ... broke down\" là lời xin lỗi vì đến trễ, phù hợp nhất với câu hỏi thể hiện sự sốt ruột \"<b>Where have you been? I've been waiting for ages!</b>\""
    },

    // ---------------- SECTION II (15-16) — signs/notices ----------------
    { id: 15, section: "II", type: "mcq", image: "signReturnCart",
      prompt: "What does this sign tell you?",
      display: {
        A: "Return the cart at the store entrance.",
        B: "Return the cart to the designated area.",
        C: "Return your cart anywhere in the lot.",
        D: "Keep the cart in your car."
      },
      correct: "B",
      explanation: "Biển ghi \"RETURN THE CART TO THE DESIGNATED AREA\" → trả xe đẩy về đúng khu vực quy định, đáp án B."
    },
    { id: 16, section: "II", type: "mcq", image: "signLibraryHours",
      prompt: "What does this notice say?",
      display: {
        A: "The library closes at 6 PM on Saturdays.",
        B: "The library is open every day.",
        C: "The library is open on Sundays.",
        D: "The library closes at 6 PM on weekdays."
      },
      correct: "A",
      explanation: "Biển ghi \"Sat: 9 AM - 6 PM\" → thư viện đóng cửa lúc 6 giờ chiều vào thứ Bảy, đáp án A."
    },

    // ---------------- SECTION III (17-22) — cloze passage ----------------
    { id: 17, section: "III", type: "mcq", passage: "gasLightCloze", blankNum: 17,
      prompt: "Choose the best word for blank (17).",
      display: { A: "bustle", B: "bustled", C: "bustling", D: "bustlingly" },
      correct: "C",
      explanation: "Cần tính từ đứng trước danh từ \"city\". <b>bustle</b> (v/n) → <b>bustling</b> (adj, +ing): nhộn nhịp, sầm uất."
    },
    { id: 18, section: "III", type: "mcq", passage: "gasLightCloze", blankNum: 18,
      prompt: "Choose the best word for blank (18).",
      display: { A: "in", B: "by", C: "for", D: "with" },
      correct: "B",
      explanation: "\"replaced <b>by</b> a network of gas pipes\" — cấu trúc bị động \"be replaced by\" (được thay thế bởi)."
    },
    { id: 19, section: "III", type: "mcq", passage: "gasLightCloze", blankNum: 19,
      prompt: "Choose the best word for blank (19).",
      display: { A: "fuel", B: "electricity", C: "water", D: "light" },
      correct: "D",
      explanation: "\"brought <b>light</b> to streets and homes\" (mang ánh sáng đến) phù hợp với ngữ cảnh đèn khí gas thắp sáng thành phố."
    },
    { id: 20, section: "III", type: "mcq", passage: "gasLightCloze", blankNum: 20,
      prompt: "Choose the best word for blank (20).",
      display: { A: "too", B: "rather", C: "also", D: "either" },
      correct: "C",
      explanation: "\"not only improved safety ... but <b>also</b> extended the workday\" — cấu trúc cố định \"not only ... but also ...\" (không những... mà còn...)."
    },
    { id: 21, section: "III", type: "mcq", passage: "gasLightCloze", blankNum: 21,
      prompt: "Choose the best word for blank (21).",
      display: { A: "So", B: "Because", C: "However", D: "Therefore" },
      correct: "C",
      explanation: "\"<b>However</b>, gaslights also had drawbacks\" — liên từ chỉ sự tương phản với các lợi ích vừa nêu ở câu trước."
    },
    { id: 22, section: "III", type: "mcq", passage: "gasLightCloze", blankNum: 22,
      prompt: "Choose the best word for blank (22).",
      display: { A: "liquid", B: "vapor", C: "air", D: "fumes" },
      correct: "D",
      explanation: "\"The <b>fumes</b> from burning gas could be toxic\" (khói/khí thải độc hại) phù hợp với ngữ cảnh gây ra vấn đề sức khỏe."
    },

    // ---------------- SECTION IV (23-28) — reading ----------------
    { id: 23, section: "IV", type: "truefalse", passage: "vietnamWarReading",
      prompt: "Bombings and other war-related issues happened daily during the conflict.",
      correct: "True",
      explanation: "Đúng. Bài đọc: \"They had to deal with bombings and other problems caused by the war <b>every day</b>.\""
    },
    { id: 24, section: "IV", type: "truefalse", passage: "vietnamWarReading",
      prompt: "Vietnamese soldiers always had more than enough supplies to fight the enemy.",
      correct: "False",
      explanation: "Sai. Bài đọc: \"They were facing tough conditions, like <b>not having enough supplies</b>...\""
    },
    { id: 25, section: "IV", type: "truefalse", passage: "vietnamWarReading",
      prompt: "Secret tunnels were worked on by many people to support the military efforts.",
      correct: "True",
      explanation: "Đúng. Bài đọc: \"Many people helped by <b>working on secret tunnels</b> and supporting the soldiers.\""
    },
    { id: 26, section: "IV", type: "truefalse", passage: "vietnamWarReading",
      prompt: "Foreign countries gave the Vietnamese leaders all the help they wished for.",
      correct: "False",
      explanation: "Sai. Bài đọc: \"They <b>wished</b> they had more help from other countries\" — nghĩa là họ chưa nhận đủ sự giúp đỡ mong muốn."
    },
    { id: 27, section: "IV", type: "mcq", passage: "vietnamWarReading",
      prompt: "What is the main idea of the passage?",
      display: {
        A: "The tactical importance of secret tunnels in the 1960s.",
        B: "The historical timeline of international support for Vietnam.",
        C: "The struggles, efforts, and feelings of Vietnamese people during the war.",
        D: "The detailed military plans made by the Vietnamese government."
      },
      correct: "C",
      explanation: "Bài đọc kể về những khó khăn, nỗ lực và cảm xúc của người Việt Nam trong suốt cuộc chiến → đáp án C bao quát nhất."
    },
    { id: 28, section: "IV", type: "mcq", passage: "vietnamWarReading",
      prompt: "Which of the following is NOT true according to the passage?",
      display: {
        A: "The war caused many daily problems and difficult times for the people.",
        B: "Vietnamese people felt completely happy without any sadness in 1975.",
        C: "The leaders wished for more international understanding of their struggle.",
        D: "The end of the war in 1975 brought hope for a better future to the people."
      },
      correct: "B",
      explanation: "Bài đọc nói ngược lại: người Việt Nam nhìn lại \"with <b>both pride and sadness</b>\" (vừa tự hào vừa buồn) — không phải hoàn toàn vui vẻ → câu B SAI."
    },

    // ---------------- SECTION V (29-34) — word form ----------------
    { id: 29, section: "V", type: "fillblank",
      prompt: "The Eiffel Tower is a famous ______________ monument in Paris.",
      wordGiven: "history", accepted: ["historical"], correct: "historical",
      explanation: "Cần tính từ đứng trước danh từ \"monument\". <b>history</b> (n) → <b>historical</b> (adj, +ical, thuộc về lịch sử)."
    },
    { id: 30, section: "V", type: "fillblank",
      prompt: "We should ______________ the local customs when visiting a new village.",
      wordGiven: "observation", accepted: ["observe"], correct: "observe",
      explanation: "Cần động từ nguyên mẫu sau \"should\". <b>observation</b> (n) → <b>observe</b> (v, tuân theo/quan sát)."
    },
    { id: 31, section: "V", type: "fillblank",
      prompt: "The victory at Dien Bien Phu led to the ______________ of the country.",
      wordGiven: "liberate", accepted: ["liberation"], correct: "liberation",
      explanation: "Cần danh từ sau mạo từ \"the\". <b>liberate</b> (v) → <b>liberation</b> (n, +ion, sự giải phóng)."
    },
    { id: 32, section: "V", type: "fillblank",
      prompt: "He is a ______________ student who always ranks top in his class.",
      wordGiven: "dedicate", accepted: ["dedicated"], correct: "dedicated",
      explanation: "Cần tính từ đứng trước danh từ \"student\". <b>dedicate</b> (v) → <b>dedicated</b> (adj, +ed, tận tụy, chuyên tâm)."
    },
    { id: 33, section: "V", type: "fillblank",
      prompt: "Many people were ______________ by the beautiful scenery of the festival.",
      wordGiven: "impress", accepted: ["impressed"], correct: "impressed",
      explanation: "Cần tính từ/quá khứ phân từ sau \"were\" (bị động). <b>impress</b> (v) → <b>impressed</b> (adj, +ed, ấn tượng)."
    },
    { id: 34, section: "V", type: "fillblank",
      prompt: "The museum offers many ______________ programs for young children.",
      wordGiven: "educate", accepted: ["educational"], correct: "educational",
      explanation: "Cần tính từ đứng trước danh từ \"programs\". <b>educate</b> (v) → <b>educational</b> (adj, +ional, mang tính giáo dục)."
    },

    // ---------------- SECTION VI (35-36) — dictionary entry ----------------
    { id: 35, section: "VI", type: "fillblank", passage: "heritageEntry",
      prompt: "The local government is organizing a campaign to help ____________________ and ancient traditions in the village.",
      accepted: ["preserve our heritage", "preserve its heritage"], correct: "preserve our heritage",
      explanation: "Từ điển cho ví dụ \"We must work together to <b>preserve our heritage</b> for future generations.\" — khớp với ngữ cảnh chiến dịch bảo tồn di sản của làng."
    },
    { id: 36, section: "VI", type: "fillblank", passage: "heritageEntry",
      prompt: "Ha Long Bay was recognized as a ____________________ by UNESCO because of its outstanding natural beauty.",
      accepted: ["world heritage site"], correct: "World Heritage Site",
      explanation: "Từ điển cho ví dụ \"The government has designated the area a <b>World Heritage Site</b>.\" — khớp với việc UNESCO công nhận Vịnh Hạ Long."
    },

    // ---------------- SECTION VII (37-40) — sentence rewriting ----------------
    { id: 37, section: "VII", type: "rewrite",
      prompt: "I woke up and then I saw that it was snowing.",
      starter: "When",
      accepted: ["when i woke up, i saw that it was snowing"],
      correct: "When I woke up, I saw that it was snowing.",
      explanation: "Hai hành động liên tiếp nối bằng \"and then\" có thể viết lại bằng \"<b>When + S + V(quá khứ), S + V(quá khứ)</b>\" — cùng diễn tả trình tự thời gian.<br>→ <i>When I woke up, I saw that it was snowing.</i>"
    },
    { id: 38, section: "VII", type: "rewrite",
      prompt: "Because the house was damaged, nobody lived in it.",
      starter: "The house was not",
      accepted: ["the house was not lived in because it was damaged"],
      correct: "The house was not lived in because it was damaged.",
      explanation: "Chuyển câu chủ động \"nobody lived in it\" sang <b>bị động</b>: \"the house was not lived in\" — giữ nguyên mệnh đề lý do \"because it was damaged\".<br>→ <i>The house was not lived in because it was damaged.</i>"
    },
    { id: 39, section: "VII", type: "rewrite",
      prompt: "In the old days, our school schedule had only morning lessons.",
      starter: "In the old days, our school schedule consisted",
      accepted: ["in the old days, our school schedule consisted of only morning lessons"],
      correct: "In the old days, our school schedule consisted of only morning lessons.",
      explanation: "\"have + N\" (có gì) có thể thay bằng \"<b>consist of + N</b>\" (bao gồm) — cùng diễn tả thành phần của một sự vật.<br>→ <i>In the old days, our school schedule consisted of only morning lessons.</i>"
    },
    { id: 40, section: "VII", type: "rewrite",
      prompt: "I regret not taking more photos of the beautiful scenery.",
      starter: "I wish",
      accepted: ["i wish i had taken more photos of the beautiful scenery"],
      correct: "I wish I had taken more photos of the beautiful scenery.",
      explanation: "\"regret + not V-ing (quá khứ)\" chuyển thành \"<b>wish + S + had + V3</b>\" (điều ước tiếc nuối về quá khứ) — cùng diễn tả sự hối tiếc.<br>→ <i>I wish I had taken more photos of the beautiful scenery.</i>"
    }
  ]
};
