const REVIEW = {
  id: "test31",
  testFile: "test31.html",
  grade: "Grade 6 — Global Success",
  unit: "Unit 4: My neighbourhood",
  title: "Knowledge Review — Unit 4, Practice Test 1",

  // ---------------------------------------------------------
  // PART 1 — VOCABULARY REVIEW
  // ---------------------------------------------------------
  vocabulary: [
    { word: "peaceful", pos: "adj", ipa: "/ˈpiːsfl/", meaning: "yên bình", example: "Greendale is a very peaceful town, so many elderly people love retiring there.", exampleVi: "Greendale là một thị trấn rất yên bình, nên nhiều người lớn tuổi thích về hưu ở đó." },
    { word: "crowded", pos: "adj", ipa: "/ˈkraʊdɪd/", meaning: "đông đúc", example: "The streets near the market are always crowded with shoppers on weekends.", exampleVi: "Các con phố gần chợ luôn đông đúc người mua sắm vào cuối tuần." },
    { word: "attraction", pos: "n", ipa: "/əˈtrækʃn/", meaning: "điểm thu hút, danh lam", example: "The local museum is one of the most famous historic attractions in the region.", exampleVi: "Bảo tàng địa phương là một trong những điểm tham quan lịch sử nổi tiếng nhất trong vùng." },
    { word: "fantastic", pos: "adj", ipa: "/fænˈtæstɪk/", meaning: "tuyệt vời", example: "The city center looks very modern and fantastic with new tall buildings.", exampleVi: "Trung tâm thành phố trông rất hiện đại và tuyệt vời với những tòa nhà cao tầng mới." },
    { word: "annoying", pos: "adj", ipa: "/əˈnɔɪɪŋ/", meaning: "gây khó chịu", example: "The loud noise from the nearby factory is extremely annoying to the residents.", exampleVi: "Tiếng ồn lớn từ nhà máy gần đó khiến cư dân vô cùng khó chịu." },
    { word: "neighborhood", pos: "n", ipa: "/ˈneɪbərhʊd/", meaning: "khu phố, khu dân cư", example: "We should help our neighbors clean the streets to keep our neighborhood green.", exampleVi: "Chúng ta nên giúp hàng xóm dọn dẹp đường phố để giữ khu phố xanh sạch." },
    { word: "modern", pos: "adj", ipa: "/ˈmɑːdərn/", meaning: "hiện đại", example: "A city house is more modern than a country house.", exampleVi: "Nhà ở thành phố hiện đại hơn nhà ở nông thôn." },
    { word: "post office", pos: "n", ipa: "/poʊst ˈɔːfɪs/", meaning: "bưu điện", example: "There is a post office just down this road, next to the bank.", exampleVi: "Có một bưu điện ngay phía dưới con đường này, cạnh ngân hàng." },
    { word: "the way", pos: "phrase", ipa: "/ðə weɪ/", meaning: "đường đi, lối đi", example: "Can you tell us the way to Hai Ba Trung Street?", exampleVi: "Bạn có thể chỉ đường đến phố Hai Bà Trưng cho chúng tôi không?" },
    { word: "noisy", pos: "adj", ipa: "/ˈnɔɪzi/", meaning: "ồn ào", example: "There are too many vehicles in this town during the day. It's always very noisy and crowded.", exampleVi: "Có quá nhiều phương tiện trong thị trấn này vào ban ngày. Nó luôn rất ồn ào và đông đúc." },
    { word: "countryside", pos: "n", ipa: "/ˈkʌntrisaɪd/", meaning: "vùng nông thôn", example: "I really want to see the countryside.", exampleVi: "Tôi thực sự muốn ngắm cảnh vùng nông thôn." },
    { word: "calm", pos: "adj", ipa: "/kɑːm/", meaning: "yên tĩnh, điềm tĩnh", example: "I love living in Hilltown because it is a very calm and neat place.", exampleVi: "Tôi thích sống ở Hilltown vì đó là một nơi rất yên tĩnh và gọn gàng." },
    { word: "neat", pos: "adj", ipa: "/niːt/", meaning: "gọn gàng, sạch sẽ", example: "Hilltown is a calm, neat place and people are friendly.", exampleVi: "Hilltown là một nơi yên tĩnh, gọn gàng và mọi người thân thiện." },
    { word: "friendly", pos: "adj", ipa: "/ˈfrendli/", meaning: "thân thiện", example: "The people there are also incredibly friendly.", exampleVi: "Người dân ở đó cũng vô cùng thân thiện." },
    { word: "surroundings", pos: "n", ipa: "/səˈraʊndɪŋz/", meaning: "môi trường xung quanh", example: "People always take good care of their surroundings.", exampleVi: "Mọi người luôn chăm sóc tốt cho môi trường xung quanh mình." },
    { word: "public transport", pos: "n", ipa: "/ˈpʌblɪk ˈtrænspɔːrt/", meaning: "phương tiện giao thông công cộng", example: "There isn't much public transport, so getting to the city can be difficult.", exampleVi: "Không có nhiều phương tiện giao thông công cộng, nên việc đến thành phố có thể khó khăn." },
    { word: "elderly", pos: "adj", ipa: "/ˈeldərli/", meaning: "người lớn tuổi", example: "Many elderly people love retiring in a peaceful town.", exampleVi: "Nhiều người lớn tuổi thích về hưu ở một thị trấn yên bình." },
    { word: "resident", pos: "n", ipa: "/ˈrezɪdənt/", meaning: "cư dân", example: "The loud noise is extremely annoying to the residents.", exampleVi: "Tiếng ồn lớn khiến các cư dân vô cùng khó chịu." }
  ],

  vocabPractice: {
    mcq: [
      { id: "vp1", prompt: "Choose the word that means 'đông đúc':", options: { A: "crowded", B: "peaceful", C: "modern", D: "friendly" }, correct: "A", explanation: "<b>crowded</b> (adj) = đông đúc." },
      { id: "vp2", prompt: "Choose the word that means 'ồn ào':", options: { A: "noisy", B: "calm", C: "neat", D: "elderly" }, correct: "A", explanation: "<b>noisy</b> (adj) = ồn ào." },
      { id: "vp3", prompt: "\"There is a ______ just down this road, next to the bank.\"", options: { A: "post office", B: "attraction", C: "neighborhood", D: "surroundings" }, correct: "A", explanation: "\"<b>post office</b>\" (bưu điện) là nơi bán tem, gửi thư." },
      { id: "vp4", prompt: "Choose the word that means 'gây khó chịu':", options: { A: "annoying", B: "fantastic", C: "friendly", D: "modern" }, correct: "A", explanation: "<b>annoying</b> (adj) = gây khó chịu." },
      { id: "vp5", prompt: "\"I love living in Hilltown because it is a very calm and ______ place.\"", options: { A: "neat", B: "crowded", C: "noisy", D: "annoying" }, correct: "A", explanation: "\"<b>neat</b>\" (gọn gàng, sạch sẽ) khớp với \"calm\" để miêu tả một nơi dễ chịu." },
      { id: "vp6", prompt: "Choose the word that means 'cư dân':", options: { A: "resident", B: "tourist", C: "neighbor", D: "visitor" }, correct: "A", explanation: "<b>resident</b> (n) = cư dân." }
    ],
    fillblank: [
      { id: "vf1", prompt: "The local museum is one of the most famous historic ______________ (điểm thu hút) in the region.", accepted: ["attractions"], correct: "attractions", explanation: "<b>attraction</b> (n) = điểm thu hút, danh lam." },
      { id: "vf2", prompt: "We should help our neighbors clean the streets to keep our ______________ (khu phố) green.", accepted: ["neighborhood"], correct: "neighborhood", explanation: "<b>neighborhood</b> (n) = khu phố, khu dân cư." },
      { id: "vf3", prompt: "Greendale is a very ______________ (yên bình) town.", accepted: ["peaceful"], correct: "peaceful", explanation: "<b>peaceful</b> (adj) = yên bình." },
      { id: "vf4", prompt: "There isn't much ______________ (phương tiện giao thông công cộng), so getting to the city can be difficult.", accepted: ["public transport"], correct: "public transport", explanation: "<b>public transport</b> (n) = phương tiện giao thông công cộng." },
      { id: "vf5", prompt: "People always take good care of their ______________ (môi trường xung quanh).", accepted: ["surroundings"], correct: "surroundings", explanation: "<b>surroundings</b> (n) = môi trường xung quanh." },
      { id: "vf6", prompt: "The loud noise from the factory is extremely annoying to the ______________ (cư dân).", accepted: ["residents"], correct: "residents", explanation: "<b>resident</b> (n) → residents (số nhiều) = cư dân." }
    ],
    matching: {
      left: ["modern", "the way", "countryside", "calm", "elderly", "fantastic"],
      right: ["hiện đại", "đường đi, lối đi", "vùng nông thôn", "yên tĩnh, điềm tĩnh", "người lớn tuổi", "tuyệt vời"],
      correctMap: [0, 1, 2, 3, 4, 5]
    },
    chooseWord: [
      { id: "cw1", prompt: "\"The streets near the market are always ______ with shoppers.\" (CROWD)", options: { A: "crowd", B: "crowds", C: "crowded", D: "crowding" }, correct: "C", explanation: "Cần tính từ sau \"are always\" → crowd (n/v) → <b>crowded</b> (adj, +ed)." },
      { id: "cw2", prompt: "\"The loud noise from the factory is extremely ______.\" (ANNOY)", options: { A: "annoy", B: "annoyed", C: "annoying", D: "annoyance" }, correct: "C", explanation: "Cần tính từ sau \"extremely\" → annoy (v) → <b>annoying</b> (adj, +ing)." },
      { id: "cw3", prompt: "\"The local museum is one of the most famous historic ______.\" (ATTRACT)", options: { A: "attract", B: "attractive", C: "attractions", D: "attracted" }, correct: "C", explanation: "Cần danh từ số nhiều sau \"historic\" → attract (v) → attraction (n) → <b>attractions</b>." }
    ],
    wordMeaning: [
      { id: "wm1", prompt: "What does 'crowded' mean?", options: { A: "vắng vẻ", B: "đông đúc", C: "yên tĩnh", D: "sạch sẽ" }, correct: "B", explanation: "crowded (adj) = đông đúc." },
      { id: "wm2", prompt: "What does 'peaceful' mean?", options: { A: "ồn ào", B: "nguy hiểm", C: "yên bình", D: "chật chội" }, correct: "C", explanation: "peaceful (adj) = yên bình." },
      { id: "wm3", prompt: "What does 'neighborhood' mean?", options: { A: "khu phố, khu dân cư", B: "công viên trung tâm", C: "trung tâm thương mại", D: "bến xe buýt" }, correct: "A", explanation: "neighborhood (n) = khu phố, khu dân cư." }
    ],
    wordForm: [
      { id: "wf1", prompt: "The streets near the market are always ______________ (CROWD) with shoppers.", accepted: ["crowded"], correct: "crowded", explanation: "crowd (n) → crowded (adj, +ed)." },
      { id: "wf2", prompt: "The city center looks very modern and ______________ (FANTASY).", accepted: ["fantastic"], correct: "fantastic", explanation: "fantasy (n) → fantastic (adj)." },
      { id: "wf3", prompt: "The loud noise is extremely ______________ (ANNOY) to the residents.", accepted: ["annoying"], correct: "annoying", explanation: "annoy (v) → annoying (adj, +ing)." }
    ]
  },

  // ---------------------------------------------------------
  // PART 2 — GRAMMAR REVIEW & PRACTICE
  // ---------------------------------------------------------
  grammar: [
    {
      id: "g1", name: "A is easier than B ⇄ B is harder than A / B is not as easy as A",
      usage: "So sánh hơn \"A + is + easier + than + B\" (A dễ hơn B) có thể đảo chủ ngữ và tính từ trái nghĩa \"B + is + harder + than + A\" (B khó hơn A), hoặc dùng so sánh ngang bằng phủ định \"B + is not as easy as + A\".",
      formulas: [
        "A + is easier than + B.  →  B + is harder than + A.  /  B + is not as easy as + A.",
        "The last exam was easier than this one. → This exam was harder than the last one."
      ],
      signals: ["A is easier than B", "B is harder than A / B is not as easy as A"],
      examples: [
        { en: "The last exam was easier than this one.", vi: "Bài kiểm tra lần trước dễ hơn bài này." },
        { en: "This exam was harder than the last one.", vi: "Bài kiểm tra này khó hơn bài lần trước." }
      ],
      mistakes: [
        { wrong: "This exam was more hard than the last one.", right: "This exam was harder than the last one. (\"hard\" là tính từ ngắn, thêm \"-er\", không dùng \"more\")" }
      ],
      practice: {
        level1: [
          { id: "g1l1a", type: "fillblank", prompt: "This book is easier than that one. → That book is ______________ (harder) than this one.", accepted: ["harder"], correct: "harder", explanation: "A is easier than B → B is harder than A." }
        ],
        level2: [
          { id: "g1l2a", type: "fillblank", prompt: "Rewrite: 'The old road is shorter than the new one.' → The new road is ______________ (longer) than the old one.", accepted: ["longer"], correct: "longer", explanation: "So sánh hơn có thể đảo chủ ngữ và tính từ trái nghĩa." }
        ],
        level3: [
          { id: "g1l3a", type: "fillblank", prompt: "Rewrite so it keeps the same meaning: 'This lesson is more difficult than the previous one.' → ______________ (The previous lesson is easier than this one).", accepted: ["the previous lesson is easier than this one"], correct: "The previous lesson is easier than this one", explanation: "A is more difficult than B → B is easier than A." }
        ]
      }
    },
    {
      id: "g2", name: "Where is the way to X? ⇄ Can you tell me the way to X?",
      usage: "Câu hỏi trực tiếp \"Where is the way to X?\" có thể viết lại lịch sự hơn bằng \"Can you tell me the way to X?\", giữ nguyên nghĩa hỏi đường.",
      formulas: [
        "Where is the way to + địa điểm?  →  Can you tell me the way to + địa điểm?",
        "Where is the way to Ben Thanh Market? → Can you tell me the way to Ben Thanh Market?"
      ],
      signals: ["Where is the way to...?", "Can you tell me the way to...?"],
      examples: [
        { en: "\"Where is the way to Ben Thanh Market?\" the tourist asked.", vi: "\"Đường đến chợ Bến Thành ở đâu?\" người du khách hỏi." },
        { en: "The tourist asked, \"Can you tell me the way to Ben Thanh Market?\"", vi: "Người du khách hỏi: \"Bạn có thể chỉ đường đến chợ Bến Thành cho tôi không?\"" }
      ],
      mistakes: [
        { wrong: "Can you tell me where is the way to the market?", right: "Can you tell me the way to the market? (không lặp lại cấu trúc câu hỏi \"where is\" bên trong câu hỏi lịch sự)" }
      ],
      practice: {
        level1: [
          { id: "g2l1a", type: "fillblank", prompt: "Where is the way to the museum? → Can you tell me the way ______________ (to) the museum?", accepted: ["to"], correct: "to", explanation: "Where is the way to X? → Can you tell me the way to X?" }
        ],
        level2: [
          { id: "g2l2a", type: "fillblank", prompt: "Rewrite: 'Where is the way to the airport?' → Can you tell me the way ______________ (to) the airport?", accepted: ["to"], correct: "to", explanation: "Where is the way to X? → Can you tell me the way to X?" }
        ],
        level3: [
          { id: "g2l3a", type: "fillblank", prompt: "Rewrite so it keeps the same meaning: 'Where is the way to the post office?' → ______________ (Can you tell me the way to the post office?).", accepted: ["can you tell me the way to the post office"], correct: "Can you tell me the way to the post office?", explanation: "Where is the way to X? → Can you tell me the way to X?" }
        ]
      }
    },
    {
      id: "g3", name: "A is taller than B ⇄ B is not as tall as A",
      usage: "So sánh hơn \"A + is + taller + than + B\" (A cao hơn B) có nghĩa tương đương với so sánh ngang bằng phủ định \"B + is not as tall as + A\" (B không cao bằng A).",
      formulas: [
        "A + is taller than + B.  →  B + is not as tall as + A.",
        "Those historic buildings are taller than these modern houses. → These modern houses are not as tall as those historic buildings."
      ],
      signals: ["A is taller than B", "B is not as tall as A"],
      examples: [
        { en: "Those historic buildings are taller than these modern houses.", vi: "Những tòa nhà lịch sử đó cao hơn những ngôi nhà hiện đại này." },
        { en: "These modern houses are not as tall as those historic buildings.", vi: "Những ngôi nhà hiện đại này không cao bằng những tòa nhà lịch sử đó." }
      ],
      mistakes: [
        { wrong: "These modern houses are not as taller as those buildings.", right: "These modern houses are not as tall as those buildings. (\"as...as\" dùng tính từ nguyên thể, không thêm \"-er\")" }
      ],
      practice: {
        level1: [
          { id: "g3l1a", type: "fillblank", prompt: "The mountain is higher than the hill. → The hill is not as ______________ (high) as the mountain.", accepted: ["high"], correct: "high", explanation: "A is higher than B → B is not as high as A." }
        ],
        level2: [
          { id: "g3l2a", type: "fillblank", prompt: "Rewrite: 'The new tower is taller than the old one.' → The old tower is not as ______________ (tall) as the new one.", accepted: ["tall"], correct: "tall", explanation: "A is taller than B → B is not as tall as A." }
        ],
        level3: [
          { id: "g3l3a", type: "fillblank", prompt: "Rewrite so it keeps the same meaning: 'This building is bigger than that one.' → ______________ (That building is not as big as this one).", accepted: ["that building is not as big as this one"], correct: "That building is not as big as this one", explanation: "A is bigger than B → B is not as big as A." }
        ]
      }
    },
    {
      id: "g4", name: "..., so + kết quả ⇄ Because + nguyên nhân, + kết quả",
      usage: "Câu ghép với \"..., so + kết quả\" (vì vậy) có thể viết lại bằng \"Because + nguyên nhân, + kết quả\", đảo trật tự hai vế nhưng giữ nguyên quan hệ nhân quả.",
      formulas: [
        "Nguyên nhân, so + kết quả.  →  Because + nguyên nhân, + kết quả.",
        "There are many new shops near here, so the streets are very busy. → Because there are many new shops near here, the streets are very busy."
      ],
      signals: ["..., so + kết quả", "Because + nguyên nhân, + kết quả"],
      examples: [
        { en: "There are many new shops near here, so the streets are very busy during the day.", vi: "Có nhiều cửa hàng mới gần đây, vì vậy các con phố rất nhộn nhịp vào ban ngày." },
        { en: "Because there are many new shops near here, the streets are very busy during the day.", vi: "Vì có nhiều cửa hàng mới gần đây, nên các con phố rất nhộn nhịp vào ban ngày." }
      ],
      mistakes: [
        { wrong: "Because there are many new shops near here, so the streets are busy.", right: "Because there are many new shops near here, the streets are busy. (không dùng cả \"because\" và \"so\" trong cùng một câu)" }
      ],
      practice: {
        level1: [
          { id: "g4l1a", type: "fillblank", prompt: "It rained heavily, so the match was cancelled. → ______________ (Because) it rained heavily, the match was cancelled.", accepted: ["because"], correct: "Because", explanation: "..., so + kết quả → Because + nguyên nhân, + kết quả." }
        ],
        level2: [
          { id: "g4l2a", type: "fillblank", prompt: "Rewrite: 'She studied hard, so she passed the exam.' → ______________ (Because) she studied hard, she passed the exam.", accepted: ["because"], correct: "Because", explanation: "..., so + kết quả → Because + nguyên nhân, + kết quả." }
        ],
        level3: [
          { id: "g4l3a", type: "fillblank", prompt: "Rewrite so it keeps the same meaning: 'The road was icy, so many cars had accidents.' → ______________ (Because the road was icy, many cars had accidents).", accepted: ["because the road was icy, many cars had accidents"], correct: "Because the road was icy, many cars had accidents", explanation: "..., so + kết quả → Because + nguyên nhân, + kết quả." }
        ]
      }
    },
    {
      id: "g5", name: "S + V..., which + mệnh đề bổ sung (đại từ quan hệ chỉ cả câu trước)",
      usage: "\"which\" có thể đứng sau dấu phẩy để thay thế cho toàn bộ ý của mệnh đề đứng trước, thêm một lời bình luận hoặc nhận xét về sự việc đó.",
      formulas: [
        "Mệnh đề chính, which + mệnh đề bổ sung.",
        "People sometimes say bad things about each other, which can be a bit annoying."
      ],
      signals: [", which + mệnh đề bổ sung (chỉ cả câu trước, không chỉ 1 danh từ)"],
      examples: [
        { en: "People sometimes say bad things about each other, which can be a bit annoying.", vi: "Đôi khi mọi người nói xấu lẫn nhau, điều này có thể hơi khó chịu." },
        { en: "He passed the exam with excellent marks, which made his parents very proud.", vi: "Cậu ấy đã vượt qua kỳ thi với điểm số xuất sắc, điều này khiến bố mẹ cậu rất tự hào." }
      ],
      mistakes: [
        { wrong: "People say bad things about each other, that can be annoying.", right: "People say bad things about each other, which can be annoying. (dùng \"which\", không dùng \"that\", sau dấu phẩy để chỉ cả mệnh đề)" }
      ],
      practice: {
        level1: [
          { id: "g5l1a", type: "fillblank", prompt: "He arrived late again, ______________ (which) made the teacher upset.", accepted: ["which"], correct: "which", explanation: "Dùng \"which\" sau dấu phẩy để chỉ cả mệnh đề trước." }
        ],
        level2: [
          { id: "g5l2a", type: "fillblank", prompt: "Rewrite: 'The bus broke down. This delayed the whole trip.' → The bus broke down, ______________ (which) delayed the whole trip.", accepted: ["which"], correct: "which", explanation: "Dùng \"which\" để nối và chỉ cả mệnh đề trước." }
        ],
        level3: [
          { id: "g5l3a", type: "fillblank", prompt: "Combine using 'which': 'She forgot her homework. This upset her teacher.' → ______________ (She forgot her homework, which upset her teacher).", accepted: ["she forgot her homework, which upset her teacher"], correct: "She forgot her homework, which upset her teacher", explanation: "Dùng \"which\" sau dấu phẩy để chỉ cả mệnh đề trước." }
        ]
      }
    }
  ],

  // ---------------------------------------------------------
  // PART 3 — READING PRACTICE
  // ---------------------------------------------------------
  reading: {
    passage: "Hi Friends! My name's Sandra and I live in Hilltown. It is a small town in the south of England. About 9,000 people live here. There are many shops in the town and there are <mark data-w=\"three supermarkets\">three supermarkets</mark>. You can buy everything you need in the town. There are two banks, a post office, a police station and a library, too. You can find <mark data-w=\"a big market\">a big market</mark> where you can buy fresh fruit, vegetables, meat and dairy products. I like going to the market with my mum. There is a park in the town centre. In the park children can play because there is a playground. In our town you can find some restaurants and cafés. My <mark data-w=\"favorite café\">favorite café</mark> is Icecave. It's in Park Street and the ice cream is fantastic here! There are <mark data-w=\"three elementary schools and two high schools\">three elementary schools and two high schools</mark> in Hilltown. My school is in Mill Street. Next to our school there is a sports centre. Every Wednesday afternoon, we play badminton. I like living in Hilltown because it is a <mark data-w=\"calm, neat place\">calm, neat place</mark> and people are friendly.",
    vocabInContext: {
      "three supermarkets": "ba siêu thị",
      "a big market": "một khu chợ lớn",
      "favorite café": "quán cà phê yêu thích",
      "three elementary schools and two high schools": "ba trường tiểu học và hai trường trung học",
      "calm, neat place": "một nơi yên tĩnh, gọn gàng"
    },
    translation: "<b>THỊ TRẤN HILLTOWN</b><br><br>Xin chào các bạn! Tên tôi là Sandra và tôi sống ở Hilltown. Đó là một thị trấn nhỏ ở miền Nam nước Anh. Khoảng 9.000 người sống ở đây. Có nhiều cửa hàng trong thị trấn và có ba siêu thị. Bạn có thể mua mọi thứ cần thiết trong thị trấn. Cũng có hai ngân hàng, một bưu điện, một đồn cảnh sát và một thư viện. Bạn có thể tìm thấy một khu chợ lớn nơi bạn có thể mua trái cây tươi, rau củ, thịt và các sản phẩm từ sữa. Tôi thích đi chợ cùng mẹ. Có một công viên ở trung tâm thị trấn. Trong công viên trẻ em có thể chơi vì có một sân chơi. Trong thị trấn của chúng tôi bạn có thể tìm thấy một số nhà hàng và quán cà phê. Quán cà phê yêu thích của tôi là Icecave. Nó nằm ở phố Park và kem ở đây rất tuyệt! Có ba trường tiểu học và hai trường trung học ở Hilltown. Trường tôi nằm ở phố Mill. Cạnh trường tôi có một trung tâm thể thao. Mỗi chiều thứ Tư, chúng tôi chơi cầu lông. Tôi thích sống ở Hilltown vì đó là một nơi yên tĩnh, gọn gàng và mọi người thân thiện.",
    practice: [
      { id: "r1", type: "truefalse", prompt: "Hilltown is a very large city in the north of England with over 90,000 people.", correct: "False", explanation: "Sai. Hilltown là một thị trấn nhỏ ở miền Nam nước Anh với khoảng 9.000 người." },
      { id: "r2", type: "truefalse", prompt: "Sandra enjoys going to the big market with her mother.", correct: "True", explanation: "Đúng. \"I like going to the market with my mum.\"" },
      { id: "r3", type: "truefalse", prompt: "Sandra's favorite café, Icecave, is located inside the central park.", correct: "False", explanation: "Sai. Quán cà phê nằm ở phố Park Street, không phải trong công viên trung tâm." },
      { id: "r4", type: "truefalse", prompt: "There are five schools in total in Hilltown.", correct: "True", explanation: "Đúng. Ba trường tiểu học và hai trường trung học, tổng cộng năm trường." },
      { id: "r5", type: "mcq", prompt: "What do Sandra and her schoolmates do every Wednesday afternoon?", options: { A: "They play badminton at the sports centre.", B: "They go to the library to read books.", C: "They buy fresh fruit and ice cream.", D: "They clean the playground in the park." }, correct: "A", explanation: "Bài đọc: \"Every Wednesday afternoon, we play badminton.\"" },
      { id: "r6", type: "mcq", prompt: "Why does Sandra like living in Hilltown?", options: { A: "Because it is a quiet, clean place and the people are nice.", B: "Because it has many big supermarkets and banks.", C: "Because her school is located next to her favorite café.", D: "Because she can play badminton every day of the week." }, correct: "A", explanation: "Bài đọc: \"I like living in Hilltown because it is a calm, neat place and people are friendly.\"" },
      { id: "r7", type: "fillblank", prompt: "Find the word in the passage that means 'sân chơi'.", accepted: ["playground"], correct: "playground", explanation: "\"there is a playground\" — playground = sân chơi." },
      { id: "r8", type: "mcq", prompt: "How many banks are there in Hilltown?", options: { A: "One", B: "Two", C: "Three", D: "Four" }, correct: "B", explanation: "Bài đọc: \"There are two banks, a post office, a police station and a library.\"" },
      { id: "r9", type: "truefalse", prompt: "Sandra's school is located in Park Street.", correct: "False", explanation: "Sai. Bài đọc: \"My school is in Mill Street\" — trường của Sandra ở phố Mill, còn Park Street là nơi có quán cà phê yêu thích của cô." }
    ]
  },

  // ---------------------------------------------------------
  // PART 4 — TRANSLATION PRACTICE
  // ---------------------------------------------------------
  translation: [
    { id: "t1", en: "It is a small town in the south of England. About 9,000 people live here.", suggested: "Đó là một thị trấn nhỏ ở miền Nam nước Anh. Khoảng 9.000 người sống ở đây.", notes: "\"in the south of + nơi chốn\" (ở phía Nam của...) chỉ vị trí địa lý." },
    { id: "t2", en: "You can find a big market where you can buy fresh fruit, vegetables, meat and dairy products.", suggested: "Bạn có thể tìm thấy một khu chợ lớn nơi bạn có thể mua trái cây tươi, rau củ, thịt và các sản phẩm từ sữa.", notes: "\"where\" là đại từ quan hệ chỉ nơi chốn." },
    { id: "t3", en: "There are three elementary schools and two high schools in Hilltown.", suggested: "Có ba trường tiểu học và hai trường trung học ở Hilltown.", notes: "\"There are + số lượng + N\" giới thiệu sự tồn tại." },
    { id: "t4", en: "Next to our school there is a sports centre.", suggested: "Cạnh trường chúng tôi có một trung tâm thể thao.", notes: "\"next to\" (bên cạnh) là giới từ chỉ vị trí." },
    { id: "t5", en: "I like living in Hilltown because it is a calm, neat place and people are friendly.", suggested: "Tôi thích sống ở Hilltown vì đó là một nơi yên tĩnh, gọn gàng và mọi người thân thiện.", notes: "\"because\" giới thiệu lý do." }
  ],

  // ---------------------------------------------------------
  // PART 5 — SENTENCE TRANSFORMATION PRACTICE
  // ---------------------------------------------------------
  transformation: [
    {
      id: "tr1", name: "A is easier than B ⇄ B is harder than A",
      formula: "A + is easier than + B  →  B + is harder than + A",
      example: { before: "The last exam was easier than this one.", after: "This exam was harder than the last one." },
      practice: [
        { id: "tr1p1", type: "fillblank", prompt: "This book is easier than that one. → That book is ______________ (harder) than this one.", accepted: ["harder"], correct: "harder", explanation: "A is easier than B → B is harder than A." },
        { id: "tr1p2", type: "fillblank", prompt: "Rewrite: 'The old road is shorter than the new one.' → The new road is ______________ (longer) than the old one.", accepted: ["longer"], correct: "longer", explanation: "So sánh hơn có thể đảo chủ ngữ và tính từ trái nghĩa." }
      ]
    },
    {
      id: "tr2", name: "Where is the way to X? ⇄ Can you tell me the way to X?",
      formula: "Where is the way to + địa điểm?  →  Can you tell me the way to + địa điểm?",
      example: { before: "Where is the way to Ben Thanh Market?", after: "Can you tell me the way to Ben Thanh Market?" },
      practice: [
        { id: "tr2p1", type: "fillblank", prompt: "Where is the way to the museum? → Can you tell me the way ______________ (to) the museum?", accepted: ["to"], correct: "to", explanation: "Where is the way to X? → Can you tell me the way to X?" },
        { id: "tr2p2", type: "fillblank", prompt: "Rewrite: 'Where is the way to the airport?' → Can you tell me the way ______________ (to) the airport?", accepted: ["to"], correct: "to", explanation: "Where is the way to X? → Can you tell me the way to X?" }
      ]
    },
    {
      id: "tr3", name: "A is taller than B ⇄ B is not as tall as A",
      formula: "A + is taller than + B  →  B + is not as tall as + A",
      example: { before: "Those historic buildings are taller than these modern houses.", after: "These modern houses are not as tall as those historic buildings." },
      practice: [
        { id: "tr3p1", type: "fillblank", prompt: "The mountain is higher than the hill. → The hill is not as ______________ (high) as the mountain.", accepted: ["high"], correct: "high", explanation: "A is higher than B → B is not as high as A." },
        { id: "tr3p2", type: "fillblank", prompt: "Rewrite: 'The new tower is taller than the old one.' → The old tower is not as ______________ (tall) as the new one.", accepted: ["tall"], correct: "tall", explanation: "A is taller than B → B is not as tall as A." }
      ]
    },
    {
      id: "tr4", name: "..., so + kết quả ⇄ Because + nguyên nhân, + kết quả",
      formula: "Nguyên nhân, so + kết quả  →  Because + nguyên nhân, + kết quả",
      example: { before: "There are many new shops near here, so the streets are very busy.", after: "Because there are many new shops near here, the streets are very busy." },
      practice: [
        { id: "tr4p1", type: "fillblank", prompt: "It rained heavily, so the match was cancelled. → ______________ (Because) it rained heavily, the match was cancelled.", accepted: ["because"], correct: "Because", explanation: "..., so + kết quả → Because + nguyên nhân, + kết quả." },
        { id: "tr4p2", type: "fillblank", prompt: "Rewrite: 'She studied hard, so she passed the exam.' → ______________ (Because) she studied hard, she passed the exam.", accepted: ["because"], correct: "Because", explanation: "..., so + kết quả → Because + nguyên nhân, + kết quả." }
      ]
    }
  ],

  // ---------------------------------------------------------
  // PART 6 — QUICK REVIEW (mini test, all skills)
  // ---------------------------------------------------------
  quickReview: [
    { id: "q1", cat: "Vocabulary", type: "mcq", prompt: "'Crowded' means:", options: { A: "đông đúc", B: "vắng vẻ", C: "yên tĩnh", D: "hiện đại" }, correct: "A", explanation: "crowded (adj) = đông đúc." },
    { id: "q2", cat: "Vocabulary", type: "mcq", prompt: "'Peaceful' means:", options: { A: "ồn ào", B: "yên bình", C: "nguy hiểm", D: "chật chội" }, correct: "B", explanation: "peaceful (adj) = yên bình." },
    { id: "q3", cat: "Vocabulary", type: "fillblank", prompt: "The local museum is one of the most famous historic ______________ (điểm thu hút) in the region.", accepted: ["attractions"], correct: "attractions", explanation: "attraction (n) = điểm thu hút." },
    { id: "q4", cat: "Grammar", type: "mcq", prompt: "The last exam was easier than this one. → This exam was ______ than the last one.", options: { A: "harder", B: "easier", C: "hardest", D: "more easy" }, correct: "A", explanation: "A is easier than B → B is harder than A." },
    { id: "q5", cat: "Grammar", type: "mcq", prompt: "\"Where is the way to the market?\" → Can you tell me the way ______ the market?", options: { A: "to", B: "at", C: "for", D: "with" }, correct: "A", explanation: "\"the way to + place\" luôn dùng giới từ \"to\"." },
    { id: "q6", cat: "Grammar", type: "fillblank", prompt: "Those buildings are taller than these houses. → These houses are not as ______________ (tall) as those buildings.", accepted: ["tall"], correct: "tall", explanation: "A is taller than B → B is not as tall as A." },
    { id: "q7", cat: "Grammar", type: "fillblank", prompt: "There are many new shops, so the streets are busy. → ______________ (Because) there are many new shops, the streets are busy.", accepted: ["because"], correct: "Because", explanation: "..., so + kết quả → Because + nguyên nhân, + kết quả." },
    { id: "q8", cat: "Reading", type: "truefalse", prompt: "Hilltown is a very large city in the north of England with over 90,000 people.", correct: "False", explanation: "Sai theo bài đọc — Hilltown là thị trấn nhỏ ở miền Nam nước Anh." },
    { id: "q9", cat: "Reading", type: "truefalse", prompt: "There are five schools in total in Hilltown.", correct: "True", explanation: "Đúng. 3 trường tiểu học + 2 trường trung học = 5 trường." },
    { id: "q10", cat: "Reading", type: "mcq", prompt: "Why does Sandra like living in Hilltown?", options: { A: "Because it is a quiet, clean place and the people are nice.", B: "Because it has many big supermarkets and banks.", C: "Because her school is located next to her favorite café.", D: "Because she can play badminton every day of the week." }, correct: "A", explanation: "Bài đọc nêu rõ Sandra thích nơi yên tĩnh, gọn gàng và người dân thân thiện." },
    { id: "q11", cat: "Writing", type: "fillblank", prompt: "We should help our neighbors clean the streets to keep our ______________ (NEIGHBOR) green.", accepted: ["neighborhood"], correct: "neighborhood", explanation: "neighbor (n) → neighborhood (n, +hood)." },
    { id: "q12", cat: "Writing", type: "fillblank", prompt: "The city center looks very modern and ______________ (FANTASY).", accepted: ["fantastic"], correct: "fantastic", explanation: "fantasy (n) → fantastic (adj)." },
    { id: "q13", cat: "Writing", type: "fillblank", prompt: "Greendale is a very ______________ (PEACE) town.", accepted: ["peaceful"], correct: "peaceful", explanation: "peace (n) → peaceful (adj, +ful)." },
    { id: "q14", cat: "Vocabulary", type: "mcq", prompt: "Which word means 'bưu điện'?", options: { A: "post office", B: "police station", C: "library", D: "supermarket" }, correct: "A", explanation: "post office (n) = bưu điện." }
  ]
};
