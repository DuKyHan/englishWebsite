const TEST = {
  id: "test38",
  grade: "Grade 7 — Global Success",
  unit: "Unit 1: Hobbies",
  title: "Grade 7 · Unit 1: Hobbies · Test 2",
  duration: 35,
  totalPoints: 10,
  reviewPage: "review_test38.html",
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
    { id: "VI", title: "Look at the dictionary entry of “pleasure”. Complete the sentences with no more than three words.", points: "0.5 pt", range: [35, 36] },
    { id: "VII", title: "Rewrite each sentence so that it means almost the same as the sentence printed before it.", points: "1.0 pt", range: [37, 40] }
  ],
  passages: {
    gardeningCloze: "Gardening gives us an opportunity to refresh our mind after working or studying time. It brings us the green plants and flowers and fills our lungs (17) ________ pure oxygen. The outdoor environment and fresh air are good (18) ________ our health. We can get great pleasure from gardening, growing flowers and some vegetables of the season. Gardening not only offers us the beauty of flowers and plants (19) ________ also brings us benefits. A family with a vegetable garden can save (20) ________ lot of money when they grow vegetables rather than buy them from outside. Vegetable gardening is very (21) ________ because it makes us feel better, less stressed, and (22) ________ delicious vegetables for us to eat.",
    readingHobbyReading: "Reading enables me to learn about so many things that I do not know. I can learn about how people lived in past days, the wonders of the world, space travel, human achievements, huge whales, tiny viruses and other fascinating things of our world. Reading helps me discover new things and widen my knowledge. Books provide me with so much information and many facts. They have certainly helped me in my daily life. I am better aware of coping with living. Libraries are the source from which I get the books I need. My relatives and my friends also give me books on special occasions. I will certainly continue my reading hobby. Beside being more informed about the world, I also spend my time profitably. It is indeed a good hobby.",
    pleasureEntry: {
      word: "pleasure", ipa: "/ˈpleʒ.ər/", pos: "noun",
      def: "A feeling of happy satisfaction and enjoyment.",
      examples: [
        "It gives me great <b>pleasure to welcome</b> our guest speaker tonight.",
        "He takes <b>pleasure in reading</b> comic books before going to bed.",
        "\"Thank you very much for your help!\" - \"My <b>pleasure</b>!\" / \"It's <b>a pleasure</b>!\"",
        "Are you travelling to Paris for business or <b>for pleasure</b>?"
      ]
    }
  },
  images: {
    signNoCellphones: "assets/images/sign_no_cellphones.jpg",
    noticeChildrenUnder12: "assets/images/notice_children_under12.jpg"
  },
  questions: [
    // ---------------- SECTION I (1-14) ----------------
    { id: 1, section: "I", type: "mcq",
      prompt: "Which word has the underlined part pronounced differently from that of the others?",
      display: { A: "early", B: "easy", C: "teach", D: "reading" },
      correct: "A",
      explanation: "Phần gạch chân là \"ea\". \"easy\" /ˈiːzi/, \"teach\" /tiːtʃ/, \"reading\" /ˈriːdɪŋ/ đều có \"ea\" phát âm là <b>/iː/</b>. Riêng \"early\" /ˈɜːrli/ có \"ea\" phát âm là <b>/ɜːr/</b> → khác biệt, đáp án A."
    },
    { id: 2, section: "I", type: "mcq",
      prompt: "Which word has the underlined part pronounced differently from that of the others?",
      display: { A: "upstairs", B: "truth", C: "club", D: "bug" },
      correct: "B",
      explanation: "Phần gạch chân là chữ cái \"u\". \"upstairs\" /ʌpˈsterz/, \"club\" /klʌb/, \"bug\" /bʌɡ/ đều có \"u\" phát âm là <b>/ʌ/</b>. Riêng \"truth\" /truːθ/ có \"u\" phát âm là <b>/uː/</b> → khác biệt, đáp án B."
    },
    { id: 3, section: "I", type: "mcq",
      prompt: "Which word has a different stress pattern from that of the others?",
      display: { A: "divide", B: "hobby", C: "belong", D: "begin" },
      correct: "B",
      explanation: "\"divide\" /dɪˈvaɪd/, \"belong\" /bɪˈlɒŋ/, \"begin\" /bɪˈɡɪn/ đều có trọng âm rơi vào <b>âm tiết 2</b>. Riêng \"hobby\" /ˈhɒbi/ có trọng âm rơi vào <b>âm tiết 1</b> → khác biệt, đáp án B."
    },
    { id: 4, section: "I", type: "mcq",
      prompt: "Which word has a different stress pattern from that of the others?",
      display: { A: "regular", B: "furniture", C: "violin", D: "timetable" },
      correct: "C",
      explanation: "\"regular\" /ˈreɡjələr/, \"furniture\" /ˈfɜːrnɪtʃər/, \"timetable\" /ˈtaɪmteɪbl/ đều có trọng âm rơi vào <b>âm tiết 1</b>. Riêng \"violin\" /ˌvaɪəˈlɪn/ có trọng âm rơi vào <b>âm tiết cuối</b> → khác biệt, đáp án C."
    },
    { id: 5, section: "I", type: "mcq",
      context: "Jack: \"Why don't you try ice-skating with us this afternoon?\"",
      prompt: "Tom: \"No, thanks. I think it is too __________ for me.\"",
      display: { A: "endangered", B: "danger", C: "dangerous", D: "in danger" },
      correct: "C",
      explanation: "Cần tính từ sau \"too\". <b>danger</b> (n) → <b>dangerous</b> (adj, +ous, nguy hiểm)."
    },
    { id: 6, section: "I", type: "mcq",
      context: "Lucy: \"If you choose sewing as your hobby, what can you do?\"",
      prompt: "Mary: \"I can __________ my own clothes and wear them to school.\"",
      display: { A: "take", B: "do", C: "make", D: "get" },
      correct: "C",
      explanation: "\"<b>make</b> clothes\" (may/làm quần áo) phù hợp với sở thích may vá (sewing)."
    },
    { id: 7, section: "I", type: "mcq",
      context: "Minh: \"What does your sister love doing in her leisure time?\"",
      prompt: "An: \"She adores watching __________ on TV. She laughs all day.\"",
      display: { A: "painting", B: "comedies", C: "horse riding", D: "gardening" },
      correct: "B",
      explanation: "\"watching <b>comedies</b>\" (xem phim hài) phù hợp với việc \"laughs all day\" (cười cả ngày)."
    },
    { id: 8, section: "I", type: "mcq",
      context: "Peter: \"Is your little brother interested __________ collecting old coins?\"",
      prompt: "Jane: \"Yes, he has a big collection of coins from Europe.\"",
      display: { A: "at", B: "in", C: "on", D: "of" },
      correct: "B",
      explanation: "\"be interested <b>in</b> + V-ing\" (thích thú với việc gì) là cấu trúc cố định."
    },
    { id: 9, section: "I", type: "mcq",
      context: "Anna: \"Can I join the cooking lesson tomorrow morning?\"",
      prompt: "Chef: \"Sure! The lesson __________ at 9 a.m. everyday, so don't be late.\"",
      display: { A: "start", B: "will start", C: "started", D: "starts" },
      correct: "D",
      explanation: "Diễn tả một sự việc lặp lại thường xuyên (\"everyday\") cần thì hiện tại đơn, chủ ngữ số ít \"The lesson\" → \"<b>starts</b>\"."
    },
    { id: 10, section: "I", type: "mcq",
      context: "Doctor: \"I think you should take up swimming this summer.\"",
      prompt: "John: \"I will, __________ it is very suitable for my health condition.\"",
      display: { A: "because", B: "so", C: "although", D: "but" },
      correct: "A",
      explanation: "\"<b>because</b>\" giới thiệu lý do cho quyết định \"I will (take up swimming)\"."
    },
    { id: 11, section: "I", type: "mcq",
      context: "Nam: \"Does Kathy like __________ models of airplanes and ships?\"",
      prompt: "Ba: \"Yes, she spends hours in her room doing that.\"",
      display: { A: "making", B: "makes", C: "to making", D: "make" },
      correct: "A",
      explanation: "\"like + V-ing\" (thích làm gì) là cấu trúc phổ biến. \"<b>making</b> models\" (làm mô hình)."
    },
    { id: 12, section: "I", type: "mcq",
      context: "Nam: \"Who shares the hobby of collecting key rings with you?\"",
      prompt: "Long: \"__________\"",
      display: { A: "My brother sharing it with me.", B: "My brother is share it with me.", C: "A small group of friends in my class does.", D: "We shares key rings with one another." },
      correct: "C",
      explanation: "Câu hỏi \"Who shares...?\" cần một câu trả lời có chủ ngữ và động từ chia đúng ngữ pháp: \"<b>A small group of friends in my class does.</b>\" (dùng \"does\" thay cho \"shares\")."
    },
    { id: 13, section: "I", type: "mcq",
      context: "John: \"I love making short video clips with my new digital camera!\"",
      prompt: "Elena: \"__________\"",
      display: { A: "Wow! Your camera is so beautiful.", B: "Really? He would be very glad to hear that.", C: "You also have a great talent for it.", D: "Oh no! I don't understand it." },
      correct: "C",
      explanation: "\"<b>You also have a great talent for it.</b>\" là lời khen tự nhiên đáp lại việc John chia sẻ sở thích làm video clip."
    },
    { id: 14, section: "I", type: "mcq",
      context: "Elena: \"These photos on your computer are nice! Did you take them?\"",
      prompt: "John: \"__________\"",
      display: { A: "Yes, definitely! The model is beautiful.", B: "No, I didn't. My brother took them last weekend.", C: "Photography is his favourite hobby.", D: "I invite all the actors and we watch the film." },
      correct: "B",
      explanation: "Câu hỏi \"Did you take them?\" cần câu trả lời Yes/No phù hợp: \"<b>No, I didn't. My brother took them last weekend.</b>\""
    },

    // ---------------- SECTION II (15-16) — sign & notice ----------------
    { id: 15, section: "II", type: "mcq", image: "signNoCellphones",
      prompt: "What does this sign say?",
      display: {
        A: "You are allowed to use cell phones everywhere in this area.",
        B: "You may use cell phones here only for emergencies.",
        C: "Using cell phones is not permitted in this area.",
        D: "Using cell phones is encouraged and allowed here."
      },
      correct: "C",
      explanation: "Biển \"NO CELL PHONES IN THIS AREA\" nghĩa là cấm sử dụng điện thoại di động trong khu vực này → \"<b>Using cell phones is not permitted in this area.</b>\", đáp án C."
    },
    { id: 16, section: "II", type: "mcq", image: "noticeChildrenUnder12",
      prompt: "What does this notice mean?",
      display: {
        A: "Adults can take children to the museum only in the morning.",
        B: "Children can visit this place if they are with an adult.",
        C: "Adults with children over 12 will enjoy the place more.",
        D: "Children can visit this place alone if they are over 12."
      },
      correct: "B",
      explanation: "Thông báo \"CHILDREN UNDER 12 MUST BE WITH AN ADULT\" nghĩa là trẻ em dưới 12 tuổi phải đi cùng người lớn → \"<b>Children can visit this place if they are with an adult.</b>\", đáp án B."
    },

    // ---------------- SECTION III (17-22) — cloze passage ----------------
    { id: 17, section: "III", type: "mcq", passage: "gardeningCloze", blankNum: 17,
      prompt: "Choose the best word for blank (17).",
      display: { A: "by", B: "for", C: "of", D: "with" },
      correct: "D",
      explanation: "\"fills our lungs <b>with</b> pure oxygen\" — \"fill sth with sth\" là cấu trúc cố định."
    },
    { id: 18, section: "III", type: "mcq", passage: "gardeningCloze", blankNum: 18,
      prompt: "Choose the best word for blank (18).",
      display: { A: "for", B: "healthy", C: "harmful", D: "delicious" },
      correct: "A",
      explanation: "\"good <b>for</b> our health\" (tốt cho sức khỏe) là cụm cố định."
    },
    { id: 19, section: "III", type: "mcq", passage: "gardeningCloze", blankNum: 19,
      prompt: "Choose the best word for blank (19).",
      display: { A: "so", B: "or", C: "and", D: "but" },
      correct: "D",
      explanation: "\"not only... <b>but</b> also...\" là cấu trúc cố định nghĩa \"không những... mà còn...\"."
    },
    { id: 20, section: "III", type: "mcq", passage: "gardeningCloze", blankNum: 20,
      prompt: "Choose the best word for blank (20).",
      display: { A: "the", B: "a", C: "any", D: "an" },
      correct: "B",
      explanation: "\"save <b>a</b> lot of money\" — \"a lot of\" luôn dùng mạo từ \"a\"."
    },
    { id: 21, section: "III", type: "mcq", passage: "gardeningCloze", blankNum: 21,
      prompt: "Choose the best word for blank (21).",
      display: { A: "difficult", B: "boring", C: "exciting", D: "rewarding" },
      correct: "D",
      explanation: "\"very <b>rewarding</b>\" (bổ ích, xứng đáng công sức) phù hợp với ý nghĩa tích cực \"makes us feel better\"."
    },
    { id: 22, section: "III", type: "mcq", passage: "gardeningCloze", blankNum: 22,
      prompt: "Choose the best word for blank (22).",
      display: { A: "creates", B: "buys", C: "cooks", D: "produces" },
      correct: "D",
      explanation: "\"<b>produces</b> delicious vegetables\" (tạo ra/sản xuất rau củ) phù hợp với ngữ cảnh trồng rau."
    },

    // ---------------- SECTION IV (23-28) — reading ----------------
    { id: 23, section: "IV", type: "truefalse", passage: "readingHobbyReading",
      prompt: "Reading only helps the author learn about the history of the past.",
      correct: "False",
      explanation: "Sai. Bài đọc kể ra nhiều điều khác ngoài lịch sử: \"the wonders of the world, space travel, human achievements, huge whales, tiny viruses...\""
    },
    { id: 24, section: "IV", type: "truefalse", passage: "readingHobbyReading",
      prompt: "The author gets books from the library, friends, and family.",
      correct: "True",
      explanation: "Đúng. Bài đọc: \"Libraries are the source... My relatives and my friends also give me books.\""
    },
    { id: 25, section: "IV", type: "truefalse", passage: "readingHobbyReading",
      prompt: "Books give useful information for the author's daily life.",
      correct: "True",
      explanation: "Đúng. Bài đọc: \"They have certainly helped me in my daily life.\""
    },
    { id: 26, section: "IV", type: "truefalse", passage: "readingHobbyReading",
      prompt: "The author plans to keep reading as a hobby in the future.",
      correct: "True",
      explanation: "Đúng. Bài đọc: \"I will certainly continue my reading hobby.\""
    },
    { id: 27, section: "IV", type: "mcq", passage: "readingHobbyReading",
      prompt: "According to the passage, reading helps the author to __________.",
      display: { A: "broaden their knowledge", B: "buy many expensive things", C: "find a high-paying job", D: "travel to space easily" },
      correct: "A",
      explanation: "Bài đọc: \"Reading helps me discover new things and widen my knowledge.\" → mở rộng kiến thức, đáp án A."
    },
    { id: 28, section: "IV", type: "mcq", passage: "readingHobbyReading",
      prompt: "What does the author think about the time spent on reading?",
      display: { A: "It is spent usefully.", B: "It is a waste of time.", C: "It is very boring.", D: "It makes them tired." },
      correct: "A",
      explanation: "Bài đọc: \"I also spend my time profitably.\" → thời gian được sử dụng hữu ích, đáp án A."
    },

    // ---------------- SECTION V (29-34) — word form ----------------
    { id: 29, section: "V", type: "fillblank",
      prompt: "My younger sister has a very nice _____________ of old key rings.",
      wordGiven: "COLLECT", accepted: ["collection"], correct: "collection",
      explanation: "Cần danh từ sau tính từ \"nice\". <b>collect</b> (v) → <b>collection</b> (n, +ion, bộ sưu tập)."
    },
    { id: 30, section: "V", type: "fillblank",
      prompt: "The internet helps people _____________ many new ways to relax.",
      wordGiven: "DEVELOP", accepted: ["develop"], correct: "develop",
      explanation: "Cấu trúc \"help sb + V (nguyên thể không \"to\")\" cần động từ nguyên thể, giữ nguyên dạng <b>develop</b>."
    },
    { id: 31, section: "V", type: "fillblank",
      prompt: "Playing sports brings a lot of health _____________ to teenagers.",
      wordGiven: "BENEFIT", accepted: ["benefits"], correct: "benefits",
      explanation: "Cần danh từ số nhiều sau tính từ \"health\". <b>benefit</b> (n) → <b>benefits</b> (số nhiều, lợi ích)."
    },
    { id: 32, section: "V", type: "fillblank",
      prompt: "Doing outdoor activities together can make family relationships _____________.",
      wordGiven: "STRENGTH", accepted: ["stronger"], correct: "stronger",
      explanation: "Cấu trúc \"make + O + adj\" cần tính từ so sánh hơn. <b>strength</b> (n) → <b>strong</b> (adj) → <b>stronger</b> (so sánh hơn, mạnh mẽ hơn)."
    },
    { id: 33, section: "V", type: "fillblank",
      prompt: "Regular exercise is _____________ helpful for people who work all day.",
      wordGiven: "SURPRISE", accepted: ["surprisingly"], correct: "surprisingly",
      explanation: "Cần trạng từ bổ nghĩa cho tính từ \"helpful\". <b>surprise</b> (n/v) → <b>surprisingly</b> (adv, +ly, đáng ngạc nhiên)."
    },
    { id: 34, section: "V", type: "fillblank",
      prompt: "The child looked _____________ when his parents gave him a camera.",
      wordGiven: "EXCITE", accepted: ["excited"], correct: "excited",
      explanation: "Cần tính từ sau \"looked\" diễn tả cảm xúc của người. <b>excite</b> (v) → <b>excited</b> (adj, +ed, cảm thấy phấn khích)."
    },

    // ---------------- SECTION VI (35-36) — dictionary entry ----------------
    { id: 35, section: "VI", type: "fillblank", passage: "pleasureEntry",
      prompt: "I always feel relaxed when I listen to pop music. In fact, I take __________________ to old songs.",
      accepted: ["pleasure in listening"], correct: "pleasure in listening",
      explanation: "Từ điển cho ví dụ \"He takes <b>pleasure in reading</b> comic books...\" — cấu trúc \"take pleasure in + V-ing\", ở đây là \"<b>pleasure in listening</b>\"."
    },
    { id: 36, section: "VI", type: "fillblank", passage: "pleasureEntry",
      prompt: "Good evening, everyone! It gives me __________________ our new English teacher today.",
      accepted: ["pleasure to welcome"], correct: "pleasure to welcome",
      explanation: "Từ điển cho ví dụ \"It gives me great <b>pleasure to welcome</b> our guest speaker tonight.\" — khớp với ngữ cảnh chào đón giáo viên mới."
    },

    // ---------------- SECTION VII (37-40) — sentence rewriting ----------------
    { id: 37, section: "VII", type: "rewrite",
      prompt: "He feels excited whenever he watches a football match.",
      starter: "He thinks watching",
      accepted: ["he thinks watching a football match is exciting"],
      correct: "He thinks watching a football match is exciting.",
      explanation: "\"feel excited whenever + mệnh đề\" có thể viết lại bằng \"<b>think + V-ing + is + exciting</b>\", giữ nguyên nghĩa cảm thấy hào hứng.<br>→ <i>He thinks watching a football match is exciting.</i>"
    },
    { id: 38, section: "VII", type: "rewrite",
      prompt: "It's not good to stay up so late to listen to music.",
      starter: "You shouldn't",
      accepted: ["you shouldn't stay up so late to listen to music"],
      correct: "You shouldn't stay up so late to listen to music.",
      explanation: "\"It's not good to + V\" (không tốt khi làm gì) có thể viết lại bằng \"<b>You shouldn't + V</b>\" (bạn không nên), giữ nguyên nghĩa khuyên nhủ.<br>→ <i>You shouldn't stay up so late to listen to music.</i>"
    },
    { id: 39, section: "VII", type: "rewrite",
      prompt: "I like keeping the bottles after drinking the water.",
      starter: "I am fond",
      accepted: ["i am fond of keeping the bottles after drinking the water"],
      correct: "I am fond of keeping the bottles after drinking the water.",
      explanation: "\"like + V-ing\" (thích làm gì) có thể viết lại bằng \"<b>be fond of + V-ing</b>\", giữ nguyên nghĩa yêu thích.<br>→ <i>I am fond of keeping the bottles after drinking the water.</i>"
    },
    { id: 40, section: "VII", type: "rewrite",
      prompt: "Her collections are exciting and they really attract me.",
      starter: "I am interested",
      accepted: ["i am interested in her collections"],
      correct: "I am interested in her collections.",
      explanation: "\"S + attract sb\" (thu hút ai) có thể viết lại bằng \"<b>sb + be interested in + N</b>\" (ai đó thấy hứng thú với), giữ nguyên nghĩa.<br>→ <i>I am interested in her collections.</i>"
    }
  ]
};
