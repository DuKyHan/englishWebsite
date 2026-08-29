const TEST = {
  id: "test35",
  grade: "Grade 6 — Global Success",
  unit: "Unit 6: Our Tet holiday",
  title: "Grade 6 · Unit 6: Our Tet holiday · Test 1",
  duration: 35,
  totalPoints: 10,
  reviewPage: "review_test35.html",
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
    { id: "VI", title: "Look at the dictionary entry of “event”. Complete the sentences with no more than three words.", points: "0.5 pt", range: [35, 36] },
    { id: "VII", title: "Rewrite each sentence so that it means almost the same as the sentence printed before it.", points: "1.0 pt", range: [37, 40] }
  ],
  passages: {
    tetPreparationCloze: "Lan and her brother are getting ready for the Lunar New Year. They help (17) ________ parents tidy up the living room and hang red decorations on the walls. Outside, they decorate the garden with colorful lights and paper lanterns. Their grandma teaches them how to (18) ________ Chung cakes with green leaves and sticky rice. Lan enjoys this tradition because it brings the (19) ________ family together. Her dad will set (20) ________ the fruit tray and place it on the altar. On New Year's Eve, the family gathers to watch the firework show. Everyone is happy (21) ________ excited to welcome the new year (22) ________ joy.",
    thanksgivingReading: "Thanksgiving Day is a holiday in which Americans celebrate the honor of everything the country offered to their ancestors, who were among the first immigrants to the United States. When they first came to America, they saw that there was enough food and opportunity for everyone. They were even helped by the Indians, who taught them how to grow all kinds of new vegetables, such as corn and yams or sweet potatoes. On Thanksgiving Day, it is traditional to eat a big meal together. Americans eat food that was found here by their ancestors. They usually eat turkey with sweet potatoes, Indian corn bread, and have pumpkin pie for dessert. Every Thanksgiving Day, a giant parade is held by one of the most famous department stores in New York. It is an annual event. And at the end of the parade, children can even see Santa Claus, who is visiting from the North Pole. Santa Claus is invited to remind children and parents that Christmas is not far away.",
    eventEntry: {
      word: "event", ipa: "/ɪˈvent/", pos: "noun",
      def: "1. a thing that happens, especially something important.",
      examples: [
        "The election was the main <b>political event</b> of the year.",
        "The museum is hosting a <b>special event</b> to celebrate its anniversary.",
        "In the unlikely event of a fire, please use the stairs, not the elevator.",
        "The school sports day is always a <b>major event</b> in the school calendar.",
        "Local police are organized to control crowds at the <b>sporting event</b>."
      ]
    }
  },
  images: {
    noticeBuy2Get3Free: "assets/images/notice_buy2_get3_free.jpg",
    signNoGrassFlowers: "assets/images/sign_no_grass_no_flowers.jpg"
  },
  questions: [
    // ---------------- SECTION I (1-14) ----------------
    { id: 1, section: "I", type: "mcq",
      prompt: "Which word has the underlined part pronounced differently from that of the others?",
      display: { A: "bell", B: "money", C: "dress", D: "egg" },
      correct: "B",
      explanation: "Phần gạch chân là chữ cái \"e\". \"bell\" /bel/, \"dress\" /dres/, \"egg\" /eɡ/ đều có \"e\" phát âm là <b>/e/</b>. Riêng \"money\" /ˈmʌni/ có \"e\" (trong \"-ey\") phát âm là <b>/i/</b> → khác biệt, đáp án B."
    },
    { id: 2, section: "I", type: "mcq",
      prompt: "Which word has the underlined part pronounced differently from that of the others?",
      display: { A: "sugar", B: "strike", C: "sound", D: "success" },
      correct: "A",
      explanation: "Phần gạch chân là chữ cái \"s\". \"strike\" /straɪk/, \"sound\" /saʊnd/, \"success\" /səkˈses/ đều có \"s\" phát âm là <b>/s/</b>. Riêng \"sugar\" /ˈʃʊɡər/ có \"s\" phát âm là <b>/ʃ/</b> → khác biệt, đáp án A."
    },
    { id: 3, section: "I", type: "mcq",
      prompt: "Which word has a different stress pattern from that of the others?",
      display: { A: "sunlight", B: "music", C: "ready", D: "away" },
      correct: "D",
      explanation: "\"sunlight\" /ˈsʌnlaɪt/, \"music\" /ˈmjuːzɪk/, \"ready\" /ˈredi/ đều có trọng âm rơi vào <b>âm tiết 1</b>. Riêng \"away\" /əˈweɪ/ có trọng âm rơi vào <b>âm tiết 2</b> → khác biệt, đáp án D."
    },
    { id: 4, section: "I", type: "mcq",
      prompt: "Which word has a different stress pattern from that of the others?",
      display: { A: "firework", B: "Japan", C: "housework", D: "laughter" },
      correct: "B",
      explanation: "\"firework\" /ˈfaɪərwɜːrk/, \"housework\" /ˈhaʊswɜːrk/, \"laughter\" /ˈlæftər/ đều có trọng âm rơi vào <b>âm tiết 1</b>. Riêng \"Japan\" /dʒəˈpæn/ có trọng âm rơi vào <b>âm tiết 2</b> → khác biệt, đáp án B."
    },
    { id: 5, section: "I", type: "mcq",
      context: "Lan: \"I want to stay up late tonight to make Banh Chung with mom.\"",
      prompt: "Nam: \"You look tired. I think you __________ stay up too late.\"",
      display: { A: "need", B: "mustn't", C: "shouldn't", D: "should" },
      correct: "C",
      explanation: "\"<b>shouldn't</b>\" (không nên) diễn tả lời khuyên, phù hợp với việc Nam nhận xét Lan trông mệt và không nên thức khuya."
    },
    { id: 6, section: "I", type: "mcq",
      context: "Tom: \"What are your plans for the Lunar New Year next year?\"",
      prompt: "Mary: \"My family __________ Banh Chung at my grandparents' house.\"",
      display: { A: "will cook", B: "will cooking", C: "won't cooks", D: "is going cook" },
      correct: "A",
      explanation: "Diễn tả dự định/kế hoạch trong tương lai với thì tương lai đơn: \"<b>will cook</b>\"."
    },
    { id: 7, section: "I", type: "mcq",
      context: "Hoa: \"I am so confused about how to prepare the fruit tray. __________ in this condition?\"",
      prompt: "An: \"Don't worry. You can follow this guide or ask your grandmother.\"",
      display: { A: "What should I do", B: "I am doing", C: "Am I doing", D: "Do I do" },
      correct: "A",
      explanation: "\"<b>What should I do</b>\" là câu hỏi xin lời khuyên phù hợp với tình huống bối rối, và khớp với câu trả lời đưa ra lời khuyên của An."
    },
    { id: 8, section: "I", type: "mcq",
      context: "John: \"When do Vietnamese people usually repaint their houses to welcome the New Year?\"",
      prompt: "Peter: \"They often do it __________ Tet.\"",
      display: { A: "to", B: "at", C: "in", D: "before" },
      correct: "D",
      explanation: "\"<b>before</b> Tet\" (trước Tết) phù hợp với việc sơn sửa nhà cửa để chuẩn bị đón năm mới, diễn ra trước khi Tết đến."
    },
    { id: 9, section: "I", type: "mcq",
      context: "Mai: \"Look at that girl. She doesn't do __________ exercises during her holiday. She is very lazy.\"",
      prompt: "Nam: \"Yes, she just wants to relax and enjoy the sweet food.\"",
      display: { A: "a few", B: "some", C: "many", D: "any" },
      correct: "D",
      explanation: "Trong câu phủ định, dùng \"<b>any</b>\" thay vì \"some\": \"doesn't do any exercises\"."
    },
    { id: 10, section: "I", type: "mcq",
      context: "Ba: \"Tet is coming very soon. It's our favorite New Year __________!\"",
      prompt: "Thu: \"I agree. Everyone feels so excited and happy.\"",
      display: { A: "celebration", B: "cleaning", C: "shopping", D: "decoration" },
      correct: "A",
      explanation: "\"New Year <b>celebration</b>\" (lễ kỷ niệm năm mới) phù hợp với không khí háo hức, vui vẻ được nhắc đến."
    },
    { id: 11, section: "I", type: "mcq",
      context: "Binh: \"Who is that man entering your house right after midnight?\"",
      prompt: "Minh: \"Oh, he is the first __________! He can bring good luck for the rest of the year.\"",
      display: { A: "dancer", B: "God", C: "artist", D: "footer" },
      correct: "D",
      explanation: "\"first <b>footer</b>\" (người xông đất) là người đầu tiên bước vào nhà sau giao thừa, theo phong tục mang lại may mắn cho cả năm."
    },
    { id: 12, section: "I", type: "mcq",
      context: "Lan: \"What should we do on New Year's Eve, Nam?\"",
      prompt: "Nam: \"__________\"",
      display: { A: "On the first day of Tet.", B: "Yes. Tet is a time for family reunion.", C: "No. We'll buy apricot blossoms.", D: "We should go out to watch fireworks." },
      correct: "D",
      explanation: "Câu hỏi của Lan hỏi về việc nên làm gì vào đêm giao thừa, nên câu trả lời phù hợp là đề xuất một hoạt động cụ thể: \"<b>We should go out to watch fireworks.</b>\""
    },
    { id: 13, section: "I", type: "mcq",
      context: "An: \"Why don't you join a traditional sports club at your school after Tet?\"",
      prompt: "Binh: \"__________\"",
      display: { A: "No, I don't know any sports club.", B: "Because I am very lazy during the holiday.", C: "That's a great idea! I will think about it.", D: "Yes, I must do that right now." },
      correct: "C",
      explanation: "\"<b>That's a great idea! I will think about it.</b>\" là lời đáp phù hợp thể hiện sự đồng tình với lời đề nghị \"Why don't you...?\""
    },
    { id: 14, section: "I", type: "mcq",
      context: "Hoa: \"My family always celebrates Tet in a traditional way. We prepare the sticky rice, wrap the Chung cakes together, and make a big fruit tray on the family altar.\"",
      prompt: "Jane: \"__________\"",
      display: { A: "That sounds wonderful! It really brings the whole family together.", B: "I don't really like traditional cooking.", C: "That's always a meaningful celebration for us.", D: "Next year, I want to try making Chung Cakes myself." },
      correct: "A",
      explanation: "\"<b>That sounds wonderful! It really brings the whole family together.</b>\" là phản hồi tự nhiên nhất thể hiện sự trầm trồ trước câu chuyện của Hoa."
    },

    // ---------------- SECTION II (15-16) — sign & notice ----------------
    { id: 15, section: "II", type: "mcq", image: "noticeBuy2Get3Free",
      prompt: "What does this notice mean?",
      display: {
        A: "You don't have to pay for the third item when you buy two this Saturday.",
        B: "You always get a free third item whenever you visit the shop.",
        C: "This special offer is available only on Sunday.",
        D: "There are special offers every day at this shop."
      },
      correct: "A",
      explanation: "Thông báo \"BUY 2 GET THE 3RD FREE! — THIS SATURDAY ONLY, SATURDAY, OCTOBER 26th\" nghĩa là mua 2 tặng 1 chỉ áp dụng vào thứ Bảy này → \"<b>You don't have to pay for the third item when you buy two this Saturday.</b>\", đáp án A."
    },
    { id: 16, section: "II", type: "mcq", image: "signNoGrassFlowers",
      prompt: "What does this sign say?",
      display: {
        A: "You must ask for permission before entering the park.",
        B: "You cannot pick any flowers growing in this area.",
        C: "You should pick up the trash around the flower beds.",
        D: "You mustn't walk on the grass or flowers."
      },
      correct: "B",
      explanation: "Biển \"DO NOT PICK THE FLOWERS\" nghĩa là cấm hái hoa trong khu vực này → \"<b>You cannot pick any flowers growing in this area.</b>\", đáp án B."
    },

    // ---------------- SECTION III (17-22) — cloze passage ----------------
    { id: 17, section: "III", type: "mcq", passage: "tetPreparationCloze", blankNum: 17,
      prompt: "Choose the best word for blank (17).",
      display: { A: "theirs", B: "they", C: "their", D: "them" },
      correct: "C",
      explanation: "\"help <b>their</b> parents\" — cần tính từ sở hữu đứng trước danh từ \"parents\"."
    },
    { id: 18, section: "III", type: "mcq", passage: "tetPreparationCloze", blankNum: 18,
      prompt: "Choose the best word for blank (18).",
      display: { A: "carry", B: "wrap", C: "cook", D: "sell" },
      correct: "B",
      explanation: "\"<b>wrap</b> Chung cakes with green leaves\" — động từ \"wrap\" (gói) phù hợp với việc gói bánh chưng bằng lá."
    },
    { id: 19, section: "III", type: "mcq", passage: "tetPreparationCloze", blankNum: 19,
      prompt: "Choose the best word for blank (19).",
      display: { A: "side", B: "local", C: "whole", D: "close" },
      correct: "C",
      explanation: "\"brings the <b>whole</b> family together\" — \"whole family\" (cả gia đình) là cụm cố định."
    },
    { id: 20, section: "III", type: "mcq", passage: "tetPreparationCloze", blankNum: 20,
      prompt: "Choose the best word for blank (20).",
      display: { A: "on", B: "down", C: "up", D: "off" },
      correct: "C",
      explanation: "\"set <b>up</b> the fruit tray\" — \"set up\" (bày biện, sắp xếp) là cụm động từ cố định."
    },
    { id: 21, section: "III", type: "mcq", passage: "tetPreparationCloze", blankNum: 21,
      prompt: "Choose the best word for blank (21).",
      display: { A: "so", B: "and", C: "but", D: "or" },
      correct: "B",
      explanation: "\"happy <b>and</b> excited\" — hai tính từ mang nghĩa tích cực song song, nối bằng \"and\"."
    },
    { id: 22, section: "III", type: "mcq", passage: "tetPreparationCloze", blankNum: 22,
      prompt: "Choose the best word for blank (22).",
      display: { A: "tradition", B: "with", C: "light", D: "joy" },
      correct: "B",
      explanation: "\"welcome the new year <b>with</b> joy\" — giới từ \"with\" đi cùng danh từ chỉ cảm xúc/thái độ."
    },

    // ---------------- SECTION IV (23-28) — reading ----------------
    { id: 23, section: "IV", type: "truefalse", passage: "thanksgivingReading",
      prompt: "The first immigrants to the United States did not have enough food when they arrived.",
      correct: "False",
      explanation: "Sai. Bài đọc: \"they saw that there was enough food and opportunity for everyone\" — có đủ thức ăn, không phải thiếu thốn."
    },
    { id: 24, section: "IV", type: "truefalse", passage: "thanksgivingReading",
      prompt: "Native Indians helped the first immigrants learn how to grow vegetables like corn.",
      correct: "True",
      explanation: "Đúng. Bài đọc: \"They were even helped by the Indians, who taught them how to grow all kinds of new vegetables, such as corn...\""
    },
    { id: 25, section: "IV", type: "truefalse", passage: "thanksgivingReading",
      prompt: "People usually eat a small meal with their family on Thanksgiving Day.",
      correct: "False",
      explanation: "Sai. Bài đọc: \"it is traditional to eat a big meal together\" — một bữa ăn lớn, không phải bữa ăn nhỏ."
    },
    { id: 26, section: "IV", type: "truefalse", passage: "thanksgivingReading",
      prompt: "The big parade in New York happens every year on Thanksgiving Day.",
      correct: "True",
      explanation: "Đúng. Bài đọc: \"Every Thanksgiving Day, a giant parade is held... It is an annual event.\""
    },
    { id: 27, section: "IV", type: "mcq", passage: "thanksgivingReading",
      prompt: "What do Americans traditionally have for dessert on Thanksgiving?",
      display: { A: "Pumpkin pie", B: "Indian corn bread", C: "Sweet potatoes", D: "Roast turkey" },
      correct: "A",
      explanation: "Bài đọc: \"...have pumpkin pie for dessert.\" → đáp án A."
    },
    { id: 28, section: "IV", type: "mcq", passage: "thanksgivingReading",
      prompt: "Why does Santa Claus appear at the end of the Thanksgiving parade?",
      display: { A: "To remind people that Christmas is coming soon.", B: "To give Christmas gifts to all children in New York.", C: "To help the department store sell more toys.", D: "To show people how to get to the North Pole." },
      correct: "A",
      explanation: "Bài đọc: \"Santa Claus is invited to remind children and parents that Christmas is not far away.\" → đáp án A."
    },

    // ---------------- SECTION V (29-34) — word form ----------------
    { id: 29, section: "V", type: "fillblank",
      prompt: "Lan and her brother are busy doing the New Year _____________ for their house.",
      wordGiven: "DECORATE", accepted: ["decorations"], correct: "decorations",
      explanation: "Cần danh từ số nhiều sau tính từ sở hữu ngầm định \"the New Year\". <b>decorate</b> (v) → <b>decorations</b> (n, +ion, đồ trang trí)."
    },
    { id: 30, section: "V", type: "fillblank",
      prompt: "My family always celebrates Tet in a _____________ way.",
      wordGiven: "TRADITION", accepted: ["traditional"], correct: "traditional",
      explanation: "Cần tính từ đứng trước danh từ \"way\". <b>tradition</b> (n) → <b>traditional</b> (adj, +al, truyền thống)."
    },
    { id: 31, section: "V", type: "fillblank",
      prompt: "The dragon dancers gave an _____________ performance in the small square near the temple.",
      wordGiven: "EXCITE", accepted: ["exciting"], correct: "exciting",
      explanation: "Cần tính từ đứng trước danh từ \"performance\". <b>excite</b> (v) → <b>exciting</b> (adj, +ing, thú vị, hấp dẫn)."
    },
    { id: 32, section: "V", type: "fillblank",
      prompt: "The streets look very beautiful because they are _____________ with colorful lights.",
      wordGiven: "DECORATION", accepted: ["decorated"], correct: "decorated",
      explanation: "Cần tính từ/quá khứ phân từ sau \"are\". <b>decoration</b> (n) → <b>decorated</b> (adj, +ed, được trang trí)."
    },
    { id: 33, section: "V", type: "fillblank",
      prompt: "Sitting together around the warm fire to cook Banh Chung gives us a _____________ feeling.",
      wordGiven: "PEACE", accepted: ["peaceful"], correct: "peaceful",
      explanation: "Cần tính từ đứng trước danh từ \"feeling\". <b>peace</b> (n) → <b>peaceful</b> (adj, +ful, yên bình)."
    },
    { id: 34, section: "V", type: "fillblank",
      prompt: "On New Year's Eve, we gather to watch the beautiful firework _____________.",
      wordGiven: "DISPLAYED", accepted: ["display"], correct: "display",
      explanation: "Cần danh từ sau tính từ \"beautiful firework\". <b>displayed</b> (quá khứ phân từ) → <b>display</b> (n, sự trình diễn, màn trình diễn)."
    },

    // ---------------- SECTION VI (35-36) — dictionary entry ----------------
    { id: 35, section: "VI", type: "fillblank", passage: "eventEntry",
      prompt: "The World Cup is a massive __________________ that attracts millions of viewers worldwide.",
      accepted: ["sporting event"], correct: "sporting event",
      explanation: "Từ điển cho ví dụ \"Local police are organized to control crowds at the <b>sporting event</b>.\" — khớp với ngữ cảnh sự kiện thể thao thu hút nhiều người xem."
    },
    { id: 36, section: "VI", type: "fillblank", passage: "eventEntry",
      prompt: "The opening of the new library was the most important __________________ in our town this month.",
      accepted: ["special event", "major event"], correct: "special event (hoặc major event)",
      explanation: "Từ điển cho ví dụ \"The museum is hosting a <b>special event</b>...\" và \"The school sports day is always a <b>major event</b>...\" — cả hai đều khớp với ngữ cảnh sự kiện quan trọng."
    },

    // ---------------- SECTION VII (37-40) — sentence rewriting ----------------
    { id: 37, section: "VII", type: "rewrite",
      prompt: "There isn't any five-fruit tray on their ancestral altar.",
      starter: "They have no",
      accepted: ["they have no five-fruit tray on their ancestral altar"],
      correct: "They have no five-fruit tray on their ancestral altar.",
      explanation: "\"There isn't any + N\" (không có...) có thể viết lại bằng \"S + have/has no + N\", giữ nguyên nghĩa phủ định.<br>→ <i>They have no five-fruit tray on their ancestral altar.</i>"
    },
    { id: 38, section: "VII", type: "rewrite",
      prompt: "\"Why don't you join a traditional sports club at your school?\" said Nam to Lan.",
      starter: "Nam suggested that Lan should",
      accepted: ["nam suggested that lan should join a traditional sports club at her school"],
      correct: "Nam suggested that Lan should join a traditional sports club at her school.",
      explanation: "Lời đề nghị trực tiếp \"Why don't you...?\" có thể tường thuật lại bằng \"<b>S + suggested that + S2 + should + V</b>\".<br>→ <i>Nam suggested that Lan should join a traditional sports club at her school.</i>"
    },
    { id: 39, section: "VII", type: "rewrite",
      prompt: "It is very interesting to take a boat trip on the Perfume River during Tet holiday.",
      starter: "Taking a boat trip",
      accepted: ["taking a boat trip on the perfume river during tet holiday is very interesting"],
      correct: "Taking a boat trip on the Perfume River during Tet holiday is very interesting.",
      explanation: "Cấu trúc \"It is + adj + to V\" có thể viết lại bằng \"<b>V-ing (làm chủ ngữ) + is + adj</b>\", giữ nguyên nghĩa.<br>→ <i>Taking a boat trip on the Perfume River during Tet holiday is very interesting.</i>"
    },
    { id: 40, section: "VII", type: "rewrite",
      prompt: "Vietnamese people often clean and decorate their houses before Tet.",
      starter: "Cleaning and decorating houses",
      accepted: ["cleaning and decorating houses are often done by vietnamese people before tet"],
      correct: "Cleaning and decorating houses are often done by Vietnamese people before Tet.",
      explanation: "Câu chủ động có thể viết lại thành câu bị động, đưa hành động \"cleaning and decorating houses\" lên làm chủ ngữ: \"<b>are often done by</b>\".<br>→ <i>Cleaning and decorating houses are often done by Vietnamese people before Tet.</i>"
    }
  ]
};
