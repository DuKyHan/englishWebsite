const REVIEW = {
  id: "test32",
  testFile: "test32.html",
  grade: "Grade 6 — Global Success",
  unit: "Unit 4: My neighbourhood",
  title: "Knowledge Review — Unit 4, Practice Test 2",

  // ---------------------------------------------------------
  // PART 1 — VOCABULARY REVIEW
  // ---------------------------------------------------------
  vocabulary: [
    { word: "wealthy", pos: "adj", ipa: "/ˈwelθi/", meaning: "giàu có", example: "London is a very wealthy city, but it is also highly polluted.", exampleVi: "London là một thành phố rất giàu có, nhưng cũng bị ô nhiễm nặng." },
    { word: "polluted", pos: "adj", ipa: "/pəˈluːtɪd/", meaning: "bị ô nhiễm", example: "London is a very wealthy city, but it is also highly polluted.", exampleVi: "London là một thành phố rất giàu có, nhưng cũng bị ô nhiễm nặng." },
    { word: "historic", pos: "adj", ipa: "/hɪˈstɔːrɪk/", meaning: "mang tính lịch sử, cổ kính", example: "Last weekend, my family visited many historic houses in the old town.", exampleVi: "Cuối tuần trước, gia đình tôi đã tham quan nhiều ngôi nhà cổ kính ở khu phố cổ." },
    { word: "noisily", pos: "adv", ipa: "/ˈnɔɪzɪli/", meaning: "một cách ồn ào", example: "The children played noisily in the new playground all afternoon.", exampleVi: "Bọn trẻ chơi ồn ào ở sân chơi mới suốt cả buổi chiều." },
    { word: "beautiful", pos: "adj", ipa: "/ˈbjuːtɪfl/", meaning: "đẹp", example: "The park was full of beautiful flowers and tall trees.", exampleVi: "Công viên đầy hoa đẹp và cây cao." },
    { word: "exciting", pos: "adj", ipa: "/ɪkˈsaɪtɪŋ/", meaning: "thú vị", example: "Exploring a new neighborhood is a very exciting experience.", exampleVi: "Khám phá một khu phố mới là một trải nghiệm rất thú vị." },
    { word: "backyard", pos: "n", ipa: "/ˈbækjɑːrd/", meaning: "sân sau nhà", example: "My father grows all these vegetables in his backyard.", exampleVi: "Bố tôi trồng tất cả những loại rau này ở sân sau nhà." },
    { word: "rewarding", pos: "adj", ipa: "/rɪˈwɔːrdɪŋ/", meaning: "đáng công sức, bổ ích", example: "Alex believes farming is a rewarding job.", exampleVi: "Alex tin rằng làm nông là một công việc bổ ích." },
    { word: "agriculture", pos: "n", ipa: "/ˈæɡrɪkʌltʃər/", meaning: "nông nghiệp", example: "He is studying agriculture at school because he wants to learn more about farming.", exampleVi: "Cậu ấy đang học nông nghiệp ở trường vì muốn tìm hiểu thêm về nghề nông." },
    { word: "farmer", pos: "n", ipa: "/ˈfɑːrmər/", meaning: "nông dân", example: "Alex enjoys working outside and hopes to be a farmer one day.", exampleVi: "Alex thích làm việc ngoài trời và hy vọng sẽ trở thành nông dân một ngày nào đó." },
    { word: "neighbourhood", pos: "n", ipa: "/ˈneɪbəhʊd/", meaning: "khu phố, khu dân cư", example: "We live in a quiet neighbourhood just outside the city.", exampleVi: "Chúng tôi sống trong một khu phố yên tĩnh ngay ngoài thành phố." },
    { word: "tourist", pos: "n", ipa: "/ˈtʊrɪst/", meaning: "khách du lịch", example: "There are more and more tourists and visitors coming to London for sightseeing.", exampleVi: "Ngày càng có nhiều khách du lịch đến London để tham quan." },
    { word: "traffic jam", pos: "n", ipa: "/ˈtræfɪk dʒæm/", meaning: "tắc đường", example: "Now, traffic jams are worse than ever before.", exampleVi: "Bây giờ, tình trạng tắc đường tồi tệ hơn bao giờ hết." },
    { word: "public transport", pos: "n", ipa: "/ˈpʌblɪk ˈtrænspɔːrt/", meaning: "giao thông công cộng", example: "The public means of transport is cheaper than cars.", exampleVi: "Phương tiện giao thông công cộng rẻ hơn xe hơi riêng." },
    { word: "suburb", pos: "n", ipa: "/ˈsʌbɜːrb/", meaning: "ngoại ô", example: "Traffic in the city centre is heavier than that in the suburbs.", exampleVi: "Giao thông ở trung tâm thành phố đông đúc hơn ở vùng ngoại ô." },
    { word: "industry", pos: "n", ipa: "/ˈɪndəstri/", meaning: "công nghiệp", example: "London is more polluted because of the city's industry, vehicles, and plenty of people.", exampleVi: "London bị ô nhiễm hơn vì công nghiệp, phương tiện giao thông và đông dân số của thành phố." },
    { word: "railway station", pos: "n", ipa: "/ˈreɪlweɪ ˈsteɪʃn/", meaning: "ga xe lửa", example: "Excuse me, how can I get to the railway station?", exampleVi: "Xin lỗi, làm sao tôi có thể đến ga xe lửa?" },
    { word: "worse", pos: "adj", ipa: "/wɜːrs/", meaning: "tệ hơn (so sánh hơn của \"bad\")", example: "Air quality in this area is much worse than it was a few years ago.", exampleVi: "Chất lượng không khí ở khu vực này tệ hơn nhiều so với vài năm trước." }
  ],

  vocabPractice: {
    mcq: [
      { id: "vp1", prompt: "Choose the word that means 'bị ô nhiễm':", options: { A: "polluted", B: "wealthy", C: "historic", D: "exciting" }, correct: "A", explanation: "<b>polluted</b> (adj) = bị ô nhiễm." },
      { id: "vp2", prompt: "Choose the word that means 'tắc đường':", options: { A: "traffic jam", B: "railway station", C: "public transport", D: "suburb" }, correct: "A", explanation: "<b>traffic jam</b> (n) = tắc đường." },
      { id: "vp3", prompt: "\"My father grows all these vegetables in his ______.\"", options: { A: "backyard", B: "suburb", C: "industry", D: "neighbourhood" }, correct: "A", explanation: "\"<b>backyard</b>\" (sân sau nhà) là nơi trồng rau phổ biến." },
      { id: "vp4", prompt: "Choose the word that means 'nông dân':", options: { A: "farmer", B: "tourist", C: "resident", D: "guide" }, correct: "A", explanation: "<b>farmer</b> (n) = nông dân." },
      { id: "vp5", prompt: "\"Air quality in this area is much ______ than it was a few years ago.\"", options: { A: "worse", B: "best", C: "good", D: "well" }, correct: "A", explanation: "So sánh hơn bất quy tắc của \"bad\" là \"<b>worse</b>\"." },
      { id: "vp6", prompt: "Choose the word that means 'giàu có':", options: { A: "wealthy", B: "polluted", C: "crowded", D: "noisy" }, correct: "A", explanation: "<b>wealthy</b> (adj) = giàu có." }
    ],
    fillblank: [
      { id: "vf1", prompt: "Last weekend, my family visited many ______________ (mang tính lịch sử) houses in the old town.", accepted: ["historic"], correct: "historic", explanation: "<b>historic</b> (adj) = mang tính lịch sử, cổ kính." },
      { id: "vf2", prompt: "He is studying ______________ (nông nghiệp) at school because he wants to learn more about farming.", accepted: ["agriculture"], correct: "agriculture", explanation: "<b>agriculture</b> (n) = nông nghiệp." },
      { id: "vf3", prompt: "The public means of transport is cheaper than cars, but Londoners prefer their own cars in the ______________ (tắc đường).", accepted: ["traffic jam", "traffic jams"], correct: "traffic jams", explanation: "<b>traffic jam</b> (n) = tắc đường." },
      { id: "vf4", prompt: "London is richer than other cities, but it has a lot of ______________ (công nghiệp) and vehicles.", accepted: ["industry"], correct: "industry", explanation: "<b>industry</b> (n) = công nghiệp." },
      { id: "vf5", prompt: "We live in a quiet ______________ (khu phố) just outside the city.", accepted: ["neighbourhood", "neighborhood"], correct: "neighbourhood", explanation: "<b>neighbourhood</b> (n) = khu phố, khu dân cư." },
      { id: "vf6", prompt: "Excuse me, how can I get to the ______________ (ga xe lửa)?", accepted: ["railway station"], correct: "railway station", explanation: "<b>railway station</b> (n) = ga xe lửa." }
    ],
    matching: {
      left: ["wealthy", "backyard", "farmer", "tourist", "suburb", "rewarding"],
      right: ["giàu có", "sân sau nhà", "nông dân", "khách du lịch", "ngoại ô", "đáng công sức, bổ ích"],
      correctMap: [0, 1, 2, 3, 4, 5]
    },
    chooseWord: [
      { id: "cw1", prompt: "\"London is a very wealthy city, but it is also highly ______.\" (POLLUTE)", options: { A: "pollute", B: "polluting", C: "polluted", D: "pollution" }, correct: "C", explanation: "Cần tính từ sau \"highly\" → pollute (v) → <b>polluted</b> (adj, +ed)." },
      { id: "cw2", prompt: "\"The children played ______ in the new playground.\" (NOISE)", options: { A: "noise", B: "noisy", C: "noisily", D: "noiseless" }, correct: "C", explanation: "Cần trạng từ bổ nghĩa cho động từ \"played\" → noise (n) → noisy (adj) → <b>noisily</b> (adv)." },
      { id: "cw3", prompt: "\"Exploring a new neighborhood is a very ______ experience.\" (EXCITE)", options: { A: "excite", B: "excited", C: "exciting", D: "excitement" }, correct: "C", explanation: "Cần tính từ trước danh từ \"experience\" → excite (v) → <b>exciting</b> (adj, +ing)." }
    ],
    wordMeaning: [
      { id: "wm1", prompt: "What does 'wealthy' mean?", options: { A: "nghèo khó", B: "giàu có", C: "đông đúc", D: "yên tĩnh" }, correct: "B", explanation: "wealthy (adj) = giàu có." },
      { id: "wm2", prompt: "What does 'suburb' mean?", options: { A: "trung tâm thành phố", B: "ngoại ô", C: "nông thôn", D: "hải đảo" }, correct: "B", explanation: "suburb (n) = ngoại ô." },
      { id: "wm3", prompt: "What does 'rewarding' mean?", options: { A: "nhàm chán", B: "mệt mỏi", C: "đáng công sức, bổ ích", D: "nguy hiểm" }, correct: "C", explanation: "rewarding (adj) = đáng công sức, bổ ích." }
    ],
    wordForm: [
      { id: "wf1", prompt: "London is a very wealthy city, but it is also highly ______________ (POLLUTE).", accepted: ["polluted"], correct: "polluted", explanation: "pollute (v) → polluted (adj, +ed)." },
      { id: "wf2", prompt: "The park was full of ______________ (BEAUTY) flowers and tall trees.", accepted: ["beautiful"], correct: "beautiful", explanation: "beauty (n) → beautiful (adj, +ful)." },
      { id: "wf3", prompt: "The children played ______________ (NOISE) in the playground all afternoon.", accepted: ["noisily"], correct: "noisily", explanation: "noise (n) → noisy (adj) → noisily (adv, +ly)." }
    ]
  },

  // ---------------------------------------------------------
  // PART 2 — GRAMMAR REVIEW & PRACTICE
  // ---------------------------------------------------------
  grammar: [
    {
      id: "g1", name: "Can you tell me the way to X? ⇄ Where is X?",
      usage: "Câu hỏi lịch sự \"Can you tell me the way to X?\" (cách hỏi đường gián tiếp) có nghĩa tương đương với câu hỏi trực tiếp ngắn gọn \"Where is X?\".",
      formulas: [
        "Can you tell me the way to + địa điểm?  →  Where is + địa điểm?",
        "Can you tell me the way to the train station? → Where is the train station?"
      ],
      signals: ["Can you tell me the way to...?", "Where is...?"],
      examples: [
        { en: "Can you tell me the way to the train station?", vi: "Bạn có thể chỉ đường đến ga tàu cho tôi không?" },
        { en: "Where is the train station?", vi: "Ga tàu ở đâu vậy?" }
      ],
      mistakes: [
        { wrong: "Where the train station is?", right: "Where is the train station? (câu hỏi Wh- đảo \"is\" lên trước chủ ngữ)" }
      ],
      practice: {
        level1: [
          { id: "g1l1a", type: "fillblank", prompt: "Can you tell me the way to the library? → ______________ (Where) is the library?", accepted: ["Where"], correct: "Where", explanation: "Can you tell me the way to X? → Where is X?" }
        ],
        level2: [
          { id: "g1l2a", type: "fillblank", prompt: "Rewrite: 'Can you tell me the way to the airport?' → ______________ (Where) is the airport?", accepted: ["Where"], correct: "Where", explanation: "Can you tell me the way to X? → Where is X?" }
        ],
        level3: [
          { id: "g1l3a", type: "fillblank", prompt: "Rewrite so it keeps the same meaning: 'Can you tell me the way to the hospital?' → ______________ (Where is the hospital?).", accepted: ["where is the hospital"], correct: "Where is the hospital?", explanation: "Can you tell me the way to X? → Where is X?" }
        ]
      }
    },
    {
      id: "g2", name: "No + N + is + adj-er + than + X ⇄ X + is + the + adj-est + N",
      usage: "So sánh hơn dạng phủ định \"No + N + is + adj-er + than + X\" (Không N nào... hơn X) có nghĩa tương đương với so sánh nhất \"X + is + the + adj-est + N\" (X là N... nhất).",
      formulas: [
        "No + N + in + nơi chốn + is + adj-er + than + X.  →  X + is + the + adj-est + N + in + nơi chốn.",
        "No park in this town is larger than this one. → This is the largest park in this town."
      ],
      signals: ["No + N + is + adj-er + than", "the + adj-est + N"],
      examples: [
        { en: "No park in this town is larger than this one.", vi: "Không công viên nào trong thị trấn này lớn hơn công viên này." },
        { en: "This is the largest park in this town.", vi: "Đây là công viên lớn nhất trong thị trấn này." }
      ],
      mistakes: [
        { wrong: "This is the more large park in this town.", right: "This is the largest park in this town. (tính từ ngắn \"large\" thêm \"-st\", không dùng \"more\")" }
      ],
      practice: {
        level1: [
          { id: "g2l1a", type: "fillblank", prompt: "No street in the city is busier than this street. → This is ______________ (the busiest) street in the city.", accepted: ["the busiest"], correct: "the busiest", explanation: "No + N + is + adj-er + than → the + adj-est + N." }
        ],
        level2: [
          { id: "g2l2a", type: "fillblank", prompt: "Rewrite: 'No building in the town is taller than this tower.' → This is ______________ (the tallest) building in the town.", accepted: ["the tallest"], correct: "the tallest", explanation: "No + N + is + adj-er + than → the + adj-est + N." }
        ],
        level3: [
          { id: "g2l3a", type: "fillblank", prompt: "Rewrite so it keeps the same meaning: 'No house on this street is bigger than my house.' → ______________ (My house is the biggest house on this street).", accepted: ["my house is the biggest house on this street"], correct: "My house is the biggest house on this street", explanation: "No + N + is + adj-er + than → the + adj-est + N." }
        ]
      }
    },
    {
      id: "g3", name: "..., so + kết quả ⇄ kết quả + because + nguyên nhân",
      usage: "Câu ghép \"Nguyên nhân, so + kết quả\" có thể viết lại bằng \"Kết quả + because + nguyên nhân\", đưa vế kết quả lên đầu câu và dùng \"because\" nối với nguyên nhân.",
      formulas: [
        "Nguyên nhân, so + kết quả.  →  Kết quả + because + nguyên nhân.",
        "The alley is very tight, so trucks can't drive through. → Trucks can't drive through the alley because it's very tight."
      ],
      signals: ["..., so + kết quả", "kết quả + because + nguyên nhân"],
      examples: [
        { en: "The alley is very tight, so trucks can't drive through.", vi: "Con hẻm rất chật, nên xe tải không thể đi qua." },
        { en: "Trucks can't drive through the alley because it's very tight.", vi: "Xe tải không thể đi qua con hẻm vì nó rất chật." }
      ],
      mistakes: [
        { wrong: "Trucks can't drive through the alley, so it's very tight.", right: "Trucks can't drive through the alley because it's very tight. (khi đưa kết quả lên đầu, phải đổi \"so\" thành \"because\")" }
      ],
      practice: {
        level1: [
          { id: "g3l1a", type: "fillblank", prompt: "The road is icy, so we can't drive fast. → We can't drive fast ______________ (because) the road is icy.", accepted: ["because"], correct: "because", explanation: "..., so + kết quả → kết quả + because + nguyên nhân." }
        ],
        level2: [
          { id: "g3l2a", type: "fillblank", prompt: "Rewrite: 'It was very hot, so we stayed indoors.' → We stayed indoors ______________ (because) it was very hot.", accepted: ["because"], correct: "because", explanation: "..., so + kết quả → kết quả + because + nguyên nhân." }
        ],
        level3: [
          { id: "g3l3a", type: "fillblank", prompt: "Rewrite so it keeps the same meaning: 'The bridge is closed, so drivers must take another route.' → ______________ (Drivers must take another route because the bridge is closed).", accepted: ["drivers must take another route because the bridge is closed"], correct: "Drivers must take another route because the bridge is closed", explanation: "..., so + kết quả → kết quả + because + nguyên nhân." }
        ]
      }
    },
    {
      id: "g4", name: "used to be + adj ⇄ is + adj-er + than it was / is not as good as it used to be",
      usage: "\"used to be + adj (tốt hơn trong quá khứ)\" diễn tả tình trạng tốt hơn trước đây, có nghĩa tương đương với so sánh hơn ở hiện tại hoặc so sánh ngang bằng phủ định.",
      formulas: [
        "S + used to be + adj (tốt) + thời gian trước.  →  S + is + adj-er (xấu hơn) + than it was.  /  S + is not as + adj (tốt) + as it used to be.",
        "Air quality used to be better a few years ago. → Air quality is worse than it was a few years ago."
      ],
      signals: ["used to be + adj", "is + adj-er + than it was / is not as adj as it used to be"],
      examples: [
        { en: "Air quality in the city used to be better a few years ago.", vi: "Chất lượng không khí trong thành phố từng tốt hơn vài năm trước." },
        { en: "Air quality in the city is worse than it was a few years ago.", vi: "Chất lượng không khí trong thành phố hiện tệ hơn so với trước đây." }
      ],
      mistakes: [
        { wrong: "Air quality is worse than it used to be a few years ago.", right: "Air quality is worse than it was a few years ago. (dùng \"than it was\" khi đã có mốc thời gian cụ thể, không lặp lại \"used to\")" }
      ],
      practice: {
        level1: [
          { id: "g4l1a", type: "fillblank", prompt: "The service used to be faster. → The service is ______________ (slower) than it was.", accepted: ["slower"], correct: "slower", explanation: "used to be + adj (tốt) → is + adj-er (xấu hơn) + than it was." }
        ],
        level2: [
          { id: "g4l2a", type: "fillblank", prompt: "Rewrite: 'The water used to be cleaner.' → The water is ______________ (dirtier) than it was.", accepted: ["dirtier"], correct: "dirtier", explanation: "used to be + adj (tốt) → is + adj-er (xấu hơn) + than it was." }
        ],
        level3: [
          { id: "g4l3a", type: "fillblank", prompt: "Rewrite so it keeps the same meaning: 'The traffic used to be lighter in this area.' → ______________ (The traffic is heavier than it was in this area).", accepted: ["the traffic is heavier than it was in this area"], correct: "The traffic is heavier than it was in this area", explanation: "used to be + adj (tốt) → is + adj-er (xấu hơn) + than it was." }
        ]
      }
    },
    {
      id: "g5", name: "one of the + adj-est + danh từ số nhiều (một trong những... nhất)",
      usage: "Cấu trúc \"one of the + adj-est + danh từ số nhiều\" dùng để nói một vật/người là một trong số những vật/người có mức độ cao nhất của một đặc điểm nào đó.",
      formulas: [
        "S + is + one of the + adj-est + danh từ số nhiều (+ in + nơi chốn).",
        "It is one of the longest rivers in Viet Nam."
      ],
      signals: ["one of the + adj-est + N (số nhiều)"],
      examples: [
        { en: "It is one of the longest rivers in Viet Nam.", vi: "Đó là một trong những con sông dài nhất Việt Nam." },
        { en: "This is one of the most beautiful cities in the country.", vi: "Đây là một trong những thành phố đẹp nhất đất nước." }
      ],
      mistakes: [
        { wrong: "It is one of the longest river in Viet Nam.", right: "It is one of the longest rivers in Viet Nam. (sau \"one of the + adj-est\" luôn dùng danh từ số nhiều)" }
      ],
      practice: {
        level1: [
          { id: "g5l1a", type: "fillblank", prompt: "This is a very tall building. It is one of the tallest ______________ (buildings) in the city.", accepted: ["buildings"], correct: "buildings", explanation: "one of the + adj-est + danh từ số nhiều." }
        ],
        level2: [
          { id: "g5l2a", type: "fillblank", prompt: "Rewrite: 'This is a very famous attraction.' → It is one of the most famous ______________ (attractions) in the region.", accepted: ["attractions"], correct: "attractions", explanation: "one of the + adj-est + danh từ số nhiều." }
        ],
        level3: [
          { id: "g5l3a", type: "fillblank", prompt: "Rewrite so it keeps the same meaning: 'This town is very peaceful.' → ______________ (This is one of the most peaceful towns in the country).", accepted: ["this is one of the most peaceful towns in the country"], correct: "This is one of the most peaceful towns in the country", explanation: "one of the + adj-est + danh từ số nhiều." }
        ]
      }
    }
  ],

  // ---------------------------------------------------------
  // PART 3 — READING PRACTICE
  // ---------------------------------------------------------
  reading: {
    passage: "London is the capital city of the United Kingdom. There are a lot of cars in the city. People go everywhere by car, so <mark data-w=\"traffic in the city centre is heavier\">traffic in the city centre is heavier</mark> than that in the suburbs. It is <mark data-w=\"harder to find a place to park a car\">harder to find a place to park a car</mark> than to do it in other areas. The public means of transport is cheaper than cars but the Londoners prefer their own cars. Moreover, there are more and more tourists and visitors coming to London for sightseeing or shopping. At weekends, <mark data-w=\"the streets are noisier and busier\">the streets are noisier and busier</mark> than they are on weekdays. Now, <mark data-w=\"traffic jams are worse than ever before\">traffic jams are worse than ever before</mark>. Although the living cost in the suburbs and the countryside is cheaper than that in the city centre, most young people prefer living in the city centre. London is richer than other cities in the United Kingdom, but it is <mark data-w=\"more polluted because of the city's industry\">more polluted because of the city's industry</mark>, vehicles, and plenty of people.",
    vocabInContext: {
      "traffic in the city centre is heavier": "giao thông ở trung tâm thành phố đông đúc hơn",
      "harder to find a place to park a car": "khó tìm chỗ đỗ xe hơn",
      "the streets are noisier and busier": "các con phố ồn ào và nhộn nhịp hơn",
      "traffic jams are worse than ever before": "tình trạng tắc đường tệ hơn bao giờ hết",
      "more polluted because of the city's industry": "ô nhiễm hơn vì công nghiệp của thành phố"
    },
    translation: "<b>CUỘC SỐNG Ở LONDON</b><br><br>London là thủ đô của Vương quốc Anh. Có rất nhiều ô tô trong thành phố. Mọi người đi khắp nơi bằng ô tô, vì vậy giao thông ở trung tâm thành phố đông đúc hơn ở vùng ngoại ô. Việc tìm chỗ đỗ xe cũng khó hơn so với các khu vực khác. Phương tiện giao thông công cộng rẻ hơn ô tô nhưng người London vẫn thích dùng xe riêng của họ. Hơn nữa, ngày càng có nhiều khách du lịch đến London để tham quan hoặc mua sắm. Vào cuối tuần, các con phố ồn ào và nhộn nhịp hơn so với ngày thường. Hiện nay, tình trạng tắc đường tệ hơn bao giờ hết. Mặc dù chi phí sinh hoạt ở vùng ngoại ô và nông thôn rẻ hơn ở trung tâm thành phố, hầu hết giới trẻ vẫn thích sống ở trung tâm thành phố. London giàu có hơn các thành phố khác ở Vương quốc Anh, nhưng nó cũng ô nhiễm hơn vì công nghiệp, phương tiện giao thông và đông dân số của thành phố.",
    practice: [
      { id: "r1", type: "truefalse", prompt: "Driving a car in the city centre is easier than driving in the suburbs.", correct: "False", explanation: "Sai. Việc tìm chỗ đỗ xe ở trung tâm khó hơn, không dễ hơn." },
      { id: "r2", type: "truefalse", prompt: "Public transport in London costs less money than using a personal car.", correct: "True", explanation: "Đúng. \"The public means of transport is cheaper than cars.\"" },
      { id: "r3", type: "truefalse", prompt: "The streets in London are quieter at weekends than on weekdays.", correct: "False", explanation: "Sai. Các con phố ồn ào và nhộn nhịp hơn vào cuối tuần." },
      { id: "r4", type: "truefalse", prompt: "Many young people like to live in the centre of London.", correct: "True", explanation: "Đúng. \"most young people prefer living in the city centre.\"" },
      { id: "r5", type: "mcq", prompt: "Why is London more polluted than other cities in the United Kingdom?", options: { A: "Because of the city's industry, cars, and many people.", B: "Because it has beautiful streets.", C: "Because there are too many shops and tourists.", D: "Because the living cost is very cheap." }, correct: "A", explanation: "Bài đọc: \"it is more polluted because of the city's industry, vehicles, and plenty of people.\"" },
      { id: "r6", type: "mcq", prompt: "According to the text, what is true about traffic jams in London now?", options: { A: "They are worse than ever before.", B: "They are better than before.", C: "They only happen at weekends.", D: "They do not happen in the suburbs." }, correct: "A", explanation: "Bài đọc: \"traffic jams are worse than ever before.\"" },
      { id: "r7", type: "fillblank", prompt: "Find the word in the passage that means 'ngoại ô'.", accepted: ["suburbs"], correct: "suburbs", explanation: "\"than that in the suburbs\" — suburbs = ngoại ô." },
      { id: "r8", type: "mcq", prompt: "What do most Londoners prefer to use for transport?", options: { A: "Bicycles", B: "Their own cars", C: "Public transport", D: "Taxis" }, correct: "B", explanation: "Bài đọc: \"the Londoners prefer their own cars.\"" },
      { id: "r9", type: "truefalse", prompt: "The living cost in the city centre is cheaper than in the suburbs.", correct: "False", explanation: "Sai. Bài đọc: \"the living cost in the suburbs and the countryside is cheaper than that in the city centre\" — chi phí sinh hoạt ở ngoại ô mới rẻ hơn." }
    ]
  },

  // ---------------------------------------------------------
  // PART 4 — TRANSLATION PRACTICE
  // ---------------------------------------------------------
  translation: [
    { id: "t1", en: "People go everywhere by car, so traffic in the city centre is heavier than that in the suburbs.", suggested: "Mọi người đi khắp nơi bằng ô tô, vì vậy giao thông ở trung tâm thành phố đông đúc hơn ở vùng ngoại ô.", notes: "\"heavier\" ở đây mang nghĩa \"đông đúc, dày đặc\" khi nói về giao thông." },
    { id: "t2", en: "The public means of transport is cheaper than cars but the Londoners prefer their own cars.", suggested: "Phương tiện giao thông công cộng rẻ hơn ô tô nhưng người London vẫn thích dùng xe riêng của họ.", notes: "\"prefer + N\" (thích cái gì hơn) không cần \"to\" khi so sánh hai danh từ." },
    { id: "t3", en: "At weekends, the streets are noisier and busier than they are on weekdays.", suggested: "Vào cuối tuần, các con phố ồn ào và nhộn nhịp hơn so với ngày thường.", notes: "\"weekdays\" (ngày thường trong tuần) trái nghĩa với \"weekends\" (cuối tuần)." },
    { id: "t4", en: "Although the living cost in the suburbs is cheaper, most young people prefer living in the city centre.", suggested: "Mặc dù chi phí sinh hoạt ở vùng ngoại ô rẻ hơn, hầu hết giới trẻ vẫn thích sống ở trung tâm thành phố.", notes: "\"although\" (mặc dù) giới thiệu mệnh đề nhượng bộ." },
    { id: "t5", en: "London is richer than other cities in the United Kingdom, but it is more polluted.", suggested: "London giàu có hơn các thành phố khác ở Vương quốc Anh, nhưng nó cũng ô nhiễm hơn.", notes: "\"richer...but more polluted\" thể hiện sự đối lập bằng \"but\"." }
  ],

  // ---------------------------------------------------------
  // PART 5 — SENTENCE TRANSFORMATION PRACTICE
  // ---------------------------------------------------------
  transformation: [
    {
      id: "tr1", name: "Can you tell me the way to X? ⇄ Where is X?",
      formula: "Can you tell me the way to + địa điểm?  →  Where is + địa điểm?",
      example: { before: "Can you tell me the way to the train station?", after: "Where is the train station?" },
      practice: [
        { id: "tr1p1", type: "fillblank", prompt: "Can you tell me the way to the library? → ______________ (Where) is the library?", accepted: ["Where"], correct: "Where", explanation: "Can you tell me the way to X? → Where is X?" },
        { id: "tr1p2", type: "fillblank", prompt: "Rewrite: 'Can you tell me the way to the airport?' → ______________ (Where) is the airport?", accepted: ["Where"], correct: "Where", explanation: "Can you tell me the way to X? → Where is X?" }
      ]
    },
    {
      id: "tr2", name: "No + N + is + adj-er + than ⇄ the + adj-est + N",
      formula: "No + N + is + adj-er + than + X  →  X + is + the + adj-est + N",
      example: { before: "No park in this town is larger than this one.", after: "This is the largest park in this town." },
      practice: [
        { id: "tr2p1", type: "fillblank", prompt: "No street in the city is busier than this street. → This is ______________ (the busiest) street in the city.", accepted: ["the busiest"], correct: "the busiest", explanation: "No + N + is + adj-er + than → the + adj-est + N." },
        { id: "tr2p2", type: "fillblank", prompt: "Rewrite: 'No building in the town is taller than this tower.' → This is ______________ (the tallest) building in the town.", accepted: ["the tallest"], correct: "the tallest", explanation: "No + N + is + adj-er + than → the + adj-est + N." }
      ]
    },
    {
      id: "tr3", name: "..., so + kết quả ⇄ kết quả + because + nguyên nhân",
      formula: "Nguyên nhân, so + kết quả  →  Kết quả + because + nguyên nhân",
      example: { before: "The alley is very tight, so trucks can't drive through.", after: "Trucks can't drive through the alley because it's very tight." },
      practice: [
        { id: "tr3p1", type: "fillblank", prompt: "The road is icy, so we can't drive fast. → We can't drive fast ______________ (because) the road is icy.", accepted: ["because"], correct: "because", explanation: "..., so + kết quả → kết quả + because + nguyên nhân." },
        { id: "tr3p2", type: "fillblank", prompt: "Rewrite: 'It was very hot, so we stayed indoors.' → We stayed indoors ______________ (because) it was very hot.", accepted: ["because"], correct: "because", explanation: "..., so + kết quả → kết quả + because + nguyên nhân." }
      ]
    },
    {
      id: "tr4", name: "used to be + adj ⇄ is + adj-er + than it was",
      formula: "S + used to be + adj (tốt) + thời gian trước  →  S + is + adj-er (xấu hơn) + than it was",
      example: { before: "Air quality in the city used to be better a few years ago.", after: "Air quality in the city is worse than it was a few years ago." },
      practice: [
        { id: "tr4p1", type: "fillblank", prompt: "The service used to be faster. → The service is ______________ (slower) than it was.", accepted: ["slower"], correct: "slower", explanation: "used to be + adj (tốt) → is + adj-er (xấu hơn) + than it was." },
        { id: "tr4p2", type: "fillblank", prompt: "Rewrite: 'The water used to be cleaner.' → The water is ______________ (dirtier) than it was.", accepted: ["dirtier"], correct: "dirtier", explanation: "used to be + adj (tốt) → is + adj-er (xấu hơn) + than it was." }
      ]
    }
  ],

  // ---------------------------------------------------------
  // PART 6 — QUICK REVIEW (mini test, all skills)
  // ---------------------------------------------------------
  quickReview: [
    { id: "q1", cat: "Vocabulary", type: "mcq", prompt: "'Wealthy' means:", options: { A: "giàu có", B: "nghèo khó", C: "đông đúc", D: "yên tĩnh" }, correct: "A", explanation: "wealthy (adj) = giàu có." },
    { id: "q2", cat: "Vocabulary", type: "mcq", prompt: "'Suburb' means:", options: { A: "trung tâm thành phố", B: "ngoại ô", C: "nông thôn", D: "hải đảo" }, correct: "B", explanation: "suburb (n) = ngoại ô." },
    { id: "q3", cat: "Vocabulary", type: "fillblank", prompt: "He is studying ______________ (nông nghiệp) at school.", accepted: ["agriculture"], correct: "agriculture", explanation: "agriculture (n) = nông nghiệp." },
    { id: "q4", cat: "Grammar", type: "mcq", prompt: "Can you tell me the way to the train station? → ______ is the train station?", options: { A: "Where", B: "What", C: "How", D: "Which" }, correct: "A", explanation: "Can you tell me the way to X? → Where is X?" },
    { id: "q5", cat: "Grammar", type: "mcq", prompt: "No park in this town is larger than this one. → This is the ______ park in this town.", options: { A: "large", B: "larger", C: "largest", D: "more large" }, correct: "C", explanation: "No + N + is + adj-er + than → the + adj-est + N." },
    { id: "q6", cat: "Grammar", type: "fillblank", prompt: "The alley is very tight, so trucks can't drive through. → Trucks can't drive through the alley ______________ (because) it's very tight.", accepted: ["because"], correct: "because", explanation: "..., so + kết quả → kết quả + because + nguyên nhân." },
    { id: "q7", cat: "Grammar", type: "fillblank", prompt: "Air quality used to be better. → Air quality is ______________ (worse) than it was.", accepted: ["worse"], correct: "worse", explanation: "used to be + adj (tốt) → is + adj-er (xấu hơn) + than it was." },
    { id: "q8", cat: "Reading", type: "truefalse", prompt: "Driving a car in the city centre is easier than driving in the suburbs.", correct: "False", explanation: "Sai. Đỗ xe ở trung tâm khó hơn." },
    { id: "q9", cat: "Reading", type: "truefalse", prompt: "The streets in London are quieter at weekends than on weekdays.", correct: "False", explanation: "Sai. Các con phố ồn ào hơn vào cuối tuần." },
    { id: "q10", cat: "Reading", type: "mcq", prompt: "Why is London more polluted than other cities in the United Kingdom?", options: { A: "Because of the city's industry, cars, and many people.", B: "Because it has beautiful streets.", C: "Because there are too many shops and tourists.", D: "Because the living cost is very cheap." }, correct: "A", explanation: "Bài đọc nêu rõ nguyên nhân ô nhiễm của London." },
    { id: "q11", cat: "Writing", type: "fillblank", prompt: "London is a very wealthy city, but it is also highly ______________ (POLLUTE).", accepted: ["polluted"], correct: "polluted", explanation: "pollute (v) → polluted (adj, +ed)." },
    { id: "q12", cat: "Writing", type: "fillblank", prompt: "The park was full of ______________ (BEAUTY) flowers.", accepted: ["beautiful"], correct: "beautiful", explanation: "beauty (n) → beautiful (adj, +ful)." },
    { id: "q13", cat: "Writing", type: "fillblank", prompt: "The children played ______________ (NOISE) in the playground.", accepted: ["noisily"], correct: "noisily", explanation: "noise (n) → noisy (adj) → noisily (adv, +ly)." },
    { id: "q14", cat: "Vocabulary", type: "mcq", prompt: "Which word means 'tắc đường'?", options: { A: "traffic jam", B: "railway station", C: "public transport", D: "sightseeing" }, correct: "A", explanation: "traffic jam (n) = tắc đường." }
  ]
};
