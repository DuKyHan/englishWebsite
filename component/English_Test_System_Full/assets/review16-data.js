const REVIEW = {
  id: "test16",
  testFile: "test16.html",
  grade: "Grade 9 — Global Success",
  unit: "Unit 2: City life",
  title: "Knowledge Review — Unit 2, Practice Test 2",

  // ---------------------------------------------------------
  // PART 1 — VOCABULARY REVIEW
  // ---------------------------------------------------------
  vocabulary: [
    { word: "car exhaust", pos: "n phr", ipa: "/kɑːr ɪɡˈzɔːst/", meaning: "khí thải xe hơi", example: "I hate the smell of car exhaust, and the underground is much cleaner.", exampleVi: "Tôi ghét mùi khí thải xe hơi, và tàu điện ngầm thì sạch hơn nhiều." },
    { word: "livable", pos: "adj", ipa: "/ˈlɪvəbl/", meaning: "đáng sống, dễ sống", example: "The public amenities make it a very livable place for everyone.", exampleVi: "Các tiện ích công cộng khiến nơi này trở nên rất đáng sống cho mọi người." },
    { word: "turn off", pos: "phr v", ipa: "/tɜːrn ɒf/", meaning: "tắt (thiết bị)", example: "I turned off the computer after I found the information I needed.", exampleVi: "Tôi đã tắt máy tính sau khi tìm được thông tin cần thiết." },
    { word: "construction site", pos: "n phr", ipa: "/kənˈstrʌkʃn saɪt/", meaning: "công trường xây dựng", example: "There's a construction site there. They are building a new shopping mall.", exampleVi: "Có một công trường xây dựng ở đó. Họ đang xây một trung tâm mua sắm mới." },
    { word: "bustling", pos: "adj", ipa: "/ˈbʌslɪŋ/", meaning: "nhộn nhịp, sầm uất", example: "It's like a concrete jungle with so many people. It's a bustling city.", exampleVi: "Nó giống như một rừng bê tông với rất nhiều người. Đó là một thành phố nhộn nhịp." },
    { word: "cost of living", pos: "n phr", ipa: "/kɒst əv ˈlɪvɪŋ/", meaning: "chi phí sinh hoạt", example: "The cost of living is low compared with other financial cities.", exampleVi: "Chi phí sinh hoạt thấp so với các thành phố tài chính khác." },
    { word: "affordable", pos: "adj", ipa: "/əˈfɔːrdəbl/", meaning: "có giá cả phải chăng", example: "Tokyo is clean, safe, and affordable.", exampleVi: "Tokyo sạch sẽ, an toàn, và có giá cả phải chăng." },
    { word: "sky-high", pos: "adj", ipa: "/skaɪ haɪ/", meaning: "cao ngất, rất cao (về giá cả)", example: "People talk about low taxes in Singapore where rents are sky-high.", exampleVi: "Người ta nói về thuế thấp ở Singapore nơi tiền thuê nhà lại cao ngất." },
    { word: "construction", pos: "n", ipa: "/kənˈstrʌkʃn/", meaning: "sự xây dựng, công trình xây dựng", example: "The street is noisy because of the ongoing construction.", exampleVi: "Con phố ồn ào vì công trình xây dựng đang diễn ra." },
    { word: "cleanliness", pos: "n", ipa: "/ˈklenlinəs/", meaning: "sự sạch sẽ", example: "The cleanliness of the streets makes this town very attractive.", exampleVi: "Sự sạch sẽ của các con đường khiến thị trấn này rất hấp dẫn." },
    { word: "infrastructure", pos: "n", ipa: "/ˈɪnfrəstrʌktʃər/", meaning: "cơ sở hạ tầng", example: "The infrastructure in this metropolis is very well developed.", exampleVi: "Cơ sở hạ tầng ở đô thị này được phát triển rất tốt." },
    { word: "traffic jam", pos: "n phr", ipa: "/ˈtræfɪk dʒæm/", meaning: "tắc nghẽn giao thông", example: "Traffic jams occur when there are too many cars on the roads.", exampleVi: "Tắc nghẽn giao thông xảy ra khi có quá nhiều xe trên đường." },
    { word: "congestion", pos: "n", ipa: "/kənˈdʒestʃən/", meaning: "sự tắc nghẽn", example: "Using public transport would ease traffic congestion.", exampleVi: "Sử dụng phương tiện công cộng sẽ giảm bớt sự tắc nghẽn giao thông." },
    { word: "green space", pos: "n phr", ipa: "/ɡriːn speɪs/", meaning: "không gian xanh", example: "One solution is to plant more trees and create more green spaces.", exampleVi: "Một giải pháp là trồng thêm cây xanh và tạo thêm không gian xanh." },
    { word: "sustainable", pos: "adj", ipa: "/səˈsteɪnəbl/", meaning: "bền vững", example: "We can make our city environment more sustainable and enjoyable.", exampleVi: "Chúng ta có thể làm cho môi trường thành phố bền vững và dễ chịu hơn." },
    { word: "livability", pos: "n", ipa: "/ˌlɪvəˈbɪləti/", meaning: "khả năng đáng sống", example: "Tokyo's rankings in several of the latest livability indexes speak for themselves.", exampleVi: "Thứ hạng của Tokyo trong nhiều bảng xếp hạng đáng sống mới nhất đã tự nói lên điều đó." },
    { word: "quality of life", pos: "n phr", ipa: "/ˈkwɒləti əv laɪf/", meaning: "chất lượng cuộc sống", example: "Tokyo ranked sixth on Monocle's Quality of Life Survey.", exampleVi: "Tokyo xếp thứ sáu trong khảo sát chất lượng cuộc sống của Monocle." },
    { word: "world-class", pos: "adj", ipa: "/ˈwɜːrld klæs/", meaning: "đẳng cấp thế giới", example: "Tokyo has world-class education and lots of international schools.", exampleVi: "Tokyo có nền giáo dục đẳng cấp thế giới và nhiều trường quốc tế." }
  ],

  vocabPractice: {
    mcq: [
      { id: "vp1", prompt: "Choose the word that means 'tắc nghẽn giao thông':", options: { A: "traffic jam", B: "green space", C: "construction site", D: "quality of life" }, correct: "A", explanation: "<b>traffic jam</b> (n phr) = tắc nghẽn giao thông." },
      { id: "vp2", prompt: "Choose the word that means 'bền vững':", options: { A: "affordable", B: "sustainable", C: "sky-high", D: "bustling" }, correct: "B", explanation: "<b>sustainable</b> (adj) = bền vững." },
      { id: "vp3", prompt: "Choose the best word: \"I hate the smell of ______, and it's much cleaner underground.\"", options: { A: "fresh air", B: "green trees", C: "car exhaust", D: "solar power" }, correct: "C", explanation: "\"<b>car exhaust</b>\" (khí thải xe hơi) phù hợp với việc thích đi tàu điện ngầm sạch hơn." },
      { id: "vp4", prompt: "Choose the word that means 'chi phí sinh hoạt':", options: { A: "cost of living", B: "quality of life", C: "green space", D: "world-class" }, correct: "A", explanation: "<b>cost of living</b> (n phr) = chi phí sinh hoạt." },
      { id: "vp5", prompt: "\"One solution is to plant more trees and create more ______.\"", options: { A: "traffic jams", B: "green spaces", C: "construction sites", D: "car exhaust" }, correct: "B", explanation: "\"<b>green spaces</b>\" (không gian xanh) phù hợp với giải pháp trồng thêm cây xanh." },
      { id: "vp6", prompt: "Choose the word that means 'cao ngất (giá cả)':", options: { A: "sky-high", B: "affordable", C: "cheap", D: "reasonable" }, correct: "A", explanation: "<b>sky-high</b> (adj) = cao ngất, rất cao (về giá cả)." }
    ],
    fillblank: [
      { id: "vf1", prompt: "The ______________ (chi phí sinh hoạt) is low compared with other financial cities.", accepted: ["cost of living"], correct: "cost of living", explanation: "<b>cost of living</b> (n phr) = chi phí sinh hoạt." },
      { id: "vf2", prompt: "Tokyo is clean, safe, and ______________ (có giá cả phải chăng).", accepted: ["affordable"], correct: "affordable", explanation: "<b>affordable</b> (adj) = có giá cả phải chăng." },
      { id: "vf3", prompt: "In Singapore, rents are ______________ (cao ngất).", accepted: ["sky-high"], correct: "sky-high", explanation: "<b>sky-high</b> (adj) = cao ngất, rất cao." },
      { id: "vf4", prompt: "Using public transport would ease traffic ______________ (sự tắc nghẽn).", accepted: ["congestion"], correct: "congestion", explanation: "<b>congestion</b> (n) = sự tắc nghẽn." },
      { id: "vf5", prompt: "We can make our city environment more ______________ (bền vững) and enjoyable.", accepted: ["sustainable"], correct: "sustainable", explanation: "<b>sustainable</b> (adj) = bền vững." },
      { id: "vf6", prompt: "Tokyo has ______________ (đẳng cấp thế giới) education and lots of international schools.", accepted: ["world-class"], correct: "world-class", explanation: "<b>world-class</b> (adj) = đẳng cấp thế giới." }
    ],
    matching: {
      left: ["infrastructure", "congestion", "sustainable", "livability", "affordable", "cleanliness"],
      right: ["cơ sở hạ tầng", "sự tắc nghẽn", "bền vững", "khả năng đáng sống", "có giá cả phải chăng", "sự sạch sẽ"],
      correctMap: [0, 1, 2, 3, 4, 5]
    },
    chooseWord: [
      { id: "cw1", prompt: "\"Tokyo is one of the most ______ cities in Asia.\" (LIVE)", options: { A: "live", B: "living", C: "livable", D: "lively" }, correct: "C", explanation: "Cần tính từ so sánh nhất sau \"most\" → live (v) → <b>livable</b> (adj)." },
      { id: "cw2", prompt: "\"The ______ of the streets makes this town attractive.\" (CLEAN)", options: { A: "clean", B: "cleanly", C: "cleanliness", D: "cleaner" }, correct: "C", explanation: "Cần danh từ làm chủ ngữ → clean (adj) → <b>cleanliness</b> (n)." },
      { id: "cw3", prompt: "\"The infrastructure is very well ______.\" (DEVELOP)", options: { A: "develop", B: "developing", C: "developed", D: "development" }, correct: "C", explanation: "Cần quá khứ phân từ (bị động) → develop (v) → <b>developed</b> (V3)." }
    ],
    wordMeaning: [
      { id: "wm1", prompt: "What does 'infrastructure' mean?", options: { A: "cơ sở hạ tầng", B: "dân số", C: "khí hậu", D: "văn hóa" }, correct: "A", explanation: "infrastructure (n) = cơ sở hạ tầng." },
      { id: "wm2", prompt: "What does 'congestion' mean?", options: { A: "sự thông thoáng", B: "sự tắc nghẽn", C: "sự sạch sẽ", D: "sự yên tĩnh" }, correct: "B", explanation: "congestion (n) = sự tắc nghẽn." },
      { id: "wm3", prompt: "What does 'sky-high' mean?", options: { A: "rất thấp", B: "vừa phải", C: "cao ngất", D: "miễn phí" }, correct: "C", explanation: "sky-high (adj) = cao ngất, rất cao." }
    ],
    wordForm: [
      { id: "wf1", prompt: "Tokyo is one of the most (LIVE) ______________ cities in Asia.", accepted: ["livable", "liveable"], correct: "livable", explanation: "live (v) → livable (adj)." },
      { id: "wf2", prompt: "The (CLEAN) ______________ of the streets makes this town attractive.", accepted: ["cleanliness"], correct: "cleanliness", explanation: "clean (adj) → cleanliness (n)." },
      { id: "wf3", prompt: "There are many (HISTORY) ______________ buildings in the center of London.", accepted: ["historical"], correct: "historical", explanation: "history (n) → historical (adj)." }
    ]
  },

  // ---------------------------------------------------------
  // PART 2 — GRAMMAR REVIEW & PRACTICE
  // ---------------------------------------------------------
  grammar: [
    {
      id: "g1", name: "So sánh hơn với tính từ đối nghĩa (more expensive than ⇄ cheaper than)",
      usage: "Khi đảo chủ ngữ và tân ngữ so sánh, tính từ so sánh hơn thường được thay bằng tính từ mang nghĩa đối lập (trái nghĩa) để giữ nguyên ý nghĩa của câu.",
      formulas: [
        "A + is more + adj + than + B.  →  B + is + adj đối nghĩa (so sánh hơn) + than + A.",
        "Living in the city is much more expensive than living in the countryside. → Living in the countryside is much cheaper than living in the city."
      ],
      signals: ["more expensive than", "cheaper than"],
      examples: [
        { en: "Living in the city is much more expensive than living in the countryside.", vi: "Sống ở thành phố đắt đỏ hơn nhiều so với sống ở nông thôn." },
        { en: "Living in the countryside is much cheaper than living in the city.", vi: "Sống ở nông thôn rẻ hơn nhiều so với sống ở thành phố." }
      ],
      mistakes: [
        { wrong: "Living in the countryside is more cheap than living in the city.", right: "Living in the countryside is cheaper than living in the city." }
      ],
      practice: {
        level1: [
          { id: "g1l1a", type: "fillblank", prompt: "The new phone is more expensive than the old one. → The old phone is ______________ (cheaper) than the new one.", accepted: ["cheaper"], correct: "cheaper", explanation: "more expensive than → cheaper than (đảo chủ ngữ, đổi tính từ đối nghĩa)." }
        ],
        level2: [
          { id: "g1l2a", type: "fillblank", prompt: "Rewrite: 'This building is taller than that one.' → That building is ______________ (shorter) than this one.", accepted: ["shorter"], correct: "shorter", explanation: "taller than → shorter than (đảo chủ ngữ, đổi tính từ đối nghĩa)." }
        ],
        level3: [
          { id: "g1l3a", type: "fillblank", prompt: "Rewrite so it keeps the same meaning: 'Traveling by plane is faster than traveling by train.' → ______________ (Traveling by train is slower than traveling by plane).", accepted: ["traveling by train is slower than traveling by plane"], correct: "Traveling by train is slower than traveling by plane", explanation: "faster than → slower than (đảo chủ ngữ, đổi tính từ đối nghĩa)." }
        ]
      }
    },
    {
      id: "g2", name: "So sánh hơn ⇄ So sánh bằng phủ định (not as ... as)",
      usage: "\"A + V + so sánh hơn + than + B\" có thể chuyển thành \"B + doesn't/don't + V + as + adv + as + A\" — cùng khẳng định A hơn B mà không đổi nghĩa.",
      formulas: [
        "A + V + so sánh hơn (adv) + than + B.  →  B + doesn't/don't + V + as + adv + as + A.",
        "Her sister always runs more quickly than her. → She doesn't always run as quickly as her sister."
      ],
      signals: ["more quickly than", "not as quickly as"],
      examples: [
        { en: "Her sister always runs more quickly than her.", vi: "Chị/em gái cô ấy luôn chạy nhanh hơn cô ấy." },
        { en: "She doesn't always run as quickly as her sister.", vi: "Cô ấy không phải lúc nào cũng chạy nhanh bằng chị/em gái mình." }
      ],
      mistakes: [
        { wrong: "She doesn't run as quickly than her sister.", right: "She doesn't run as quickly as her sister." }
      ],
      practice: {
        level1: [
          { id: "g2l1a", type: "fillblank", prompt: "He drives more carefully than his brother. → His brother doesn't drive as ______________ (carefully) as him.", accepted: ["carefully"], correct: "carefully", explanation: "more carefully than → not as carefully as." }
        ],
        level2: [
          { id: "g2l2a", type: "fillblank", prompt: "Rewrite: 'My father works harder than my uncle.' → My uncle doesn't work as ______________ (hard) as my father.", accepted: ["hard"], correct: "hard", explanation: "harder than → not as hard as." }
        ],
        level3: [
          { id: "g2l3a", type: "fillblank", prompt: "Rewrite so it keeps the same meaning: 'The new bus arrives more punctually than the old one.' → ______________ (The old bus doesn't arrive as punctually as the new one).", accepted: ["the old bus doesn't arrive as punctually as the new one"], correct: "The old bus doesn't arrive as punctually as the new one", explanation: "more punctually than → not as punctually as." }
        ]
      }
    },
    {
      id: "g3", name: "Chủ động ⇄ Bị động (thì quá khứ đơn)",
      usage: "Khi chuyển câu chủ động sang bị động ở thì quá khứ đơn, tân ngữ của câu chủ động trở thành chủ ngữ của câu bị động, động từ chuyển thành \"was/were + V3\".",
      formulas: [
        "S + V(ed) + O.  →  O + was/were + V3.",
        "Tokyo ranked second on the Best Cities Index in 2022. → Tokyo was ranked second on the Best Cities Index in 2022."
      ],
      signals: ["was/were + V3"],
      examples: [
        { en: "Tokyo ranked second on the Best Cities Index in 2022.", vi: "Tokyo xếp thứ hai trong Bảng xếp hạng Các Thành phố Tốt nhất năm 2022." },
        { en: "Tokyo was ranked second on the Best Cities Index in 2022.", vi: "Tokyo đã được xếp thứ hai trong Bảng xếp hạng Các Thành phố Tốt nhất năm 2022." }
      ],
      mistakes: [
        { wrong: "Tokyo was rank second in 2022.", right: "Tokyo was ranked second in 2022." }
      ],
      practice: {
        level1: [
          { id: "g3l1a", type: "fillblank", prompt: "The city built a new subway line last year. → A new subway line ______________ (build) last year.", accepted: ["was built"], correct: "was built", explanation: "Chủ động → bị động: was + V3." }
        ],
        level2: [
          { id: "g3l2a", type: "fillblank", prompt: "Rewrite: 'The magazine ranked the city fifth for livability.' → The city ______________ (rank) fifth for livability by the magazine.", accepted: ["was ranked"], correct: "was ranked", explanation: "Chủ động → bị động: was + V3 + by." }
        ],
        level3: [
          { id: "g3l3a", type: "fillblank", prompt: "Rewrite so it keeps the same meaning: 'The council opened the new park last month.' → ______________ (The new park was opened by the council last month).", accepted: ["the new park was opened by the council last month"], correct: "The new park was opened by the council last month", explanation: "Chủ động → bị động: was + V3 + by." }
        ]
      }
    },
    {
      id: "g4", name: "Câu điều kiện loại 1 ⇄ The more ..., the + so sánh hơn ...",
      usage: "Câu điều kiện loại 1 (If + hiện tại đơn, S + will + V) mô tả mối quan hệ tỉ lệ thuận giữa hai vế có thể chuyển thành cấu trúc so sánh kép \"The more ..., the + so sánh hơn ...\".",
      formulas: [
        "If + S + V (hiện tại), S + will + V (so sánh hơn).  →  The more + N/adj, the + so sánh hơn + S + will + V.",
        "If we plant more trees, the air will be cleaner. → The more trees we plant, the cleaner the air will be."
      ],
      signals: ["If ... will", "The more ..., the ..."],
      examples: [
        { en: "If we plant more trees, the air will be cleaner.", vi: "Nếu chúng ta trồng nhiều cây hơn, không khí sẽ trong lành hơn." },
        { en: "The more trees we plant, the cleaner the air will be.", vi: "Chúng ta càng trồng nhiều cây, không khí sẽ càng trong lành." }
      ],
      mistakes: [
        { wrong: "The more trees we plant, the air will be more clean.", right: "The more trees we plant, the cleaner the air will be." }
      ],
      practice: {
        level1: [
          { id: "g4l1a", type: "fillblank", prompt: "If you study harder, you will get better grades. → The harder you study, ______________ (the better) grades you will get.", accepted: ["the better"], correct: "the better", explanation: "If ... will → The more/harder ..., the + so sánh hơn ..." }
        ],
        level2: [
          { id: "g4l2a", type: "fillblank", prompt: "Rewrite: 'If we use less plastic, the ocean will be cleaner.' → ______________ (The less plastic) we use, the cleaner the ocean will be.", accepted: ["The less plastic"], correct: "The less plastic", explanation: "If ... will → The less ..., the + so sánh hơn ..." }
        ],
        level3: [
          { id: "g4l3a", type: "fillblank", prompt: "Rewrite so it keeps the same meaning: 'If more people cycle to work, the city will be less polluted.' → ______________ (The more people cycle to work, the less polluted the city will be).", accepted: ["the more people cycle to work, the less polluted the city will be"], correct: "The more people cycle to work, the less polluted the city will be", explanation: "If ... will → The more ..., the + so sánh hơn ..." }
        ]
      }
    },
    {
      id: "g5", name: "Đại từ quan hệ chỉ nơi chốn \"where\"",
      usage: "\"where\" làm đại từ quan hệ, thay thế cho một danh từ chỉ nơi chốn (địa điểm, thành phố, quốc gia...) đứng trước nó, dùng để bổ sung thông tin về nơi chốn đó.",
      formulas: [
        "N (nơi chốn) + where + S + V ... (where = tại đó, ở đó)",
        "People talk about low taxes in Singapore where rents are sky-high."
      ],
      signals: ["N (place), where + S + V"],
      examples: [
        { en: "People talk about low taxes in Singapore where rents are sky-high.", vi: "Người ta nói về thuế thấp ở Singapore, nơi mà tiền thuê nhà lại rất cao." },
        { en: "Tokyo is a city where people can enjoy a high quality of life.", vi: "Tokyo là một thành phố nơi mọi người có thể tận hưởng chất lượng cuộc sống cao." }
      ],
      mistakes: [
        { wrong: "Singapore, which rents are sky-high.", right: "Singapore, where rents are sky-high. (dùng \"where\" cho nơi chốn, không dùng \"which\")" }
      ],
      practice: {
        level1: [
          { id: "g5l1a", type: "fillblank", prompt: "This is the neighborhood ______________ (where) I grew up.", accepted: ["where"], correct: "where", explanation: "\"where\" thay cho danh từ chỉ nơi chốn \"the neighborhood\"." }
        ],
        level2: [
          { id: "g5l2a", type: "fillblank", prompt: "Combine: 'Tokyo is a city. Public transport is very reliable there.' → Tokyo is a city ______________ (where) public transport is very reliable.", accepted: ["where"], correct: "where", explanation: "\"where\" thay cho danh từ chỉ nơi chốn \"a city\"." }
        ],
        level3: [
          { id: "g5l3a", type: "fillblank", prompt: "Combine so it keeps the same meaning: 'This is the park. Children can play safely there.' → ______________ (This is the park where children can play safely).", accepted: ["this is the park where children can play safely"], correct: "This is the park where children can play safely", explanation: "\"where\" thay cho danh từ chỉ nơi chốn \"the park\"." }
        ]
      }
    }
  ],

  // ---------------------------------------------------------
  // PART 3 — READING PRACTICE
  // ---------------------------------------------------------
  reading: {
    passage: "Traffic jams and pollution are two big problems in the city. Traffic jams occur when there are too many cars on the roads, making it difficult for people to move around quickly. To solve this, cities can encourage people to use public transportation, like buses or trains, instead of driving their own cars. This would reduce the number of vehicles on the roads, <mark data-w=\"easing\">easing</mark> traffic congestion. Pollution is another issue in cities because there is too much dirty air from vehicles and <mark data-w=\"factories\">factories</mark>. One solution for this problem is to plant more trees and create more green spaces in the city. Trees provide <mark data-w=\"oxygen\">oxygen</mark> and clean the air. By increasing the number of trees, cities can improve air <mark data-w=\"quality\">quality</mark> and make the environment healthier for everyone. In conclusion, we all need to work together to solve the problems of traffic and pollution. By using public transportation and starting <mark data-w=\"green projects\">green projects</mark> like planting trees, we can make our city environment more sustainable and enjoyable.",
    vocabInContext: {
      easing: "làm dịu bớt, giảm bớt",
      factories: "nhà máy",
      oxygen: "khí ô-xy",
      quality: "chất lượng",
      "green projects": "dự án xanh, dự án bảo vệ môi trường"
    },
    translation: "<b>GIẢI QUYẾT VẤN ĐỀ GIAO THÔNG VÀ Ô NHIỄM Ở THÀNH PHỐ</b><br><br>Tắc nghẽn giao thông và ô nhiễm là hai vấn đề lớn ở thành phố. Tắc nghẽn giao thông xảy ra khi có quá nhiều xe trên đường, khiến người dân khó di chuyển nhanh chóng. Để giải quyết vấn đề này, các thành phố có thể khuyến khích người dân sử dụng phương tiện công cộng, như xe buýt hoặc tàu hỏa, thay vì lái xe riêng. Điều này sẽ giảm số lượng phương tiện trên đường, giảm bớt tình trạng tắc nghẽn giao thông. Ô nhiễm là một vấn đề khác ở các thành phố vì có quá nhiều không khí bẩn từ phương tiện giao thông và nhà máy. Một giải pháp cho vấn đề này là trồng thêm cây xanh và tạo thêm không gian xanh trong thành phố. Cây cối cung cấp ô-xy và làm sạch không khí. Bằng cách tăng số lượng cây xanh, các thành phố có thể cải thiện chất lượng không khí và làm cho môi trường trở nên lành mạnh hơn cho mọi người. Tóm lại, tất cả chúng ta cần cùng nhau giải quyết các vấn đề về giao thông và ô nhiễm. Bằng cách sử dụng phương tiện công cộng và khởi động các dự án xanh như trồng cây, chúng ta có thể làm cho môi trường thành phố của mình bền vững và dễ chịu hơn.",
    practice: [
      { id: "r1", type: "truefalse", prompt: "Traffic congestion makes it easy for people to travel quickly around the city.", correct: "False", explanation: "Sai. Bài đọc: 'making it difficult for people to move around quickly.'" },
      { id: "r2", type: "truefalse", prompt: "Using public transportation can help reduce the number of cars on the roads.", correct: "True", explanation: "Bài đọc: 'This would reduce the number of vehicles on the roads.'" },
      { id: "r3", type: "truefalse", prompt: "Dirty air in cities is only caused by different types of vehicles.", correct: "False", explanation: "Sai. Bài đọc: 'dirty air from vehicles and factories' — không chỉ do phương tiện." },
      { id: "r4", type: "truefalse", prompt: "Planting more trees is a good way to improve the quality of air in cities.", correct: "True", explanation: "Bài đọc: 'By increasing the number of trees, cities can improve air quality.'" },
      { id: "r5", type: "mcq", prompt: "What is the main idea of the passage?", options: { A: "The history of public transportation development in big cities.", B: "The causes of traffic jams and how to drive cars safely.", C: "Common city problems and solutions to make the environment better.", D: "The importance of factories and vehicles in modern economy." }, correct: "C", explanation: "Bài đọc nêu hai vấn đề (tắc nghẽn, ô nhiễm) cùng các giải pháp tương ứng." },
      { id: "r6", type: "mcq", prompt: "Which of the following is NOT true according to the passage?", options: { A: "Buses and trains are examples of public transportation.", B: "Trees make the city environment healthier by providing oxygen.", C: "Only the local government needs to work to solve city problems.", D: "Green projects can help make our city environment more sustainable." }, correct: "C", explanation: "Bài đọc nói 'we all need to work together', không phải chỉ chính quyền địa phương." },
      { id: "r7", type: "fillblank", prompt: "Find the word in the passage that means 'khí ô-xy' (n).", accepted: ["oxygen"], correct: "oxygen", explanation: "'Trees provide oxygen and clean the air.' — oxygen (n) = khí ô-xy." },
      { id: "r8", type: "mcq", prompt: "According to the passage, what can cities do to solve traffic jams?", options: { A: "Encourage people to use public transportation instead of driving their own cars.", B: "Build more parking lots downtown.", C: "Ban all buses and trains.", D: "Increase the price of petrol." }, correct: "A", explanation: "Bài đọc: 'cities can encourage people to use public transportation ... instead of driving their own cars.'" },
      { id: "r9", type: "truefalse", prompt: "According to the passage, trees have no effect on air quality in cities.", correct: "False", explanation: "Sai. Bài đọc: 'Trees provide oxygen and clean the air.'" }
    ]
  },

  // ---------------------------------------------------------
  // PART 4 — TRANSLATION PRACTICE
  // ---------------------------------------------------------
  translation: [
    { id: "t1", en: "Tokyo's rankings in several of the latest livability indexes speak for themselves.", suggested: "Thứ hạng của Tokyo trong nhiều bảng xếp hạng đáng sống mới nhất đã tự nói lên điều đó.", notes: "'speak for themselves' (tự nói lên điều đó, quá rõ ràng không cần giải thích thêm)." },
    { id: "t2", en: "The cleanliness and safety make it comfortable to live here.", suggested: "Sự sạch sẽ và an toàn khiến nơi đây trở nên thoải mái để sinh sống.", notes: "'make it + adj + to V' (khiến cho việc gì trở nên như thế nào)." },
    { id: "t3", en: "Tokyo is clean and safe, with world-class education and lots of international schools.", suggested: "Tokyo sạch sẽ và an toàn, với nền giáo dục đẳng cấp thế giới và nhiều trường quốc tế.", notes: "'with + cụm danh từ' bổ sung thông tin đi kèm." },
    { id: "t4", en: "To solve this, cities can encourage people to use public transportation instead of driving their own cars.", suggested: "Để giải quyết vấn đề này, các thành phố có thể khuyến khích người dân sử dụng phương tiện công cộng thay vì lái xe riêng.", notes: "'instead of + V-ing' (thay vì làm gì)." },
    { id: "t5", en: "By using public transportation and starting green projects like planting trees, we can make our city environment more sustainable and enjoyable.", suggested: "Bằng cách sử dụng phương tiện công cộng và khởi động các dự án xanh như trồng cây, chúng ta có thể làm cho môi trường thành phố bền vững và dễ chịu hơn.", notes: "'By + V-ing' (bằng cách làm gì) mở đầu câu nêu phương tiện/cách thức." }
  ],

  // ---------------------------------------------------------
  // PART 5 — SENTENCE TRANSFORMATION PRACTICE
  // ---------------------------------------------------------
  transformation: [
    {
      id: "tr1", name: "So sánh hơn với tính từ đối nghĩa",
      formula: "A + is more + adj + than + B  →  B + is + adj đối nghĩa (so sánh hơn) + than + A",
      example: { before: "Living in the city is much more expensive than living in the countryside.", after: "Living in the countryside is much cheaper than living in the city." },
      practice: [
        { id: "tr1p1", type: "fillblank", prompt: "This laptop is more expensive than that tablet. → That tablet is ______________ (cheaper) than this laptop.", accepted: ["cheaper"], correct: "cheaper", explanation: "more expensive than → cheaper than." },
        { id: "tr1p2", type: "fillblank", prompt: "Rewrite: 'The mountain road is more dangerous than the highway.' → The highway is ______________ (safer) than the mountain road.", accepted: ["safer"], correct: "safer", explanation: "more dangerous than → safer than." }
      ]
    },
    {
      id: "tr2", name: "So sánh hơn ⇄ not as ... as",
      formula: "A + V + so sánh hơn (adv) + than + B  →  B + doesn't/don't + V + as + adv + as + A",
      example: { before: "Her sister always runs more quickly than her.", after: "She doesn't always run as quickly as her sister." },
      practice: [
        { id: "tr2p1", type: "fillblank", prompt: "My brother sings more beautifully than me. → I don't sing as ______________ (beautifully) as my brother.", accepted: ["beautifully"], correct: "beautifully", explanation: "more beautifully than → not as beautifully as." },
        { id: "tr2p2", type: "fillblank", prompt: "Rewrite: 'The express train travels faster than the local one.' → The local train doesn't travel as ______________ (fast) as the express train.", accepted: ["fast"], correct: "fast", explanation: "faster than → not as fast as." }
      ]
    },
    {
      id: "tr3", name: "Chủ động ⇄ Bị động (quá khứ đơn)",
      formula: "S + V(ed) + O  →  O + was/were + V3",
      example: { before: "Tokyo ranked second on the Best Cities Index in 2022.", after: "Tokyo was ranked second on the Best Cities Index in 2022." },
      practice: [
        { id: "tr3p1", type: "fillblank", prompt: "The city launched a new bike-sharing scheme last year. → A new bike-sharing scheme ______________ (launch) last year.", accepted: ["was launched"], correct: "was launched", explanation: "Chủ động → bị động: was + V3." },
        { id: "tr3p2", type: "fillblank", prompt: "Rewrite: 'The survey ranked the city third for safety.' → The city ______________ (rank) third for safety.", accepted: ["was ranked"], correct: "was ranked", explanation: "Chủ động → bị động: was + V3." }
      ]
    },
    {
      id: "tr4", name: "Câu điều kiện loại 1 ⇄ The more ..., the + so sánh hơn ...",
      formula: "If + S + V, S + will + V  →  The more/adj-er + N, the + so sánh hơn + S + will + V",
      example: { before: "If we plant more trees, the air will be cleaner.", after: "The more trees we plant, the cleaner the air will be." },
      practice: [
        { id: "tr4p1", type: "fillblank", prompt: "If more people use bikes, the streets will be quieter. → ______________ (The more people) use bikes, the quieter the streets will be.", accepted: ["The more people"], correct: "The more people", explanation: "If ... will → The more ..., the + so sánh hơn ..." },
        { id: "tr4p2", type: "fillblank", prompt: "Rewrite: 'If the city builds more parks, residents will be happier.' → ______________ (The more parks) the city builds, the happier residents will be.", accepted: ["The more parks"], correct: "The more parks", explanation: "If ... will → The more ..., the + so sánh hơn ..." }
      ]
    }
  ],

  // ---------------------------------------------------------
  // PART 6 — QUICK REVIEW (mini test, all skills)
  // ---------------------------------------------------------
  quickReview: [
    { id: "q1", cat: "Vocabulary", type: "mcq", prompt: "'Sustainable' means:", options: { A: "bền vững", B: "tạm thời", C: "nguy hiểm", D: "đắt đỏ" }, correct: "A", explanation: "sustainable (adj) = bền vững." },
    { id: "q2", cat: "Vocabulary", type: "mcq", prompt: "'Congestion' means:", options: { A: "sự thông thoáng", B: "sự tắc nghẽn", C: "sự yên tĩnh", D: "sự sạch sẽ" }, correct: "B", explanation: "congestion (n) = sự tắc nghẽn." },
    { id: "q3", cat: "Vocabulary", type: "fillblank", prompt: "Tokyo is clean, safe, and ______________ (affordable).", accepted: ["affordable"], correct: "affordable", explanation: "affordable (adj) = có giá cả phải chăng." },
    { id: "q4", cat: "Grammar", type: "mcq", prompt: "Living in the city is more expensive than living in the countryside. → Living in the countryside is ______ than living in the city.", options: { A: "cheaper", B: "more expensive", C: "as expensive", D: "less cheap" }, correct: "A", explanation: "more expensive than → cheaper than." },
    { id: "q5", cat: "Grammar", type: "mcq", prompt: "Her sister always runs more quickly than her. → She doesn't always run ______ quickly as her sister.", options: { A: "so", B: "as", C: "than", D: "more" }, correct: "B", explanation: "not as ... as (so sánh bằng phủ định)." },
    { id: "q6", cat: "Grammar", type: "fillblank", prompt: "Tokyo ranked second in 2022. → Tokyo ______________ (was ranked) second in 2022.", accepted: ["was ranked"], correct: "was ranked", explanation: "Chủ động → bị động: was + V3." },
    { id: "q7", cat: "Grammar", type: "fillblank", prompt: "If we plant more trees, the air will be cleaner. → The more trees we plant, ______________ (the cleaner) the air will be.", accepted: ["the cleaner"], correct: "the cleaner", explanation: "If ... will → The more ..., the + so sánh hơn ..." },
    { id: "q8", cat: "Reading", type: "truefalse", prompt: "Using public transportation can help reduce the number of cars on the roads.", correct: "True", explanation: "Đúng theo bài đọc." },
    { id: "q9", cat: "Reading", type: "truefalse", prompt: "Dirty air in cities is only caused by different types of vehicles.", correct: "False", explanation: "Sai. Bài đọc nói khí bẩn đến từ cả xe cộ và nhà máy." },
    { id: "q10", cat: "Reading", type: "mcq", prompt: "What is the main idea of the traffic and pollution passage?", options: { A: "Common city problems and solutions to make the environment better.", B: "The history of traffic laws.", C: "How factories are built.", D: "The cost of planting trees." }, correct: "A", explanation: "Bài đọc nêu hai vấn đề (giao thông, ô nhiễm) cùng giải pháp." },
    { id: "q11", cat: "Writing", type: "fillblank", prompt: "The infrastructure is very well ______________ (develop).", accepted: ["developed"], correct: "developed", explanation: "develop (v) → developed (V3, bị động)." },
    { id: "q12", cat: "Writing", type: "fillblank", prompt: "There are many ______________ (history) buildings in the center of London.", accepted: ["historical"], correct: "historical", explanation: "history (n) → historical (adj)." },
    { id: "q13", cat: "Writing", type: "fillblank", prompt: "We should support local ______________ (music) to preserve our culture.", accepted: ["musicians"], correct: "musicians", explanation: "music (n) → musician(s) (n, người)." },
    { id: "q14", cat: "Vocabulary", type: "mcq", prompt: "Which word means 'dự án xanh'?", options: { A: "green projects", B: "traffic jams", C: "cost of living", D: "construction site" }, correct: "A", explanation: "green projects (n phr) = dự án xanh, dự án bảo vệ môi trường." }
  ]
};
