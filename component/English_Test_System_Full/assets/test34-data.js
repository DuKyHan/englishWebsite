const TEST = {
  id: "test34",
  grade: "Grade 6 — Global Success",
  unit: "Unit 5: Natural wonders of Viet Nam",
  title: "Grade 6 · Unit 5: Natural wonders of Viet Nam · Test 2",
  duration: 35,
  totalPoints: 10,
  reviewPage: "review_test34.html",
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
    { id: "VI", title: "Look at the dictionary entry of “aquarium”. Complete the sentences with no more than three words.", points: "0.5 pt", range: [35, 36] },
    { id: "VII", title: "Rewrite each sentence so that it means almost the same as the sentence printed before it.", points: "1.0 pt", range: [37, 40] }
  ],
  passages: {
    newquayCloze: "Newquay is a small town on the Atlantic coast in the south of England. It has got great beaches and is the best place to surf in the UK. In Newquay, there are (17) ________ of other things to do as well as surfing. If you like water sports, you can go kayaking, water-skiing or coasteering. Coasteering is (18) ________ because it is rock climbing, jumping into the sea and swimming in the same activity, (19) ________ you should always go with a special instructor. If you like animals you can also (20) ________ the Blue Reef aquarium and see a lot of different fish and even sharks. You can also go horse riding (21) ________ the beach or (22) ________ Newquay Zoo. Come and see for yourself.",
    daNangReading: "Da Nang has a population of nearly 800,000 people. The Han River flows through the city. The city part on the east bank is the newest and spacious. The city part on the west bank is more crowded. There are five bridges across the river. The Han River Bridge is the newest one now. The cost of living in Da Nang is the lowest in Central Viet Nam. Da Nang has many beaches. Among them, Non Nuoc Beach is one of the beautiful beaches in the world. But walking in the street on a summer afternoon is not a good idea in Da Nang. There are not many trees so there are not many shadows. It is often very hot at noon.",
    aquariumEntry: {
      word: "aquarium", ipa: "/əˈkweəriəm/", pos: "noun (plural aquariums or aquaria)",
      def: "1. a building where fish and other water animals are kept for people to visit. 2. a glass container filled with water that fish are kept in — SYNONYM: fish tank.",
      examples: [
        "We took the children to the <b>public aquarium</b>.",
        "The city has a <b>famous aquarium</b> near the harbor.",
        "He bought a <b>small aquarium</b> for his goldfish.",
        "You need to clean the <b>home aquarium</b> regularly."
      ]
    }
  },
  images: {
    noticeDiningClosed: "assets/images/notice_dining_closed.jpg",
    signSilentZone: "assets/images/sign_silent_zone.jpg"
  },
  questions: [
    // ---------------- SECTION I (1-14) ----------------
    { id: 1, section: "I", type: "mcq",
      prompt: "Which word has the underlined part pronounced differently from that of the others?",
      display: { A: "welcome", B: "enjoy", C: "desert", D: "hotel" },
      correct: "B",
      explanation: "Phần gạch chân là chữ cái \"e\". \"welcome\" /ˈwelkəm/, \"desert\" /ˈdezərt/, \"hotel\" /hoʊˈtel/ đều có \"e\" phát âm là <b>/e/</b>. Riêng \"enjoy\" /ɪnˈdʒɔɪ/ có \"e\" phát âm là <b>/ɪ/</b> → khác biệt, đáp án B."
    },
    { id: 2, section: "I", type: "mcq",
      prompt: "Which word has the underlined part pronounced differently from that of the others?",
      display: { A: "mountain", B: "tourist", C: "national", D: "important" },
      correct: "C",
      explanation: "Phần gạch chân là chữ cái \"t\". \"mountain\" /ˈmaʊntən/, \"tourist\" /ˈtʊərɪst/, \"important\" /ɪmˈpɔːrtnt/ đều có \"t\" phát âm là <b>/t/</b>. Riêng \"national\" /ˈnæʃnəl/ có \"t\" (trong \"-tional\") phát âm là <b>/ʃ/</b> → khác biệt, đáp án C."
    },
    { id: 3, section: "I", type: "mcq",
      prompt: "Which word has a different stress pattern from that of the others?",
      display: { A: "river", B: "forest", C: "plaster", D: "explore" },
      correct: "D",
      explanation: "\"river\" /ˈrɪvər/, \"forest\" /ˈfɔːrɪst/, \"plaster\" /ˈplæstər/ đều có trọng âm rơi vào <b>âm tiết 1</b>. Riêng \"explore\" /ɪkˈsplɔːr/ có trọng âm rơi vào <b>âm tiết 2</b> → khác biệt, đáp án D."
    },
    { id: 4, section: "I", type: "mcq",
      prompt: "Which word has a different stress pattern from that of the others?",
      display: { A: "important", B: "national", C: "waterfall", D: "popular" },
      correct: "A",
      explanation: "\"national\" /ˈnæʃnəl/, \"waterfall\" /ˈwɔːtərfɔːl/, \"popular\" /ˈpɒpjələr/ đều có trọng âm rơi vào <b>âm tiết 1</b>. Riêng \"important\" /ɪmˈpɔːrtnt/ có trọng âm rơi vào <b>âm tiết 2</b> → khác biệt, đáp án A."
    },
    { id: 5, section: "I", type: "mcq",
      context: "Minh: \"It is raining heavily in Ha Noi right now.\"",
      prompt: "Lan: \"Yes, so remember __________ bring an umbrella before going out!\"",
      display: { A: "from", B: "of", C: "with", D: "to" },
      correct: "D",
      explanation: "\"remember <b>to</b> + V nguyên thể\" nghĩa là \"nhớ làm gì đó\" (mang tính nhắc nhở cho tương lai)."
    },
    { id: 6, section: "I", type: "mcq",
      context: "Tom: \"Do you think wild animals are happy in a zoo cage?\"",
      prompt: "Mary: \"No, I think they are much happier in their __________ state.\"",
      display: { A: "home", B: "cage", C: "stalls", D: "natural" },
      correct: "D",
      explanation: "\"<b>natural</b> state\" (trạng thái tự nhiên) đối lập với \"zoo cage\" (lồng ở sở thú), phù hợp với ý động vật hoang dã hạnh phúc hơn trong môi trường tự nhiên."
    },
    { id: 7, section: "I", type: "mcq",
      context: "Elena: \"Have you got __________ time for coffee after the lecture?\"",
      prompt: "David: \"Yes, I do. Let's find a quiet cafe nearby.\"",
      display: { A: "some", B: "an", C: "the", D: "a" },
      correct: "A",
      explanation: "\"<b>some</b>\" được dùng trong câu hỏi mang tính đề nghị/mời (expecting yes) thay vì \"any\", ví dụ: \"Have you got some time...?\""
    },
    { id: 8, section: "I", type: "mcq",
      context: "John: \"Look at the waterfall under the night sky!\"",
      prompt: "David: \"Wow! The __________ will become radiant in the moonlight.\"",
      display: { A: "waterfall", B: "island", C: "chair", D: "sun" },
      correct: "A",
      explanation: "Câu trả lời nhắc lại chủ thể mà John vừa nói tới: \"the <b>waterfall</b> will become radiant in the moonlight\" (thác nước sẽ trở nên rực rỡ dưới ánh trăng)."
    },
    { id: 9, section: "I", type: "mcq",
      context: "Teacher: \"Why is the air in many big cities so bad, Nam?\"",
      prompt: "Nam: \"Because it is heavily __________ with vehicle exhaust fumes, teacher.\"",
      display: { A: "contained", B: "polluted", C: "crowded", D: "wasted" },
      correct: "B",
      explanation: "Không khí xấu do khí thải xe cộ → \"heavily <b>polluted</b> with\" (bị ô nhiễm nặng bởi)."
    },
    { id: 10, section: "I", type: "mcq",
      context: "Guide: \"We are going to visit Sapa this December.\"",
      prompt: "Tourist: \"You __________ take a lot of warm clothes when you go there in winter.\"",
      display: { A: "mustn't", B: "must", C: "can", D: "can't" },
      correct: "B",
      explanation: "\"<b>must</b>\" diễn tả lời khuyên mạnh/sự cần thiết: nên mang nhiều quần áo ấm khi đến nơi lạnh vào mùa đông."
    },
    { id: 11, section: "I", type: "mcq",
      context: "Peter: \"Can you recommend a traditional dish of Ha Noi?\"",
      prompt: "Jane: \"You should try Banh cuon. It is a famous traditional __________ there.\"",
      display: { A: "cuisine", B: "system", C: "transport", D: "machine" },
      correct: "A",
      explanation: "\"traditional <b>cuisine</b>\" (nền ẩm thực truyền thống) phù hợp với ngữ cảnh nói về món ăn."
    },
    { id: 12, section: "I", type: "mcq",
      context: "Nam: \"Let's go to Cuc Phuong National Park this Sunday.\"",
      prompt: "Minh: \"__________\"",
      display: { A: "I usually go there.", B: "That's a good idea!", C: "What can I do?", D: "I know it." },
      correct: "B",
      explanation: "\"<b>That's a good idea!</b>\" là lời đáp phù hợp thể hiện sự đồng tình với lời đề nghị \"Let's...\"."
    },
    { id: 13, section: "I", type: "mcq",
      context: "Sarah: \"How do you feel about the upcoming trip to Phong Nha Cave?\"",
      prompt: "Mark: \"I'm so excited! It's going to be a/an __________ adventure.\"",
      display: { A: "thrilling", B: "expensive", C: "boring", D: "ordinary" },
      correct: "A",
      explanation: "\"<b>thrilling</b> adventure\" (cuộc phiêu lưu ly kỳ, hồi hộp) phù hợp với cảm xúc hào hứng \"I'm so excited!\"."
    },
    { id: 14, section: "I", type: "mcq",
      context: "Tourist: \"Excuse me, how much money do we need for a tour to Mui Ne?\"",
      prompt: "Agent: \"__________\"",
      display: { A: "It depends on your hotel choice, but it is usually quite cheap.", B: "You can do surfing and play on the sand there.", C: "Mui Ne has beautiful sand dunes with different colors.", D: "I really want to visit Mui Ne this summer holiday." },
      correct: "A",
      explanation: "Câu hỏi của khách hỏi về chi phí (\"how much money\"), nên câu trả lời phù hợp phải đề cập đến giá cả: \"<b>It depends on your hotel choice, but it is usually quite cheap.</b>\""
    },

    // ---------------- SECTION II (15-16) — sign & notice ----------------
    { id: 15, section: "II", type: "mcq", image: "noticeDiningClosed",
      prompt: "What does this sign say?",
      display: {
        A: "The dining area is closed for setup and will open at 1 PM.",
        B: "The dining area will be closed permanently after 1 PM.",
        C: "You can eat inside while the staff finish preparing.",
        D: "The dining area only opens for 1 hour from now."
      },
      correct: "A",
      explanation: "Biển thông báo: \"DINING AREA CLOSED FOR PREPARATION. WILL OPEN AT 1 PM.\" → khu ăn uống đang đóng cửa để chuẩn bị và sẽ mở lúc 1 giờ chiều → \"<b>The dining area is closed for setup and will open at 1 PM.</b>\", đáp án A."
    },
    { id: 16, section: "II", type: "mcq", image: "signSilentZone",
      prompt: "What does this sign tell you to do?",
      display: {
        A: "Keep quiet because loud noises are not allowed in this area.",
        B: "Making noise is highly encouraged in this zone.",
        C: "You can make noise and talk loudly in this area.",
        D: "This area is not watched, so noise is not controlled."
      },
      correct: "A",
      explanation: "Biển \"SILENT ZONE — NO LOUD NOISES ALLOWED\" yêu cầu giữ yên lặng vì tiếng ồn lớn không được phép trong khu vực này → \"<b>Keep quiet because loud noises are not allowed in this area.</b>\", đáp án A."
    },

    // ---------------- SECTION III (17-22) — cloze passage ----------------
    { id: 17, section: "III", type: "mcq", passage: "newquayCloze", blankNum: 17,
      prompt: "Choose the best word for blank (17).",
      display: { A: "some", B: "lots", C: "many", D: "much" },
      correct: "B",
      explanation: "\"there are <b>lots</b> of other things to do\" — \"lots of\" là cụm cố định nghĩa \"rất nhiều\", đi cùng \"of\"."
    },
    { id: 18, section: "III", type: "mcq", passage: "newquayCloze", blankNum: 18,
      prompt: "Choose the best word for blank (18).",
      display: { A: "difficult", B: "dangerous", C: "boring", D: "different" },
      correct: "D",
      explanation: "\"Coasteering is <b>different</b> because it is rock climbing, jumping into the sea and swimming in the same activity\" — vì kết hợp nhiều hoạt động trong một, nên nó \"khác biệt\"."
    },
    { id: 19, section: "III", type: "mcq", passage: "newquayCloze", blankNum: 19,
      prompt: "Choose the best word for blank (19).",
      display: { A: "but", B: "or", C: "so", D: "because" },
      correct: "C",
      explanation: "\"..., <b>so</b> you should always go with a special instructor\" — \"so\" nối nguyên nhân (hoạt động có tính nguy hiểm) với kết quả (nên đi cùng huấn luyện viên)."
    },
    { id: 20, section: "III", type: "mcq", passage: "newquayCloze", blankNum: 20,
      prompt: "Choose the best word for blank (20).",
      display: { A: "travel", B: "visit", C: "look", D: "watch" },
      correct: "B",
      explanation: "\"<b>visit</b> the Blue Reef aquarium\" (ghé thăm) là động từ phù hợp nhất khi nói về việc đến tham quan một địa điểm."
    },
    { id: 21, section: "III", type: "mcq", passage: "newquayCloze", blankNum: 21,
      prompt: "Choose the best word for blank (21).",
      display: { A: "at", B: "in", C: "by", D: "on" },
      correct: "D",
      explanation: "\"go horse riding <b>on</b> the beach\" — giới từ \"on\" dùng với bề mặt như bãi biển."
    },
    { id: 22, section: "III", type: "mcq", passage: "newquayCloze", blankNum: 22,
      prompt: "Choose the best word for blank (22).",
      display: { A: "meet", B: "explore", C: "catch", D: "stay" },
      correct: "B",
      explanation: "\"<b>explore</b> Newquay Zoo\" (khám phá) phù hợp với ngữ cảnh liệt kê các hoạt động tham quan, khám phá."
    },

    // ---------------- SECTION IV (23-28) — reading ----------------
    { id: 23, section: "IV", type: "truefalse", passage: "daNangReading",
      prompt: "There are fewer than 800,000 people living in Da Nang.",
      correct: "True",
      explanation: "Đúng. Bài đọc: \"Da Nang has a population of nearly 800,000 people\" — \"nearly 800,000\" (gần 800.000) nghĩa là ít hơn 800.000."
    },
    { id: 24, section: "IV", type: "truefalse", passage: "daNangReading",
      prompt: "The west bank of the city is less crowded than the east bank.",
      correct: "False",
      explanation: "Sai. Bài đọc: \"The city part on the west bank is more crowded\" — bờ Tây đông đúc hơn, không phải ít đông đúc hơn."
    },
    { id: 25, section: "IV", type: "truefalse", passage: "daNangReading",
      prompt: "Da Nang is the cheapest place to live in Central Viet Nam.",
      correct: "True",
      explanation: "Đúng. Bài đọc: \"The cost of living in Da Nang is the lowest in Central Viet Nam\" — chi phí sinh hoạt thấp nhất."
    },
    { id: 26, section: "IV", type: "truefalse", passage: "daNangReading",
      prompt: "Walking around the city on a summer afternoon is highly recommended.",
      correct: "False",
      explanation: "Sai. Bài đọc: \"walking in the street on a summer afternoon is not a good idea in Da Nang\" — không được khuyến khích."
    },
    { id: 27, section: "IV", type: "mcq", passage: "daNangReading",
      prompt: "How many bridges are there across the Han River in Da Nang?",
      display: { A: "Five", B: "Three", C: "Four", D: "Six" },
      correct: "A",
      explanation: "Bài đọc: \"There are five bridges across the river.\" → đáp án A."
    },
    { id: 28, section: "IV", type: "mcq", passage: "daNangReading",
      prompt: "Why is it not a good idea to walk in the street on a summer afternoon?",
      display: { A: "Because there are not many trees to provide shade.", B: "Because there are too many beaches.", C: "Because the cost of living is too low.", D: "Because the city is too crowded." },
      correct: "A",
      explanation: "Bài đọc: \"There are not many trees so there are not many shadows. It is often very hot at noon.\" → thiếu cây xanh nên thiếu bóng râm, đáp án A."
    },

    // ---------------- SECTION V (29-34) — word form ----------------
    { id: 29, section: "V", type: "fillblank",
      prompt: "We are organizing a _____________ trip to explore the natural wonders of Vietnam.",
      wordGiven: "THRILL", accepted: ["thrilling"], correct: "thrilling",
      explanation: "Cần tính từ đứng trước danh từ \"trip\". <b>thrill</b> (v/n) → <b>thrilling</b> (adj, +ing, ly kỳ, hồi hộp)."
    },
    { id: 30, section: "V", type: "fillblank",
      prompt: "Wild animals are happier in their _____________ state than in a zoo cage.",
      wordGiven: "NATURE", accepted: ["natural"], correct: "natural",
      explanation: "Cần tính từ đứng trước danh từ \"state\". <b>nature</b> (n) → <b>natural</b> (adj, tự nhiên)."
    },
    { id: 31, section: "V", type: "fillblank",
      prompt: "The air in many big cities is heavily _____________ by vehicle exhaust fumes.",
      wordGiven: "POLLUTE", accepted: ["polluted"], correct: "polluted",
      explanation: "Cần tính từ/quá khứ phân từ sau \"is heavily\". <b>pollute</b> (v) → <b>polluted</b> (adj, +ed, bị ô nhiễm)."
    },
    { id: 32, section: "V", type: "fillblank",
      prompt: "The mountain waterfall will become radiant and _____________ in the moonlight.",
      wordGiven: "BEAUTY", accepted: ["beautiful"], correct: "beautiful",
      explanation: "Cần tính từ song song với \"radiant\". <b>beauty</b> (n) → <b>beautiful</b> (adj, +ful, đẹp)."
    },
    { id: 33, section: "V", type: "fillblank",
      prompt: "Ha Long Bay is famous for its magnificent caves and unique _____________ wonders.",
      wordGiven: "NATURE", accepted: ["natural"], correct: "natural",
      explanation: "Cần tính từ đứng trước danh từ \"wonders\". <b>nature</b> (n) → <b>natural</b> (adj, tự nhiên)."
    },
    { id: 34, section: "V", type: "fillblank",
      prompt: "Banh cuon and Pho are two famous _____________ dishes that you must try in Hanoi.",
      wordGiven: "TRADITION", accepted: ["traditional"], correct: "traditional",
      explanation: "Cần tính từ đứng trước danh từ \"dishes\". <b>tradition</b> (n) → <b>traditional</b> (adj, +al, truyền thống)."
    },

    // ---------------- SECTION VI (35-36) — dictionary entry ----------------
    { id: 35, section: "VI", type: "fillblank", passage: "aquariumEntry",
      prompt: "Families often spend their weekends visiting the __________________ to see sharks and dolphins.",
      accepted: ["public aquarium"], correct: "public aquarium",
      explanation: "Từ điển cho ví dụ \"We took the children to the <b>public aquarium</b>.\" — khớp với ngữ cảnh gia đình đi tham quan xem cá mập, cá heo."
    },
    { id: 36, section: "VI", type: "fillblank", passage: "aquariumEntry",
      prompt: "My father bought a __________________ to keep three beautiful goldfish in the living room.",
      accepted: ["small aquarium"], correct: "small aquarium",
      explanation: "Từ điển cho ví dụ \"He bought a <b>small aquarium</b> for his goldfish.\" — khớp với ngữ cảnh nuôi cá vàng trong nhà."
    },

    // ---------------- SECTION VII (37-40) — sentence rewriting ----------------
    { id: 37, section: "VII", type: "rewrite",
      prompt: "It can be quite cold at night in Da Lat, so take some warm clothes with you.",
      starter: "Because it",
      accepted: ["because it can be quite cold at night in dalat, you should take some warm clothes with you", "because it can be quite cold at night in da lat, you should take some warm clothes with you"],
      correct: "Because it can be quite cold at night in Da Lat, you should take some warm clothes with you.",
      explanation: "Câu với \"..., so + kết quả\" có thể viết lại bằng \"<b>Because + nguyên nhân, + kết quả</b>\", đảo trật tự nhưng giữ nguyên nghĩa.<br>→ <i>Because it can be quite cold at night in Da Lat, you should take some warm clothes with you.</i>"
    },
    { id: 38, section: "VII", type: "rewrite",
      prompt: "Their strict rule is wearing a swimsuit in the public pool.",
      starter: "You must",
      accepted: ["you must wear a swimsuit in the public pool"],
      correct: "You must wear a swimsuit in the public pool.",
      explanation: "\"Their strict rule is + V-ing\" (quy định nghiêm ngặt là...) có thể viết lại bằng \"<b>You must + V nguyên thể</b>\" để diễn tả sự bắt buộc.<br>→ <i>You must wear a swimsuit in the public pool.</i>"
    },
    { id: 39, section: "VII", type: "rewrite",
      prompt: "This site is famous for its thrilling scenery.",
      starter: "This site has",
      accepted: ["this site has a reputation for its thrilling scenery"],
      correct: "This site has a reputation for its thrilling scenery.",
      explanation: "\"be famous for\" (nổi tiếng vì) có thể viết lại bằng \"<b>have a reputation for</b>\" (có danh tiếng vì), giữ nguyên nghĩa.<br>→ <i>This site has a reputation for its thrilling scenery.</i>"
    },
    { id: 40, section: "VII", type: "rewrite",
      prompt: "How much money do you need for a tour to Mui Ne?",
      starter: "What is the",
      accepted: ["what is the price of a tour to mui ne", "what is the cost of a tour to mui ne"],
      correct: "What is the price of a tour to Mui Ne?",
      explanation: "\"How much money do you need for + N?\" (bạn cần bao nhiêu tiền cho...) có thể viết lại bằng \"<b>What is the price/cost of + N?</b>\" (giá của... là bao nhiêu), giữ nguyên nghĩa hỏi về chi phí.<br>→ <i>What is the price of a tour to Mui Ne?</i>"
    }
  ]
};
