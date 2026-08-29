const REVIEW = {
  id: "test15",
  testFile: "test15.html",
  grade: "Grade 9 — Global Success",
  unit: "Unit 2: City life",
  title: "Knowledge Review — Unit 2, Practice Test 1",

  // ---------------------------------------------------------
  // PART 1 — VOCABULARY REVIEW
  // ---------------------------------------------------------
  vocabulary: [
    { word: "packed", pos: "adj", ipa: "/pækt/", meaning: "chật kín, đông nghịt", example: "The sky train is usually packed with commuters at rush hour.", exampleVi: "Tàu điện trên cao thường chật kín hành khách vào giờ cao điểm." },
    { word: "convenient", pos: "adj", ipa: "/kənˈviːniənt/", meaning: "thuận tiện", example: "It is often more convenient to live in the downtown area.", exampleVi: "Sống ở khu trung tâm thường thuận tiện hơn." },
    { word: "reliable", pos: "adj", ipa: "/rɪˈlaɪəbl/", meaning: "đáng tin cậy", example: "The more reliable the public transport is, the easier it is for residents to get around.", exampleVi: "Giao thông công cộng càng đáng tin cậy thì cư dân càng dễ di chuyển." },
    { word: "put up with", pos: "phr v", ipa: "/pʊt ʌp wɪð/", meaning: "chịu đựng", example: "I can't put up with the noise and the crowds in that area.", exampleVi: "Tôi không thể chịu đựng được tiếng ồn và đám đông ở khu vực đó." },
    { word: "run out of", pos: "phr v", ipa: "/rʌn aʊt əv/", meaning: "dùng hết, hết sạch", example: "We've run out of all the milk in the fridge.", exampleVi: "Chúng tôi đã dùng hết sạch sữa trong tủ lạnh." },
    { word: "rush hour", pos: "n phr", ipa: "/rʌʃ ˈaʊər/", meaning: "giờ cao điểm", example: "During rush hour, the traffic is always heavy and slow-moving.", exampleVi: "Vào giờ cao điểm, giao thông luôn đông đúc và di chuyển chậm." },
    { word: "construction site", pos: "n phr", ipa: "/kənˈstrʌkʃn saɪt/", meaning: "công trường xây dựng", example: "There's a construction site there. They are building a new shopping mall.", exampleVi: "Có một công trường xây dựng ở đó. Họ đang xây một trung tâm mua sắm mới." },
    { word: "bustling", pos: "adj", ipa: "/ˈbʌslɪŋ/", meaning: "nhộn nhịp, sầm uất", example: "It's like a concrete jungle with so many people. It's a bustling city.", exampleVi: "Nó giống như một rừng bê tông với rất nhiều người. Đó là một thành phố nhộn nhịp." },
    { word: "concrete jungle", pos: "n phr", ipa: "/ˈkɒŋkriːt ˈdʒʌŋɡl/", meaning: "rừng bê tông (chỉ đô thị đông đúc, nhiều nhà cao tầng)", example: "Hong Kong is like a concrete jungle with so many people.", exampleVi: "Hồng Kông giống như một rừng bê tông với rất nhiều người." },
    { word: "crime rate", pos: "n phr", ipa: "/kraɪm reɪt/", meaning: "tỷ lệ tội phạm", example: "Some cities are not safe because of high crime rates.", exampleVi: "Một số thành phố không an toàn vì tỷ lệ tội phạm cao." },
    { word: "amenity", pos: "n", ipa: "/əˈmiːnəti/", meaning: "tiện nghi, tiện ích", example: "Public amenities make the town a livable place for its residents.", exampleVi: "Các tiện ích công cộng khiến thị trấn trở thành nơi đáng sống cho cư dân." },
    { word: "livable", pos: "adj", ipa: "/ˈlɪvəbl/", meaning: "đáng sống, dễ sống", example: "Public amenities make the town a very livable place for everyone.", exampleVi: "Các tiện ích công cộng khiến thị trấn trở thành nơi rất đáng sống cho mọi người." },
    { word: "appealing", pos: "adj", ipa: "/əˈpiːlɪŋ/", meaning: "hấp dẫn, thu hút", example: "Many people find the city appealing because of its vibrant energy.", exampleVi: "Nhiều người thấy thành phố hấp dẫn vì năng lượng sôi động của nó." },
    { word: "variety", pos: "n", ipa: "/vəˈraɪəti/", meaning: "sự đa dạng", example: "We have discovered a variety of parks and entertainment options.", exampleVi: "Chúng tôi đã khám phá ra sự đa dạng của các công viên và lựa chọn giải trí." },
    { word: "modernize", pos: "v", ipa: "/ˈmɒdərnaɪz/", meaning: "hiện đại hóa", example: "The public transport system needs to be modernized and expanded.", exampleVi: "Hệ thống giao thông công cộng cần được hiện đại hóa và mở rộng." },
    { word: "historic", pos: "adj", ipa: "/hɪˈstɒrɪk/", meaning: "có ý nghĩa lịch sử, nổi tiếng", example: "The city's landscape is filled with historic landmarks and modern architecture.", exampleVi: "Cảnh quan thành phố tràn ngập các địa danh lịch sử và kiến trúc hiện đại." },
    { word: "solace", pos: "n", ipa: "/ˈsɒləs/", meaning: "sự an ủi, khuây khỏa", example: "Residents often find solace in the city's green spaces.", exampleVi: "Cư dân thường tìm thấy sự khuây khỏa trong không gian xanh của thành phố." },
    { word: "hustle and bustle", pos: "n phr", ipa: "/ˈhʌsl ənd ˈbʌsl/", meaning: "sự hối hả, nhộn nhịp", example: "Despite the hustle and bustle of daily life, residents often find solace in green spaces.", exampleVi: "Bất chấp sự hối hả nhộn nhịp của cuộc sống thường ngày, cư dân vẫn tìm thấy sự khuây khỏa trong không gian xanh." }
  ],

  vocabPractice: {
    mcq: [
      { id: "vp1", prompt: "Choose the word that means 'giờ cao điểm':", options: { A: "rush hour", B: "crime rate", C: "concrete jungle", D: "construction site" }, correct: "A", explanation: "<b>rush hour</b> (n phr) = giờ cao điểm." },
      { id: "vp2", prompt: "Choose the word that means 'nhộn nhịp, sầm uất':", options: { A: "peaceful", B: "bustling", C: "quiet", D: "boring" }, correct: "B", explanation: "<b>bustling</b> (adj) = nhộn nhịp, sầm uất." },
      { id: "vp3", prompt: "Choose the best word: \"I can't ______ the noise and the crowds in that area.\"", options: { A: "keep up with", B: "put up with", C: "face up to", D: "get on with" }, correct: "B", explanation: "\"<b>put up with</b>\" (chịu đựng) là cụm động từ cố định." },
      { id: "vp4", prompt: "Choose the word that means 'đáng sống':", options: { A: "livable", B: "dull", C: "boring", D: "crowded" }, correct: "A", explanation: "<b>livable</b> (adj) = đáng sống, dễ sống." },
      { id: "vp5", prompt: "\"We've ______ all the milk in the fridge.\"", options: { A: "set up", B: "run out of", C: "got along", D: "put up with" }, correct: "B", explanation: "\"<b>run out of</b>\" (dùng hết sạch) là cụm động từ cố định." },
      { id: "vp6", prompt: "Choose the word that means 'sự an ủi, khuây khỏa':", options: { A: "solace", B: "crime", C: "pollution", D: "congestion" }, correct: "A", explanation: "<b>solace</b> (n) = sự an ủi, khuây khỏa." }
    ],
    fillblank: [
      { id: "vf1", prompt: "There's a ______________ (công trường) there. They are building a new mall.", accepted: ["construction site"], correct: "construction site", explanation: "<b>construction site</b> (n phr) = công trường xây dựng." },
      { id: "vf2", prompt: "It is often more ______________ (thuận tiện) to live in the downtown area.", accepted: ["convenient"], correct: "convenient", explanation: "<b>convenient</b> (adj) = thuận tiện." },
      { id: "vf3", prompt: "Some cities are not safe because of high ______________ (tỷ lệ tội phạm).", accepted: ["crime rates", "crime rate"], correct: "crime rates", explanation: "<b>crime rate</b> (n phr) = tỷ lệ tội phạm." },
      { id: "vf4", prompt: "The public transport system needs to be ______________ (hiện đại hóa) and expanded.", accepted: ["modernized", "modernised"], correct: "modernized", explanation: "<b>modernize/modernise</b> (v) = hiện đại hóa." },
      { id: "vf5", prompt: "Many people find the city ______________ (hấp dẫn) because of its vibrant energy.", accepted: ["appealing"], correct: "appealing", explanation: "<b>appealing</b> (adj) = hấp dẫn, thu hút." },
      { id: "vf6", prompt: "Residents often find ______________ (sự khuây khỏa) in the city's green spaces.", accepted: ["solace"], correct: "solace", explanation: "<b>solace</b> (n) = sự an ủi, khuây khỏa." }
    ],
    matching: {
      left: ["amenity", "bustling", "livable", "variety", "historic", "convenient"],
      right: ["tiện nghi, tiện ích", "nhộn nhịp, sầm uất", "đáng sống, dễ sống", "sự đa dạng", "có ý nghĩa lịch sử, nổi tiếng", "thuận tiện"],
      correctMap: [0, 1, 2, 3, 4, 5]
    },
    chooseWord: [
      { id: "cw1", prompt: "\"The city is ______ for its lively atmosphere.\" (FAME)", options: { A: "fame", B: "famous", C: "famously", D: "infamous" }, correct: "B", explanation: "Cần tính từ sau \"is\" → fame (n) → <b>famous</b> (adj)." },
      { id: "cw2", prompt: "\"Public amenities make the town a ______ place.\" (LIVE)", options: { A: "live", B: "living", C: "liveable", D: "lively" }, correct: "C", explanation: "Cần tính từ trước danh từ \"place\" → live (v) → <b>liveable</b> (adj)." },
      { id: "cw3", prompt: "\"We have discovered a ______ of parks.\" (VARIOUS)", options: { A: "various", B: "variety", C: "variously", D: "variation" }, correct: "B", explanation: "Cần danh từ sau \"a\" → various (adj) → <b>variety</b> (n)." }
    ],
    wordMeaning: [
      { id: "wm1", prompt: "What does 'bustling' mean?", options: { A: "yên tĩnh", B: "nhộn nhịp, sầm uất", C: "buồn tẻ", D: "nguy hiểm" }, correct: "B", explanation: "bustling (adj) = nhộn nhịp, sầm uất." },
      { id: "wm2", prompt: "What does 'run out of' mean?", options: { A: "dùng hết, hết sạch", B: "bắt đầu sử dụng", C: "sửa chữa", D: "mua thêm" }, correct: "A", explanation: "run out of (phr v) = dùng hết, hết sạch." },
      { id: "wm3", prompt: "What does 'crime rate' mean?", options: { A: "tỷ lệ tội phạm", B: "tỷ lệ thất nghiệp", C: "tỷ lệ sinh", D: "tỷ lệ ô nhiễm" }, correct: "A", explanation: "crime rate (n phr) = tỷ lệ tội phạm." }
    ],
    wordForm: [
      { id: "wf1", prompt: "The city is (FAME) ______________ for its lively atmosphere.", accepted: ["famous"], correct: "famous", explanation: "fame (n) → famous (adj)." },
      { id: "wf2", prompt: "The (AVAILABLE) ______________ of good health services is important.", accepted: ["availability"], correct: "availability", explanation: "available (adj) → availability (n)." },
      { id: "wf3", prompt: "We have discovered a (VARIOUS) ______________ of parks.", accepted: ["variety"], correct: "variety", explanation: "various (adj) → variety (n)." }
    ]
  },

  // ---------------------------------------------------------
  // PART 2 — GRAMMAR REVIEW & PRACTICE
  // ---------------------------------------------------------
  grammar: [
    {
      id: "g1", name: "not + as + adj/adv + as + used to ⇄ used to + so sánh hơn + than + now",
      usage: "\"S + not + as + adj/adv + as + S + used to (V)\" (không còn ... như trước) có thể diễn đạt lại bằng \"S + used to + V + so sánh hơn + than + S + do/does + now\" — cùng so sánh trạng thái hiện tại kém hơn quá khứ.",
      formulas: [
        "S + doesn't/don't + V + as + adj/adv + as + S + used to.  →  S + used to + V + so sánh hơn + than + S + do/does + now.",
        "Mary doesn't study as well as she used to. → Mary used to study better than she does now."
      ],
      signals: ["not as ... as ... used to", "used to ... than ... now"],
      examples: [
        { en: "Mary doesn't study as well as she used to.", vi: "Mary không còn học tốt như trước nữa." },
        { en: "Mary used to study better than she does now.", vi: "Trước đây Mary từng học tốt hơn so với bây giờ." }
      ],
      mistakes: [
        { wrong: "Mary used to study good than she does now.", right: "Mary used to study better than she does now." }
      ],
      practice: {
        level1: [
          { id: "g1l1a", type: "fillblank", prompt: "He doesn't play football as well as he used to. → He used to play football ______________ (better) than he does now.", accepted: ["better"], correct: "better", explanation: "not as well as used to → used to + so sánh hơn + than + now." }
        ],
        level2: [
          { id: "g1l2a", type: "fillblank", prompt: "Rewrite: 'This street isn't as quiet as it used to be.' → This street ______________ (used to be quieter than it is now).", accepted: ["used to be quieter than it is now"], correct: "used to be quieter than it is now", explanation: "not as quiet as used to be → used to be quieter than now." }
        ],
        level3: [
          { id: "g1l3a", type: "fillblank", prompt: "Rewrite so it keeps the same meaning: 'The city doesn't feel as safe as it used to.' → ______________ (The city used to feel safer than it does now).", accepted: ["the city used to feel safer than it does now"], correct: "The city used to feel safer than it does now", explanation: "not as safe as used to → used to feel safer than now." }
        ]
      }
    },
    {
      id: "g2", name: "So sánh hơn ⇄ So sánh bằng phủ định (not as ... as)",
      usage: "\"A + is more + adj + than + B\" (A hơn B) có thể đổi chiều thành \"B + is not as + adj + as + A\" (B không bằng A) — cùng khẳng định A vượt trội hơn B.",
      formulas: [
        "A + is more + adj + than + B.  →  B + is not as + adj + as + A.",
        "My current house is more spacious than the old one. → My old house is not as spacious as my current one."
      ],
      signals: ["more ... than", "not as ... as"],
      examples: [
        { en: "My current house is more spacious than the old one.", vi: "Ngôi nhà hiện tại của tôi rộng rãi hơn ngôi nhà cũ." },
        { en: "My old house is not as spacious as my current one.", vi: "Ngôi nhà cũ của tôi không rộng rãi bằng ngôi nhà hiện tại." }
      ],
      mistakes: [
        { wrong: "My old house is not as spacious than my current one.", right: "My old house is not as spacious as my current one." }
      ],
      practice: {
        level1: [
          { id: "g2l1a", type: "fillblank", prompt: "This road is busier than that one. → That road is not as ______________ (busy) as this one.", accepted: ["busy"], correct: "busy", explanation: "more ... than → not as ... as (đảo chủ ngữ/tân ngữ)." }
        ],
        level2: [
          { id: "g2l2a", type: "fillblank", prompt: "Rewrite: 'The new mall is bigger than the old market.' → The old market is not as ______________ (big) as the new mall.", accepted: ["big"], correct: "big", explanation: "more ... than → not as ... as." }
        ],
        level3: [
          { id: "g2l3a", type: "fillblank", prompt: "Rewrite so it keeps the same meaning: 'This neighborhood is quieter than the city center.' → ______________ (The city center is not as quiet as this neighborhood).", accepted: ["the city center is not as quiet as this neighborhood"], correct: "The city center is not as quiet as this neighborhood", explanation: "more ... than → not as ... as (đảo chủ ngữ/tân ngữ)." }
        ]
      }
    },
    {
      id: "g3", name: "Because + mệnh đề ⇄ Because of + cụm danh từ",
      usage: "\"Because + S + V\" (mệnh đề nêu lý do) có thể rút gọn thành \"Because of + N/cụm danh từ\" — cùng nêu nguyên nhân nhưng theo sau là danh từ, không phải mệnh đề đầy đủ.",
      formulas: [
        "Because + S + V, S + V.  →  S + V + because of + N.",
        "Because the crime rates are high, some cities are not safe. → Some cities are not safe because of high crime rates."
      ],
      signals: ["Because", "Because of"],
      examples: [
        { en: "Because the crime rates are high, some cities are not safe.", vi: "Vì tỷ lệ tội phạm cao, một số thành phố không an toàn." },
        { en: "Some cities are not safe because of high crime rates.", vi: "Một số thành phố không an toàn vì tỷ lệ tội phạm cao." }
      ],
      mistakes: [
        { wrong: "Some cities are not safe because high crime rates.", right: "Some cities are not safe because of high crime rates." }
      ],
      practice: {
        level1: [
          { id: "g3l1a", type: "fillblank", prompt: "Because the traffic is heavy, we were late. → We were late ______________ (because of) the heavy traffic.", accepted: ["because of"], correct: "because of", explanation: "Because + mệnh đề → because of + N." }
        ],
        level2: [
          { id: "g3l2a", type: "fillblank", prompt: "Rewrite: 'Because the air is polluted, many people wear masks.' → Many people wear masks ______________ (because of) the polluted air.", accepted: ["because of"], correct: "because of", explanation: "Because + mệnh đề → because of + N." }
        ],
        level3: [
          { id: "g3l3a", type: "fillblank", prompt: "Rewrite so it keeps the same meaning: 'Because the rent is low, many young people move here.' → ______________ (Many young people move here because of the low rent).", accepted: ["many young people move here because of the low rent"], correct: "Many young people move here because of the low rent", explanation: "Because + mệnh đề → because of + N." }
        ]
      }
    },
    {
      id: "g4", name: "so ... (nhân quả) ⇄ The + so sánh hơn ..., the + so sánh hơn ...",
      usage: "Câu nêu quan hệ nhân quả với \"so\" có thể diễn đạt lại bằng cấu trúc so sánh kép \"The + so sánh hơn + S + V, the + so sánh hơn + S + V\" khi hai vế đều liên quan đến sự tăng/giảm cùng chiều.",
      formulas: [
        "S1 + is/are + adj, so + S2 + is/are + adj.  →  The + so sánh hơn (adj1) + S1 + is/are, the + so sánh hơn (adj2) + S2 + is/are.",
        "The traffic flow is smooth, so the commute is good for workers. → The smoother the traffic flow is, the better the commute for workers."
      ],
      signals: ["so", "The + comparative ..., the + comparative ..."],
      examples: [
        { en: "The traffic flow is smooth, so the commute is good for workers.", vi: "Dòng giao thông thông thoáng nên việc đi lại của người lao động thuận lợi." },
        { en: "The smoother the traffic flow is, the better the commute for workers.", vi: "Dòng giao thông càng thông thoáng thì việc đi lại của người lao động càng thuận lợi." }
      ],
      mistakes: [
        { wrong: "The more smooth the traffic flow is, the more good the commute.", right: "The smoother the traffic flow is, the better the commute." }
      ],
      practice: {
        level1: [
          { id: "g4l1a", type: "fillblank", prompt: "The city is more crowded, so life is harder. → The more crowded the city is, ______________ (the harder) life is.", accepted: ["the harder"], correct: "the harder", explanation: "so (nhân quả) → The + so sánh hơn ..., the + so sánh hơn ..." }
        ],
        level2: [
          { id: "g4l2a", type: "fillblank", prompt: "Rewrite: 'The bus is faster, so people arrive earlier.' → ______________ (The faster) the bus is, the earlier people arrive.", accepted: ["The faster"], correct: "The faster", explanation: "so (nhân quả) → The + so sánh hơn ..., the + so sánh hơn ..." }
        ],
        level3: [
          { id: "g4l3a", type: "fillblank", prompt: "Rewrite so it keeps the same meaning: 'The park is bigger, so the air is fresher.' → ______________ (The bigger the park is, the fresher the air is).", accepted: ["the bigger the park is, the fresher the air is"], correct: "The bigger the park is, the fresher the air is", explanation: "so (nhân quả) → The + so sánh hơn ..., the + so sánh hơn ..." }
        ]
      }
    },
    {
      id: "g5", name: "Đại từ quan hệ \"who\" thay cho \"those\" (những người)",
      usage: "\"who\" làm đại từ quan hệ chỉ người, thường theo sau \"those\" (những người) để tạo thành cụm \"those who + V\" (những người mà...), làm chủ ngữ trong mệnh đề quan hệ.",
      formulas: [
        "those + who + V ... (những người + động từ)",
        "The city is an appealing place for those who enjoy an active lifestyle."
      ],
      signals: ["those who"],
      examples: [
        { en: "The city is an appealing place for those who enjoy an active lifestyle.", vi: "Thành phố là nơi hấp dẫn đối với những người thích lối sống năng động." },
        { en: "This program is designed for those who want to improve their English.", vi: "Chương trình này được thiết kế cho những người muốn cải thiện tiếng Anh của họ." }
      ],
      mistakes: [
        { wrong: "for those which enjoy an active lifestyle", right: "for those who enjoy an active lifestyle (dùng \"who\" cho người, không dùng \"which\")" }
      ],
      practice: {
        level1: [
          { id: "g5l1a", type: "fillblank", prompt: "This gym is perfect for those ______________ (who) want to stay fit.", accepted: ["who"], correct: "who", explanation: "those + who + V (những người mà...)." }
        ],
        level2: [
          { id: "g5l2a", type: "fillblank", prompt: "Combine: 'Some residents enjoy quiet streets. This area suits them.' → This area suits those ______________ (who) enjoy quiet streets.", accepted: ["who"], correct: "who", explanation: "those + who + V." }
        ],
        level3: [
          { id: "g5l3a", type: "fillblank", prompt: "Rewrite so it keeps the same meaning: 'The new library is great for people who love reading.' → ______________ (The new library is great for those who love reading).", accepted: ["the new library is great for those who love reading"], correct: "The new library is great for those who love reading", explanation: "people who → those who." }
        ]
      }
    }
  ],

  // ---------------------------------------------------------
  // PART 3 — READING PRACTICE
  // ---------------------------------------------------------
  reading: {
    passage: "One of the most important aspects of city life is public transportation. Efficient public transport systems can greatly enhance the quality of life for city <mark data-w=\"dwellers\">dwellers</mark> by reducing traffic congestion and pollution. Many large cities have developed extensive networks of buses, trains, and subways to help people get around quickly and affordably.<br><br>In cities like Tokyo and New York, public transportation is an essential part of daily life. The Tokyo subway system is known for its <mark data-w=\"punctuality\">punctuality</mark> and cleanliness, transporting millions of passengers every day. Similarly, New York's subway system, though older and less reliable, is crucial for the <mark data-w=\"mobility\">mobility</mark> of its residents. Public transportation not only benefits individuals but also has a positive impact on the environment. By reducing the number of private vehicles on the road, public transport systems help to lower <mark data-w=\"emissions\">emissions</mark> and decrease the city's carbon footprint. Additionally, using public transportation can be more <mark data-w=\"economical\">economical</mark> for residents, saving money on fuel and parking fees.<br><br>However, public transportation systems also face challenges. In many cities, aging <mark data-w=\"infrastructure\">infrastructure</mark> and lack of funding can lead to delays and overcrowding. Safety and cleanliness are other concerns that need to be addressed to make public transport more appealing to users.<br><br>Despite these issues, the advantages of public transportation in city life are clear. Investments in modernizing and expanding public transport can lead to significant improvements in urban living conditions. Encouraging the use of public transportation is essential for the sustainable development of cities.",
    vocabInContext: {
      dwellers: "cư dân, người sinh sống (ở một nơi)",
      punctuality: "sự đúng giờ",
      mobility: "khả năng di chuyển",
      emissions: "khí thải",
      economical: "tiết kiệm, kinh tế",
      infrastructure: "cơ sở hạ tầng"
    },
    translation: "<b>GIAO THÔNG CÔNG CỘNG TRONG ĐỜI SỐNG ĐÔ THỊ</b><br><br>Một trong những khía cạnh quan trọng nhất của cuộc sống đô thị là giao thông công cộng. Các hệ thống giao thông công cộng hiệu quả có thể nâng cao đáng kể chất lượng cuộc sống của cư dân đô thị bằng cách giảm ùn tắc giao thông và ô nhiễm. Nhiều thành phố lớn đã phát triển mạng lưới rộng khắp gồm xe buýt, tàu hỏa và tàu điện ngầm để giúp mọi người di chuyển nhanh chóng và với chi phí phải chăng.<br><br>Ở những thành phố như Tokyo và New York, giao thông công cộng là một phần thiết yếu của cuộc sống hằng ngày. Hệ thống tàu điện ngầm Tokyo nổi tiếng vì sự đúng giờ và sạch sẽ, vận chuyển hàng triệu hành khách mỗi ngày. Tương tự, hệ thống tàu điện ngầm New York, dù cũ hơn và kém tin cậy hơn, vẫn đóng vai trò quan trọng đối với khả năng di chuyển của cư dân. Giao thông công cộng không chỉ mang lại lợi ích cho cá nhân mà còn có tác động tích cực đến môi trường. Bằng cách giảm số lượng phương tiện cá nhân trên đường, hệ thống giao thông công cộng giúp giảm khí thải và giảm dấu chân carbon của thành phố. Ngoài ra, sử dụng giao thông công cộng có thể tiết kiệm hơn cho cư dân, giúp tiết kiệm tiền xăng và phí đỗ xe.<br><br>Tuy nhiên, hệ thống giao thông công cộng cũng phải đối mặt với những thách thức. Ở nhiều thành phố, cơ sở hạ tầng cũ kỹ và thiếu kinh phí có thể dẫn đến chậm trễ và quá tải. An toàn và sạch sẽ là những mối quan tâm khác cần được giải quyết để giao thông công cộng hấp dẫn hơn với người dùng.<br><br>Dù có những vấn đề này, lợi ích của giao thông công cộng trong đời sống đô thị vẫn rất rõ ràng. Đầu tư vào việc hiện đại hóa và mở rộng giao thông công cộng có thể mang lại những cải thiện đáng kể cho điều kiện sống đô thị. Khuyến khích sử dụng giao thông công cộng là điều cần thiết cho sự phát triển bền vững của các thành phố.",
    practice: [
      { id: "r1", type: "truefalse", prompt: "Efficient public transport systems help reduce pollution and traffic jams in cities.", correct: "True", explanation: "Bài đọc: 'Efficient public transport systems can greatly enhance the quality of life ... by reducing traffic congestion and pollution.'" },
      { id: "r2", type: "truefalse", prompt: "The New York subway system is famous for being cleaner and more punctual than the Tokyo subway system.", correct: "False", explanation: "Sai. Bài đọc nói ngược lại: Tokyo nổi tiếng đúng giờ và sạch sẽ, còn New York 'older and less reliable'." },
      { id: "r3", type: "truefalse", prompt: "People can save money on fuel and parking fees by using public transport.", correct: "True", explanation: "Bài đọc: 'using public transportation can be more economical ..., saving money on fuel and parking fees.'" },
      { id: "r4", type: "truefalse", prompt: "Public transportation systems in large cities currently do not face any problems or difficulties.", correct: "False", explanation: "Sai. Bài đọc: 'public transportation systems also face challenges.'" },
      { id: "r5", type: "mcq", prompt: "What is the main idea of the passage?", options: { A: "The histories and developments of the subways in Tokyo and New York.", B: "The importance, benefits, and challenges of public transportation in cities.", C: "The negative effects of private vehicles on the environment of large cities.", D: "The solutions to solve the problem of aging infrastructure in modern areas." }, correct: "B", explanation: "Bài đọc trình bày tầm quan trọng, lợi ích, và thách thức của giao thông công cộng." },
      { id: "r6", type: "mcq", prompt: "Which of the following is NOT true according to the passage?", options: { A: "Tokyo's subway system transports millions of people every single day.", B: "Public transportation helps to lower the carbon footprint of a city.", C: "New York's subway system is brand new and completely reliable.", D: "Lack of funding can cause overcrowding and delays in public transit." }, correct: "C", explanation: "Bài đọc nói New York's system 'older and less reliable', không phải 'brand new and completely reliable'." },
      { id: "r7", type: "fillblank", prompt: "Find the word in the passage that means 'khả năng di chuyển' (n).", accepted: ["mobility"], correct: "mobility", explanation: "'crucial for the mobility of its residents' — mobility (n) = khả năng di chuyển." },
      { id: "r8", type: "mcq", prompt: "According to the passage, what helps to lower a city's carbon footprint?", options: { A: "Reducing the number of private vehicles on the road.", B: "Building more shopping malls.", C: "Increasing the price of bus tickets.", D: "Closing all train stations." }, correct: "A", explanation: "Bài đọc: 'By reducing the number of private vehicles on the road, public transport systems help to lower emissions...'" },
      { id: "r9", type: "truefalse", prompt: "According to the passage, aging infrastructure has no effect on public transportation quality.", correct: "False", explanation: "Sai. Bài đọc: 'aging infrastructure and lack of funding can lead to delays and overcrowding.'" }
    ]
  },

  // ---------------------------------------------------------
  // PART 4 — TRANSLATION PRACTICE
  // ---------------------------------------------------------
  translation: [
    { id: "t1", en: "The city is known for its lively atmosphere and diverse population.", suggested: "Thành phố nổi tiếng với bầu không khí sôi động và dân số đa dạng.", notes: "'be known for' (nổi tiếng vì)." },
    { id: "t2", en: "Despite the hustle and bustle of daily life, residents often find solace in the city's green spaces.", suggested: "Bất chấp sự hối hả nhộn nhịp của cuộc sống thường ngày, cư dân thường tìm thấy sự khuây khỏa trong không gian xanh của thành phố.", notes: "'Despite + N/V-ing' (bất chấp, mặc dù)." },
    { id: "t3", en: "Many large cities have developed extensive networks of buses, trains, and subways.", suggested: "Nhiều thành phố lớn đã phát triển mạng lưới rộng khắp gồm xe buýt, tàu hỏa, và tàu điện ngầm.", notes: "'extensive networks of' (mạng lưới rộng khắp gồm)." },
    { id: "t4", en: "Aging infrastructure and lack of funding can lead to delays and overcrowding.", suggested: "Cơ sở hạ tầng cũ kỹ và thiếu kinh phí có thể dẫn đến chậm trễ và quá tải.", notes: "'lead to' (dẫn đến)." },
    { id: "t5", en: "Encouraging the use of public transportation is essential for the sustainable development of cities.", suggested: "Khuyến khích sử dụng giao thông công cộng là điều cần thiết cho sự phát triển bền vững của các thành phố.", notes: "Danh động từ 'Encouraging' làm chủ ngữ của câu." }
  ],

  // ---------------------------------------------------------
  // PART 5 — SENTENCE TRANSFORMATION PRACTICE
  // ---------------------------------------------------------
  transformation: [
    {
      id: "tr1", name: "not as ... as ... used to ⇄ used to ... so sánh hơn ... than now",
      formula: "S + not + as + adj/adv + as + S + used to  →  S + used to + so sánh hơn + than + S + do/does + now",
      example: { before: "Mary doesn't study as well as she used to.", after: "Mary used to study better than she does now." },
      practice: [
        { id: "tr1p1", type: "fillblank", prompt: "This area isn't as peaceful as it used to be. → This area ______________ (used to be more peaceful than it is now).", accepted: ["used to be more peaceful than it is now"], correct: "used to be more peaceful than it is now", explanation: "not as peaceful as used to be → used to be more peaceful than now." },
        { id: "tr1p2", type: "fillblank", prompt: "Rewrite: 'He doesn't work as hard as he used to.' → He used to work ______________ (harder) than he does now.", accepted: ["harder"], correct: "harder", explanation: "not as hard as used to → used to work harder than now." }
      ]
    },
    {
      id: "tr2", name: "So sánh hơn ⇄ not as ... as",
      formula: "A + is more + adj + than + B  →  B + is not as + adj + as + A",
      example: { before: "My current house is more spacious than the old one.", after: "My old house is not as spacious as my current one." },
      practice: [
        { id: "tr2p1", type: "fillblank", prompt: "The new bridge is stronger than the old one. → The old bridge is not as ______________ (strong) as the new one.", accepted: ["strong"], correct: "strong", explanation: "more ... than → not as ... as." },
        { id: "tr2p2", type: "fillblank", prompt: "Rewrite: 'This apartment is more modern than that one.' → That apartment is not as ______________ (modern) as this one.", accepted: ["modern"], correct: "modern", explanation: "more ... than → not as ... as." }
      ]
    },
    {
      id: "tr3", name: "Because + mệnh đề ⇄ Because of + N",
      formula: "Because + S + V, S + V  →  S + V + because of + N",
      example: { before: "Because the crime rates are high, some cities are not safe.", after: "Some cities are not safe because of high crime rates." },
      practice: [
        { id: "tr3p1", type: "fillblank", prompt: "Because the roads are icy, driving is dangerous. → Driving is dangerous ______________ (because of) the icy roads.", accepted: ["because of"], correct: "because of", explanation: "Because + mệnh đề → because of + N." },
        { id: "tr3p2", type: "fillblank", prompt: "Rewrite: 'Because construction is ongoing, the street is noisy.' → The street is noisy ______________ (because of) the ongoing construction.", accepted: ["because of"], correct: "because of", explanation: "Because + mệnh đề → because of + N." }
      ]
    },
    {
      id: "tr4", name: "so (nhân quả) ⇄ The + so sánh hơn ..., the + so sánh hơn ...",
      formula: "S1 + is + adj, so + S2 + is + adj  →  The + so sánh hơn + S1 + is, the + so sánh hơn + S2 + is",
      example: { before: "The traffic flow is smooth, so the commute is good for workers.", after: "The smoother the traffic flow is, the better the commute for workers." },
      practice: [
        { id: "tr4p1", type: "fillblank", prompt: "The subway is more efficient, so the trip is quicker. → ______________ (The more efficient) the subway is, the quicker the trip.", accepted: ["The more efficient"], correct: "The more efficient", explanation: "so (nhân quả) → The + so sánh hơn ..., the + so sánh hơn ..." },
        { id: "tr4p2", type: "fillblank", prompt: "Rewrite: 'The city is cleaner, so life is healthier.' → ______________ (The cleaner) the city is, the healthier life is.", accepted: ["The cleaner"], correct: "The cleaner", explanation: "so (nhân quả) → The + so sánh hơn ..., the + so sánh hơn ..." }
      ]
    }
  ],

  // ---------------------------------------------------------
  // PART 6 — QUICK REVIEW (mini test, all skills)
  // ---------------------------------------------------------
  quickReview: [
    { id: "q1", cat: "Vocabulary", type: "mcq", prompt: "'Bustling' means:", options: { A: "yên tĩnh", B: "nhộn nhịp, sầm uất", C: "buồn tẻ", D: "hoang vắng" }, correct: "B", explanation: "bustling (adj) = nhộn nhịp, sầm uất." },
    { id: "q2", cat: "Vocabulary", type: "mcq", prompt: "'Solace' means:", options: { A: "sự lo lắng", B: "sự khuây khỏa, an ủi", C: "sự tức giận", D: "sự nhàm chán" }, correct: "B", explanation: "solace (n) = sự an ủi, khuây khỏa." },
    { id: "q3", cat: "Vocabulary", type: "fillblank", prompt: "We've ______________ (dùng hết) all the milk in the fridge.", accepted: ["run out of"], correct: "run out of", explanation: "run out of (phr v) = dùng hết, hết sạch." },
    { id: "q4", cat: "Grammar", type: "mcq", prompt: "Mary doesn't study as well as she used to. → Mary used to study ______ than she does now.", options: { A: "better", B: "good", C: "best", D: "well" }, correct: "A", explanation: "used to + so sánh hơn + than + now." },
    { id: "q5", cat: "Grammar", type: "mcq", prompt: "My current house is more spacious than the old one. → My old house is not ______ spacious as my current one.", options: { A: "so", B: "as", C: "than", D: "more" }, correct: "B", explanation: "not as ... as (so sánh bằng phủ định)." },
    { id: "q6", cat: "Grammar", type: "fillblank", prompt: "Because the crime rates are high, some cities are not safe. → Some cities are not safe ______________ (because of) high crime rates.", accepted: ["because of"], correct: "because of", explanation: "Because + mệnh đề → because of + N." },
    { id: "q7", cat: "Grammar", type: "fillblank", prompt: "The traffic flow is smooth, so the commute is good. → The smoother the traffic flow is, ______________ (the better) the commute.", accepted: ["the better"], correct: "the better", explanation: "so (nhân quả) → The + so sánh hơn ..., the + so sánh hơn ..." },
    { id: "q8", cat: "Reading", type: "truefalse", prompt: "Efficient public transport systems help reduce pollution and traffic jams in cities.", correct: "True", explanation: "Đúng theo bài đọc." },
    { id: "q9", cat: "Reading", type: "truefalse", prompt: "Public transportation systems in large cities currently do not face any problems or difficulties.", correct: "False", explanation: "Sai. Bài đọc nói hệ thống này vẫn còn nhiều thách thức." },
    { id: "q10", cat: "Reading", type: "mcq", prompt: "What is the main idea of the public transportation passage?", options: { A: "The importance, benefits, and challenges of public transportation in cities.", B: "The history of subway systems.", C: "How to drive safely in the city.", D: "The cost of building new roads." }, correct: "A", explanation: "Bài đọc trình bày tầm quan trọng, lợi ích, và thách thức của giao thông công cộng." },
    { id: "q11", cat: "Writing", type: "fillblank", prompt: "The city is ______________ (fame) for its lively atmosphere.", accepted: ["famous"], correct: "famous", explanation: "fame (n) → famous (adj)." },
    { id: "q12", cat: "Writing", type: "fillblank", prompt: "Many people find the city ______________ (appeal) because of its vibrant energy.", accepted: ["appealing"], correct: "appealing", explanation: "appeal (v) → appealing (adj)." },
    { id: "q13", cat: "Writing", type: "fillblank", prompt: "The public transport system needs to be ______________ (modern) and expanded.", accepted: ["modernized", "modernised"], correct: "modernized", explanation: "modern (adj) → modernize (v) → modernized (V3)." },
    { id: "q14", cat: "Vocabulary", type: "mcq", prompt: "Which word means 'công trường xây dựng'?", options: { A: "construction site", B: "playground", C: "quiet lake", D: "hospital" }, correct: "A", explanation: "construction site (n phr) = công trường xây dựng." }
  ]
};
