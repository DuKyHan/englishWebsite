const TEST = {
  id: "test41",
  grade: "Grade 7 — Global Success",
  unit: "Unit 3: Community service",
  title: "Grade 7 · Unit 3: Community service · Test 1",
  duration: 35,
  totalPoints: 10,
  reviewPage: "review_test41.html",
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
    { id: "VI", title: "Look at the dictionary entry of “volunteer”. Complete the sentences with no more than three words.", points: "0.5 pt", range: [35, 36] },
    { id: "VII", title: "Rewrite each sentence so that it means almost the same as the sentence printed before it.", points: "1.0 pt", range: [37, 40] }
  ],
  passages: {
    volunteerLetterCloze: "Dear Mary, Today I will tell you about my volunteer work. Volunteer work has (17) ________ popular in Vietnam. Many people have done volunteer work, and I have too. At my age, I can't donate blood, (18) ________ I often donate books, toys, and clothes to (19) ________ children and elderly people. I often do this work with my mother. Last Sunday, I donated books and clothes to a charity organization. I met the orphans there. They were so lovely. I played (20) ________ them, and they were so (21) ________. Some people think that doing volunteer work is a (22) ________ of time, but in my opinion, it helps me relax after school, and I feel very happy to bring happiness to them. What do you think about volunteer work? Look forward to hearing from you. Best regards, Mai",
    voluntaryWorkReading: "The Benefits of Voluntary Work. Nowadays, volunteer work attracts a large number of participants from different age groups because of its huge benefits. Firstly, voluntary work provides adolescents with many precious opportunities to develop social skills, foster independence, and form the ability to deal with difficulties in different situations. Secondly, every member will be taught how to work in a team, the way to make conversation, or the responsibility of finishing a task. The experience you gain will be valuable for your future, helping you tackle serious problems in later life. In addition, volunteer work can help us adapt to something new and make many new friends through regular activities of clubs or organizations. We can also have a chance to travel more and explore more interesting things we have not experienced before. In conclusion, it is very good to do voluntary work.",
    volunteerEntry: {
      word: "volunteer", ipa: "/ˌvɒlənˈtɪər/", pos: "noun & verb",
      def: "noun: 1. a person who does a job without being paid for it. verb: 1. to offer to do something without being forced or paid.",
      examples: [
        "We need <b>additional volunteers</b> to help clean up the park this weekend.",
        "She works as a <b>volunteer teacher</b> at a local shelter.",
        "I <b>volunteered to help</b> with the school concert.",
        "They <b>volunteered their time</b> to organize the charity event."
      ]
    }
  },
  images: {
    noticeCommunityService: "assets/images/notice_community_service.jpg",
    signNoRunning: "assets/images/sign_no_running.jpg"
  },
  questions: [
    // ---------------- SECTION I (1-14) ----------------
    { id: 1, section: "I", type: "mcq",
      prompt: "Which word has the underlined part pronounced differently from that of the others?",
      display: { A: "blanket", B: "donate", C: "calorie", D: "allergy" },
      correct: "B",
      explanation: "Phần gạch chân là chữ cái \"a\". \"blanket\" /ˈblæŋkɪt/, \"calorie\" /ˈkæləri/, \"allergy\" /ˈælərdʒi/ đều có \"a\" phát âm là <b>/æ/</b>. Riêng \"donate\" /ˈdoʊneɪt/ có \"a\" phát âm là <b>/eɪ/</b> → khác biệt, đáp án B."
    },
    { id: 2, section: "I", type: "mcq",
      prompt: "Which word has the underlined part pronounced differently from that of the others?",
      display: { A: "needed", B: "visited", C: "loved", D: "excited" },
      correct: "C",
      explanation: "Phần gạch chân là \"-ed\". \"needed\" /ˈniːdɪd/, \"visited\" /ˈvɪzɪtɪd/, \"excited\" /ɪkˈsaɪtɪd/ đều có \"-ed\" phát âm là <b>/ɪd/</b> (vì động từ gốc kết thúc bằng /d/ hoặc /t/). Riêng \"loved\" /lʌvd/ có \"-ed\" phát âm là <b>/d/</b> → khác biệt, đáp án C."
    },
    { id: 3, section: "I", type: "mcq",
      prompt: "Which word has a different stress pattern from that of the others?",
      display: { A: "answer", B: "open", C: "expect", D: "follow" },
      correct: "C",
      explanation: "\"answer\" /ˈænsər/, \"open\" /ˈoʊpən/, \"follow\" /ˈfɒloʊ/ đều có trọng âm rơi vào <b>âm tiết 1</b>. Riêng \"expect\" /ɪkˈspekt/ có trọng âm rơi vào <b>âm tiết 2</b> → khác biệt, đáp án C."
    },
    { id: 4, section: "I", type: "mcq",
      prompt: "Which word has a different stress pattern from that of the others?",
      display: { A: "active", B: "careful", C: "homeless", D: "polite" },
      correct: "D",
      explanation: "\"active\" /ˈæktɪv/, \"careful\" /ˈkerfl/, \"homeless\" /ˈhoʊmləs/ đều có trọng âm rơi vào <b>âm tiết 1</b>. Riêng \"polite\" /pəˈlaɪt/ có trọng âm rơi vào <b>âm tiết 2</b> → khác biệt, đáp án D."
    },
    { id: 5, section: "I", type: "mcq",
      context: "Tom: \"What did you do with your school club last summer, Nam?\"",
      prompt: "Nam: \"Last year, I __________ to visit a children's village in Yen Bai with my teachers.\"",
      display: { A: "goed", B: "to go", C: "went", D: "goes" },
      correct: "C",
      explanation: "Câu diễn tả hành động đã xảy ra trong quá khứ (\"Last year\") cần động từ chia ở thì quá khứ đơn. <b>went</b> là dạng quá khứ bất quy tắc của \"go\"."
    },
    { id: 6, section: "I", type: "mcq",
      context: "Anna: \"Did you join the environment clean-up activity last March?\"",
      prompt: "Mark: \"Yes, we spent the whole morning __________ trash along the riverbank.\"",
      display: { A: "cleaning", B: "cleaning up", C: "clean up", D: "clean-up" },
      correct: "B",
      explanation: "\"<b>clean up</b> trash\" (dọn dẹp rác) là cụm động từ cố định; sau \"spent the whole morning\" cần V-ing → \"<b>cleaning up</b>\"."
    },
    { id: 7, section: "I", type: "mcq",
      context: "Jane: \"How was the documentary about street kids you watched last night?\"",
      prompt: "David: \"The film that I __________ last night __________ very interesting and moving.\"",
      display: { A: "saw / was", B: "see / was", C: "saw / were", D: "see / wore" },
      correct: "A",
      explanation: "Cả hai động từ đều diễn tả hành động/trạng thái trong quá khứ. <b>saw</b> (quá khứ của \"see\") và <b>was</b> (chủ ngữ \"The film\" số ít)."
    },
    { id: 8, section: "I", type: "mcq",
      context: "Mary: \"Look at the trees along the fence. They look a bit dry.\"",
      prompt: "Peter: \"Don't worry. Tom and his friends __________ the plants in their neighborhood every weekend.\"",
      display: { A: "water", B: "donate", C: "clean", D: "pick up" },
      correct: "A",
      explanation: "\"<b>water</b> the plants\" (tưới cây) phù hợp với ngữ cảnh cây bị khô cần được chăm sóc."
    },
    { id: 9, section: "I", type: "mcq",
      context: "Lucy: \"Why do you think the Japanese have such a high life expectancy?\"",
      prompt: "Ben: \"The Japanese eat a lot of fish and healthy food, __________ they live for a long time.\"",
      display: { A: "so", B: "but", C: "or", D: "because" },
      correct: "A",
      explanation: "\"<b>so</b>\" giới thiệu kết quả (ăn uống lành mạnh → sống lâu)."
    },
    { id: 10, section: "I", type: "mcq",
      context: "Teacher: \"Why do you think school students should take part in community work?\"",
      prompt: "Student: \"People can gain __________ and have lots of fun when doing volunteer work.\"",
      display: { A: "confide", B: "confidence", C: "confident", D: "confidential" },
      correct: "B",
      explanation: "Cần danh từ sau động từ \"gain\". <b>confidence</b> (n) = sự tự tin."
    },
    { id: 11, section: "I", type: "mcq",
      context: "Laura: \"Where does your older sister want to work after graduating from university?\"",
      prompt: "Mike: \"She wants to work in a __________ to care for old and lonely people.\"",
      display: { A: "supermarket", B: "museum", C: "nursing home", D: "theater" },
      correct: "C",
      explanation: "\"<b>nursing home</b>\" (viện dưỡng lão) là nơi chăm sóc người già và người neo đơn."
    },
    { id: 12, section: "I", type: "mcq",
      context: "John: \"How can we help elderly people at a nursing home effectively?\"",
      prompt: "Sarah: \"__________\"",
      display: { A: "Take away their walking aids to make them stronger.", B: "Visit them, talk to them, and help with daily tasks.", C: "Ignore them and let them rest all day.", D: "Tell them to live on their own without help." },
      correct: "B",
      explanation: "\"<b>Visit them, talk to them, and help with daily tasks.</b>\" là cách hiệu quả và nhân văn nhất để giúp đỡ người già tại viện dưỡng lão."
    },
    { id: 13, section: "I", type: "mcq",
      context: "Minh: \"I passed my interview to become a volunteer at the local shelter!\"",
      prompt: "Long: \"__________\"",
      display: { A: "I've no idea.", B: "Wow, that must have felt good!", C: "What's happening?", D: "Never mind." },
      correct: "B",
      explanation: "\"<b>Wow, that must have felt good!</b>\" là lời chúc mừng tự nhiên đáp lại tin vui của Minh."
    },
    { id: 14, section: "I", type: "mcq",
      context: "Mai: \"I'm planning to join the community green project this Saturday morning.\"",
      prompt: "Lan: \"__________\"",
      display: { A: "Sorry, the bus broke down on the way here.", B: "Yes, it is very old-fashioned.", C: "No, I think it's very dull.", D: "Great! Let's work together to make a difference!" },
      correct: "D",
      explanation: "\"<b>Great! Let's work together to make a difference!</b>\" là phản hồi tích cực và phù hợp nhất khi ai đó rủ tham gia hoạt động cộng đồng."
    },

    // ---------------- SECTION II (15-16) — sign & notice ----------------
    { id: 15, section: "II", type: "mcq", image: "noticeCommunityService",
      prompt: "What does this notice tell the students to do?",
      display: {
        A: "Students must clean the classroom by Friday.",
        B: "Students should register before Saturday to participate in the project.",
        C: "Class teachers will choose which students have to clean the park.",
        D: "Only teachers can join the upcoming community activities."
      },
      correct: "B",
      explanation: "Thông báo \"Sign up with your class teacher by Friday to join the park clean-up!\" nghĩa là học sinh cần đăng ký trước thứ Sáu (tức trước thứ Bảy) để tham gia dự án → đáp án B."
    },
    { id: 16, section: "II", type: "mcq", image: "signNoRunning",
      prompt: "What does this sign mean?",
      display: {
        A: "Only children are allowed to run here; adults should walk.",
        B: "Running is not allowed in this area, so you need to walk instead.",
        C: "Running is not encouraged here, so you should run as much as you can.",
        D: "Running is allowed in some specific places, but not here."
      },
      correct: "B",
      explanation: "Biển \"NO RUNNING IN THIS AREA\" nghĩa là cấm chạy trong khu vực này, cần đi bộ thay vì chạy → đáp án B."
    },

    // ---------------- SECTION III (17-22) — cloze passage ----------------
    { id: 17, section: "III", type: "mcq", passage: "volunteerLetterCloze", blankNum: 17,
      prompt: "Choose the best word for blank (17).",
      display: { A: "become", B: "grown", C: "turned", D: "made" },
      correct: "A",
      explanation: "\"has <b>become</b> popular\" (đã trở nên phổ biến) — \"become + adj\" là cấu trúc cố định."
    },
    { id: 18, section: "III", type: "mcq", passage: "volunteerLetterCloze", blankNum: 18,
      prompt: "Choose the best word for blank (18).",
      display: { A: "because", B: "but", C: "so", D: "although" },
      correct: "B",
      explanation: "\"can't donate blood, <b>but</b> I often donate books...\" — \"but\" nối hai ý tương phản."
    },
    { id: 19, section: "III", type: "mcq", passage: "volunteerLetterCloze", blankNum: 19,
      prompt: "Choose the best word for blank (19).",
      display: { A: "rich", B: "healthy", C: "homeless", D: "wealthy" },
      correct: "C",
      explanation: "\"donate... to <b>homeless</b> children and elderly people\" (trẻ em vô gia cư) phù hợp với ngữ cảnh làm từ thiện."
    },
    { id: 20, section: "III", type: "mcq", passage: "volunteerLetterCloze", blankNum: 20,
      prompt: "Choose the best word for blank (20).",
      display: { A: "with", B: "by", C: "for", D: "at" },
      correct: "A",
      explanation: "\"play <b>with</b> them\" (chơi cùng ai) là cấu trúc cố định."
    },
    { id: 21, section: "III", type: "mcq", passage: "volunteerLetterCloze", blankNum: 21,
      prompt: "Choose the best word for blank (21).",
      display: { A: "scared", B: "disappointed", C: "happy", D: "bored" },
      correct: "C",
      explanation: "\"they were so <b>happy</b>\" phù hợp với không khí tích cực khi chơi cùng trẻ mồ côi."
    },
    { id: 22, section: "III", type: "mcq", passage: "volunteerLetterCloze", blankNum: 22,
      prompt: "Choose the best word for blank (22).",
      display: { A: "loss", B: "gain", C: "waste", D: "save" },
      correct: "C",
      explanation: "\"a <b>waste</b> of time\" (lãng phí thời gian) là cụm cố định, phù hợp với ý kiến tiêu cực \"some people think...\"."
    },

    // ---------------- SECTION IV (23-28) — reading ----------------
    { id: 23, section: "IV", type: "truefalse", passage: "voluntaryWorkReading",
      prompt: "Only young people do volunteer work nowadays.",
      correct: "False",
      explanation: "Sai. Bài đọc: \"voluntary work attracts a large number of participants from different age groups.\""
    },
    { id: 24, section: "IV", type: "truefalse", passage: "voluntaryWorkReading",
      prompt: "Doing volunteer work helps people learn how to work with others in a team.",
      correct: "True",
      explanation: "Đúng. Bài đọc: \"every member will be taught how to work in a team.\""
    },
    { id: 25, section: "IV", type: "truefalse", passage: "voluntaryWorkReading",
      prompt: "Volunteer work can help you make new friends.",
      correct: "True",
      explanation: "Đúng. Bài đọc: \"volunteer work can help us adapt to something new and make many new friends.\""
    },
    { id: 26, section: "IV", type: "truefalse", passage: "voluntaryWorkReading",
      prompt: "Volunteers have fewer chances to travel to new places.",
      correct: "False",
      explanation: "Sai. Bài đọc: \"We can also have a chance to travel more and explore more interesting things.\""
    },
    { id: 27, section: "IV", type: "mcq", passage: "voluntaryWorkReading",
      prompt: "What is the word \"adolescents\" in the text closest in meaning to?",
      display: { A: "young people", B: "old people", C: "baby twins", D: "adult workers" },
      correct: "A",
      explanation: "\"adolescents\" (thanh thiếu niên) gần nghĩa nhất với \"<b>young people</b>\" (người trẻ tuổi), đáp án A."
    },
    { id: 28, section: "IV", type: "mcq", passage: "voluntaryWorkReading",
      prompt: "What does the text suggest about the experience gained from volunteer work?",
      display: { A: "It helps you deal with difficulties in later life.", B: "It makes you stay away from future problems.", C: "It allows you to buy expensive items.", D: "It is boring and has no real value." },
      correct: "A",
      explanation: "Bài đọc: \"The experience you gain will be valuable for your future, helping you tackle serious problems in later life.\" → đáp án A."
    },

    // ---------------- SECTION V (29-34) — word form ----------------
    { id: 29, section: "V", type: "fillblank",
      prompt: "It is very common in America for a person to join a _____________ group.",
      wordGiven: "VOLUNTEER", accepted: ["voluntary"], correct: "voluntary",
      explanation: "Cần tính từ trước \"group\". <b>volunteer</b> (n) → <b>voluntary</b> (adj, tự nguyện)."
    },
    { id: 30, section: "V", type: "fillblank",
      prompt: "_____________ one's time and services is a beautiful part of their lifestyle.",
      wordGiven: "DONATION", accepted: ["donating"], correct: "donating",
      explanation: "Cần V-ing làm chủ ngữ đầu câu. <b>donation</b> (n) → <b>donate</b> (v) → <b>donating</b> (V-ing)."
    },
    { id: 31, section: "V", type: "fillblank",
      prompt: "Most _____________ activities are organized by local churches and schools.",
      wordGiven: "CHARITY", accepted: ["charitable"], correct: "charitable",
      explanation: "Cần tính từ trước \"activities\". <b>charity</b> (n) → <b>charitable</b> (adj, +able, thuộc về từ thiện)."
    },
    { id: 32, section: "V", type: "fillblank",
      prompt: "The government actively _____________ young teenagers to do community service.",
      wordGiven: "ENCOURAGED", accepted: ["encourages"], correct: "encourages",
      explanation: "Câu ở thì hiện tại đơn, chủ ngữ số ít \"The government\". <b>encouraged</b> → <b>encourages</b> (thêm -s)."
    },
    { id: 33, section: "V", type: "fillblank",
      prompt: "Volunteers also give support to the _____________ children in orphanages.",
      wordGiven: "DISABILITY", accepted: ["disabled"], correct: "disabled",
      explanation: "Cần tính từ trước \"children\". <b>disability</b> (n) → <b>disabled</b> (adj, khuyết tật)."
    },
    { id: 34, section: "V", type: "fillblank",
      prompt: "Keeping our environment clean is the _____________ of everyone in society.",
      wordGiven: "RESPONSIBLE", accepted: ["responsibility"], correct: "responsibility",
      explanation: "Cần danh từ sau \"the\". <b>responsible</b> (adj) → <b>responsibility</b> (n, trách nhiệm)."
    },

    // ---------------- SECTION VI (35-36) — dictionary entry ----------------
    { id: 35, section: "VI", type: "fillblank", passage: "volunteerEntry",
      prompt: "After finishing her university degree, Sarah worked as a _____________________ in a small village.",
      accepted: ["volunteer teacher"], correct: "volunteer teacher",
      explanation: "Từ điển cho ví dụ \"She works as a <b>volunteer teacher</b> at a local shelter.\" — khớp với ngữ cảnh làm giáo viên tình nguyện ở một ngôi làng nhỏ."
    },
    { id: 36, section: "VI", type: "fillblank", passage: "volunteerEntry",
      prompt: "Many retired people in the neighborhood _____________________ at the local library.",
      accepted: ["volunteer their time"], correct: "volunteer their time",
      explanation: "Từ điển cho ví dụ \"They <b>volunteered their time</b> to organize the charity event.\" — khớp với ngữ cảnh người về hưu dành thời gian tình nguyện."
    },

    // ---------------- SECTION VII (37-40) — sentence rewriting ----------------
    { id: 37, section: "VII", type: "rewrite",
      prompt: "Donating blood is good because you can save people's lives.",
      starter: "It's good",
      accepted: ["it's good to donate blood because you can save people's lives"],
      correct: "It's good to donate blood because you can save people's lives.",
      explanation: "\"V-ing... is good\" (làm gì đó là tốt) có thể viết lại bằng \"<b>It's good to + V</b>\", giữ nguyên nghĩa.<br>→ <i>It's good to donate blood because you can save people's lives.</i>"
    },
    { id: 38, section: "VII", type: "rewrite",
      prompt: "Mr. Robert was a very good maths teacher.",
      starter: "Mr. Robert taught",
      accepted: ["mr. robert taught maths very well"],
      correct: "Mr. Robert taught maths very well.",
      explanation: "\"S + was + a very good + N + teacher\" (là một giáo viên giỏi) có thể viết lại bằng \"<b>S + taught + N + very well</b>\" (dạy rất giỏi), giữ nguyên nghĩa.<br>→ <i>Mr. Robert taught maths very well.</i>"
    },
    { id: 39, section: "VII", type: "rewrite",
      prompt: "Volunteers in the community make a big difference.",
      starter: "Volunteering in",
      accepted: ["volunteering in the community makes a big difference"],
      correct: "Volunteering in the community makes a big difference.",
      explanation: "\"Volunteers + V\" (những người tình nguyện làm gì) có thể viết lại bằng \"<b>Volunteering in + N + V-s</b>\" (việc tình nguyện tạo ra), đổi danh từ người thành danh động từ chỉ hoạt động.<br>→ <i>Volunteering in the community makes a big difference.</i>"
    },
    { id: 40, section: "VII", type: "rewrite",
      prompt: "Every year we collect old books and clothes to help poor children in mountainous areas.",
      starter: "Old books and clothes",
      accepted: ["old books and clothes are collected every year to help poor children in mountainous areas"],
      correct: "Old books and clothes are collected every year to help poor children in mountainous areas.",
      explanation: "Câu chủ động \"we collect + O\" có thể viết lại thành câu bị động \"<b>O + are collected + (by...)</b>\", giữ nguyên nghĩa.<br>→ <i>Old books and clothes are collected every year to help poor children in mountainous areas.</i>"
    }
  ]
};
