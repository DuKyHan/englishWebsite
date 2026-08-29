const REVIEW = {
  id: "test37",
  testFile: "test37.html",
  grade: "Grade 7 — Global Success",
  unit: "Unit 1: Hobbies",
  title: "Knowledge Review — Unit 1, Practice Test 1",

  // ---------------------------------------------------------
  // PART 1 — VOCABULARY REVIEW
  // ---------------------------------------------------------
  vocabulary: [
    { word: "colorful", pos: "adj", ipa: "/ˈkʌlərfl/", meaning: "đầy màu sắc", example: "My sister loves arranging flowers because she thinks they are colorful.", exampleVi: "Chị tôi thích cắm hoa vì chị ấy nghĩ chúng rất nhiều màu sắc." },
    { word: "musician", pos: "n", ipa: "/mjuˈzɪʃn/", meaning: "nhạc sĩ, nhạc công", example: "The new school music club has many talented musicians.", exampleVi: "Câu lạc bộ âm nhạc mới của trường có nhiều nhạc công tài năng." },
    { word: "surprisingly", pos: "adv", ipa: "/sərˈpraɪzɪŋli/", meaning: "đáng ngạc nhiên", example: "Surprisingly, quite a few students do not have any hobbies.", exampleVi: "Đáng ngạc nhiên là khá nhiều học sinh không có sở thích nào." },
    { word: "interesting", pos: "adj", ipa: "/ˈɪntrəstɪŋ/", meaning: "thú vị", example: "Doing gardening is an interesting way to reduce stress after a hard exam.", exampleVi: "Làm vườn là một cách thú vị để giảm căng thẳng sau kỳ thi khó." },
    { word: "skill", pos: "n", ipa: "/skɪl/", meaning: "kỹ năng", example: "Playing board games helps children develop their social skills.", exampleVi: "Chơi trò chơi cờ bàn giúp trẻ em phát triển kỹ năng xã hội." },
    { word: "permission", pos: "n", ipa: "/pərˈmɪʃn/", meaning: "sự cho phép", example: "The teacher gave the students permission to go to the school library.", exampleVi: "Giáo viên đã cho phép học sinh đến thư viện trường." },
    { word: "collector", pos: "n", ipa: "/kəˈlektər/", meaning: "người sưu tầm", example: "He is a famous stamp collector in our city.", exampleVi: "Anh ấy là một nhà sưu tầm tem nổi tiếng trong thành phố chúng tôi." },
    { word: "fragile", pos: "adj", ipa: "/ˈfrædʒl/", meaning: "dễ vỡ", example: "All of the things in this box are very fragile.", exampleVi: "Tất cả mọi thứ trong hộp này đều rất dễ vỡ." },
    { word: "take up", pos: "v", ipa: "/teɪk ʌp/", meaning: "bắt đầu theo đuổi (một sở thích)", example: "Will you take up making models in the future?", exampleVi: "Bạn có định bắt đầu làm mô hình trong tương lai không?" },
    { word: "pastime", pos: "n", ipa: "/ˈpæstaɪm/", meaning: "thú tiêu khiển", example: "A hobby is an activity, interest, enthusiasm, or pastime that is undertaken for pleasure.", exampleVi: "Sở thích là một hoạt động, mối quan tâm, niềm đam mê, hoặc thú tiêu khiển được thực hiện để giải trí." },
    { word: "recreation", pos: "n", ipa: "/ˌrekriˈeɪʃn/", meaning: "sự giải trí, nghỉ ngơi", example: "Our life would be hard without rest and recreation.", exampleVi: "Cuộc sống của chúng ta sẽ khó khăn nếu không có nghỉ ngơi và giải trí." },
    { word: "enthusiasm", pos: "n", ipa: "/ɪnˈθuːziæzəm/", meaning: "niềm đam mê, sự nhiệt tình", example: "A hobby is an activity, interest, enthusiasm, or pastime.", exampleVi: "Sở thích là một hoạt động, mối quan tâm, niềm đam mê, hay thú tiêu khiển." },
    { word: "knitting", pos: "n", ipa: "/ˈnɪtɪŋ/", meaning: "đan len", example: "My grandmother takes up knitting as a new hobby.", exampleVi: "Bà tôi bắt đầu học đan len như một sở thích mới." },
    { word: "photography", pos: "n", ipa: "/fəˈtɒɡrəfi/", meaning: "nhiếp ảnh", example: "Some people prefer reading, cooking, knitting, collecting, or photography.", exampleVi: "Một số người thích đọc sách, nấu ăn, đan len, sưu tầm, hoặc nhiếp ảnh." },
    { word: "pottery", pos: "n", ipa: "/ˈpɒtəri/", meaning: "làm gốm", example: "I love making pottery and doing bird-watching on weekends.", exampleVi: "Tôi thích làm gốm và ngắm chim vào cuối tuần." },
    { word: "bird-watching", pos: "n", ipa: "/ˈbɜːrd wɒtʃɪŋ/", meaning: "ngắm chim", example: "I love making pottery and doing bird-watching on weekends.", exampleVi: "Tôi thích làm gốm và ngắm chim vào cuối tuần." },
    { word: "mountain climbing", pos: "n", ipa: "/ˈmaʊntən ˈklaɪmɪŋ/", meaning: "leo núi", example: "My best friend doesn't like mountain climbing because he is afraid of heights.", exampleVi: "Bạn thân của tôi không thích leo núi vì cậu ấy sợ độ cao." },
    { word: "stamp club", pos: "n", ipa: "/stæmp klʌb/", meaning: "câu lạc bộ tem", example: "You can share your stamps with other collectors at a stamp club on weekends.", exampleVi: "Bạn có thể chia sẻ tem của mình với những người sưu tầm khác tại câu lạc bộ tem vào cuối tuần." }
  ],

  vocabPractice: {
    mcq: [
      { id: "vp1", prompt: "Choose the word that means 'dễ vỡ':", options: { A: "fragile", B: "colorful", C: "healthy", D: "rewarding" }, correct: "A", explanation: "<b>fragile</b> (adj) = dễ vỡ." },
      { id: "vp2", prompt: "Choose the word that means 'người sưu tầm':", options: { A: "collector", B: "musician", C: "instructor", D: "artist" }, correct: "A", explanation: "<b>collector</b> (n) = người sưu tầm." },
      { id: "vp3", prompt: "\"Playing board games helps children develop their social ______.\"", options: { A: "skills", B: "permission", C: "pastime", D: "recreation" }, correct: "A", explanation: "\"<b>skills</b>\" (kỹ năng) phù hợp với ngữ cảnh phát triển kỹ năng xã hội." },
      { id: "vp4", prompt: "Choose the word that means 'nhiếp ảnh':", options: { A: "photography", B: "pottery", C: "knitting", D: "gardening" }, correct: "A", explanation: "<b>photography</b> (n) = nhiếp ảnh." },
      { id: "vp5", prompt: "\"Will you ______ making models in the future?\"", options: { A: "take up", B: "take down", C: "take off", D: "take away" }, correct: "A", explanation: "\"<b>take up</b> + hobby\" (bắt đầu theo đuổi một sở thích mới)." },
      { id: "vp6", prompt: "Choose the word that means 'niềm đam mê, sự nhiệt tình':", options: { A: "enthusiasm", B: "boredom", C: "pressure", D: "difficulty" }, correct: "A", explanation: "<b>enthusiasm</b> (n) = niềm đam mê, sự nhiệt tình." }
    ],
    fillblank: [
      { id: "vf1", prompt: "The teacher gave the students ______________ (sự cho phép) to go to the school library.", accepted: ["permission"], correct: "permission", explanation: "<b>permission</b> (n) = sự cho phép." },
      { id: "vf2", prompt: "He is a famous stamp ______________ (người sưu tầm) in our city.", accepted: ["collector"], correct: "collector", explanation: "<b>collector</b> (n) = người sưu tầm." },
      { id: "vf3", prompt: "All of the things in this box are very ______________ (dễ vỡ).", accepted: ["fragile"], correct: "fragile", explanation: "<b>fragile</b> (adj) = dễ vỡ." },
      { id: "vf4", prompt: "My grandmother takes up ______________ (đan len) as a new hobby.", accepted: ["knitting"], correct: "knitting", explanation: "<b>knitting</b> (n) = đan len." },
      { id: "vf5", prompt: "I love making pottery and doing ______________ (ngắm chim) on weekends.", accepted: ["bird-watching"], correct: "bird-watching", explanation: "<b>bird-watching</b> (n) = ngắm chim." },
      { id: "vf6", prompt: "My best friend doesn't like ______________ (leo núi) because he is afraid of heights.", accepted: ["mountain climbing"], correct: "mountain climbing", explanation: "<b>mountain climbing</b> (n) = leo núi." }
    ],
    matching: {
      left: ["pastime", "recreation", "enthusiasm", "pottery", "musician", "surprisingly"],
      right: ["thú tiêu khiển", "sự giải trí, nghỉ ngơi", "niềm đam mê, sự nhiệt tình", "làm gốm", "nhạc sĩ, nhạc công", "đáng ngạc nhiên"],
      correctMap: [0, 1, 2, 3, 4, 5]
    },
    chooseWord: [
      { id: "cw1", prompt: "\"My sister loves arranging flowers because she thinks they are ______.\" (COLOR)", options: { A: "color", B: "colored", C: "colorful", D: "coloring" }, correct: "C", explanation: "Cần tính từ sau \"are\" → color (n) → <b>colorful</b> (adj, +ful)." },
      { id: "cw2", prompt: "\"The new school music club has many talented ______.\" (MUSIC)", options: { A: "music", B: "musical", C: "musicians", D: "musically" }, correct: "C", explanation: "Cần danh từ số nhiều chỉ người sau \"talented\" → music (n) → musician (n) → <b>musicians</b>." },
      { id: "cw3", prompt: "\"______, quite a few students do not have any hobbies.\" (SURPRISE)", options: { A: "Surprise", B: "Surprised", C: "Surprising", D: "Surprisingly" }, correct: "D", explanation: "Cần trạng từ đứng đầu câu bổ nghĩa cho cả câu → surprise (n/v) → <b>surprisingly</b> (adv, +ly)." }
    ],
    wordMeaning: [
      { id: "wm1", prompt: "What does 'fragile' mean?", options: { A: "chắc chắn", B: "dễ vỡ", C: "nặng nề", D: "bền bỉ" }, correct: "B", explanation: "fragile (adj) = dễ vỡ." },
      { id: "wm2", prompt: "What does 'take up' (a hobby) mean?", options: { A: "từ bỏ", B: "bắt đầu theo đuổi", C: "quên đi", D: "chỉ trích" }, correct: "B", explanation: "take up (v) = bắt đầu theo đuổi (một sở thích mới)." },
      { id: "wm3", prompt: "What does 'pastime' mean?", options: { A: "công việc", B: "thú tiêu khiển", C: "kỳ thi", D: "quy định" }, correct: "B", explanation: "pastime (n) = thú tiêu khiển." }
    ],
    wordForm: [
      { id: "wf1", prompt: "My sister loves arranging flowers because she thinks they are ______________ (COLOR).", accepted: ["colorful", "colourful"], correct: "colorful", explanation: "color (n) → colorful (adj, +ful)." },
      { id: "wf2", prompt: "Doing gardening is an ______________ (INTEREST) way to reduce stress.", accepted: ["interesting"], correct: "interesting", explanation: "interest (n/v) → interesting (adj, +ing)." },
      { id: "wf3", prompt: "The teacher gave the students ______________ (PERMIT) to go to the library.", accepted: ["permission"], correct: "permission", explanation: "permit (v) → permission (n)." }
    ]
  },

  // ---------------------------------------------------------
  // PART 2 — GRAMMAR REVIEW & PRACTICE
  // ---------------------------------------------------------
  grammar: [
    {
      id: "g1", name: "doesn't like + N/V-ing ⇄ finds + O + adj",
      usage: "\"S + doesn't/don't like + N/V-ing\" (không thích) có thể viết lại bằng \"S + finds + O + adj\" (thấy điều gì đó ra sao), giữ nguyên thái độ không thích.",
      formulas: [
        "S + doesn't like + N + because...  →  S + finds + N + adj (boring/dangerous/difficult) + because...",
        "My best friend doesn't like mountain climbing because he is afraid of heights. → My best friend finds mountain climbing dangerous because he is afraid of heights."
      ],
      signals: ["doesn't/don't like + N", "finds + O + adj"],
      examples: [
        { en: "My best friend doesn't like mountain climbing because he is afraid of heights.", vi: "Bạn thân của tôi không thích leo núi vì cậu ấy sợ độ cao." },
        { en: "My best friend finds mountain climbing dangerous because he is afraid of heights.", vi: "Bạn thân của tôi thấy leo núi nguy hiểm vì cậu ấy sợ độ cao." }
      ],
      mistakes: [
        { wrong: "My best friend finds mountain climbing to dangerous.", right: "My best friend finds mountain climbing dangerous. (không dùng \"to\" trước tính từ trong cấu trúc \"find + O + adj\")" }
      ],
      practice: {
        level1: [
          { id: "g1l1a", type: "fillblank", prompt: "She doesn't like cooking because it is time-consuming. → She ______________ (finds) cooking time-consuming.", accepted: ["finds"], correct: "finds", explanation: "doesn't like + N → finds + O + adj." }
        ],
        level2: [
          { id: "g1l2a", type: "fillblank", prompt: "Rewrite: 'He doesn't like swimming because it is tiring.' → He ______________ (finds) swimming tiring.", accepted: ["finds"], correct: "finds", explanation: "doesn't like + N → finds + O + adj." }
        ],
        level3: [
          { id: "g1l3a", type: "fillblank", prompt: "Rewrite so it keeps the same meaning: 'I don't like collecting stamps because it is boring.' → ______________ (I find collecting stamps boring).", accepted: ["i find collecting stamps boring"], correct: "I find collecting stamps boring", explanation: "doesn't/don't like + N → finds + O + adj." }
        ]
      }
    },
    {
      id: "g2", name: "Why don't we + V? ⇄ How about + V-ing?",
      usage: "Lời đề nghị \"Why don't we + V nguyên thể?\" có thể viết lại bằng \"How about + V-ing?\", giữ nguyên nghĩa đề nghị.",
      formulas: [
        "Why don't we + V?  →  How about + V-ing?",
        "Why don't we go swimming this afternoon? → How about going swimming this afternoon?"
      ],
      signals: ["Why don't we...?", "How about + V-ing?"],
      examples: [
        { en: "Why don't we go swimming this afternoon?", vi: "Sao chúng ta không đi bơi vào chiều nay nhỉ?" },
        { en: "How about going swimming this afternoon?", vi: "Đi bơi vào chiều nay thì sao nhỉ?" }
      ],
      mistakes: [
        { wrong: "How about go swimming?", right: "How about going swimming? (\"How about\" luôn theo sau bởi V-ing)" }
      ],
      practice: {
        level1: [
          { id: "g2l1a", type: "fillblank", prompt: "Why don't we play badminton? → How about ______________ (playing) badminton?", accepted: ["playing"], correct: "playing", explanation: "Why don't we + V? → How about + V-ing?" }
        ],
        level2: [
          { id: "g2l2a", type: "fillblank", prompt: "Rewrite: 'Why don't we visit the museum?' → How about ______________ (visiting) the museum?", accepted: ["visiting"], correct: "visiting", explanation: "Why don't we + V? → How about + V-ing?" }
        ],
        level3: [
          { id: "g2l3a", type: "fillblank", prompt: "Rewrite so it keeps the same meaning: 'Why don't we take up gardening?' → ______________ (How about taking up gardening?).", accepted: ["how about taking up gardening"], correct: "How about taking up gardening?", explanation: "Why don't we + V? → How about + V-ing?" }
        ]
      }
    },
    {
      id: "g3", name: "be keen on + V-ing ⇄ enjoy + V-ing",
      usage: "\"be keen on + V-ing\" (thích, đam mê làm gì) có thể viết lại bằng \"enjoy + V-ing\", giữ nguyên nghĩa yêu thích.",
      formulas: [
        "S + is/are keen on + V-ing.  →  S + enjoys/enjoy + V-ing.",
        "Alex is keen on taking photos. He takes photos every day. → Alex enjoys taking photos every day."
      ],
      signals: ["be keen on + V-ing", "enjoy + V-ing"],
      examples: [
        { en: "Alex is keen on taking photos. He takes photos every day.", vi: "Alex rất thích chụp ảnh. Cậu ấy chụp ảnh mỗi ngày." },
        { en: "Alex enjoys taking photos every day.", vi: "Alex thích chụp ảnh mỗi ngày." }
      ],
      mistakes: [
        { wrong: "Alex enjoys to take photos.", right: "Alex enjoys taking photos. (\"enjoy\" luôn theo sau bởi V-ing, không phải \"to V\")" }
      ],
      practice: {
        level1: [
          { id: "g3l1a", type: "fillblank", prompt: "She is keen on painting. → She ______________ (enjoys) painting.", accepted: ["enjoys"], correct: "enjoys", explanation: "be keen on + V-ing → enjoy(s) + V-ing." }
        ],
        level2: [
          { id: "g3l2a", type: "fillblank", prompt: "Rewrite: 'They are keen on playing chess.' → They ______________ (enjoy) playing chess.", accepted: ["enjoy"], correct: "enjoy", explanation: "be keen on + V-ing → enjoy + V-ing." }
        ],
        level3: [
          { id: "g3l3a", type: "fillblank", prompt: "Rewrite so it keeps the same meaning: 'Minh is keen on collecting stamps.' → ______________ (Minh enjoys collecting stamps).", accepted: ["minh enjoys collecting stamps"], correct: "Minh enjoys collecting stamps", explanation: "be keen on + V-ing → enjoy(s) + V-ing." }
        ]
      }
    },
    {
      id: "g4", name: "find + O + adj ⇄ My hobby is + V-ing",
      usage: "\"S + find/finds + O + adj\" (thấy điều gì thú vị) khi diễn tả sở thích cá nhân có thể viết lại bằng \"My hobby is + V-ing\", giữ nguyên ý nghĩa yêu thích hoạt động đó.",
      formulas: [
        "I find + V-ing + adj.  →  My hobby is + V-ing.",
        "I find doing gardening interesting. → My hobby is doing gardening."
      ],
      signals: ["find + V-ing + adj", "My hobby is + V-ing"],
      examples: [
        { en: "I find doing gardening interesting.", vi: "Tôi thấy làm vườn thú vị." },
        { en: "My hobby is doing gardening.", vi: "Sở thích của tôi là làm vườn." }
      ],
      mistakes: [
        { wrong: "My hobby is do gardening.", right: "My hobby is doing gardening. (cần V-ing sau \"my hobby is\")" }
      ],
      practice: {
        level1: [
          { id: "g4l1a", type: "fillblank", prompt: "I find playing chess interesting. → My hobby is ______________ (playing) chess.", accepted: ["playing"], correct: "playing", explanation: "find + V-ing + adj → My hobby is + V-ing." }
        ],
        level2: [
          { id: "g4l2a", type: "fillblank", prompt: "Rewrite: 'I find collecting coins fascinating.' → My hobby is ______________ (collecting) coins.", accepted: ["collecting"], correct: "collecting", explanation: "find + V-ing + adj → My hobby is + V-ing." }
        ],
        level3: [
          { id: "g4l3a", type: "fillblank", prompt: "Rewrite so it keeps the same meaning: 'I find taking photos enjoyable.' → ______________ (My hobby is taking photos).", accepted: ["my hobby is taking photos"], correct: "My hobby is taking photos", explanation: "find + V-ing + adj → My hobby is + V-ing." }
        ]
      }
    },
    {
      id: "g5", name: "(Bonus) spend + time/money + V-ing",
      usage: "Cấu trúc \"spend + khoảng thời gian/tiền bạc + V-ing\" nghĩa là \"dành thời gian/tiền bạc để làm gì\", theo sau luôn là V-ing chứ không phải \"to V\".",
      formulas: [
        "spend + time/money + V-ing",
        "Many teenagers spend hours sitting in front of computers."
      ],
      signals: ["spend + time/money + V-ing"],
      examples: [
        { en: "Many teenagers spend hours sitting in front of computers.", vi: "Nhiều thanh thiếu niên dành hàng giờ ngồi trước máy tính." },
        { en: "She spends a lot of money buying stamps for her collection.", vi: "Cô ấy tiêu rất nhiều tiền để mua tem cho bộ sưu tập của mình." }
      ],
      mistakes: [
        { wrong: "spend hours to sit in front of computers", right: "spend hours sitting in front of computers (\"spend\" theo sau bởi V-ing, không phải \"to V\")" }
      ],
      practice: {
        level1: [
          { id: "g5l1a", type: "fillblank", prompt: "He spends two hours ______________ (play) football every day.", accepted: ["playing"], correct: "playing", explanation: "spend + time + V-ing." }
        ],
        level2: [
          { id: "g5l2a", type: "fillblank", prompt: "Rewrite: 'She spends a lot of time (read) books.' → She spends a lot of time ______________ (reading) books.", accepted: ["reading"], correct: "reading", explanation: "spend + time + V-ing." }
        ],
        level3: [
          { id: "g5l3a", type: "fillblank", prompt: "Complete: 'They spend their weekends ______________ (garden) in the backyard.'", accepted: ["gardening"], correct: "gardening", explanation: "spend + time + V-ing." }
        ]
      }
    }
  ],

  // ---------------------------------------------------------
  // PART 3 — READING PRACTICE
  // ---------------------------------------------------------
  reading: {
    passage: "Our life would be hard without rest and recreation. And people have many different ideas of how to spend their free time. If you <mark data-w=\"enjoy doing a thing or activity in your free time\">enjoy doing a thing or activity in your free time</mark>, then you have a hobby. A hobby is an activity, interest, enthusiasm, or pastime that is <mark data-w=\"undertaken for pleasure or relaxation\">undertaken for pleasure or relaxation</mark>, done during one's own time. A person's hobbies <mark data-w=\"depend on his age, character and personal interests\">depend on his age, character and personal interests</mark>. An <mark data-w=\"interesting thing to one person can be boring to another\">interesting thing to one person can be boring to another</mark>. That's why some people prefer <mark data-w=\"reading, cooking, knitting, collecting, playing a musical instrument, photography\">reading, cooking, knitting, collecting, playing a musical instrument, photography</mark> or playing computer games while others prefer dancing, travelling, camping or sports.",
    vocabInContext: {
      "enjoy doing a thing or activity in your free time": "thích làm một việc hay hoạt động gì đó trong thời gian rảnh",
      "undertaken for pleasure or relaxation": "được thực hiện để giải trí hoặc thư giãn",
      "depend on his age, character and personal interests": "phụ thuộc vào tuổi tác, tính cách và sở thích cá nhân",
      "interesting thing to one person can be boring to another": "điều thú vị với người này có thể nhàm chán với người khác",
      "reading, cooking, knitting, collecting, playing a musical instrument, photography": "đọc sách, nấu ăn, đan len, sưu tầm, chơi nhạc cụ, nhiếp ảnh"
    },
    translation: "<b>SỞ THÍCH LÀ GÌ?</b><br><br>Cuộc sống của chúng ta sẽ khó khăn nếu không có nghỉ ngơi và giải trí. Và mọi người có nhiều ý tưởng khác nhau về cách dành thời gian rảnh của mình. Nếu bạn thích làm một việc hay hoạt động gì đó trong thời gian rảnh, thì đó chính là sở thích của bạn. Sở thích là một hoạt động, mối quan tâm, niềm đam mê, hay thú tiêu khiển được thực hiện để giải trí hoặc thư giãn, thực hiện trong thời gian riêng của mỗi người. Sở thích của một người phụ thuộc vào tuổi tác, tính cách và sở thích cá nhân của họ. Một điều thú vị với người này có thể nhàm chán với người khác. Đó là lý do tại sao một số người thích đọc sách, nấu ăn, đan len, sưu tầm, chơi nhạc cụ, nhiếp ảnh hoặc chơi trò chơi điện tử trong khi những người khác lại thích khiêu vũ, du lịch, cắm trại hoặc thể thao.",
    practice: [
      { id: "r1", type: "truefalse", prompt: "A hobby is something you do when you are busy with your work.", correct: "False", explanation: "Sai. Sở thích được thực hiện trong thời gian rảnh của riêng mỗi người, không phải khi bận việc." },
      { id: "r2", type: "truefalse", prompt: "Different people have different ways to spend their free time.", correct: "True", explanation: "Đúng. Bài đọc: \"people have many different ideas of how to spend their free time.\"" },
      { id: "r3", type: "truefalse", prompt: "Everyone thinks that the same activity is interesting.", correct: "False", explanation: "Sai. \"An interesting thing to one person can be boring to another.\"" },
      { id: "r4", type: "truefalse", prompt: "Age and personal interests can change the hobbies a person chooses.", correct: "True", explanation: "Đúng. \"A person's hobbies depend on his age, character and personal interests.\"" },
      { id: "r5", type: "mcq", prompt: "According to the text, why do people have a hobby?", options: { A: "For pleasure or relaxation.", B: "To make more money.", C: "To study for school.", D: "To change their character." }, correct: "A", explanation: "Bài đọc: \"undertaken for pleasure or relaxation.\"" },
      { id: "r6", type: "mcq", prompt: "Which of the following activities is NOT mentioned as a hobby in the text?", options: { A: "Gardening", B: "Cooking", C: "Travelling", D: "Camping" }, correct: "A", explanation: "Bài đọc không nhắc đến \"gardening\"." },
      { id: "r7", type: "fillblank", prompt: "Find the word in the passage that means 'niềm đam mê'.", accepted: ["enthusiasm"], correct: "enthusiasm", explanation: "\"an activity, interest, enthusiasm, or pastime\" — enthusiasm = niềm đam mê." },
      { id: "r8", type: "mcq", prompt: "What does a person's hobby depend on, according to the passage?", options: { A: "His age, character and personal interests.", B: "His income and job title.", C: "His friends' opinions.", D: "The weather and season." }, correct: "A", explanation: "Bài đọc: \"A person's hobbies depend on his age, character and personal interests.\"" },
      { id: "r9", type: "truefalse", prompt: "The passage says a hobby must always involve spending money.", correct: "False", explanation: "Sai. Bài đọc không đề cập gì đến việc sở thích phải tốn tiền." }
    ]
  },

  // ---------------------------------------------------------
  // PART 4 — TRANSLATION PRACTICE
  // ---------------------------------------------------------
  translation: [
    { id: "t1", en: "Our life would be hard without rest and recreation.", suggested: "Cuộc sống của chúng ta sẽ khó khăn nếu không có nghỉ ngơi và giải trí.", notes: "\"without + N\" (nếu không có) diễn tả điều kiện giả định." },
    { id: "t2", en: "A hobby is an activity that is undertaken for pleasure or relaxation.", suggested: "Sở thích là một hoạt động được thực hiện để giải trí hoặc thư giãn.", notes: "Câu bị động \"is undertaken\" (được thực hiện)." },
    { id: "t3", en: "A person's hobbies depend on his age, character and personal interests.", suggested: "Sở thích của một người phụ thuộc vào tuổi tác, tính cách và sở thích cá nhân.", notes: "\"depend on\" (phụ thuộc vào)." },
    { id: "t4", en: "An interesting thing to one person can be boring to another.", suggested: "Một điều thú vị với người này có thể nhàm chán với người khác.", notes: "So sánh đối lập giữa hai đối tượng khác nhau." },
    { id: "t5", en: "Some people prefer reading, cooking, knitting, or collecting.", suggested: "Một số người thích đọc sách, nấu ăn, đan len, hoặc sưu tầm.", notes: "\"prefer + V-ing\" (thích làm gì hơn)." }
  ],

  // ---------------------------------------------------------
  // PART 5 — SENTENCE TRANSFORMATION PRACTICE
  // ---------------------------------------------------------
  transformation: [
    {
      id: "tr1", name: "doesn't like + N ⇄ finds + O + adj",
      formula: "S + doesn't like + N + because...  →  S + finds + N + adj + because...",
      example: { before: "My best friend doesn't like mountain climbing because he is afraid of heights.", after: "My best friend finds mountain climbing dangerous because he is afraid of heights." },
      practice: [
        { id: "tr1p1", type: "fillblank", prompt: "She doesn't like cooking because it is time-consuming. → She ______________ (finds) cooking time-consuming.", accepted: ["finds"], correct: "finds", explanation: "doesn't like + N → finds + O + adj." },
        { id: "tr1p2", type: "fillblank", prompt: "Rewrite: 'He doesn't like swimming because it is tiring.' → He ______________ (finds) swimming tiring.", accepted: ["finds"], correct: "finds", explanation: "doesn't like + N → finds + O + adj." }
      ]
    },
    {
      id: "tr2", name: "Why don't we + V? ⇄ How about + V-ing?",
      formula: "Why don't we + V?  →  How about + V-ing?",
      example: { before: "Why don't we go swimming this afternoon?", after: "How about going swimming this afternoon?" },
      practice: [
        { id: "tr2p1", type: "fillblank", prompt: "Why don't we play badminton? → How about ______________ (playing) badminton?", accepted: ["playing"], correct: "playing", explanation: "Why don't we + V? → How about + V-ing?" },
        { id: "tr2p2", type: "fillblank", prompt: "Rewrite: 'Why don't we visit the museum?' → How about ______________ (visiting) the museum?", accepted: ["visiting"], correct: "visiting", explanation: "Why don't we + V? → How about + V-ing?" }
      ]
    },
    {
      id: "tr3", name: "be keen on + V-ing ⇄ enjoy + V-ing",
      formula: "S + is/are keen on + V-ing  →  S + enjoys/enjoy + V-ing",
      example: { before: "Alex is keen on taking photos. He takes photos every day.", after: "Alex enjoys taking photos every day." },
      practice: [
        { id: "tr3p1", type: "fillblank", prompt: "She is keen on painting. → She ______________ (enjoys) painting.", accepted: ["enjoys"], correct: "enjoys", explanation: "be keen on + V-ing → enjoy(s) + V-ing." },
        { id: "tr3p2", type: "fillblank", prompt: "Rewrite: 'They are keen on playing chess.' → They ______________ (enjoy) playing chess.", accepted: ["enjoy"], correct: "enjoy", explanation: "be keen on + V-ing → enjoy + V-ing." }
      ]
    },
    {
      id: "tr4", name: "find + O + adj ⇄ My hobby is + V-ing",
      formula: "I find + V-ing + adj  →  My hobby is + V-ing",
      example: { before: "I find doing gardening interesting.", after: "My hobby is doing gardening." },
      practice: [
        { id: "tr4p1", type: "fillblank", prompt: "I find playing chess interesting. → My hobby is ______________ (playing) chess.", accepted: ["playing"], correct: "playing", explanation: "find + V-ing + adj → My hobby is + V-ing." },
        { id: "tr4p2", type: "fillblank", prompt: "Rewrite: 'I find collecting coins fascinating.' → My hobby is ______________ (collecting) coins.", accepted: ["collecting"], correct: "collecting", explanation: "find + V-ing + adj → My hobby is + V-ing." }
      ]
    }
  ],

  // ---------------------------------------------------------
  // PART 6 — QUICK REVIEW (mini test, all skills)
  // ---------------------------------------------------------
  quickReview: [
    { id: "q1", cat: "Vocabulary", type: "mcq", prompt: "'Fragile' means:", options: { A: "dễ vỡ", B: "chắc chắn", C: "nặng nề", D: "bền bỉ" }, correct: "A", explanation: "fragile (adj) = dễ vỡ." },
    { id: "q2", cat: "Vocabulary", type: "mcq", prompt: "'Collector' means:", options: { A: "người sưu tầm", B: "nhạc sĩ", C: "họa sĩ", D: "hướng dẫn viên" }, correct: "A", explanation: "collector (n) = người sưu tầm." },
    { id: "q3", cat: "Vocabulary", type: "fillblank", prompt: "The teacher gave the students ______________ (sự cho phép) to go to the library.", accepted: ["permission"], correct: "permission", explanation: "permission (n) = sự cho phép." },
    { id: "q4", cat: "Grammar", type: "mcq", prompt: "My best friend doesn't like mountain climbing. → My best friend ______ mountain climbing dangerous.", options: { A: "finds", B: "makes", C: "takes", D: "gets" }, correct: "A", explanation: "doesn't like + N → finds + O + adj." },
    { id: "q5", cat: "Grammar", type: "mcq", prompt: "Why don't we go swimming? → How about ______ swimming?", options: { A: "go", B: "going", C: "to go", D: "went" }, correct: "B", explanation: "How about luôn theo sau bởi V-ing." },
    { id: "q6", cat: "Grammar", type: "fillblank", prompt: "Alex is keen on taking photos. → Alex ______________ (enjoys) taking photos.", accepted: ["enjoys"], correct: "enjoys", explanation: "be keen on + V-ing → enjoy(s) + V-ing." },
    { id: "q7", cat: "Grammar", type: "fillblank", prompt: "I find doing gardening interesting. → My hobby is ______________ (doing) gardening.", accepted: ["doing"], correct: "doing", explanation: "find + V-ing + adj → My hobby is + V-ing." },
    { id: "q8", cat: "Reading", type: "truefalse", prompt: "A hobby is something you do when you are busy with your work.", correct: "False", explanation: "Sai theo bài đọc — sở thích được thực hiện trong thời gian rảnh." },
    { id: "q9", cat: "Reading", type: "truefalse", prompt: "Age and personal interests can change the hobbies a person chooses.", correct: "True", explanation: "Đúng theo bài đọc." },
    { id: "q10", cat: "Reading", type: "mcq", prompt: "According to the text, why do people have a hobby?", options: { A: "For pleasure or relaxation.", B: "To make more money.", C: "To study for school.", D: "To change their character." }, correct: "A", explanation: "Bài đọc nêu rõ sở thích được thực hiện để giải trí hoặc thư giãn." },
    { id: "q11", cat: "Writing", type: "fillblank", prompt: "My sister loves arranging flowers because she thinks they are ______________ (COLOR).", accepted: ["colorful", "colourful"], correct: "colorful", explanation: "color (n) → colorful (adj, +ful)." },
    { id: "q12", cat: "Writing", type: "fillblank", prompt: "Doing gardening is an ______________ (INTEREST) way to reduce stress.", accepted: ["interesting"], correct: "interesting", explanation: "interest (n/v) → interesting (adj, +ing)." },
    { id: "q13", cat: "Writing", type: "fillblank", prompt: "The new school music club has many talented ______________ (MUSIC).", accepted: ["musicians"], correct: "musicians", explanation: "music (n) → musician (n) → musicians (số nhiều)." },
    { id: "q14", cat: "Vocabulary", type: "mcq", prompt: "Which word means 'làm gốm'?", options: { A: "pottery", B: "knitting", C: "photography", D: "gardening" }, correct: "A", explanation: "pottery (n) = làm gốm." }
  ]
};
