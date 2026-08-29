const REVIEW = {
  id: "test42",
  testFile: "test42.html",
  grade: "Grade 7 — Global Success",
  unit: "Unit 3: Community service",
  title: "Knowledge Review — Unit 3, Practice Test 2",

  // ---------------------------------------------------------
  // PART 1 — VOCABULARY REVIEW
  // ---------------------------------------------------------
  vocabulary: [
    { word: "take part in", pos: "phrase", ipa: "/teɪk pɑːrt ɪn/", meaning: "tham gia vào", example: "You should think of taking part in the volunteer activities in your community.", exampleVi: "Bạn nên nghĩ đến việc tham gia các hoạt động tình nguyện trong cộng đồng của mình." },
    { word: "in need", pos: "phrase", ipa: "/ɪn niːd/", meaning: "gặp khó khăn, cần được giúp đỡ", example: "We sometimes raise money to help people in need.", exampleVi: "Đôi khi chúng tôi quyên tiền để giúp những người gặp khó khăn." },
    { word: "valuable", pos: "adj", ipa: "/ˈvæljuəbl/", meaning: "có giá trị, quý báu", example: "If we volunteer, we can gain valuable experience and skills.", exampleVi: "Nếu tình nguyện, chúng ta có thể có được kinh nghiệm và kỹ năng quý giá." },
    { word: "rubbish", pos: "n", ipa: "/ˈrʌbɪʃ/", meaning: "rác", example: "They have decided to clean up the neighborhood because it is full of rubbish.", exampleVi: "Họ đã quyết định dọn dẹp khu phố vì nó đầy rác." },
    { word: "gather", pos: "v", ipa: "/ˈɡæðər/", meaning: "tụ tập", example: "Why are the teenagers gathering on the street?", exampleVi: "Tại sao các thanh thiếu niên lại tụ tập trên đường phố?" },
    { word: "encourage", pos: "v", ipa: "/ɪnˈkɜːrɪdʒ/", meaning: "khuyến khích", example: "Most charitable activities are organized by churches and even encouraged by the government.", exampleVi: "Hầu hết các hoạt động từ thiện được tổ chức bởi các nhà thờ và thậm chí được chính phủ khuyến khích." },
    { word: "extend", pos: "v", ipa: "/ɪkˈstend/", meaning: "mở rộng, chìa ra", example: "The helping hand is extended to the poor, the homeless and the disabled.", exampleVi: "Bàn tay giúp đỡ được chìa ra cho người nghèo, người vô gia cư và người khuyết tật." },
    { word: "blind", pos: "adj", ipa: "/blaɪnd/", meaning: "mù, khiếm thị", example: "Volunteers make reading tapes for the blind.", exampleVi: "Các tình nguyện viên làm băng đọc cho người khiếm thị." },
    { word: "orphanage", pos: "n", ipa: "/ˈɔːrfənɪdʒ/", meaning: "trại trẻ mồ côi", example: "Some students often spend many hours as volunteers in hospitals, orphanages, or homes for the elderly.", exampleVi: "Một số học sinh thường dành nhiều giờ làm tình nguyện viên tại bệnh viện, trại trẻ mồ côi, hoặc nhà dưỡng lão." },
    { word: "repair", pos: "v", ipa: "/rɪˈper/", meaning: "sửa chữa", example: "Young volunteers paint, clean up, or repair the houses of people who are sick or old.", exampleVi: "Các tình nguyện viên trẻ sơn, dọn dẹp, hoặc sửa chữa nhà cửa cho người ốm hoặc người già." },
    { word: "fishing trip", pos: "phrase", ipa: "/ˈfɪʃɪŋ trɪp/", meaning: "chuyến đi câu cá", example: "College students take these boys to basketball games or on fishing trips.", exampleVi: "Sinh viên đại học đưa những cậu bé này đi xem bóng rổ hoặc đi câu cá." },
    { word: "museum", pos: "n", ipa: "/mjuˈziːəm/", meaning: "viện bảo tàng", example: "Some clubs hold short trips to the mountains, the beaches, museums, or other places of interest.", exampleVi: "Một số câu lạc bộ tổ chức các chuyến đi ngắn đến núi, biển, viện bảo tàng, hoặc những nơi thú vị khác." },
    { word: "soup kitchen", pos: "phrase", ipa: "/suːp ˈkɪtʃɪn/", meaning: "bếp ăn từ thiện", example: "Some people work to teach youngsters how to read, others open up soup kitchens to feed the homeless.", exampleVi: "Một số người dạy trẻ em đọc chữ, những người khác mở bếp ăn từ thiện để nuôi người vô gia cư." },
    { word: "reading tape", pos: "phrase", ipa: "/ˈriːdɪŋ teɪp/", meaning: "băng đọc (cho người khiếm thị)", example: "Volunteers also take care of the disabled by making reading tapes for the blind.", exampleVi: "Các tình nguyện viên cũng chăm sóc người khuyết tật bằng cách làm băng đọc cho người khiếm thị." },
    { word: "public service", pos: "phrase", ipa: "/ˈpʌblɪk ˈsɜːrvɪs/", meaning: "dịch vụ công", example: "The government aims to improve public services, especially education.", exampleVi: "Chính phủ đặt mục tiêu cải thiện các dịch vụ công, đặc biệt là giáo dục." },
    { word: "overnight parking", pos: "phrase", ipa: "/ˌoʊvərˈnaɪt ˈpɑːrkɪŋ/", meaning: "việc đỗ xe qua đêm", example: "Overnight parking is not allowed here.", exampleVi: "Việc đỗ xe qua đêm không được phép ở đây." },
    { word: "silence", pos: "n", ipa: "/ˈsaɪləns/", meaning: "sự im lặng", example: "The notice in the cinema says: Silence, please turn off your mobile phones.", exampleVi: "Thông báo trong rạp chiếu phim ghi: Xin giữ im lặng, hãy tắt điện thoại di động." },
    { word: "discuss", pos: "v", ipa: "/dɪˈskʌs/", meaning: "thảo luận", example: "The class will discuss the benefits of community service tomorrow.", exampleVi: "Lớp học sẽ thảo luận về lợi ích của công tác cộng đồng vào ngày mai." }
  ],

  vocabPractice: {
    mcq: [
      { id: "vp1", prompt: "Choose the word that means 'rác':", options: { A: "rubbish", B: "service", C: "shelter", D: "charity" }, correct: "A", explanation: "<b>rubbish</b> (n) = rác." },
      { id: "vp2", prompt: "Choose the word that means 'trại trẻ mồ côi':", options: { A: "orphanage", B: "museum", C: "playground", D: "nursing home" }, correct: "A", explanation: "<b>orphanage</b> (n) = trại trẻ mồ côi." },
      { id: "vp3", prompt: "\"We sometimes raise money to help people in ______.\"", options: { A: "need", B: "success", C: "danger only", D: "hospital" }, correct: "A", explanation: "\"people in <b>need</b>\" (những người gặp khó khăn) là cụm cố định." },
      { id: "vp4", prompt: "Choose the word that means 'sửa chữa':", options: { A: "repair", B: "gather", C: "extend", D: "encourage" }, correct: "A", explanation: "<b>repair</b> (v) = sửa chữa." },
      { id: "vp5", prompt: "\"They have decided to clean up the neighborhood because it is full of ______.\"", options: { A: "rubbish", B: "service", C: "silence", D: "value" }, correct: "A", explanation: "\"full of <b>rubbish</b>\" (đầy rác) phù hợp với ngữ cảnh cần dọn dẹp." },
      { id: "vp6", prompt: "Choose the word that means 'khuyến khích':", options: { A: "encourage", B: "discourage", C: "discuss", D: "extend" }, correct: "A", explanation: "<b>encourage</b> (v) = khuyến khích." }
    ],
    fillblank: [
      { id: "vf1", prompt: "You should think of ______________ (tham gia vào) the volunteer activities in your community.", accepted: ["taking part in"], correct: "taking part in", explanation: "<b>take part in</b> (phrase) = tham gia vào." },
      { id: "vf2", prompt: "Volunteers make reading tapes for the ______________ (người mù, khiếm thị).", accepted: ["blind"], correct: "blind", explanation: "<b>blind</b> (adj/n) = mù, khiếm thị." },
      { id: "vf3", prompt: "College students take the boys on ______________ (chuyến đi câu cá).", accepted: ["fishing trips"], correct: "fishing trips", explanation: "<b>fishing trip</b> (phrase) = chuyến đi câu cá." },
      { id: "vf4", prompt: "Some clubs hold short trips to the mountains, the beaches, and ______________ (viện bảo tàng).", accepted: ["museums"], correct: "museums", explanation: "<b>museum</b> (n) = viện bảo tàng." },
      { id: "vf5", prompt: "Some people open up ______________ (bếp ăn từ thiện) to feed the homeless.", accepted: ["soup kitchens"], correct: "soup kitchens", explanation: "<b>soup kitchen</b> (phrase) = bếp ăn từ thiện." },
      { id: "vf6", prompt: "The government aims to improve ______________ (dịch vụ công), especially education.", accepted: ["public services"], correct: "public services", explanation: "<b>public service</b> (phrase) = dịch vụ công." }
    ],
    matching: {
      left: ["gather", "extend", "in need", "valuable", "silence", "discuss"],
      right: ["tụ tập", "mở rộng, chìa ra", "gặp khó khăn, cần giúp đỡ", "có giá trị, quý báu", "sự im lặng", "thảo luận"],
      correctMap: [0, 1, 2, 3, 4, 5]
    },
    chooseWord: [
      { id: "cw1", prompt: "\"If we volunteer, we can gain ______ experience and skills.\" (VALUE)", options: { A: "value", B: "valuable", C: "valuably", D: "devalue" }, correct: "B", explanation: "Cần tính từ trước \"experience\" → value (n) → <b>valuable</b> (adj, +able)." },
      { id: "cw2", prompt: "\"Most charitable activities are organized by churches and even ______ by the government.\" (ENCOURAGE)", options: { A: "encourage", B: "encouraging", C: "encouraged", D: "encouragement" }, correct: "C", explanation: "Câu bị động \"are... encouraged\" cần V3/ed → <b>encouraged</b>." },
      { id: "cw3", prompt: "\"The helping hand is ______ to the poor, the homeless and the disabled.\" (EXTEND)", options: { A: "extend", B: "extended", C: "extending", D: "extension" }, correct: "B", explanation: "Câu bị động \"is... extended\" cần V3/ed → <b>extended</b>." }
    ],
    wordMeaning: [
      { id: "wm1", prompt: "What does 'rubbish' mean?", options: { A: "rác", B: "hoa quả", C: "quần áo", D: "sách vở" }, correct: "A", explanation: "rubbish (n) = rác." },
      { id: "wm2", prompt: "What does 'in need' mean?", options: { A: "giàu có", B: "gặp khó khăn, cần giúp đỡ", C: "vui vẻ", D: "bận rộn" }, correct: "B", explanation: "in need (phrase) = gặp khó khăn, cần giúp đỡ." },
      { id: "wm3", prompt: "What does 'orphanage' mean?", options: { A: "trại trẻ mồ côi", B: "viện dưỡng lão", C: "bệnh viện", D: "trường học" }, correct: "A", explanation: "orphanage (n) = trại trẻ mồ côi." }
    ],
    wordForm: [
      { id: "wf1", prompt: "If we volunteer, we can gain ______________ (VALUE) experience and skills.", accepted: ["valuable"], correct: "valuable", explanation: "value (n) → valuable (adj, +able)." },
      { id: "wf2", prompt: "Most charitable activities are organized by churches and even ______________ (ENCOURAGE) by the government.", accepted: ["encouraged"], correct: "encouraged", explanation: "encourage (v) → encouraged (V3/ed, thể bị động)." },
      { id: "wf3", prompt: "The helping hand is ______________ (EXTEND) to the poor and the homeless.", accepted: ["extended"], correct: "extended", explanation: "extend (v) → extended (V3/ed, thể bị động)." }
    ]
  },

  // ---------------------------------------------------------
  // PART 2 — GRAMMAR REVIEW & PRACTICE
  // ---------------------------------------------------------
  grammar: [
    {
      id: "g1", name: "knew how to V ⇄ could V",
      usage: "\"S + knew how to + V\" (biết cách làm gì trong quá khứ) có thể viết lại bằng \"S + could + V\" (có khả năng làm gì đó trong quá khứ), giữ nguyên nghĩa về khả năng.",
      formulas: [
        "S + knew how to + V.  →  S + could + V.",
        "Paula knew how to cook well when she was eleven. → Paula could cook well when she was eleven."
      ],
      signals: ["knew how to V", "could V"],
      examples: [
        { en: "Paula knew how to cook well when she was eleven.", vi: "Paula biết nấu ăn giỏi khi cô ấy 11 tuổi." },
        { en: "Paula could cook well when she was eleven.", vi: "Paula có thể nấu ăn giỏi khi cô ấy 11 tuổi." }
      ],
      mistakes: [
        { wrong: "Paula could to cook well.", right: "Paula could cook well. (\"could\" theo sau bởi động từ nguyên thể không có \"to\")" }
      ],
      practice: {
        level1: [
          { id: "g1l1a", type: "fillblank", prompt: "He knew how to swim when he was six. → He ______________ (could) swim when he was six.", accepted: ["could"], correct: "could", explanation: "knew how to V → could V." }
        ],
        level2: [
          { id: "g1l2a", type: "fillblank", prompt: "Rewrite: 'She knew how to play the piano at the age of five.' → She ______________ (could) play the piano at the age of five.", accepted: ["could"], correct: "could", explanation: "knew how to V → could V." }
        ],
        level3: [
          { id: "g1l3a", type: "fillblank", prompt: "Rewrite so it keeps the same meaning: 'They knew how to read maps when they were young scouts.' → ______________ (They could read maps when they were young scouts).", accepted: ["they could read maps when they were young scouts"], correct: "They could read maps when they were young scouts", explanation: "knew how to V → could V." }
        ]
      }
    },
    {
      id: "g2", name: "V-ing... sounds + adj ⇄ It's + adj + to V",
      usage: "\"V-ing... sounds + adj\" (nghe có vẻ như thế nào) có thể viết lại bằng \"It's + adj + to + V\", giữ nguyên nhận xét về một hành động.",
      formulas: [
        "V-ing + sounds + adj + to sb.  →  It's + adj + to + V.",
        "Tutoring younger children sounds very exciting to me. → It's very exciting to tutor younger children."
      ],
      signals: ["V-ing... sounds adj", "It's adj to V"],
      examples: [
        { en: "Tutoring younger children sounds very exciting to me.", vi: "Việc kèm cặp các em nhỏ nghe có vẻ rất thú vị đối với tôi." },
        { en: "It's very exciting to tutor younger children.", vi: "Thật thú vị khi kèm cặp các em nhỏ." }
      ],
      mistakes: [
        { wrong: "It's very exciting tutoring younger children.", right: "It's very exciting to tutor younger children. (cần \"to V\" sau tính từ trong cấu trúc \"It's + adj + to V\")" }
      ],
      practice: {
        level1: [
          { id: "g2l1a", type: "fillblank", prompt: "Joining the club sounds interesting. → It's interesting ______________ (to join) the club.", accepted: ["to join"], correct: "to join", explanation: "V-ing... sounds adj → It's adj to V." }
        ],
        level2: [
          { id: "g2l2a", type: "fillblank", prompt: "Rewrite: 'Helping the elderly sounds meaningful.' → It's meaningful ______________ (to help) the elderly.", accepted: ["to help"], correct: "to help", explanation: "V-ing... sounds adj → It's adj to V." }
        ],
        level3: [
          { id: "g2l3a", type: "fillblank", prompt: "Rewrite so it keeps the same meaning: 'Working at the animal shelter sounds fun.' → ______________ (It's fun to work at the animal shelter).", accepted: ["it's fun to work at the animal shelter"], correct: "It's fun to work at the animal shelter", explanation: "V-ing... sounds adj → It's adj to V." }
        ]
      }
    },
    {
      id: "g3", name: "Active ⇄ Passive (attract → be attracted by)",
      usage: "Câu chủ động \"S + attracted + O\" có thể chuyển sang câu bị động \"O + were/was + attracted + by + S\" khi muốn nhấn mạnh vào đối tượng bị thu hút.",
      formulas: [
        "S + attracted + O + (thời gian).  →  O + was/were + attracted + by + S + (thời gian).",
        "Our campaign attracted over 1000 volunteers last year. → Over 1000 volunteers were attracted by our campaign last year."
      ],
      signals: ["active: S + attracted + O", "passive: O + was/were + attracted + by + S"],
      examples: [
        { en: "Our campaign attracted over 1000 volunteers all over the world last year.", vi: "Chiến dịch của chúng tôi đã thu hút hơn 1000 tình nguyện viên trên toàn thế giới năm ngoái." },
        { en: "Over 1000 volunteers all over the world were attracted by our campaign last year.", vi: "Hơn 1000 tình nguyện viên trên toàn thế giới đã bị thu hút bởi chiến dịch của chúng tôi năm ngoái." }
      ],
      mistakes: [
        { wrong: "Volunteers was attracted by our campaign.", right: "Volunteers were attracted by our campaign. (chủ ngữ số nhiều cần \"were\")" }
      ],
      practice: {
        level1: [
          { id: "g3l1a", type: "fillblank", prompt: "The event attracted many students. → Many students ______________ (were attracted) by the event.", accepted: ["were attracted"], correct: "were attracted", explanation: "Active → Passive: O + was/were + attracted + by + S." }
        ],
        level2: [
          { id: "g3l2a", type: "fillblank", prompt: "Rewrite: 'The charity concert attracted a large crowd.' → A large crowd ______________ (was attracted) by the charity concert.", accepted: ["was attracted"], correct: "was attracted", explanation: "Active → Passive: O + was/were + attracted + by + S." }
        ],
        level3: [
          { id: "g3l3a", type: "fillblank", prompt: "Rewrite so it keeps the same meaning: 'The project attracted hundreds of donors last month.' → ______________ (Hundreds of donors were attracted by the project last month).", accepted: ["hundreds of donors were attracted by the project last month"], correct: "Hundreds of donors were attracted by the project last month", explanation: "Active → Passive: O + was/were + attracted + by + S." }
        ]
      }
    },
    {
      id: "g4", name: "Direct question ⇄ Embedded question (Do you think...?)",
      usage: "Một câu hỏi trực tiếp \"How/What/Where...+ can + S + V?\" có thể được lồng vào bên trong một câu hỏi khác bắt đầu bằng \"Do you think...?\" để hỏi ý kiến một cách lịch sự hơn.",
      formulas: [
        "How can S + V?  →  Do you think how S can V?",
        "How can we help the elderly? → Do you think how we can help the elderly?"
      ],
      signals: ["How can S V?", "Do you think how S can V?"],
      examples: [
        { en: "How can we help the elderly?", vi: "Làm thế nào chúng ta có thể giúp đỡ người già?" },
        { en: "Do you think how we can help the elderly?", vi: "Bạn có nghĩ về việc làm thế nào chúng ta có thể giúp đỡ người già không?" }
      ],
      mistakes: [
        { wrong: "Do you think how can we help the elderly?", right: "Do you think how we can help the elderly? (trong câu hỏi lồng, trật tự từ trở về như câu khẳng định: S trước động từ khuyết thiếu)" }
      ],
      practice: {
        level1: [
          { id: "g4l1a", type: "fillblank", prompt: "How can we save more money? → Do you think how ______________ (we) can save more money?", accepted: ["we"], correct: "we", explanation: "Trong câu hỏi lồng, chủ ngữ đứng trước động từ khuyết thiếu." }
        ],
        level2: [
          { id: "g4l2a", type: "fillblank", prompt: "Rewrite: 'How can they finish the project on time?' → Do you think how ______________ (they) can finish the project on time?", accepted: ["they"], correct: "they", explanation: "Trong câu hỏi lồng, chủ ngữ đứng trước động từ khuyết thiếu." }
        ],
        level3: [
          { id: "g4l3a", type: "fillblank", prompt: "Rewrite so it keeps the same meaning: 'How can I become a better volunteer?' → ______________ (Do you think how I can become a better volunteer?).", accepted: ["do you think how i can become a better volunteer"], correct: "Do you think how I can become a better volunteer?", explanation: "Direct question → Embedded question." }
        ]
      }
    },
    {
      id: "g5", name: "(Bonus) adj + enough + to V",
      usage: "Cấu trúc \"adj + enough + to V\" (đủ ... để làm gì) dùng để nói một đặc điểm đạt đủ mức cần thiết để thực hiện một hành động.",
      formulas: [
        "S + be + adj + enough + to + V.",
        "Most of these clubs use a lot of students as volunteers because they are young enough to understand the problems of younger boys and girls."
      ],
      signals: ["adj + enough + to V"],
      examples: [
        { en: "They are young enough to understand the problems of younger boys and girls.", vi: "Họ đủ trẻ để hiểu được những vấn đề của các em nhỏ tuổi hơn." },
        { en: "She is old enough to volunteer at the hospital.", vi: "Cô ấy đủ lớn để làm tình nguyện viên ở bệnh viện." }
      ],
      mistakes: [
        { wrong: "enough young to understand", right: "young enough to understand (\"enough\" đứng sau tính từ, không đứng trước)" }
      ],
      practice: {
        level1: [
          { id: "g5l1a", type: "fillblank", prompt: "He is strong ______________ (enough) to carry the boxes.", accepted: ["enough"], correct: "enough", explanation: "adj + enough + to V." }
        ],
        level2: [
          { id: "g5l2a", type: "fillblank", prompt: "Rewrite: 'She is old (enough) to join the volunteer team.' → She is old ______________ (enough) to join the volunteer team.", accepted: ["enough"], correct: "enough", explanation: "adj + enough + to V." }
        ],
        level3: [
          { id: "g5l3a", type: "fillblank", prompt: "Complete: 'The students are responsible ______________ (enough) to organize the event by themselves.'", accepted: ["enough"], correct: "enough", explanation: "adj + enough + to V." }
        ]
      }
    }
  ],

  // ---------------------------------------------------------
  // PART 3 — READING PRACTICE
  // ---------------------------------------------------------
  reading: {
    passage: "Each country has many good people who take care of others. For example, some of students in the United States often spend many hours as volunteers in hospitals, orphanages or homes for the elderly. <mark data-w=\"They read books to the people in these places, or they just visit them and play games with them or listen to their problems\">They read books to the people in these places, or they just visit them and play games with them or listen to their problems</mark>. Other young volunteers go and work in the homes of people who are sick or old. <mark data-w=\"They paint, clean up, or repair their houses, do the shopping\">They paint, clean up, or repair their houses, do the shopping</mark>. For boys who don't have fathers, there is an organization called Big Brothers. <mark data-w=\"College students and other men take these boys to basketball games or on fishing trips\">College students and other men take these boys to basketball games or on fishing trips</mark> and help them to get to know things those boys usually learn from their fathers. Each city has a number of clubs where boys and girls can go and play games. <mark data-w=\"Some of these clubs show movies or hold short trips to the mountains, the beaches, museums, or other places of interest\">Some of these clubs show movies or hold short trips to the mountains, the beaches, museums, or other places of interest</mark>. Most of these clubs use a lot of students as volunteers because <mark data-w=\"they are young enough to understand the problems of younger boys and girls\">they are young enough to understand the problems of younger boys and girls</mark>.",
    vocabInContext: {
      "They read books to the people in these places, or they just visit them and play games with them or listen to their problems": "họ đọc sách cho mọi người ở những nơi này, hoặc chỉ đến thăm và chơi cùng họ hoặc lắng nghe vấn đề của họ",
      "They paint, clean up, or repair their houses, do the shopping": "họ sơn nhà, dọn dẹp, hoặc sửa nhà, đi chợ giúp",
      "College students and other men take these boys to basketball games or on fishing trips": "sinh viên đại học và những người đàn ông khác đưa các cậu bé đi xem bóng rổ hoặc đi câu cá",
      "Some of these clubs show movies or hold short trips to the mountains, the beaches, museums, or other places of interest": "một số câu lạc bộ chiếu phim hoặc tổ chức các chuyến đi ngắn đến núi, biển, bảo tàng, hoặc những nơi thú vị khác",
      "they are young enough to understand the problems of younger boys and girls": "họ đủ trẻ để hiểu được những vấn đề của các em nhỏ tuổi hơn"
    },
    translation: "<b>NHỮNG NGƯỜI TỐT BỤNG TRONG CỘNG ĐỒNG</b><br><br>Mỗi quốc gia đều có nhiều người tốt bụng chăm sóc người khác. Ví dụ, một số sinh viên ở Mỹ thường dành nhiều giờ làm tình nguyện viên tại bệnh viện, trại trẻ mồ côi, hoặc nhà dưỡng lão. Họ đọc sách cho mọi người ở những nơi này, hoặc chỉ đơn giản là đến thăm và chơi trò chơi cùng họ hoặc lắng nghe những vấn đề của họ. Những tình nguyện viên trẻ khác đến làm việc tại nhà của những người ốm hoặc già yếu. Họ sơn nhà, dọn dẹp, hoặc sửa nhà, đi chợ giúp. Đối với những cậu bé không có cha, có một tổ chức tên là Big Brothers. Sinh viên đại học và những người đàn ông khác đưa các cậu bé này đi xem bóng rổ hoặc đi câu cá và giúp các em làm quen với những điều mà các em thường học được từ cha mình. Mỗi thành phố đều có một số câu lạc bộ nơi các bé trai và bé gái có thể đến chơi. Một số câu lạc bộ này chiếu phim hoặc tổ chức các chuyến đi ngắn đến núi, biển, bảo tàng, hoặc những nơi thú vị khác. Hầu hết các câu lạc bộ này sử dụng rất nhiều sinh viên làm tình nguyện viên vì họ đủ trẻ để hiểu được những vấn đề của các em nhỏ tuổi hơn.",
    practice: [
      { id: "r1", type: "truefalse", prompt: "Students in the United States volunteer in places like orphanages and nursing homes.", correct: "True", explanation: "Đúng. Bài đọc: \"students in the United States often spend many hours as volunteers in hospitals, orphanages or homes for the elderly.\"" },
      { id: "r2", type: "truefalse", prompt: "Volunteers only help the elderly by reading books and never do manual work like cleaning.", correct: "False", explanation: "Sai. Bài đọc: \"They paint, clean up, or repair their houses, do the shopping.\"" },
      { id: "r3", type: "truefalse", prompt: "The \"Big Brothers\" organization is designed to support boys who do not have fathers.", correct: "True", explanation: "Đúng. Bài đọc: \"For boys who don't have fathers, there is an organization called Big Brothers.\"" },
      { id: "r4", type: "truefalse", prompt: "Most youth clubs prefer not to use student volunteers because they are too young.", correct: "False", explanation: "Sai. Bài đọc: \"Most of these clubs use a lot of students as volunteers because they are young enough to understand the problems.\"" },
      { id: "r5", type: "mcq", prompt: "What do volunteers in the \"Big Brothers\" organization do for the boys?", options: { A: "They take the boys to sports games or fishing trips.", B: "They give the boys money to buy school supplies.", C: "They teach the boys how to paint and repair houses professionally.", D: "They stay at the boys' houses and do the shopping for them." }, correct: "A", explanation: "Bài đọc: \"College students and other men take these boys to basketball games or on fishing trips.\"" },
      { id: "r6", type: "mcq", prompt: "Why do many clubs for children use student volunteers?", options: { A: "Because their age helps them understand the problems of younger children.", B: "Because students have more free time than older people.", C: "Because students are the only ones who know how to play basketball.", D: "Because students are required by their colleges to work in these clubs." }, correct: "A", explanation: "Bài đọc: \"they are young enough to understand the problems of younger boys and girls.\"" },
      { id: "r7", type: "fillblank", prompt: "Find the phrase in the passage that means 'đưa đi câu cá'.", accepted: ["on fishing trips"], correct: "on fishing trips", explanation: "\"take these boys... on fishing trips\" — on fishing trips = đi câu cá." },
      { id: "r8", type: "mcq", prompt: "What kind of places do some youth clubs organize trips to?", options: { A: "Mountains, beaches, and museums.", B: "Only shopping malls.", C: "Only sports stadiums.", D: "Only other countries." }, correct: "A", explanation: "Bài đọc: \"hold short trips to the mountains, the beaches, museums, or other places of interest.\"" },
      { id: "r9", type: "truefalse", prompt: "The passage says every country lacks people who care about others.", correct: "False", explanation: "Sai. Bài đọc mở đầu: \"Each country has many good people who take care of others.\"" }
    ]
  },

  // ---------------------------------------------------------
  // PART 4 — TRANSLATION PRACTICE
  // ---------------------------------------------------------
  translation: [
    { id: "t1", en: "Each country has many good people who take care of others.", suggested: "Mỗi quốc gia đều có nhiều người tốt bụng chăm sóc người khác.", notes: "Mệnh đề quan hệ \"who take care of others\" bổ nghĩa cho \"people\"." },
    { id: "t2", en: "They paint, clean up, or repair their houses, do the shopping.", suggested: "Họ sơn nhà, dọn dẹp, hoặc sửa nhà, đi chợ giúp.", notes: "Liệt kê nhiều động từ song song (paint, clean up, repair, do)." },
    { id: "t3", en: "For boys who don't have fathers, there is an organization called Big Brothers.", suggested: "Đối với những cậu bé không có cha, có một tổ chức tên là Big Brothers.", notes: "\"there is + N\" (có một cái gì)." },
    { id: "t4", en: "College students take these boys to basketball games or on fishing trips.", suggested: "Sinh viên đại học đưa các cậu bé này đi xem bóng rổ hoặc đi câu cá.", notes: "\"take sb to + N\" (đưa ai đến đâu/làm gì)." },
    { id: "t5", en: "They are young enough to understand the problems of younger boys and girls.", suggested: "Họ đủ trẻ để hiểu được những vấn đề của các em nhỏ tuổi hơn.", notes: "\"adj + enough + to V\" (đủ... để làm gì)." }
  ],

  // ---------------------------------------------------------
  // PART 5 — SENTENCE TRANSFORMATION PRACTICE
  // ---------------------------------------------------------
  transformation: [
    {
      id: "tr1", name: "knew how to V ⇄ could V",
      formula: "S + knew how to + V.  →  S + could + V.",
      example: { before: "Paula knew how to cook well when she was eleven.", after: "Paula could cook well when she was eleven." },
      practice: [
        { id: "tr1p1", type: "fillblank", prompt: "He knew how to swim when he was six. → He ______________ (could) swim when he was six.", accepted: ["could"], correct: "could", explanation: "knew how to V → could V." },
        { id: "tr1p2", type: "fillblank", prompt: "Rewrite: 'She knew how to play the piano at the age of five.' → She ______________ (could) play the piano at the age of five.", accepted: ["could"], correct: "could", explanation: "knew how to V → could V." }
      ]
    },
    {
      id: "tr2", name: "V-ing... sounds + adj ⇄ It's + adj + to V",
      formula: "V-ing + sounds + adj + to sb.  →  It's + adj + to + V.",
      example: { before: "Tutoring younger children sounds very exciting to me.", after: "It's very exciting to tutor younger children." },
      practice: [
        { id: "tr2p1", type: "fillblank", prompt: "Joining the club sounds interesting. → It's interesting ______________ (to join) the club.", accepted: ["to join"], correct: "to join", explanation: "V-ing... sounds adj → It's adj to V." },
        { id: "tr2p2", type: "fillblank", prompt: "Rewrite: 'Helping the elderly sounds meaningful.' → It's meaningful ______________ (to help) the elderly.", accepted: ["to help"], correct: "to help", explanation: "V-ing... sounds adj → It's adj to V." }
      ]
    },
    {
      id: "tr3", name: "Active ⇄ Passive (attract → be attracted by)",
      formula: "S + attracted + O + (thời gian).  →  O + was/were + attracted + by + S + (thời gian).",
      example: { before: "Our campaign attracted over 1000 volunteers last year.", after: "Over 1000 volunteers were attracted by our campaign last year." },
      practice: [
        { id: "tr3p1", type: "fillblank", prompt: "The event attracted many students. → Many students ______________ (were attracted) by the event.", accepted: ["were attracted"], correct: "were attracted", explanation: "Active → Passive: O + was/were + attracted + by + S." },
        { id: "tr3p2", type: "fillblank", prompt: "Rewrite: 'The charity concert attracted a large crowd.' → A large crowd ______________ (was attracted) by the charity concert.", accepted: ["was attracted"], correct: "was attracted", explanation: "Active → Passive: O + was/were + attracted + by + S." }
      ]
    },
    {
      id: "tr4", name: "Direct question ⇄ Embedded question (Do you think...?)",
      formula: "How can S + V?  →  Do you think how S can V?",
      example: { before: "How can we help the elderly?", after: "Do you think how we can help the elderly?" },
      practice: [
        { id: "tr4p1", type: "fillblank", prompt: "How can we save more money? → Do you think how ______________ (we) can save more money?", accepted: ["we"], correct: "we", explanation: "Trong câu hỏi lồng, chủ ngữ đứng trước động từ khuyết thiếu." },
        { id: "tr4p2", type: "fillblank", prompt: "Rewrite: 'How can they finish the project on time?' → Do you think how ______________ (they) can finish the project on time?", accepted: ["they"], correct: "they", explanation: "Trong câu hỏi lồng, chủ ngữ đứng trước động từ khuyết thiếu." }
      ]
    }
  ],

  // ---------------------------------------------------------
  // PART 6 — QUICK REVIEW (mini test, all skills)
  // ---------------------------------------------------------
  quickReview: [
    { id: "q1", cat: "Vocabulary", type: "mcq", prompt: "'Rubbish' means:", options: { A: "rác", B: "hoa quả", C: "quần áo", D: "sách vở" }, correct: "A", explanation: "rubbish (n) = rác." },
    { id: "q2", cat: "Vocabulary", type: "mcq", prompt: "'Orphanage' means:", options: { A: "trại trẻ mồ côi", B: "viện dưỡng lão", C: "bệnh viện", D: "trường học" }, correct: "A", explanation: "orphanage (n) = trại trẻ mồ côi." },
    { id: "q3", cat: "Vocabulary", type: "fillblank", prompt: "You should think of ______________ (tham gia vào) the volunteer activities.", accepted: ["taking part in"], correct: "taking part in", explanation: "take part in (phrase) = tham gia vào." },
    { id: "q4", cat: "Grammar", type: "mcq", prompt: "Paula knew how to cook well. → Paula ______ cook well.", options: { A: "could", B: "should", C: "must", D: "will" }, correct: "A", explanation: "knew how to V → could V." },
    { id: "q5", cat: "Grammar", type: "mcq", prompt: "Tutoring children sounds exciting. → It's exciting ______ tutor children.", options: { A: "to", B: "for", C: "of", D: "at" }, correct: "A", explanation: "It's adj to V." },
    { id: "q6", cat: "Grammar", type: "fillblank", prompt: "Our campaign attracted 1000 volunteers. → 1000 volunteers ______________ (were attracted) by our campaign.", accepted: ["were attracted"], correct: "were attracted", explanation: "Active → Passive." },
    { id: "q7", cat: "Grammar", type: "fillblank", prompt: "They are young ______________ (enough) to understand the problems.", accepted: ["enough"], correct: "enough", explanation: "adj + enough + to V." },
    { id: "q8", cat: "Reading", type: "truefalse", prompt: "Volunteers only help the elderly by reading books and never do manual work.", correct: "False", explanation: "Sai theo bài đọc — họ còn sơn nhà, dọn dẹp, sửa nhà." },
    { id: "q9", cat: "Reading", type: "truefalse", prompt: "The \"Big Brothers\" organization is designed to support boys who do not have fathers.", correct: "True", explanation: "Đúng theo bài đọc." },
    { id: "q10", cat: "Reading", type: "mcq", prompt: "Why do many clubs for children use student volunteers?", options: { A: "Because their age helps them understand the problems of younger children.", B: "Because students have more free time.", C: "Because students are the only ones who play basketball.", D: "Because colleges require it." }, correct: "A", explanation: "Bài đọc nêu rõ lý do." },
    { id: "q11", cat: "Writing", type: "fillblank", prompt: "If we volunteer, we can gain ______________ (VALUE) experience and skills.", accepted: ["valuable"], correct: "valuable", explanation: "value (n) → valuable (adj)." },
    { id: "q12", cat: "Writing", type: "fillblank", prompt: "Most charitable activities are even ______________ (ENCOURAGE) by the government.", accepted: ["encouraged"], correct: "encouraged", explanation: "encourage (v) → encouraged (bị động)." },
    { id: "q13", cat: "Writing", type: "fillblank", prompt: "The helping hand is ______________ (EXTEND) to the poor and the homeless.", accepted: ["extended"], correct: "extended", explanation: "extend (v) → extended (bị động)." },
    { id: "q14", cat: "Vocabulary", type: "mcq", prompt: "Which word means 'bếp ăn từ thiện'?", options: { A: "soup kitchen", B: "restaurant", C: "café", D: "canteen" }, correct: "A", explanation: "soup kitchen (phrase) = bếp ăn từ thiện." }
  ]
};
