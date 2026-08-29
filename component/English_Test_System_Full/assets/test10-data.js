const TEST = {
  id: "test10",
  grade: "Grade 8 — Global Success",
  unit: "Unit 2: Life in the countryside",
  title: "Grade 8 · Unit 2: Life in the countryside · Test 2",
  duration: 35,
  totalPoints: 10,
  reviewPage: "review_test10.html",
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
    { id: "VI", title: "Look at the dictionary entry of “crowded”. Complete the sentences with no more than three words.", points: "0.5 pt", range: [35, 36] },
    { id: "VII", title: "Rewrite each sentence so that it means almost the same as the sentence printed before it.", points: "1.0 pt", range: [37, 40] }
  ],
  passages: {
    catbaCloze: "Last summer, Thanh went (17) ________ a holiday for two weeks to the island of Cat Ba. He rented a hotel (18) ________ had a wonderful swimming pool and beautiful views of the sea. It was in a village where the local people went fishing in the winter, and foreign (19) ________ came in the summer. Thanh spent his first day on the beach, but on the second day he felt very ill. First, he was too hot, then he was too cold. He couldn't understand (20) ________ he felt like that. So he went to see the local doctor, who was a very nice man, and whose voice was so sweet. \"Summer is a time when people often feel ill,\" the doctor said. \"It's too hot for (21) ________ of us! Take this medicine, and stay out of the sun.\" Thanh took the doctor's (22) ________ and stayed in his room for the rest of his holiday. He soon felt better. \"What a cheap holiday!\" he thought happily.",
    villagersReading: "With the habit of working in teams and being helpful to one another, villagers usually earn their living from farming, raising livestock and making handicrafts. They live in a small community with a temple or a communal cultural house where great events, such as festivals worshipping the village god and traditional games are organized. Villagers in the Southern usually live in houses lined up along central road and built on stilts to keep above flood waters. Along the coastal lines, fishermen depend on the sea as a means of livelihood. In the Central of Vietnam, a place suffering lots of natural disasters all the year round, citizens tend to be more studious and hard-working than those in regions with favourable conditions. People in the central highlands and the northern mountains live by growing rice, rubber trees, coffee and tea as well as hunting.",
    crowdedEntry: {
      word: "crowded", ipa: "/ˈkraʊdɪd/", pos: "adjective",
      def: "having a lot of people or too many people",
      examples: [
        "The main beach gets <b>very crowded</b> in the summer.",
        "The train was <b>crowded with</b> commuters on their way to work.",
        "We pushed our way through the <b>crowded streets</b> of the city center.",
        "The bar was <b>packed crowded</b> by 10 o'clock."
      ]
    }
  },
  images: {
    signDumpsterWarning: "assets/images/sign_dumpster_surveillance.jpg",
    signPizzaNotice: "assets/images/sign_pizza_notice.jpg"
  },
  questions: [
    // ---------------- SECTION I (1-14) ----------------
    { id: 1, section: "I", type: "mcq",
      prompt: "Which word has the underlined part pronounced differently from that of the others?",
      display: { A: "jam", B: "tragedy", C: "relative", D: "traffic" },
      correct: "D",
      explanation: "\"a\" trong \"jam\" /dʒæm/, \"tragedy\" /ˈtrædʒədi/, \"relative\" /ˈrelətɪv/... theo đáp án gốc, \"traffic\" /ˈtræfɪk/ có phần gạch chân phát âm khác với ba từ còn lại → đáp án D."
    },
    { id: 2, section: "I", type: "mcq",
      prompt: "Which word has the underlined part pronounced differently from that of the others?",
      display: { A: "prefer", B: "apartment", C: "offer", D: "another" },
      correct: "B",
      explanation: "Theo đáp án gốc, phần gạch chân trong \"apartment\" /əˈpɑːrtmənt/ phát âm khác với \"prefer\", \"offer\", \"another\" → đáp án B."
    },
    { id: 3, section: "I", type: "mcq",
      prompt: "Which word has a different stress pattern from that of the others?",
      display: { A: "beauty", B: "machine", C: "brother", D: "mother" },
      correct: "B",
      explanation: "\"beauty\" /ˈbjuːti/, \"brother\" /ˈbrʌðər/, \"mother\" /ˈmʌðər/ đều có trọng âm rơi vào <b>âm tiết 1</b>. Riêng \"machine\" /məˈʃiːn/ có trọng âm rơi vào <b>âm tiết 2</b> → khác biệt, đáp án B."
    },
    { id: 4, section: "I", type: "mcq",
      prompt: "Which word has a different stress pattern from that of the others?",
      display: { A: "festival", B: "holiday", C: "collection", D: "family" },
      correct: "C",
      explanation: "\"festival\" /ˈfestɪvl/, \"holiday\" /ˈhɒlədeɪ/, \"family\" /ˈfæməli/ đều có trọng âm rơi vào <b>âm tiết 1</b>. Riêng \"collection\" /kəˈlekʃn/ có trọng âm rơi vào <b>âm tiết 2</b> → khác biệt, đáp án C."
    },
    { id: 5, section: "I", type: "mcq",
      context: "Tom: \"Look at those bees! Collecting honey from the ______ requires a lot of skill.\"",
      prompt: "Jerry: \"Yes, the farmers have to be very careful or they will get stung.\"",
      display: { A: "beehive", B: "beenest", C: "beehouse", D: "beehome" },
      correct: "A",
      explanation: "<b>beehive</b> (n) = tổ ong — là từ ghép đúng chỉ nơi ong sinh sống, khác với các phương án còn lại vốn không phải từ có thật."
    },
    { id: 6, section: "I", type: "mcq",
      context: "Customer: \"I am very sorry for any ______ caused by our late payment.\"",
      prompt: "Shopkeeper: \"That's fine, sir. We received it this morning.\"",
      display: { A: "convenient", B: "inconvenience", C: "inconvenient", D: "convenience" },
      correct: "B",
      explanation: "Cần danh từ mang nghĩa phủ định làm tân ngữ của \"for any\". <b>convenient</b> (adj) → <b>inconvenience</b> (n, in- + ...+ ence): sự bất tiện, phiền toái."
    },
    { id: 7, section: "I", type: "mcq",
      context: "Anna: \"Look! The children in the countryside are so hard-working.\"",
      prompt: "Ben: \"Yes, they are used to ______ cattle in the field at a very young age.\"",
      display: { A: "raising", B: "herding", C: "walking", D: "following" },
      correct: "B",
      explanation: "\"<b>herd</b> cattle\" (chăn/lùa gia súc) là cụm động từ cố định phù hợp với công việc đồng áng."
    },
    { id: 8, section: "I", type: "mcq",
      context: "Reporter: \"How bad was the forest fire last night?\"",
      prompt: "Firefighter: \"A ______ area of that forest - more than 1000 hectares - was completely destroyed.\"",
      display: { A: "vast", B: "small", C: "tiny", D: "inconsiderable" },
      correct: "A",
      explanation: "\"<b>vast</b> area\" (khu vực rộng lớn) phù hợp với diện tích \"more than 1000 hectares\" bị tàn phá."
    },
    { id: 9, section: "I", type: "mcq",
      context: "Jessie: \"Sunny is a fantastic performer, isn't she?\"",
      prompt: "Katie: \"Absolutely! Sunny sings the song ______ than anyone else in our class.\"",
      display: { A: "more good", B: "better", C: "more well", D: "best" },
      correct: "B",
      explanation: "<b>better</b> là dạng so sánh hơn bất quy tắc của trạng từ \"well\", dùng với \"than\" để so sánh."
    },
    { id: 10, section: "I", type: "mcq",
      context: "Teacher: \"Ly, why did you arrive so early today?\"",
      prompt: "Ly: \"I wanted to review my lesson, so I came to class ______ than I did yesterday, teacher.\"",
      display: { A: "more early", B: "more easily", C: "too earlier", D: "earlier" },
      correct: "D",
      explanation: "<b>earlier</b> là dạng so sánh hơn của trạng từ \"early\" (thêm -er), dùng với \"than\"."
    },
    { id: 11, section: "I", type: "mcq",
      context: "Minh: \"Do you prefer living in the city or in the countryside?\"",
      prompt: "Long: \"The city, definitely. Things in the city are much more ______ than in the country.\"",
      display: { A: "more moderner", B: "moderner", C: "modern", D: "much modern" },
      correct: "C",
      explanation: "\"much more <b>modern</b> than\" — tính từ dài (modern) dùng \"more\" để so sánh hơn, không thêm \"-er\"."
    },
    { id: 12, section: "I", type: "mcq",
      context: "Nick: \"I heard you went on a volunteer trip to a remote village. You've made new friends?\"",
      prompt: "Aly: \"______! Everyone there was incredibly welcoming.\"",
      display: { A: "You're welcome", B: "Yes, I did", C: "Yes, please", D: "Yeah, right on the first day" },
      correct: "D",
      explanation: "\"<b>Yeah, right on the first day</b>\" thể hiện sự xác nhận nhiệt tình, phù hợp với câu tiếp theo mô tả mọi người rất thân thiện."
    },
    { id: 13, section: "I", type: "mcq",
      context: "Foreigner: \"Life in this mountainous village is so quiet and peaceful.\"",
      prompt: "Local guide: \"That's true. However, people here have a lower standard of living ______ in big cities.\"",
      display: { A: "different from", B: "more than", C: "as much as", D: "than those" },
      correct: "D",
      explanation: "\"a lower standard of living <b>than those</b> [living] in big cities\" — \"those\" thay thế cho \"the standards of living\" đã nhắc ở trên, tạo phép so sánh hơn hoàn chỉnh."
    },
    { id: 14, section: "I", type: "mcq",
      context: "Peter: \"I think online working will allow more people to move to rural areas.\"",
      prompt: "Mary: \"______\"",
      display: {
        A: "Yes, please. I love city life.",
        B: "You can say that again, cities are crowded.",
        C: "Exactly! It makes living there much more possible.",
        D: "I don't think so, rural areas are too noisy."
      },
      correct: "C",
      explanation: "\"<b>Exactly! It makes living there much more possible.</b>\" thể hiện sự đồng tình trực tiếp với ý kiến của Peter về làm việc trực tuyến."
    },

    // ---------------- SECTION II (15-16) — signs/notices ----------------
    { id: 15, section: "II", type: "mcq", image: "signDumpsterWarning",
      prompt: "What does this notice tell you?",
      display: {
        A: "There are 24 dumpsters in this local area.",
        B: "You need to check the quality of the dumpster every 24 hours.",
        C: "Someone is allowed to use the dumpster all day and all night.",
        D: "The waste dumpster is under constant watch by cameras."
      },
      correct: "D",
      explanation: "Biển ghi \"DUMPSTER UNDER 24-HOUR VIDEO SURVEILLANCE\" (Thùng rác được giám sát camera 24/24) → đáp án D."
    },
    { id: 16, section: "II", type: "mcq", image: "signPizzaNotice",
      prompt: "What does this notice say?",
      display: {
        A: "\"Pasta Delight\" is a new permanent menu item for students.",
        B: "\"Pizza Day\" will be available as usual on June 16th.",
        C: "Pizza will not be served on June 16th because of a menu change.",
        D: "Pizza will return to the school cafeteria before June 23rd."
      },
      correct: "C",
      explanation: "Biển ghi \"PIZZA DAY ON JUNE 16 WILL BE REPLACED BY PASTA\" (Ngày Pizza 16/6 sẽ được thay bằng món pasta) → pizza sẽ không được phục vụ ngày đó, đáp án C."
    },

    // ---------------- SECTION III (17-22) — cloze passage ----------------
    { id: 17, section: "III", type: "mcq", passage: "catbaCloze", blankNum: 17,
      prompt: "Choose the best word for blank (17).",
      display: { A: "for", B: "at", C: "in", D: "on" },
      correct: "D",
      explanation: "\"go <b>on</b> a holiday\" (đi nghỉ mát) là cụm giới từ cố định."
    },
    { id: 18, section: "III", type: "mcq", passage: "catbaCloze", blankNum: 18,
      prompt: "Choose the best word for blank (18).",
      display: { A: "who", B: "where", C: "which", D: "whose" },
      correct: "C",
      explanation: "\"a hotel <b>which</b> had a wonderful swimming pool\" — \"which\" thay thế cho vật (hotel) làm chủ ngữ trong mệnh đề quan hệ."
    },
    { id: 19, section: "III", type: "mcq", passage: "catbaCloze", blankNum: 19,
      prompt: "Choose the best word for blank (19).",
      display: { A: "guides", B: "visitors", C: "passengers", D: "actors" },
      correct: "B",
      explanation: "\"foreign <b>visitors</b> came in the summer\" (du khách nước ngoài) phù hợp với ngữ cảnh du lịch."
    },
    { id: 20, section: "III", type: "mcq", passage: "catbaCloze", blankNum: 20,
      prompt: "Choose the best word for blank (20).",
      display: { A: "what", B: "how", C: "why", D: "when" },
      correct: "C",
      explanation: "\"He couldn't understand <b>why</b> he felt like that.\" — \"why\" hỏi về lý do cảm thấy khó chịu."
    },
    { id: 21, section: "III", type: "mcq", passage: "catbaCloze", blankNum: 21,
      prompt: "Choose the best word for blank (21).",
      display: { A: "each", B: "every", C: "most", D: "much" },
      correct: "C",
      explanation: "\"It's too hot for <b>most</b> of us!\" (quá nóng đối với hầu hết chúng ta) — \"most of\" + đại từ."
    },
    { id: 22, section: "III", type: "mcq", passage: "catbaCloze", blankNum: 22,
      prompt: "Choose the best word for blank (22).",
      display: { A: "notice", B: "choice", C: "idea", D: "advice" },
      correct: "D",
      explanation: "\"took the doctor's <b>advice</b>\" (nghe theo lời khuyên của bác sĩ) là cụm cố định."
    },

    // ---------------- SECTION IV (23-28) — reading ----------------
    { id: 23, section: "IV", type: "truefalse", passage: "villagersReading",
      prompt: "Villagers generally prefer to work alone rather than in groups.",
      correct: "False",
      explanation: "Sai. Bài đọc: \"With the habit of working <b>in teams</b> and being helpful to one another...\""
    },
    { id: 24, section: "IV", type: "truefalse", passage: "villagersReading",
      prompt: "Festivals and traditional games are held in temples or communal cultural houses.",
      correct: "True",
      explanation: "Đúng. Bài đọc: \"a temple or a communal cultural house where great events, such as festivals... and traditional games are organized.\""
    },
    { id: 25, section: "IV", type: "truefalse", passage: "villagersReading",
      prompt: "People in the Southern region build houses on stilts to protect themselves from floods.",
      correct: "True",
      explanation: "Đúng. Bài đọc: \"Villagers in the Southern... built on stilts to keep above flood waters.\""
    },
    { id: 26, section: "IV", type: "truefalse", passage: "villagersReading",
      prompt: "The Central region of Vietnam has very good weather conditions throughout the year.",
      correct: "False",
      explanation: "Sai. Bài đọc: \"In the Central of Vietnam, a place <b>suffering lots of natural disasters</b> all the year round...\" — không phải điều kiện thời tiết tốt."
    },
    { id: 27, section: "IV", type: "mcq", passage: "villagersReading",
      prompt: "What is the main idea of the passage?",
      display: {
        A: "The different ways of making a living in coastal areas of Vietnam.",
        B: "The diverse lifestyles and occupations of people in different regions of Vietnam.",
        C: "The historical importance of communal cultural houses in Vietnamese villages.",
        D: "The difficulties faced by people living in the central highlands and northern mountains."
      },
      correct: "B",
      explanation: "Bài đọc mô tả cách sinh sống, làm ăn khác nhau của người dân ở nhiều vùng miền Việt Nam (Nam, ven biển, Trung, cao nguyên, miền núi Bắc) → đáp án B bao quát toàn bài."
    },
    { id: 28, section: "IV", type: "mcq", passage: "villagersReading",
      prompt: "Which of the following is NOT true according to the passage?",
      display: {
        A: "Southern villagers often build their houses along a central road.",
        B: "Central Vietnamese people are often very studious because they face many natural disasters.",
        C: "Highland and northern mountain residents only get their food and income from hunting.",
        D: "Coastal fishermen rely entirely on farming to earn their living."
      },
      correct: "D",
      explanation: "Bài đọc nói ngư dân ven biển \"depend on <b>the sea</b> as a means of livelihood\" (sống dựa vào biển), không phải nông nghiệp → câu D SAI."
    },

    // ---------------- SECTION V (29-34) — word form ----------------
    { id: 29, section: "V", type: "fillblank",
      prompt: "Our class recently went on a field trip to a rural area, and it was a very ______________ experience.",
      wordGiven: "wonder", accepted: ["wonderful"], correct: "wonderful",
      explanation: "Cần tính từ đứng trước danh từ \"experience\". <b>wonder</b> (n/v) → <b>wonderful</b> (adj, +ful): tuyệt vời."
    },
    { id: 30, section: "V", type: "fillblank",
      prompt: "We helped local farmers harvest vegetables and enjoyed the ______________ of the countryside.",
      wordGiven: "peaceful", accepted: ["peacefulness"], correct: "peacefulness",
      explanation: "Cần danh từ làm tân ngữ của \"enjoyed\". <b>peaceful</b> (adj) → <b>peacefulness</b> (n, +ness): sự yên bình."
    },
    { id: 31, section: "V", type: "fillblank",
      prompt: "The local people are very friendly and ______________; they shared many stories with us.",
      wordGiven: "hospitable", accepted: ["hospitable"], correct: "hospitable",
      explanation: "\"hospitable\" (adj, hiếu khách) đã đúng là dạng tính từ cần dùng — từ gốc cho sẵn ở đây chính là dạng tính từ, không cần biến đổi thêm."
    },
    { id: 32, section: "V", type: "fillblank",
      prompt: "This exciting trip gave us a deeper ______________ for the simple life of the villagers.",
      wordGiven: "appreciate", accepted: ["appreciation"], correct: "appreciation",
      explanation: "Cần danh từ đứng sau \"deeper\". <b>appreciate</b> (v) → <b>appreciation</b> (n, +ion): sự trân trọng, đánh giá cao."
    },
    { id: 33, section: "V", type: "fillblank",
      prompt: "Living in the countryside is less ______________ than living in heavily industrialized cities.",
      wordGiven: "pollute", accepted: ["polluted"], correct: "polluted",
      explanation: "Cần tính từ (dạng phân từ) đứng sau \"less\". <b>pollute</b> (v) → <b>polluted</b> (adj, +ed): bị ô nhiễm."
    },
    { id: 34, section: "V", type: "fillblank",
      prompt: "The young generation should join hands to support the ______________ of local traditions.",
      wordGiven: "develop", accepted: ["development"], correct: "development",
      explanation: "Cần danh từ đứng sau \"the\". <b>develop</b> (v) → <b>development</b> (n, +ment): sự phát triển."
    },

    // ---------------- SECTION VI (35-36) — dictionary entry ----------------
    { id: 35, section: "VI", type: "fillblank", passage: "crowdedEntry",
      prompt: "It is easy to get lost when you walk through the ____________________ of the capital.",
      accepted: ["crowded streets"], correct: "crowded streets",
      explanation: "Từ điển cho ví dụ \"We pushed our way through the <b>crowded streets</b> of the city center.\" — khớp với việc dễ bị lạc khi đi qua phố đông đúc."
    },
    { id: 36, section: "VI", type: "fillblank", passage: "crowdedEntry",
      prompt: "The small city bus was ____________________ students returning home after school.",
      accepted: ["crowded with"], correct: "crowded with",
      explanation: "Từ điển cho ví dụ \"The train was <b>crowded with</b> commuters on their way to work.\" — cấu trúc \"be crowded with + N\" (đông nghịt người/vật gì)."
    },

    // ---------------- SECTION VII (37-40) — sentence rewriting ----------------
    { id: 37, section: "VII", type: "rewrite",
      prompt: "Sunny sings the song better than Jessie does.",
      starter: "Jessie does not",
      accepted: ["jessie does not sing the song as well as sunny", "jessie does not sing the song as well as sunny does"],
      correct: "Jessie does not sing the song as well as Sunny (does).",
      explanation: "So sánh hơn \"better than\" chuyển thành so sánh bằng phủ định \"<b>not ... as well as</b>\" — cùng khẳng định Sunny hát hay hơn.<br>→ <i>Jessie does not sing the song as well as Sunny.</i>"
    },
    { id: 38, section: "VII", type: "rewrite",
      prompt: "This is the most luxurious house I've ever seen in this rural village.",
      starter: "I have never",
      accepted: [
        "i have never seen a more luxurious house than this in this rural village",
        "i have never seen a more luxurious house than this one in this rural village"
      ],
      correct: "I have never seen a more luxurious house than this (one) in this rural village.",
      explanation: "So sánh nhất \"the most luxurious ... I've ever seen\" chuyển thành \"<b>have never seen a more ... than</b>\" — cấu trúc phủ định + so sánh hơn diễn tả ý nghĩa tương đương so sánh nhất.<br>→ <i>I have never seen a more luxurious house than this one in this rural village.</i>"
    },
    { id: 39, section: "VII", type: "rewrite",
      prompt: "The air in the mountains is cleaner than the air in the lowlands.",
      starter: "The air in the lowlands",
      accepted: [
        "the air in the lowlands is not as clean as the air in the mountains",
        "the air in the lowlands is dirtier than the air in the mountains",
        "the air in the lowlands is more polluted than the air in the mountains"
      ],
      correct: "The air in the lowlands is not as clean as the air in the mountains. (hoặc: is dirtier / more polluted than the air in the mountains)",
      explanation: "So sánh hơn \"cleaner than\" chuyển thành so sánh bằng phủ định \"<b>not as clean as</b>\", hoặc dùng tính từ trái nghĩa \"dirtier/more polluted than\" — cùng giữ nguyên nghĩa gốc.<br>→ <i>The air in the lowlands is not as clean as the air in the mountains.</i>"
    },
    { id: 40, section: "VII", type: "rewrite",
      prompt: "You can learn much about rural life by visiting local farms.",
      starter: "If you",
      accepted: ["if you visit local farms, you can learn much about rural life", "if you visit local farms you can learn much about rural life"],
      correct: "If you visit local farms, you can learn much about rural life.",
      explanation: "\"by V-ing\" (bằng cách làm gì) chuyển thành mệnh đề điều kiện \"<b>If you + V, you can...</b>\" — cùng diễn tả điều kiện để đạt được kết quả.<br>→ <i>If you visit local farms, you can learn much about rural life.</i>"
    }
  ]
};
