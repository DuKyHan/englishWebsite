const REVIEW = {
  id: "test26",
  testFile: "test26.html",
  grade: "Grade 6 — Global Success",
  unit: "Unit 1: My new school",
  title: "Knowledge Review — Unit 1, Practice Test 2",

  // ---------------------------------------------------------
  // PART 1 — VOCABULARY REVIEW
  // ---------------------------------------------------------
  vocabulary: [
    { word: "creative", pos: "adj", ipa: "/kriˈeɪtɪv/", meaning: "sáng tạo", example: "She always has a lot of new ideas. She's a creative person.", exampleVi: "Cô ấy luôn có nhiều ý tưởng mới. Cô ấy là một người sáng tạo." },
    { word: "sign up for", pos: "phr v", ipa: "/saɪn ʌp fɔːr/", meaning: "đăng ký (tham gia)", example: "She's signed up for evening classes at the community college.", exampleVi: "Cô ấy đã đăng ký các lớp học buổi tối ở trường cao đẳng cộng đồng." },
    { word: "uniform", pos: "n", ipa: "/ˈjuːnɪfɔːrm/", meaning: "đồng phục", example: "They will be punished if they don't wear uniforms at school.", exampleVi: "Họ sẽ bị phạt nếu không mặc đồng phục ở trường." },
    { word: "knock", pos: "v", ipa: "/nɒk/", meaning: "gõ cửa", example: "Please knock before entering next time.", exampleVi: "Lần sau hãy gõ cửa trước khi vào." },
    { word: "helpful", pos: "adj", ipa: "/ˈhelpfl/", meaning: "hữu ích, tốt bụng, hay giúp đỡ", example: "The teachers in my school are nice and very helpful.", exampleVi: "Các thầy cô trong trường tôi rất tốt bụng và hay giúp đỡ." },
    { word: "spend", pos: "v", ipa: "/spend/", meaning: "dành (thời gian, tiền bạc)", example: "I spend three hours to study Vietnamese in the afternoon.", exampleVi: "Tôi dành ba giờ để học Tiếng Việt vào buổi chiều." },
    { word: "outing", pos: "n", ipa: "/ˈaʊtɪŋ/", meaning: "chuyến đi chơi, dã ngoại", example: "We're going to have an outing to the National Park.", exampleVi: "Chúng tôi sắp có một chuyến đi chơi đến Vườn Quốc gia." },
    { word: "rehearse", pos: "v", ipa: "/rɪˈhɜːrs/", meaning: "tập dượt (một vở kịch)", example: "They join the school theatre group and usually rehearse plays.", exampleVi: "Họ tham gia nhóm kịch của trường và thường tập dượt các vở kịch." },
    { word: "theatre group", pos: "n phr", ipa: "/ˈθɪətər ɡruːp/", meaning: "nhóm/câu lạc bộ kịch", example: "They join the school theatre group and usually rehearse plays.", exampleVi: "Họ tham gia nhóm kịch của trường và thường tập dượt các vở kịch." },
    { word: "stamp collectors club", pos: "n phr", ipa: "/stæmp kəˈlektərz klʌb/", meaning: "câu lạc bộ sưu tầm tem", example: "Some are members of the stamp collectors club.", exampleVi: "Một số bạn là thành viên của câu lạc bộ sưu tầm tem." },
    { word: "take a rest", pos: "v phr", ipa: "/teɪk ə rest/", meaning: "nghỉ ngơi", example: "They can take a rest and follow their interests.", exampleVi: "Họ có thể nghỉ ngơi và theo đuổi sở thích của mình." },
    { word: "follow one's interests", pos: "v phr", ipa: "/ˈfɒloʊ wʌnz ˈɪntrəsts/", meaning: "theo đuổi sở thích của bản thân", example: "Most of them enjoy their activities because they can follow their interests.", exampleVi: "Hầu hết các bạn thích các hoạt động của mình vì có thể theo đuổi sở thích." },
    { word: "peaceful", pos: "adj", ipa: "/ˈpiːsfl/", meaning: "yên bình", example: "The school is located in a peaceful area.", exampleVi: "Ngôi trường nằm ở một khu vực yên bình." },
    { word: "building", pos: "n", ipa: "/ˈbɪldɪŋ/", meaning: "tòa nhà", example: "There are three buildings and a swimming pool in my school.", exampleVi: "Trường tôi có ba tòa nhà và một bể bơi." },
    { word: "international school", pos: "n phr", ipa: "/ˌɪntərˈnæʃnəl skuːl/", meaning: "trường quốc tế", example: "I like to study at an international school.", exampleVi: "Tôi thích học ở một trường quốc tế." },
    { word: "boarding school", pos: "n phr", ipa: "/ˈbɔːrdɪŋ skuːl/", meaning: "trường nội trú", example: "Some children start to attend boarding school at a very young age.", exampleVi: "Một số trẻ bắt đầu học nội trú từ khi còn rất nhỏ." },
    { word: "homesick", pos: "adj", ipa: "/ˈhoʊmsɪk/", meaning: "nhớ nhà", example: "Many students feel homesick when they first start living at boarding school.", exampleVi: "Nhiều học sinh cảm thấy nhớ nhà khi mới bắt đầu sống ở trường nội trú." },
    { word: "independent", pos: "adj", ipa: "/ˌɪndɪˈpendənt/", meaning: "độc lập, tự lập", example: "Boarding school helps children learn how to be independent.", exampleVi: "Trường nội trú giúp trẻ học cách trở nên tự lập." }
  ],

  vocabPractice: {
    mcq: [
      { id: "vp1", prompt: "Choose the word that means 'sáng tạo':", options: { A: "creative", B: "helpful", C: "peaceful", D: "independent" }, correct: "A", explanation: "<b>creative</b> (adj) = sáng tạo." },
      { id: "vp2", prompt: "Choose the phrasal verb that means 'đăng ký':", options: { A: "sign up for", B: "take a rest", C: "follow up", D: "look after" }, correct: "A", explanation: "<b>sign up for</b> (phr v) = đăng ký (tham gia)." },
      { id: "vp3", prompt: "\"Please ______ before entering next time.\"", options: { A: "knock", B: "sign", C: "spend", D: "rehearse" }, correct: "A", explanation: "\"<b>knock</b>\" (gõ cửa) là hành động phù hợp trước khi bước vào phòng." },
      { id: "vp4", prompt: "Choose the word that means 'yên bình':", options: { A: "peaceful", B: "helpful", C: "creative", D: "homesick" }, correct: "A", explanation: "<b>peaceful</b> (adj) = yên bình." },
      { id: "vp5", prompt: "\"They usually ______ plays in the school theatre group.\"", options: { A: "rehearse", B: "spend", C: "knock", D: "sign" }, correct: "A", explanation: "\"<b>rehearse</b> plays\" (tập dượt vở kịch) khớp với hoạt động của nhóm kịch." },
      { id: "vp6", prompt: "Choose the phrase that means 'nhớ nhà':", options: { A: "homesick", B: "independent", C: "peaceful", D: "helpful" }, correct: "A", explanation: "<b>homesick</b> (adj) = nhớ nhà." }
    ],
    fillblank: [
      { id: "vf1", prompt: "You should ______________ (đăng ký) for the singing club.", accepted: ["sign up"], correct: "sign up", explanation: "<b>sign up for</b> (phr v) = đăng ký tham gia." },
      { id: "vf2", prompt: "They will be punished if they don't wear ______________ (đồng phục) at school.", accepted: ["uniforms"], correct: "uniforms", explanation: "<b>uniform</b> (n) = đồng phục." },
      { id: "vf3", prompt: "I ______________ (dành) three hours to study Vietnamese in the afternoon.", accepted: ["spend"], correct: "spend", explanation: "<b>spend</b> (v) = dành (thời gian)." },
      { id: "vf4", prompt: "We're going to have an ______________ (chuyến đi chơi) to the National Park.", accepted: ["outing"], correct: "outing", explanation: "<b>outing</b> (n) = chuyến đi chơi, dã ngoại." },
      { id: "vf5", prompt: "Some students are members of the ______________ (câu lạc bộ sưu tầm tem).", accepted: ["stamp collectors club"], correct: "stamp collectors club", explanation: "<b>stamp collectors club</b> (n phr) = câu lạc bộ sưu tầm tem." },
      { id: "vf6", prompt: "Most students enjoy their activities because they can ______________ (nghỉ ngơi) and follow their interests.", accepted: ["take a rest"], correct: "take a rest", explanation: "<b>take a rest</b> (v phr) = nghỉ ngơi." }
    ],
    matching: {
      left: ["creative", "helpful", "peaceful", "homesick", "independent", "rehearse"],
      right: ["sáng tạo", "hữu ích, tốt bụng", "yên bình", "nhớ nhà", "độc lập, tự lập", "tập dượt"],
      correctMap: [0, 1, 2, 3, 4, 5]
    },
    chooseWord: [
      { id: "cw1", prompt: "\"My sister is very ______. She has many new ideas.\" (CREATE)", options: { A: "create", B: "creative", C: "creation", D: "creatively" }, correct: "B", explanation: "Cần tính từ sau \"is very\" → create (v) → <b>creative</b> (adj, +ive)." },
      { id: "cw2", prompt: "\"The teachers in my new school are nice and very ______.\" (HELP)", options: { A: "help", B: "helped", C: "helpful", D: "helping" }, correct: "C", explanation: "Cần tính từ song song với \"nice\" → help (v) → <b>helpful</b> (adj, +ful)." },
      { id: "cw3", prompt: "\"The school is located in a ______ area.\" (PEACE)", options: { A: "peace", B: "peaceful", C: "peacefully", D: "peaceless" }, correct: "B", explanation: "Cần tính từ đứng trước danh từ \"area\" → peace (n) → <b>peaceful</b> (adj, +ful)." }
    ],
    wordMeaning: [
      { id: "wm1", prompt: "What does 'independent' mean?", options: { A: "độc lập, tự lập", B: "phụ thuộc", C: "nhút nhát", D: "vui vẻ" }, correct: "A", explanation: "independent (adj) = độc lập, tự lập." },
      { id: "wm2", prompt: "What does 'rehearse' mean?", options: { A: "tập dượt", B: "biểu diễn chính thức", C: "sáng tác", D: "ghi âm" }, correct: "A", explanation: "rehearse (v) = tập dượt." },
      { id: "wm3", prompt: "What does 'outing' mean?", options: { A: "chuyến đi chơi, dã ngoại", B: "kỳ nghỉ dài", C: "buổi họp lớp", D: "giờ ra chơi" }, correct: "A", explanation: "outing (n) = chuyến đi chơi, dã ngoại." }
    ],
    wordForm: [
      { id: "wf1", prompt: "We are ______________ (EXCITE) to study in an international school.", accepted: ["excited"], correct: "excited", explanation: "excite (v) → excited (adj, +ed)." },
      { id: "wf2", prompt: "There are three ______________ (BUILD) and a swimming pool in my school.", accepted: ["buildings"], correct: "buildings", explanation: "build (v) → buildings (n, số nhiều)." },
      { id: "wf3", prompt: "We wear our ______________ (UNIFORM) every day at school.", accepted: ["uniforms"], correct: "uniforms", explanation: "uniform (n) → uniforms (n, số nhiều)." }
    ]
  },

  // ---------------------------------------------------------
  // PART 2 — GRAMMAR REVIEW & PRACTICE
  // ---------------------------------------------------------
  grammar: [
    {
      id: "g1", name: "S + usually + V (phương tiện) + to + nơi chốn ⇄ S + usually + goes/go + to + nơi chốn + by + phương tiện",
      usage: "Khi nói về phương tiện di chuyển hằng ngày, ta có thể dùng động từ chỉ phương tiện (drive/cycle/walk...) hoặc dùng \"go/goes + to + nơi chốn + by + phương tiện\" — cùng một nghĩa.",
      formulas: [
        "S + usually + drives/cycles/walks + to + nơi chốn.  →  S + usually + goes + to + nơi chốn + by + phương tiện.",
        "My father usually drives to work. → My father usually goes to work by car."
      ],
      signals: ["V (phương tiện) + to + nơi chốn", "go/goes + to + nơi chốn + by + phương tiện"],
      examples: [
        { en: "My father usually drives to work.", vi: "Bố tôi thường lái xe đi làm." },
        { en: "My father usually goes to work by car.", vi: "Bố tôi thường đi làm bằng ô tô." }
      ],
      mistakes: [
        { wrong: "My father usually goes to work with car.", right: "My father usually goes to work by car. (dùng giới từ \"by\", không dùng \"with\", trước phương tiện di chuyển)" }
      ],
      practice: {
        level1: [
          { id: "g1l1a", type: "fillblank", prompt: "She usually walks to school. → She usually ______________ (goes) to school on foot.", accepted: ["goes"], correct: "goes", explanation: "V (phương tiện) + to + nơi chốn → goes + to + nơi chốn + by/on + phương tiện." }
        ],
        level2: [
          { id: "g1l2a", type: "fillblank", prompt: "Rewrite: 'He usually cycles to the market.' → He usually ______________ (goes) to the market by bike.", accepted: ["goes"], correct: "goes", explanation: "V (phương tiện) + to + nơi chốn → goes + to + nơi chốn + by + phương tiện." }
        ],
        level3: [
          { id: "g1l3a", type: "fillblank", prompt: "Rewrite so it keeps the same meaning: 'They usually fly to Hanoi for the holiday.' → ______________ (They usually go to Hanoi by plane for the holiday).", accepted: ["they usually go to hanoi by plane for the holiday"], correct: "They usually go to Hanoi by plane for the holiday", explanation: "V (phương tiện) + to + nơi chốn → go + to + nơi chốn + by + phương tiện." }
        ]
      }
    },
    {
      id: "g2", name: "S + doesn't/don't + V (+ thời gian) ⇄ S + never + V(s) (+ thời gian)",
      usage: "\"S + doesn't/don't + V\" (không làm gì) có nghĩa tương đương với \"S + never + V(s)\" (không bao giờ làm gì) khi diễn tả một thói quen không xảy ra, vẫn giữ nguyên thì hiện tại đơn.",
      formulas: [
        "S + doesn't/don't + V + (thời gian).  →  S + never + V(s) + (thời gian).",
        "Peter doesn't go fishing in the winter. → Peter never goes fishing in the winter."
      ],
      signals: ["doesn't/don't + V", "never + V(s)"],
      examples: [
        { en: "Peter doesn't go fishing in the winter.", vi: "Peter không đi câu cá vào mùa đông." },
        { en: "Peter never goes fishing in the winter.", vi: "Peter không bao giờ đi câu cá vào mùa đông." }
      ],
      mistakes: [
        { wrong: "Peter never goes not fishing in the winter.", right: "Peter never goes fishing in the winter. (\"never\" đã mang nghĩa phủ định nên không cần thêm \"not\")" }
      ],
      practice: {
        level1: [
          { id: "g2l1a", type: "fillblank", prompt: "She doesn't do homework at the weekend. → She ______________ (never does) homework at the weekend.", accepted: ["never does"], correct: "never does", explanation: "doesn't + V → never + V(s)." }
        ],
        level2: [
          { id: "g2l2a", type: "fillblank", prompt: "Rewrite: 'They don't play football after school.' → They ______________ (never play) football after school.", accepted: ["never play"], correct: "never play", explanation: "don't + V → never + V." }
        ],
        level3: [
          { id: "g2l3a", type: "fillblank", prompt: "Rewrite so it keeps the same meaning: 'My brother doesn't watch TV in the morning.' → ______________ (My brother never watches TV in the morning).", accepted: ["my brother never watches tv in the morning"], correct: "My brother never watches TV in the morning", explanation: "doesn't + V → never + V(s)." }
        ]
      }
    },
    {
      id: "g3", name: "There are + số lượng + N + in + nơi chốn ⇄ Nơi chốn + has + số lượng + N",
      usage: "Giống như ở Practice Test 1, cấu trúc \"There is/are\" có thể chuyển thành \"nơi chốn + has/have\" để nhấn mạnh nơi chốn là chủ thể sở hữu.",
      formulas: [
        "There are + số lượng + N + in + nơi chốn's.  →  Nơi chốn's + has + số lượng + N.",
        "There are thirty-two students in Linh's class. → Linh's class has thirty-two students."
      ],
      signals: ["There are + N + in + nơi chốn", "Nơi chốn + has + N"],
      examples: [
        { en: "There are thirty-two students in Linh's class.", vi: "Có ba mươi hai học sinh trong lớp của Linh." },
        { en: "Linh's class has thirty-two students.", vi: "Lớp của Linh có ba mươi hai học sinh." }
      ],
      mistakes: [
        { wrong: "Linh's class have thirty-two students.", right: "Linh's class has thirty-two students. (chủ ngữ \"Linh's class\" số ít nên dùng \"has\", không dùng \"have\")" }
      ],
      practice: {
        level1: [
          { id: "g3l1a", type: "fillblank", prompt: "There are twenty desks in Nam's room. → Nam's room ______________ (has) twenty desks.", accepted: ["has"], correct: "has", explanation: "There are + N + in + nơi chốn → Nơi chốn + has + N." }
        ],
        level2: [
          { id: "g3l2a", type: "fillblank", prompt: "Rewrite: 'There are five windows in our classroom.' → Our classroom ______________ (has) five windows.", accepted: ["has"], correct: "has", explanation: "There are + N + in + nơi chốn → Nơi chốn + has + N." }
        ],
        level3: [
          { id: "g3l3a", type: "fillblank", prompt: "Rewrite so it keeps the same meaning: 'There are forty students in Mai's school choir.' → ______________ (Mai's school choir has forty students).", accepted: ["mai's school choir has forty students"], correct: "Mai's school choir has forty students", explanation: "There are + N + in + nơi chốn → Nơi chốn + has + N." }
        ]
      }
    },
    {
      id: "g4", name: "S + usually + V + O (+ thời gian) ⇄ S's habit is + V-ing + O (+ thời gian)",
      usage: "\"S + usually + V\" (thường xuyên làm gì — một thói quen) có thể viết lại bằng \"S's habit is + V-ing\" (thói quen của ai đó là làm gì), nhấn mạnh vào thói quen như một danh từ.",
      formulas: [
        "S + usually + V + O + (thời gian).  →  S's habit is + V-ing + O + (thời gian).",
        "My dad usually drinks coffee in the morning. → My dad's habit is drinking coffee in the morning."
      ],
      signals: ["usually + V", "S's habit is + V-ing"],
      examples: [
        { en: "My dad usually drinks coffee in the morning.", vi: "Bố tôi thường uống cà phê vào buổi sáng." },
        { en: "My dad's habit is drinking coffee in the morning.", vi: "Thói quen của bố tôi là uống cà phê vào buổi sáng." }
      ],
      mistakes: [
        { wrong: "My dad's habit is drink coffee in the morning.", right: "My dad's habit is drinking coffee in the morning. (sau \"is\" cần V-ing, không dùng động từ nguyên mẫu)" }
      ],
      practice: {
        level1: [
          { id: "g4l1a", type: "fillblank", prompt: "My mom usually reads the newspaper after dinner. → My mom's habit is ______________ (reading) the newspaper after dinner.", accepted: ["reading"], correct: "reading", explanation: "usually + V → S's habit is + V-ing." }
        ],
        level2: [
          { id: "g4l2a", type: "fillblank", prompt: "Rewrite: 'My sister usually checks her email before breakfast.' → My sister's habit is ______________ (checking) her email before breakfast.", accepted: ["checking"], correct: "checking", explanation: "usually + V → S's habit is + V-ing." }
        ],
        level3: [
          { id: "g4l3a", type: "fillblank", prompt: "Rewrite so it keeps the same meaning: 'My grandfather usually waters the plants early in the morning.' → ______________ (My grandfather's habit is watering the plants early in the morning).", accepted: ["my grandfather's habit is watering the plants early in the morning"], correct: "My grandfather's habit is watering the plants early in the morning", explanation: "usually + V → S's habit is + V-ing." }
        ]
      }
    },
    {
      id: "g5", name: "Vị trí của trạng từ tần suất (always, usually, never...) trong câu",
      usage: "Trạng từ tần suất (always, usually, often, never...) thường đứng <b>trước động từ thường</b> nhưng đứng <b>sau động từ \"to be\"</b> hoặc trợ động từ (has/have, is/are...).",
      formulas: [
        "S + always/usually/never + V (động từ thường) + ...",
        "S + am/is/are/has/have + always/usually/never + ..."
      ],
      signals: ["always/usually/never + V thường", "be/have + always/usually/never"],
      examples: [
        { en: "She always has lunch with her best friend.", vi: "Cô ấy luôn ăn trưa cùng người bạn thân nhất." },
        { en: "He is always late for school.", vi: "Cậu ấy luôn đến trường muộn." }
      ],
      mistakes: [
        { wrong: "She has always lunch with her best friend.", right: "She always has lunch with her best friend. (\"always\" đứng trước động từ thường \"has\", không đứng sau)" }
      ],
      practice: {
        level1: [
          { id: "g5l1a", type: "fillblank", prompt: "Put 'always' in the correct place: 'She ______________ (always) has lunch with her best friend.'", accepted: ["always"], correct: "always", explanation: "Trạng từ tần suất đứng trước động từ thường (has)." }
        ],
        level2: [
          { id: "g5l2a", type: "fillblank", prompt: "Rewrite with 'usually' in the correct place: 'They get up at 8.00 every morning.' → They ______________ (usually) get up at 8.00 every morning.", accepted: ["usually"], correct: "usually", explanation: "Trạng từ tần suất đứng trước động từ thường (get up)." },
        ],
        level3: [
          { id: "g5l3a", type: "fillblank", prompt: "Rewrite so the frequency adverb is in the correct position: 'He late for the lesson is never.' → ______________ (He is never late for the lesson).", accepted: ["he is never late for the lesson"], correct: "He is never late for the lesson", explanation: "Trạng từ tần suất đứng sau động từ \"to be\" (is)." }
        ]
      }
    }
  ],

  // ---------------------------------------------------------
  // PART 3 — READING PRACTICE
  // ---------------------------------------------------------
  reading: {
    passage: "The Vietnamese students take part in different <mark data-w=\"after-school activities\">after-school activities</mark>. Some students play sports. They often play soccer, table tennis or badminton. Sometimes they go swimming in the swimming pools. Some students like music, drama and movies. They often practice playing <mark data-w=\"musical instruments\">musical instruments</mark> in the school music room. They join the school <mark data-w=\"theatre group\">theatre group</mark> and usually rehearse plays. Some are members of the <mark data-w=\"stamp collectors club\">stamp collectors club</mark>. They often get together and talk about their stamps. A few students stay at home and play video games or computer games. Most of them enjoy their activities after school hours because they can <mark data-w=\"take a rest\">take a rest</mark> and follow their interests.",
    vocabInContext: {
      "after-school activities": "hoạt động ngoại khóa sau giờ học",
      "musical instruments": "nhạc cụ",
      "theatre group": "nhóm kịch",
      "stamp collectors club": "câu lạc bộ sưu tầm tem",
      "take a rest": "nghỉ ngơi"
    },
    translation: "<b>HOẠT ĐỘNG NGOẠI KHÓA CỦA HỌC SINH VIỆT NAM</b><br><br>Học sinh Việt Nam tham gia nhiều hoạt động ngoại khóa khác nhau sau giờ học. Một số bạn chơi thể thao. Các bạn thường chơi bóng đá, bóng bàn hoặc cầu lông. Đôi khi các bạn đi bơi ở bể bơi. Một số bạn thích âm nhạc, kịch nghệ và phim ảnh. Các bạn thường luyện tập chơi nhạc cụ trong phòng nhạc của trường. Các bạn tham gia nhóm kịch của trường và thường tập dượt các vở kịch. Một số bạn là thành viên của câu lạc bộ sưu tầm tem. Các bạn thường tụ họp và trò chuyện về những con tem của mình. Một số ít bạn ở nhà và chơi trò chơi điện tử hoặc trò chơi trên máy tính. Hầu hết các bạn đều thích các hoạt động của mình sau giờ học vì có thể nghỉ ngơi và theo đuổi sở thích của bản thân.",
    practice: [
      { id: "r1", type: "truefalse", prompt: "Vietnamese students only play sports after school.", correct: "False", explanation: "Sai. Bài đọc còn nhắc đến nhiều hoạt động khác như âm nhạc, kịch, sưu tầm tem, chơi điện tử." },
      { id: "r2", type: "truefalse", prompt: "Students can practice musical instruments in the school music room.", correct: "True", explanation: "Đúng. Bài đọc: \"They often practice playing musical instruments in the school music room.\"" },
      { id: "r3", type: "truefalse", prompt: "Members of the stamp collectors club usually talk about their stamps when they meet.", correct: "True", explanation: "Đúng. Bài đọc: \"They often get together and talk about their stamps.\"" },
      { id: "r4", type: "truefalse", prompt: "All Vietnamese students stay at home and play video games after school.", correct: "False", explanation: "Sai. Bài đọc: chỉ \"a few students\" (một số ít) ở nhà chơi điện tử, không phải tất cả." },
      { id: "r5", type: "mcq", prompt: "What do students in the school theatre group usually do?", options: { A: "Play soccer", B: "Rehearse plays", C: "Collect stamps", D: "Play computer games" }, correct: "B", explanation: "Bài đọc: \"They join the school theatre group and usually rehearse plays.\"" },
      { id: "r6", type: "mcq", prompt: "Why do most students like their after-school activities?", options: { A: "Because they can relax and do what they like.", B: "Because they want to get good marks.", C: "Because they don't have any homework.", D: "Because they can eat their favorite food." }, correct: "A", explanation: "Bài đọc: \"Most of them enjoy their activities ... because they can take a rest and follow their interests.\"" },
      { id: "r7", type: "fillblank", prompt: "Find the phrase in the passage that means 'câu lạc bộ sưu tầm tem'.", accepted: ["stamp collectors club"], correct: "stamp collectors club", explanation: "\"Some are members of the stamp collectors club.\" — stamp collectors club = câu lạc bộ sưu tầm tem." },
      { id: "r8", type: "mcq", prompt: "What sports do some Vietnamese students play after school, according to the passage?", options: { A: "Soccer, table tennis or badminton", B: "Golf and tennis", C: "Boxing", D: "Skiing" }, correct: "A", explanation: "Bài đọc: \"They often play soccer, table tennis or badminton.\"" },
      { id: "r9", type: "truefalse", prompt: "According to the passage, most students enjoy their after-school activities because they can relax and follow their interests.", correct: "True", explanation: "Đúng. Bài đọc: \"Most of them enjoy their activities after school hours because they can take a rest and follow their interests.\"" }
    ]
  },

  // ---------------------------------------------------------
  // PART 4 — TRANSLATION PRACTICE
  // ---------------------------------------------------------
  translation: [
    { id: "t1", en: "The Vietnamese students take part in different after-school activities.", suggested: "Học sinh Việt Nam tham gia nhiều hoạt động ngoại khóa khác nhau sau giờ học.", notes: "\"take part in\" (tham gia vào) là cụm động từ phổ biến." },
    { id: "t2", en: "They often practice playing musical instruments in the school music room.", suggested: "Các bạn thường luyện tập chơi nhạc cụ trong phòng nhạc của trường.", notes: "\"practice + V-ing\" (luyện tập làm gì) là cấu trúc cố định." },
    { id: "t3", en: "They join the school theatre group and usually rehearse plays.", suggested: "Các bạn tham gia nhóm kịch của trường và thường tập dượt các vở kịch.", notes: "\"join + N\" (tham gia vào tổ chức/câu lạc bộ) là cụm quen thuộc." },
    { id: "t4", en: "Some are members of the stamp collectors club.", suggested: "Một số bạn là thành viên của câu lạc bộ sưu tầm tem.", notes: "\"be a member of + N\" (là thành viên của) diễn tả tư cách thành viên." },
    { id: "t5", en: "Most of them enjoy their activities because they can take a rest and follow their interests.", suggested: "Hầu hết các bạn đều thích các hoạt động của mình vì có thể nghỉ ngơi và theo đuổi sở thích của bản thân.", notes: "\"because + mệnh đề\" (bởi vì) dùng để nêu lý do." }
  ],

  // ---------------------------------------------------------
  // PART 5 — SENTENCE TRANSFORMATION PRACTICE
  // ---------------------------------------------------------
  transformation: [
    {
      id: "tr1", name: "V (phương tiện) + to + nơi chốn ⇄ go/goes + to + nơi chốn + by + phương tiện",
      formula: "S + usually + drives/cycles/walks + to + nơi chốn  →  S + usually + goes + to + nơi chốn + by + phương tiện",
      example: { before: "My father usually drives to work.", after: "My father usually goes to work by car." },
      practice: [
        { id: "tr1p1", type: "fillblank", prompt: "She usually walks to school. → She usually ______________ (goes) to school on foot.", accepted: ["goes"], correct: "goes", explanation: "V (phương tiện) + to + nơi chốn → goes + to + nơi chốn + by/on + phương tiện." },
        { id: "tr1p2", type: "fillblank", prompt: "Rewrite: 'He usually cycles to the market.' → He usually ______________ (goes) to the market by bike.", accepted: ["goes"], correct: "goes", explanation: "V (phương tiện) + to + nơi chốn → goes + to + nơi chốn + by + phương tiện." }
      ]
    },
    {
      id: "tr2", name: "doesn't/don't + V ⇄ never + V(s)",
      formula: "S + doesn't/don't + V + (thời gian)  →  S + never + V(s) + (thời gian)",
      example: { before: "Peter doesn't go fishing in the winter.", after: "Peter never goes fishing in the winter." },
      practice: [
        { id: "tr2p1", type: "fillblank", prompt: "She doesn't do homework at the weekend. → She ______________ (never does) homework at the weekend.", accepted: ["never does"], correct: "never does", explanation: "doesn't + V → never + V(s)." },
        { id: "tr2p2", type: "fillblank", prompt: "Rewrite: 'They don't play football after school.' → They ______________ (never play) football after school.", accepted: ["never play"], correct: "never play", explanation: "don't + V → never + V." }
      ]
    },
    {
      id: "tr3", name: "There are + N + in + nơi chốn ⇄ Nơi chốn + has + N",
      formula: "There are + số lượng + N + in + nơi chốn's  →  Nơi chốn's + has + số lượng + N",
      example: { before: "There are thirty-two students in Linh's class.", after: "Linh's class has thirty-two students." },
      practice: [
        { id: "tr3p1", type: "fillblank", prompt: "There are twenty desks in Nam's room. → Nam's room ______________ (has) twenty desks.", accepted: ["has"], correct: "has", explanation: "There are + N + in + nơi chốn → Nơi chốn + has + N." },
        { id: "tr3p2", type: "fillblank", prompt: "Rewrite: 'There are five windows in our classroom.' → Our classroom ______________ (has) five windows.", accepted: ["has"], correct: "has", explanation: "There are + N + in + nơi chốn → Nơi chốn + has + N." }
      ]
    },
    {
      id: "tr4", name: "usually + V + O ⇄ S's habit is + V-ing + O",
      formula: "S + usually + V + O + (thời gian)  →  S's habit is + V-ing + O + (thời gian)",
      example: { before: "My dad usually drinks coffee in the morning.", after: "My dad's habit is drinking coffee in the morning." },
      practice: [
        { id: "tr4p1", type: "fillblank", prompt: "My mom usually reads the newspaper after dinner. → My mom's habit is ______________ (reading) the newspaper after dinner.", accepted: ["reading"], correct: "reading", explanation: "usually + V → S's habit is + V-ing." },
        { id: "tr4p2", type: "fillblank", prompt: "Rewrite: 'My sister usually checks her email before breakfast.' → My sister's habit is ______________ (checking) her email before breakfast.", accepted: ["checking"], correct: "checking", explanation: "usually + V → S's habit is + V-ing." }
      ]
    }
  ],

  // ---------------------------------------------------------
  // PART 6 — QUICK REVIEW (mini test, all skills)
  // ---------------------------------------------------------
  quickReview: [
    { id: "q1", cat: "Vocabulary", type: "mcq", prompt: "'Creative' means:", options: { A: "sáng tạo", B: "chăm chỉ", C: "tự tin", D: "ngoan ngoãn" }, correct: "A", explanation: "creative (adj) = sáng tạo." },
    { id: "q2", cat: "Vocabulary", type: "mcq", prompt: "'Peaceful' means:", options: { A: "yên bình", B: "ồn ào", C: "đông đúc", D: "nguy hiểm" }, correct: "A", explanation: "peaceful (adj) = yên bình." },
    { id: "q3", cat: "Vocabulary", type: "fillblank", prompt: "They will be punished if they don't wear ______________ (đồng phục) at school.", accepted: ["uniforms"], correct: "uniforms", explanation: "uniform (n) = đồng phục." },
    { id: "q4", cat: "Grammar", type: "mcq", prompt: "My father usually drives to work. → My father usually ______ to work by car.", options: { A: "goes", B: "go", C: "going", D: "went" }, correct: "A", explanation: "Chủ ngữ số ít \"My father\" ở thì hiện tại đơn dùng \"goes\"." },
    { id: "q5", cat: "Grammar", type: "mcq", prompt: "Peter doesn't go fishing in the winter. → Peter ______ goes fishing in the winter.", options: { A: "always", B: "never", C: "usually", D: "sometimes" }, correct: "B", explanation: "doesn't + V → never + V(s)." },
    { id: "q6", cat: "Grammar", type: "fillblank", prompt: "There are thirty-two students in Linh's class. → Linh's class ______________ (has) thirty-two students.", accepted: ["has"], correct: "has", explanation: "There are + N + in + nơi chốn → Nơi chốn + has + N." },
    { id: "q7", cat: "Grammar", type: "fillblank", prompt: "My dad usually drinks coffee in the morning. → My dad's habit is ______________ (drinking) coffee in the morning.", accepted: ["drinking"], correct: "drinking", explanation: "usually + V → S's habit is + V-ing." },
    { id: "q8", cat: "Reading", type: "truefalse", prompt: "Students can practice musical instruments in the school music room.", correct: "True", explanation: "Đúng theo bài đọc." },
    { id: "q9", cat: "Reading", type: "truefalse", prompt: "All Vietnamese students stay at home and play video games after school.", correct: "False", explanation: "Sai. Chỉ một số ít học sinh ở nhà chơi điện tử." },
    { id: "q10", cat: "Reading", type: "mcq", prompt: "What do students in the school theatre group usually do?", options: { A: "Play soccer", B: "Rehearse plays", C: "Collect stamps", D: "Play computer games" }, correct: "B", explanation: "Bài đọc: \"They join the school theatre group and usually rehearse plays.\"" },
    { id: "q11", cat: "Writing", type: "fillblank", prompt: "My sister is very ______________ (CREATE). She has many new ideas.", accepted: ["creative"], correct: "creative", explanation: "create (v) → creative (adj, +ive)." },
    { id: "q12", cat: "Writing", type: "fillblank", prompt: "The teachers in my new school are nice and ______________ (HELP).", accepted: ["helpful"], correct: "helpful", explanation: "help (v) → helpful (adj, +ful)." },
    { id: "q13", cat: "Writing", type: "fillblank", prompt: "We are ______________ (EXCITE) to study in an international school.", accepted: ["excited"], correct: "excited", explanation: "excite (v) → excited (adj, +ed)." },
    { id: "q14", cat: "Vocabulary", type: "mcq", prompt: "Which phrase means 'câu lạc bộ sưu tầm tem'?", options: { A: "stamp collectors club", B: "theatre group", C: "music room", D: "sports team" }, correct: "A", explanation: "stamp collectors club (n phr) = câu lạc bộ sưu tầm tem." }
  ]
};
