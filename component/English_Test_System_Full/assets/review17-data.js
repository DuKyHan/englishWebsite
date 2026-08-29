const REVIEW = {
  id: "test17",
  testFile: "test17.html",
  grade: "Grade 9 — Global Success",
  unit: "Unit 3: Healthy living for teens",
  title: "Knowledge Review — Unit 3, Practice Test 1",

  // ---------------------------------------------------------
  // PART 1 — VOCABULARY REVIEW
  // ---------------------------------------------------------
  vocabulary: [
    { word: "anxiety", pos: "n", ipa: "/æŋˈzaɪəti/", meaning: "sự lo âu", example: "I had to learn how to have a well-balanced life in order to reduce stress and anxiety.", exampleVi: "Tôi phải học cách có một cuộc sống cân bằng để giảm căng thẳng và lo âu." },
    { word: "hand in", pos: "phr v", ipa: "/hænd ɪn/", meaning: "nộp (bài)", example: "I haven't handed in my assignment yet, and the deadline is today.", exampleVi: "Tôi chưa nộp bài tập, và hạn chót là hôm nay." },
    { word: "drop (a subject)", pos: "v", ipa: "/drɒp/", meaning: "bỏ (một môn học)", example: "I'm not good at it, so I am dropping the subject to focus on French.", exampleVi: "Tôi không giỏi môn đó, nên tôi bỏ môn này để tập trung vào tiếng Pháp." },
    { word: "carry out", pos: "phr v", ipa: "/ˈkæri aʊt/", meaning: "thực hiện", example: "You should carry out a weekly schedule to manage your time better.", exampleVi: "Bạn nên thực hiện một thời gian biểu hằng tuần để quản lý thời gian tốt hơn." },
    { word: "school counselor", pos: "n phr", ipa: "/skuːl ˈkaʊnsələr/", meaning: "cố vấn học đường", example: "It's my school counselor. She gave me great advice.", exampleVi: "Đó là cố vấn học đường của tôi. Cô ấy đã cho tôi lời khuyên tuyệt vời." },
    { word: "physical health", pos: "n phr", ipa: "/ˈfɪzɪkl helθ/", meaning: "sức khỏe thể chất", example: "What do you do to improve your physical health?", exampleVi: "Bạn làm gì để cải thiện sức khỏe thể chất của mình?" },
    { word: "give priority to", pos: "v phr", ipa: "/ɡɪv praɪˈɒrəti tuː/", meaning: "ưu tiên cho", example: "I started to plan my schedule and gave priority to some of my work.", exampleVi: "Tôi bắt đầu lên kế hoạch và ưu tiên cho một số công việc của mình." },
    { word: "communicate with", pos: "v phr", ipa: "/kəˈmjuːnɪkeɪt wɪð/", meaning: "giao tiếp/trao đổi với", example: "I communicated with my family, friends, and teachers about my busy schedule.", exampleVi: "Tôi đã trao đổi với gia đình, bạn bè và thầy cô về lịch trình bận rộn của mình." },
    { word: "take a break", pos: "v phr", ipa: "/teɪk ə breɪk/", meaning: "nghỉ giải lao", example: "I also took breaks appropriately because they helped me keep away from stress.", exampleVi: "Tôi cũng nghỉ giải lao hợp lý vì điều đó giúp tôi tránh xa căng thẳng." },
    { word: "deadline", pos: "n", ipa: "/ˈdedlaɪn/", meaning: "hạn chót", example: "The deadline for applications is next Friday.", exampleVi: "Hạn chót nộp đơn là thứ Sáu tới." },
    { word: "meet the deadline", pos: "v phr", ipa: "/miːt ðə ˈdedlaɪn/", meaning: "hoàn thành đúng hạn", example: "It is difficult to meet the deadline when you have too much work.", exampleVi: "Thật khó để hoàn thành đúng hạn khi bạn có quá nhiều việc." },
    { word: "extend the deadline", pos: "v phr", ipa: "/ɪkˈstend ðə ˈdedlaɪn/", meaning: "gia hạn", example: "They decided to extend the deadline by one week.", exampleVi: "Họ quyết định gia hạn thêm một tuần." },
    { word: "miss the deadline", pos: "v phr", ipa: "/mɪs ðə ˈdedlaɪn/", meaning: "trễ hạn", example: "I'm afraid I'm going to miss the deadline because my computer broke.", exampleVi: "Tôi e là mình sẽ trễ hạn vì máy tính bị hỏng." },
    { word: "stay organized", pos: "v phr", ipa: "/steɪ ˈɔːrɡənaɪzd/", meaning: "luôn ngăn nắp, có tổ chức", example: "Mary uses an app to stay organized with her assignments and deadlines.", exampleVi: "Mary dùng một ứng dụng để luôn ngăn nắp với bài tập và hạn chót của mình." },
    { word: "to-do list", pos: "n phr", ipa: "/tuː duː lɪst/", meaning: "danh sách việc cần làm", example: "Mary also makes a daily to-do list to help her stay focused and motivated.", exampleVi: "Mary cũng lập danh sách việc cần làm hằng ngày để luôn tập trung và có động lực." },
    { word: "prioritize", pos: "v", ipa: "/praɪˈɒrɪtaɪz/", meaning: "ưu tiên", example: "James starts his day by prioritizing the most urgent or difficult tasks first.", exampleVi: "James bắt đầu ngày mới bằng cách ưu tiên những việc gấp hoặc khó nhất trước." },
    { word: "avoid distractions", pos: "v phr", ipa: "/əˈvɔɪd dɪˈstrækʃnz/", meaning: "tránh xao nhãng", example: "To avoid distractions, James turns off email and social media notifications.", exampleVi: "Để tránh xao nhãng, James tắt thông báo email và mạng xã hội." },
    { word: "work-life balance", pos: "n phr", ipa: "/wɜːrk laɪf ˈbæləns/", meaning: "sự cân bằng giữa công việc và cuộc sống", example: "James and his wife share the housework, ensuring a great work-life balance.", exampleVi: "James và vợ chia sẻ việc nhà, đảm bảo sự cân bằng tốt giữa công việc và cuộc sống." }
  ],

  vocabPractice: {
    mcq: [
      { id: "vp1", prompt: "Choose the word that means 'nộp (bài)':", options: { A: "hand in", B: "drop", C: "carry out", D: "prioritize" }, correct: "A", explanation: "<b>hand in</b> (phr v) = nộp (bài)." },
      { id: "vp2", prompt: "Choose the word that means 'sự cân bằng giữa công việc và cuộc sống':", options: { A: "deadline", B: "work-life balance", C: "to-do list", D: "anxiety" }, correct: "B", explanation: "<b>work-life balance</b> (n phr) = sự cân bằng giữa công việc và cuộc sống." },
      { id: "vp3", prompt: "Choose the best word: \"You should ______ a weekly schedule to manage your time better.\"", options: { A: "carry out", B: "carry on", C: "carry away", D: "carry through" }, correct: "A", explanation: "\"<b>carry out</b> a schedule\" (thực hiện một thời gian biểu) phù hợp với ngữ cảnh quản lý thời gian." },
      { id: "vp4", prompt: "Choose the word that means 'tránh xao nhãng':", options: { A: "avoid distractions", B: "take a break", C: "meet the deadline", D: "stay organized" }, correct: "A", explanation: "<b>avoid distractions</b> (v phr) = tránh xao nhãng." },
      { id: "vp5", prompt: "\"James starts his day by making a to-do list, ______ the most urgent tasks first.\"", options: { A: "extending", B: "prioritizing", C: "missing", D: "communicating" }, correct: "B", explanation: "\"<b>prioritizing</b> the most urgent tasks\" (ưu tiên những việc gấp nhất) phù hợp với cách James bắt đầu ngày làm việc." },
      { id: "vp6", prompt: "Choose the word that means 'gia hạn':", options: { A: "extend the deadline", B: "miss the deadline", C: "meet the deadline", D: "give priority to" }, correct: "A", explanation: "<b>extend the deadline</b> (v phr) = gia hạn." }
    ],
    fillblank: [
      { id: "vf1", prompt: "I haven't ______________ (nộp) my assignment yet, and the deadline is today.", accepted: ["handed in"], correct: "handed in", explanation: "<b>hand in</b> (phr v) = nộp (bài)." },
      { id: "vf2", prompt: "I'm afraid I'm going to ______________ (trễ hạn) because my computer broke.", accepted: ["miss the deadline"], correct: "miss the deadline", explanation: "<b>miss the deadline</b> (v phr) = trễ hạn." },
      { id: "vf3", prompt: "James turns off notifications to ______________ (tránh xao nhãng).", accepted: ["avoid distractions"], correct: "avoid distractions", explanation: "<b>avoid distractions</b> (v phr) = tránh xao nhãng." },
      { id: "vf4", prompt: "Mary uses an app to ______________ (luôn ngăn nắp) with her assignments and deadlines.", accepted: ["stay organized"], correct: "stay organized", explanation: "<b>stay organized</b> (v phr) = luôn ngăn nắp, có tổ chức." },
      { id: "vf5", prompt: "James and his wife share the housework, ensuring a great ______________ (cân bằng công việc-cuộc sống).", accepted: ["work-life balance"], correct: "work-life balance", explanation: "<b>work-life balance</b> (n phr) = sự cân bằng giữa công việc và cuộc sống." },
      { id: "vf6", prompt: "I started to plan my schedule and ______________ (ưu tiên cho) some of my work.", accepted: ["gave priority to"], correct: "gave priority to", explanation: "<b>give priority to</b> (v phr) = ưu tiên cho." }
    ],
    matching: {
      left: ["deadline", "prioritize", "to-do list", "school counselor", "anxiety", "work-life balance"],
      right: ["hạn chót", "ưu tiên", "danh sách việc cần làm", "cố vấn học đường", "sự lo âu", "cân bằng công việc-cuộc sống"],
      correctMap: [0, 1, 2, 3, 4, 5]
    },
    chooseWord: [
      { id: "cw1", prompt: "\"If you follow a ______ schedule, you will feel much better.\" (REGULARITY)", options: { A: "regularity", B: "regular", C: "regularly", D: "regulate" }, correct: "B", explanation: "Cần tính từ trước danh từ \"schedule\" → regularity (n) → <b>regular</b> (adj)." },
      { id: "cw2", prompt: "\"Regular exercise helps in ______ stress effectively.\" (MANAGE)", options: { A: "managed", B: "manage", C: "managing", D: "management" }, correct: "C", explanation: "Cần danh động từ sau giới từ \"in\" → manage (v) → <b>managing</b> (v-ing)." },
      { id: "cw3", prompt: "\"He felt ______ because he couldn't finish his assignment on time.\" (ANXIETY)", options: { A: "anxiety", B: "anxious", C: "anxiously", D: "anxieties" }, correct: "B", explanation: "Cần tính từ sau \"felt\" → anxiety (n) → <b>anxious</b> (adj)." }
    ],
    wordMeaning: [
      { id: "wm1", prompt: "What does 'deadline' mean?", options: { A: "hạn chót", B: "sự lo âu", C: "cố vấn", D: "danh sách việc cần làm" }, correct: "A", explanation: "deadline (n) = hạn chót." },
      { id: "wm2", prompt: "What does 'prioritize' mean?", options: { A: "trì hoãn", B: "ưu tiên", C: "tránh né", D: "quên lãng" }, correct: "B", explanation: "prioritize (v) = ưu tiên." },
      { id: "wm3", prompt: "What does 'work-life balance' mean?", options: { A: "sự mất cân bằng", B: "áp lực công việc", C: "cân bằng công việc-cuộc sống", D: "thời gian biểu" }, correct: "C", explanation: "work-life balance (n phr) = cân bằng công việc-cuộc sống." }
    ],
    wordForm: [
      { id: "wf1", prompt: "If you follow a (REGULARITY) ______________ schedule, you will feel much better.", accepted: ["regular"], correct: "regular", explanation: "regularity (n) → regular (adj)." },
      { id: "wf2", prompt: "He felt (ANXIETY) ______________ because he couldn't finish his assignment on time.", accepted: ["anxious"], correct: "anxious", explanation: "anxiety (n) → anxious (adj)." },
      { id: "wf3", prompt: "The teacher gave us an (EDUCATE) ______________ talk on how to stay focused in class.", accepted: ["educational"], correct: "educational", explanation: "educate (v) → educational (adj)." }
    ]
  },

  // ---------------------------------------------------------
  // PART 2 — GRAMMAR REVIEW & PRACTICE
  // ---------------------------------------------------------
  grammar: [
    {
      id: "g1", name: "Chủ ngữ giả It ⇄ Chủ ngữ thật V-ing (It is + adj + to V ⇄ V-ing + is + adj)",
      usage: "Khi câu có chủ ngữ giả \"It\" và động từ nguyên mẫu có \"to\" đứng sau tính từ, có thể chuyển sang chủ ngữ thật là danh động từ (V-ing) đứng đầu câu, giữ nguyên ý nghĩa.",
      formulas: [
        "It is + adj + to V.  →  V-ing + is + adj.",
        "It is important to take care of both physical and mental health. → Taking care of both physical and mental health is important."
      ],
      signals: ["It is + adj + to V", "V-ing + is + adj"],
      examples: [
        { en: "It is important to take care of both physical and mental health.", vi: "Việc chăm sóc cả sức khỏe thể chất và tinh thần là quan trọng." },
        { en: "Taking care of both physical and mental health is important.", vi: "Chăm sóc cả sức khỏe thể chất và tinh thần là quan trọng." }
      ],
      mistakes: [
        { wrong: "Take care of health is important.", right: "Taking care of health is important. (cần V-ing làm chủ ngữ, không dùng V nguyên mẫu)" }
      ],
      practice: {
        level1: [
          { id: "g1l1a", type: "fillblank", prompt: "It is necessary to drink enough water every day. → ______________ (Drinking) enough water every day is necessary.", accepted: ["Drinking"], correct: "Drinking", explanation: "It is + adj + to V → V-ing + is + adj." }
        ],
        level2: [
          { id: "g1l2a", type: "fillblank", prompt: "Rewrite: 'It is difficult to balance work and study.' → ______________ (Balancing) work and study is difficult.", accepted: ["Balancing"], correct: "Balancing", explanation: "It is + adj + to V → V-ing + is + adj." }
        ],
        level3: [
          { id: "g1l3a", type: "fillblank", prompt: "Rewrite so it keeps the same meaning: 'It is essential to get enough sleep every night.' → ______________ (Getting enough sleep every night is essential).", accepted: ["getting enough sleep every night is essential"], correct: "Getting enough sleep every night is essential", explanation: "It is + adj + to V → V-ing + is + adj." }
        ]
      }
    },
    {
      id: "g2", name: "If ... don't ⇄ Unless",
      usage: "\"If + S + don't/doesn't + V\" có thể chuyển thành \"Unless + S + V (khẳng định)\" — \"unless\" đã mang nghĩa phủ định (= if...not), nên bỏ \"don't/doesn't\".",
      formulas: [
        "If + S + don't/doesn't + V, S + will + V.  →  Unless + S + V, S + will + V.",
        "If you don't manage your time well, you will feel stressed out. → Unless you manage your time well, you will feel stressed out."
      ],
      signals: ["If ... don't ...", "Unless ..."],
      examples: [
        { en: "If you don't manage your time well, you will feel stressed out.", vi: "Nếu bạn không quản lý thời gian tốt, bạn sẽ cảm thấy căng thẳng." },
        { en: "Unless you manage your time well, you will feel stressed out.", vi: "Trừ khi bạn quản lý thời gian tốt, nếu không bạn sẽ cảm thấy căng thẳng." }
      ],
      mistakes: [
        { wrong: "Unless you don't drink enough water, you will become dehydrated.", right: "Unless you drink enough water, you will become dehydrated. (không dùng \"don't\" sau \"unless\")" }
      ],
      practice: {
        level1: [
          { id: "g2l1a", type: "fillblank", prompt: "If you don't wear a helmet, you may get hurt. → ______________ (Unless) you wear a helmet, you may get hurt.", accepted: ["Unless"], correct: "Unless", explanation: "If ... don't → Unless (bỏ don't)." }
        ],
        level2: [
          { id: "g2l2a", type: "fillblank", prompt: "Rewrite: 'If you don't study hard, you won't pass the exam.' → ______________ (Unless) you study hard, you won't pass the exam.", accepted: ["Unless"], correct: "Unless", explanation: "If ... don't → Unless." }
        ],
        level3: [
          { id: "g2l3a", type: "fillblank", prompt: "Rewrite so it keeps the same meaning: 'If you don't eat healthily, you will get sick easily.' → ______________ (Unless you eat healthily, you will get sick easily).", accepted: ["unless you eat healthily, you will get sick easily"], correct: "Unless you eat healthily, you will get sick easily", explanation: "If ... don't → Unless." }
        ]
      }
    },
    {
      id: "g3", name: "haven't done st for + khoảng thời gian ⇄ The last time ... was ... ago",
      usage: "\"haven't/hasn't + V3 + for + khoảng thời gian\" (hiện tại hoàn thành phủ định) có thể chuyển thành \"The last time + S + V(quá khứ) + was + khoảng thời gian + ago\" để diễn tả lần cuối cùng thực hiện hành động.",
      formulas: [
        "S + haven't/hasn't + V3 + for + khoảng thời gian.  →  The last time + S + V(ed) + was + khoảng thời gian + ago.",
        "I haven't played football with my classmates for two weeks. → The last time I played football with my classmates was two weeks ago."
      ],
      signals: ["haven't ... for", "The last time ... was ... ago"],
      examples: [
        { en: "I haven't played football with my classmates for two weeks.", vi: "Tôi đã không chơi bóng đá với bạn cùng lớp trong hai tuần." },
        { en: "The last time I played football with my classmates was two weeks ago.", vi: "Lần cuối cùng tôi chơi bóng đá với bạn cùng lớp là hai tuần trước." }
      ],
      mistakes: [
        { wrong: "The last time I play football was two weeks ago.", right: "The last time I played football was two weeks ago. (cần động từ chia ở quá khứ đơn)" }
      ],
      practice: {
        level1: [
          { id: "g3l1a", type: "fillblank", prompt: "I haven't seen my grandparents for a month. → The last time I ______________ (saw) my grandparents was a month ago.", accepted: ["saw"], correct: "saw", explanation: "haven't seen for → the last time...saw...was...ago." }
        ],
        level2: [
          { id: "g3l2a", type: "fillblank", prompt: "Rewrite: 'She hasn't gone swimming for three months.' → The last time she ______________ (went) swimming was three months ago.", accepted: ["went"], correct: "went", explanation: "hasn't gone for → the last time...went...was...ago." }
        ],
        level3: [
          { id: "g3l3a", type: "fillblank", prompt: "Rewrite so it keeps the same meaning: 'We haven't had a family trip for a year.' → ______________ (The last time we had a family trip was a year ago).", accepted: ["the last time we had a family trip was a year ago"], correct: "The last time we had a family trip was a year ago", explanation: "haven't had for → the last time...had...was...ago." }
        ]
      }
    },
    {
      id: "g4", name: "might V because S V(hiện tại) ⇄ If S V(hiện tại), might V",
      usage: "Câu nêu khả năng với \"might\" và lý do bằng \"because\" có thể chuyển thành câu điều kiện, đưa lý do thành mệnh đề \"if\", giữ \"might\" trong mệnh đề chính để diễn tả khả năng.",
      formulas: [
        "S + might + V + because + S + V(hiện tại).  →  If + S + V(hiện tại), S + might + V.",
        "Your brother might get tired tomorrow because he stays up late tonight. → If your brother stays up late tonight, he might get tired tomorrow."
      ],
      signals: ["might ... because", "If ..., might ..."],
      examples: [
        { en: "Your brother might get tired tomorrow because he stays up late tonight.", vi: "Anh trai bạn có thể sẽ mệt vào ngày mai vì tối nay anh ấy thức khuya." },
        { en: "If your brother stays up late tonight, he might get tired tomorrow.", vi: "Nếu tối nay anh trai bạn thức khuya, anh ấy có thể sẽ mệt vào ngày mai." }
      ],
      mistakes: [
        { wrong: "If your brother stays up late tonight, he might got tired tomorrow.", right: "If your brother stays up late tonight, he might get tired tomorrow. (sau \"might\" dùng động từ nguyên mẫu)" }
      ],
      practice: {
        level1: [
          { id: "g4l1a", type: "fillblank", prompt: "She might feel stressed because she has too much work. → If she ______________ (has) too much work, she might feel stressed.", accepted: ["has"], correct: "has", explanation: "might...because...V(hiện tại) → If...V(hiện tại), might..." }
        ],
        level2: [
          { id: "g4l2a", type: "fillblank", prompt: "Rewrite: 'He might miss the deadline because he doesn't manage his time well.' → If he ______________ (doesn't manage) his time well, he might miss the deadline.", accepted: ["doesn't manage"], correct: "doesn't manage", explanation: "might...because → If..., might..." }
        ],
        level3: [
          { id: "g4l3a", type: "fillblank", prompt: "Rewrite so it keeps the same meaning: 'They might feel anxious because they don't get enough sleep.' → ______________ (If they don't get enough sleep, they might feel anxious).", accepted: ["if they don't get enough sleep, they might feel anxious"], correct: "If they don't get enough sleep, they might feel anxious", explanation: "might...because → If..., might..." }
        ]
      }
    },
    {
      id: "g5", name: "Đại từ quan hệ chỉ người làm chủ ngữ \"who\"",
      usage: "\"who\" làm đại từ quan hệ chủ ngữ, thay thế cho danh từ chỉ người đứng trước nó, dùng để bổ sung thông tin về người đó.",
      formulas: [
        "N (người) + who + V ... (who thay cho chủ ngữ chỉ người)",
        "Who is the person who helped you with your time management?"
      ],
      signals: ["N (person), who + V"],
      examples: [
        { en: "Who is the person who helped you with your time management?", vi: "Ai là người đã giúp bạn quản lý thời gian?" },
        { en: "My school counselor is the person who gave me great advice.", vi: "Cố vấn học đường của tôi là người đã cho tôi lời khuyên tuyệt vời." }
      ],
      mistakes: [
        { wrong: "The person which helped me is my counselor.", right: "The person who helped me is my counselor. (dùng \"who\" cho người, không dùng \"which\")" }
      ],
      practice: {
        level1: [
          { id: "g5l1a", type: "fillblank", prompt: "She is the student ______________ (who) won the speaking contest.", accepted: ["who"], correct: "who", explanation: "\"who\" thay cho danh từ chỉ người \"the student\"." }
        ],
        level2: [
          { id: "g5l2a", type: "fillblank", prompt: "Combine: 'He is the doctor. He advised me to exercise regularly.' → He is the doctor ______________ (who) advised me to exercise regularly.", accepted: ["who"], correct: "who", explanation: "\"who\" thay cho danh từ chỉ người \"the doctor\"." }
        ],
        level3: [
          { id: "g5l3a", type: "fillblank", prompt: "Combine so it keeps the same meaning: 'This is the counselor. She helps students reduce stress.' → ______________ (This is the counselor who helps students reduce stress).", accepted: ["this is the counselor who helps students reduce stress"], correct: "This is the counselor who helps students reduce stress", explanation: "\"who\" thay cho danh từ chỉ người \"the counselor\"." }
        ]
      }
    }
  ],

  // ---------------------------------------------------------
  // PART 3 — READING PRACTICE
  // ---------------------------------------------------------
  reading: {
    passage: "Balance is key for Mary, a busy teenager. She uses an app to <mark data-w=\"stay organized\">stay organized</mark> with her assignments and deadlines; the app helps her receive reminders to ensure she doesn't forget anything. Mary also makes a daily to-do list to help her stay focused and <mark data-w=\"motivated\">motivated</mark>. She's mindful of not spending too much time on online social media, limiting her usage to an hour each day to avoid wasting her time. On weekends, Mary enjoys relaxing and socializing with friends, going to the cinema, shopping, or just hanging out. She also does some volunteer work at a local charity, which provides valuable academic experience and looks great on her CV. James, an adult working a nine-to-five job, is also aware of the importance of time management. He starts his day by making a to-do list, <mark data-w=\"prioritizing\">prioritizing</mark> the most urgent or difficult tasks first when he has the most energy. To avoid <mark data-w=\"distractions\">distractions</mark>, James turns off email and social media notifications on his phone and closes his office door, allowing him to concentrate. On the day when he must work overtime, he quickly rearranges his tasks and makes sure everything gets completed on time. When at home, James spends his quality time with his family, playing games or going to the park with his two young children. James and his wife share the housework, taking turns cooking and cleaning, ensuring a great <mark data-w=\"work-life balance\">work-life balance</mark>. In his free time, James keeps fit by playing football with friends and going to the gym, which helps him relax and clear his mind.",
    vocabInContext: {
      "stay organized": "luôn ngăn nắp, có tổ chức",
      motivated: "có động lực",
      prioritizing: "ưu tiên",
      distractions: "sự xao nhãng",
      "work-life balance": "sự cân bằng giữa công việc và cuộc sống"
    },
    translation: "<b>CÂN BẰNG CUỘC SỐNG: MARY VÀ JAMES</b><br><br>Sự cân bằng là chìa khóa đối với Mary, một thiếu niên bận rộn. Cô sử dụng một ứng dụng để luôn ngăn nắp với bài tập và hạn chót; ứng dụng giúp cô nhận nhắc nhở để đảm bảo không quên điều gì. Mary cũng lập danh sách việc cần làm hằng ngày để luôn tập trung và có động lực. Cô luôn ý thức không dành quá nhiều thời gian cho mạng xã hội trực tuyến, giới hạn việc sử dụng trong một giờ mỗi ngày để tránh lãng phí thời gian. Vào cuối tuần, Mary thích thư giãn và giao lưu với bạn bè, đi xem phim, mua sắm, hoặc chỉ đơn giản là đi chơi. Cô cũng làm công việc tình nguyện tại một tổ chức từ thiện địa phương, mang lại kinh nghiệm học thuật quý giá và làm đẹp hồ sơ (CV) của cô. James, một người trưởng thành làm việc giờ hành chính, cũng nhận thức được tầm quan trọng của việc quản lý thời gian. Anh bắt đầu ngày mới bằng cách lập danh sách việc cần làm, ưu tiên những việc gấp hoặc khó nhất trước khi còn nhiều năng lượng. Để tránh xao nhãng, James tắt thông báo email và mạng xã hội trên điện thoại và đóng cửa phòng làm việc để tập trung. Vào ngày phải làm thêm giờ, anh nhanh chóng sắp xếp lại công việc và đảm bảo mọi thứ hoàn thành đúng hạn. Khi ở nhà, James dành thời gian chất lượng cho gia đình, chơi trò chơi hoặc đến công viên cùng hai con nhỏ. James và vợ chia sẻ việc nhà, thay phiên nhau nấu ăn và dọn dẹp, đảm bảo sự cân bằng tốt giữa công việc và cuộc sống. Trong thời gian rảnh, James giữ dáng bằng cách chơi bóng đá với bạn bè và đến phòng gym, điều này giúp anh thư giãn và giải tỏa tâm trí.",
    practice: [
      { id: "r1", type: "truefalse", prompt: "Mary spends more than two hours every day checking her social media accounts.", correct: "False", explanation: "Sai. Bài đọc: 'limiting her usage to an hour each day.'" },
      { id: "r2", type: "truefalse", prompt: "Doing volunteer work at a local charity helps Mary improve her CV.", correct: "True", explanation: "Bài đọc: 'volunteer work at a local charity, which ... looks great on her CV.'" },
      { id: "r3", type: "truefalse", prompt: "James prefers to solve the easiest tasks at the beginning of his workday.", correct: "False", explanation: "Sai. Bài đọc: James 'prioritizing the most urgent or difficult tasks first.'" },
      { id: "r4", type: "truefalse", prompt: "James and his wife share domestic chores to maintain a good work-life balance.", correct: "True", explanation: "Bài đọc: 'James and his wife share the housework ... ensuring a great work-life balance.'" },
      { id: "r5", type: "mcq", prompt: "What is the main idea of the passage?", options: { A: "The differences in daily entertainment choices between teenagers and adults.", B: "How a teenager and an adult manage their time to achieve balance in life.", C: "The negative impacts of social media notifications on work and study.", D: "The importance of sharing housework and playing sports in a family." }, correct: "B", explanation: "Bài đọc kể về cách Mary và James quản lý thời gian để đạt được sự cân bằng." },
      { id: "r6", type: "mcq", prompt: "Which of the following is NOT true according to the passage?", options: { A: "Mary uses a mobile application to get reminders about her deadlines.", B: "James sometimes has to work extra hours but still finishes his tasks on time.", C: "James always leaves his office door open to communicate with his colleagues.", D: "Going to the gym and playing football help James clear his mind." }, correct: "C", explanation: "Bài đọc nói James 'closes his office door' để tập trung, không phải luôn mở cửa." },
      { id: "r7", type: "fillblank", prompt: "Find the word in the passage that means 'sự xao nhãng' (n, số nhiều).", accepted: ["distractions"], correct: "distractions", explanation: "'To avoid distractions, James turns off ... notifications.' — distractions (n) = sự xao nhãng." },
      { id: "r8", type: "mcq", prompt: "According to the passage, how does Mary avoid wasting her time on social media?", options: { A: "By deleting all her social media accounts.", B: "By limiting her usage to an hour each day.", C: "By asking her parents to control her phone.", D: "By using social media only on weekends." }, correct: "B", explanation: "Bài đọc: 'limiting her usage to an hour each day to avoid wasting her time.'" },
      { id: "r9", type: "truefalse", prompt: "According to the passage, James spends his free time only working overtime.", correct: "False", explanation: "Sai. Bài đọc cho biết James chơi bóng đá, đến phòng gym và dành thời gian cho gia đình trong lúc rảnh." }
    ]
  },

  // ---------------------------------------------------------
  // PART 4 — TRANSLATION PRACTICE
  // ---------------------------------------------------------
  translation: [
    { id: "t1", en: "Balance is key for Mary, a busy teenager.", suggested: "Sự cân bằng là chìa khóa đối với Mary, một thiếu niên bận rộn.", notes: "\"key\" ở đây mang nghĩa \"điều cốt yếu, quan trọng nhất\"." },
    { id: "t2", en: "She's mindful of not spending too much time on online social media.", suggested: "Cô ấy luôn ý thức về việc không dành quá nhiều thời gian cho mạng xã hội trực tuyến.", notes: "\"be mindful of + V-ing\" (chú ý/ý thức về việc gì)." },
    { id: "t3", en: "To avoid distractions, James turns off email and social media notifications on his phone.", suggested: "Để tránh bị xao nhãng, James tắt thông báo email và mạng xã hội trên điện thoại.", notes: "\"To V\" mở đầu câu diễn tả mục đích." },
    { id: "t4", en: "James and his wife share the housework, taking turns cooking and cleaning.", suggested: "James và vợ anh ấy chia sẻ việc nhà, thay phiên nhau nấu ăn và dọn dẹp.", notes: "\"take turns + V-ing\" (thay phiên nhau làm gì)." },
    { id: "t5", en: "In his free time, James keeps fit by playing football with friends and going to the gym.", suggested: "Trong thời gian rảnh, James giữ dáng bằng cách chơi bóng đá với bạn bè và đến phòng gym.", notes: "\"by + V-ing\" (bằng cách làm gì) nêu phương tiện." }
  ],

  // ---------------------------------------------------------
  // PART 5 — SENTENCE TRANSFORMATION PRACTICE
  // ---------------------------------------------------------
  transformation: [
    {
      id: "tr1", name: "Chủ ngữ giả It ⇄ Chủ ngữ thật V-ing",
      formula: "It is + adj + to V  →  V-ing + is + adj",
      example: { before: "It is important to take care of both physical and mental health.", after: "Taking care of both physical and mental health is important." },
      practice: [
        { id: "tr1p1", type: "fillblank", prompt: "It is necessary to follow a healthy diet. → ______________ (Following) a healthy diet is necessary.", accepted: ["Following"], correct: "Following", explanation: "It is + adj + to V → V-ing + is + adj." },
        { id: "tr1p2", type: "fillblank", prompt: "Rewrite: 'It is important to reduce stress every day.' → ______________ (Reducing) stress every day is important.", accepted: ["Reducing"], correct: "Reducing", explanation: "It is + adj + to V → V-ing + is + adj." }
      ]
    },
    {
      id: "tr2", name: "If ... don't ⇄ Unless",
      formula: "If + S + don't/doesn't + V, S + will + V  →  Unless + S + V, S + will + V",
      example: { before: "If you don't manage your time well, you will feel stressed out.", after: "Unless you manage your time well, you will feel stressed out." },
      practice: [
        { id: "tr2p1", type: "fillblank", prompt: "If you don't take a break, you will feel exhausted. → ______________ (Unless) you take a break, you will feel exhausted.", accepted: ["Unless"], correct: "Unless", explanation: "If ... don't → Unless." },
        { id: "tr2p2", type: "fillblank", prompt: "Rewrite: 'If you don't get enough sleep, you will feel tired.' → ______________ (Unless) you get enough sleep, you will feel tired.", accepted: ["Unless"], correct: "Unless", explanation: "If ... don't → Unless." }
      ]
    },
    {
      id: "tr3", name: "haven't done for + khoảng thời gian ⇄ The last time ... was ... ago",
      formula: "S + haven't/hasn't + V3 + for + khoảng thời gian  →  The last time + S + V(ed) + was + khoảng thời gian + ago",
      example: { before: "I haven't played football with my classmates for two weeks.", after: "The last time I played football with my classmates was two weeks ago." },
      practice: [
        { id: "tr3p1", type: "fillblank", prompt: "I haven't talked to my counselor for a week. → The last time I ______________ (talked) to my counselor was a week ago.", accepted: ["talked"], correct: "talked", explanation: "haven't ... for → The last time ... was ... ago." },
        { id: "tr3p2", type: "fillblank", prompt: "Rewrite: 'They haven't exercised for two months.' → The last time they ______________ (exercised) was two months ago.", accepted: ["exercised"], correct: "exercised", explanation: "haven't ... for → The last time ... was ... ago." }
      ]
    },
    {
      id: "tr4", name: "might V because S V(hiện tại) ⇄ If S V(hiện tại), might V",
      formula: "S + might + V + because + S + V(hiện tại)  →  If + S + V(hiện tại), S + might + V",
      example: { before: "Your brother might get tired tomorrow because he stays up late tonight.", after: "If your brother stays up late tonight, he might get tired tomorrow." },
      practice: [
        { id: "tr4p1", type: "fillblank", prompt: "She might feel anxious because she hasn't finished her project. → If she ______________ (hasn't finished) her project, she might feel anxious.", accepted: ["hasn't finished"], correct: "hasn't finished", explanation: "might...because → If..., might..." },
        { id: "tr4p2", type: "fillblank", prompt: "Rewrite: 'He might miss the deadline because he doesn't plan his schedule.' → If he ______________ (doesn't plan) his schedule, he might miss the deadline.", accepted: ["doesn't plan"], correct: "doesn't plan", explanation: "might...because → If..., might..." }
      ]
    }
  ],

  // ---------------------------------------------------------
  // PART 6 — QUICK REVIEW (mini test, all skills)
  // ---------------------------------------------------------
  quickReview: [
    { id: "q1", cat: "Vocabulary", type: "mcq", prompt: "'Deadline' means:", options: { A: "hạn chót", B: "sự lo âu", C: "cố vấn", D: "ưu tiên" }, correct: "A", explanation: "deadline (n) = hạn chót." },
    { id: "q2", cat: "Vocabulary", type: "mcq", prompt: "'Prioritize' means:", options: { A: "trì hoãn", B: "ưu tiên", C: "tránh né", D: "thư giãn" }, correct: "B", explanation: "prioritize (v) = ưu tiên." },
    { id: "q3", cat: "Vocabulary", type: "fillblank", prompt: "James turns off notifications to ______________ (avoid distractions).", accepted: ["avoid distractions"], correct: "avoid distractions", explanation: "avoid distractions (v phr) = tránh xao nhãng." },
    { id: "q4", cat: "Grammar", type: "mcq", prompt: "It is important to take care of your health. → ______ care of your health is important.", options: { A: "Take", B: "Taking", C: "Took", D: "To take" }, correct: "B", explanation: "It is + adj + to V → V-ing + is + adj." },
    { id: "q5", cat: "Grammar", type: "mcq", prompt: "If you don't manage your time well, you will feel stressed. → ______ you manage your time well, you will feel stressed out.", options: { A: "If", B: "Unless", C: "Because", D: "Although" }, correct: "B", explanation: "If ... don't → Unless." },
    { id: "q6", cat: "Grammar", type: "fillblank", prompt: "I haven't played football for two weeks. → The last time I played football ______________ (was) two weeks ago.", accepted: ["was"], correct: "was", explanation: "The last time + S + V(ed) + was + khoảng thời gian + ago." },
    { id: "q7", cat: "Grammar", type: "fillblank", prompt: "Your brother might get tired because he stays up late. → If your brother ______________ (stays up) late, he might get tired.", accepted: ["stays up"], correct: "stays up", explanation: "might...because → If..., might..." },
    { id: "q8", cat: "Reading", type: "truefalse", prompt: "Doing volunteer work at a local charity helps Mary improve her CV.", correct: "True", explanation: "Đúng theo bài đọc." },
    { id: "q9", cat: "Reading", type: "truefalse", prompt: "James prefers to solve the easiest tasks at the beginning of his workday.", correct: "False", explanation: "Sai. James ưu tiên việc gấp/khó nhất trước." },
    { id: "q10", cat: "Reading", type: "mcq", prompt: "What is the main idea of the balance passage?", options: { A: "How a teenager and an adult manage their time to achieve balance in life.", B: "The history of time management apps.", C: "How to build mobile applications.", D: "The cost of hiring a school counselor." }, correct: "A", explanation: "Bài đọc kể về cách Mary và James quản lý thời gian." },
    { id: "q11", cat: "Writing", type: "fillblank", prompt: "If you follow a ______________ (regularity) schedule, you will feel much better.", accepted: ["regular"], correct: "regular", explanation: "regularity (n) → regular (adj)." },
    { id: "q12", cat: "Writing", type: "fillblank", prompt: "He felt ______________ (anxiety) because he couldn't finish his assignment on time.", accepted: ["anxious"], correct: "anxious", explanation: "anxiety (n) → anxious (adj)." },
    { id: "q13", cat: "Writing", type: "fillblank", prompt: "Regular exercise helps in ______________ (manage) stress effectively.", accepted: ["managing"], correct: "managing", explanation: "manage (v) → managing (v-ing)." },
    { id: "q14", cat: "Vocabulary", type: "mcq", prompt: "Which word means 'cân bằng công việc và cuộc sống'?", options: { A: "work-life balance", B: "to-do list", C: "deadline", D: "anxiety" }, correct: "A", explanation: "work-life balance (n phr) = cân bằng công việc-cuộc sống." }
  ]
};
