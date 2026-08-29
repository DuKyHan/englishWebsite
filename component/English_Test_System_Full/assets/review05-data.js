const REVIEW = {
  id: "test05",
  testFile: "test05.html",
  grade: "Grade 8 — Global Success",
  unit: "Unit 6: Lifestyles",
  title: "Knowledge Review — Unit 6, Practice Test 1",

  // ---------------------------------------------------------
  // PART 1 — VOCABULARY REVIEW
  // ---------------------------------------------------------
  vocabulary: [
    { word: "dedication", pos: "n", ipa: "/ˌdedɪˈkeɪʃn/", meaning: "sự tận tâm, cống hiến", example: "The dynamic team showed great dedication to improving the local park.", exampleVi: "Đội nhóm năng động đã thể hiện sự tận tâm lớn trong việc cải thiện công viên địa phương." },
    { word: "voluntary", pos: "adj", ipa: "/ˈvɒləntri/", meaning: "tự nguyện", example: "There are many voluntary activities organized to clean up the neighborhood streets.", exampleVi: "Có nhiều hoạt động tự nguyện được tổ chức để dọn dẹp các con đường trong khu phố." },
    { word: "independent", pos: "adj", ipa: "/ˌɪndɪˈpendənt/", meaning: "độc lập, tự chủ", example: "Young people nowadays are encouraged to be more independent in their choices.", exampleVi: "Giới trẻ ngày nay được khuyến khích độc lập hơn trong các lựa chọn của mình." },
    { word: "interaction", pos: "n", ipa: "/ˌɪntərˈækʃn/", meaning: "sự tương tác", example: "Social networking sites facilitate better interaction between people around the world.", exampleVi: "Các trang mạng xã hội giúp việc tương tác giữa mọi người trên khắp thế giới trở nên tốt hơn." },
    { word: "traditional", pos: "adj", ipa: "/trəˈdɪʃənl/", meaning: "truyền thống", example: "The local elders still wear their traditional clothes during traditional festivals.", exampleVi: "Những người lớn tuổi trong làng vẫn mặc trang phục truyền thống trong các lễ hội truyền thống." },
    { word: "balanced", pos: "adj", ipa: "/ˈbælənst/", meaning: "cân bằng, đầy đủ dinh dưỡng", example: "Eating a balanced diet provides all the essential nutrients for healthy growth.", exampleVi: "Ăn một chế độ ăn cân bằng cung cấp tất cả các dưỡng chất cần thiết cho sự phát triển khỏe mạnh." },
    { word: "nomad", pos: "n", ipa: "/ˈnoʊmæd/", meaning: "người du mục", example: "Mongolians have lived as nomads in the rural areas for 3,000 years.", exampleVi: "Người Mông Cổ đã sống như những người du mục ở vùng nông thôn suốt 3.000 năm." },
    { word: "nomadic", pos: "adj", ipa: "/noʊˈmædɪk/", meaning: "(thuộc về lối sống) du mục", example: "With the rise of technology, changes in the Mongolian nomadic lifestyle are almost inevitable.", exampleVi: "Với sự phát triển của công nghệ, những thay đổi trong lối sống du mục của người Mông Cổ gần như là điều tất yếu." },
    { word: "livestock", pos: "n", ipa: "/ˈlaɪvstɒk/", meaning: "gia súc, vật nuôi", example: "They depend on their livestock for a living.", exampleVi: "Họ dựa vào gia súc để kiếm sống." },
    { word: "grassland", pos: "n", ipa: "/ˈɡræslænd/", meaning: "đồng cỏ", example: "Mongolians keep moving to search for new grassland for their cattle.", exampleVi: "Người Mông Cổ liên tục di chuyển để tìm đồng cỏ mới cho gia súc của họ." },
    { word: "confined", pos: "adj", ipa: "/kənˈfaɪnd/", meaning: "bị giới hạn, gò bó (ở một chỗ)", example: "Solar panels give them access to electricity without being confined to one place.", exampleVi: "Tấm pin mặt trời giúp họ có điện mà không bị gò bó ở một chỗ." },
    { word: "herder", pos: "n", ipa: "/ˈhɜːrdər/", meaning: "người chăn thả gia súc", example: "Many herders use motorbikes to herd cattle and horses.", exampleVi: "Nhiều người chăn thả gia súc dùng xe máy để lùa bò và ngựa." },
    { word: "inevitable", pos: "adj", ipa: "/ɪnˈevɪtəbl/", meaning: "không thể tránh khỏi, tất yếu", example: "Changes in the Mongolian nomadic lifestyle are almost inevitable.", exampleVi: "Những thay đổi trong lối sống du mục của người Mông Cổ gần như là điều tất yếu." },
    { word: "recycle", pos: "v", ipa: "/ˌriːˈsaɪkl/", meaning: "tái chế", example: "You should recycle trash whenever you can.", exampleVi: "Bạn nên tái chế rác bất cứ khi nào có thể." },
    { word: "community", pos: "n", ipa: "/kəˈmjuːnəti/", meaning: "cộng đồng", example: "A clean environment will bring more happiness to all residents in the community.", exampleVi: "Một môi trường sạch sẽ sẽ mang lại nhiều hạnh phúc hơn cho tất cả cư dân trong cộng đồng." },
    { word: "clean-up", pos: "n", ipa: "/ˈkliːn ʌp/", meaning: "buổi dọn dẹp, làm sạch", example: "Shall we join the special community clean-up day next Saturday?", exampleVi: "Chúng ta có tham gia ngày dọn dẹp cộng đồng đặc biệt vào thứ Bảy tới không?" },
    { word: "litter", pos: "n", ipa: "/ˈlɪtər/", meaning: "rác vứt bừa bãi", example: "The group of teenagers picked up litter in the park yesterday.", exampleVi: "Nhóm thanh thiếu niên đã nhặt rác trong công viên hôm qua." },
    { word: "process", pos: "v", ipa: "/ˈprɑːses/", meaning: "xử lý (thông tin)", example: "Computers are better than humans at processing information.", exampleVi: "Máy tính xử lý thông tin tốt hơn con người." }
  ],

  vocabPractice: {
    mcq: [
      { id: "vp1", prompt: "Choose the word that means 'sự tận tâm, cống hiến':", options: { A: "dedication", B: "interaction", C: "litter", D: "grassland" }, correct: "A", explanation: "<b>dedication</b> (n) = sự tận tâm, cống hiến." },
      { id: "vp2", prompt: "Choose the word that means 'người du mục':", options: { A: "herder", B: "nomad", C: "community", D: "resident" }, correct: "B", explanation: "<b>nomad</b> (n) = người du mục. \"herder\" là người chăn thả gia súc." },
      { id: "vp3", prompt: "Choose the best word: \"They depend on their ______ for a living.\"", options: { A: "grassland", B: "livestock", C: "litter", D: "community" }, correct: "B", explanation: "\"depend on their <b>livestock</b> for a living\" (sống dựa vào gia súc) khớp với lối sống du mục của người Mông Cổ." },
      { id: "vp4", prompt: "Choose the word that means 'không thể tránh khỏi':", options: { A: "confined", B: "balanced", C: "inevitable", D: "voluntary" }, correct: "C", explanation: "<b>inevitable</b> (adj) = không thể tránh khỏi, tất yếu." },
      { id: "vp5", prompt: "\"Solar panels give them access to electricity without being ______ to one place.\"", options: { A: "confined", B: "recycled", C: "dedicated", D: "processed" }, correct: "A", explanation: "\"be <b>confined</b> to one place\" (bị gò bó/giới hạn ở một chỗ) là cụm cố định." },
      { id: "vp6", prompt: "Choose the word that means 'xử lý (thông tin)':", options: { A: "recycle", B: "process", C: "interact", D: "confine" }, correct: "B", explanation: "<b>process</b> (v) = xử lý (thông tin, dữ liệu)." }
    ],
    fillblank: [
      { id: "vf1", prompt: "There are many ______________ (tự nguyện) activities organized to clean up the neighborhood streets.", accepted: ["voluntary"], correct: "voluntary", explanation: "<b>voluntary</b> (adj) = tự nguyện." },
      { id: "vf2", prompt: "Young people nowadays are encouraged to be more ______________ (độc lập) in their choices.", accepted: ["independent"], correct: "independent", explanation: "<b>independent</b> (adj) = độc lập, tự chủ." },
      { id: "vf3", prompt: "Mongolians keep moving to search for new ______________ (đồng cỏ) for their cattle.", accepted: ["grassland"], correct: "grassland", explanation: "<b>grassland</b> (n) = đồng cỏ." },
      { id: "vf4", prompt: "Many ______________ (người chăn thả gia súc) use motorbikes to herd cattle and horses.", accepted: ["herders"], correct: "herders", explanation: "<b>herders</b> (n, số nhiều) = những người chăn thả gia súc." },
      { id: "vf5", prompt: "You should ______________ (tái chế) trash whenever you can.", accepted: ["recycle"], correct: "recycle", explanation: "<b>recycle</b> (v) = tái chế." },
      { id: "vf6", prompt: "The group of teenagers picked up ______________ (rác vứt bừa bãi) in the park yesterday.", accepted: ["litter"], correct: "litter", explanation: "<b>litter</b> (n) = rác vứt bừa bãi." }
    ],
    matching: {
      left: ["dedication", "nomad", "livestock", "inevitable", "community", "process"],
      right: ["sự tận tâm, cống hiến", "người du mục", "gia súc, vật nuôi", "không thể tránh khỏi", "cộng đồng", "xử lý (thông tin)"],
      correctMap: [0, 1, 2, 3, 4, 5]
    },
    chooseWord: [
      { id: "cw1", prompt: "\"Social networking sites facilitate better ______ between people around the world.\" (INTERACT)", options: { A: "interact", B: "interaction", C: "interactive", D: "interactively" }, correct: "B", explanation: "Cần danh từ đứng sau \"better\" → interact (v) → <b>interaction</b> (n)." },
      { id: "cw2", prompt: "\"With the rise of technology, changes in the Mongolian nomadic lifestyle are almost ______.\" (INEVITABLE)", options: { A: "avoid", B: "avoidable", C: "unavoidable", D: "inevitable" }, correct: "D", explanation: "Cần tính từ mang nghĩa \"tất yếu, không tránh khỏi\" → <b>inevitable</b> phù hợp nhất với ngữ cảnh." },
      { id: "cw3", prompt: "\"Eating a ______ diet provides all the essential nutrients for healthy growth.\" (BALANCE)", options: { A: "balance", B: "balancing", C: "balanced", D: "balances" }, correct: "C", explanation: "Cần tính từ đứng trước danh từ \"diet\" → balance (v/n) → <b>balanced</b> (adj)." }
    ],
    wordMeaning: [
      { id: "wm1", prompt: "What does 'nomadic' mean?", options: { A: "thuộc về lối sống du mục", B: "thuộc về thành phố", C: "thuộc về nông nghiệp", D: "thuộc về công nghệ" }, correct: "A", explanation: "nomadic (adj) = thuộc về lối sống du mục, di chuyển liên tục." },
      { id: "wm2", prompt: "What does 'confined' mean?", options: { A: "rộng rãi, tự do", B: "bị giới hạn, gò bó", C: "hiện đại", D: "an toàn" }, correct: "B", explanation: "confined (adj) = bị giới hạn, gò bó (ở một chỗ)." },
      { id: "wm3", prompt: "What does 'livestock' mean?", options: { A: "cây trồng", B: "gia súc, vật nuôi", C: "nhà kho", D: "đất đai" }, correct: "B", explanation: "livestock (n) = gia súc, vật nuôi (bò, dê, cừu...)." }
    ],
    wordForm: [
      { id: "wf1", prompt: "The dynamic team showed great (DEDICATE) ______________ to improving the local park.", accepted: ["dedication"], correct: "dedication", explanation: "Cần danh từ làm tân ngữ → dedicate (v) → <b>dedication</b> (n)." },
      { id: "wf2", prompt: "Social networking sites facilitate better (INTERACT) ______________ between people around the world.", accepted: ["interaction"], correct: "interaction", explanation: "Cần danh từ làm tân ngữ → interact (v) → <b>interaction</b> (n)." },
      { id: "wf3", prompt: "The local elders still wear their (TRADITION) ______________ clothes during traditional festivals.", accepted: ["traditional"], correct: "traditional", explanation: "Cần tính từ đứng trước danh từ \"clothes\" → tradition (n) → <b>traditional</b> (adj)." }
    ]
  },

  // ---------------------------------------------------------
  // PART 2 — GRAMMAR REVIEW & PRACTICE
  // ---------------------------------------------------------
  grammar: [
    {
      id: "g1", name: "shouldn't ⇄ had better not (lời khuyên không nên làm gì)",
      usage: "\"shouldn't + V\" và \"had better not + V\" đều dùng để khuyên ai đó KHÔNG nên làm gì. \"had better\" mang sắc thái nhấn mạnh/cảnh báo hơn \"should\".",
      formulas: [
        "Khẳng định: S + should/had better + V.",
        "Phủ định: S + shouldn't + V  ⇄  S + had better not + V.",
        "You shouldn't point at others while talking. → You had better not point at others while talking."
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
          { id: "g1l1a", type: "fillblank", prompt: "You shouldn't waste water. → You ______________ (had better + not) waste water.", accepted: ["had better not"], correct: "had better not", explanation: "shouldn't ⇄ had better not." }
        ],
        level2: [
          { id: "g1l2a", type: "fillblank", prompt: "You shouldn't leave litter in the park. → You had better ______________ leave litter in the park.", accepted: ["not"], correct: "not", explanation: "Cấu trúc \"had better not + V\" — \"not\" đứng ngay sau \"had better\"." }
        ],
        level3: [
          { id: "g1l3a", type: "fillblank", prompt: "Rewrite so it keeps the same meaning: 'It's a bad idea to interrupt the speaker.' → You ______________ (had better) interrupt the speaker.", accepted: ["had better not"], correct: "had better not", explanation: "Ý khuyên không nên làm gì → had better not + V." }
        ]
      }
    },
    {
      id: "g2", name: "must ⇄ It is obligatory for sb to V (diễn tả sự bắt buộc)",
      usage: "\"must + V\" và \"It is obligatory for + O + to V\" đều diễn tả một điều BẮT BUỘC phải làm. \"It is obligatory for sb to V\" trang trọng hơn.",
      formulas: [
        "S + must + V (bắt buộc)",
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
          { id: "g2l1a", type: "fillblank", prompt: "We must finish all the homework by Thursday. → It is obligatory ______________ us to finish all the homework by Thursday.", accepted: ["for"], correct: "for", explanation: "Cấu trúc: It is obligatory <b>for</b> + O + to V." }
        ],
        level2: [
          { id: "g2l2a", type: "fillblank", prompt: "Rewrite: 'Volunteers must wear a uniform during the clean-up day.' → It is obligatory for volunteers ______________ (wear) a uniform during the clean-up day.", accepted: ["to wear"], correct: "to wear", explanation: "Sau \"for + O\" cần \"to + V nguyên mẫu\"." }
        ],
        level3: [
          { id: "g2l3a", type: "fillblank", prompt: "Rewrite so it keeps the same meaning: 'Every student must recycle paper and plastic at school.' → It is obligatory ______________ (for every student to recycle paper and plastic at school).", accepted: ["for every student to recycle paper and plastic at school"], correct: "for every student to recycle paper and plastic at school", explanation: "must + V → It is obligatory for + O + to V." }
        ]
      }
    },
    {
      id: "g3", name: "Bị động ⇄ Chủ động (Passive ⇄ Active Voice)",
      usage: "Câu bị động (Passive) nhấn mạnh vào đối tượng chịu tác động, thường dùng khi không cần/không biết rõ ai thực hiện hành động. Có thể chuyển sang câu chủ động (Active) bằng cách thêm chủ ngữ chung chung như \"People\" khi tác nhân không được nêu rõ.",
      formulas: [
        "Bị động: S (vật) + am/is/are + V3/-ed + (by + O)",
        "Chủ động: People + V (nguyên mẫu/số nhiều) + O",
        "Many volunteer activities are organized to help the local community. → People organize many volunteer activities to help the local community."
      ],
      signals: ["are/is + V3/-ed", "by + O (có thể lược bỏ)"],
      examples: [
        { en: "The park where children play is cleaned by volunteers every day.", vi: "Công viên nơi trẻ em chơi được các tình nguyện viên dọn dẹp mỗi ngày." },
        { en: "Volunteers clean the park where children play every day.", vi: "Các tình nguyện viên dọn dẹp công viên nơi trẻ em chơi mỗi ngày." }
      ],
      mistakes: [
        { wrong: "Volunteers cleaned the park where children play is every day.", right: "Volunteers clean the park where children play every day." }
      ],
      practice: {
        level1: [
          { id: "g3l1a", type: "fillblank", prompt: "Many volunteer activities are organized to help the local community. → People ______________ (organize) many volunteer activities to help the local community.", accepted: ["organize"], correct: "organize", explanation: "Bị động → chủ động: are organized → organize." }
        ],
        level2: [
          { id: "g3l2a", type: "fillblank", prompt: "Rewrite: 'The streets are cleaned by volunteers every weekend.' → Volunteers ______________ (clean) the streets every weekend.", accepted: ["clean"], correct: "clean", explanation: "are cleaned → clean (chủ động)." }
        ],
        level3: [
          { id: "g3l3a", type: "fillblank", prompt: "Rewrite so it keeps the same meaning: 'The park where children play is cleaned by volunteers every day.' → Volunteers ______________ (clean the park where children play every day).", accepted: ["clean the park where children play every day"], correct: "clean the park where children play every day", explanation: "Bị động → chủ động, giữ nguyên mệnh đề quan hệ \"where children play\"." }
        ]
      }
    },
    {
      id: "g4", name: "will ⇄ be going to (quyết định tức thời vs. dự đoán có căn cứ)",
      usage: "\"will + V\" dùng cho quyết định tức thời/lời hứa/lời đề nghị tại thời điểm nói. \"be going to + V\" dùng cho dự định đã có từ trước hoặc dự đoán dựa trên bằng chứng ở hiện tại.",
      formulas: [
        "Quyết định tức thời / lời hứa / lời đề nghị: S + will + V.",
        "Dự đoán dựa trên bằng chứng hiện tại / dự định có sẵn: S + am/is/are + going to + V."
      ],
      signals: ["will (quyết định ngay lúc nói)", "be going to (có bằng chứng/dự định từ trước)"],
      examples: [
        { en: "Don't worry. I will take you to the airport tomorrow if you need a lift.", vi: "Đừng lo. Tôi sẽ đưa bạn ra sân bay ngày mai nếu bạn cần đi nhờ xe. (quyết định ngay lúc nói)" },
        { en: "Wow! I think we are going to love this place!", vi: "Chà! Tôi nghĩ chúng ta sẽ thích nơi này! (dự đoán dựa trên những gì đang thấy)" }
      ],
      mistakes: [
        { wrong: "I think we will love this place after seeing it right now.", right: "I think we are going to love this place." }
      ],
      practice: {
        level1: [
          { id: "g4l1a", type: "mcq", prompt: "Jack: \"I don't have a car.\" Mary: \"Don't worry. I ______ you to the airport tomorrow.\"", options: { A: "will take", B: "am going to take", C: "took", D: "take" }, correct: "A", explanation: "Quyết định/lời đề nghị giúp đỡ ngay tại thời điểm nói → will." }
        ],
        level2: [
          { id: "g4l2a", type: "mcq", prompt: "Look at those dark clouds! It ______ rain soon.", options: { A: "will", B: "is going to", C: "rains", D: "rained" }, correct: "B", explanation: "Dự đoán dựa trên bằng chứng hiện tại (mây đen) → be going to." }
        ],
        level3: [
          { id: "g4l3a", type: "fillblank", prompt: "Fill in with 'will' or 'be going to': Anna has just booked her flight; she ______________ (visit) her grandparents next month.", accepted: ["is going to visit"], correct: "is going to visit", explanation: "Dự định đã lên kế hoạch từ trước (đã đặt vé) → be going to." }
        ]
      }
    },
    {
      id: "g5", name: "Hiện tại đơn cho lịch trình cố định trong tương lai",
      usage: "Thì hiện tại đơn có thể dùng để diễn tả một sự việc trong tương lai đã được lên <b>lịch trình/thời khóa biểu cố định</b> (giờ tàu, máy bay chạy, giờ học...).",
      formulas: [
        "S + V(s/es) + (thời gian trong tương lai) — cho lịch trình cố định.",
        "My plane lands at Manchester airport at 8 p.m. tomorrow evening."
      ],
      signals: ["lịch trình cố định (flight, train, timetable)", "động từ ở hiện tại đơn dù nói về tương lai"],
      examples: [
        { en: "My plane lands at Manchester airport at 8 p.m. tomorrow evening.", vi: "Máy bay của tôi hạ cánh tại sân bay Manchester lúc 8 giờ tối ngày mai." },
        { en: "The train leaves at 6 a.m. sharp tomorrow.", vi: "Chuyến tàu khởi hành đúng 6 giờ sáng ngày mai." }
      ],
      mistakes: [
        { wrong: "My plane will lands at Manchester airport tomorrow.", right: "My plane lands at Manchester airport tomorrow." }
      ],
      practice: {
        level1: [
          { id: "g5l1a", type: "mcq", prompt: "David: \"What time does your flight arrive?\" John: \"My plane ______ at 8 p.m. tomorrow.\"", options: { A: "is landing", B: "lands", C: "will land", D: "landed" }, correct: "B", explanation: "Lịch trình cố định (giờ hạ cánh) → hiện tại đơn." }
        ],
        level2: [
          { id: "g5l2a", type: "fillblank", prompt: "The school bus ______________ (leave) at 7 a.m. every school day.", accepted: ["leaves"], correct: "leaves", explanation: "Lịch trình cố định lặp lại → hiện tại đơn." }
        ],
        level3: [
          { id: "g5l3a", type: "fillblank", prompt: "Rewrite using the present simple for a fixed schedule: 'The meeting is scheduled to start at 9 a.m. tomorrow.' → The meeting ______________ (start) at 9 a.m. tomorrow.", accepted: ["starts"], correct: "starts", explanation: "Lịch trình cố định → hiện tại đơn: starts." }
        ]
      }
    }
  ],

  // ---------------------------------------------------------
  // PART 3 — READING PRACTICE
  // ---------------------------------------------------------
  reading: {
    passage: "For 3,000 years, Mongolians have lived in the rural areas, moving to search for new <mark data-w=\"grassland\">grassland</mark> for their cattle. They depend on their <mark data-w=\"livestock\">livestock</mark> for a living. Today, about half of Mongolia's population is living in the ger and moving their camping equipment several times a year. Nomadic life develops in summer and survives in winter. When the weather is warm, they work hard on their farms to get milk and make a type of milk alcohol, consuming meat from their sheep and goats. Once winter comes, temperatures drop quickly and they stay indoors and survive on horse meat.<br><br>With the rise of technology, changes in the Mongolian nomadic lifestyle are almost <mark data-w=\"inevitable\">inevitable</mark>. Many <mark data-w=\"herders\">herders</mark> use motorbikes to herd cattle and horses. To move their homes, they use trucks instead of ox carts. Solar panels are also becoming an addition to the ger, giving them access to electricity without being <mark data-w=\"confined\">confined</mark> to one place. The nomads use solar energy to power TV sets and mobile phones.",
    vocabInContext: {
      grassland: "đồng cỏ",
      livestock: "gia súc, vật nuôi",
      inevitable: "không thể tránh khỏi, tất yếu",
      herders: "những người chăn thả gia súc",
      confined: "bị giới hạn, gò bó"
    },
    translation: "Suốt 3.000 năm, người Mông Cổ đã sống ở các vùng nông thôn, liên tục di chuyển để tìm đồng cỏ mới cho gia súc của họ. Họ dựa vào vật nuôi để kiếm sống. Ngày nay, khoảng một nửa dân số Mông Cổ sống trong lều ger và di chuyển đồ đạc cắm trại nhiều lần trong năm. Cuộc sống du mục phát triển vào mùa hè và duy trì qua mùa đông. Khi thời tiết ấm áp, họ làm việc chăm chỉ trên nông trại để lấy sữa và làm một loại rượu sữa, đồng thời ăn thịt từ cừu và dê của họ. Khi mùa đông đến, nhiệt độ giảm nhanh chóng và họ ở trong nhà, sống nhờ thịt ngựa.<br><br>Với sự phát triển của công nghệ, những thay đổi trong lối sống du mục của người Mông Cổ gần như là điều tất yếu. Nhiều người chăn thả gia súc dùng xe máy để lùa bò và ngựa. Để di chuyển nhà, họ dùng xe tải thay cho xe bò. Tấm pin năng lượng mặt trời cũng đang trở thành một phần bổ sung cho lều ger, giúp họ có điện mà không bị gò bó ở một chỗ. Những người du mục dùng năng lượng mặt trời để chạy ti vi và điện thoại di động.",
    practice: [
      { id: "r1", type: "truefalse", prompt: "Mongolians have followed a nomadic lifestyle for thousands of years.", correct: "True", explanation: "Bài đọc: 'For 3,000 years, Mongolians have lived in the rural areas...'" },
      { id: "r2", type: "truefalse", prompt: "In winter, herders spend most of their time outdoors working on the farms.", correct: "False", explanation: "Bài đọc: mùa đông họ 'stay indoors' (ở trong nhà), không phải làm việc ngoài trời." },
      { id: "r3", type: "truefalse", prompt: "Modern technology has prevented Mongolian herders from moving their homes.", correct: "False", explanation: "Bài đọc nói công nghệ giúp họ có điện 'without being confined to one place', không phải ngăn cản việc di chuyển." },
      { id: "r4", type: "truefalse", prompt: "Nomads can watch television and use mobile phones thanks to solar panels.", correct: "True", explanation: "Bài đọc: 'The nomads use solar energy to power TV sets and mobile phones.'" },
      { id: "r5", type: "mcq", prompt: "What is the main idea of the passage?", options: { A: "The traditional lifestyle of Mongolian nomads and how technology changes it.", B: "The challenges that Mongolian nomads face during harsh winters.", C: "The historical reasons why Mongolians live in a ger and herd cattle.", D: "The benefits of using solar energy and motorbikes in rural Mongolia." }, correct: "A", explanation: "Bài đọc giới thiệu lối sống du mục truyền thống rồi nói về việc công nghệ đang thay đổi lối sống đó → đáp án A." },
      { id: "r6", type: "mcq", prompt: "Which of the following is NOT true according to the passage?", options: { A: "Ox carts are still the most popular means of transport to move gers.", B: "About 50% of the Mongolian population still lives in traditional gers today.", C: "Nomads eat meat from sheep and goats when the weather is warm.", D: "Solar panels allow nomads to have electricity while moving from place to place." }, correct: "A", explanation: "Bài đọc nói họ dùng 'trucks instead of ox carts' → câu A là SAI." },
      { id: "r7", type: "mcq", prompt: "According to the passage, what do nomads eat in winter?", options: { A: "Milk and sheep meat.", B: "Horse meat.", C: "Only vegetables from their farms.", D: "Goat meat only." }, correct: "B", explanation: "Bài đọc: 'they stay indoors and survive on horse meat.'" },
      { id: "r8", type: "fillblank", prompt: "Find the word in the passage that means 'không thể tránh khỏi, tất yếu' (adj).", accepted: ["inevitable"], correct: "inevitable", explanation: "'changes... are almost inevitable' — inevitable (adj) = không thể tránh khỏi." },
      { id: "r9", type: "mcq", prompt: "What do herders use instead of ox carts to move their homes, according to the passage?", options: { A: "Motorbikes.", B: "Trucks.", C: "Horses.", D: "Boats." }, correct: "B", explanation: "Bài đọc: 'To move their homes, they use trucks instead of ox carts.'" }
    ]
  },

  // ---------------------------------------------------------
  // PART 4 — TRANSLATION PRACTICE
  // ---------------------------------------------------------
  translation: [
    { id: "t1", en: "Computers can work with a lot of information at the same time and never forget.", suggested: "Máy tính có thể xử lý rất nhiều thông tin cùng một lúc và không bao giờ quên.", notes: "Từ vựng: <i>at the same time</i> (cùng một lúc). Cấu trúc song song 'can work... and never forget'." },
    { id: "t2", en: "For 3,000 years, Mongolians have lived in the rural areas, moving to search for new grassland for their cattle.", suggested: "Suốt 3.000 năm, người Mông Cổ đã sống ở vùng nông thôn, liên tục di chuyển để tìm đồng cỏ mới cho gia súc.", notes: "Thì hiện tại hoàn thành 'have lived' diễn tả hành động kéo dài từ quá khứ đến hiện tại." },
    { id: "t3", en: "Solar panels give the nomads access to electricity without being confined to one place.", suggested: "Tấm pin mặt trời giúp những người du mục có điện mà không bị gò bó ở một chỗ.", notes: "Cấu trúc 'without being + V3/-ed' = 'mà không bị...'." },
    { id: "t4", en: "There are many voluntary activities organized to clean up the neighborhood streets.", suggested: "Có nhiều hoạt động tự nguyện được tổ chức để dọn dẹp các con đường trong khu phố.", notes: "Cấu trúc bị động 'are organized' = 'được tổ chức'." },
    { id: "t5", en: "It is important to know about computers for our future careers.", suggested: "Việc hiểu biết về máy tính là quan trọng cho sự nghiệp tương lai của chúng ta.", notes: "Cấu trúc 'It is important to V' = 'việc làm gì đó là quan trọng'." }
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
        { id: "tr1p1", type: "fillblank", prompt: "You shouldn't waste electricity at home. → You ______________ waste electricity at home.", accepted: ["had better not"], correct: "had better not", explanation: "shouldn't ⇄ had better not." },
        { id: "tr1p2", type: "fillblank", prompt: "We shouldn't leave litter in public parks. → We ______________ leave litter in public parks.", accepted: ["had better not"], correct: "had better not", explanation: "shouldn't ⇄ had better not." }
      ]
    },
    {
      id: "tr2", name: "must ⇄ It is obligatory for sb to V (sự bắt buộc)",
      formula: "S + must + V  →  It is obligatory for + O + to + V",
      example: { before: "We must finish all the homework by Thursday.", after: "It is obligatory for us to finish all the homework by Thursday." },
      practice: [
        { id: "tr2p1", type: "fillblank", prompt: "Residents must separate their rubbish before recycling. → It is obligatory ______________ residents to separate their rubbish before recycling.", accepted: ["for"], correct: "for", explanation: "It is obligatory FOR + O + to V." },
        { id: "tr2p2", type: "fillblank", prompt: "Students must know the basics of computers. → It is obligatory for students ______________ (know) the basics of computers.", accepted: ["to know"], correct: "to know", explanation: "Sau 'for + O' cần 'to + V nguyên mẫu'." }
      ]
    },
    {
      id: "tr3", name: "Bị động ⇄ Chủ động (Passive ⇄ Active)",
      formula: "S (vật) + is/are + V3/-ed  →  People + V (nguyên mẫu)",
      example: { before: "Many volunteer activities are organized to help the local community.", after: "People organize many volunteer activities to help the local community." },
      practice: [
        { id: "tr3p1", type: "fillblank", prompt: "Solar panels are used to power TV sets and mobile phones. → Nomads ______________ (use) solar panels to power TV sets and mobile phones.", accepted: ["use"], correct: "use", explanation: "Bị động → chủ động: are used → use." },
        { id: "tr3p2", type: "fillblank", prompt: "Cattle and horses are herded with motorbikes nowadays. → Herders ______________ (herd) cattle and horses with motorbikes nowadays.", accepted: ["herd"], correct: "herd", explanation: "are herded → herd (chủ động)." }
      ]
    },
    {
      id: "tr4", name: "Bị động (có mệnh đề quan hệ) ⇄ Chủ động",
      formula: "S (vật, có mệnh đề quan hệ) + is/are + V3/-ed by + O  →  O + V (nguyên mẫu) + S (giữ nguyên mệnh đề quan hệ)",
      example: { before: "The park where children play is cleaned by volunteers every day.", after: "Volunteers clean the park where children play every day." },
      practice: [
        { id: "tr4p1", type: "fillblank", prompt: "The streets where residents walk are swept by cleaners every morning. → Cleaners ______________ (sweep) the streets where residents walk every morning.", accepted: ["sweep"], correct: "sweep", explanation: "Bị động → chủ động, giữ nguyên mệnh đề quan hệ 'where residents walk'." },
        { id: "tr4p2", type: "fillblank", prompt: "The grassland where the cattle graze is protected by the local government. → The local government ______________ (protect) the grassland where the cattle graze.", accepted: ["protects"], correct: "protects", explanation: "Chú ý chia động từ theo chủ ngữ số ít 'The local government' → protects." }
      ]
    }
  ],

  // ---------------------------------------------------------
  // PART 6 — QUICK REVIEW (mini test, all skills)
  // ---------------------------------------------------------
  quickReview: [
    { id: "q1", cat: "Vocabulary", type: "mcq", prompt: "'Dedication' means:", options: { A: "sự tận tâm, cống hiến", B: "sự lười biếng", C: "đồng cỏ", D: "gia súc" }, correct: "A", explanation: "dedication (n) = sự tận tâm, cống hiến." },
    { id: "q2", cat: "Vocabulary", type: "mcq", prompt: "'Inevitable' means:", options: { A: "có thể tránh được", B: "không thể tránh khỏi", C: "thú vị", D: "nguy hiểm" }, correct: "B", explanation: "inevitable (adj) = không thể tránh khỏi, tất yếu." },
    { id: "q3", cat: "Vocabulary", type: "fillblank", prompt: "Many ______________ (người chăn thả gia súc) use motorbikes to herd cattle and horses.", accepted: ["herders"], correct: "herders", explanation: "herders (n) = những người chăn thả gia súc." },
    { id: "q4", cat: "Grammar", type: "mcq", prompt: "Jack: \"I don't have a car.\" Mary: \"Don't worry. I ______ you to the airport tomorrow.\"", options: { A: "will take", B: "took", C: "am taking", D: "take" }, correct: "A", explanation: "Quyết định/lời đề nghị giúp đỡ ngay lúc nói → will." },
    { id: "q5", cat: "Grammar", type: "mcq", prompt: "My plane ______ at Manchester airport at 8 p.m. tomorrow evening.", options: { A: "is landing", B: "lands", C: "will land", D: "landed" }, correct: "B", explanation: "Lịch trình cố định → hiện tại đơn: lands." },
    { id: "q6", cat: "Grammar", type: "fillblank", prompt: "You shouldn't point at others while talking. → You ______________ (had better) point at others while talking.", accepted: ["had better not"], correct: "had better not", explanation: "shouldn't ⇄ had better not." },
    { id: "q7", cat: "Grammar", type: "fillblank", prompt: "Many volunteer activities are organized to help the local community. → People ______________ (organize) many volunteer activities to help the local community.", accepted: ["organize"], correct: "organize", explanation: "Bị động → chủ động: are organized → organize." },
    { id: "q8", cat: "Reading", type: "truefalse", prompt: "In winter, herders spend most of their time outdoors working on the farms.", correct: "False", explanation: "Bài đọc: mùa đông họ ở trong nhà (stay indoors)." },
    { id: "q9", cat: "Reading", type: "truefalse", prompt: "Nomads can watch television and use mobile phones thanks to solar panels.", correct: "True", explanation: "Bài đọc: 'The nomads use solar energy to power TV sets and mobile phones.'" },
    { id: "q10", cat: "Reading", type: "mcq", prompt: "What is the main idea of the Mongolia passage?", options: { A: "The traditional lifestyle of Mongolian nomads and how technology changes it.", B: "The history of Mongolia.", C: "How to make milk alcohol.", D: "The benefits of trucks over ox carts." }, correct: "A", explanation: "Bài đọc nói về lối sống du mục truyền thống và sự thay đổi nhờ công nghệ." },
    { id: "q11", cat: "Writing", type: "fillblank", prompt: "We must finish all the homework by Thursday to meet the deadline. → It is obligatory ______________ us to finish all the homework by Thursday to meet the deadline.", accepted: ["for"], correct: "for", explanation: "It is obligatory FOR + O + to V." },
    { id: "q12", cat: "Writing", type: "fillblank", prompt: "The park where children play is cleaned by volunteers every day. → Volunteers ______________ (clean) the park where children play every day.", accepted: ["clean"], correct: "clean", explanation: "Bị động → chủ động, giữ nguyên mệnh đề quan hệ." },
    { id: "q13", cat: "Writing", type: "fillblank", prompt: "Many volunteer activities are organized to help the local community. → People ______________ (organize) many volunteer activities to help the local community.", accepted: ["organize"], correct: "organize", explanation: "Bị động → chủ động: are organized → organize." },
    { id: "q14", cat: "Vocabulary", type: "mcq", prompt: "You should ______ trash whenever you can.", options: { A: "recycle", B: "confine", C: "process", D: "dedicate" }, correct: "A", explanation: "'recycle trash' = tái chế rác." }
  ]
};
