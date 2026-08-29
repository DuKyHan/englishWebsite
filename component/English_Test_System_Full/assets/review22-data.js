const REVIEW = {
  id: "test22",
  testFile: "test22.html",
  grade: "Grade 9 — Global Success",
  unit: "Unit 5: Our experiences",
  title: "Knowledge Review — Unit 5, Practice Test 2",

  // ---------------------------------------------------------
  // PART 1 — VOCABULARY REVIEW
  // ---------------------------------------------------------
  vocabulary: [
    { word: "bully", pos: "v/n", ipa: "/ˈbʊli/", meaning: "bắt nạt; kẻ bắt nạt", example: "Secondary school was not a fun time for me due to my terrible experience of being bullied.", exampleVi: "Trung học không phải là khoảng thời gian vui vẻ với tôi vì trải nghiệm tồi tệ khi bị bắt nạt." },
    { word: "teasing", pos: "n", ipa: "/ˈtiːzɪŋ/", meaning: "sự trêu chọc", example: "It started with some teasing and name-calling.", exampleVi: "Nó bắt đầu bằng vài lời trêu chọc và gọi tên xúc phạm." },
    { word: "name-calling", pos: "n", ipa: "/ˈneɪm kɔːlɪŋ/", meaning: "việc gọi tên xúc phạm, chửi bới", example: "It started with some teasing and name-calling.", exampleVi: "Nó bắt đầu bằng vài lời trêu chọc và gọi tên xúc phạm." },
    { word: "physical violence", pos: "n phr", ipa: "/ˈfɪzɪkl ˈvaɪələns/", meaning: "bạo lực thể chất", example: "It got more serious with physical violence.", exampleVi: "Nó trở nên nghiêm trọng hơn với bạo lực thể chất." },
    { word: "step up", pos: "phr v", ipa: "/step ʌp/", meaning: "đứng ra hành động, ra tay giúp đỡ", example: "None of my peers ever stepped up to help me.", exampleVi: "Không một người bạn nào của tôi từng đứng ra giúp đỡ tôi." },
    { word: "seek help", pos: "v phr", ipa: "/siːk help/", meaning: "tìm kiếm sự giúp đỡ", example: "I finally sought help from my parents.", exampleVi: "Cuối cùng tôi đã tìm đến sự giúp đỡ của bố mẹ." },
    { word: "take action against", pos: "phr", ipa: "/teɪk ˈækʃn əˈɡenst/", meaning: "có hành động/biện pháp chống lại", example: "They demanded that the school take action against the bullies.", exampleVi: "Họ yêu cầu nhà trường có biện pháp xử lý những kẻ bắt nạt." },
    { word: "speak up", pos: "phr v", ipa: "/spiːk ʌp/", meaning: "lên tiếng", example: "I just wish I had spoken up sooner.", exampleVi: "Tôi chỉ ước mình đã lên tiếng sớm hơn." },
    { word: "deal with", pos: "phr v", ipa: "/diːl wɪð/", meaning: "xử lý, đối phó với", example: "The school could have done a better job of dealing with the issue.", exampleVi: "Nhà trường lẽ ra có thể xử lý vấn đề này tốt hơn." },
    { word: "reflect on", pos: "phr v", ipa: "/rɪˈflekt ɒn/", meaning: "suy ngẫm về", example: "Reflecting on these experiences helps us grow.", exampleVi: "Suy ngẫm về những trải nghiệm này giúp chúng ta trưởng thành." },
    { word: "diversity", pos: "n", ipa: "/daɪˈvɜːrsəti/", meaning: "sự đa dạng", example: "Watching a tribal dance made me appreciate the diversity of our world.", exampleVi: "Xem một điệu múa của bộ lạc khiến tôi trân trọng sự đa dạng của thế giới." },
    { word: "open-minded", pos: "adj", ipa: "/ˌoʊpən ˈmaɪndɪd/", meaning: "cởi mở, phóng khoáng", example: "Meeting new people makes us more open-minded and understanding.", exampleVi: "Gặp gỡ những người mới giúp chúng ta cởi mở và thấu hiểu hơn." },
    { word: "teamwork", pos: "n", ipa: "/ˈtiːmwɜːrk/", meaning: "làm việc nhóm", example: "The school project required a lot of work and teamwork.", exampleVi: "Dự án ở trường đòi hỏi rất nhiều công sức và làm việc nhóm." },
    { word: "confidence", pos: "n", ipa: "/ˈkɒnfɪdəns/", meaning: "sự tự tin", example: "This experience gave me confidence to face new challenges.", exampleVi: "Trải nghiệm này đã mang lại cho tôi sự tự tin để đối mặt với những thử thách mới." },
    { word: "workshop", pos: "n", ipa: "/ˈwɜːrkʃɒp/", meaning: "buổi hội thảo, tập huấn", example: "Attending workshops on communication and teamwork has made me more confident.", exampleVi: "Tham gia các buổi tập huấn về giao tiếp và làm việc nhóm đã giúp tôi tự tin hơn." },
    { word: "daily activity", pos: "n phr", ipa: "/ˈdeɪli ækˈtɪvəti/", meaning: "hoạt động hàng ngày", example: "Even small daily activities are important experiences.", exampleVi: "Ngay cả những hoạt động nhỏ hằng ngày cũng là những trải nghiệm quan trọng." },
    { word: "shape", pos: "v", ipa: "/ʃeɪp/", meaning: "định hình, hình thành", example: "Our experiences shape who we are.", exampleVi: "Những trải nghiệm của chúng ta định hình nên con người chúng ta." },
    { word: "rich", pos: "adj", ipa: "/rɪtʃ/", meaning: "phong phú, giàu có (nghĩa bóng)", example: "Every experience, big or small, makes our lives richer.", exampleVi: "Mỗi trải nghiệm, dù lớn hay nhỏ, đều làm cho cuộc sống của chúng ta phong phú hơn." }
  ],

  vocabPractice: {
    mcq: [
      { id: "vp1", prompt: "Choose the phrase that means 'đứng ra hành động, ra tay giúp đỡ':", options: { A: "step up", B: "speak up", C: "deal with", D: "reflect on" }, correct: "A", explanation: "<b>step up</b> (phr v) = đứng ra hành động, ra tay giúp đỡ." },
      { id: "vp2", prompt: "Choose the word that means 'sự tự tin':", options: { A: "confidence", B: "diversity", C: "teamwork", D: "violence" }, correct: "A", explanation: "<b>confidence</b> (n) = sự tự tin." },
      { id: "vp3", prompt: "\"They demanded that the school ______ the bullies.\"", options: { A: "take action against", B: "step up with", C: "reflect on", D: "seek help from" }, correct: "A", explanation: "\"<b>take action against</b>\" (có biện pháp chống lại) phù hợp với ngữ cảnh xử lý kẻ bắt nạt." },
      { id: "vp4", prompt: "Choose the word that means 'cởi mở, phóng khoáng':", options: { A: "open-minded", B: "helpless", C: "confident", D: "diverse" }, correct: "A", explanation: "<b>open-minded</b> (adj) = cởi mở, phóng khoáng." },
      { id: "vp5", prompt: "\"Even small ______ are important experiences.\"", options: { A: "daily activities", B: "workshops", C: "exchange programmes", D: "physical violence" }, correct: "A", explanation: "<b>daily activity</b> (n phr) = hoạt động hàng ngày." },
      { id: "vp6", prompt: "Choose the word that means 'định hình, hình thành':", options: { A: "shape", B: "break", C: "avoid", D: "ignore" }, correct: "A", explanation: "<b>shape</b> (v) = định hình, hình thành." }
    ],
    fillblank: [
      { id: "vf1", prompt: "None of my peers ever ______________ (đứng ra) to help me.", accepted: ["stepped up"], correct: "stepped up", explanation: "<b>step up</b> (phr v) = đứng ra hành động, ra tay giúp đỡ." },
      { id: "vf2", prompt: "I finally ______________ (tìm kiếm sự giúp đỡ) from my parents.", accepted: ["sought help"], correct: "sought help", explanation: "<b>seek help</b> (v phr), dạng quá khứ \"sought help\" = tìm kiếm sự giúp đỡ." },
      { id: "vf3", prompt: "I just wish I had ______________ (lên tiếng) sooner.", accepted: ["spoken up"], correct: "spoken up", explanation: "<b>speak up</b> (phr v) = lên tiếng." },
      { id: "vf4", prompt: "______________ (Suy ngẫm về) these experiences helps us grow.", accepted: ["reflecting on"], correct: "Reflecting on", explanation: "<b>reflect on</b> (phr v) = suy ngẫm về." },
      { id: "vf5", prompt: "Meeting new people makes us more ______________ (cởi mở) and understanding.", accepted: ["open-minded"], correct: "open-minded", explanation: "<b>open-minded</b> (adj) = cởi mở, phóng khoáng." },
      { id: "vf6", prompt: "This experience gave me ______________ (sự tự tin) to face new challenges.", accepted: ["confidence"], correct: "confidence", explanation: "<b>confidence</b> (n) = sự tự tin." }
    ],
    matching: {
      left: ["step up", "seek help", "diversity", "teamwork", "workshop", "shape"],
      right: ["đứng ra hành động, ra tay giúp đỡ", "tìm kiếm sự giúp đỡ", "sự đa dạng", "làm việc nhóm", "buổi hội thảo, tập huấn", "định hình, hình thành"],
      correctMap: [0, 1, 2, 3, 4, 5]
    },
    chooseWord: [
      { id: "cw1", prompt: "\"My trip to the national park was an ______ experience.\" (AMAZE)", options: { A: "amaze", B: "amazed", C: "amazing", D: "amazement" }, correct: "C", explanation: "Cần tính từ trước danh từ \"experience\" → amaze (v) → <b>amazing</b> (adj)." },
      { id: "cw2", prompt: "\"The ______ of the new communication tool has changed how we share experiences.\" (INVENT)", options: { A: "invent", B: "invention", C: "inventive", D: "inventor" }, correct: "B", explanation: "Cần danh từ làm chủ ngữ → invent (v) → <b>invention</b> (n)." },
      { id: "cw3", prompt: "\"The teacher provided a lot of ______ for the students to speak up.\" (ENCOURAGE)", options: { A: "encourage", B: "encouraging", C: "encouraged", D: "encouragement" }, correct: "D", explanation: "Cần danh từ làm tân ngữ của \"provided\" → encourage (v) → <b>encouragement</b> (n)." }
    ],
    wordMeaning: [
      { id: "wm1", prompt: "What does 'step up' mean?", options: { A: "đứng ra hành động, giúp đỡ", B: "bỏ chạy", C: "phớt lờ", D: "chỉ trích" }, correct: "A", explanation: "step up (phr v) = đứng ra hành động, ra tay giúp đỡ." },
      { id: "wm2", prompt: "What does 'open-minded' mean?", options: { A: "bảo thủ", B: "cởi mở, phóng khoáng", C: "nhút nhát", D: "keo kiệt" }, correct: "B", explanation: "open-minded (adj) = cởi mở, phóng khoáng." },
      { id: "wm3", prompt: "What does 'reflect on' mean?", options: { A: "suy ngẫm về", B: "phản đối", C: "sao chép", D: "phản chiếu ánh sáng" }, correct: "A", explanation: "reflect on (phr v) = suy ngẫm về." }
    ],
    wordForm: [
      { id: "wf1", prompt: "We felt very ______________ (RELAX) after a long day of hiking in the mountains.", accepted: ["relaxed"], correct: "relaxed", explanation: "relax (v) → relaxed (adj)." },
      { id: "wf2", prompt: "She gave an ______________ (EXCITE) speech about her journey to Africa.", accepted: ["exciting"], correct: "exciting", explanation: "excite (v) → exciting (adj)." },
      { id: "wf3", prompt: "The students participated in a ______________ (BUILD) activity to improve their teamwork.", accepted: ["building"], correct: "building", explanation: "build (v) → building (dùng như tính từ trong \"team-building activity\")." }
    ]
  },

  // ---------------------------------------------------------
  // PART 2 — GRAMMAR REVIEW & PRACTICE
  // ---------------------------------------------------------
  grammar: [
    {
      id: "g1", name: "The last time + S + V(quá khứ đơn) + was + ... + ago ⇄ It has been + ... + since + S + last + V(quá khứ đơn)",
      usage: "\"The last time + S + V(quá khứ đơn) + was + khoảng thời gian + ago\" có thể viết lại bằng \"It has been + khoảng thời gian + since + S + last + V(quá khứ đơn)\" — cùng diễn tả khoảng cách kể từ lần cuối một hành động xảy ra.",
      formulas: [
        "The last time + S + V(quá khứ đơn) + was + khoảng thời gian + ago.  →  It has been + khoảng thời gian + since + S + last + V(quá khứ đơn).",
        "The last time Mai travelled to Europe was two years ago. → It has been two years since Mai last travelled to Europe."
      ],
      signals: ["The last time + quá khứ đơn + was + ... + ago", "It has been + ... + since + last"],
      examples: [
        { en: "The last time Mai travelled to Europe was two years ago.", vi: "Lần cuối Mai đi du lịch châu Âu là hai năm trước." },
        { en: "It has been two years since Mai last travelled to Europe.", vi: "Đã hai năm kể từ lần cuối Mai đi du lịch châu Âu." }
      ],
      mistakes: [
        { wrong: "It has been two years since Mai last travels to Europe.", right: "It has been two years since Mai last travelled to Europe. (mệnh đề sau \"since\" dùng quá khứ đơn, không dùng hiện tại đơn)" }
      ],
      practice: {
        level1: [
          { id: "g1l1a", type: "fillblank", prompt: "The last time I visited my grandparents was a month ago. → It has been a month since I ______________ (last visited) my grandparents.", accepted: ["last visited"], correct: "last visited", explanation: "The last time + quá khứ đơn + was + ... + ago → It has been + ... + since + last + quá khứ đơn." }
        ],
        level2: [
          { id: "g1l2a", type: "fillblank", prompt: "Rewrite: 'The last time he played football was three weeks ago.' → It has been three weeks since he ______________ (last played) football.", accepted: ["last played"], correct: "last played", explanation: "The last time + quá khứ đơn + was → It has been + since + last + quá khứ đơn." }
        ],
        level3: [
          { id: "g1l3a", type: "fillblank", prompt: "Rewrite so it keeps the same meaning: 'The last time we ate at that restaurant was a year ago.' → ______________ (It has been a year since we last ate at that restaurant).", accepted: ["it has been a year since we last ate at that restaurant"], correct: "It has been a year since we last ate at that restaurant", explanation: "The last time + quá khứ đơn + was + ... + ago → It has been + ... + since + last + quá khứ đơn." }
        ]
      }
    },
    {
      id: "g2", name: "haven't/hasn't + V3 + since + thời điểm ⇄ S + last + V(quá khứ đơn) + thời điểm",
      usage: "\"S + haven't/hasn't + V3 + since + thời điểm\" có thể viết lại bằng \"S + last + V(quá khứ đơn) + thời điểm\" — cùng diễn tả lần cuối một hành động xảy ra.",
      formulas: [
        "S + haven't/hasn't + V3 + since + thời điểm.  →  S + last + V(quá khứ đơn) + thời điểm.",
        "George and his friends haven't phoned each other since last night. → George and his friends last phoned each other last night."
      ],
      signals: ["haven't/hasn't + V3 + since", "last + V(quá khứ đơn)"],
      examples: [
        { en: "George and his friends haven't phoned each other since last night.", vi: "George và bạn bè của cậu ấy đã không gọi điện cho nhau kể từ tối qua." },
        { en: "George and his friends last phoned each other last night.", vi: "Lần cuối George và bạn bè gọi điện cho nhau là tối qua." }
      ],
      mistakes: [
        { wrong: "George and his friends last phone each other last night.", right: "George and his friends last phoned each other last night. (cần quá khứ đơn \"phoned\", không dùng \"phone\")" }
      ],
      practice: {
        level1: [
          { id: "g2l1a", type: "fillblank", prompt: "We haven't spoken since Monday. → We ______________ (last spoke) on Monday.", accepted: ["last spoke"], correct: "last spoke", explanation: "haven't + V3 + since → last + V(quá khứ đơn)." }
        ],
        level2: [
          { id: "g2l2a", type: "fillblank", prompt: "Rewrite: 'She hasn't emailed him since last week.' → She ______________ (last emailed) him last week.", accepted: ["last emailed"], correct: "last emailed", explanation: "hasn't + V3 + since → last + V(quá khứ đơn)." }
        ],
        level3: [
          { id: "g2l3a", type: "fillblank", prompt: "Rewrite so it keeps the same meaning: 'They haven't visited this city since 2019.' → ______________ (They last visited this city in 2019).", accepted: ["they last visited this city in 2019"], correct: "They last visited this city in 2019", explanation: "haven't + V3 + since → last + V(quá khứ đơn)." }
        ]
      }
    },
    {
      id: "g3", name: "be unable to + V ⇄ couldn't + V",
      usage: "\"be unable to + V\" (không có khả năng làm gì) có nghĩa tương đương với \"couldn't + V\" khi diễn tả sự việc ở thì quá khứ.",
      formulas: [
        "S + was/were + unable to + V.  →  S + couldn't + V.",
        "At first, they were unable to speak or write a full simple sentence. → At first, they couldn't speak or write a full simple sentence."
      ],
      signals: ["be unable to + V", "couldn't + V"],
      examples: [
        { en: "At first, they were unable to speak or write a full simple sentence.", vi: "Lúc đầu, họ không thể nói hoặc viết một câu đơn hoàn chỉnh." },
        { en: "At first, they couldn't speak or write a full simple sentence.", vi: "Lúc đầu, họ không thể nói hoặc viết một câu đơn hoàn chỉnh." }
      ],
      mistakes: [
        { wrong: "At first, they couldn't to speak or write a full simple sentence.", right: "At first, they couldn't speak or write a full simple sentence. (không dùng \"to\" sau \"couldn't\")" }
      ],
      practice: {
        level1: [
          { id: "g3l1a", type: "fillblank", prompt: "She was unable to attend the meeting. → She ______________ (couldn't) attend the meeting.", accepted: ["couldn't"], correct: "couldn't", explanation: "be unable to + V → couldn't + V." }
        ],
        level2: [
          { id: "g3l2a", type: "fillblank", prompt: "Rewrite: 'They were unable to finish the project on time.' → They ______________ (couldn't) finish the project on time.", accepted: ["couldn't"], correct: "couldn't", explanation: "be unable to + V → couldn't + V." }
        ],
        level3: [
          { id: "g3l3a", type: "fillblank", prompt: "Rewrite so it keeps the same meaning: 'He was unable to solve the difficult maths problem.' → ______________ (He couldn't solve the difficult maths problem).", accepted: ["he couldn't solve the difficult maths problem"], correct: "He couldn't solve the difficult maths problem", explanation: "be unable to + V → couldn't + V." }
        ]
      }
    },
    {
      id: "g4", name: "ask sb to V ⇄ suggest that + S + (should) + V",
      usage: "\"ask sb to V\" (yêu cầu ai làm gì) có thể viết lại bằng cấu trúc câu đề nghị \"suggest that + S + (should) + V(nguyên mẫu)\" — động từ sau \"that\" luôn ở dạng nguyên mẫu (bare infinitive), không chia theo chủ ngữ hay thì.",
      formulas: [
        "S1 + asked + O + to V.  →  S1 + suggested that + O + (should) + V (nguyên mẫu).",
        "I asked them to revise every unit of their textbook. → I suggested that they (should) revise every unit of their textbook."
      ],
      signals: ["ask sb to V", "suggest that + S + (should) + V nguyên mẫu"],
      examples: [
        { en: "I asked them to revise every unit of their textbook.", vi: "Tôi đã yêu cầu họ ôn lại mọi đơn vị bài học trong sách giáo khoa." },
        { en: "I suggested that they (should) revise every unit of their textbook.", vi: "Tôi đã đề nghị rằng họ (nên) ôn lại mọi đơn vị bài học trong sách giáo khoa." }
      ],
      mistakes: [
        { wrong: "I suggested that they revised every unit of their textbook.", right: "I suggested that they (should) revise every unit of their textbook. (động từ sau \"suggest that + S\" luôn ở dạng nguyên mẫu, không chia thì quá khứ)" }
      ],
      practice: {
        level1: [
          { id: "g4l1a", type: "fillblank", prompt: "The doctor asked him to rest for a week. → The doctor suggested that he ______________ (rest) for a week.", accepted: ["rest"], correct: "rest", explanation: "ask sb to V → suggest that + S + (should) + V nguyên mẫu." }
        ],
        level2: [
          { id: "g4l2a", type: "fillblank", prompt: "Rewrite: 'The teacher asked the students to review the lesson.' → The teacher suggested that the students ______________ (review) the lesson.", accepted: ["review"], correct: "review", explanation: "ask sb to V → suggest that + S + V nguyên mẫu." }
        ],
        level3: [
          { id: "g4l3a", type: "fillblank", prompt: "Rewrite so it keeps the same meaning: 'She asked him to arrive early.' → ______________ (She suggested that he arrive early).", accepted: ["she suggested that he arrive early", "she suggested that he should arrive early"], correct: "She suggested that he (should) arrive early", explanation: "ask sb to V → suggest that + S + (should) + V nguyên mẫu." }
        ]
      }
    },
    {
      id: "g5", name: "Quá khứ hoàn thành: S + had + V3 + before + S + V(quá khứ đơn)",
      usage: "Dùng \"quá khứ hoàn thành\" (had + V3) để diễn tả một hành động đã xảy ra và hoàn tất TRƯỚC một hành động khác trong quá khứ (thường ở thì quá khứ đơn).",
      formulas: [
        "S1 + had + V3 + before + S2 + V(quá khứ đơn).",
        "The children had all gone to bed before their parents came home."
      ],
      signals: ["had + V3 + before + quá khứ đơn", "quá khứ đơn + after + had + V3"],
      examples: [
        { en: "The children had all gone to bed before their parents came home.", vi: "Bọn trẻ đã đi ngủ hết trước khi bố mẹ chúng về nhà." },
        { en: "By the time the bus arrived, we had already waited for an hour.", vi: "Đến khi xe buýt tới, chúng tôi đã đợi được một tiếng đồng hồ rồi." }
      ],
      mistakes: [
        { wrong: "The children have all gone to bed before their parents came home.", right: "The children had all gone to bed before their parents came home. (cần quá khứ hoàn thành \"had gone\", không dùng hiện tại hoàn thành)" }
      ],
      practice: {
        level1: [
          { id: "g5l1a", type: "fillblank", prompt: "By the time I arrived, the meeting ______________ (had already started).", accepted: ["had already started"], correct: "had already started", explanation: "had + V3 diễn tả hành động xảy ra trước một mốc thời gian khác trong quá khứ." }
        ],
        level2: [
          { id: "g5l2a", type: "fillblank", prompt: "Rewrite: 'She finished her homework before her mother came home.' → Her mother came home after she ______________ (had finished) her homework.", accepted: ["had finished"], correct: "had finished", explanation: "had + V3 diễn tả hành động xảy ra trước hành động khác trong quá khứ." }
        ],
        level3: [
          { id: "g5l3a", type: "fillblank", prompt: "Rewrite so it keeps the same meaning: 'The film started before we got to the cinema.' → ______________ (The film had already started before we got to the cinema).", accepted: ["the film had already started before we got to the cinema"], correct: "The film had already started before we got to the cinema", explanation: "had + V3 diễn tả hành động xảy ra trước hành động khác trong quá khứ." }
        ]
      }
    }
  ],

  // ---------------------------------------------------------
  // PART 3 — READING PRACTICE
  // ---------------------------------------------------------
  reading: {
    passage: "Experiences are the things we do and feel in our lives. They help us understand ourselves and the world better. <mark data-w=\"Reflecting on these experiences\">Reflecting on these experiences</mark> helps us grow. One of my favorite experiences is traveling. Every trip brings new adventures. For example, when I visited a small village, I got to <mark data-w=\"taste local foods\">taste local foods</mark> and take part in their traditions. Riding horses and snorkeling were exciting. Watching a tribal dance and seeing beautiful coral reefs made me appreciate the diversity of our world. Traveling teaches us a lot. It helps us learn about different cultures and ways of life. Meeting new people and exploring new places make us <mark data-w=\"more open-minded\">more open-minded</mark> and understanding. Another key part of my experiences is dealing with challenges. I remember a difficult school project that required a lot of work and teamwork. It was hard, but finishing it made me feel proud. This experience taught me to keep trying, even when things are tough, and <mark data-w=\"gave me confidence\">gave me confidence</mark> to face new challenges. Even small daily activities are important experiences. Working on group projects, helping others, and talking with friends all teach us something. For example, attending workshops on communication and teamwork has made me better at working with others and more confident. In conclusion, our experiences shape who we are. They help us grow, understand ourselves, and connect with others. Every experience, big or small, <mark data-w=\"makes our lives richer\">makes our lives richer</mark>.",
    vocabInContext: {
      "Reflecting on these experiences": "suy ngẫm về những trải nghiệm này",
      "taste local foods": "nếm thử món ăn địa phương",
      "more open-minded": "cởi mở hơn",
      "gave me confidence": "mang lại cho tôi sự tự tin",
      "makes our lives richer": "làm cho cuộc sống của chúng ta phong phú hơn"
    },
    translation: "<b>NHỮNG TRẢI NGHIỆM CỦA CHÚNG TA</b><br><br>Trải nghiệm là những điều chúng ta làm và cảm nhận trong cuộc sống. Chúng giúp chúng ta hiểu bản thân và thế giới tốt hơn. Suy ngẫm về những trải nghiệm này giúp chúng ta trưởng thành. Một trong những trải nghiệm yêu thích của tôi là du lịch. Mỗi chuyến đi mang đến những cuộc phiêu lưu mới. Ví dụ, khi tôi đến thăm một ngôi làng nhỏ, tôi đã được nếm thử các món ăn địa phương và tham gia vào các phong tục của họ. Cưỡi ngựa và lặn ống thở thật thú vị. Xem một điệu múa của bộ lạc và ngắm những rạn san hô tuyệt đẹp khiến tôi trân trọng sự đa dạng của thế giới. Du lịch dạy cho chúng ta rất nhiều điều. Nó giúp chúng ta tìm hiểu về các nền văn hóa và lối sống khác nhau. Gặp gỡ những người mới và khám phá những nơi mới khiến chúng ta cởi mở và thấu hiểu hơn. Một phần quan trọng khác trong những trải nghiệm của tôi là đối mặt với thử thách. Tôi nhớ một dự án khó ở trường đòi hỏi rất nhiều công sức và làm việc nhóm. Nó rất khó khăn, nhưng việc hoàn thành nó khiến tôi cảm thấy tự hào. Trải nghiệm này đã dạy tôi luôn cố gắng, ngay cả khi mọi thứ khó khăn, và mang lại cho tôi sự tự tin để đối mặt với những thử thách mới. Ngay cả những hoạt động nhỏ hằng ngày cũng là những trải nghiệm quan trọng. Làm việc trong các dự án nhóm, giúp đỡ người khác và trò chuyện với bạn bè đều dạy cho chúng ta điều gì đó. Ví dụ, tham gia các buổi tập huấn về giao tiếp và làm việc nhóm đã giúp tôi giỏi hơn trong việc làm việc với người khác và tự tin hơn. Tóm lại, những trải nghiệm của chúng ta định hình nên con người chúng ta. Chúng giúp chúng ta trưởng thành, hiểu bản thân và kết nối với người khác. Mỗi trải nghiệm, dù lớn hay nhỏ, đều làm cho cuộc sống của chúng ta phong phú hơn.",
    practice: [
      { id: "r1", type: "truefalse", prompt: "Traveling allows people to learn about different traditions and cultures.", correct: "True", explanation: "Đúng. Bài đọc: 'Traveling teaches us a lot. It helps us learn about different cultures and ways of life.'" },
      { id: "r2", type: "truefalse", prompt: "The author thinks that only big, unusual events can be considered important experiences.", correct: "False", explanation: "Sai. Bài đọc: 'Even small daily activities are important experiences.'" },
      { id: "r3", type: "truefalse", prompt: "The author felt proud after successfully finishing a difficult school project.", correct: "True", explanation: "Đúng. Bài đọc: 'It was hard, but finishing it made me feel proud.'" },
      { id: "r4", type: "truefalse", prompt: "Attending workshops made the author feel less confident when interacting with others.", correct: "False", explanation: "Sai. Bài đọc: attending workshops 'has made me better at working with others and more confident.'" },
      { id: "r5", type: "mcq", prompt: "What is the main idea of the passage?", options: { A: "Traveling is the only way for people to become more open-minded.", B: "School projects and workshops are the most important parts of education.", C: "All experiences, from big adventures to daily activities, help us grow and shape who we are.", D: "Overcoming professional challenges is necessary to build self-confidence." }, correct: "C", explanation: "Bài đọc kết luận: 'our experiences shape who we are... Every experience, big or small, makes our lives richer.'" },
      { id: "r6", type: "mcq", prompt: "Which of the following is NOT true according to the passage?", options: { A: "The author tried snorkeling and horse riding during a trip.", B: "The author believes that thinking back on what we experience helps us grow.", C: "Meeting new people helps us understand different ways of life.", D: "The author gave up on a difficult school project because it required too much teamwork." }, correct: "D", explanation: "Bài đọc nói ngược lại: tác giả đã hoàn thành dự án đó, không hề bỏ cuộc." },
      { id: "r7", type: "fillblank", prompt: "Find the phrase in the passage that means 'nếm thử món ăn địa phương'.", accepted: ["taste local foods"], correct: "taste local foods", explanation: "'...I got to taste local foods and take part in their traditions.' — taste local foods = nếm thử món ăn địa phương." },
      { id: "r8", type: "mcq", prompt: "According to the passage, what did attending workshops help the author with?", options: { A: "Becoming better at working with others and more confident.", B: "Learning how to cook traditional dishes.", C: "Finding a new job opportunity abroad.", D: "Traveling to more foreign countries." }, correct: "A", explanation: "Bài đọc: 'attending workshops on communication and teamwork has made me better at working with others and more confident.'" },
      { id: "r9", type: "truefalse", prompt: "According to the passage, every experience, big or small, makes our lives richer.", correct: "True", explanation: "Đúng. Bài đọc: 'Every experience, big or small, makes our lives richer.'" }
    ]
  },

  // ---------------------------------------------------------
  // PART 4 — TRANSLATION PRACTICE
  // ---------------------------------------------------------
  translation: [
    { id: "t1", en: "Experiences are the things we do and feel in our lives.", suggested: "Trải nghiệm là những điều chúng ta làm và cảm nhận trong cuộc sống.", notes: "Câu định nghĩa đơn giản, chủ ngữ \"Experiences\" số nhiều đi với động từ \"are\"." },
    { id: "t2", en: "Meeting new people and exploring new places make us more open-minded and understanding.", suggested: "Gặp gỡ những người mới và khám phá những nơi mới khiến chúng ta cởi mở và thấu hiểu hơn.", notes: "Hai danh động từ (V-ing) làm chủ ngữ ghép, động từ chia số nhiều \"make\"." },
    { id: "t3", en: "It was hard, but finishing it made me feel proud.", suggested: "Nó rất khó khăn, nhưng việc hoàn thành nó khiến tôi cảm thấy tự hào.", notes: "\"make sb feel + adj\" (khiến ai cảm thấy thế nào)." },
    { id: "t4", en: "This experience taught me to keep trying, even when things are tough.", suggested: "Trải nghiệm này đã dạy tôi luôn cố gắng, ngay cả khi mọi thứ khó khăn.", notes: "\"teach sb to V\" (dạy ai làm gì); \"even when\" (ngay cả khi) diễn tả sự tương phản." },
    { id: "t5", en: "Every experience, big or small, makes our lives richer.", suggested: "Mỗi trải nghiệm, dù lớn hay nhỏ, đều làm cho cuộc sống của chúng ta phong phú hơn.", notes: "\"big or small\" chêm giữa câu bổ nghĩa cho \"experience\"; \"richer\" là so sánh hơn của \"rich\"." }
  ],

  // ---------------------------------------------------------
  // PART 5 — SENTENCE TRANSFORMATION PRACTICE
  // ---------------------------------------------------------
  transformation: [
    {
      id: "tr1", name: "The last time + quá khứ đơn + was + ... + ago ⇄ It has been + ... + since + last + quá khứ đơn",
      formula: "The last time + S + V(quá khứ đơn) + was + khoảng thời gian + ago  →  It has been + khoảng thời gian + since + S + last + V(quá khứ đơn)",
      example: { before: "The last time Mai travelled to Europe was two years ago.", after: "It has been two years since Mai last travelled to Europe." },
      practice: [
        { id: "tr1p1", type: "fillblank", prompt: "The last time he visited Da Lat was three years ago. → It has been three years since he ______________ (last visited) Da Lat.", accepted: ["last visited"], correct: "last visited", explanation: "The last time + quá khứ đơn + was → It has been + since + last + quá khứ đơn." },
        { id: "tr1p2", type: "fillblank", prompt: "Rewrite: 'The last time they cleaned the house was a week ago.' → It has been a week since they ______________ (last cleaned) the house.", accepted: ["last cleaned"], correct: "last cleaned", explanation: "The last time + quá khứ đơn + was → It has been + since + last + quá khứ đơn." }
      ]
    },
    {
      id: "tr2", name: "haven't/hasn't + V3 + since ⇄ last + V(quá khứ đơn)",
      formula: "S + haven't/hasn't + V3 + since + thời điểm  →  S + last + V(quá khứ đơn) + thời điểm",
      example: { before: "George and his friends haven't phoned each other since last night.", after: "George and his friends last phoned each other last night." },
      practice: [
        { id: "tr2p1", type: "fillblank", prompt: "We haven't texted since Sunday. → We ______________ (last texted) on Sunday.", accepted: ["last texted"], correct: "last texted", explanation: "haven't + V3 + since → last + V(quá khứ đơn)." },
        { id: "tr2p2", type: "fillblank", prompt: "Rewrite: 'He hasn't updated his blog since March.' → He ______________ (last updated) his blog in March.", accepted: ["last updated"], correct: "last updated", explanation: "hasn't + V3 + since → last + V(quá khứ đơn)." }
      ]
    },
    {
      id: "tr3", name: "be unable to + V ⇄ couldn't + V",
      formula: "S + was/were + unable to + V  →  S + couldn't + V",
      example: { before: "At first, they were unable to speak or write a full simple sentence.", after: "At first, they couldn't speak or write a full simple sentence." },
      practice: [
        { id: "tr3p1", type: "fillblank", prompt: "He was unable to answer the question. → He ______________ (couldn't) answer the question.", accepted: ["couldn't"], correct: "couldn't", explanation: "be unable to + V → couldn't + V." },
        { id: "tr3p2", type: "fillblank", prompt: "Rewrite: 'We were unable to contact them yesterday.' → We ______________ (couldn't) contact them yesterday.", accepted: ["couldn't"], correct: "couldn't", explanation: "be unable to + V → couldn't + V." }
      ]
    },
    {
      id: "tr4", name: "ask sb to V ⇄ suggest that + S + (should) + V",
      formula: "S1 + asked + O + to V  →  S1 + suggested that + O + (should) + V (nguyên mẫu)",
      example: { before: "I asked them to revise every unit of their textbook.", after: "I suggested that they (should) revise every unit of their textbook." },
      practice: [
        { id: "tr4p1", type: "fillblank", prompt: "The manager asked the staff to arrive earlier. → The manager suggested that the staff ______________ (arrive) earlier.", accepted: ["arrive"], correct: "arrive", explanation: "ask sb to V → suggest that + S + V nguyên mẫu." },
        { id: "tr4p2", type: "fillblank", prompt: "Rewrite: 'I asked her to double-check the report.' → I suggested that she ______________ (double-check) the report.", accepted: ["double-check"], correct: "double-check", explanation: "ask sb to V → suggest that + S + V nguyên mẫu." }
      ]
    }
  ],

  // ---------------------------------------------------------
  // PART 6 — QUICK REVIEW (mini test, all skills)
  // ---------------------------------------------------------
  quickReview: [
    { id: "q1", cat: "Vocabulary", type: "mcq", prompt: "'Step up' means:", options: { A: "đứng ra hành động, giúp đỡ", B: "bỏ chạy", C: "phớt lờ", D: "trì hoãn" }, correct: "A", explanation: "step up (phr v) = đứng ra hành động, ra tay giúp đỡ." },
    { id: "q2", cat: "Vocabulary", type: "mcq", prompt: "'Open-minded' means:", options: { A: "cởi mở, phóng khoáng", B: "bảo thủ", C: "nhút nhát", D: "ích kỷ" }, correct: "A", explanation: "open-minded (adj) = cởi mở, phóng khoáng." },
    { id: "q3", cat: "Vocabulary", type: "fillblank", prompt: "I just wish I had ______________ (speak up) sooner.", accepted: ["spoken up"], correct: "spoken up", explanation: "speak up (phr v) = lên tiếng." },
    { id: "q4", cat: "Grammar", type: "mcq", prompt: "The last time Mai travelled to Europe was two years ago. → It has been two years ______ Mai last travelled to Europe.", options: { A: "since", B: "for", C: "ago", D: "before" }, correct: "A", explanation: "It has been + khoảng thời gian + since + S + last + V(quá khứ đơn)." },
    { id: "q5", cat: "Grammar", type: "mcq", prompt: "George and his friends haven't phoned each other since last night. → George and his friends ______ phoned each other last night.", options: { A: "last", B: "already", C: "ever", D: "just" }, correct: "A", explanation: "haven't + V3 + since → last + V(quá khứ đơn)." },
    { id: "q6", cat: "Grammar", type: "fillblank", prompt: "At first, they were unable to speak or write a full simple sentence. → At first, they ______________ (couldn't) speak or write a full simple sentence.", accepted: ["couldn't"], correct: "couldn't", explanation: "be unable to + V → couldn't + V." },
    { id: "q7", cat: "Grammar", type: "fillblank", prompt: "I asked them to revise every unit of their textbook. → I suggested that they ______________ (revise) every unit of their textbook.", accepted: ["revise"], correct: "revise", explanation: "ask sb to V → suggest that + S + (should) + V nguyên mẫu." },
    { id: "q8", cat: "Reading", type: "truefalse", prompt: "Traveling allows people to learn about different traditions and cultures.", correct: "True", explanation: "Đúng theo bài đọc." },
    { id: "q9", cat: "Reading", type: "truefalse", prompt: "The author gave up on a difficult school project because it required too much teamwork.", correct: "False", explanation: "Sai. Tác giả đã hoàn thành dự án đó, không bỏ cuộc." },
    { id: "q10", cat: "Reading", type: "mcq", prompt: "What is the main idea of the passage about experiences?", options: { A: "All experiences, from big adventures to daily activities, help us grow and shape who we are.", B: "Only traveling can make people open-minded.", C: "School projects are more valuable than daily activities.", D: "Workshops are unnecessary for building confidence." }, correct: "A", explanation: "Bài đọc kết luận mọi trải nghiệm đều giúp ta trưởng thành và định hình con người." },
    { id: "q11", cat: "Writing", type: "fillblank", prompt: "The ______________ (invent) of the new communication tool has changed how we share experiences.", accepted: ["invention"], correct: "invention", explanation: "invent (v) → invention (n)." },
    { id: "q12", cat: "Writing", type: "fillblank", prompt: "She gave an ______________ (excite) speech about her journey to Africa.", accepted: ["exciting"], correct: "exciting", explanation: "excite (v) → exciting (adj)." },
    { id: "q13", cat: "Writing", type: "fillblank", prompt: "The teacher provided a lot of ______________ (encourage) for the students to speak up.", accepted: ["encouragement"], correct: "encouragement", explanation: "encourage (v) → encouragement (n)." },
    { id: "q14", cat: "Vocabulary", type: "mcq", prompt: "Which phrase means 'suy ngẫm về'?", options: { A: "reflect on", B: "step up", C: "deal with", D: "take action against" }, correct: "A", explanation: "reflect on (phr v) = suy ngẫm về." }
  ]
};
