const TEST = {
  id: "test13",
  grade: "Grade 9 — Global Success",
  unit: "Unit 1: Local community",
  title: "Grade 9 · Unit 1: Local community · Test 1",
  duration: 35,
  totalPoints: 10,
  reviewPage: "review_test13.html",
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
    { id: "VI", title: "Look at the dictionary entry of “community”. Complete the sentences with no more than three words.", points: "0.5 pt", range: [35, 36] },
    { id: "VII", title: "Rewrite each sentence so that it means almost the same as the sentence printed before it.", points: "1.0 pt", range: [37, 40] }
  ],
  passages: {
    communityCloze: "Our local community plays a crucial role (17) ________ shaping a vibrant and supportive environment for all residents. One of the most effective ways to strengthen community bonds is through active participation in various local events and initiatives. For instance, neighborhood clean-up drives not only enhance the beauty of our surroundings but also foster a sense of pride and collaboration among residents.<br><br>Additionally, community gardens offer (18) ________ where people can grow fresh produce, share gardening tips, and enjoy the benefits of working together. By supporting local businesses and attending town festivals, we (19) ________ to the economic and cultural vitality of our area. Engaging with our community helps build (20) ________ relationships, address local issues, and create a more (21) ________ and resilient neighborhood. These efforts are essential in ensuring that our area remains a vibrant and thriving place for (22) ________. In conclusion, taking part in local activities and supporting community projects is not only beneficial for individuals but also strengthens the overall sense of belonging.",
    communitiesReading: "In any towns and cities, local communities play an important role in everyday life. Local community groups often organize events and activities that bring people together. For example, they might hold festivals, farmers' markets, or clean-up days. These events help to build relationships among residents and create a sense of belonging.<br><br>Community centers are common places where people can join different classes and activities, such as sports, art, and language lessons. Many local communities also have volunteer groups that help those in need, such as food banks or shelters for the homeless. By participating in these activities, people can contribute to their community and make a positive impact.<br><br>Local businesses also benefit from a strong community. When residents support local shops and restaurants, they help boost the local economy. A close-knit community often has better communication and cooperation, which can lead to improvements in local services and facilities.",
    communityEntry: {
      word: "community", ipa: "/kəˈmjuːnəti/", pos: "noun",
      def: "[C] all the people who live in a particular area or country",
      examples: [
        "The <b>local community</b> supported the new park project.",
        "It is important to involve the <b>whole community</b> in the decision.",
        "[C] a group of people who share the same religion, race, job, or interests — There is a large <b>business community</b> in this city. — The school serves the needs of the <b>immigrant community</b>.",
        "[U] the feeling of sharing things and belonging to a group — There is a strong <b>sense of community</b> in this small village."
      ]
    }
  },
  images: {
    signNoFoodDrink: "assets/images/sign_no_food_drink.jpg",
    signPublicTransportTicket: "assets/images/sign_public_transport_ticket.jpg"
  },
  questions: [
    // ---------------- SECTION I (1-14) ----------------
    { id: 1, section: "I", type: "mcq",
      prompt: "Which word has the underlined part pronounced differently from that of the others?",
      display: { A: "drama", B: "garden", C: "candy", D: "artist" },
      correct: "C",
      explanation: "\"a\" trong \"drama\" /ˈdrɑːmə/, \"garden\" /ˈɡɑːrdn/, \"artist\" /ˈɑːrtɪst/ đều phát âm là <b>/ɑː/</b>. Riêng \"candy\" /ˈkændi/ có \"a\" phát âm là <b>/æ/</b> → khác biệt, đáp án C."
    },
    { id: 2, section: "I", type: "mcq",
      prompt: "Which word has the underlined part pronounced differently from that of the others?",
      display: { A: "feather", B: "pleasure", C: "speaker", D: "weather" },
      correct: "C",
      explanation: "\"ea\" trong \"feather\" /ˈfeðər/, \"pleasure\" /ˈpleʒər/, \"weather\" /ˈweðər/ đều phát âm là <b>/e/</b>. Riêng \"speaker\" /ˈspiːkər/ có \"ea\" phát âm là <b>/iː/</b> → khác biệt, đáp án C."
    },
    { id: 3, section: "I", type: "mcq",
      prompt: "Which word has a different stress pattern from that of the others?",
      display: { A: "preserve", B: "craftsman", C: "sculpture", D: "layer" },
      correct: "A",
      explanation: "\"craftsman\" /ˈkræftsmən/, \"sculpture\" /ˈskʌlptʃər/, \"layer\" /ˈleɪər/ đều có trọng âm rơi vào <b>âm tiết 1</b>. Riêng \"preserve\" /prɪˈzɜːrv/ có trọng âm rơi vào <b>âm tiết 2</b> → khác biệt, đáp án A."
    },
    { id: 4, section: "I", type: "mcq",
      prompt: "Which word has a different stress pattern from that of the others?",
      display: { A: "handicraft", B: "lacquerware", C: "conical", D: "specific" },
      correct: "D",
      explanation: "\"handicraft\" /ˈhændikræft/, \"lacquerware\" /ˈlækərweər/, \"conical\" /ˈkɒnɪkl/ đều có trọng âm rơi vào <b>âm tiết 1</b>. Riêng \"specific\" /spəˈsɪfɪk/ có trọng âm rơi vào <b>âm tiết 2</b> → khác biệt, đáp án D."
    },
    { id: 5, section: "I", type: "mcq",
      context: "Tom: \"Is there any place for farmers to sell their vegetables?\"",
      prompt: "Lan: \"Yes, the new ______ is great for selling local produce.\"",
      display: { A: "town hall", B: "community garden", C: "recycling program", D: "farmer's market" },
      correct: "D",
      explanation: "\"<b>farmer's market</b>\" (chợ nông sản) là nơi nông dân bán rau củ trực tiếp, phù hợp với câu hỏi \"place for farmers to sell their vegetables\"."
    },
    { id: 6, section: "I", type: "mcq",
      context: "Customer: \"Why should I use cloth bags instead of plastic ones?\"",
      prompt: "Shopkeeper: \"Because we need to ______ our use of plastic to help the environment.\"",
      display: { A: "look for", B: "cut down on", C: "get on with", D: "remind" },
      correct: "B",
      explanation: "\"<b>cut down on</b>\" (cắt giảm) + danh từ (our use of plastic) phù hợp với mục đích bảo vệ môi trường."
    },
    { id: 7, section: "I", type: "mcq",
      context: "Resident: \"These old park benches are broken and dangerous.\"",
      prompt: "Officer: \"Don't worry. We will ______ them and replace them with new ones.\"",
      display: { A: "take care of", B: "take down", C: "look around", D: "set up" },
      correct: "B",
      explanation: "\"<b>take down</b>\" (dỡ bỏ, tháo dỡ) phù hợp với hành động trước khi \"replace them with new ones\" (thay bằng cái mới)."
    },
    { id: 8, section: "I", type: "mcq",
      context: "Nam: \"I'm not sure ______ to support the new recycling initiative.\"",
      prompt: "Ba: \"You should talk to the group leader; he will explain the benefits.\"",
      display: { A: "why", B: "what", C: "how", D: "who" },
      correct: "C",
      explanation: "\"not sure <b>how</b> to support\" (không chắc phải ủng hộ bằng cách nào) — câu trả lời của Ba hướng dẫn cách thức (talk to the group leader) phù hợp với \"how\"."
    },
    { id: 9, section: "I", type: "mcq",
      context: "Mai: \"We need help with the community event. Do you have a phone number?\"",
      prompt: "Phuc: \"No, they're not sure ______ to contact for support yet.\"",
      display: { A: "who", B: "how", C: "why", D: "what" },
      correct: "A",
      explanation: "\"not sure <b>who</b> to contact\" (không chắc phải liên hệ với ai) phù hợp với ngữ cảnh cần \"a phone number\" của một người cụ thể."
    },
    { id: 10, section: "I", type: "mcq",
      context: "A: \"Do you like living in this new condo?\"",
      prompt: "B: \"Not really. It's small and there are not enough ______ for families with children.\"",
      display: { A: "facilities", B: "tools", C: "equipment", D: "space" },
      correct: "A",
      explanation: "\"<b>facilities</b>\" (tiện nghi, cơ sở vật chất) phù hợp với ngữ cảnh chung cư nhỏ, thiếu tiện nghi cho gia đình có con nhỏ."
    },
    { id: 11, section: "I", type: "mcq",
      context: "Son: \"Your parents are so good at making pottery!\"",
      prompt: "An: \"Yes, my grandparents ______ those skills to them many years ago.\"",
      display: { A: "handed up", B: "handed out", C: "handed down", D: "handed off" },
      correct: "C",
      explanation: "\"<b>handed down</b>\" (truyền lại) skills/kỹ năng từ thế hệ này sang thế hệ khác — phù hợp với việc ông bà truyền nghề gốm cho cha mẹ."
    },
    { id: 12, section: "I", type: "mcq",
      context: "Nga: \"Our neighborhood is much cleaner now, isn't it?\"",
      prompt: "Minh: \"Definitely. It's because everyone joined the ______ drive last Sunday.\"",
      display: { A: "clean-up", B: "making", C: "building", D: "working" },
      correct: "A",
      explanation: "\"<b>clean-up</b> drive\" (chiến dịch dọn dẹp) phù hợp với việc khu phố sạch sẽ hơn."
    },
    { id: 13, section: "I", type: "mcq",
      context: "James: \"Could you give me a hand with these rubbish bins?\"",
      prompt: "Nga: \"______\"",
      display: {
        A: "Yes, go ahead.",
        B: "Sure. I don't like them much.",
        C: "I couldn't. They're over there.",
        D: "Certainly. Where do you want to put them?"
      },
      correct: "D",
      explanation: "\"<b>Certainly. Where do you want to put them?</b>\" là lời đồng ý giúp đỡ hợp lý, hỏi lại vị trí cần đặt thùng rác."
    },
    { id: 14, section: "I", type: "mcq",
      context: "Hieu: \"I heard your village is famous for a special kind of banh cuon.\"",
      prompt: "Kien: \"______\"",
      display: {
        A: "My village is very far from here.",
        B: "It is used to make banh cuon.",
        C: "That's right! It has a very unique taste.",
        D: "No, I don't like banh cuon."
      },
      correct: "C",
      explanation: "\"<b>That's right! It has a very unique taste.</b>\" xác nhận và bổ sung thông tin phù hợp với lời khen về đặc sản làng."
    },

    // ---------------- SECTION II (15-16) — signs/notices ----------------
    { id: 15, section: "II", type: "mcq", image: "signNoFoodDrink",
      prompt: "What does the sign say?",
      display: {
        A: "You can eat here freely.",
        B: "You can bring drinks but no food.",
        C: "Eating and drinking are not allowed.",
        D: "Food is okay, but no water."
      },
      correct: "C",
      explanation: "Biển cấm có hình bánh burger và ly nước bị gạch chéo trong vòng tròn đỏ → \"<b>Eating and drinking are not allowed.</b>\" (Cấm ăn uống), đáp án C."
    },
    { id: 16, section: "II", type: "mcq", image: "signPublicTransportTicket",
      prompt: "What does the notice say?",
      display: {
        A: "You must keep your ticket for inspection.",
        B: "Officers will give you a ticket on the bus.",
        C: "You don't need a ticket for this trip.",
        D: "You can buy tickets from the officers."
      },
      correct: "A",
      explanation: "Biển ghi \"NOTICE: Please keep your ticket. Officers may check it during the journey.\" → hành khách phải giữ vé để kiểm tra, đáp án A."
    },

    // ---------------- SECTION III (17-22) — cloze passage ----------------
    { id: 17, section: "III", type: "mcq", passage: "communityCloze", blankNum: 17,
      prompt: "Choose the best word for blank (17).",
      display: { A: "at", B: "in", C: "on", D: "for" },
      correct: "B",
      explanation: "\"plays a crucial role <b>in</b> shaping\" — cụm cố định \"play a role in doing something\" (đóng vai trò trong việc gì)."
    },
    { id: 18, section: "III", type: "mcq", passage: "communityCloze", blankNum: 18,
      prompt: "Choose the best word for blank (18).",
      display: { A: "spaces", B: "offices", C: "tools", D: "factories" },
      correct: "A",
      explanation: "\"community gardens offer <b>spaces</b>\" (vườn cộng đồng cung cấp không gian) phù hợp với vế sau \"where people can grow fresh produce\"."
    },
    { id: 19, section: "III", type: "mcq", passage: "communityCloze", blankNum: 19,
      prompt: "Choose the best word for blank (19).",
      display: { A: "connect", B: "lead", C: "contribute", D: "respond" },
      correct: "C",
      explanation: "\"we <b>contribute</b> to the economic and cultural vitality\" — cụm cố định \"contribute to something\" (đóng góp cho điều gì)."
    },
    { id: 20, section: "III", type: "mcq", passage: "communityCloze", blankNum: 20,
      prompt: "Choose the best word for blank (20).",
      display: { A: "lasting", B: "temporary", C: "sudden", D: "negative" },
      correct: "A",
      explanation: "\"build <b>lasting</b> relationships\" (xây dựng những mối quan hệ lâu bền) phù hợp với ý nghĩa tích cực của việc gắn kết cộng đồng."
    },
    { id: 21, section: "III", type: "mcq", passage: "communityCloze", blankNum: 21,
      prompt: "Choose the best word for blank (21).",
      display: { A: "unitedly", B: "unity", C: "unite", D: "united" },
      correct: "D",
      explanation: "\"a more <b>united</b> and resilient neighborhood\" — cần tính từ đứng sau \"more\" và trước danh từ \"neighborhood\", song song với \"resilient\" (adj)."
    },
    { id: 22, section: "III", type: "mcq", passage: "communityCloze", blankNum: 22,
      prompt: "Choose the best word for blank (22).",
      display: { A: "someone", B: "everyone", C: "anyone", D: "no one" },
      correct: "B",
      explanation: "\"remains a vibrant and thriving place for <b>everyone</b>\" (nơi sôi động cho tất cả mọi người) phù hợp với tinh thần cộng đồng bao trùm được nhấn mạnh xuyên suốt đoạn văn."
    },

    // ---------------- SECTION IV (23-28) — reading ----------------
    { id: 23, section: "IV", type: "truefalse", passage: "communitiesReading",
      prompt: "Local community groups arrange activities to help residents build relationships with each other.",
      correct: "True",
      explanation: "Đúng. Bài đọc: \"These events help to build relationships among residents and create a sense of belonging.\""
    },
    { id: 24, section: "IV", type: "truefalse", passage: "communitiesReading",
      prompt: "People can only learn foreign languages at local community centers.",
      correct: "False",
      explanation: "Sai. Bài đọc: community centers có \"different classes and activities, such as <b>sports, art, and language lessons</b>\" — ngoài ngoại ngữ còn nhiều hoạt động khác, không phải \"only\"."
    },
    { id: 25, section: "IV", type: "truefalse", passage: "communitiesReading",
      prompt: "Volunteer groups in local communities provide support for people who do not have a home.",
      correct: "True",
      explanation: "Đúng. Bài đọc: \"volunteer groups that help those in need, such as food banks or <b>shelters for the homeless</b>.\""
    },
    { id: 26, section: "IV", type: "truefalse", passage: "communitiesReading",
      prompt: "Supporting local shops and restaurants causes negative impacts on the local economy.",
      correct: "False",
      explanation: "Sai. Bài đọc: \"When residents support local shops and restaurants, they <b>help boost</b> the local economy.\" — tác động tích cực, không phải tiêu cực."
    },
    { id: 27, section: "IV", type: "mcq", passage: "communitiesReading",
      prompt: "What is the main idea of the passage?",
      display: {
        A: "The various activities people can do at community centers.",
        B: "The importance and benefits of local communities in towns and cities.",
        C: "The role of local businesses in boosting the economy.",
        D: "How volunteer groups help homeless people in urban areas."
      },
      correct: "B",
      explanation: "Bài đọc đề cập nhiều khía cạnh (sự kiện cộng đồng, trung tâm cộng đồng, nhóm tình nguyện, doanh nghiệp địa phương) đều xoay quanh vai trò và lợi ích của cộng đồng địa phương → đáp án B bao quát nhất."
    },
    { id: 28, section: "IV", type: "mcq", passage: "communitiesReading",
      prompt: "Which of the following is NOT true according to the passage?",
      display: {
        A: "Community events like festivals can create a sense of belonging for residents.",
        B: "People can participate in sports and art classes at community centers.",
        C: "Local services and facilities can be improved without communication and cooperation.",
        D: "Supporting local businesses helps make the local economy stronger."
      },
      correct: "C",
      explanation: "Bài đọc nói ngược lại: \"A close-knit community often has <b>better communication and cooperation</b>, which can lead to improvements in local services and facilities.\" — sự cải thiện CẦN có giao tiếp và hợp tác, không phải \"without\" → câu C SAI."
    },

    // ---------------- SECTION V (29-34) — word form ----------------
    { id: 29, section: "V", type: "fillblank",
      prompt: "The annual talent show was very ______________ this year.",
      wordGiven: "excite", accepted: ["exciting"], correct: "exciting",
      explanation: "Cần tính từ đứng sau \"was very\" để miêu tả cảm giác do sự việc mang lại. <b>excite</b> (v) → <b>exciting</b> (adj, +ing): thú vị, hấp dẫn."
    },
    { id: 30, section: "V", type: "fillblank",
      prompt: "The artisans use ______________ techniques to make these pots.",
      wordGiven: "tradition", accepted: ["traditional"], correct: "traditional",
      explanation: "Cần tính từ đứng trước danh từ \"techniques\". <b>tradition</b> (n) → <b>traditional</b> (adj, +al): truyền thống."
    },
    { id: 31, section: "V", type: "fillblank",
      prompt: "We are looking for a ______________ solution to the trash problem.",
      wordGiven: "specify", accepted: ["specific"], correct: "specific",
      explanation: "Cần tính từ đứng trước danh từ \"solution\". <b>specify</b> (v) → <b>specific</b> (adj): cụ thể, rõ ràng."
    },
    { id: 32, section: "V", type: "fillblank",
      prompt: "The new library provides excellent ______________ for students.",
      wordGiven: "facilitate", accepted: ["facilities"], correct: "facilities",
      explanation: "Cần danh từ số nhiều làm tân ngữ của \"provides\". <b>facilitate</b> (v) → <b>facility/facilities</b> (n): tiện nghi, cơ sở vật chất."
    },
    { id: 33, section: "V", type: "fillblank",
      prompt: "My brother is an ______________; he loves painting community murals.",
      wordGiven: "art", accepted: ["artist"], correct: "artist",
      explanation: "Cần danh từ chỉ người đứng sau \"an\". <b>art</b> (n) → <b>artist</b> (n, +ist): nghệ sĩ."
    },
    { id: 34, section: "V", type: "fillblank",
      prompt: "The local government is trying to ______________ the old village.",
      wordGiven: "preservation", accepted: ["preserve"], correct: "preserve",
      explanation: "Cần động từ nguyên mẫu sau \"trying to\". <b>preservation</b> (n) → <b>preserve</b> (v): bảo tồn, gìn giữ."
    },

    // ---------------- SECTION VI (35-36) — dictionary entry ----------------
    { id: 35, section: "VI", type: "fillblank", passage: "communityEntry",
      prompt: "The festival helps people feel closer together and creates a ____________________.",
      accepted: ["sense of community"], correct: "sense of community",
      explanation: "Từ điển cho ví dụ \"There is a strong <b>sense of community</b> in this small village.\" — khớp với ngữ cảnh lễ hội gắn kết mọi người."
    },
    { id: 36, section: "VI", type: "fillblank", passage: "communityEntry",
      prompt: "The local center provides free language classes for the ____________________.",
      accepted: ["immigrant community"], correct: "immigrant community",
      explanation: "Từ điển cho ví dụ \"The school serves the needs of the <b>immigrant community</b>.\" — cộng đồng người nhập cư cần các lớp học ngôn ngữ miễn phí."
    },

    // ---------------- SECTION VII (37-40) — sentence rewriting ----------------
    { id: 37, section: "VII", type: "rewrite",
      prompt: "She wondered what she should write in the final essay.",
      starter: "She wondered what",
      accepted: ["she wondered what to write in the final essay"],
      correct: "She wondered what to write in the final essay.",
      explanation: "\"wonder + wh-word + should + V\" có thể rút gọn thành \"<b>wonder + wh-word + to-V</b>\" khi chủ ngữ hai mệnh đề giống nhau.<br>→ <i>She wondered what to write in the final essay.</i>"
    },
    { id: 38, section: "VII", type: "rewrite",
      prompt: "My hometown is famous for a special kind of banh cuon.",
      starter: "Many people know",
      accepted: ["many people know my hometown for its special kind of banh cuon"],
      correct: "Many people know my hometown for its special kind of banh cuon.",
      explanation: "\"S + be famous for + N\" có thể diễn đạt lại bằng \"<b>Many people know + S + for + N</b>\" — cùng nêu lý do nổi tiếng.<br>→ <i>Many people know my hometown for its special kind of banh cuon.</i>"
    },
    { id: 39, section: "VII", type: "rewrite",
      prompt: "They started the new community garden project last month.",
      starter: "The new community garden project",
      accepted: ["the new community garden project was started last month"],
      correct: "The new community garden project was started last month.",
      explanation: "Chuyển từ câu chủ động sang <b>bị động</b>: tân ngữ \"the new community garden project\" lên làm chủ ngữ + \"was/were + V3\".<br>→ <i>The new community garden project was started last month.</i>"
    },
    { id: 40, section: "VII", type: "rewrite",
      prompt: "We had no food left, but we continued to walk.",
      starter: "Although we had run",
      accepted: ["although we had run out of food, we continued to walk"],
      correct: "Although we had run out of food, we continued to walk.",
      explanation: "Câu ghép với \"but\" chuyển thành câu có mệnh đề nhượng bộ \"<b>Although + S + V</b>\", đồng thời \"have no food left\" (không còn thức ăn) diễn đạt lại bằng \"<b>run out of food</b>\" (hết sạch thức ăn).<br>→ <i>Although we had run out of food, we continued to walk.</i>"
    }
  ]
};
