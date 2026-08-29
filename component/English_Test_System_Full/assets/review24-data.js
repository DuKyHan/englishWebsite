const REVIEW = {
  id: "test24",
  testFile: "test24.html",
  grade: "Grade 9 — Global Success",
  unit: "Unit 6: Vietnamese lifestyle: then and now",
  title: "Knowledge Review — Unit 6, Practice Test 2",

  // ---------------------------------------------------------
  // PART 1 — VOCABULARY REVIEW
  // ---------------------------------------------------------
  vocabulary: [
    { word: "balanced diet", pos: "n phr", ipa: "/ˈbælənst ˈdaɪət/", meaning: "chế độ ăn cân bằng", example: "We maintain a healthy lifestyle with regular exercise and a balanced diet.", exampleVi: "Chúng tôi duy trì lối sống lành mạnh với việc tập thể dục đều đặn và chế độ ăn cân bằng." },
    { word: "different from", pos: "phr", ipa: "/ˈdɪfrənt frɒm/", meaning: "khác với", example: "Her taste in music is quite different from mine.", exampleVi: "Gu âm nhạc của cô ấy khá khác với của tôi." },
    { word: "depend on", pos: "phr v", ipa: "/dɪˈpend ɒn/", meaning: "phụ thuộc vào", example: "The success of our school play depends on your cooperation.", exampleVi: "Sự thành công của vở kịch trường phụ thuộc vào sự hợp tác của các bạn." },
    { word: "democratic", pos: "adj", ipa: "/ˌdeməˈkrætɪk/", meaning: "dân chủ", example: "I believe in a democratic relationship where children can share ideas.", exampleVi: "Tôi tin vào một mối quan hệ dân chủ, nơi con cái có thể chia sẻ ý kiến." },
    { word: "family-oriented", pos: "adj", ipa: "/ˈfæməli ˈɔːrientɪd/", meaning: "hướng đến gia đình", example: "Most events here are family-oriented, designed for the whole family to enjoy.", exampleVi: "Hầu hết các hoạt động ở đây đều hướng đến gia đình, được thiết kế cho cả nhà cùng thưởng thức." },
    { word: "nuclear family", pos: "n phr", ipa: "/ˈnjuːkliər ˈfæməli/", meaning: "gia đình hạt nhân (hai thế hệ)", example: "The nuclear family is the most common family structure in Viet Nam today.", exampleVi: "Gia đình hạt nhân là cấu trúc gia đình phổ biến nhất ở Việt Nam ngày nay." },
    { word: "wider kin", pos: "n phr", ipa: "/ˈwaɪdər kɪn/", meaning: "họ hàng rộng hơn (ngoài gia đình hạt nhân)", example: "The nuclear family always receives support from wider families and wider kin.", exampleVi: "Gia đình hạt nhân luôn nhận được sự hỗ trợ từ gia đình lớn hơn và họ hàng." },
    { word: "indulgence", pos: "n", ipa: "/ɪnˈdʌldʒəns/", meaning: "sự nuông chiều", example: "Parents respect their children's independence out of their love and indulgence.", exampleVi: "Cha mẹ tôn trọng sự độc lập của con cái vì tình yêu thương và sự nuông chiều." },
    { word: "distinguish", pos: "v", ipa: "/dɪˈstɪŋɡwɪʃ/", meaning: "phân biệt, tạo nên sự khác biệt", example: "This traditional cultural feature distinguishes itself from that of modern western societies.", exampleVi: "Nét văn hóa truyền thống này tạo nên sự khác biệt so với các xã hội phương Tây hiện đại." },
    { word: "exhilarating", pos: "adj", ipa: "/ɪɡˈzɪləreɪtɪŋ/", meaning: "thú vị, phấn khích", example: "Many people believe that traditional games are very exhilarating.", exampleVi: "Nhiều người tin rằng các trò chơi truyền thống rất thú vị và phấn khích." },
    { word: "popularity", pos: "n", ipa: "/ˌpɒpjuˈlærəti/", meaning: "sự phổ biến", example: "The popularity of social media has changed how we communicate.", exampleVi: "Sự phổ biến của mạng xã hội đã thay đổi cách chúng ta giao tiếp." },
    { word: "natural materials", pos: "n phr", ipa: "/ˈnætʃrəl məˈtɪəriəlz/", meaning: "vật liệu tự nhiên", example: "They are looking for natural materials to build a traditional house.", exampleVi: "Họ đang tìm kiếm vật liệu tự nhiên để xây một ngôi nhà truyền thống." },
    { word: "surprisingly", pos: "adv", ipa: "/sərˈpraɪzɪŋli/", meaning: "đáng ngạc nhiên là", example: "Surprisingly, many traditions are still kept alive by the young generation.", exampleVi: "Đáng ngạc nhiên là, nhiều truyền thống vẫn được giới trẻ gìn giữ." },
    { word: "impressive", pos: "adj", ipa: "/ɪmˈpresɪv/", meaning: "ấn tượng", example: "He gave an impressive presentation about life in the past.", exampleVi: "Anh ấy đã có một bài thuyết trình ấn tượng về cuộc sống trong quá khứ." },
    { word: "cooperation", pos: "n", ipa: "/koʊˌɒpəˈreɪʃn/", meaning: "sự hợp tác", example: "We need the cooperation of everyone to preserve our heritage.", exampleVi: "Chúng ta cần sự hợp tác của mọi người để bảo tồn di sản." },
    { word: "revolutionize", pos: "v", ipa: "/ˌrevəˈluːʃənaɪz/", meaning: "cách mạng hóa, thay đổi hoàn toàn", example: "The rise of electronic devices has revolutionized the way children spend their leisure time.", exampleVi: "Sự trỗi dậy của các thiết bị điện tử đã thay đổi hoàn toàn cách trẻ em dành thời gian rảnh rỗi." },
    { word: "leisure time", pos: "n phr", ipa: "/ˈliːʒər taɪm/", meaning: "thời gian rảnh rỗi", example: "Today, many young people spend their leisure time engaging with video games and social media.", exampleVi: "Ngày nay, nhiều bạn trẻ dành thời gian rảnh rỗi để chơi trò chơi điện tử và mạng xã hội." },
    { word: "social skills", pos: "n phr", ipa: "/ˈsoʊʃl skɪlz/", meaning: "kỹ năng xã hội", example: "The shift from outdoor to indoor play has resulted in fewer opportunities to develop social skills.", exampleVi: "Sự chuyển dịch từ vui chơi ngoài trời sang trong nhà đã làm giảm cơ hội phát triển kỹ năng xã hội." }
  ],

  vocabPractice: {
    mcq: [
      { id: "vp1", prompt: "Choose the word that means 'dân chủ':", options: { A: "democratic", B: "traditional", C: "electronic", D: "impressive" }, correct: "A", explanation: "<b>democratic</b> (adj) = dân chủ." },
      { id: "vp2", prompt: "Choose the phrase that means 'hướng đến gia đình':", options: { A: "family-oriented", B: "nuclear family", C: "wider kin", D: "leisure time" }, correct: "A", explanation: "<b>family-oriented</b> (adj) = hướng đến gia đình." },
      { id: "vp3", prompt: "\"The success of our school play depends ______ your cooperation.\"", options: { A: "on", B: "in", C: "for", D: "with" }, correct: "A", explanation: "Cụm cố định \"<b>depend on</b>\" (phụ thuộc vào)." },
      { id: "vp4", prompt: "Choose the word that means 'sự phổ biến':", options: { A: "popularity", B: "cooperation", C: "indulgence", D: "leisure" }, correct: "A", explanation: "<b>popularity</b> (n) = sự phổ biến." },
      { id: "vp5", prompt: "\"The rise of electronic devices has ______ the way children spend their leisure time.\"", options: { A: "revolutionized", B: "distinguished", C: "depended", D: "surprised" }, correct: "A", explanation: "<b>revolutionize</b> (v) = cách mạng hóa, thay đổi hoàn toàn." },
      { id: "vp6", prompt: "Choose the phrase that means 'kỹ năng xã hội':", options: { A: "social skills", B: "family values", C: "natural materials", D: "balanced diet" }, correct: "A", explanation: "<b>social skills</b> (n phr) = kỹ năng xã hội." }
    ],
    fillblank: [
      { id: "vf1", prompt: "I believe in a ______________ (dân chủ) relationship where children can share ideas.", accepted: ["democratic"], correct: "democratic", explanation: "<b>democratic</b> (adj) = dân chủ." },
      { id: "vf2", prompt: "Most events here are ______________ (hướng đến gia đình), designed for the whole family to enjoy.", accepted: ["family-oriented"], correct: "family-oriented", explanation: "<b>family-oriented</b> (adj) = hướng đến gia đình." },
      { id: "vf3", prompt: "The nuclear family always receives support and assistance from ______________ (họ hàng rộng hơn).", accepted: ["wider kin"], correct: "wider kin", explanation: "<b>wider kin</b> (n phr) = họ hàng rộng hơn." },
      { id: "vf4", prompt: "Parents respect their children's independence out of their love and ______________ (sự nuông chiều).", accepted: ["indulgence"], correct: "indulgence", explanation: "<b>indulgence</b> (n) = sự nuông chiều." },
      { id: "vf5", prompt: "This traditional cultural feature ______________ (tạo nên sự khác biệt) itself from that of modern western societies.", accepted: ["distinguishes"], correct: "distinguishes", explanation: "<b>distinguish</b> (v) = phân biệt, tạo nên sự khác biệt." },
      { id: "vf6", prompt: "Today, many young people spend their ______________ (thời gian rảnh rỗi) engaging with video games and social media.", accepted: ["leisure time"], correct: "leisure time", explanation: "<b>leisure time</b> (n phr) = thời gian rảnh rỗi." }
    ],
    matching: {
      left: ["depend on", "distinguish", "indulgence", "revolutionize", "leisure time", "social skills"],
      right: ["phụ thuộc vào", "phân biệt, tạo nên sự khác biệt", "sự nuông chiều", "cách mạng hóa, thay đổi hoàn toàn", "thời gian rảnh rỗi", "kỹ năng xã hội"],
      correctMap: [0, 1, 2, 3, 4, 5]
    },
    chooseWord: [
      { id: "cw1", prompt: "\"Many people believe that traditional games are very ______.\" (EXHILARATE)", options: { A: "exhilarate", B: "exhilarated", C: "exhilarating", D: "exhilaration" }, correct: "C", explanation: "Cần tính từ sau \"are very\" → exhilarate (v) → <b>exhilarating</b> (adj)." },
      { id: "cw2", prompt: "\"He gave an ______ presentation about life in the past.\" (IMPRESS)", options: { A: "impress", B: "impressed", C: "impressive", D: "impression" }, correct: "C", explanation: "Cần tính từ trước danh từ \"presentation\" → impress (v) → <b>impressive</b> (adj)." },
      { id: "cw3", prompt: "\"We need the ______ of everyone to preserve our heritage.\" (COOPERATE)", options: { A: "cooperate", B: "cooperative", C: "cooperatively", D: "cooperation" }, correct: "D", explanation: "Cần danh từ sau \"the\" → cooperate (v) → <b>cooperation</b> (n)." }
    ],
    wordMeaning: [
      { id: "wm1", prompt: "What does 'democratic' mean?", options: { A: "dân chủ", B: "độc đoán", C: "nghiêm khắc", D: "truyền thống" }, correct: "A", explanation: "democratic (adj) = dân chủ." },
      { id: "wm2", prompt: "What does 'revolutionize' mean?", options: { A: "cách mạng hóa, thay đổi hoàn toàn", B: "giữ nguyên như cũ", C: "làm chậm lại", D: "phá hủy hoàn toàn" }, correct: "A", explanation: "revolutionize (v) = cách mạng hóa, thay đổi hoàn toàn." },
      { id: "wm3", prompt: "What does 'indulgence' mean?", options: { A: "sự nuông chiều", B: "sự trừng phạt", C: "sự xa cách", D: "sự nghiêm khắc" }, correct: "A", explanation: "indulgence (n) = sự nuông chiều." }
    ],
    wordForm: [
      { id: "wf1", prompt: "The ______________ (POPULAR) of social media has changed how we communicate.", accepted: ["popularity"], correct: "popularity", explanation: "popular (adj) → popularity (n)." },
      { id: "wf2", prompt: "______________ (SURPRISE), many traditions are still kept alive by the young generation.", accepted: ["surprisingly"], correct: "Surprisingly", explanation: "surprise (n/v) → surprisingly (adv)." },
      { id: "wf3", prompt: "They are looking for ______________ (NATURE) materials to build a traditional house.", accepted: ["natural"], correct: "natural", explanation: "nature (n) → natural (adj)." }
    ]
  },

  // ---------------------------------------------------------
  // PART 2 — GRAMMAR REVIEW & PRACTICE
  // ---------------------------------------------------------
  grammar: [
    {
      id: "g1", name: "You should + V (lời khuyên) ⇄ advise sb + to V",
      usage: "Lời khuyên dùng \"should\" có thể viết lại bằng động từ \"advise\" theo cấu trúc \"advise + O + to V\" (khuyên ai làm gì).",
      formulas: [
        "You should + V.  →  I advise + O + to V.",
        "You should research how life has changed in the past 20 years. → I advise you to research how life has changed in the past 20 years."
      ],
      signals: ["You should + V", "advise sb + to V"],
      examples: [
        { en: "You should research how life has changed in the past 20 years.", vi: "Bạn nên nghiên cứu về việc cuộc sống đã thay đổi như thế nào trong 20 năm qua." },
        { en: "I advise you to research how life has changed in the past 20 years.", vi: "Tôi khuyên bạn nên nghiên cứu về việc cuộc sống đã thay đổi như thế nào trong 20 năm qua." }
      ],
      mistakes: [
        { wrong: "I advise you research how life has changed.", right: "I advise you to research how life has changed. (cần \"to V\" sau \"advise + O\")" }
      ],
      practice: {
        level1: [
          { id: "g1l1a", type: "fillblank", prompt: "You should practise speaking English every day. → I advise you ______________ (to practise) speaking English every day.", accepted: ["to practise", "to practice"], correct: "to practise", explanation: "You should + V → advise sb + to V." }
        ],
        level2: [
          { id: "g1l2a", type: "fillblank", prompt: "Rewrite: 'You should keep some traditional customs alive.' → I advise you ______________ (to keep) some traditional customs alive.", accepted: ["to keep"], correct: "to keep", explanation: "You should + V → advise sb + to V." }
        ],
        level3: [
          { id: "g1l3a", type: "fillblank", prompt: "Rewrite so it keeps the same meaning: 'You should spend more time with your grandparents.' → ______________ (I advise you to spend more time with your grandparents).", accepted: ["i advise you to spend more time with your grandparents"], correct: "I advise you to spend more time with your grandparents", explanation: "You should + V → advise sb + to V." }
        ]
      }
    },
    {
      id: "g2", name: "S1 + V(quá khứ đơn) + while + S2 + was/were + V-ing ⇄ When + S1 + V(quá khứ đơn), S2 + was/were + V-ing",
      usage: "Khi một hành động ngắn (quá khứ đơn) xen vào một hành động đang diễn ra (quá khứ tiếp diễn), câu có thể bắt đầu bằng \"while\" (đặt trước hành động đang diễn ra) hoặc bằng \"When\" (đặt trước hành động ngắn) — ý nghĩa không đổi.",
      formulas: [
        "S1 + V(quá khứ đơn) + while + S2 + was/were + V-ing.  →  When + S1 + V(quá khứ đơn), S2 + was/were + V-ing.",
        "A burglar broke into the building while the guard was sleeping. → When the burglar broke into the building, the guard was sleeping."
      ],
      signals: ["quá khứ đơn + while + was/were V-ing", "When + quá khứ đơn, was/were V-ing"],
      examples: [
        { en: "A burglar broke into the building while the guard was sleeping.", vi: "Một tên trộm đã đột nhập vào tòa nhà trong khi người bảo vệ đang ngủ." },
        { en: "When the burglar broke into the building, the guard was sleeping.", vi: "Khi tên trộm đột nhập vào tòa nhà, người bảo vệ đang ngủ." }
      ],
      mistakes: [
        { wrong: "When the burglar broke into the building, the guard slept.", right: "When the burglar broke into the building, the guard was sleeping. (cần quá khứ tiếp diễn cho hành động đang xảy ra)" }
      ],
      practice: {
        level1: [
          { id: "g2l1a", type: "fillblank", prompt: "The phone rang while she was cooking dinner. → When the phone rang, she ______________ (was cooking) dinner.", accepted: ["was cooking"], correct: "was cooking", explanation: "while + was/were V-ing → When + quá khứ đơn, was/were V-ing." }
        ],
        level2: [
          { id: "g2l2a", type: "fillblank", prompt: "Rewrite: 'The lights went out while they were watching a film.' → When the lights went out, they ______________ (were watching) a film.", accepted: ["were watching"], correct: "were watching", explanation: "while + was/were V-ing → When + quá khứ đơn, was/were V-ing." }
        ],
        level3: [
          { id: "g2l3a", type: "fillblank", prompt: "Rewrite so it keeps the same meaning: 'It started to rain while the children were playing outside.' → ______________ (When it started to rain, the children were playing outside).", accepted: ["when it started to rain, the children were playing outside"], correct: "When it started to rain, the children were playing outside", explanation: "while + was/were V-ing → When + quá khứ đơn, was/were V-ing." }
        ]
      }
    },
    {
      id: "g3", name: "N1 + matters more than + N2 ⇄ S + prefer + N1 + to + N2",
      usage: "\"N1 + matters more than + N2\" (N1 quan trọng hơn N2) có nghĩa tương đương với \"S + prefer(s) + N1 + to + N2\" (thích N1 hơn N2), khi diễn tả sự ưu tiên/sở thích.",
      formulas: [
        "For + S, + N1 + matters more than + N2.  →  S + prefer(s) + N1 + to + N2.",
        "For many teenagers, comfort in clothing matters more than style. → Many teenagers prefer comfortable clothing to stylish one."
      ],
      signals: ["N1 matters more than N2", "prefer + N1 + to + N2"],
      examples: [
        { en: "For many teenagers, comfort in clothing matters more than style.", vi: "Đối với nhiều thanh thiếu niên, sự thoải mái trong trang phục quan trọng hơn phong cách." },
        { en: "Many teenagers prefer comfortable clothing to stylish one.", vi: "Nhiều thanh thiếu niên thích quần áo thoải mái hơn là thời trang." }
      ],
      mistakes: [
        { wrong: "Many teenagers prefer comfortable clothing than stylish one.", right: "Many teenagers prefer comfortable clothing to stylish one. (dùng \"to\" sau \"prefer\", không dùng \"than\")" }
      ],
      practice: {
        level1: [
          { id: "g3l1a", type: "fillblank", prompt: "For him, quality matters more than price. → He prefers quality ______________ (to) price.", accepted: ["to"], correct: "to", explanation: "N1 matters more than N2 → prefer N1 to N2." }
        ],
        level2: [
          { id: "g3l2a", type: "fillblank", prompt: "Rewrite: 'For most farmers, tradition matters more than modern methods.' → Most farmers prefer tradition ______________ (to) modern methods.", accepted: ["to"], correct: "to", explanation: "N1 matters more than N2 → prefer N1 to N2." }
        ],
        level3: [
          { id: "g3l3a", type: "fillblank", prompt: "Rewrite so it keeps the same meaning: 'For grandma, family time matters more than money.' → ______________ (Grandma prefers family time to money).", accepted: ["grandma prefers family time to money"], correct: "Grandma prefers family time to money", explanation: "N1 matters more than N2 → prefer N1 to N2." }
        ]
      }
    },
    {
      id: "g4", name: "suggest + V-ing ⇄ Why don't we + V (nguyên mẫu)?",
      usage: "\"suggest + V-ing\" (đề nghị làm gì) có thể viết lại bằng câu đề nghị thân mật \"Why don't we + V (nguyên mẫu)?\" — cùng diễn tả một lời gợi ý.",
      formulas: [
        "S + suggested + V-ing.  →  Why don't we + V (nguyên mẫu)?",
        "He suggested seeing the traditional farming tools at the museum. → Why don't we see the traditional farming tools at the museum?"
      ],
      signals: ["suggest + V-ing", "Why don't we + V?"],
      examples: [
        { en: "He suggested seeing the traditional farming tools at the museum.", vi: "Anh ấy đề nghị đi xem các công cụ canh tác truyền thống ở bảo tàng." },
        { en: "Why don't we see the traditional farming tools at the museum?", vi: "Sao chúng ta không đi xem các công cụ canh tác truyền thống ở bảo tàng nhỉ?" }
      ],
      mistakes: [
        { wrong: "Why don't we to see the traditional farming tools?", right: "Why don't we see the traditional farming tools? (dùng động từ nguyên mẫu, không có \"to\", sau \"Why don't we\")" }
      ],
      practice: {
        level1: [
          { id: "g4l1a", type: "fillblank", prompt: "She suggested visiting the old village. → Why don't we ______________ (visit) the old village?", accepted: ["visit"], correct: "visit", explanation: "suggest + V-ing → Why don't we + V nguyên mẫu?" }
        ],
        level2: [
          { id: "g4l2a", type: "fillblank", prompt: "Rewrite: 'They suggested trying the traditional dish.' → Why don't we ______________ (try) the traditional dish?", accepted: ["try"], correct: "try", explanation: "suggest + V-ing → Why don't we + V nguyên mẫu?" }
        ],
        level3: [
          { id: "g4l3a", type: "fillblank", prompt: "Rewrite so it keeps the same meaning: 'He suggested asking grandma about the old customs.' → ______________ (Why don't we ask grandma about the old customs?).", accepted: ["why don't we ask grandma about the old customs"], correct: "Why don't we ask grandma about the old customs?", explanation: "suggest + V-ing → Why don't we + V nguyên mẫu?" }
        ]
      }
    },
    {
      id: "g5", name: "Động từ theo sau là to-V hay V-ing? (decide, agree + to V / suggest + V-ing)",
      usage: "Một số động từ luôn theo sau bởi \"to + V nguyên mẫu\" (decide, agree, want, hope), trong khi một số động từ khác luôn theo sau bởi \"V-ing\" (suggest, enjoy, avoid, consider). Cần ghi nhớ từng động từ đi với dạng nào để dùng đúng.",
      formulas: [
        "decide/agree/want/hope + to + V (nguyên mẫu).",
        "suggest/enjoy/avoid/consider + V-ing.",
        "He decided to change his lifestyle. / He suggested seeing the traditional tools."
      ],
      signals: ["decide/agree + to V", "suggest/enjoy + V-ing"],
      examples: [
        { en: "He decided to change his lifestyle to improve his health.", vi: "Anh ấy quyết định thay đổi lối sống để cải thiện sức khỏe." },
        { en: "I suggested seeing the traditional farming tools there.", vi: "Tôi đề nghị đi xem các công cụ canh tác truyền thống ở đó." }
      ],
      mistakes: [
        { wrong: "He decided changing his lifestyle.", right: "He decided to change his lifestyle. (decide luôn theo sau bởi to-V, không dùng V-ing)" }
      ],
      practice: {
        level1: [
          { id: "g5l1a", type: "fillblank", prompt: "She agreed ______________ (to help) with the family business.", accepted: ["to help"], correct: "to help", explanation: "agree + to V (nguyên mẫu)." }
        ],
        level2: [
          { id: "g5l2a", type: "fillblank", prompt: "Rewrite: 'My father decided (change) his old habits.' → My father decided ______________ (to change) his old habits.", accepted: ["to change"], correct: "to change", explanation: "decide + to V (nguyên mẫu)." }
        ],
        level3: [
          { id: "g5l3a", type: "fillblank", prompt: "Rewrite so it keeps the same meaning using the correct verb pattern: 'The guide suggested (visit) the local market.' → ______________ (The guide suggested visiting the local market).", accepted: ["the guide suggested visiting the local market"], correct: "The guide suggested visiting the local market", explanation: "suggest + V-ing (danh động từ)." }
        ]
      }
    }
  ],

  // ---------------------------------------------------------
  // PART 3 — READING PRACTICE
  // ---------------------------------------------------------
  reading: {
    passage: "There have been changes in family structure and values in Viet Nam because of industrialization and modernization. The Vietnamese family now exists in two major forms: <mark data-w=\"nuclear families\">nuclear families</mark> (two generations) and extended families (from three generations upwards). The nuclear family is the most common. The nuclear family now does not stand on its own, but it always receives support and assistance from wider families (parents, brothers and wider kin). Major basic family relationships have changed positively. Modern values have been selected carefully while traditional values are <mark data-w=\"preserved and developed\">preserved and developed</mark>. Children obey and respect their parents while <mark data-w=\"maintaining their independent ideas\">maintaining their independent ideas</mark> and views. Parents respect their children's independence out of their love and indulgence. The relationship between grandparents and parents is also noticeable. Parents and grandparents tend to live together with their children and grandchildren. This traditional cultural feature <mark data-w=\"distinguishes itself\">distinguishes itself</mark> from that of modern western societies. Statistics show that the elderly play an important role in the family. At present, parents or grandparents living together with children or grandchildren has several advantages. Social-educational role plays an important role in the Vietnamese family because it contributes to forming individual's personality. This issue receives particular attention from all family members. Many families invest time and money in caring for and educating their children while some parents <mark data-w=\"regrettably cannot afford time\">regrettably cannot afford time</mark> to care for and educate their children.",
    vocabInContext: {
      "nuclear families": "gia đình hạt nhân",
      "preserved and developed": "được gìn giữ và phát triển",
      "maintaining their independent ideas": "duy trì những ý tưởng độc lập của mình",
      "distinguishes itself": "tạo nên sự khác biệt",
      "regrettably cannot afford time": "đáng tiếc là không có đủ thời gian"
    },
    translation: "<b>CẤU TRÚC VÀ GIÁ TRỊ GIA ĐÌNH VIỆT NAM</b><br><br>Đã có những thay đổi trong cấu trúc và giá trị gia đình ở Việt Nam do quá trình công nghiệp hóa và hiện đại hóa. Gia đình Việt Nam hiện nay tồn tại dưới hai hình thức chính: gia đình hạt nhân (hai thế hệ) và gia đình mở rộng (từ ba thế hệ trở lên). Gia đình hạt nhân là phổ biến nhất. Gia đình hạt nhân hiện nay không tự đứng một mình, mà luôn nhận được sự hỗ trợ và giúp đỡ từ gia đình lớn hơn (cha mẹ, anh em và họ hàng rộng hơn). Các mối quan hệ gia đình cơ bản đã thay đổi theo hướng tích cực. Các giá trị hiện đại được chọn lọc cẩn thận trong khi các giá trị truyền thống vẫn được gìn giữ và phát triển. Con cái vâng lời và tôn trọng cha mẹ trong khi vẫn duy trì những ý tưởng và quan điểm độc lập của mình. Cha mẹ tôn trọng sự độc lập của con cái vì tình yêu thương và sự nuông chiều. Mối quan hệ giữa ông bà và cha mẹ cũng đáng chú ý. Cha mẹ và ông bà có xu hướng sống cùng con cháu. Nét văn hóa truyền thống này tạo nên sự khác biệt so với các xã hội phương Tây hiện đại. Số liệu thống kê cho thấy người cao tuổi đóng vai trò quan trọng trong gia đình. Hiện nay, việc cha mẹ hoặc ông bà sống cùng con cháu mang lại nhiều lợi ích. Vai trò giáo dục-xã hội đóng vai trò quan trọng trong gia đình Việt Nam vì nó góp phần hình thành nhân cách của mỗi cá nhân. Vấn đề này nhận được sự quan tâm đặc biệt từ mọi thành viên trong gia đình. Nhiều gia đình đầu tư thời gian và tiền bạc để chăm sóc và giáo dục con cái, trong khi một số bậc cha mẹ đáng tiếc là không có đủ thời gian để chăm sóc và giáo dục con cái.",
    practice: [
      { id: "r1", type: "truefalse", prompt: "Extended families are currently the most common type of family structure in Viet Nam.", correct: "False", explanation: "Sai. Bài đọc: 'The nuclear family is the most common.'" },
      { id: "r2", type: "truefalse", prompt: "Nuclear families in Viet Nam usually operate completely independently without any help from other relatives.", correct: "False", explanation: "Sai. Bài đọc: 'it always receives support and assistance from wider families.'" },
      { id: "r3", type: "truefalse", prompt: "Vietnamese children today respect their parents but still have their own opinions.", correct: "True", explanation: "Đúng. Bài đọc: 'Children obey and respect their parents while maintaining their independent ideas and views.'" },
      { id: "r4", type: "truefalse", prompt: "Grandparents and parents in Viet Nam often live under the same roof with their children and grandchildren.", correct: "True", explanation: "Đúng. Bài đọc: 'Parents and grandparents tend to live together with their children and grandchildren.'" },
      { id: "r5", type: "mcq", prompt: "What is the main idea of the passage?", options: { A: "The negative impacts of modernization on Vietnamese family values.", B: "The changes and continuity in Vietnamese family structures and relationships.", C: "The financial difficulties Vietnamese parents face when educating their children.", D: "The comparison between Vietnamese families and Western families in education." }, correct: "B", explanation: "Bài đọc trình bày cả sự thay đổi trong cấu trúc gia đình lẫn những giá trị vẫn được duy trì." },
      { id: "r6", type: "mcq", prompt: "Which of the following is NOT true according to the passage?", options: { A: "Modern values are accepted without keeping traditional ones.", B: "The elderly have an important role in the Vietnamese family.", C: "Family members pay special attention to the social-educational role.", D: "Some parents do not have enough time to look after and educate their children." }, correct: "A", explanation: "Bài đọc nói ngược lại: giá trị hiện đại được chọn lọc trong khi giá trị truyền thống vẫn được gìn giữ." },
      { id: "r7", type: "fillblank", prompt: "Find the phrase in the passage that means 'gia đình hạt nhân'.", accepted: ["nuclear families", "nuclear family"], correct: "nuclear family", explanation: "'...two major forms: nuclear families (two generations) and extended families...' — nuclear family = gia đình hạt nhân." },
      { id: "r8", type: "mcq", prompt: "According to the passage, why is the social-educational role important in the Vietnamese family?", options: { A: "Because it contributes to forming individual's personality.", B: "Because it helps parents earn more money.", C: "Because it replaces the role of schools completely.", D: "Because it is required by the government." }, correct: "A", explanation: "Bài đọc: 'Social-educational role plays an important role in the Vietnamese family because it contributes to forming individual's personality.'" },
      { id: "r9", type: "truefalse", prompt: "According to the passage, all Vietnamese parents have enough time to care for and educate their children.", correct: "False", explanation: "Sai. Bài đọc: 'some parents regrettably cannot afford time to care for and educate their children.'" }
    ]
  },

  // ---------------------------------------------------------
  // PART 4 — TRANSLATION PRACTICE
  // ---------------------------------------------------------
  translation: [
    { id: "t1", en: "There have been changes in family structure and values in Viet Nam because of industrialization and modernization.", suggested: "Đã có những thay đổi trong cấu trúc và giá trị gia đình ở Việt Nam do quá trình công nghiệp hóa và hiện đại hóa.", notes: "\"There have been changes\" là thì hiện tại hoàn thành, nhấn mạnh kết quả của quá trình kéo dài." },
    { id: "t2", en: "The nuclear family now does not stand on its own, but it always receives support from wider families.", suggested: "Gia đình hạt nhân hiện nay không tự đứng một mình, mà luôn nhận được sự hỗ trợ từ gia đình lớn hơn.", notes: "\"not... but...\" diễn tả sự tương phản giữa hai vế." },
    { id: "t3", en: "Children obey and respect their parents while maintaining their independent ideas and views.", suggested: "Con cái vâng lời và tôn trọng cha mẹ trong khi vẫn duy trì những ý tưởng và quan điểm độc lập của mình.", notes: "\"while + V-ing\" diễn tả hai việc xảy ra đồng thời." },
    { id: "t4", en: "This traditional cultural feature distinguishes itself from that of modern western societies.", suggested: "Nét văn hóa truyền thống này tạo nên sự khác biệt so với các xã hội phương Tây hiện đại.", notes: "\"distinguish itself from + N\" (tạo nên sự khác biệt so với)." },
    { id: "t5", en: "Some parents regrettably cannot afford time to care for and educate their children.", suggested: "Một số bậc cha mẹ đáng tiếc là không có đủ thời gian để chăm sóc và giáo dục con cái.", notes: "\"cannot afford time to V\" (không có đủ thời gian để làm gì); \"regrettably\" là trạng từ chỉ thái độ, đứng giữa câu." }
  ],

  // ---------------------------------------------------------
  // PART 5 — SENTENCE TRANSFORMATION PRACTICE
  // ---------------------------------------------------------
  transformation: [
    {
      id: "tr1", name: "You should + V ⇄ advise sb + to V",
      formula: "You should + V  →  I advise + O + to V",
      example: { before: "You should research how life has changed in the past 20 years.", after: "I advise you to research how life has changed in the past 20 years." },
      practice: [
        { id: "tr1p1", type: "fillblank", prompt: "You should visit your grandparents more often. → I advise you ______________ (to visit) your grandparents more often.", accepted: ["to visit"], correct: "to visit", explanation: "You should + V → advise sb + to V." },
        { id: "tr1p2", type: "fillblank", prompt: "Rewrite: 'You should learn about your family's traditions.' → I advise you ______________ (to learn) about your family's traditions.", accepted: ["to learn"], correct: "to learn", explanation: "You should + V → advise sb + to V." }
      ]
    },
    {
      id: "tr2", name: "quá khứ đơn + while + was/were V-ing ⇄ When + quá khứ đơn, was/were V-ing",
      formula: "S1 + V(quá khứ đơn) + while + S2 + was/were + V-ing  →  When + S1 + V(quá khứ đơn), S2 + was/were + V-ing",
      example: { before: "A burglar broke into the building while the guard was sleeping.", after: "When the burglar broke into the building, the guard was sleeping." },
      practice: [
        { id: "tr2p1", type: "fillblank", prompt: "The power went out while we were having dinner. → When the power went out, we ______________ (were having) dinner.", accepted: ["were having"], correct: "were having", explanation: "while + was/were V-ing → When + quá khứ đơn, was/were V-ing." },
        { id: "tr2p2", type: "fillblank", prompt: "Rewrite: 'She fell asleep while she was reading a book.' → When she fell asleep, she ______________ (was reading) a book.", accepted: ["was reading"], correct: "was reading", explanation: "while + was/were V-ing → When + quá khứ đơn, was/were V-ing." }
      ]
    },
    {
      id: "tr3", name: "N1 matters more than N2 ⇄ prefer N1 to N2",
      formula: "For + S, + N1 + matters more than + N2  →  S + prefer(s) + N1 + to + N2",
      example: { before: "For many teenagers, comfort in clothing matters more than style.", after: "Many teenagers prefer comfortable clothing to stylish one." },
      practice: [
        { id: "tr3p1", type: "fillblank", prompt: "For my parents, tradition matters more than modern trends. → My parents prefer tradition ______________ (to) modern trends.", accepted: ["to"], correct: "to", explanation: "N1 matters more than N2 → prefer N1 to N2." },
        { id: "tr3p2", type: "fillblank", prompt: "Rewrite: 'For me, honesty matters more than wealth.' → I prefer honesty ______________ (to) wealth.", accepted: ["to"], correct: "to", explanation: "N1 matters more than N2 → prefer N1 to N2." }
      ]
    },
    {
      id: "tr4", name: "suggest + V-ing ⇄ Why don't we + V?",
      formula: "S + suggested + V-ing  →  Why don't we + V (nguyên mẫu)?",
      example: { before: "He suggested seeing the traditional farming tools at the museum.", after: "Why don't we see the traditional farming tools at the museum?" },
      practice: [
        { id: "tr4p1", type: "fillblank", prompt: "My friend suggested joining the folk dance club. → Why don't we ______________ (join) the folk dance club?", accepted: ["join"], correct: "join", explanation: "suggest + V-ing → Why don't we + V nguyên mẫu?" },
        { id: "tr4p2", type: "fillblank", prompt: "Rewrite: 'The teacher suggested reading about Vietnamese customs.' → Why don't we ______________ (read) about Vietnamese customs?", accepted: ["read"], correct: "read", explanation: "suggest + V-ing → Why don't we + V nguyên mẫu?" }
      ]
    }
  ],

  // ---------------------------------------------------------
  // PART 6 — QUICK REVIEW (mini test, all skills)
  // ---------------------------------------------------------
  quickReview: [
    { id: "q1", cat: "Vocabulary", type: "mcq", prompt: "'Democratic' means:", options: { A: "dân chủ", B: "độc đoán", C: "cổ hủ", D: "khắt khe" }, correct: "A", explanation: "democratic (adj) = dân chủ." },
    { id: "q2", cat: "Vocabulary", type: "mcq", prompt: "'Revolutionize' means:", options: { A: "cách mạng hóa, thay đổi hoàn toàn", B: "giữ nguyên", C: "làm suy yếu", D: "sao chép" }, correct: "A", explanation: "revolutionize (v) = cách mạng hóa, thay đổi hoàn toàn." },
    { id: "q3", cat: "Vocabulary", type: "fillblank", prompt: "The success of our school play depends ______________ (on) your cooperation.", accepted: ["on"], correct: "on", explanation: "depend on (phr v) = phụ thuộc vào." },
    { id: "q4", cat: "Grammar", type: "mcq", prompt: "You should research how life has changed. → I advise you ______ research how life has changed.", options: { A: "to", B: "should", C: "for", D: "of" }, correct: "A", explanation: "You should + V → advise sb + to V." },
    { id: "q5", cat: "Grammar", type: "mcq", prompt: "A burglar broke into the building while the guard was sleeping. → When the burglar broke into the building, the guard ______ sleeping.", options: { A: "was", B: "is", C: "were", D: "had been" }, correct: "A", explanation: "while + was/were V-ing → When + quá khứ đơn, was/were V-ing." },
    { id: "q6", cat: "Grammar", type: "fillblank", prompt: "For many teenagers, comfort in clothing matters more than style. → Many teenagers prefer comfortable clothing ______________ (to) stylish one.", accepted: ["to"], correct: "to", explanation: "matters more than → prefer N1 to N2." },
    { id: "q7", cat: "Grammar", type: "fillblank", prompt: "He suggested seeing the traditional farming tools at the museum. → Why don't we ______________ (see) the traditional farming tools at the museum?", accepted: ["see"], correct: "see", explanation: "suggest + V-ing → Why don't we + V nguyên mẫu?" },
    { id: "q8", cat: "Reading", type: "truefalse", prompt: "Vietnamese children today respect their parents but still have their own opinions.", correct: "True", explanation: "Đúng theo bài đọc." },
    { id: "q9", cat: "Reading", type: "truefalse", prompt: "Extended families are currently the most common type of family structure in Viet Nam.", correct: "False", explanation: "Sai. Gia đình hạt nhân mới là phổ biến nhất." },
    { id: "q10", cat: "Reading", type: "mcq", prompt: "What is the main idea of the passage about Vietnamese family structures?", options: { A: "The changes and continuity in Vietnamese family structures and relationships.", B: "The rules for choosing a family name.", C: "The decline of family values in Vietnam.", D: "The comparison of family sizes across Asia." }, correct: "A", explanation: "Bài đọc trình bày cả sự thay đổi và những giá trị vẫn được duy trì trong gia đình Việt Nam." },
    { id: "q11", cat: "Writing", type: "fillblank", prompt: "The ______________ (popular) of social media has changed how we communicate.", accepted: ["popularity"], correct: "popularity", explanation: "popular (adj) → popularity (n)." },
    { id: "q12", cat: "Writing", type: "fillblank", prompt: "He gave an ______________ (impress) presentation about life in the past.", accepted: ["impressive"], correct: "impressive", explanation: "impress (v) → impressive (adj)." },
    { id: "q13", cat: "Writing", type: "fillblank", prompt: "We need the ______________ (cooperate) of everyone to preserve our heritage.", accepted: ["cooperation"], correct: "cooperation", explanation: "cooperate (v) → cooperation (n)." },
    { id: "q14", cat: "Vocabulary", type: "mcq", prompt: "Which word means 'thời gian rảnh rỗi'?", options: { A: "leisure time", B: "social skills", C: "wider kin", D: "balanced diet" }, correct: "A", explanation: "leisure time (n phr) = thời gian rảnh rỗi." }
  ]
};
