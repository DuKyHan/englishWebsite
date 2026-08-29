const REVIEW = {
  id: "test10",
  testFile: "test10.html",
  grade: "Grade 8 — Global Success",
  unit: "Unit 2: Life in the countryside",
  title: "Knowledge Review — Unit 2, Practice Test 2",

  // ---------------------------------------------------------
  // PART 1 — VOCABULARY REVIEW
  // ---------------------------------------------------------
  vocabulary: [
    { word: "beehive", pos: "n", ipa: "/ˈbiːhaɪv/", meaning: "tổ ong", example: "Collecting honey from the beehive requires a lot of skill.", exampleVi: "Thu hoạch mật từ tổ ong đòi hỏi nhiều kỹ năng." },
    { word: "inconvenience", pos: "n", ipa: "/ˌɪnkənˈviːniəns/", meaning: "sự bất tiện, phiền toái", example: "I am very sorry for any inconvenience caused by our late payment.", exampleVi: "Tôi rất xin lỗi vì sự bất tiện do việc thanh toán trễ của chúng tôi gây ra." },
    { word: "herd", pos: "v", ipa: "/hɜːrd/", meaning: "chăn, lùa (gia súc)", example: "Children in the countryside are used to herding cattle at a young age.", exampleVi: "Trẻ em ở nông thôn quen với việc chăn gia súc từ nhỏ." },
    { word: "vast", pos: "adj", ipa: "/væst/", meaning: "rộng lớn", example: "A vast area of that forest was completely destroyed.", exampleVi: "Một khu vực rộng lớn của khu rừng đó đã bị phá hủy hoàn toàn." },
    { word: "standard of living", pos: "n phr", ipa: "/ˈstændərd əv ˈlɪvɪŋ/", meaning: "mức sống", example: "People here have a lower standard of living than those in big cities.", exampleVi: "Người dân ở đây có mức sống thấp hơn những người ở thành phố lớn." },
    { word: "hectare", pos: "n", ipa: "/ˈhekteər/", meaning: "héc-ta (đơn vị diện tích)", example: "More than 1000 hectares of forest were destroyed.", exampleVi: "Hơn 1000 héc-ta rừng đã bị phá hủy." },
    { word: "luxurious", pos: "adj", ipa: "/lʌɡˈʒʊriəs/", meaning: "sang trọng, xa hoa", example: "This is the most luxurious house I've ever seen in this rural village.", exampleVi: "Đây là ngôi nhà sang trọng nhất mà tôi từng thấy ở làng quê này." },
    { word: "lowlands", pos: "n", ipa: "/ˈloʊləndz/", meaning: "vùng đất thấp", example: "The air in the lowlands is not as clean as the air in the mountains.", exampleVi: "Không khí ở vùng đất thấp không trong lành bằng không khí trên núi." },
    { word: "mountainous", pos: "adj", ipa: "/ˈmaʊntənəs/", meaning: "nhiều núi, thuộc vùng núi", example: "Life in this mountainous village is so quiet and peaceful.", exampleVi: "Cuộc sống ở ngôi làng miền núi này rất yên tĩnh và bình yên." },
    { word: "remote", pos: "adj", ipa: "/rɪˈmoʊt/", meaning: "xa xôi, hẻo lánh", example: "I went on a volunteer trip to a remote village.", exampleVi: "Tôi đã có một chuyến đi tình nguyện đến một ngôi làng xa xôi." },
    { word: "welcoming", pos: "adj", ipa: "/ˈwelkəmɪŋ/", meaning: "thân thiện, hiếu khách", example: "Everyone there was incredibly welcoming.", exampleVi: "Mọi người ở đó cực kỳ thân thiện." },
    { word: "livelihood", pos: "n", ipa: "/ˈlaɪvlihʊd/", meaning: "kế sinh nhai", example: "Fishermen depend on the sea as a means of livelihood.", exampleVi: "Ngư dân dựa vào biển như một phương tiện kiếm sống." },
    { word: "worship", pos: "v", ipa: "/ˈwɜːrʃɪp/", meaning: "thờ cúng, tôn thờ", example: "Villagers organize festivals worshipping the village god.", exampleVi: "Dân làng tổ chức lễ hội thờ cúng thần làng." },
    { word: "communal", pos: "adj", ipa: "/kəˈmjuːnl/", meaning: "thuộc về cộng đồng, chung", example: "They live in a small community with a communal cultural house.", exampleVi: "Họ sống trong một cộng đồng nhỏ với một nhà văn hóa chung." },
    { word: "stilts", pos: "n", ipa: "/stɪlts/", meaning: "cột nhà sàn", example: "Houses in the Southern region are built on stilts to keep above flood waters.", exampleVi: "Nhà ở miền Nam được xây trên cột nhà sàn để tránh lũ lụt." },
    { word: "flood", pos: "n", ipa: "/flʌd/", meaning: "lũ lụt", example: "Houses are built on stilts to keep above flood waters.", exampleVi: "Nhà được xây trên cột để tránh nước lũ." },
    { word: "hunting", pos: "n", ipa: "/ˈhʌntɪŋ/", meaning: "săn bắn", example: "People in the northern mountains live by growing crops as well as hunting.", exampleVi: "Người dân ở miền núi phía Bắc sống bằng trồng trọt cũng như săn bắn." },
    { word: "crowded", pos: "adj", ipa: "/ˈkraʊdɪd/", meaning: "đông đúc", example: "The small city bus was crowded with students returning home after school.", exampleVi: "Chiếc xe buýt nhỏ của thành phố đông nghịt học sinh trở về nhà sau giờ học." }
  ],

  vocabPractice: {
    mcq: [
      { id: "vp1", prompt: "Choose the word that means 'kế sinh nhai':", options: { A: "livelihood", B: "hunting", C: "flood", D: "hectare" }, correct: "A", explanation: "<b>livelihood</b> (n) = kế sinh nhai." },
      { id: "vp2", prompt: "Choose the word that means 'sang trọng, xa hoa':", options: { A: "remote", B: "luxurious", C: "vast", D: "communal" }, correct: "B", explanation: "<b>luxurious</b> (adj) = sang trọng, xa hoa." },
      { id: "vp3", prompt: "Choose the best word: \"Children are used to ______ cattle in the field.\"", options: { A: "herding", B: "hunting", C: "worshipping", D: "flooding" }, correct: "A", explanation: "\"<b>herd</b> cattle\" (chăn gia súc) là cụm cố định." },
      { id: "vp4", prompt: "Choose the word that means 'đông đúc':", options: { A: "remote", B: "mountainous", C: "crowded", D: "vast" }, correct: "C", explanation: "<b>crowded</b> (adj) = đông đúc." },
      { id: "vp5", prompt: "\"Houses in the South are built on ______ to avoid floods.\"", options: { A: "stilts", B: "beehives", C: "hectares", D: "lowlands" }, correct: "A", explanation: "\"built on <b>stilts</b>\" (xây trên cột nhà sàn) là cụm cố định." },
      { id: "vp6", prompt: "Choose the word that means 'xa xôi, hẻo lánh':", options: { A: "remote", B: "welcoming", C: "communal", D: "vast" }, correct: "A", explanation: "<b>remote</b> (adj) = xa xôi, hẻo lánh." }
    ],
    fillblank: [
      { id: "vf1", prompt: "I am sorry for any ______________ (sự bất tiện) caused by our late payment.", accepted: ["inconvenience"], correct: "inconvenience", explanation: "<b>inconvenience</b> (n) = sự bất tiện, phiền toái." },
      { id: "vf2", prompt: "A ______________ (rộng lớn) area of the forest was destroyed by the fire.", accepted: ["vast"], correct: "vast", explanation: "<b>vast</b> (adj) = rộng lớn." },
      { id: "vf3", prompt: "Fishermen depend on the sea as a means of ______________ (kế sinh nhai).", accepted: ["livelihood"], correct: "livelihood", explanation: "<b>livelihood</b> (n) = kế sinh nhai." },
      { id: "vf4", prompt: "People here have a lower ______________ (mức sống) than those in big cities.", accepted: ["standard of living"], correct: "standard of living", explanation: "<b>standard of living</b> (n phr) = mức sống." },
      { id: "vf5", prompt: "Everyone in the remote village was incredibly ______________ (thân thiện, hiếu khách).", accepted: ["welcoming"], correct: "welcoming", explanation: "<b>welcoming</b> (adj) = thân thiện, hiếu khách." },
      { id: "vf6", prompt: "Villagers organize festivals ______________ (thờ cúng) the village god.", accepted: ["worshipping", "worshiping"], correct: "worshipping", explanation: "<b>worship</b> (v) = thờ cúng, tôn thờ." }
    ],
    matching: {
      left: ["beehive", "mountainous", "remote", "communal", "hunting", "flood"],
      right: ["tổ ong", "nhiều núi", "xa xôi, hẻo lánh", "thuộc về cộng đồng", "săn bắn", "lũ lụt"],
      correctMap: [0, 1, 2, 3, 4, 5]
    },
    chooseWord: [
      { id: "cw1", prompt: "\"I am sorry for any ______ caused by our late payment.\" (CONVENIENT)", options: { A: "convenient", B: "convenience", C: "inconvenience", D: "inconvenient" }, correct: "C", explanation: "Cần danh từ mang nghĩa phủ định → convenient (adj) → <b>inconvenience</b> (n)." },
      { id: "cw2", prompt: "\"We enjoyed the ______ of the countryside.\" (PEACEFUL)", options: { A: "peaceful", B: "peacefulness", C: "peacefully", D: "peace" }, correct: "B", explanation: "Cần danh từ làm tân ngữ của \"enjoyed\" → peaceful (adj) → <b>peacefulness</b> (n)." },
      { id: "cw3", prompt: "\"This trip gave us a deeper ______ for village life.\" (APPRECIATE)", options: { A: "appreciate", B: "appreciative", C: "appreciation", D: "appreciatively" }, correct: "C", explanation: "Cần danh từ sau \"deeper\" → appreciate (v) → <b>appreciation</b> (n)." }
    ],
    wordMeaning: [
      { id: "wm1", prompt: "What does 'remote' mean?", options: { A: "gần trung tâm", B: "xa xôi, hẻo lánh", C: "đông đúc", D: "hiện đại" }, correct: "B", explanation: "remote (adj) = xa xôi, hẻo lánh." },
      { id: "wm2", prompt: "What does 'livelihood' mean?", options: { A: "kế sinh nhai", B: "kỳ nghỉ", C: "lễ hội", D: "sức khỏe" }, correct: "A", explanation: "livelihood (n) = kế sinh nhai." },
      { id: "wm3", prompt: "What does 'communal' mean?", options: { A: "riêng tư", B: "thuộc về cộng đồng, chung", C: "hiện đại", D: "cổ kính" }, correct: "B", explanation: "communal (adj) = thuộc về cộng đồng, chung." }
    ],
    wordForm: [
      { id: "wf1", prompt: "Living in the countryside is less (POLLUTE) ______________ than living in cities.", accepted: ["polluted"], correct: "polluted", explanation: "Cần tính từ → pollute (v) → <b>polluted</b> (adj)." },
      { id: "wf2", prompt: "We should support the (DEVELOP) ______________ of local traditions.", accepted: ["development"], correct: "development", explanation: "Cần danh từ → develop (v) → <b>development</b> (n)." },
      { id: "wf3", prompt: "The trip gave us a deeper (APPRECIATE) ______________ for rural life.", accepted: ["appreciation"], correct: "appreciation", explanation: "Cần danh từ → appreciate (v) → <b>appreciation</b> (n)." }
    ]
  },

  // ---------------------------------------------------------
  // PART 2 — GRAMMAR REVIEW & PRACTICE
  // ---------------------------------------------------------
  grammar: [
    {
      id: "g1", name: "better than ⇄ not ... as well as",
      usage: "\"X + V + better than Y\" (X làm gì tốt hơn Y) có thể diễn đạt lại theo hướng ngược lại bằng \"Y + V + not as well as X\" (Y làm không tốt bằng X) — đảo vị trí hai đối tượng so sánh.",
      formulas: [
        "X + V + better than + Y.  →  Y + V + not as well as + X.",
        "Sunny sings the song better than Jessie does. → Jessie does not sing the song as well as Sunny (does)."
      ],
      signals: ["better than", "not as well as"],
      examples: [
        { en: "Sunny sings the song better than Jessie does.", vi: "Sunny hát bài hát hay hơn Jessie." },
        { en: "Jessie does not sing the song as well as Sunny.", vi: "Jessie hát bài hát không hay bằng Sunny." }
      ],
      mistakes: [
        { wrong: "Jessie does not sing the song good as Sunny.", right: "Jessie does not sing the song as well as Sunny." }
      ],
      practice: {
        level1: [
          { id: "g1l1a", type: "fillblank", prompt: "Nam plays football better than Long. → Long does not play football ______________ (well) as Nam.", accepted: ["as well"], correct: "as well", explanation: "better than → not as well as (đảo vị trí)." }
        ],
        level2: [
          { id: "g1l2a", type: "fillblank", prompt: "Rewrite: 'Lan draws better than her sister.' → Her sister does not draw ______________ (as well as Lan).", accepted: ["as well as lan"], correct: "as well as Lan", explanation: "better than → not as well as (đảo vị trí)." }
        ],
        level3: [
          { id: "g1l3a", type: "fillblank", prompt: "Rewrite so it keeps the same meaning: 'He speaks English better than his classmates.' → His classmates ______________ (do not speak English as well as he does).", accepted: ["do not speak english as well as he does"], correct: "do not speak English as well as he does", explanation: "better than → not as well as (đảo vị trí)." }
        ]
      }
    },
    {
      id: "g2", name: "the most + adj + ... I've ever seen ⇄ have never seen a more + adj + than",
      usage: "So sánh nhất kết hợp với \"I've ever seen\" (... nhất mà tôi từng thấy) có thể diễn đạt lại bằng cấu trúc phủ định \"have never seen a more + adj + than\" (chưa từng thấy cái gì ... hơn) — cùng mang nghĩa so sánh nhất.",
      formulas: [
        "This is the most + adj + N + I've ever seen (in + place).  →  I have never seen a more + adj + N + than this (one) (in + place).",
        "This is the most luxurious house I've ever seen in this rural village. → I have never seen a more luxurious house than this one in this rural village."
      ],
      signals: ["the most ... I've ever seen", "have never seen a more ... than"],
      examples: [
        { en: "This is the most luxurious house I've ever seen in this rural village.", vi: "Đây là ngôi nhà sang trọng nhất tôi từng thấy ở làng quê này." },
        { en: "I have never seen a more luxurious house than this one in this rural village.", vi: "Tôi chưa từng thấy ngôi nhà nào sang trọng hơn ngôi nhà này ở làng quê này." }
      ],
      mistakes: [
        { wrong: "I have never seen the most luxurious house than this.", right: "I have never seen a more luxurious house than this." }
      ],
      practice: {
        level1: [
          { id: "g2l1a", type: "fillblank", prompt: "This is the most beautiful village I've ever visited. → I have never visited a ______________ (more beautiful) village than this one.", accepted: ["more beautiful"], correct: "more beautiful", explanation: "the most + adj ... I've ever seen → have never seen a more + adj + than." }
        ],
        level2: [
          { id: "g2l2a", type: "fillblank", prompt: "Rewrite: 'This is the tastiest meal I've ever had.' → I have never had a ______________ (more tasty / tastier) meal than this one.", accepted: ["tastier", "more tasty"], correct: "tastier", explanation: "the most + adj ... I've ever had → have never had a more/-er + adj + than." }
        ],
        level3: [
          { id: "g2l3a", type: "fillblank", prompt: "Rewrite so it keeps the same meaning: 'This is the friendliest guide I've ever met.' → I ______________ (have never met a friendlier guide than this one).", accepted: ["have never met a friendlier guide than this one"], correct: "have never met a friendlier guide than this one", explanation: "the most + adj ... I've ever met → have never met a more/-er + adj + than." }
        ]
      }
    },
    {
      id: "g3", name: "cleaner than ⇄ not as clean as / dirtier than",
      usage: "So sánh hơn \"cleaner than\" có thể diễn đạt lại theo hướng ngược lại bằng \"not as clean as\" (so sánh bằng phủ định) hoặc bằng tính từ trái nghĩa \"dirtier / more polluted than\" — khi đảo vị trí hai đối tượng so sánh.",
      formulas: [
        "A + is + cleaner + than + B.  →  B + is not as clean as + A.  /  B + is dirtier / more polluted than + A.",
        "The air in the mountains is cleaner than the air in the lowlands. → The air in the lowlands is not as clean as the air in the mountains."
      ],
      signals: ["cleaner than", "not as clean as", "dirtier than"],
      examples: [
        { en: "The air in the mountains is cleaner than the air in the lowlands.", vi: "Không khí trên núi trong lành hơn không khí ở vùng đất thấp." },
        { en: "The air in the lowlands is not as clean as the air in the mountains.", vi: "Không khí ở vùng đất thấp không trong lành bằng không khí trên núi." }
      ],
      mistakes: [
        { wrong: "The air in the lowlands is not clean as the air in the mountains.", right: "The air in the lowlands is not as clean as the air in the mountains." }
      ],
      practice: {
        level1: [
          { id: "g3l1a", type: "fillblank", prompt: "The lake water is clearer than the river water. → The river water ______________ (isn't) as clear as the lake water.", accepted: ["isn't"], correct: "isn't", explanation: "clearer than → not as clear as (đảo vị trí)." }
        ],
        level2: [
          { id: "g3l2a", type: "fillblank", prompt: "Rewrite: 'The countryside air is fresher than the city air.' → The city air ______________ (isn't as fresh as) the countryside air.", accepted: ["isn't as fresh as"], correct: "isn't as fresh as", explanation: "fresher than → not as fresh as (đảo vị trí)." }
        ],
        level3: [
          { id: "g3l3a", type: "fillblank", prompt: "Rewrite so it keeps the same meaning: 'The highland water is purer than the lowland water.' → The lowland water ______________ (is not as pure as the highland water).", accepted: ["is not as pure as the highland water"], correct: "is not as pure as the highland water", explanation: "purer than → not as pure as (đảo vị trí)." }
        ]
      }
    },
    {
      id: "g4", name: "by V-ing ⇄ If you V, you can...",
      usage: "\"by + V-ing\" (bằng cách làm gì) diễn tả phương tiện/cách thức có thể diễn đạt lại bằng mệnh đề điều kiện loại 1: \"If you + V, you can...\" — cùng nêu điều kiện để đạt kết quả.",
      formulas: [
        "S + can + V1 + by + V2-ing.  →  If + S + V2 (hiện tại đơn), + S + can + V1.",
        "You can learn much about rural life by visiting local farms. → If you visit local farms, you can learn much about rural life."
      ],
      signals: ["by V-ing", "If you V, you can"],
      examples: [
        { en: "You can learn much about rural life by visiting local farms.", vi: "Bạn có thể học được nhiều điều về cuộc sống nông thôn bằng cách thăm các nông trại địa phương." },
        { en: "If you visit local farms, you can learn much about rural life.", vi: "Nếu bạn thăm các nông trại địa phương, bạn có thể học được nhiều điều về cuộc sống nông thôn." }
      ],
      mistakes: [
        { wrong: "If you visiting local farms, you can learn much.", right: "If you visit local farms, you can learn much." }
      ],
      practice: {
        level1: [
          { id: "g4l1a", type: "fillblank", prompt: "You can improve your health by doing exercise every day. → If you ______________ (do) exercise every day, you can improve your health.", accepted: ["do"], correct: "do", explanation: "by V-ing → If you V (hiện tại đơn), you can." }
        ],
        level2: [
          { id: "g4l2a", type: "fillblank", prompt: "Rewrite: 'You can save money by growing your own vegetables.' → If you ______________ (grow) your own vegetables, you can save money.", accepted: ["grow"], correct: "grow", explanation: "by V-ing → If you V, you can." }
        ],
        level3: [
          { id: "g4l3a", type: "fillblank", prompt: "Rewrite so it keeps the same meaning: 'You can understand village life better by talking to local people.' → ______________ (If you talk to local people, you can understand village life better).", accepted: ["if you talk to local people, you can understand village life better", "if you talk to local people you can understand village life better"], correct: "If you talk to local people, you can understand village life better.", explanation: "by V-ing → If you V, you can." }
        ]
      }
    },
    {
      id: "g5", name: "Đại từ quan hệ: who (người) ⇄ which (vật)",
      usage: "\"who\" dùng để thay thế cho người làm chủ ngữ/tân ngữ trong mệnh đề quan hệ, còn \"which\" dùng để thay thế cho vật. Cần chọn đúng đại từ quan hệ dựa vào danh từ đứng trước nó.",
      formulas: [
        "N (person) + who + V...",
        "N (thing) + which + V...",
        "He rented a hotel which had a wonderful swimming pool."
      ],
      signals: ["who (người)", "which (vật)"],
      examples: [
        { en: "He rented a hotel which had a wonderful swimming pool.", vi: "Anh ấy thuê một khách sạn có hồ bơi tuyệt đẹp." },
        { en: "He went to see the local doctor, who was a very nice man.", vi: "Anh ấy đến gặp bác sĩ địa phương, người rất tốt bụng." }
      ],
      mistakes: [
        { wrong: "He rented a hotel who had a swimming pool.", right: "He rented a hotel which had a swimming pool." }
      ],
      practice: {
        level1: [
          { id: "g5l1a", type: "fillblank", prompt: "This is the village ______________ (who/which) I visited last summer.", accepted: ["which"], correct: "which", explanation: "village là vật → dùng which." }
        ],
        level2: [
          { id: "g5l2a", type: "fillblank", prompt: "The doctor, ______________ (who/which) I saw yesterday, gave me some medicine.", accepted: ["who"], correct: "who", explanation: "doctor là người → dùng who." }
        ],
        level3: [
          { id: "g5l3a", type: "fillblank", prompt: "The farm, ______________ (who/which) belongs to my uncle, is very large.", accepted: ["which"], correct: "which", explanation: "farm là vật → dùng which." }
        ]
      }
    }
  ],

  // ---------------------------------------------------------
  // PART 3 — READING PRACTICE
  // ---------------------------------------------------------
  reading: {
    passage: "With the habit of working in teams and being helpful to one another, villagers usually earn their living from farming, raising livestock and making handicrafts. They live in a small community with a temple or a <mark data-w=\"communal\">communal</mark> cultural house where great events, such as festivals <mark data-w=\"worshipping\">worshipping</mark> the village god and traditional games are organized. Villagers in the Southern usually live in houses lined up along central road and built on <mark data-w=\"stilts\">stilts</mark> to keep above flood waters. Along the coastal lines, fishermen depend on the sea as a means of <mark data-w=\"livelihood\">livelihood</mark>. In the Central of Vietnam, a place suffering lots of natural disasters all the year round, citizens tend to be more studious and hard-working than those in regions with <mark data-w=\"favourable\">favourable</mark> conditions. People in the central highlands and the northern mountains live by growing rice, rubber trees, coffee and tea as well as <mark data-w=\"hunting\">hunting</mark>.",
    vocabInContext: {
      communal: "thuộc về cộng đồng, chung",
      worshipping: "thờ cúng, tôn thờ",
      stilts: "cột nhà sàn",
      livelihood: "kế sinh nhai",
      favourable: "thuận lợi",
      hunting: "săn bắn"
    },
    translation: "Với thói quen làm việc theo nhóm và giúp đỡ lẫn nhau, người dân làng thường kiếm sống bằng nghề nông, chăn nuôi gia súc và làm đồ thủ công. Họ sống trong một cộng đồng nhỏ với một ngôi đền hoặc nhà văn hóa chung, nơi các sự kiện lớn như lễ hội thờ cúng thần làng và các trò chơi truyền thống được tổ chức. Người dân làng ở miền Nam thường sống trong những ngôi nhà xếp dọc theo con đường chính và được xây trên cột nhà sàn để tránh nước lũ. Dọc theo vùng ven biển, ngư dân dựa vào biển như một phương tiện kiếm sống. Ở miền Trung Việt Nam, nơi chịu nhiều thiên tai quanh năm, người dân có xu hướng chăm chỉ và cần cù hơn so với những vùng có điều kiện thuận lợi. Người dân ở vùng cao nguyên miền Trung và miền núi phía Bắc sống bằng nghề trồng lúa, cao su, cà phê và chè cũng như săn bắn.",
    practice: [
      { id: "r1", type: "truefalse", prompt: "Villagers generally prefer to work alone rather than in groups.", correct: "False", explanation: "Sai. Bài đọc: 'the habit of working in teams and being helpful to one another.'" },
      { id: "r2", type: "truefalse", prompt: "Festivals and traditional games are held in temples or communal cultural houses.", correct: "True", explanation: "Bài đọc: 'a temple or a communal cultural house where great events... are organized.'" },
      { id: "r3", type: "truefalse", prompt: "People in the Southern region build houses on stilts to protect themselves from floods.", correct: "True", explanation: "Bài đọc: 'built on stilts to keep above flood waters.'" },
      { id: "r4", type: "truefalse", prompt: "The Central region of Vietnam has very good weather conditions throughout the year.", correct: "False", explanation: "Sai. Bài đọc: 'a place suffering lots of natural disasters all the year round.'" },
      { id: "r5", type: "mcq", prompt: "What is the main idea of the passage?", options: { A: "The different ways of making a living in coastal areas of Vietnam.", B: "The diverse lifestyles and occupations of people in different regions of Vietnam.", C: "The historical importance of communal cultural houses in Vietnamese villages.", D: "The difficulties faced by people living in the central highlands and northern mountains." }, correct: "B", explanation: "Bài đọc mô tả cách sinh sống khác nhau của người dân ở nhiều vùng miền Việt Nam." },
      { id: "r6", type: "mcq", prompt: "Which of the following is NOT true according to the passage?", options: { A: "Southern villagers often build their houses along a central road.", B: "Central Vietnamese people are often very studious because they face many natural disasters.", C: "Highland and northern mountain residents only get their food and income from hunting.", D: "Coastal fishermen rely entirely on farming to earn their living." }, correct: "D", explanation: "Bài đọc nói ngư dân dựa vào biển, không phải nông nghiệp, để kiếm sống." },
      { id: "r7", type: "fillblank", prompt: "Find the word in the passage that means 'thuận lợi' (adj).", accepted: ["favourable", "favorable"], correct: "favourable", explanation: "'regions with favourable conditions' — favourable (adj) = thuận lợi." },
      { id: "r8", type: "mcq", prompt: "According to the passage, how do people in the central highlands and northern mountains live?", options: { A: "By growing rice, rubber trees, coffee and tea as well as hunting.", B: "By fishing along the coastal lines.", C: "By working in factories in big cities.", D: "By building houses on stilts." }, correct: "A", explanation: "Bài đọc: 'People in the central highlands and the northern mountains live by growing rice, rubber trees, coffee and tea as well as hunting.'" },
      { id: "r9", type: "truefalse", prompt: "According to the passage, villagers usually earn their living only from farming.", correct: "False", explanation: "Sai. Bài đọc: 'villagers usually earn their living from farming, raising livestock <b>and making handicrafts</b>' — không chỉ từ nông nghiệp." }
    ]
  },

  // ---------------------------------------------------------
  // PART 4 — TRANSLATION PRACTICE
  // ---------------------------------------------------------
  translation: [
    { id: "t1", en: "Last summer, Thanh went on a holiday for two weeks to the island of Cat Ba.", suggested: "Mùa hè năm ngoái, Thanh đã đi nghỉ mát hai tuần trên đảo Cát Bà.", notes: "Cụm 'go on a holiday' (đi nghỉ mát) + 'for + khoảng thời gian'." },
    { id: "t2", en: "He rented a hotel which had a wonderful swimming pool and beautiful views of the sea.", suggested: "Anh ấy thuê một khách sạn có hồ bơi tuyệt đẹp và tầm nhìn ra biển đẹp.", notes: "Mệnh đề quan hệ 'which had...' bổ nghĩa cho 'a hotel' (vật)." },
    { id: "t3", en: "With the habit of working in teams, villagers usually earn their living from farming and raising livestock.", suggested: "Với thói quen làm việc theo nhóm, người dân làng thường kiếm sống bằng nghề nông và chăn nuôi gia súc.", notes: "Cụm giới từ 'With the habit of...' mở đầu câu chỉ nguyên nhân/cách thức." },
    { id: "t4", en: "Fishermen depend on the sea as a means of livelihood.", suggested: "Ngư dân dựa vào biển như một phương tiện kiếm sống.", notes: "Cụm 'depend on sth as a means of livelihood' (dựa vào điều gì để kiếm sống)." },
    { id: "t5", en: "Citizens in the Central of Vietnam tend to be more studious and hard-working than those in regions with favourable conditions.", suggested: "Người dân ở miền Trung Việt Nam có xu hướng chăm chỉ và cần cù hơn những người ở các vùng có điều kiện thuận lợi.", notes: "So sánh hơn 'more ... than' + 'those in + place' (những người ở...)." }
  ],

  // ---------------------------------------------------------
  // PART 5 — SENTENCE TRANSFORMATION PRACTICE
  // ---------------------------------------------------------
  transformation: [
    {
      id: "tr1", name: "better than ⇄ not ... as well as",
      formula: "X + V + better than + Y  →  Y + V + not as well as + X",
      example: { before: "Sunny sings the song better than Jessie does.", after: "Jessie does not sing the song as well as Sunny." },
      practice: [
        { id: "tr1p1", type: "fillblank", prompt: "Minh plays chess better than his friend. → His friend does not play chess ______________ (as well as) Minh.", accepted: ["as well as"], correct: "as well as", explanation: "better than → not as well as (đảo vị trí)." },
        { id: "tr1p2", type: "fillblank", prompt: "Rewrite: 'Hoa dances better than her sister.' → Her sister ______________ (does not dance as well as Hoa).", accepted: ["does not dance as well as hoa"], correct: "does not dance as well as Hoa", explanation: "better than → not as well as (đảo vị trí)." }
      ]
    },
    {
      id: "tr2", name: "the most + adj ... I've ever seen ⇄ have never seen a more + adj + than",
      formula: "This is the most + adj + N + I've ever seen  →  I have never seen a more + adj + N + than this one",
      example: { before: "This is the most luxurious house I've ever seen in this rural village.", after: "I have never seen a more luxurious house than this one in this rural village." },
      practice: [
        { id: "tr2p1", type: "fillblank", prompt: "This is the most peaceful place I've ever visited. → I have never visited a ______________ (more peaceful) place than this one.", accepted: ["more peaceful"], correct: "more peaceful", explanation: "the most + adj ... I've ever visited → have never visited a more + adj + than." },
        { id: "tr2p2", type: "fillblank", prompt: "This is the most delicious meal I've ever had. → I have never had a ______________ (more delicious) meal than this one.", accepted: ["more delicious"], correct: "more delicious", explanation: "the most + adj ... I've ever had → have never had a more + adj + than." }
      ]
    },
    {
      id: "tr3", name: "cleaner than ⇄ not as clean as",
      formula: "A + is cleaner than + B  →  B + is not as clean as + A",
      example: { before: "The air in the mountains is cleaner than the air in the lowlands.", after: "The air in the lowlands is not as clean as the air in the mountains." },
      practice: [
        { id: "tr3p1", type: "fillblank", prompt: "The village water is purer than the city water. → The city water ______________ (isn't) as pure as the village water.", accepted: ["isn't"], correct: "isn't", explanation: "purer than → not as pure as (đảo vị trí)." },
        { id: "tr3p2", type: "fillblank", prompt: "Rewrite: 'The mountain air is fresher than the town air.' → The town air ______________ (isn't as fresh as) the mountain air.", accepted: ["isn't as fresh as"], correct: "isn't as fresh as", explanation: "fresher than → not as fresh as (đảo vị trí)." }
      ]
    },
    {
      id: "tr4", name: "by V-ing ⇄ If you V, you can...",
      formula: "S + can + V1 + by + V2-ing  →  If + S + V2, + S + can + V1",
      example: { before: "You can learn much about rural life by visiting local farms.", after: "If you visit local farms, you can learn much about rural life." },
      practice: [
        { id: "tr4p1", type: "fillblank", prompt: "You can make new friends by joining a local club. → If you ______________ (join) a local club, you can make new friends.", accepted: ["join"], correct: "join", explanation: "by V-ing → If you V, you can." },
        { id: "tr4p2", type: "fillblank", prompt: "Rewrite: 'You can protect the environment by planting more trees.' → If you ______________ (plant) more trees, you can protect the environment.", accepted: ["plant"], correct: "plant", explanation: "by V-ing → If you V, you can." }
      ]
    }
  ],

  // ---------------------------------------------------------
  // PART 6 — QUICK REVIEW (mini test, all skills)
  // ---------------------------------------------------------
  quickReview: [
    { id: "q1", cat: "Vocabulary", type: "mcq", prompt: "'Livelihood' means:", options: { A: "kế sinh nhai", B: "kỳ nghỉ", C: "lễ hội", D: "cộng đồng" }, correct: "A", explanation: "livelihood (n) = kế sinh nhai." },
    { id: "q2", cat: "Vocabulary", type: "mcq", prompt: "'Remote' means:", options: { A: "gần trung tâm", B: "xa xôi, hẻo lánh", C: "đông đúc", D: "hiện đại" }, correct: "B", explanation: "remote (adj) = xa xôi, hẻo lánh." },
    { id: "q3", cat: "Vocabulary", type: "fillblank", prompt: "Houses in the South are built on ______________ (cột nhà sàn) to keep above flood waters.", accepted: ["stilts"], correct: "stilts", explanation: "stilts (n) = cột nhà sàn." },
    { id: "q4", cat: "Grammar", type: "mcq", prompt: "Sunny sings the song better than Jessie does. → Jessie does not sing the song ______ well as Sunny.", options: { A: "as", B: "so", C: "than", D: "more" }, correct: "A", explanation: "not as well as là cấu trúc so sánh bằng phủ định." },
    { id: "q5", cat: "Grammar", type: "mcq", prompt: "This is the most luxurious house I've ever seen. → I have never seen a ______ luxurious house than this one.", options: { A: "more", B: "most", C: "as", D: "very" }, correct: "A", explanation: "have never seen a more + adj + than." },
    { id: "q6", cat: "Grammar", type: "fillblank", prompt: "The air in the mountains is cleaner than the air in the lowlands. → The air in the lowlands is not ______________ clean as the air in the mountains.", accepted: ["as"], correct: "as", explanation: "not as + adj + as." },
    { id: "q7", cat: "Grammar", type: "fillblank", prompt: "You can learn much about rural life by visiting local farms. → If you ______________ (visit) local farms, you can learn much about rural life.", accepted: ["visit"], correct: "visit", explanation: "by V-ing → If you V, you can." },
    { id: "q8", cat: "Reading", type: "truefalse", prompt: "Villagers generally prefer to work alone rather than in groups.", correct: "False", explanation: "Sai. Bài đọc: villagers có thói quen làm việc theo nhóm." },
    { id: "q9", cat: "Reading", type: "truefalse", prompt: "The Central region of Vietnam has very good weather conditions throughout the year.", correct: "False", explanation: "Sai. Bài đọc: miền Trung chịu nhiều thiên tai quanh năm." },
    { id: "q10", cat: "Reading", type: "mcq", prompt: "What is the main idea of the villagers passage?", options: { A: "The diverse lifestyles and occupations of people in different regions of Vietnam.", B: "The best fishing spots along the Vietnamese coast.", C: "How to build a house on stilts.", D: "The history of Vietnamese festivals." }, correct: "A", explanation: "Bài đọc mô tả lối sống và nghề nghiệp đa dạng của người dân các vùng miền Việt Nam." },
    { id: "q11", cat: "Writing", type: "fillblank", prompt: "You can learn much about rural life by visiting local farms. → ______________ (If) you visit local farms, you can learn much.", accepted: ["If"], correct: "If", explanation: "by V-ing → If you V, you can." },
    { id: "q12", cat: "Writing", type: "fillblank", prompt: "Living in the countryside is less ______________ (pollute) than living in cities.", accepted: ["polluted"], correct: "polluted", explanation: "pollute (v) → polluted (adj)." },
    { id: "q13", cat: "Writing", type: "fillblank", prompt: "This is the most luxurious house I've ever seen. → I have never seen a more luxurious house ______________ this one.", accepted: ["than"], correct: "than", explanation: "have never seen a more + adj + than." },
    { id: "q14", cat: "Vocabulary", type: "mcq", prompt: "A ______ area of the forest — more than 1000 hectares — was destroyed.", options: { A: "vast", B: "tiny", C: "small", D: "narrow" }, correct: "A", explanation: "vast (adj) = rộng lớn." }
  ]
};
