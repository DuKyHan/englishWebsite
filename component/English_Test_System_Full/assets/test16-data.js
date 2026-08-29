const TEST = {
  id: "test16",
  grade: "Grade 9 — Global Success",
  unit: "Unit 2: City life",
  title: "Grade 9 · Unit 2: City life · Test 2",
  duration: 35,
  totalPoints: 10,
  reviewPage: "review_test16.html",
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
    { id: "VI", title: "Look at the dictionary entry of “bustling”. Complete the sentences with no more than three words.", points: "0.5 pt", range: [35, 36] },
    { id: "VII", title: "Rewrite each sentence so that it means almost the same as the sentence printed before it.", points: "1.0 pt", range: [37, 40] }
  ],
  passages: {
    tokyoCloze: "Tokyo's rankings in several of the latest livability indexes speak for themselves. In 2022, Tokyo (17) ________ second on Global Finance Magazine's Best Cities Index and sixth on Monocle's Quality of Life Survey. Taipei-born Kay Lin, Executive Officer at Japan Exchange Group (JPX), first came to Japan as a student. After some years in Taiwan and the US, she decided (18) ________ in Tokyo in 2009. \"The cleanliness and safety make it comfortable to live here and the infrastructure is very well developed,\" she says, noting that the (19) ________ of living is low compared (20) ________ other financial cities. David Shirt, CEO of investment advisory firm Astris Advisory Japan, concurs. \"Tokyo is clean and safe, with world-class education and lots of international schools. And it's (21) ________. People talk about low taxes in Singapore (22) ________ rents are sky-high. Here, on the other hand, rents are lower and you get a world-class city to live in.\"",
    trafficPollutionReading: "Traffic jams and pollution are two big problems in the city. Traffic jams occur when there are too many cars on the roads, making it difficult for people to move around quickly. To solve this, cities can encourage people to use public transportation, like buses or trains, instead of driving their own cars. This would reduce the number of vehicles on the roads, easing traffic congestion. Pollution is another issue in cities because there is too much dirty air from vehicles and factories. One solution for this problem is to plant more trees and create more green spaces in the city. Trees provide oxygen and clean the air. By increasing the number of trees, cities can improve air quality and make the environment healthier for everyone. In conclusion, we all need to work together to solve the problems of traffic and pollution. By using public transportation and starting green projects like planting trees, we can make our city environment more sustainable and enjoyable.",
    bustlingEntry: {
      word: "bustling", ipa: "/ˈbʌslɪŋ/", pos: "adjective",
      def: "full of people as they move around in a busy way",
      examples: [
        "The flower market was <b>bustling with life</b> and color.",
        "Ho Chi Minh City is a <b>bustling city</b> that never sleeps.",
        "The café has a <b>bustling atmosphere</b> during the lunch hour.",
        "New York is a <b>bustling center</b> of trade and culture."
      ]
    }
  },
  images: {
    signConstructionDanger: "assets/images/sign_construction_danger.jpg",
    signNoSmokingBusStop: "assets/images/sign_no_smoking_bus_stop.jpg"
  },
  questions: [
    // ---------------- SECTION I (1-14) ----------------
    { id: 1, section: "I", type: "mcq",
      prompt: "Which word has the underlined part pronounced differently from that of the others?",
      display: { A: "couch", B: "centre", C: "camping", D: "cover" },
      correct: "B",
      explanation: "\"c\" trong \"couch\" /kaʊtʃ/, \"camping\" /ˈkæmpɪŋ/, \"cover\" /ˈkʌvər/ đều phát âm là <b>/k/</b>. Riêng \"centre\" /ˈsentər/ có \"c\" phát âm là <b>/s/</b> → khác biệt, đáp án B."
    },
    { id: 2, section: "I", type: "mcq",
      prompt: "Which word has the underlined part pronounced differently from that of the others?",
      display: { A: "wear", B: "near", C: "bear", D: "pear" },
      correct: "B",
      explanation: "\"ear\" trong \"wear\" /weər/, \"bear\" /beər/, \"pear\" /peər/ đều phát âm là <b>/eər/</b>. Riêng \"near\" /nɪər/ có \"ear\" phát âm là <b>/ɪər/</b> → khác biệt, đáp án B."
    },
    { id: 3, section: "I", type: "mcq",
      prompt: "Which word has a different stress pattern from that of the others?",
      display: { A: "pollute", B: "mingle", C: "locate", D: "attract" },
      correct: "B",
      explanation: "\"pollute\" /pəˈluːt/, \"locate\" /loʊˈkeɪt/, \"attract\" /əˈtrækt/ đều có trọng âm rơi vào <b>âm tiết 2</b>. Riêng \"mingle\" /ˈmɪŋɡl/ có trọng âm rơi vào <b>âm tiết 1</b> → khác biệt, đáp án B."
    },
    { id: 4, section: "I", type: "mcq",
      prompt: "Which word has a different stress pattern from that of the others?",
      display: { A: "quality", B: "interview", C: "solution", D: "newspaper" },
      correct: "C",
      explanation: "\"quality\" /ˈkwɒləti/, \"interview\" /ˈɪntərvjuː/, \"newspaper\" /ˈnjuːzpeɪpər/ đều có trọng âm rơi vào <b>âm tiết 1</b>. Riêng \"solution\" /səˈluːʃn/ có trọng âm rơi vào <b>âm tiết 2</b> → khác biệt, đáp án C."
    },
    { id: 5, section: "I", type: "mcq",
      context: "Nam: \"Why do you prefer getting around by underground?\"",
      prompt: "Hoa: \"Because I hate the smell of ______, and it's much cleaner.\"",
      display: { A: "solar power", B: "car exhaust", C: "fresh air", D: "green trees" },
      correct: "B",
      explanation: "\"the smell of <b>car exhaust</b>\" (mùi khí thải xe hơi) phù hợp với lý do ghét đi trên mặt đường và ưa thích tàu điện ngầm sạch hơn."
    },
    { id: 6, section: "I", type: "mcq",
      context: "Tom: \"Is your new neighborhood a good place to live?\"",
      prompt: "Lan: \"Yes, the public amenities make it a very ______ place for everyone.\"",
      display: { A: "livable", B: "dull", C: "boring", D: "crowded" },
      correct: "A",
      explanation: "\"a very <b>livable</b> place\" (nơi đáng sống) phù hợp với việc có nhiều tiện nghi công cộng tốt."
    },
    { id: 7, section: "I", type: "mcq",
      context: "Mom: \"Did you remember to shut down everything before leaving?\"",
      prompt: "Son: \"Yes, after I found the information I needed, I turned ______ the computer.\"",
      display: { A: "in", B: "on", C: "off", D: "of" },
      correct: "C",
      explanation: "\"turned <b>off</b> the computer\" (tắt máy tính) là cụm động từ cố định, phù hợp với việc \"shut down\" trước khi rời đi."
    },
    { id: 8, section: "I", type: "mcq",
      context: "Ba: \"Why is it so noisy and dusty at the end of the street?\"",
      prompt: "An: \"There's a ______ there. They are building a new shopping mall.\"",
      display: { A: "construction site", B: "playground", C: "quiet lake", D: "hospital" },
      correct: "A",
      explanation: "\"a <b>construction site</b>\" (công trường xây dựng) phù hợp với tiếng ồn, bụi bặm, và việc đang xây trung tâm mua sắm."
    },
    { id: 9, section: "I", type: "mcq",
      context: "Tourist: \"What is Hong Kong like?\"",
      prompt: "Guide: \"It's like a concrete jungle with so many people. It's a ______ city.\"",
      display: { A: "calm", B: "quiet", C: "peaceful", D: "bustling" },
      correct: "D",
      explanation: "\"a <b>bustling</b> city\" (thành phố nhộn nhịp, sầm uất) phù hợp với hình ảnh \"concrete jungle with so many people\"."
    },
    { id: 10, section: "I", type: "mcq",
      context: "A: \"Do you think city life is becoming too expensive?\"",
      prompt: "B: \"Yes. The ______ the cost of living is, the ______ people can afford it.\"",
      display: { A: "higher / more", B: "higher / less", C: "lower / more", D: "lower / less" },
      correct: "B",
      explanation: "Chi phí sinh hoạt càng <b>cao</b> (higher) thì người dân càng <b>ít</b> (less) khả năng chi trả — cấu trúc so sánh kép \"The higher..., the less...\"."
    },
    { id: 11, section: "I", type: "mcq",
      context: "A: \"Is the new sky train system good for the citizens?\"",
      prompt: "B: \"Definitely. The ______ it is, the ______ it is for people to travel.\"",
      display: { A: "less efficient / easier", B: "more efficient / easier", C: "more efficient / harder", D: "less efficient / harder" },
      correct: "B",
      explanation: "Hệ thống càng <b>hiệu quả</b> (more efficient) thì việc di chuyển càng <b>dễ dàng</b> (easier) — hai vế cùng chiều tăng, phù hợp với \"Definitely\" (khẳng định tích cực)."
    },
    { id: 12, section: "I", type: "mcq",
      context: "Tom: \"Would you like to come to dinner next Friday?\"",
      prompt: "Lan: \"______. I have too much homework to do.\"",
      display: { A: "Certainly not", B: "I hope not", C: "Unfortunately not", D: "I'm afraid I can't" },
      correct: "D",
      explanation: "\"<b>I'm afraid I can't</b>\" là cách từ chối lời mời một cách lịch sự, phù hợp với lý do bận làm bài tập."
    },
    { id: 13, section: "I", type: "mcq",
      context: "Mark: \"I've heard that some cities are like \\\"concrete jungles\\\".\"",
      prompt: "Lucy: \"That's true. It's because they have ______ many buildings and little green space.\"",
      display: { A: "very", B: "such", C: "too", D: "so" },
      correct: "D",
      explanation: "\"<b>so</b> many buildings\" — cấu trúc \"so + many/much + N\" (quá nhiều); \"such\" cần đi với cụm danh từ đầy đủ có tính từ (such + a/an + adj + N hoặc such + adj + plural N), ở đây \"so many\" phù hợp hơn theo đáp án gốc."
    },
    { id: 14, section: "I", type: "mcq",
      context: "A: \"How can we improve the life of people in our hometown?\"",
      prompt: "B: \"I believe ______ noise pollution can lead to a better quality of life.\"",
      display: { A: "causing", B: "reducing", C: "increasing", D: "making" },
      correct: "B",
      explanation: "\"<b>reducing</b> noise pollution\" (giảm ô nhiễm tiếng ồn) phù hợp với việc cải thiện chất lượng cuộc sống."
    },

    // ---------------- SECTION II (15-16) — signs/notices ----------------
    { id: 15, section: "II", type: "mcq", image: "signConstructionDanger",
      prompt: "What does this sign mean?",
      display: {
        A: "You can play here if you wear a helmet.",
        B: "You are not allowed to enter this area because it is dangerous.",
        C: "You should drive faster to pass this area.",
        D: "This is a quiet place for residents to relax."
      },
      correct: "B",
      explanation: "Biển ghi \"DANGER — CONSTRUCTION AREA — KEEP OUT\" → khu vực nguy hiểm, cấm vào, đáp án B."
    },
    { id: 16, section: "II", type: "mcq", image: "signNoSmokingBusStop",
      prompt: "What does this sign tell you?",
      display: {
        A: "You must not smoke while waiting for the bus here.",
        B: "You can smoke if you are outside the bus.",
        C: "Only the bus driver is allowed to smoke.",
        D: "Smoking is encouraged to reduce stress."
      },
      correct: "A",
      explanation: "Biển ghi \"NO SMOKING AT BUS STOP\" → cấm hút thuốc tại trạm xe buýt, đáp án A."
    },

    // ---------------- SECTION III (17-22) — cloze passage ----------------
    { id: 17, section: "III", type: "mcq", passage: "tokyoCloze", blankNum: 17,
      prompt: "Choose the best word for blank (17).",
      display: { A: "ranks", B: "ranked", C: "has ranked", D: "will rank" },
      correct: "B",
      explanation: "\"In 2022, Tokyo <b>ranked</b> second...\" — mốc thời gian cụ thể trong quá khứ (\"In 2022\") cần thì quá khứ đơn."
    },
    { id: 18, section: "III", type: "mcq", passage: "tokyoCloze", blankNum: 18,
      prompt: "Choose the best word for blank (18).",
      display: { A: "settle", B: "to settle", C: "settling", D: "to settling" },
      correct: "B",
      explanation: "\"decided <b>to settle</b>\" — cấu trúc cố định \"decide + to V\" (quyết định làm gì)."
    },
    { id: 19, section: "III", type: "mcq", passage: "tokyoCloze", blankNum: 19,
      prompt: "Choose the best word for blank (19).",
      display: { A: "price", B: "cost", C: "expense", D: "value" },
      correct: "B",
      explanation: "\"the <b>cost</b> of living\" — cụm cố định \"cost of living\" (chi phí sinh hoạt)."
    },
    { id: 20, section: "III", type: "mcq", passage: "tokyoCloze", blankNum: 20,
      prompt: "Choose the best word for blank (20).",
      display: { A: "with", B: "at", C: "for", D: "on" },
      correct: "A",
      explanation: "\"compared <b>with</b> other financial cities\" — cụm cố định \"compared with/to\" (so với)."
    },
    { id: 21, section: "III", type: "mcq", passage: "tokyoCloze", blankNum: 21,
      prompt: "Choose the best word for blank (21).",
      display: { A: "affordable", B: "pricey", C: "expensive", D: "dangerous" },
      correct: "A",
      explanation: "\"it's <b>affordable</b>\" (có giá cả phải chăng) phù hợp với vế sau nói rằng thuế thấp và tiền thuê nhà rẻ hơn so với Singapore."
    },
    { id: 22, section: "III", type: "mcq", passage: "tokyoCloze", blankNum: 22,
      prompt: "Choose the best word for blank (22).",
      display: { A: "which", B: "where", C: "who", D: "whom" },
      correct: "B",
      explanation: "\"Singapore <b>where</b> rents are sky-high\" — đại từ quan hệ chỉ nơi chốn \"where\" thay cho \"Singapore\"."
    },

    // ---------------- SECTION IV (23-28) — reading ----------------
    { id: 23, section: "IV", type: "truefalse", passage: "trafficPollutionReading",
      prompt: "Traffic congestion makes it easy for people to travel quickly around the city.",
      correct: "False",
      explanation: "Sai. Bài đọc: \"Traffic jams occur ... <b>making it difficult</b> for people to move around quickly.\""
    },
    { id: 24, section: "IV", type: "truefalse", passage: "trafficPollutionReading",
      prompt: "Using public transportation can help reduce the number of cars on the roads.",
      correct: "True",
      explanation: "Đúng. Bài đọc: \"cities can encourage people to use public transportation ... This would <b>reduce the number of vehicles on the roads</b>.\""
    },
    { id: 25, section: "IV", type: "truefalse", passage: "trafficPollutionReading",
      prompt: "Dirty air in cities is only caused by different types of vehicles.",
      correct: "False",
      explanation: "Sai. Bài đọc: \"there is too much dirty air from <b>vehicles and factories</b>\" — không chỉ do phương tiện giao thông."
    },
    { id: 26, section: "IV", type: "truefalse", passage: "trafficPollutionReading",
      prompt: "Planting more trees is a good way to improve the quality of air in cities.",
      correct: "True",
      explanation: "Đúng. Bài đọc: \"By increasing the number of trees, cities can <b>improve air quality</b>.\""
    },
    { id: 27, section: "IV", type: "mcq", passage: "trafficPollutionReading",
      prompt: "What is the main idea of the passage?",
      display: {
        A: "The history of public transportation development in big cities.",
        B: "The causes of traffic jams and how to drive cars safely.",
        C: "Common city problems and solutions to make the environment better.",
        D: "The importance of factories and vehicles in modern economy."
      },
      correct: "C",
      explanation: "Bài đọc nêu hai vấn đề (traffic jams, pollution) và các giải pháp tương ứng (public transportation, planting trees) → đáp án C bao quát nhất."
    },
    { id: 28, section: "IV", type: "mcq", passage: "trafficPollutionReading",
      prompt: "Which of the following is NOT true according to the passage?",
      display: {
        A: "Buses and trains are examples of public transportation.",
        B: "Trees make the city environment healthier by providing oxygen.",
        C: "Only the local government needs to work to solve city problems.",
        D: "Green projects can help make our city environment more sustainable."
      },
      correct: "C",
      explanation: "Bài đọc nói ngược lại: \"<b>we all need to work together</b> to solve the problems of traffic and pollution\" — không phải chỉ chính quyền địa phương → câu C SAI."
    },

    // ---------------- SECTION V (29-34) — word form ----------------
    { id: 29, section: "V", type: "fillblank",
      prompt: "Tokyo is one of the most ______________ cities in Asia.",
      wordGiven: "live", accepted: ["livable", "liveable"], correct: "livable",
      explanation: "Cần tính từ dạng so sánh nhất sau \"most\". <b>live</b> (v) → <b>livable/liveable</b> (adj, +able): đáng sống."
    },
    { id: 30, section: "V", type: "fillblank",
      prompt: "The ______________ of the streets makes this town very attractive.",
      wordGiven: "clean", accepted: ["cleanliness"], correct: "cleanliness",
      explanation: "Cần danh từ làm chủ ngữ của câu. <b>clean</b> (adj) → <b>cleanliness</b> (n, +liness): sự sạch sẽ."
    },
    { id: 31, section: "V", type: "fillblank",
      prompt: "The infrastructure in this metropolis is very well ______________.",
      wordGiven: "develop", accepted: ["developed"], correct: "developed",
      explanation: "Cần quá khứ phân từ sau \"is very well\" (dạng bị động). <b>develop</b> (v) → <b>developed</b> (V3): được phát triển."
    },
    { id: 32, section: "V", type: "fillblank",
      prompt: "Many people find city life ______________ because of the nightlife.",
      wordGiven: "excite", accepted: ["exciting"], correct: "exciting",
      explanation: "Cần tính từ làm bổ ngữ cho \"city life\" sau \"find\". <b>excite</b> (v) → <b>exciting</b> (adj, +ing): thú vị, hấp dẫn."
    },
    { id: 33, section: "V", type: "fillblank",
      prompt: "We should support local ______________ to preserve our culture.",
      wordGiven: "music", accepted: ["musicians"], correct: "musicians",
      explanation: "Cần danh từ chỉ người, số nhiều, làm tân ngữ của \"support\". <b>music</b> (n) → <b>musician(s)</b> (n, +ian): nhạc sĩ, nhạc công."
    },
    { id: 34, section: "V", type: "fillblank",
      prompt: "There are many ______________ buildings in the center of London.",
      wordGiven: "history", accepted: ["historical"], correct: "historical",
      explanation: "Cần tính từ đứng trước danh từ \"buildings\". <b>history</b> (n) → <b>historical</b> (adj, +ical): thuộc về lịch sử."
    },

    // ---------------- SECTION VI (35-36) — dictionary entry ----------------
    { id: 35, section: "VI", type: "fillblank", passage: "bustlingEntry",
      prompt: "On Sunday mornings, the local market is always ____________________ and energy.",
      accepted: ["bustling with life"], correct: "bustling with life",
      explanation: "Từ điển cho ví dụ \"The flower market was <b>bustling with life</b> and color.\" — khớp với ngữ cảnh khu chợ đông đúc, tràn đầy năng lượng."
    },
    { id: 36, section: "VI", type: "fillblank", passage: "bustlingEntry",
      prompt: "I love the ____________________ of the night market; it's so lively and exciting.",
      accepted: ["bustling atmosphere"], correct: "bustling atmosphere",
      explanation: "Từ điển cho ví dụ \"The café has a <b>bustling atmosphere</b> during the lunch hour.\" — phù hợp với ngữ cảnh không khí náo nhiệt của chợ đêm."
    },

    // ---------------- SECTION VII (37-40) — sentence rewriting ----------------
    { id: 37, section: "VII", type: "rewrite",
      prompt: "Living in the city is much more expensive than living in the countryside.",
      starter: "Living in the countryside",
      accepted: ["living in the countryside is much cheaper than living in the city"],
      correct: "Living in the countryside is much cheaper than living in the city.",
      explanation: "So sánh hơn với tính từ đối nghĩa: \"more expensive than\" đổi thành \"<b>cheaper than</b>\" khi đảo chủ ngữ và tân ngữ so sánh.<br>→ <i>Living in the countryside is much cheaper than living in the city.</i>"
    },
    { id: 38, section: "VII", type: "rewrite",
      prompt: "Her sister always runs more quickly than her.",
      starter: "She doesn't",
      accepted: ["she doesn't always run as quickly as her sister"],
      correct: "She doesn't always run as quickly as her sister.",
      explanation: "So sánh hơn \"more quickly than\" chuyển thành so sánh bằng phủ định \"<b>not as quickly as</b>\" — cùng khẳng định chị/em gái chạy nhanh hơn.<br>→ <i>She doesn't always run as quickly as her sister.</i>"
    },
    { id: 39, section: "VII", type: "rewrite",
      prompt: "Tokyo ranked second on the Best Cities Index in 2022.",
      starter: "Tokyo was",
      accepted: ["tokyo was ranked second on the best cities index in 2022"],
      correct: "Tokyo was ranked second on the Best Cities Index in 2022.",
      explanation: "Chuyển từ câu chủ động sang <b>bị động</b> ở thì quá khứ đơn: \"was/were + V3\".<br>→ <i>Tokyo was ranked second on the Best Cities Index in 2022.</i>"
    },
    { id: 40, section: "VII", type: "rewrite",
      prompt: "If we plant more trees, the air will be cleaner.",
      starter: "The more",
      accepted: ["the more trees we plant, the cleaner the air will be"],
      correct: "The more trees we plant, the cleaner the air will be.",
      explanation: "Câu điều kiện loại 1 chuyển thành cấu trúc so sánh kép \"<b>The more ..., the + so sánh hơn ...</b>\" — cùng diễn tả mối quan hệ tỉ lệ thuận giữa hai vế.<br>→ <i>The more trees we plant, the cleaner the air will be.</i>"
    }
  ]
};
