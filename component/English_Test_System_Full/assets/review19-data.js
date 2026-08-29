const REVIEW = {
  id: "test19",
  testFile: "test19.html",
  grade: "Grade 9 — Global Success",
  unit: "Unit 4: Remembering the past",
  title: "Knowledge Review — Unit 4, Practice Test 1",

  // ---------------------------------------------------------
  // PART 1 — VOCABULARY REVIEW
  // ---------------------------------------------------------
  vocabulary: [
    { word: "castle", pos: "n", ipa: "/ˈkæsl/", meaning: "lâu đài", example: "Look at that ancient castle! It's so huge and majestic.", exampleVi: "Nhìn lâu đài cổ kia kìa! Nó to lớn và uy nghi làm sao." },
    { word: "observe (customs)", pos: "v", ipa: "/əbˈzɜːrv/", meaning: "tuân theo, quan sát (phong tục)", example: "Observing customs helps us feel proud of our culture.", exampleVi: "Tuân theo phong tục giúp chúng ta cảm thấy tự hào về văn hóa của mình." },
    { word: "protect", pos: "v", ipa: "/prəˈtekt/", meaning: "bảo vệ", example: "They stood bravely to protect it against any enemies.", exampleVi: "Họ đã đứng lên dũng cảm để bảo vệ nó trước mọi kẻ thù." },
    { word: "if only", pos: "phr", ipa: "/ɪf ˈoʊnli/", meaning: "giá mà", example: "If only you had gone to that meeting. It was very informative.", exampleVi: "Giá mà bạn đã đến cuộc họp đó. Nó rất bổ ích." },
    { word: "promote", pos: "v", ipa: "/prəˈmoʊt/", meaning: "đề cao, thúc đẩy", example: "Our school programs always promote the importance of history.", exampleVi: "Các chương trình của trường luôn đề cao tầm quan trọng của lịch sử." },
    { word: "bustling", pos: "adj", ipa: "/ˈbʌslɪŋ/", meaning: "nhộn nhịp, sầm uất", example: "London in the 1880s was a bustling city.", exampleVi: "London vào những năm 1880 là một thành phố nhộn nhịp." },
    { word: "drawback", pos: "n", ipa: "/ˈdrɔːbæk/", meaning: "hạn chế, nhược điểm", example: "Gaslights also had drawbacks.", exampleVi: "Đèn khí gas cũng có những hạn chế." },
    { word: "fumes", pos: "n", ipa: "/fjuːmz/", meaning: "khói/khí độc", example: "The fumes from burning gas could be toxic.", exampleVi: "Khói từ việc đốt khí gas có thể độc hại." },
    { word: "illuminate", pos: "v", ipa: "/ɪˈluːmɪneɪt/", meaning: "chiếu sáng", example: "The lamps cast a warm glow, illuminating shops and factories.", exampleVi: "Những chiếc đèn tỏa ánh sáng ấm áp, chiếu sáng các cửa hàng và nhà máy." },
    { word: "bombing", pos: "n", ipa: "/ˈbɒmɪŋ/", meaning: "vụ ném bom", example: "They had to deal with bombings and other problems.", exampleVi: "Họ phải đối mặt với các vụ ném bom và những vấn đề khác." },
    { word: "secret tunnel", pos: "n phr", ipa: "/ˈsiːkrət ˈtʌnl/", meaning: "đường hầm bí mật", example: "Many people helped by working on secret tunnels.", exampleVi: "Nhiều người đã giúp đỡ bằng cách xây dựng các đường hầm bí mật." },
    { word: "sacrifice", pos: "n", ipa: "/ˈsækrɪfaɪs/", meaning: "sự hy sinh", example: "They remembered their sacrifices.", exampleVi: "Họ tưởng nhớ những hy sinh của mình." },
    { word: "liberation", pos: "n", ipa: "/ˌlɪbəˈreɪʃn/", meaning: "sự giải phóng", example: "The victory at Dien Bien Phu led to the liberation of the country.", exampleVi: "Chiến thắng Điện Biên Phủ đã dẫn đến sự giải phóng đất nước." },
    { word: "dedicated", pos: "adj", ipa: "/ˈdedɪkeɪtɪd/", meaning: "tận tụy, chuyên tâm", example: "He is a dedicated student who always ranks top in his class.", exampleVi: "Cậu ấy là một học sinh tận tụy luôn đứng đầu lớp." },
    { word: "heritage", pos: "n", ipa: "/ˈherɪtɪdʒ/", meaning: "di sản", example: "We must work together to preserve our heritage.", exampleVi: "Chúng ta phải cùng nhau bảo tồn di sản của mình." },
    { word: "preserve", pos: "v", ipa: "/prɪˈzɜːrv/", meaning: "bảo tồn, gìn giữ", example: "Pollution is a serious threat to our architectural heritage.", exampleVi: "Ô nhiễm là mối đe dọa nghiêm trọng với di sản kiến trúc của chúng ta." },
    { word: "World Heritage Site", pos: "n phr", ipa: "/wɜːrld ˈherɪtɪdʒ saɪt/", meaning: "Di sản Thế giới", example: "Ha Long Bay was recognized as a World Heritage Site by UNESCO.", exampleVi: "Vịnh Hạ Long được UNESCO công nhận là Di sản Thế giới." },
    { word: "majestic", pos: "adj", ipa: "/məˈdʒestɪk/", meaning: "uy nghi, tráng lệ", example: "Look at that ancient castle! It's so huge and majestic.", exampleVi: "Nhìn lâu đài cổ kia kìa! Nó to lớn và uy nghi làm sao." }
  ],

  vocabPractice: {
    mcq: [
      { id: "vp1", prompt: "Choose the word that means 'lâu đài':", options: { A: "castle", B: "heritage", C: "tunnel", D: "monument" }, correct: "A", explanation: "<b>castle</b> (n) = lâu đài." },
      { id: "vp2", prompt: "Choose the word that means 'sự giải phóng':", options: { A: "liberation", B: "preservation", C: "sacrifice", D: "bombing" }, correct: "A", explanation: "<b>liberation</b> (n) = sự giải phóng." },
      { id: "vp3", prompt: "\"Look at that ancient castle! It's so huge and ______.\"", options: { A: "boring", B: "majestic", C: "ordinary", D: "tiny" }, correct: "B", explanation: "\"huge and <b>majestic</b>\" (to lớn và uy nghi) phù hợp với hình ảnh lâu đài cổ." },
      { id: "vp4", prompt: "Choose the word that means 'bảo tồn':", options: { A: "preserve", B: "destroy", C: "ignore", D: "attack" }, correct: "A", explanation: "<b>preserve</b> (v) = bảo tồn, gìn giữ." },
      { id: "vp5", prompt: "\"The government programs always ______ the importance of history.\"", options: { A: "discover", B: "promote", C: "reduce", D: "avoid" }, correct: "B", explanation: "\"<b>promote</b> the importance of history\" (đề cao tầm quan trọng của lịch sử)." },
      { id: "vp6", prompt: "Choose the word that means 'khói/khí độc':", options: { A: "fumes", B: "fuel", C: "liquid", D: "vapor" }, correct: "A", explanation: "<b>fumes</b> (n) = khói/khí độc." }
    ],
    fillblank: [
      { id: "vf1", prompt: "They stood bravely to ______________ (bảo vệ) it against any enemies.", accepted: ["protect"], correct: "protect", explanation: "<b>protect</b> (v) = bảo vệ." },
      { id: "vf2", prompt: "Many people helped by working on ______________ (đường hầm bí mật).", accepted: ["secret tunnels"], correct: "secret tunnels", explanation: "<b>secret tunnel</b> (n phr) = đường hầm bí mật." },
      { id: "vf3", prompt: "They remembered their ______________ (sự hy sinh) and were happy that their country was finally free.", accepted: ["sacrifices"], correct: "sacrifices", explanation: "<b>sacrifice</b> (n) = sự hy sinh." },
      { id: "vf4", prompt: "Ha Long Bay was recognized as a ______________ (Di sản Thế giới) by UNESCO.", accepted: ["world heritage site"], correct: "World Heritage Site", explanation: "<b>World Heritage Site</b> (n phr) = Di sản Thế giới." },
      { id: "vf5", prompt: "London in the 1880s was a ______________ (nhộn nhịp) city.", accepted: ["bustling"], correct: "bustling", explanation: "<b>bustling</b> (adj) = nhộn nhịp, sầm uất." },
      { id: "vf6", prompt: "______________ (Giá mà) you had gone to that meeting. It was very informative.", accepted: ["if only"], correct: "If only", explanation: "<b>if only</b> (phr) = giá mà." }
    ],
    matching: {
      left: ["heritage", "liberation", "preserve", "dedicated", "majestic", "fumes"],
      right: ["di sản", "sự giải phóng", "bảo tồn", "tận tụy", "uy nghi, tráng lệ", "khói/khí độc"],
      correctMap: [0, 1, 2, 3, 4, 5]
    },
    chooseWord: [
      { id: "cw1", prompt: "\"The Eiffel Tower is a famous ______ monument in Paris.\" (HISTORY)", options: { A: "history", B: "historic", C: "historical", D: "historically" }, correct: "C", explanation: "Cần tính từ trước danh từ \"monument\" → history (n) → <b>historical</b> (adj)." },
      { id: "cw2", prompt: "\"He is a ______ student who always ranks top in his class.\" (DEDICATE)", options: { A: "dedicate", B: "dedicated", C: "dedication", D: "dedicating" }, correct: "B", explanation: "Cần tính từ trước danh từ \"student\" → dedicate (v) → <b>dedicated</b> (adj)." },
      { id: "cw3", prompt: "\"Many people were ______ by the beautiful scenery of the festival.\" (IMPRESS)", options: { A: "impress", B: "impressive", C: "impressed", D: "impression" }, correct: "C", explanation: "Cần tính từ sau \"were\" (bị động) → impress (v) → <b>impressed</b> (adj)." }
    ],
    wordMeaning: [
      { id: "wm1", prompt: "What does 'heritage' mean?", options: { A: "di sản", B: "sự hy sinh", C: "lâu đài", D: "đường hầm" }, correct: "A", explanation: "heritage (n) = di sản." },
      { id: "wm2", prompt: "What does 'preserve' mean?", options: { A: "phá hủy", B: "bảo tồn", C: "phớt lờ", D: "tấn công" }, correct: "B", explanation: "preserve (v) = bảo tồn, gìn giữ." },
      { id: "wm3", prompt: "What does 'bustling' mean?", options: { A: "yên tĩnh", B: "nhộn nhịp", C: "cổ kính", D: "hoang vắng" }, correct: "B", explanation: "bustling (adj) = nhộn nhịp, sầm uất." }
    ],
    wordForm: [
      { id: "wf1", prompt: "The Eiffel Tower is a famous (HISTORY) ______________ monument in Paris.", accepted: ["historical"], correct: "historical", explanation: "history (n) → historical (adj)." },
      { id: "wf2", prompt: "The victory at Dien Bien Phu led to the (LIBERATE) ______________ of the country.", accepted: ["liberation"], correct: "liberation", explanation: "liberate (v) → liberation (n)." },
      { id: "wf3", prompt: "The museum offers many (EDUCATE) ______________ programs for young children.", accepted: ["educational"], correct: "educational", explanation: "educate (v) → educational (adj)." }
    ]
  },

  // ---------------------------------------------------------
  // PART 2 — GRAMMAR REVIEW & PRACTICE
  // ---------------------------------------------------------
  grammar: [
    {
      id: "g1", name: "Hai hành động liên tiếp: and then ⇄ When + quá khứ đơn, quá khứ đơn",
      usage: "Hai hành động xảy ra liên tiếp nối bằng \"and then\" có thể viết lại bằng mệnh đề thời gian \"When\", đặt hành động xảy ra trước vào mệnh đề \"When\".",
      formulas: [
        "S + V1(quá khứ) + and then + S + V2(quá khứ).  →  When + S + V1(quá khứ), S + V2(quá khứ).",
        "I woke up and then I saw that it was snowing. → When I woke up, I saw that it was snowing."
      ],
      signals: ["and then", "When + quá khứ đơn, quá khứ đơn"],
      examples: [
        { en: "I woke up and then I saw that it was snowing.", vi: "Tôi thức dậy và sau đó thấy trời đang có tuyết rơi." },
        { en: "When I woke up, I saw that it was snowing.", vi: "Khi tôi thức dậy, tôi thấy trời đang có tuyết rơi." }
      ],
      mistakes: [
        { wrong: "When I woke up, I see that it was snowing.", right: "When I woke up, I saw that it was snowing. (cần quá khứ đơn ở cả hai mệnh đề)" }
      ],
      practice: {
        level1: [
          { id: "g1l1a", type: "fillblank", prompt: "She finished her homework and then she watched TV. → When she ______________ (finished) her homework, she watched TV.", accepted: ["finished"], correct: "finished", explanation: "and then → When + quá khứ đơn, quá khứ đơn." }
        ],
        level2: [
          { id: "g1l2a", type: "fillblank", prompt: "Rewrite: 'He arrived home and then he called his mother.' → When he ______________ (arrived) home, he called his mother.", accepted: ["arrived"], correct: "arrived", explanation: "and then → When + quá khứ đơn, quá khứ đơn." }
        ],
        level3: [
          { id: "g1l3a", type: "fillblank", prompt: "Rewrite so it keeps the same meaning: 'They reached the village and then they saw the ancient castle.' → ______________ (When they reached the village, they saw the ancient castle).", accepted: ["when they reached the village, they saw the ancient castle"], correct: "When they reached the village, they saw the ancient castle", explanation: "and then → When + quá khứ đơn, quá khứ đơn." }
        ]
      }
    },
    {
      id: "g2", name: "Chủ động ⇄ Bị động (kèm mệnh đề lý do because)",
      usage: "Khi chuyển câu chủ động có mệnh đề lý do \"because\" sang bị động, tân ngữ của mệnh đề chính trở thành chủ ngữ, động từ chuyển thành \"be + V3\", giữ nguyên mệnh đề \"because\".",
      formulas: [
        "Because + S1 + V + adj, S2 + V(chủ động) + O.  →  O + be (not) + V3 + because + S1 + V + adj.",
        "Because the house was damaged, nobody lived in it. → The house was not lived in because it was damaged."
      ],
      signals: ["Because ..., nobody + V", "S + was/were not + V3 + because ..."],
      examples: [
        { en: "Because the house was damaged, nobody lived in it.", vi: "Vì ngôi nhà bị hư hỏng, không ai sống trong đó." },
        { en: "The house was not lived in because it was damaged.", vi: "Ngôi nhà không có người ở vì nó bị hư hỏng." }
      ],
      mistakes: [
        { wrong: "The house was not live in because it was damaged.", right: "The house was not lived in because it was damaged. (cần V3 sau \"was not\")" }
      ],
      practice: {
        level1: [
          { id: "g2l1a", type: "fillblank", prompt: "Because the bridge was old, nobody used it. → The bridge ______________ (was not used) because it was old.", accepted: ["was not used"], correct: "was not used", explanation: "Chủ động → bị động, giữ mệnh đề because." }
        ],
        level2: [
          { id: "g2l2a", type: "fillblank", prompt: "Rewrite: 'Because the road was blocked, no one drove on it.' → The road ______________ (was not driven on) because it was blocked.", accepted: ["was not driven on"], correct: "was not driven on", explanation: "Chủ động → bị động, giữ mệnh đề because." }
        ],
        level3: [
          { id: "g2l3a", type: "fillblank", prompt: "Rewrite so it keeps the same meaning: 'Because the museum was closed, nobody visited it.' → ______________ (The museum was not visited because it was closed).", accepted: ["the museum was not visited because it was closed"], correct: "The museum was not visited because it was closed", explanation: "Chủ động → bị động, giữ mệnh đề because." }
        ]
      }
    },
    {
      id: "g3", name: "have + N ⇄ consist of + N",
      usage: "\"have + N\" (có gì) có thể thay bằng \"consist of + N\" (bao gồm/gồm có) khi muốn nhấn mạnh các thành phần cấu tạo nên một sự vật.",
      formulas: [
        "S + had/have + N.  →  S + consisted/consists of + N.",
        "Our school schedule had only morning lessons. → Our school schedule consisted of only morning lessons."
      ],
      signals: ["have/had + N", "consist(ed) of + N"],
      examples: [
        { en: "In the old days, our school schedule had only morning lessons.", vi: "Ngày xưa, thời khóa biểu của trường chỉ có buổi sáng." },
        { en: "In the old days, our school schedule consisted of only morning lessons.", vi: "Ngày xưa, thời khóa biểu của trường chỉ bao gồm các tiết buổi sáng." }
      ],
      mistakes: [
        { wrong: "The schedule consisted only morning lessons.", right: "The schedule consisted of only morning lessons. (cần giới từ \"of\" sau \"consist\")" }
      ],
      practice: {
        level1: [
          { id: "g3l1a", type: "fillblank", prompt: "The museum has three floors of exhibits. → The museum ______________ (consists of) three floors of exhibits.", accepted: ["consists of"], correct: "consists of", explanation: "have → consist of." }
        ],
        level2: [
          { id: "g3l2a", type: "fillblank", prompt: "Rewrite: 'The old village had only a few small houses.' → The old village ______________ (consisted of) only a few small houses.", accepted: ["consisted of"], correct: "consisted of", explanation: "had → consisted of." }
        ],
        level3: [
          { id: "g3l3a", type: "fillblank", prompt: "Rewrite so it keeps the same meaning: 'The ceremony had three traditional parts.' → ______________ (The ceremony consisted of three traditional parts).", accepted: ["the ceremony consisted of three traditional parts"], correct: "The ceremony consisted of three traditional parts", explanation: "had → consisted of." }
        ]
      }
    },
    {
      id: "g4", name: "regret not V-ing (quá khứ) ⇄ wish + had + V3",
      usage: "\"regret + not V-ing (quá khứ)\" (hối tiếc vì đã không làm gì) có thể chuyển thành \"wish + S + had + V3\" (điều ước tiếc nuối về quá khứ) — cùng diễn tả sự hối tiếc về một việc đã không xảy ra.",
      formulas: [
        "S + regret(s) + not V-ing (quá khứ).  →  S + wish(es) + S + had + V3.",
        "I regret not taking more photos of the beautiful scenery. → I wish I had taken more photos of the beautiful scenery."
      ],
      signals: ["regret not V-ing", "wish + had + V3"],
      examples: [
        { en: "I regret not taking more photos of the beautiful scenery.", vi: "Tôi hối tiếc vì đã không chụp thêm ảnh phong cảnh đẹp." },
        { en: "I wish I had taken more photos of the beautiful scenery.", vi: "Giá mà tôi đã chụp thêm ảnh phong cảnh đẹp." }
      ],
      mistakes: [
        { wrong: "I wish I have taken more photos.", right: "I wish I had taken more photos. (cần \"had + V3\", không dùng \"have\")" }
      ],
      practice: {
        level1: [
          { id: "g4l1a", type: "fillblank", prompt: "She regrets not visiting the museum. → She wishes she ______________ (had visited) the museum.", accepted: ["had visited"], correct: "had visited", explanation: "regret not V-ing → wish + had + V3." }
        ],
        level2: [
          { id: "g4l2a", type: "fillblank", prompt: "Rewrite: 'They regret not learning about their heritage earlier.' → They wish they ______________ (had learned) about their heritage earlier.", accepted: ["had learned"], correct: "had learned", explanation: "regret not V-ing → wish + had + V3." }
        ],
        level3: [
          { id: "g4l3a", type: "fillblank", prompt: "Rewrite so it keeps the same meaning: 'He regrets not preserving the old documents.' → ______________ (He wishes he had preserved the old documents).", accepted: ["he wishes he had preserved the old documents"], correct: "He wishes he had preserved the old documents", explanation: "regret not V-ing → wish + had + V3." }
        ]
      }
    },
    {
      id: "g5", name: "If only + had + V3 (điều ước tiếc nuối trong quá khứ)",
      usage: "\"If only + S + had + V3\" diễn tả sự tiếc nuối mạnh mẽ về một điều đã xảy ra hoặc không xảy ra trong quá khứ, mang sắc thái cảm xúc mạnh hơn \"wish\".",
      formulas: [
        "If only + S + had + V3 (+ khi đó...).",
        "If only you had gone to that meeting. It was very informative."
      ],
      signals: ["If only + had + V3"],
      examples: [
        { en: "If only you had gone to that meeting. It was very informative.", vi: "Giá mà bạn đã đến cuộc họp đó. Nó rất bổ ích." },
        { en: "If only I had studied harder for the history test.", vi: "Giá mà tôi đã học chăm chỉ hơn cho bài kiểm tra lịch sử." }
      ],
      mistakes: [
        { wrong: "If only you went to that meeting.", right: "If only you had gone to that meeting. (cần \"had + V3\" cho điều ước về quá khứ)" }
      ],
      practice: {
        level1: [
          { id: "g5l1a", type: "fillblank", prompt: "I didn't visit the old castle. → If only I ______________ (had visited) the old castle.", accepted: ["had visited"], correct: "had visited", explanation: "If only + had + V3 (điều ước về quá khứ)." }
        ],
        level2: [
          { id: "g5l2a", type: "fillblank", prompt: "Rewrite: 'She didn't preserve her grandmother's letters.' → If only she ______________ (had preserved) her grandmother's letters.", accepted: ["had preserved"], correct: "had preserved", explanation: "If only + had + V3." }
        ],
        level3: [
          { id: "g5l3a", type: "fillblank", prompt: "Rewrite so it keeps the same meaning: 'They didn't learn about their local traditions.' → ______________ (If only they had learned about their local traditions).", accepted: ["if only they had learned about their local traditions"], correct: "If only they had learned about their local traditions", explanation: "If only + had + V3." }
        ]
      }
    }
  ],

  // ---------------------------------------------------------
  // PART 3 — READING PRACTICE
  // ---------------------------------------------------------
  reading: {
    passage: "During the American War in Vietnam, which lasted from the early 1960s until 1975, the country faced many problems. The people were going through <mark data-w=\"hard times\">hard times</mark> as the war was getting worse. They had to deal with bombings and other problems caused by the war every day. In the 1960s, while American soldiers were arriving in Vietnam, Vietnamese soldiers were fighting hard to defend their country. They were facing tough conditions, like not having enough supplies and being attacked often. Many people helped by working on <mark data-w=\"secret tunnels\">secret tunnels</mark> and supporting the soldiers. At the same time, the Vietnamese government was making plans to help win the war. The leaders hoped their efforts would lead to victory. They wished they had more help from other countries and hoped that others would understand their struggle. By 1975, when the war was ending, the Vietnamese people looked back with both <mark data-w=\"pride and sadness\">pride and sadness</mark>. They remembered their <mark data-w=\"sacrifices\">sacrifices</mark> and were happy that their country was finally free. The victory gave them <mark data-w=\"hope\">hope</mark> for a better future.",
    vocabInContext: {
      "hard times": "thời kỳ khó khăn",
      "secret tunnels": "đường hầm bí mật",
      "pride and sadness": "niềm tự hào và nỗi buồn",
      sacrifices: "những hy sinh",
      hope: "hy vọng"
    },
    translation: "<b>VIỆT NAM TRONG CHIẾN TRANH</b><br><br>Trong Chiến tranh Mỹ tại Việt Nam, kéo dài từ đầu những năm 1960 đến năm 1975, đất nước đã đối mặt với nhiều khó khăn. Người dân đã trải qua những thời kỳ khó khăn khi cuộc chiến ngày càng trở nên tồi tệ hơn. Họ phải đối mặt với các vụ ném bom và những vấn đề khác do chiến tranh gây ra mỗi ngày. Trong những năm 1960, khi lính Mỹ đang đến Việt Nam, các chiến sĩ Việt Nam đã chiến đấu ngoan cường để bảo vệ đất nước. Họ phải đối mặt với điều kiện khắc nghiệt, như không có đủ vật tư và thường xuyên bị tấn công. Nhiều người đã giúp đỡ bằng cách xây dựng đường hầm bí mật và hỗ trợ các chiến sĩ. Đồng thời, chính phủ Việt Nam đã lập kế hoạch để giúp giành chiến thắng trong cuộc chiến. Các nhà lãnh đạo hy vọng những nỗ lực của họ sẽ dẫn đến chiến thắng. Họ ước rằng họ có thêm sự giúp đỡ từ các nước khác và hy vọng rằng những nước khác sẽ hiểu được cuộc đấu tranh của họ. Đến năm 1975, khi cuộc chiến sắp kết thúc, người Việt Nam nhìn lại với cả niềm tự hào và nỗi buồn. Họ tưởng nhớ những hy sinh của mình và vui mừng vì đất nước cuối cùng đã được tự do. Chiến thắng đã mang lại cho họ hy vọng về một tương lai tốt đẹp hơn.",
    practice: [
      { id: "r1", type: "truefalse", prompt: "Bombings and other war-related issues happened daily during the conflict.", correct: "True", explanation: "Bài đọc: 'They had to deal with bombings and other problems ... every day.'" },
      { id: "r2", type: "truefalse", prompt: "Vietnamese soldiers always had more than enough supplies to fight the enemy.", correct: "False", explanation: "Sai. Bài đọc: 'not having enough supplies.'" },
      { id: "r3", type: "truefalse", prompt: "Secret tunnels were worked on by many people to support the military efforts.", correct: "True", explanation: "Bài đọc: 'Many people helped by working on secret tunnels and supporting the soldiers.'" },
      { id: "r4", type: "truefalse", prompt: "Foreign countries gave the Vietnamese leaders all the help they wished for.", correct: "False", explanation: "Sai. Bài đọc: 'They wished they had more help from other countries.'" },
      { id: "r5", type: "mcq", prompt: "What is the main idea of the passage?", options: { A: "The tactical importance of secret tunnels in the 1960s.", B: "The historical timeline of international support for Vietnam.", C: "The struggles, efforts, and feelings of Vietnamese people during the war.", D: "The detailed military plans made by the Vietnamese government." }, correct: "C", explanation: "Bài đọc kể về những khó khăn, nỗ lực và cảm xúc của người Việt Nam trong chiến tranh." },
      { id: "r6", type: "mcq", prompt: "Which of the following is NOT true according to the passage?", options: { A: "The war caused many daily problems and difficult times for the people.", B: "Vietnamese people felt completely happy without any sadness in 1975.", C: "The leaders wished for more international understanding of their struggle.", D: "The end of the war in 1975 brought hope for a better future to the people." }, correct: "B", explanation: "Bài đọc nói người dân nhìn lại 'with both pride and sadness', không phải hoàn toàn vui vẻ." },
      { id: "r7", type: "fillblank", prompt: "Find the word in the passage that means 'những hy sinh' (n, số nhiều).", accepted: ["sacrifices"], correct: "sacrifices", explanation: "'They remembered their sacrifices.' — sacrifices (n) = những hy sinh." },
      { id: "r8", type: "mcq", prompt: "According to the passage, how did many people support the soldiers?", options: { A: "By working on secret tunnels.", B: "By moving to another country.", C: "By refusing to fight.", D: "By writing to foreign governments." }, correct: "A", explanation: "Bài đọc: 'Many people helped by working on secret tunnels and supporting the soldiers.'" },
      { id: "r9", type: "truefalse", prompt: "According to the passage, the Vietnamese people felt only sadness when the war ended in 1975.", correct: "False", explanation: "Sai. Bài đọc: họ nhìn lại 'with both pride and sadness' — vừa tự hào vừa buồn, không chỉ có buồn." }
    ]
  },

  // ---------------------------------------------------------
  // PART 4 — TRANSLATION PRACTICE
  // ---------------------------------------------------------
  translation: [
    { id: "t1", en: "During the American War in Vietnam, which lasted from the early 1960s until 1975, the country faced many problems.", suggested: "Trong Chiến tranh Mỹ tại Việt Nam, kéo dài từ đầu những năm 1960 đến năm 1975, đất nước đã đối mặt với nhiều khó khăn.", notes: "Mệnh đề quan hệ không xác định \"which\" bổ sung thông tin thêm về cuộc chiến." },
    { id: "t2", en: "Vietnamese soldiers were fighting hard to defend their country.", suggested: "Các chiến sĩ Việt Nam đã chiến đấu ngoan cường để bảo vệ đất nước.", notes: "\"fight to V\" (chiến đấu để làm gì) diễn tả mục đích." },
    { id: "t3", en: "Many people helped by working on secret tunnels and supporting the soldiers.", suggested: "Nhiều người đã giúp đỡ bằng cách xây dựng đường hầm bí mật và hỗ trợ các chiến sĩ.", notes: "\"by + V-ing\" nêu phương tiện/cách thức." },
    { id: "t4", en: "They wished they had more help from other countries.", suggested: "Họ ước rằng họ có thêm sự giúp đỡ từ các nước khác.", notes: "\"wish + S + had + N\" diễn tả điều ước không có thật ở hiện tại về việc có thêm điều gì đó." },
    { id: "t5", en: "By 1975, when the war was ending, the Vietnamese people looked back with both pride and sadness.", suggested: "Đến năm 1975, khi cuộc chiến sắp kết thúc, người Việt Nam nhìn lại với cả niềm tự hào và nỗi buồn.", notes: "\"look back with + N\" (nhìn lại với cảm xúc gì)." }
  ],

  // ---------------------------------------------------------
  // PART 5 — SENTENCE TRANSFORMATION PRACTICE
  // ---------------------------------------------------------
  transformation: [
    {
      id: "tr1", name: "and then ⇄ When + quá khứ đơn, quá khứ đơn",
      formula: "S + V1(quá khứ) + and then + S + V2(quá khứ)  →  When + S + V1(quá khứ), S + V2(quá khứ)",
      example: { before: "I woke up and then I saw that it was snowing.", after: "When I woke up, I saw that it was snowing." },
      practice: [
        { id: "tr1p1", type: "fillblank", prompt: "He got home and then he cooked dinner. → When he ______________ (got) home, he cooked dinner.", accepted: ["got"], correct: "got", explanation: "and then → When + quá khứ đơn, quá khứ đơn." },
        { id: "tr1p2", type: "fillblank", prompt: "Rewrite: 'She opened the box and then she smiled.' → When she ______________ (opened) the box, she smiled.", accepted: ["opened"], correct: "opened", explanation: "and then → When + quá khứ đơn, quá khứ đơn." }
      ]
    },
    {
      id: "tr2", name: "Chủ động ⇄ Bị động (kèm mệnh đề because)",
      formula: "Because + S1 + V + adj, S2 + V(chủ động) + O  →  O + be (not) + V3 + because + S1 + V + adj",
      example: { before: "Because the house was damaged, nobody lived in it.", after: "The house was not lived in because it was damaged." },
      practice: [
        { id: "tr2p1", type: "fillblank", prompt: "Because the castle was dangerous, nobody visited it. → The castle ______________ (was not visited) because it was dangerous.", accepted: ["was not visited"], correct: "was not visited", explanation: "Chủ động → bị động, giữ mệnh đề because." },
        { id: "tr2p2", type: "fillblank", prompt: "Rewrite: 'Because the tunnel was unsafe, nobody entered it.' → The tunnel ______________ (was not entered) because it was unsafe.", accepted: ["was not entered"], correct: "was not entered", explanation: "Chủ động → bị động, giữ mệnh đề because." }
      ]
    },
    {
      id: "tr3", name: "have + N ⇄ consist of + N",
      formula: "S + had/have + N  →  S + consisted/consists of + N",
      example: { before: "Our school schedule had only morning lessons.", after: "Our school schedule consisted of only morning lessons." },
      practice: [
        { id: "tr3p1", type: "fillblank", prompt: "The exhibition had five rooms of artifacts. → The exhibition ______________ (consisted of) five rooms of artifacts.", accepted: ["consisted of"], correct: "consisted of", explanation: "had → consisted of." },
        { id: "tr3p2", type: "fillblank", prompt: "Rewrite: 'The festival has three main events.' → The festival ______________ (consists of) three main events.", accepted: ["consists of"], correct: "consists of", explanation: "has → consists of." }
      ]
    },
    {
      id: "tr4", name: "regret not V-ing (quá khứ) ⇄ wish + had + V3",
      formula: "S + regret(s) + not V-ing (quá khứ)  →  S + wish(es) + S + had + V3",
      example: { before: "I regret not taking more photos of the beautiful scenery.", after: "I wish I had taken more photos of the beautiful scenery." },
      practice: [
        { id: "tr4p1", type: "fillblank", prompt: "He regrets not protecting the old monument. → He wishes he ______________ (had protected) the old monument.", accepted: ["had protected"], correct: "had protected", explanation: "regret not V-ing → wish + had + V3." },
        { id: "tr4p2", type: "fillblank", prompt: "Rewrite: 'They regret not observing the local customs.' → They wish they ______________ (had observed) the local customs.", accepted: ["had observed"], correct: "had observed", explanation: "regret not V-ing → wish + had + V3." }
      ]
    }
  ],

  // ---------------------------------------------------------
  // PART 6 — QUICK REVIEW (mini test, all skills)
  // ---------------------------------------------------------
  quickReview: [
    { id: "q1", cat: "Vocabulary", type: "mcq", prompt: "'Heritage' means:", options: { A: "di sản", B: "lâu đài", C: "sự hy sinh", D: "nhộn nhịp" }, correct: "A", explanation: "heritage (n) = di sản." },
    { id: "q2", cat: "Vocabulary", type: "mcq", prompt: "'Preserve' means:", options: { A: "phá hủy", B: "bảo tồn", C: "bỏ qua", D: "tấn công" }, correct: "B", explanation: "preserve (v) = bảo tồn, gìn giữ." },
    { id: "q3", cat: "Vocabulary", type: "fillblank", prompt: "They stood bravely to ______________ (protect) it against any enemies.", accepted: ["protect"], correct: "protect", explanation: "protect (v) = bảo vệ." },
    { id: "q4", cat: "Grammar", type: "mcq", prompt: "I woke up and then I saw it was snowing. → When I woke up, I ______ that it was snowing.", options: { A: "see", B: "saw", C: "seeing", D: "had seen" }, correct: "B", explanation: "When + quá khứ đơn, quá khứ đơn." },
    { id: "q5", cat: "Grammar", type: "mcq", prompt: "Because the house was damaged, nobody lived in it. → The house ______ lived in because it was damaged.", options: { A: "was not", B: "did not", C: "was", D: "were not" }, correct: "A", explanation: "Chủ động → bị động: was/were (not) + V3." },
    { id: "q6", cat: "Grammar", type: "fillblank", prompt: "Our school schedule had only morning lessons. → Our school schedule ______________ (consisted of) only morning lessons.", accepted: ["consisted of"], correct: "consisted of", explanation: "have/had + N → consist(ed) of + N." },
    { id: "q7", cat: "Grammar", type: "fillblank", prompt: "I regret not taking more photos. → I wish I ______________ (had taken) more photos.", accepted: ["had taken"], correct: "had taken", explanation: "regret not V-ing → wish + had + V3." },
    { id: "q8", cat: "Reading", type: "truefalse", prompt: "Secret tunnels were worked on by many people to support the military efforts.", correct: "True", explanation: "Đúng theo bài đọc." },
    { id: "q9", cat: "Reading", type: "truefalse", prompt: "Foreign countries gave the Vietnamese leaders all the help they wished for.", correct: "False", explanation: "Sai. Họ mong muốn có thêm giúp đỡ nhưng chưa được đáp ứng đầy đủ." },
    { id: "q10", cat: "Reading", type: "mcq", prompt: "What is the main idea of the Vietnam War passage?", options: { A: "The struggles, efforts, and feelings of Vietnamese people during the war.", B: "The list of weapons used in the war.", C: "The biography of Vietnamese generals.", D: "The economy of Vietnam after 1975." }, correct: "A", explanation: "Bài đọc kể về khó khăn, nỗ lực và cảm xúc của người Việt Nam." },
    { id: "q11", cat: "Writing", type: "fillblank", prompt: "The Eiffel Tower is a famous ______________ (history) monument in Paris.", accepted: ["historical"], correct: "historical", explanation: "history (n) → historical (adj)." },
    { id: "q12", cat: "Writing", type: "fillblank", prompt: "The victory at Dien Bien Phu led to the ______________ (liberate) of the country.", accepted: ["liberation"], correct: "liberation", explanation: "liberate (v) → liberation (n)." },
    { id: "q13", cat: "Writing", type: "fillblank", prompt: "He is a ______________ (dedicate) student who always ranks top in his class.", accepted: ["dedicated"], correct: "dedicated", explanation: "dedicate (v) → dedicated (adj)." },
    { id: "q14", cat: "Vocabulary", type: "mcq", prompt: "Which word means 'Di sản Thế giới'?", options: { A: "World Heritage Site", B: "secret tunnel", C: "ancient castle", D: "local custom" }, correct: "A", explanation: "World Heritage Site (n phr) = Di sản Thế giới." }
  ]
};
