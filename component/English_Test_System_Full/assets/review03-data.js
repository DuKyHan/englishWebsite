const REVIEW = {
  id: "test03",
  testFile: "test03.html",
  grade: "Grade 8 — Global Success",
  unit: "Unit 5: Our customs and traditions",
  title: "Knowledge Review — Unit 5, Practice Test 1",

  // ---------------------------------------------------------
  // PART 1 — VOCABULARY REVIEW
  // ---------------------------------------------------------
  vocabulary: [
    { word: "pagoda", pos: "n", ipa: "/pəˈɡoʊdə/", meaning: "ngôi chùa", example: "Many people visit the village pagoda at Tet.", exampleVi: "Nhiều người đi chùa làng vào dịp Tết." },
    { word: "custom", pos: "n", ipa: "/ˈkʌstəm/", meaning: "phong tục, tập quán", example: "It is a custom for Vietnamese people to take off their shoes before entering a house.", exampleVi: "Đó là phong tục của người Việt Nam là cởi giày trước khi vào nhà." },
    { word: "tradition", pos: "n", ipa: "/trəˈdɪʃn/", meaning: "truyền thống", example: "A tradition is a special belief or custom passed down from generation to generation.", exampleVi: "Truyền thống là một niềm tin hay phong tục đặc biệt được truyền lại qua nhiều thế hệ." },
    { word: "pray", pos: "v", ipa: "/preɪ/", meaning: "cầu nguyện", example: "People bow to Buddha and pray for a lucky new year.", exampleVi: "Mọi người cúi lạy Phật và cầu nguyện cho một năm mới may mắn." },
    { word: "address (sb)", pos: "v", ipa: "/əˈdres/", meaning: "xưng hô, gọi (ai đó)", example: "You shouldn't use only the first name to address people older than you.", exampleVi: "Bạn không nên chỉ dùng tên riêng để xưng hô với người lớn tuổi hơn." },
    { word: "pass down", pos: "phr.v", ipa: "/pæs daʊn/", meaning: "truyền lại (qua các thế hệ)", example: "A custom is something special that is passed down through the generations.", exampleVi: "Phong tục là một điều đặc biệt được truyền lại qua các thế hệ." },
    { word: "informative", pos: "adj", ipa: "/ɪnˈfɔːrmətɪv/", meaning: "giàu thông tin, bổ ích", example: "This book gives an informative review of our customs.", exampleVi: "Cuốn sách này cho một cái nhìn tổng quan giàu thông tin về phong tục của chúng ta." },
    { word: "gift-giving", pos: "n", ipa: "/ɡɪft ˈɡɪvɪŋ/", meaning: "việc tặng quà", example: "Gift-giving is important in Viet Nam.", exampleVi: "Việc tặng quà rất quan trọng ở Việt Nam." },
    { word: "bribery", pos: "n", ipa: "/ˈbraɪbəri/", meaning: "sự hối lộ", example: "There is a clear cut between gift-giving and bribery.", exampleVi: "Có một ranh giới rõ ràng giữa việc tặng quà và hối lộ." },
    { word: "gratitude", pos: "n", ipa: "/ˈɡrætɪtuːd/", meaning: "lòng biết ơn", example: "People exchange gifts to express respect, love, appreciation, or gratitude.", exampleVi: "Mọi người trao quà để thể hiện sự tôn trọng, tình yêu thương, sự trân trọng hoặc lòng biết ơn." },
    { word: "interpersonal", pos: "adj", ipa: "/ˌɪntərˈpɜːrsənl/", meaning: "giữa các cá nhân (quan hệ)", example: "Gift-giving is important because of the significance of interpersonal relationships.", exampleVi: "Việc tặng quà rất quan trọng vì ý nghĩa của các mối quan hệ giữa người với người." },
    { word: "profuse", pos: "adj", ipa: "/prəˈfjuːs/", meaning: "dạt dào, tràn đầy", example: "Profuse thanks are always appropriate when receiving a gift.", exampleVi: "Lời cảm ơn nồng nhiệt luôn luôn là phù hợp khi nhận quà." },
    { word: "supplier", pos: "n", ipa: "/səˈplaɪər/", meaning: "nhà cung cấp", example: "People often buy sausages from famous suppliers.", exampleVi: "Người ta thường mua giò từ những nhà cung cấp nổi tiếng." },
    { word: "ancestor", pos: "n", ipa: "/ˈænsestər/", meaning: "tổ tiên", example: "Sausages and sticky rice are foods used to worship the ancestors.", exampleVi: "Giò và xôi là những món ăn dùng để thờ cúng tổ tiên." },
    { word: "worship", pos: "v", ipa: "/ˈwɜːrʃɪp/", meaning: "thờ cúng", example: "These foods cannot be missed to worship the ancestors.", exampleVi: "Những món ăn này không thể thiếu để thờ cúng tổ tiên." },
    { word: "ceremony", pos: "n", ipa: "/ˈserəməni/", meaning: "buổi lễ, nghi lễ", example: "The wedding ceremony was held in an old church.", exampleVi: "Lễ cưới được tổ chức trong một nhà thờ cổ." },
    { word: "graduation", pos: "n", ipa: "/ˌɡrædʒuˈeɪʃn/", meaning: "sự tốt nghiệp", example: "Parents took many photos during the graduation ceremony.", exampleVi: "Phụ huynh đã chụp rất nhiều ảnh trong lễ tốt nghiệp." },
    { word: "celebratory", pos: "adj", ipa: "/ˈselɪbrətɔːri/", meaning: "mang tính ăn mừng, lễ hội", example: "Tet is the biggest and most exciting celebratory festival in Vietnam.", exampleVi: "Tết là lễ hội mang tính ăn mừng lớn nhất và thú vị nhất ở Việt Nam." }
  ],

  vocabPractice: {
    mcq: [
      { id: "vp1", prompt: "Choose the word that means 'lòng biết ơn':", options: { A: "gratitude", B: "bribery", C: "ceremony", D: "supplier" }, correct: "A", explanation: "<b>gratitude</b> (n) = lòng biết ơn." },
      { id: "vp2", prompt: "Choose the word that means 'tổ tiên':", options: { A: "ancestor", B: "worship", C: "custom", D: "tradition" }, correct: "A", explanation: "<b>ancestor</b> (n) = tổ tiên. \"worship\" là động từ (thờ cúng)." },
      { id: "vp3", prompt: "Choose the best word: \"There is a clear cut between gift-giving and ______.\"", options: { A: "gratitude", B: "bribery", C: "ceremony", D: "pagoda" }, correct: "B", explanation: "\"gift-giving and <b>bribery</b>\" (tặng quà và hối lộ) — hai khái niệm cần phân biệt rõ." },
      { id: "vp4", prompt: "Choose the word that means 'nhà cung cấp':", options: { A: "customer", B: "helper", C: "supplier", D: "guest" }, correct: "C", explanation: "<b>supplier</b> (n) = nhà cung cấp." },
      { id: "vp5", prompt: "\"A tradition is a special belief or custom ______ down from generation to generation.\"", options: { A: "passed", B: "given", C: "put", D: "brought" }, correct: "A", explanation: "\"be <b>passed</b> down\" (được truyền lại) là cụm cố định." },
      { id: "vp6", prompt: "Choose the word that means 'dạt dào, tràn đầy' (thường đi với \"thanks\"):", options: { A: "informative", B: "profuse", C: "interpersonal", D: "celebratory" }, correct: "B", explanation: "<b>profuse</b> (adj) = dạt dào, tràn đầy — \"profuse thanks\" = lời cảm ơn nồng nhiệt." }
    ],
    fillblank: [
      { id: "vf1", prompt: "People bow to Buddha and ______________ (cầu nguyện) for a lucky new year.", accepted: ["pray"], correct: "pray", explanation: "<b>pray</b> (v) = cầu nguyện." },
      { id: "vf2", prompt: "You shouldn't use only the first name to ______________ (xưng hô với) people older than you.", accepted: ["address"], correct: "address", explanation: "<b>address</b> (v) = xưng hô, gọi ai đó." },
      { id: "vf3", prompt: "Sausages and sticky rice are used to ______________ (thờ cúng) the ancestors.", accepted: ["worship"], correct: "worship", explanation: "<b>worship</b> (v) = thờ cúng." },
      { id: "vf4", prompt: "It is common in Viet Nam to exchange small gifts to express respect, love, appreciation, or ______________ (lòng biết ơn).", accepted: ["gratitude"], correct: "gratitude", explanation: "<b>gratitude</b> (n) = lòng biết ơn." },
      { id: "vf5", prompt: "Sausages are difficult to make, so people often buy them from famous ______________ (nhà cung cấp).", accepted: ["suppliers"], correct: "suppliers", explanation: "<b>suppliers</b> (n, số nhiều) = những nhà cung cấp." },
      { id: "vf6", prompt: "Regardless of when it is opened, ______________ (dạt dào) thanks are always appropriate.", accepted: ["profuse"], correct: "profuse", explanation: "<b>profuse</b> (adj) = dạt dào, tràn đầy." }
    ],
    matching: {
      left: ["pagoda", "gratitude", "bribery", "ancestor", "worship", "supplier"],
      right: ["ngôi chùa", "lòng biết ơn", "sự hối lộ", "tổ tiên", "thờ cúng", "nhà cung cấp"],
      correctMap: [0, 1, 2, 3, 4, 5]
    },
    chooseWord: [
      { id: "cw1", prompt: "Nam: 'Why do you visit the village pagoda every Tet?' Lan: 'To bow to Buddha and ______ for good luck.'", options: { A: "pray", B: "prayer", C: "prayed", D: "praying" }, correct: "A", explanation: "Sau \"to\" (mục đích, to-infinitive) cần động từ nguyên mẫu → <b>pray</b>." },
      { id: "cw2", prompt: "\"This book gives an ______ review of our customs.\" (thông tin bổ ích)", options: { A: "inform", B: "informative", C: "information", D: "informatively" }, correct: "B", explanation: "Cần tính từ đứng trước danh từ \"review\" → <b>informative</b>." },
      { id: "cw3", prompt: "\"Gifts that symbolize cutting should be avoided because they mean the cutting of the ______.\"", options: { A: "relation", B: "relative", C: "relationship", D: "related" }, correct: "C", explanation: "Cần danh từ chỉ \"mối quan hệ\" → <b>relationship</b>." }
    ],
    wordMeaning: [
      { id: "wm1", prompt: "What does 'ceremony' mean?", options: { A: "buổi lễ, nghi lễ", B: "cầu thang", C: "gia súc", D: "cao nguyên" }, correct: "A", explanation: "ceremony (n) = buổi lễ, nghi lễ trang trọng." },
      { id: "wm2", prompt: "What does 'interpersonal' mean?", options: { A: "quốc tế", B: "giữa các cá nhân", C: "cá nhân hoá", D: "liên bang" }, correct: "B", explanation: "interpersonal (adj) = giữa các cá nhân, liên quan đến quan hệ giữa người với người." },
      { id: "wm3", prompt: "What does 'pass down' mean?", options: { A: "vượt qua", B: "hạ xuống", C: "truyền lại (qua thế hệ)", D: "bỏ qua" }, correct: "C", explanation: "pass down = truyền lại (một phong tục, tài sản...) qua các thế hệ." }
    ],
    wordForm: [
      { id: "wf1", prompt: "Tet is the biggest and most exciting (CELEBRATE) ______________ festival in Vietnam.", accepted: ["celebratory"], correct: "celebratory", explanation: "Cần tính từ đứng trước \"festival\" → celebrate (v) → <b>celebratory</b> (adj)." },
      { id: "wf2", prompt: "The (PREPARE) ______________ of the heavy Chung cakes takes a lot of time.", accepted: ["preparation"], correct: "preparation", explanation: "Cần danh từ số ít làm chủ ngữ → prepare (v) → <b>preparation</b> (n)." },
      { id: "wf3", prompt: "My sister is a very (MANNER) ______________ girl; she always respects local customs.", accepted: ["mannerly"], correct: "mannerly", explanation: "Cần tính từ sau \"very\" → manner (n) → <b>mannerly</b> (adj)." }
    ]
  },

  // ---------------------------------------------------------
  // PART 2 — GRAMMAR REVIEW & PRACTICE
  // ---------------------------------------------------------
  grammar: [
    {
      id: "g1", name: "Mạo từ: KHÔNG dùng mạo từ vs. dùng \"the\" (danh từ trừu tượng/chung chung vs. cụ thể)",
      usage: "Khi một danh từ mang nghĩa <b>chung chung, trừu tượng</b> (không chỉ một đối tượng cụ thể nào), ta <b>KHÔNG dùng mạo từ</b>. Khi danh từ đó đã được xác định rõ là <b>đối tượng cụ thể nào</b> (cả người nói và người nghe đều biết), ta dùng <b>the</b>.",
      formulas: [
        "Danh từ trừu tượng/chung chung → Ø (không mạo từ): There are billions of stars in Ø space.",
        "Danh từ đã được xác định cụ thể → the: ...but the space wasn't big enough.",
        "Cụm cố định chỉ thời gian trong ngày: by day / by night (không mạo từ)."
      ],
      signals: ["in space (chung chung)", "the space (cụ thể)", "by night", "by day"],
      examples: [
        { en: "There are billions of stars in space.", vi: "Có hàng tỉ ngôi sao trong không gian (nói chung)." },
        { en: "He tried to park his car but the space wasn't big enough.", vi: "Anh ấy cố đỗ xe nhưng chỗ đó không đủ rộng (chỗ cụ thể)." }
      ],
      mistakes: [
        { wrong: "There are billions of stars in the space.", right: "There are billions of stars in space." },
        { wrong: "Paris is splendid by the night.", right: "Paris is splendid by night." }
      ],
      practice: {
        level1: [
          { id: "g1l1a", type: "mcq", prompt: "There are billions of stars in ______ space.", options: { A: "a", B: "the", C: "x (no article)", D: "an" }, correct: "C", explanation: "\"space\" mang nghĩa chung, trừu tượng → không mạo từ." },
          { id: "g1l1b", type: "mcq", prompt: "Paris is absolutely splendid by ______ night.", options: { A: "the", B: "Ø (no article)", C: "an", D: "a" }, correct: "B", explanation: "\"by night\" là cụm cố định, không mạo từ." }
        ],
        level2: [
          { id: "g1l2a", type: "mcq", prompt: "He tried to park his car but ______ space wasn't big enough.", options: { A: "a", B: "the", C: "an", D: "x (no article)" }, correct: "B", explanation: "\"space\" ở đây là chỗ đỗ xe cụ thể mà anh ấy đã cố đỗ vào → dùng \"the\"." },
          { id: "g1l2b", type: "fillblank", prompt: "Rewrite so it keeps the same meaning: 'I love looking up at the sky at night in general.' → I love looking up at ______________ (không mạo từ) at night.", accepted: ["the sky"], correct: "the sky", explanation: "\"the sky\" luôn dùng \"the\" dù mang nghĩa chung (ngoại lệ với 'sky', 'sun', 'moon' — chỉ có một cái duy nhất)." }
        ],
        level3: [
          { id: "g1l3a", type: "fillblank", prompt: "Fill in the blank with the correct article (or leave it blank by typing 'x'): \"Traveling through ______________ (x) space has always fascinated scientists.\"", accepted: ["x", "no article", "ø"], correct: "x (no article)", explanation: "\"space\" (không gian vũ trụ) mang nghĩa trừu tượng, chung chung → không mạo từ." }
        ]
      }
    },
    {
      id: "g2", name: "Cấu tạo từ (Word Formation): danh từ / tính từ / trạng từ",
      usage: "Nhận biết và tạo ra đúng dạng từ loại (danh từ, tính từ, trạng từ...) từ một từ gốc bằng cách thêm tiền tố/hậu tố, dựa vào vị trí và chức năng ngữ pháp của từ đó trong câu.",
      formulas: [
        "V + -tion/-ation → N: prepare → preparation",
        "N/V + -al/-ory/-ful → adj: tradition → traditional; celebrate → celebratory; beauty → beautiful",
        "adj + -ly → adv: normal → normally; manner → mannerly (adj, không phải adv trong trường hợp này)",
        "N + line (ghép) → N: dead + line → deadline"
      ],
      signals: ["celebrate → celebratory", "tradition → traditional", "prepare → preparation", "normal → normally", "manner → mannerly"],
      examples: [
        { en: "Tet is the most exciting celebratory festival in Vietnam.", vi: "Tết là lễ hội mang tính ăn mừng thú vị nhất ở Việt Nam." },
        { en: "The preparation of Chung cakes takes a lot of time.", vi: "Việc chuẩn bị bánh chưng tốn rất nhiều thời gian." }
      ],
      mistakes: [
        { wrong: "Sticky rice is normal served after being cooked.", right: "Sticky rice is normally served after being cooked." },
        { wrong: "The prepare of Chung cakes takes a lot of time.", right: "The preparation of Chung cakes takes a lot of time." }
      ],
      practice: {
        level1: [
          { id: "g2l1a", type: "fillblank", prompt: "To prepare for Tet, people make many (TRADITION) ______________ and tasty foods.", accepted: ["traditional"], correct: "traditional", explanation: "Cần tính từ đứng trước \"foods\" → traditional." },
          { id: "g2l1b", type: "fillblank", prompt: "Sticky rice and spring rolls are (NORMAL) ______________ served immediately after being cooked.", accepted: ["normally"], correct: "normally", explanation: "Cần trạng từ bổ nghĩa cho động từ bị động → normally." }
        ],
        level2: [
          { id: "g2l2a", type: "fillblank", prompt: "It is obligatory for us to finish all the tasks before Thursday to meet the (LINE) ______________.", accepted: ["deadline"], correct: "deadline", explanation: "\"meet the deadline\" (kịp hạn chót) là cụm cố định." },
          { id: "g2l2b", type: "fillblank", prompt: "My sister is a very (MANNER) ______________ girl; she always respects local customs.", accepted: ["mannerly"], correct: "mannerly", explanation: "manner (n) → mannerly (adj): lễ phép." }
        ],
        level3: [
          { id: "g2l3a", type: "fillblank", prompt: "Tet is the biggest and most exciting (CELEBRATE) ______________ festival in Vietnam.", accepted: ["celebratory"], correct: "celebratory", explanation: "celebrate (v) → celebratory (adj): mang tính ăn mừng." }
        ]
      }
    },
    {
      id: "g3", name: "shouldn't ⇄ had better not (lời khuyên không nên làm gì)",
      usage: "\"shouldn't + V\" và \"had better not + V\" đều dùng để khuyên ai đó KHÔNG nên làm gì, đặc biệt khi có hậu quả nếu không nghe theo. \"had better\" mang sắc thái nhấn mạnh/cảnh báo hơn \"should\".",
      formulas: [
        "Khẳng định: S + should/had better + V.",
        "Phủ định: S + shouldn't + V  ⇄  S + had better not + V.",
        "Câu hỏi: Should + S + V...?"
      ],
      signals: ["shouldn't", "had better (not)", "it's impolite/rude to..."],
      examples: [
        { en: "You shouldn't point at others while talking because it is impolite.", vi: "Bạn không nên chỉ tay vào người khác khi nói chuyện vì điều đó bất lịch sự." },
        { en: "You had better not point at others while talking because it is impolite.", vi: "Bạn tốt hơn hết là không nên chỉ tay vào người khác khi nói chuyện vì điều đó bất lịch sự." }
      ],
      mistakes: [
        { wrong: "You had better to not point at others.", right: "You had better not point at others." },
        { wrong: "You had not better point at others.", right: "You had better not point at others." }
      ],
      practice: {
        level1: [
          { id: "g3l1a", type: "mcq", prompt: "You ______ talk loudly in public because it is considered impolite.", options: { A: "don't have to", B: "had better", C: "shouldn't", D: "ought to" }, correct: "C", explanation: "Cần dạng phủ định mang nghĩa \"không nên\" → shouldn't." },
          { id: "g3l1b", type: "fillblank", prompt: "Rewrite: 'You shouldn't dump rubbish here.' → You ______________ (had better + not) dump rubbish here.", accepted: ["had better not"], correct: "had better not", explanation: "shouldn't ⇄ had better not." }
        ],
        level2: [
          { id: "g3l2a", type: "fillblank", prompt: "You shouldn't point at others while talking because it is impolite. → You had better ______________ point at others while talking because it is impolite.", accepted: ["not"], correct: "not", explanation: "Cấu trúc \"had better not + V\" — \"not\" đứng ngay sau \"had better\"." }
        ],
        level3: [
          { id: "g3l3a", type: "fillblank", prompt: "Rewrite so it keeps the same meaning: 'It's a bad idea to wrap a gift in black paper.' → You ______________ (had better) wrap a gift in black paper.", accepted: ["had better not"], correct: "had better not", explanation: "Ý khuyên không nên làm gì → had better not + V." }
        ]
      }
    },
    {
      id: "g4", name: "must ⇄ It is obligatory for sb to V (diễn tả sự bắt buộc)",
      usage: "\"must + V\" và \"It is obligatory for + O + to V\" đều diễn tả một điều BẮT BUỘC phải làm. \"It is obligatory for sb to V\" là cách diễn đạt trang trọng/văn viết hơn.",
      formulas: [
        "S + must + V (bắt buộc, chủ quan/quy tắc)",
        "It is obligatory for + O + to + V"
      ],
      signals: ["must", "It is obligatory for... to...", "have to"],
      examples: [
        { en: "We must finish all the homework by Thursday to meet the deadline.", vi: "Chúng tôi phải hoàn thành hết bài tập trước thứ Năm để kịp hạn chót." },
        { en: "It is obligatory for us to finish all the homework by Thursday to meet the deadline.", vi: "Việc chúng tôi hoàn thành hết bài tập trước thứ Năm để kịp hạn chót là bắt buộc." }
      ],
      mistakes: [
        { wrong: "It is obligatory us to finish the homework.", right: "It is obligatory for us to finish the homework." },
        { wrong: "It is obligatory for us finish the homework.", right: "It is obligatory for us to finish the homework." }
      ],
      practice: {
        level1: [
          { id: "g4l1a", type: "fillblank", prompt: "We must finish all the homework by Thursday. → It is obligatory ______________ us to finish all the homework by Thursday.", accepted: ["for"], correct: "for", explanation: "Cấu trúc: It is obligatory <b>for</b> + O + to V." }
        ],
        level2: [
          { id: "g4l2a", type: "fillblank", prompt: "Rewrite: 'Students must wear the school uniform on Mondays.' → It is obligatory for students ______________ (wear) the school uniform on Mondays.", accepted: ["to wear"], correct: "to wear", explanation: "Sau \"for + O\" cần \"to + V nguyên mẫu\"." }
        ],
        level3: [
          { id: "g4l3a", type: "fillblank", prompt: "Rewrite so it keeps the same meaning: 'Every visitor must take off their shoes at the temple entrance.' → It is obligatory ______________ (for every visitor to take off their shoes at the temple entrance).", accepted: ["for every visitor to take off their shoes at the temple entrance"], correct: "for every visitor to take off their shoes at the temple entrance", explanation: "must + V → It is obligatory for + O + to V." }
        ]
      }
    },
    {
      id: "g5", name: "Bị động ⇄ Chủ động (Passive ⇄ Active Voice)",
      usage: "Câu bị động (Passive) nhấn mạnh vào đối tượng chịu tác động, thường dùng khi không cần/không biết rõ ai thực hiện hành động. Có thể chuyển sang câu chủ động (Active) bằng cách thêm chủ ngữ chung chung như \"People\" khi tác nhân không được nêu rõ.",
      formulas: [
        "Bị động: S (vật) + am/is/are + V3/-ed + (by + O)",
        "Chủ động: People/They + V (nguyên mẫu/số nhiều) + O",
        "New year wishes are exchanged during Tet. → People exchange new year wishes during Tet."
      ],
      signals: ["are/is + V3/-ed", "by + O (có thể lược bỏ)"],
      examples: [
        { en: "New year wishes are exchanged during Tet holiday.", vi: "Lời chúc năm mới được trao đổi trong dịp Tết." },
        { en: "People exchange new year wishes during Tet holiday.", vi: "Mọi người trao đổi lời chúc năm mới trong dịp Tết." }
      ],
      mistakes: [
        { wrong: "People exchanged new year wishes are during Tet.", right: "People exchange new year wishes during Tet." }
      ],
      practice: {
        level1: [
          { id: "g5l1a", type: "fillblank", prompt: "New year wishes are exchanged during Tet holiday. → People ______________ (exchange) new year wishes during Tet holiday.", accepted: ["exchange"], correct: "exchange", explanation: "Bị động → chủ động: are exchanged → exchange." }
        ],
        level2: [
          { id: "g5l2a", type: "fillblank", prompt: "Rewrite: 'Chung cakes are made from sticky rice and pork.' → People ______________ (make) Chung cakes from sticky rice and pork.", accepted: ["make"], correct: "make", explanation: "are made → make (chủ động, chủ ngữ chung \"People\")." }
        ],
        level3: [
          { id: "g5l3a", type: "fillblank", prompt: "Rewrite so it keeps the same meaning: 'The ancestor altar is decorated with flowers and fruit before Tet.' → People ______________ (decorate) the ancestor altar with flowers and fruit before Tet.", accepted: ["decorate"], correct: "decorate", explanation: "is decorated → decorate (chủ động)." }
        ]
      }
    }
  ],

  // ---------------------------------------------------------
  // PART 3 — READING PRACTICE
  // ---------------------------------------------------------
  reading: {
    passage: "Gift-giving is important in Viet Nam because of the significance of <mark data-w=\"interpersonal\">interpersonal</mark> relationships in Vietnamese culture.<br><br>First and foremost, do not encourage <mark data-w=\"corruption\">corruption</mark>. There is a clear cut between gift-giving and <mark data-w=\"bribery\">bribery</mark>. Nevertheless, it is common in Viet Nam to exchange small gifts on certain occasions such as anniversaries, Tet holidays... to express respect, love, appreciation, or <mark data-w=\"gratitude\">gratitude</mark>. Gift-giving customs depend on the context. If it is a private gift for one Vietnamese partner, you should give the gift at a private occasion. If you have a gift for the whole office or company, you should give it after the business meeting with all the office employees.<br><br>Do not wrap a gift in black paper because this color is unlucky and associated with funerals in Viet Nam. Gifts that symbolize cutting, such as scissors, knives, and other sharp objects, should be avoided because they mean the cutting of the relationship.<br><br>Vietnamese people may or may not open these gifts when they are received; leave the option to them. You will also receive gifts and should <mark data-w=\"defer\">defer</mark> to your host as to whether you should open them when receiving or not. Regardless of when it is opened or what it is, <mark data-w=\"profuse\">profuse</mark> thanks are always appropriate.",
    vocabInContext: {
      interpersonal: "giữa các cá nhân",
      corruption: "sự tham nhũng",
      bribery: "sự hối lộ",
      gratitude: "lòng biết ơn",
      defer: "nghe theo, chiều theo (ý ai)",
      profuse: "dạt dào, tràn đầy"
    },
    translation: "Việc tặng quà rất quan trọng ở Việt Nam vì ý nghĩa của các mối quan hệ giữa người với người trong văn hoá Việt Nam.<br><br>Trước hết, không được khuyến khích tham nhũng. Có một ranh giới rõ ràng giữa việc tặng quà và hối lộ. Tuy nhiên, việc trao đổi những món quà nhỏ trong một số dịp như kỷ niệm, ngày Tết... để thể hiện sự tôn trọng, tình yêu thương, sự trân trọng hoặc lòng biết ơn là điều phổ biến ở Việt Nam. Phong tục tặng quà phụ thuộc vào hoàn cảnh. Nếu là quà riêng tư cho một đối tác người Việt, bạn nên tặng quà vào một dịp riêng tư. Nếu bạn có quà cho cả văn phòng hoặc công ty, bạn nên tặng sau cuộc họp với tất cả nhân viên văn phòng.<br><br>Không nên gói quà bằng giấy màu đen vì màu này không may mắn và gắn liền với đám tang ở Việt Nam. Những món quà mang tính biểu tượng cắt, chia lìa như kéo, dao và các vật sắc nhọn khác nên tránh vì chúng có nghĩa là cắt đứt mối quan hệ.<br><br>Người Việt có thể mở hoặc không mở những món quà này ngay khi nhận; hãy để họ tự quyết định. Bạn cũng sẽ nhận được quà và nên nghe theo ý chủ nhà về việc có nên mở quà ngay khi nhận hay không. Dù quà được mở lúc nào hay là gì, lời cảm ơn nồng nhiệt luôn luôn là phù hợp.",
    practice: [
      { id: "r1", type: "truefalse", prompt: "Giving small gifts on special occasions is a traditional way to show respect or gratitude in Vietnam.", correct: "True", explanation: "Bài đọc: 'it is common in Viet Nam to exchange small gifts on certain occasions... to express respect, love, appreciation, or gratitude.'" },
      { id: "r2", type: "truefalse", prompt: "Company gifts should be presented to the employees before the business meeting begins.", correct: "False", explanation: "Bài đọc: quà cho cả công ty nên được tặng SAU cuộc họp, không phải trước." },
      { id: "r3", type: "truefalse", prompt: "Wrapping a gift in black paper is considered bad luck in Vietnamese culture.", correct: "True", explanation: "Bài đọc: 'this color is unlucky and associated with funerals'." },
      { id: "r4", type: "truefalse", prompt: "Vietnamese people always open their gifts immediately right after receiving them.", correct: "False", explanation: "Bài đọc: 'may or may not open these gifts when they are received' — không phải lúc nào cũng mở ngay." },
      { id: "r5", type: "mcq", prompt: "What is the main idea of the passage?", options: { A: "Cultural guidelines and customs regarding gift-giving in Vietnam.", B: "The negative impacts of bribery and corruption in Vietnamese business.", C: "A list of items that people should buy when visiting a Vietnamese family.", D: "The history of interpersonal relationships and traditional festivals in Vietnam." }, correct: "A", explanation: "Toàn bài xoay quanh những lưu ý/quy tắc văn hoá khi tặng quà ở Việt Nam." },
      { id: "r6", type: "mcq", prompt: "Which of the following is NOT true according to the passage?", options: { A: "You only need to say thank you if you really like the gift you are given.", B: "Sharp objects like knives or scissors should not be chosen as gifts.", C: "Gift-giving is an essential part of maintaining personal relationships in Vietnam.", D: "You must follow your host's choice on whether to open a received gift immediately." }, correct: "A", explanation: "Bài đọc nói \"profuse thanks are always appropriate\" — LUÔN nên cảm ơn, không chỉ khi thích quà." },
      { id: "r7", type: "mcq", prompt: "According to the passage, why should you avoid giving scissors or knives as gifts?", options: { A: "Because they are too expensive.", B: "Because they symbolize the cutting of the relationship.", C: "Because they are associated with corruption.", D: "Because they are difficult to wrap nicely." }, correct: "B", explanation: "Bài đọc: 'Gifts that symbolize cutting... should be avoided because they mean the cutting of the relationship.'" },
      { id: "r8", type: "fillblank", prompt: "Find the word in the passage that means 'nghe theo, chiều theo ý ai đó' (v).", accepted: ["defer"], correct: "defer", explanation: "'defer to your host' = nghe theo/chiều theo ý của chủ nhà." },
      { id: "r9", type: "mcq", prompt: "What should you do according to the passage if you have a gift for the whole office?", options: { A: "Give it before the meeting starts.", B: "Give it secretly to the manager only.", C: "Give it after the business meeting with all employees.", D: "Mail it to the office in advance." }, correct: "C", explanation: "Bài đọc: 'If you have a gift for the whole office or company, you should give it after the business meeting with all the office employees.'" }
    ]
  },

  // ---------------------------------------------------------
  // PART 4 — TRANSLATION PRACTICE
  // ---------------------------------------------------------
  translation: [
    { id: "t1", en: "It is a custom for Vietnamese people to take off their shoes before entering a house.", suggested: "Đó là phong tục của người Việt Nam là cởi giày trước khi vào nhà.", notes: "Từ vựng: <i>custom</i> (phong tục). Cấu trúc: 'It is a custom for sb to V' dịch là 'đó là phong tục của ai để làm gì'." },
    { id: "t2", en: "Do not wrap a gift in black paper because this color is unlucky in Vietnamese culture.", suggested: "Đừng gói quà bằng giấy màu đen vì màu này không may mắn trong văn hoá Việt Nam.", notes: "Từ vựng: <i>wrap</i> (gói), <i>unlucky</i> (không may mắn). Cấu trúc mệnh lệnh phủ định 'Do not + V'." },
    { id: "t3", en: "A tradition or custom is something special that is passed down through the generations.", suggested: "Một truyền thống hay phong tục là điều gì đó đặc biệt được truyền lại qua các thế hệ.", notes: "Cấu trúc bị động 'be passed down' dịch là 'được truyền lại'." },
    { id: "t4", en: "Sausages and sticky rice are foods that cannot be missed to worship the ancestors.", suggested: "Giò và xôi là những món ăn không thể thiếu để thờ cúng tổ tiên.", notes: "Từ vựng: <i>worship</i> (thờ cúng), <i>ancestors</i> (tổ tiên)." },
    { id: "t5", en: "Regardless of when it is opened or what it is, profuse thanks are always appropriate.", suggested: "Dù quà được mở lúc nào hay là gì, lời cảm ơn nồng nhiệt luôn luôn là phù hợp.", notes: "Cấu trúc 'Regardless of...' dịch là 'bất kể/dù cho...'. <i>profuse thanks</i> = lời cảm ơn dạt dào." }
  ],

  // ---------------------------------------------------------
  // PART 5 — SENTENCE TRANSFORMATION PRACTICE
  // ---------------------------------------------------------
  transformation: [
    {
      id: "tr1", name: "shouldn't ⇄ had better not (lời khuyên không nên làm gì)",
      formula: "S + shouldn't + V  →  S + had better not + V",
      example: { before: "You shouldn't point at others while talking.", after: "You had better not point at others while talking." },
      practice: [
        { id: "tr1p1", type: "fillblank", prompt: "You shouldn't talk loudly in the pagoda. → You ______________ talk loudly in the pagoda.", accepted: ["had better not"], correct: "had better not", explanation: "shouldn't ⇄ had better not." },
        { id: "tr1p2", type: "fillblank", prompt: "We shouldn't dump rubbish during the first three days of Tet. → We ______________ dump rubbish during the first three days of Tet.", accepted: ["had better not"], correct: "had better not", explanation: "shouldn't ⇄ had better not." }
      ]
    },
    {
      id: "tr2", name: "must ⇄ It is obligatory for sb to V (sự bắt buộc)",
      formula: "S + must + V  →  It is obligatory for + O + to + V",
      example: { before: "We must finish all the homework by Thursday.", after: "It is obligatory for us to finish all the homework by Thursday." },
      practice: [
        { id: "tr2p1", type: "fillblank", prompt: "Guests must remove their shoes before entering the temple. → It is obligatory ______________ guests to remove their shoes before entering the temple.", accepted: ["for"], correct: "for", explanation: "It is obligatory FOR + O + to V." },
        { id: "tr2p2", type: "fillblank", prompt: "Employees must wear formal clothes at the ceremony. → It is obligatory for employees ______________ (wear) formal clothes at the ceremony.", accepted: ["to wear"], correct: "to wear", explanation: "Sau 'for + O' cần 'to + V nguyên mẫu'." }
      ]
    },
    {
      id: "tr3", name: "It is a custom for sb to V ⇄ sb traditionally V",
      formula: "It is a custom for + O + to + V  →  O + traditionally + V",
      example: { before: "It is a custom for Vietnamese people to take off their shoes before entering a house.", after: "Vietnamese people traditionally take off their shoes before entering a house." },
      practice: [
        { id: "tr3p1", type: "fillblank", prompt: "It is a custom for Vietnamese families to visit the pagoda at Tet. → Vietnamese families ______________ (visit) the pagoda at Tet.", accepted: ["traditionally visit"], correct: "traditionally visit", explanation: "It's a custom for sb to V → sb traditionally V." },
        { id: "tr3p2", type: "fillblank", prompt: "It is a custom for the host to serve tea to guests first. → The host ______________ (serve) tea to guests first.", accepted: ["traditionally serves"], correct: "traditionally serves", explanation: "Chú ý chia động từ theo chủ ngữ số ít 'The host' → traditionally serves." }
      ]
    },
    {
      id: "tr4", name: "Bị động ⇄ Chủ động (Passive ⇄ Active)",
      formula: "S (vật) + is/are + V3/-ed  →  People + V (nguyên mẫu)",
      example: { before: "New year wishes are exchanged during Tet holiday.", after: "People exchange new year wishes during Tet holiday." },
      practice: [
        { id: "tr4p1", type: "fillblank", prompt: "Chung cakes are made from sticky rice, pork, and green beans. → People ______________ (make) Chung cakes from sticky rice, pork, and green beans.", accepted: ["make"], correct: "make", explanation: "Bị động → chủ động: are made → make." },
        { id: "tr4p2", type: "fillblank", prompt: "Lucky money is given to children on New Year's morning. → People ______________ (give) lucky money to children on New Year's morning.", accepted: ["give"], correct: "give", explanation: "is given → give (chủ động)." }
      ]
    }
  ],

  // ---------------------------------------------------------
  // PART 6 — QUICK REVIEW (mini test, all skills)
  // ---------------------------------------------------------
  quickReview: [
    { id: "q1", cat: "Vocabulary", type: "mcq", prompt: "'Gratitude' means:", options: { A: "lòng biết ơn", B: "sự hối lộ", C: "cầu thang", D: "cao nguyên" }, correct: "A", explanation: "gratitude (n) = lòng biết ơn." },
    { id: "q2", cat: "Vocabulary", type: "mcq", prompt: "'Pass down' means:", options: { A: "hạ xuống", B: "truyền lại qua thế hệ", C: "vượt qua", D: "bỏ qua" }, correct: "B", explanation: "pass down = truyền lại qua các thế hệ." },
    { id: "q3", cat: "Vocabulary", type: "fillblank", prompt: "Sausages are difficult to make, so people often buy them from famous ______________ (nhà cung cấp).", accepted: ["suppliers"], correct: "suppliers", explanation: "suppliers (n) = những nhà cung cấp." },
    { id: "q4", cat: "Grammar", type: "mcq", prompt: "There are billions of stars in ______ space.", options: { A: "a", B: "the", C: "x (no article)", D: "an" }, correct: "C", explanation: "\"space\" nghĩa chung chung → không mạo từ." },
    { id: "q5", cat: "Grammar", type: "mcq", prompt: "We are going to prepare ______ sticky rice served with grilled chicken.", options: { A: "five-colours", B: "five-colour", C: "five colours", D: "five-coloured" }, correct: "B", explanation: "Tính từ ghép từ số đếm + danh từ phải ở dạng số ít, có gạch nối: five-colour." },
    { id: "q6", cat: "Grammar", type: "fillblank", prompt: "Sticky rice and spring rolls are (NORMAL) ______________ served immediately after being cooked.", accepted: ["normally"], correct: "normally", explanation: "Cần trạng từ bổ nghĩa động từ bị động → normally." },
    { id: "q7", cat: "Grammar", type: "fillblank", prompt: "You shouldn't point at others while talking. → You ______________ (had better) point at others while talking.", accepted: ["had better not"], correct: "had better not", explanation: "shouldn't ⇄ had better not." },
    { id: "q8", cat: "Reading", type: "truefalse", prompt: "Company gifts should be presented to the employees before the business meeting begins.", correct: "False", explanation: "Bài đọc: quà cho công ty nên tặng SAU cuộc họp." },
    { id: "q9", cat: "Reading", type: "truefalse", prompt: "Wrapping a gift in black paper is considered bad luck in Vietnamese culture.", correct: "True", explanation: "Bài đọc: màu đen không may mắn, gắn với đám tang." },
    { id: "q10", cat: "Reading", type: "mcq", prompt: "What is the main idea of the gift-giving passage?", options: { A: "Cultural guidelines and customs regarding gift-giving in Vietnam.", B: "The history of Vietnamese festivals.", C: "How to choose the most expensive gifts.", D: "The negative impacts of corruption." }, correct: "A", explanation: "Bài đọc nói về các quy tắc/lưu ý văn hoá khi tặng quà." },
    { id: "q11", cat: "Writing", type: "fillblank", prompt: "We must finish all the homework by Thursday to meet the deadline. → It is obligatory ______________ us to finish all the homework by Thursday to meet the deadline.", accepted: ["for"], correct: "for", explanation: "It is obligatory FOR + O + to V." },
    { id: "q12", cat: "Writing", type: "fillblank", prompt: "It is a custom for Vietnamese people to take off their shoes before entering a house. → Vietnamese people ______________ (traditionally) take off their shoes before entering a house.", accepted: ["traditionally"], correct: "traditionally", explanation: "It's a custom for sb to V → sb traditionally V." },
    { id: "q13", cat: "Writing", type: "fillblank", prompt: "New year wishes are exchanged during Tet holiday. → People ______________ (exchange) new year wishes during Tet holiday.", accepted: ["exchange"], correct: "exchange", explanation: "Bị động → chủ động: are exchanged → exchange." },
    { id: "q14", cat: "Vocabulary", type: "mcq", prompt: "Parents took many photos during the graduation ______.", options: { A: "ceremony", B: "reunion", C: "deposit", D: "applause" }, correct: "A", explanation: "'graduation ceremony' = lễ tốt nghiệp." }
  ]
};
