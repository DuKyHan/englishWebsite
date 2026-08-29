const REVIEW = {
  id: "test20",
  testFile: "test20.html",
  grade: "Grade 9 — Global Success",
  unit: "Unit 4: Remembering the past",
  title: "Knowledge Review — Unit 4, Practice Test 2",

  // ---------------------------------------------------------
  // PART 1 — VOCABULARY REVIEW
  // ---------------------------------------------------------
  vocabulary: [
    { word: "monument", pos: "n", ipa: "/ˈmɒnjumənt/", meaning: "tượng đài, đài tưởng niệm", example: "It's a monument dedicated to the heroes of our country.", exampleVi: "Đó là một tượng đài để tưởng nhớ các anh hùng của đất nước." },
    { word: "preserve", pos: "v", ipa: "/prɪˈzɜːrv/", meaning: "bảo tồn, gìn giữ", example: "These historical documents are well preserved for future generations.", exampleVi: "Những tài liệu lịch sử này được bảo quản tốt cho các thế hệ sau." },
    { word: "thanks to", pos: "phr", ipa: "/θæŋks tuː/", meaning: "nhờ có, nhờ vào", example: "Thanks to your hard work, the park was cleaned up quickly.", exampleVi: "Nhờ có sự chăm chỉ của bạn, công viên đã được dọn sạch nhanh chóng." },
    { word: "that's very kind of you", pos: "phr", ipa: "/ðæts ˈveri kaɪnd əv juː/", meaning: "bạn thật tốt bụng quá (đáp lại lời đề nghị giúp đỡ)", example: "\"Shall I help you with that heavy suitcase?\" \"That's very kind of you.\"", exampleVi: "\"Để tôi giúp bạn xách chiếc vali nặng đó nhé?\" \"Bạn thật tốt bụng quá.\"" },
    { word: "fees", pos: "n", ipa: "/fiːz/", meaning: "học phí, lệ phí", example: "We provide courses with low fees for everyone.", exampleVi: "Chúng tôi cung cấp các khóa học với học phí thấp cho mọi người." },
    { word: "deal with", pos: "phr v", ipa: "/diːl wɪð/", meaning: "đối phó, xử lý (với việc gì)", example: "Many people were dealing with the aftermath of the war.", exampleVi: "Nhiều người đã phải đối phó với hậu quả của chiến tranh." },
    { word: "aftermath", pos: "n", ipa: "/ˈæftərmæθ/", meaning: "hậu quả, thời kỳ sau (một sự kiện lớn)", example: "The government was working to rebuild the nation in the aftermath of the war.", exampleVi: "Chính phủ đã nỗ lực tái thiết đất nước trong thời kỳ hậu chiến." },
    { word: "rebuild", pos: "v", ipa: "/ˌriːˈbɪld/", meaning: "xây dựng lại, tái thiết", example: "The government was working to rebuild the nation.", exampleVi: "Chính phủ đã nỗ lực tái thiết đất nước." },
    { word: "remain", pos: "v", ipa: "/rɪˈmeɪn/", meaning: "vẫn còn, tiếp tục duy trì (ở trạng thái nào đó)", example: "Hope for a brighter future remained strong among the people.", exampleVi: "Hy vọng về một tương lai tươi sáng hơn vẫn mạnh mẽ trong lòng người dân." },
    { word: "aim to", pos: "v phr", ipa: "/eɪm tuː/", meaning: "nhắm tới, đặt mục tiêu làm gì", example: "The government aimed to return the country to a more stable condition.", exampleVi: "Chính phủ đặt mục tiêu đưa đất nước trở lại tình trạng ổn định hơn." },
    { word: "food shortage", pos: "n phr", ipa: "/fuːd ˈʃɔːrtɪdʒ/", meaning: "tình trạng thiếu lương thực", example: "The French people were facing many problems, including food shortages.", exampleVi: "Người dân Pháp phải đối mặt với nhiều vấn đề, bao gồm tình trạng thiếu lương thực." },
    { word: "industry", pos: "n", ipa: "/ˈɪndəstri/", meaning: "ngành công nghiệp", example: "France was also working on growing its industries.", exampleVi: "Nước Pháp cũng nỗ lực phát triển các ngành công nghiệp của mình." },
    { word: "countryside", pos: "n", ipa: "/ˈkʌntrisaɪd/", meaning: "vùng nông thôn", example: "Many people moved from the countryside to cities to find work.", exampleVi: "Nhiều người đã chuyển từ vùng nông thôn ra thành phố để tìm việc làm." },
    { word: "be recognized", pos: "v phr (passive)", ipa: "/biː ˈrekəɡnaɪzd/", meaning: "được công nhận, được ghi nhận", example: "They hoped their work would be recognized and appreciated.", exampleVi: "Họ hy vọng công trình của mình sẽ được công nhận và đánh giá cao." },
    { word: "tradition", pos: "n", ipa: "/trəˈdɪʃn/", meaning: "truyền thống", example: "It is a family tradition to have a big dinner together on New Year's Eve.", exampleVi: "Đó là truyền thống của gia đình khi cùng nhau ăn một bữa tối thịnh soạn vào đêm Giao thừa." },
    { word: "keep up the tradition", pos: "phr", ipa: "/kiːp ʌp ðə trəˈdɪʃn/", meaning: "duy trì truyền thống", example: "The village people are proud to keep up the tradition of handmade pottery.", exampleVi: "Người dân trong làng tự hào duy trì truyền thống làm gốm thủ công." },
    { word: "break with tradition", pos: "phr", ipa: "/breɪk wɪð trəˈdɪʃn/", meaning: "phá vỡ, từ bỏ truyền thống", example: "They decided to break with tradition and go abroad for Christmas.", exampleVi: "Họ quyết định phá vỡ truyền thống và đi nước ngoài vào dịp Giáng sinh." },
    { word: "common tradition", pos: "n phr", ipa: "/ˈkɒmən trəˈdɪʃn/", meaning: "truyền thống phổ biến", example: "In many cultures, it is a common tradition to exchange gifts during festivals.", exampleVi: "Ở nhiều nền văn hóa, việc trao đổi quà tặng trong các dịp lễ hội là một truyền thống phổ biến." }
  ],

  vocabPractice: {
    mcq: [
      { id: "vp1", prompt: "Choose the word that means 'tượng đài':", options: { A: "monument", B: "aftermath", C: "tradition", D: "fees" }, correct: "A", explanation: "<b>monument</b> (n) = tượng đài, đài tưởng niệm." },
      { id: "vp2", prompt: "Choose the phrase that means 'nhờ có':", options: { A: "thanks to", B: "deal with", C: "aim to", D: "break with tradition" }, correct: "A", explanation: "<b>thanks to</b> (phr) = nhờ có, nhờ vào." },
      { id: "vp3", prompt: "\"Shall I help you with that heavy suitcase?\" — \"______\"", options: { A: "That's very kind of you", B: "Not at all", C: "No way", D: "Never mind" }, correct: "A", explanation: "\"<b>That's very kind of you</b>\" là cách đáp lại lời đề nghị giúp đỡ một cách lịch sự." },
      { id: "vp4", prompt: "\"These historical documents are well ______ for future generations.\"", options: { A: "discovered", B: "preserved", C: "contributed", D: "occupied" }, correct: "B", explanation: "\"well <b>preserved</b> for future generations\" (được bảo quản tốt cho thế hệ sau)." },
      { id: "vp5", prompt: "\"Many people moved from the ______ to cities to find work.\"", options: { A: "countryside", B: "palace", C: "monument", D: "castle" }, correct: "A", explanation: "<b>countryside</b> (n) = vùng nông thôn." },
      { id: "vp6", prompt: "Choose the phrase that means 'được công nhận':", options: { A: "be recognized", B: "be rebuilt", C: "be preserved", D: "be dealt with" }, correct: "A", explanation: "<b>be recognized</b> = được công nhận, được ghi nhận." }
    ],
    fillblank: [
      { id: "vf1", prompt: "The government was working to ______________ (xây dựng lại) the nation after the war.", accepted: ["rebuild"], correct: "rebuild", explanation: "<b>rebuild</b> (v) = xây dựng lại, tái thiết." },
      { id: "vf2", prompt: "Hope for a brighter future ______________ (vẫn) strong among the people.", accepted: ["remained"], correct: "remained", explanation: "<b>remain</b> (v) = vẫn còn, tiếp tục duy trì." },
      { id: "vf3", prompt: "The government ______________ (đặt mục tiêu) to return the country to a more stable condition.", accepted: ["aimed"], correct: "aimed", explanation: "<b>aim to</b> (v phr) = nhắm tới, đặt mục tiêu làm gì." },
      { id: "vf4", prompt: "Many people were dealing with the ______________ (hậu quả) of the war.", accepted: ["aftermath"], correct: "aftermath", explanation: "<b>aftermath</b> (n) = hậu quả, thời kỳ sau một sự kiện lớn." },
      { id: "vf5", prompt: "The village people are proud to ______________ (duy trì truyền thống) of handmade pottery.", accepted: ["keep up the tradition"], correct: "keep up the tradition", explanation: "<b>keep up the tradition</b> (phr) = duy trì truyền thống." },
      { id: "vf6", prompt: "We provide courses with low ______________ (học phí) for everyone.", accepted: ["fees"], correct: "fees", explanation: "<b>fees</b> (n) = học phí, lệ phí." }
    ],
    matching: {
      left: ["aftermath", "rebuild", "countryside", "tradition", "aim to", "fees"],
      right: ["hậu quả", "xây dựng lại", "vùng nông thôn", "truyền thống", "nhắm tới, đặt mục tiêu", "học phí, lệ phí"],
      correctMap: [0, 1, 2, 3, 4, 5]
    },
    chooseWord: [
      { id: "cw1", prompt: "\"It is a ______ custom in our village to celebrate the harvest every autumn.\" (TRADITION)", options: { A: "tradition", B: "traditional", C: "traditionally", D: "traditions" }, correct: "B", explanation: "Cần tính từ trước danh từ \"custom\" → tradition (n) → <b>traditional</b> (adj)." },
      { id: "cw2", prompt: "\"Their contribution to the local community was finally ______ by the town council.\" (RECOGNIZE)", options: { A: "recognize", B: "recognizing", C: "recognition", D: "recognized" }, correct: "D", explanation: "Cần dạng bị động \"was + V3\" → recognize (v) → <b>recognized</b>." },
      { id: "cw3", prompt: "\"The team is responsible for the ______ of these ancient manuscripts.\" (PRESERVE)", options: { A: "preserve", B: "preserved", C: "preservation", D: "preserving" }, correct: "C", explanation: "Cần danh từ sau \"the\" → preserve (v) → <b>preservation</b> (n)." }
    ],
    wordMeaning: [
      { id: "wm1", prompt: "What does 'aftermath' mean?", options: { A: "hậu quả", B: "lễ hội", C: "tượng đài", D: "học phí" }, correct: "A", explanation: "aftermath (n) = hậu quả, thời kỳ sau một sự kiện lớn." },
      { id: "wm2", prompt: "What does 'thanks to' mean?", options: { A: "nhờ có", B: "mặc dù", C: "ngoại trừ", D: "thay vì" }, correct: "A", explanation: "thanks to (phr) = nhờ có, nhờ vào." },
      { id: "wm3", prompt: "What does 'food shortage' mean?", options: { A: "tình trạng thiếu lương thực", B: "tình trạng dư thừa lương thực", C: "ngành công nghiệp thực phẩm", D: "lễ hội ẩm thực" }, correct: "A", explanation: "food shortage (n phr) = tình trạng thiếu lương thực." }
    ],
    wordForm: [
      { id: "wf1", prompt: "The ______________ (DEVELOP) of the new technology took many years.", accepted: ["development"], correct: "development", explanation: "develop (v) → development (n)." },
      { id: "wf2", prompt: "We should be grateful to the previous ______________ (GENERATE) for our traditions.", accepted: ["generations"], correct: "generations", explanation: "generate (v) → generation(s) (n)." },
      { id: "wf3", prompt: "There were many ______________ (CULTURE) activities held at the school last week.", accepted: ["cultural"], correct: "cultural", explanation: "culture (n) → cultural (adj)." }
    ]
  },

  // ---------------------------------------------------------
  // PART 2 — GRAMMAR REVIEW & PRACTICE
  // ---------------------------------------------------------
  grammar: [
    {
      id: "g1", name: "S + don't/doesn't have + N ⇄ S + wish(es) + S + had + N",
      usage: "Khi ai đó không có một vật gì ở hiện tại và ta muốn diễn đạt điều ước ngược lại với thực tế đó, dùng \"wish + S + had + N\" — điều ước không có thật ở hiện tại về việc sở hữu.",
      formulas: [
        "S + don't/doesn't + have + N.  →  S + wish(es) + S + had + N.",
        "My brother doesn't have a sports bike. → My brother wishes he had a sports bike."
      ],
      signals: ["don't/doesn't have + N", "wish(es) + had + N"],
      examples: [
        { en: "My brother doesn't have a sports bike.", vi: "Anh trai tôi không có xe đạp thể thao." },
        { en: "My brother wishes he had a sports bike.", vi: "Anh trai tôi ước gì mình có một chiếc xe đạp thể thao." }
      ],
      mistakes: [
        { wrong: "My brother wishes he has a sports bike.", right: "My brother wishes he had a sports bike. (cần quá khứ đơn \"had\" sau wish, không dùng \"has\")" }
      ],
      practice: {
        level1: [
          { id: "g1l1a", type: "fillblank", prompt: "She doesn't have a car. → She wishes she ______________ (had) a car.", accepted: ["had"], correct: "had", explanation: "don't/doesn't have + N → wish(es) + had + N." }
        ],
        level2: [
          { id: "g1l2a", type: "fillblank", prompt: "Rewrite: 'They don't have enough money for the trip.' → They wish they ______________ (had) enough money for the trip.", accepted: ["had"], correct: "had", explanation: "don't have + N → wish + had + N." }
        ],
        level3: [
          { id: "g1l3a", type: "fillblank", prompt: "Rewrite so it keeps the same meaning: 'My friend doesn't have a big house.' → ______________ (My friend wishes he had a big house).", accepted: ["my friend wishes he had a big house"], correct: "My friend wishes he had a big house", explanation: "doesn't have + N → wishes + had + N." }
        ]
      }
    },
    {
      id: "g2", name: "It's a pity that + S + don't/doesn't + V ⇄ I wish + S + V(quá khứ đơn)",
      usage: "\"It's a pity that + S + don't/doesn't + V\" (thật đáng tiếc là...) diễn tả sự tiếc nuối về một sự thật ở hiện tại. Cấu trúc này có thể viết lại bằng \"I wish + S + V(quá khứ đơn)\" — điều ước không có thật ở hiện tại.",
      formulas: [
        "It's a pity that + S + don't/doesn't + V.  →  I wish + S + V(quá khứ đơn).",
        "It's a pity that we do not have a long summer holiday. → I wish we had a long summer holiday."
      ],
      signals: ["It's a pity that + don't/doesn't", "I wish + V(quá khứ đơn)"],
      examples: [
        { en: "It's a pity that we do not have a long summer holiday.", vi: "Thật đáng tiếc là chúng tôi không có một kỳ nghỉ hè dài." },
        { en: "I wish we had a long summer holiday.", vi: "Giá mà chúng tôi có một kỳ nghỉ hè dài." }
      ],
      mistakes: [
        { wrong: "I wish we don't have a long summer holiday.", right: "I wish we had a long summer holiday. (cần quá khứ đơn sau wish, không giữ nguyên thì hiện tại)" }
      ],
      practice: {
        level1: [
          { id: "g2l1a", type: "fillblank", prompt: "It's a pity that she doesn't live nearby. → I wish she ______________ (lived) nearby.", accepted: ["lived"], correct: "lived", explanation: "It's a pity that + don't/doesn't → I wish + V(quá khứ đơn)." }
        ],
        level2: [
          { id: "g2l2a", type: "fillblank", prompt: "Rewrite: 'It's a pity that he doesn't know the truth.' → I wish he ______________ (knew) the truth.", accepted: ["knew"], correct: "knew", explanation: "It's a pity that + don't/doesn't → I wish + V(quá khứ đơn)." }
        ],
        level3: [
          { id: "g2l3a", type: "fillblank", prompt: "Rewrite so it keeps the same meaning: 'It's a pity that we don't have more free time.' → ______________ (I wish we had more free time).", accepted: ["i wish we had more free time"], correct: "I wish we had more free time", explanation: "It's a pity that + don't → I wish + had." }
        ]
      }
    },
    {
      id: "g3", name: "N/V-ing + was a common experience ⇄ S + used to + V",
      usage: "Diễn tả một thói quen hoặc trải nghiệm phổ biến trong quá khứ nhưng không còn tiếp diễn ở hiện tại, ta dùng \"used to + V (nguyên mẫu)\".",
      formulas: [
        "V-ing + was a common experience (+ nơi chốn/thời gian).  →  S + used to + V (+ nơi chốn/thời gian).",
        "When I was young, walking barefoot was a common experience at school. → I used to walk barefoot at school when I was young."
      ],
      signals: ["was a common experience", "used to + V"],
      examples: [
        { en: "When I was young, walking barefoot was a common experience at school.", vi: "Khi tôi còn nhỏ, việc đi chân trần là một trải nghiệm phổ biến ở trường." },
        { en: "I used to walk barefoot at school when I was young.", vi: "Tôi từng đi chân trần ở trường khi còn nhỏ." }
      ],
      mistakes: [
        { wrong: "I use to walk barefoot at school.", right: "I used to walk barefoot at school. (\"used to\" luôn có \"-d\", không phải \"use to\")" }
      ],
      practice: {
        level1: [
          { id: "g3l1a", type: "fillblank", prompt: "Reading by candlelight was a common experience in the past. → People ______________ (used to) read by candlelight in the past.", accepted: ["used to"], correct: "used to", explanation: "was a common experience → used to + V." }
        ],
        level2: [
          { id: "g3l2a", type: "fillblank", prompt: "Rewrite: 'Riding a horse to school was a common experience for children.' → Children ______________ (used to) ride a horse to school.", accepted: ["used to"], correct: "used to", explanation: "was a common experience → used to + V." }
        ],
        level3: [
          { id: "g3l3a", type: "fillblank", prompt: "Rewrite so it keeps the same meaning: 'Washing clothes by hand was a common experience for our grandparents.' → ______________ (Our grandparents used to wash clothes by hand).", accepted: ["our grandparents used to wash clothes by hand"], correct: "Our grandparents used to wash clothes by hand", explanation: "was a common experience → used to + V." }
        ]
      }
    },
    {
      id: "g4", name: "N + was the primary way of V-ing ⇄ People used to + V",
      usage: "\"N + was the primary way of V-ing + in the past\" (là cách thức chủ yếu để làm gì trong quá khứ) có thể viết lại bằng \"People used to + V\" — cùng diễn tả cách thức phổ biến trong quá khứ.",
      formulas: [
        "N + was the primary way of V-ing + in the past.  →  People used to + V.",
        "Talking face to face was the primary way of communicating in the past. → People used to talk face to face in the past."
      ],
      signals: ["was the primary way of V-ing", "People used to + V"],
      examples: [
        { en: "Talking face to face was the primary way of communicating in the past.", vi: "Nói chuyện trực tiếp là cách thức chủ yếu để giao tiếp trong quá khứ." },
        { en: "People used to talk face to face in the past.", vi: "Ngày xưa người ta thường nói chuyện trực tiếp với nhau." }
      ],
      mistakes: [
        { wrong: "People used talk face to face in the past.", right: "People used to talk face to face in the past. (cần \"to\" sau \"used\")" }
      ],
      practice: {
        level1: [
          { id: "g4l1a", type: "fillblank", prompt: "Sending letters was the primary way of communicating long ago. → People ______________ (used to) send letters long ago.", accepted: ["used to"], correct: "used to", explanation: "was the primary way of V-ing → People used to + V." }
        ],
        level2: [
          { id: "g4l2a", type: "fillblank", prompt: "Rewrite: 'Farming was the primary way of earning a living in the village.' → People ______________ (used to) earn a living by farming in the village.", accepted: ["used to"], correct: "used to", explanation: "was the primary way of V-ing → People used to + V." }
        ],
        level3: [
          { id: "g4l3a", type: "fillblank", prompt: "Rewrite so it keeps the same meaning: 'Storytelling was the primary way of passing down traditions.' → ______________ (People used to pass down traditions by storytelling).", accepted: ["people used to pass down traditions by storytelling"], correct: "People used to pass down traditions by storytelling", explanation: "was the primary way of V-ing → People used to + V." }
        ]
      }
    },
    {
      id: "g5", name: "wish + S + would + V (điều ước về tương lai / mong muốn thay đổi)",
      usage: "\"wish + S + would + V\" diễn tả mong muốn ai đó hoặc điều gì đó thay đổi trong tương lai, thường thể hiện sự khó chịu hoặc mong đợi về một hành động chưa xảy ra.",
      formulas: [
        "S1 + wish(es) + S2 + would + V.",
        "I wish it would stop raining soon so we can go out."
      ],
      signals: ["wish + would + V"],
      examples: [
        { en: "I wish it would stop raining soon so we can go out.", vi: "Tôi ước gì trời sẽ tạnh mưa sớm để chúng tôi có thể ra ngoài." },
        { en: "I wish my brother would stop playing video games all day.", vi: "Tôi ước gì anh trai tôi sẽ ngừng chơi trò chơi điện tử cả ngày." }
      ],
      mistakes: [
        { wrong: "I wish it will stop raining.", right: "I wish it would stop raining. (dùng \"would\", không dùng \"will\", sau wish)" }
      ],
      practice: {
        level1: [
          { id: "g5l1a", type: "fillblank", prompt: "I wish my sister ______________ (would stop) borrowing my clothes without asking.", accepted: ["would stop"], correct: "would stop", explanation: "wish + S + would + V (mong muốn thay đổi trong tương lai)." }
        ],
        level2: [
          { id: "g5l2a", type: "fillblank", prompt: "Rewrite: 'I want the neighbours to stop making so much noise at night.' → I wish the neighbours ______________ (would stop) making so much noise at night.", accepted: ["would stop"], correct: "would stop", explanation: "wish + S + would + V." }
        ],
        level3: [
          { id: "g5l3a", type: "fillblank", prompt: "Rewrite so it keeps the same meaning: 'I want the bus to arrive on time for once.' → ______________ (I wish the bus would arrive on time for once).", accepted: ["i wish the bus would arrive on time for once"], correct: "I wish the bus would arrive on time for once", explanation: "wish + S + would + V." }
        ]
      }
    }
  ],

  // ---------------------------------------------------------
  // PART 3 — READING PRACTICE
  // ---------------------------------------------------------
  reading: {
    passage: "A long time ago, France was a country with a lot of history. In the 19th century, France was known for its beautiful cities and many important events. While people in France were living their daily lives, the country was also going through many changes. In the early 1800s, while wars were happening across Europe, France was involved in these conflicts. People in France were living under Napoleon Bonaparte, who wanted to make the French Empire larger. The French people were facing many problems, including <mark data-w=\"food shortages\">food shortages</mark> and the worries of war. In the 1870s, while France was rebuilding after the wars, the country was also working on growing its industries. <mark data-w=\"Factories were being built\">Factories were being built</mark>, and many people moved from the countryside to cities to find work. The French government was trying to make the economy better and improve life for everyone. People hoped these changes would bring a better future. By the early 20th century, France was famous for its art and science. While many French artists and scientists were working hard, they wished they had more help from the government. They hoped their work would be <mark data-w=\"recognized and appreciated\">recognized and appreciated</mark> in France and around the world. France's history is full of important changes. As people in France were <mark data-w=\"adjusting to new developments\">adjusting to new developments</mark>, they <mark data-w=\"looked back with pride\">looked back with pride</mark> at their achievements and hoped for more progress in the future.",
    vocabInContext: {
      "food shortages": "tình trạng thiếu lương thực",
      "Factories were being built": "các nhà máy được xây dựng",
      "recognized and appreciated": "được công nhận và đánh giá cao",
      "adjusting to new developments": "thích nghi với những phát triển mới",
      "looked back with pride": "nhìn lại với niềm tự hào"
    },
    translation: "<b>NƯỚC PHÁP QUA CÁC THỜI KỲ</b><br><br>Đã từ rất lâu, nước Pháp là một đất nước có bề dày lịch sử. Vào thế kỷ 19, nước Pháp nổi tiếng với những thành phố xinh đẹp và nhiều sự kiện quan trọng. Trong khi người dân Pháp đang sống cuộc sống thường nhật của họ, đất nước cũng đang trải qua nhiều thay đổi. Vào đầu những năm 1800, khi các cuộc chiến tranh đang diễn ra khắp châu Âu, nước Pháp đã tham gia vào những cuộc xung đột này. Người dân Pháp sống dưới thời Napoleon Bonaparte, người muốn mở rộng Đế chế Pháp. Người dân Pháp phải đối mặt với nhiều vấn đề, bao gồm tình trạng thiếu lương thực và nỗi lo về chiến tranh. Vào những năm 1870, khi nước Pháp đang tái thiết sau chiến tranh, đất nước cũng nỗ lực phát triển các ngành công nghiệp của mình. Các nhà máy được xây dựng, và nhiều người đã chuyển từ vùng nông thôn ra thành phố để tìm việc làm. Chính phủ Pháp đã cố gắng cải thiện nền kinh tế và nâng cao cuộc sống cho mọi người. Người dân hy vọng những thay đổi này sẽ mang lại một tương lai tốt đẹp hơn. Đến đầu thế kỷ 20, nước Pháp nổi tiếng với nghệ thuật và khoa học. Trong khi nhiều nghệ sĩ và nhà khoa học Pháp đang nỗ lực làm việc, họ ước gì mình có thêm sự hỗ trợ từ chính phủ. Họ hy vọng công trình của mình sẽ được công nhận và đánh giá cao ở Pháp và trên toàn thế giới. Lịch sử nước Pháp đầy ắp những thay đổi quan trọng. Khi người dân Pháp đang thích nghi với những phát triển mới, họ nhìn lại với niềm tự hào về những thành tựu của mình và hy vọng có thêm nhiều tiến bộ hơn trong tương lai.",
    practice: [
      { id: "r1", type: "truefalse", prompt: "Napoleon Bonaparte wanted to expand the size of the French Empire.", correct: "True", explanation: "Đúng. Bài đọc: Napoleon Bonaparte 'wanted to make the French Empire larger.'" },
      { id: "r2", type: "truefalse", prompt: "During the early 1800s, French people had plenty of food and felt very safe.", correct: "False", explanation: "Sai. Bài đọc: 'The French people were facing many problems, including food shortages and the worries of war.'" },
      { id: "r3", type: "truefalse", prompt: "In the 1870s, many people moved to cities because new factories were being built.", correct: "True", explanation: "Đúng. Bài đọc: 'Factories were being built, and many people moved from the countryside to cities to find work.'" },
      { id: "r4", type: "truefalse", prompt: "Artists and scientists in the early 20th century received all the support they needed from the government.", correct: "False", explanation: "Sai. Bài đọc: họ 'wished they had more help' from the government — nghĩa là chưa nhận đủ sự hỗ trợ." },
      { id: "r5", type: "mcq", prompt: "What is the main idea of the passage?", options: { A: "The rise and fall of Napoleon Bonaparte's empire.", B: "The historical changes and developments in France from the 19th to the early 20th century.", C: "The movement of workers from the countryside to French cities.", D: "The international achievements of French artists and scientists." }, correct: "B", explanation: "Bài đọc trình bày các giai đoạn thay đổi của nước Pháp từ thế kỷ 19 đến đầu thế kỷ 20 → đáp án B bao quát nhất." },
      { id: "r6", type: "mcq", prompt: "Which of the following is NOT true according to the passage?", options: { A: "France was known for its beautiful cities and important events in the 19th century.", B: "France stayed completely out of European conflicts in the early 1800s.", C: "The French government tried to improve the economy and people's lives in the 1870s.", D: "French people felt proud of what they had achieved while adapting to new changes." }, correct: "B", explanation: "Bài đọc nói ngược lại: 'France was involved in these conflicts' → câu B SAI." },
      { id: "r7", type: "fillblank", prompt: "Find the phrase in the passage that means 'tình trạng thiếu lương thực'.", accepted: ["food shortages"], correct: "food shortages", explanation: "'...including food shortages and the worries of war.' — food shortages = tình trạng thiếu lương thực." },
      { id: "r8", type: "mcq", prompt: "What did French artists and scientists hope for in the early 20th century?", options: { A: "That their work would be recognized and appreciated.", B: "That they would move to the countryside.", C: "That they would stop working altogether.", D: "That they would receive less support from the government." }, correct: "A", explanation: "Bài đọc: 'They hoped their work would be recognized and appreciated in France and around the world.'" },
      { id: "r9", type: "truefalse", prompt: "According to the passage, France's history includes many important changes.", correct: "True", explanation: "Đúng. Bài đọc: 'France's history is full of important changes.'" }
    ]
  },

  // ---------------------------------------------------------
  // PART 4 — TRANSLATION PRACTICE
  // ---------------------------------------------------------
  translation: [
    { id: "t1", en: "A long time ago, France was a country with a lot of history.", suggested: "Đã từ rất lâu, nước Pháp là một đất nước có bề dày lịch sử.", notes: "\"a lot of history\" (có bề dày lịch sử) diễn tả một đất nước có nhiều sự kiện lịch sử." },
    { id: "t2", en: "The French people were facing many problems, including food shortages and the worries of war.", suggested: "Người dân Pháp phải đối mặt với nhiều vấn đề, bao gồm tình trạng thiếu lương thực và nỗi lo về chiến tranh.", notes: "\"including + N\" dùng để liệt kê ví dụ cụ thể cho danh từ đứng trước." },
    { id: "t3", en: "Factories were being built, and many people moved from the countryside to cities to find work.", suggested: "Các nhà máy được xây dựng, và nhiều người đã chuyển từ vùng nông thôn ra thành phố để tìm việc làm.", notes: "\"were being built\" là thì quá khứ tiếp diễn ở dạng bị động (was/were being + V3)." },
    { id: "t4", en: "They hoped their work would be recognized and appreciated in France and around the world.", suggested: "Họ hy vọng công trình của mình sẽ được công nhận và đánh giá cao ở Pháp và trên toàn thế giới.", notes: "\"hope + (that) + S + would + V\" diễn tả hy vọng về một điều trong tương lai." },
    { id: "t5", en: "As people in France were adjusting to new developments, they looked back with pride at their achievements.", suggested: "Khi người dân Pháp đang thích nghi với những phát triển mới, họ nhìn lại với niềm tự hào về những thành tựu của mình.", notes: "\"As + S + were + V-ing\" diễn tả hai hành động song song trong quá khứ." }
  ],

  // ---------------------------------------------------------
  // PART 5 — SENTENCE TRANSFORMATION PRACTICE
  // ---------------------------------------------------------
  transformation: [
    {
      id: "tr1", name: "S + don't/doesn't have + N ⇄ S + wish(es) + S + had + N",
      formula: "S + don't/doesn't + have + N  →  S + wish(es) + S + had + N",
      example: { before: "My brother doesn't have a sports bike.", after: "My brother wishes he had a sports bike." },
      practice: [
        { id: "tr1p1", type: "fillblank", prompt: "My sister doesn't have a laptop. → My sister wishes she ______________ (had) a laptop.", accepted: ["had"], correct: "had", explanation: "doesn't have + N → wishes + had + N." },
        { id: "tr1p2", type: "fillblank", prompt: "Rewrite: 'We don't have enough time to visit the museum.' → We wish we ______________ (had) enough time to visit the museum.", accepted: ["had"], correct: "had", explanation: "don't have + N → wish + had + N." }
      ]
    },
    {
      id: "tr2", name: "It's a pity that + S + don't/doesn't + V ⇄ I wish + S + V(quá khứ đơn)",
      formula: "It's a pity that + S + don't/doesn't + V  →  I wish + S + V(quá khứ đơn)",
      example: { before: "It's a pity that we do not have a long summer holiday.", after: "I wish we had a long summer holiday." },
      practice: [
        { id: "tr2p1", type: "fillblank", prompt: "It's a pity that he doesn't live near the school. → I wish he ______________ (lived) near the school.", accepted: ["lived"], correct: "lived", explanation: "It's a pity that + don't/doesn't → I wish + V(quá khứ đơn)." },
        { id: "tr2p2", type: "fillblank", prompt: "Rewrite: 'It's a pity that they don't understand this tradition.' → I wish they ______________ (understood) this tradition.", accepted: ["understood"], correct: "understood", explanation: "It's a pity that + don't → I wish + V(quá khứ đơn)." }
      ]
    },
    {
      id: "tr3", name: "N/V-ing + was a common experience ⇄ S + used to + V",
      formula: "V-ing + was a common experience  →  S + used to + V",
      example: { before: "When I was young, walking barefoot was a common experience at school.", after: "I used to walk barefoot at school when I was young." },
      practice: [
        { id: "tr3p1", type: "fillblank", prompt: "Drawing water from the well was a common experience for villagers. → Villagers ______________ (used to) draw water from the well.", accepted: ["used to"], correct: "used to", explanation: "was a common experience → used to + V." },
        { id: "tr3p2", type: "fillblank", prompt: "Rewrite: 'Playing outside all day was a common experience for children in the past.' → Children ______________ (used to) play outside all day in the past.", accepted: ["used to"], correct: "used to", explanation: "was a common experience → used to + V." }
      ]
    },
    {
      id: "tr4", name: "N + was the primary way of V-ing ⇄ People used to + V",
      formula: "N + was the primary way of V-ing  →  People used to + V",
      example: { before: "Talking face to face was the primary way of communicating in the past.", after: "People used to talk face to face in the past." },
      practice: [
        { id: "tr4p1", type: "fillblank", prompt: "Trading goods was the primary way of doing business long ago. → People ______________ (used to) trade goods to do business long ago.", accepted: ["used to"], correct: "used to", explanation: "was the primary way of V-ing → People used to + V." },
        { id: "tr4p2", type: "fillblank", prompt: "Rewrite: 'Walking was the primary way of travelling between villages.' → People ______________ (used to) walk to travel between villages.", accepted: ["used to"], correct: "used to", explanation: "was the primary way of V-ing → People used to + V." }
      ]
    }
  ],

  // ---------------------------------------------------------
  // PART 6 — QUICK REVIEW (mini test, all skills)
  // ---------------------------------------------------------
  quickReview: [
    { id: "q1", cat: "Vocabulary", type: "mcq", prompt: "'Aftermath' means:", options: { A: "hậu quả", B: "lễ hội", C: "tượng đài", D: "học phí" }, correct: "A", explanation: "aftermath (n) = hậu quả, thời kỳ sau một sự kiện lớn." },
    { id: "q2", cat: "Vocabulary", type: "mcq", prompt: "'Thanks to' means:", options: { A: "nhờ có", B: "mặc dù", C: "ngoại trừ", D: "thay vì" }, correct: "A", explanation: "thanks to (phr) = nhờ có, nhờ vào." },
    { id: "q3", cat: "Vocabulary", type: "fillblank", prompt: "The government was working to ______________ (rebuild) the nation after the war.", accepted: ["rebuild"], correct: "rebuild", explanation: "rebuild (v) = xây dựng lại, tái thiết." },
    { id: "q4", cat: "Grammar", type: "mcq", prompt: "My brother doesn't have a sports bike. → My brother wishes he ______ a sports bike.", options: { A: "has", B: "had", C: "have", D: "will have" }, correct: "B", explanation: "wish + S + had + N (điều ước không có thật ở hiện tại)." },
    { id: "q5", cat: "Grammar", type: "mcq", prompt: "It's a pity that we do not have a long summer holiday. → I wish we ______ a long summer holiday.", options: { A: "have", B: "has", C: "had", D: "will have" }, correct: "C", explanation: "It's a pity that + don't → I wish + V(quá khứ đơn)." },
    { id: "q6", cat: "Grammar", type: "fillblank", prompt: "Walking barefoot was a common experience at school. → I ______________ (used to) walk barefoot at school.", accepted: ["used to"], correct: "used to", explanation: "was a common experience → used to + V." },
    { id: "q7", cat: "Grammar", type: "fillblank", prompt: "Talking face to face was the primary way of communicating in the past. → People ______________ (used to) talk face to face in the past.", accepted: ["used to"], correct: "used to", explanation: "was the primary way of V-ing → People used to + V." },
    { id: "q8", cat: "Reading", type: "truefalse", prompt: "In the 1870s, many people moved to cities because new factories were being built.", correct: "True", explanation: "Đúng theo bài đọc." },
    { id: "q9", cat: "Reading", type: "truefalse", prompt: "Artists and scientists in the early 20th century received all the support they needed from the government.", correct: "False", explanation: "Sai. Họ ước gì có thêm sự hỗ trợ, nghĩa là chưa nhận đủ." },
    { id: "q10", cat: "Reading", type: "mcq", prompt: "What is the main idea of the passage about France?", options: { A: "The historical changes and developments in France from the 19th to the early 20th century.", B: "The list of French kings and queens.", C: "The geography of the French countryside.", D: "The rules of French cuisine." }, correct: "A", explanation: "Bài đọc trình bày các giai đoạn thay đổi của nước Pháp." },
    { id: "q11", cat: "Writing", type: "fillblank", prompt: "The ______________ (develop) of the new technology took many years.", accepted: ["development"], correct: "development", explanation: "develop (v) → development (n)." },
    { id: "q12", cat: "Writing", type: "fillblank", prompt: "We should be grateful to the previous ______________ (generate) for our traditions.", accepted: ["generations"], correct: "generations", explanation: "generate (v) → generation(s) (n)." },
    { id: "q13", cat: "Writing", type: "fillblank", prompt: "There were many ______________ (culture) activities held at the school last week.", accepted: ["cultural"], correct: "cultural", explanation: "culture (n) → cultural (adj)." },
    { id: "q14", cat: "Vocabulary", type: "mcq", prompt: "Which phrase means 'duy trì truyền thống'?", options: { A: "keep up the tradition", B: "break with tradition", C: "food shortage", D: "deal with" }, correct: "A", explanation: "keep up the tradition (phr) = duy trì truyền thống." }
  ]
};
