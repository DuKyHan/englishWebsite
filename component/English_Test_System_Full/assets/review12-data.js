const REVIEW = {
  id: "test12",
  testFile: "test12.html",
  grade: "Grade 8 — Global Success",
  unit: "Unit 3: Teenagers",
  title: "Knowledge Review — Unit 3, Practice Test 2",

  // ---------------------------------------------------------
  // PART 1 — VOCABULARY REVIEW
  // ---------------------------------------------------------
  vocabulary: [
    { word: "competitive", pos: "adj", ipa: "/kəmˈpetətɪv/", meaning: "cạnh tranh", example: "Teenagers today live in a highly competitive world where success is vital.", exampleVi: "Thanh thiếu niên ngày nay sống trong một thế giới cạnh tranh cao độ, nơi thành công là điều thiết yếu." },
    { word: "addictive", pos: "adj", ipa: "/əˈdɪktɪv/", meaning: "gây nghiện", example: "Caffeine is a drug which can become addictive.", exampleVi: "Caffeine là một chất có thể gây nghiện." },
    { word: "well-being", pos: "n", ipa: "/ˌwel ˈbiːɪŋ/", meaning: "sự khỏe mạnh, hạnh phúc", example: "Regular exercise helps teenagers maintain their physical well-being.", exampleVi: "Tập thể dục thường xuyên giúp thanh thiếu niên duy trì sức khỏe thể chất." },
    { word: "effectively", pos: "adv", ipa: "/ɪˈfektɪvli/", meaning: "một cách hiệu quả", example: "To avoid stress, you need to manage your study time effectively.", exampleVi: "Để tránh căng thẳng, bạn cần quản lý thời gian học tập một cách hiệu quả." },
    { word: "hysterical", pos: "adj", ipa: "/hɪˈsterɪkl/", meaning: "kích động, mất kiểm soát", example: "When things get beyond your control, don't panic or get hysterical.", exampleVi: "Khi mọi thứ vượt ngoài tầm kiểm soát, đừng hoảng loạn hay kích động." },
    { word: "cyberbully", pos: "v", ipa: "/ˈsaɪbərbʊli/", meaning: "bắt nạt qua mạng", example: "The older boys used to cyberbully younger students on social media.", exampleVi: "Các cậu bé lớn tuổi hơn thường bắt nạt các học sinh nhỏ tuổi hơn trên mạng xã hội." },
    { word: "bully", pos: "v", ipa: "/ˈbʊli/", meaning: "bắt nạt", example: "Some students bully their classmates.", exampleVi: "Một số học sinh bắt nạt bạn cùng lớp." },
    { word: "caffeine", pos: "n", ipa: "/ˈkæfiːn/", meaning: "caffein (chất kích thích trong cà phê)", example: "Everyone knows that caffeine, in the form of coffee or soft drinks, keeps you awake and alert.", exampleVi: "Ai cũng biết caffein, dưới dạng cà phê hay nước ngọt, giúp bạn tỉnh táo." },
    { word: "alert", pos: "adj", ipa: "/əˈlɜːrt/", meaning: "tỉnh táo, cảnh giác", example: "Caffeine keeps you awake and alert.", exampleVi: "Caffein giúp bạn thức và tỉnh táo." },
    { word: "release", pos: "n", ipa: "/rɪˈliːs/", meaning: "sự giải tỏa", example: "Physical exercise is a good release for stress.", exampleVi: "Tập thể dục là một cách giải tỏa căng thẳng tốt." },
    { word: "balance", pos: "v", ipa: "/ˈbæləns/", meaning: "cân bằng", example: "It becomes harder and harder to balance homework, parties, and friends.", exampleVi: "Ngày càng khó cân bằng giữa bài tập, tiệc tùng và bạn bè." },
    { word: "overwhelming", pos: "adj", ipa: "/ˌoʊvərˈwelmɪŋ/", meaning: "áp đảo, quá tải", example: "The overwhelming amount of information to absorb can be difficult.", exampleVi: "Lượng thông tin quá tải cần tiếp thu có thể gây khó khăn." },
    { word: "absorb", pos: "v", ipa: "/əbˈzɔːrb/", meaning: "tiếp thu, hấp thụ", example: "The amount of information to absorb and retain can be very difficult.", exampleVi: "Lượng thông tin cần tiếp thu và ghi nhớ có thể rất khó khăn." },
    { word: "retain", pos: "v", ipa: "/rɪˈteɪn/", meaning: "ghi nhớ, giữ lại", example: "It can be difficult to absorb and retain a lot of information.", exampleVi: "Có thể khó khăn để tiếp thu và ghi nhớ nhiều thông tin." },
    { word: "prioritize", pos: "v", ipa: "/praɪˈɔːrətaɪz/", meaning: "ưu tiên", example: "Practicing self-care by prioritizing enough sleep helps maintain a productive mindset.", exampleVi: "Thực hành tự chăm sóc bằng cách ưu tiên ngủ đủ giấc giúp duy trì tư duy hiệu quả." },
    { word: "alleviate", pos: "v", ipa: "/əˈliːvieɪt/", meaning: "làm giảm bớt, xoa dịu", example: "Seeking support from peers can also alleviate pressure.", exampleVi: "Tìm kiếm sự hỗ trợ từ bạn bè cũng có thể làm giảm bớt áp lực." },
    { word: "mindset", pos: "n", ipa: "/ˈmaɪndset/", meaning: "tư duy, lối suy nghĩ", example: "Enough sleep helps you maintain a productive mindset.", exampleVi: "Ngủ đủ giấc giúp bạn duy trì một lối tư duy hiệu quả." },
    { word: "realistic", pos: "adj", ipa: "/ˌriːəˈlɪstɪk/", meaning: "thực tế", example: "Creating a realistic study schedule helps reduce anxiety.", exampleVi: "Lập một thời gian biểu học tập thực tế giúp giảm bớt lo âu." }
  ],

  vocabPractice: {
    mcq: [
      { id: "vp1", prompt: "Choose the word that means 'gây nghiện':", options: { A: "addictive", B: "competitive", C: "realistic", D: "alert" }, correct: "A", explanation: "<b>addictive</b> (adj) = gây nghiện." },
      { id: "vp2", prompt: "Choose the word that means 'tư duy, lối suy nghĩ':", options: { A: "release", B: "mindset", C: "caffeine", D: "balance" }, correct: "B", explanation: "<b>mindset</b> (n) = tư duy, lối suy nghĩ." },
      { id: "vp3", prompt: "Choose the best word: \"Physical exercise is a good ______ for stress.\"", options: { A: "release", B: "caffeine", C: "mindset", D: "balance" }, correct: "A", explanation: "\"a good <b>release</b> for stress\" (cách giải tỏa căng thẳng tốt)." },
      { id: "vp4", prompt: "Choose the word that means 'bắt nạt qua mạng':", options: { A: "bully", B: "cyberbully", C: "alert", D: "prioritize" }, correct: "B", explanation: "<b>cyberbully</b> (v) = bắt nạt qua mạng." },
      { id: "vp5", prompt: "\"You need to manage your study time ______.\" (hiệu quả)", options: { A: "effectively", B: "effective", C: "effect", D: "effects" }, correct: "A", explanation: "Cần trạng từ bổ nghĩa cho \"manage\" → <b>effectively</b> (adv)." },
      { id: "vp6", prompt: "Choose the word that means 'làm giảm bớt, xoa dịu':", options: { A: "absorb", B: "retain", C: "alleviate", D: "balance" }, correct: "C", explanation: "<b>alleviate</b> (v) = làm giảm bớt, xoa dịu." }
    ],
    fillblank: [
      { id: "vf1", prompt: "Caffeine keeps you awake and ______________ (tỉnh táo).", accepted: ["alert"], correct: "alert", explanation: "<b>alert</b> (adj) = tỉnh táo, cảnh giác." },
      { id: "vf2", prompt: "It becomes harder and harder to ______________ (cân bằng) homework, parties, and friends.", accepted: ["balance"], correct: "balance", explanation: "<b>balance</b> (v) = cân bằng." },
      { id: "vf3", prompt: "The ______________ (áp đảo) amount of information can be difficult to absorb.", accepted: ["overwhelming"], correct: "overwhelming", explanation: "<b>overwhelming</b> (adj) = áp đảo, quá tải." },
      { id: "vf4", prompt: "Seeking support from peers can ______________ (làm giảm bớt) pressure.", accepted: ["alleviate"], correct: "alleviate", explanation: "<b>alleviate</b> (v) = làm giảm bớt, xoa dịu." },
      { id: "vf5", prompt: "It's important to ______________ (ưu tiên) enough sleep every night.", accepted: ["prioritize"], correct: "prioritize", explanation: "<b>prioritize</b> (v) = ưu tiên." },
      { id: "vf6", prompt: "Creating a ______________ (thực tế) study schedule reduces anxiety.", accepted: ["realistic"], correct: "realistic", explanation: "<b>realistic</b> (adj) = thực tế." }
    ],
    matching: {
      left: ["competitive", "hysterical", "caffeine", "absorb", "retain", "mindset"],
      right: ["cạnh tranh", "kích động, mất kiểm soát", "caffein", "tiếp thu, hấp thụ", "ghi nhớ, giữ lại", "tư duy, lối suy nghĩ"],
      correctMap: [0, 1, 2, 3, 4, 5]
    },
    chooseWord: [
      { id: "cw1", prompt: "\"Teenagers today live in a highly ______ world.\" (COMPETE)", options: { A: "compete", B: "competition", C: "competitive", D: "competitively" }, correct: "C", explanation: "Cần tính từ trước \"world\" → compete (v) → <b>competitive</b> (adj)." },
      { id: "cw2", prompt: "\"Drinking too much coffee can be very ______.\" (ADDICT)", options: { A: "addict", B: "addicted", C: "addictive", D: "addiction" }, correct: "C", explanation: "Cần tính từ sau \"be\" → addict (n/v) → <b>addictive</b> (adj)." },
      { id: "cw3", prompt: "\"Don't panic or get ______.\" (HYSTERIA)", options: { A: "hysteria", B: "hysterically", C: "hysterical", D: "hysterics" }, correct: "C", explanation: "Cần tính từ sau \"get\" → hysteria (n) → <b>hysterical</b> (adj)." }
    ],
    wordMeaning: [
      { id: "wm1", prompt: "What does 'alleviate' mean?", options: { A: "làm giảm bớt, xoa dịu", B: "làm tăng thêm", C: "bỏ qua", D: "gây ra" }, correct: "A", explanation: "alleviate (v) = làm giảm bớt, xoa dịu." },
      { id: "wm2", prompt: "What does 'overwhelming' mean?", options: { A: "nhỏ bé, không đáng kể", B: "áp đảo, quá tải", C: "dễ dàng", D: "thú vị" }, correct: "B", explanation: "overwhelming (adj) = áp đảo, quá tải." },
      { id: "wm3", prompt: "What does 'realistic' mean?", options: { A: "thực tế", B: "tưởng tượng", C: "lý tưởng", D: "mơ hồ" }, correct: "A", explanation: "realistic (adj) = thực tế." }
    ],
    wordForm: [
      { id: "wf1", prompt: "Many young people worry about letting down their parents and (PEER) ______________.", accepted: ["peers"], correct: "peers", explanation: "Cần danh từ số nhiều → peer (n) → <b>peers</b>." },
      { id: "wf2", prompt: "Regular exercise helps maintain physical (WELL) ______________.", accepted: ["well-being", "wellbeing"], correct: "well-being", explanation: "Cần danh từ → well (adv) → <b>well-being</b> (n)." },
      { id: "wf3", prompt: "You need to manage your time (EFFECT) ______________.", accepted: ["effectively"], correct: "effectively", explanation: "Cần trạng từ → effect (n) → <b>effectively</b> (adv)." }
    ]
  },

  // ---------------------------------------------------------
  // PART 2 — GRAMMAR REVIEW & PRACTICE
  // ---------------------------------------------------------
  grammar: [
    {
      id: "g1", name: "Although + mệnh đề A, mệnh đề B ⇄ mệnh đề A, but mệnh đề B",
      usage: "\"Although + mệnh đề A, mệnh đề B\" (Mặc dù A, B) có thể diễn đạt lại bằng cách nối hai mệnh đề độc lập bằng liên từ \"but\" (nhưng) — cùng diễn tả sự tương phản.",
      formulas: [
        "Although + S1 + V1, S2 + V2.  →  S1 + V1, but + S2 + V2.",
        "Although teens don't know how to avoid bullies, they don't want to tell their teachers. → Teens don't know how to avoid bullies, but they don't want to tell their teachers."
      ],
      signals: ["Although", "but"],
      examples: [
        { en: "Although teens don't know how to avoid bullies, they don't want to tell their teachers.", vi: "Mặc dù thanh thiếu niên không biết cách tránh kẻ bắt nạt, họ không muốn kể cho giáo viên." },
        { en: "Teens don't know how to avoid bullies, but they don't want to tell their teachers.", vi: "Thanh thiếu niên không biết cách tránh kẻ bắt nạt, nhưng họ không muốn kể cho giáo viên." }
      ],
      mistakes: [
        { wrong: "Although teens don't know how to avoid bullies, but they don't want to tell.", right: "Teens don't know how to avoid bullies, but they don't want to tell." }
      ],
      practice: {
        level1: [
          { id: "g1l1a", type: "fillblank", prompt: "Although Nam was tired, he kept studying. → Nam was tired, ______________ (but) he kept studying.", accepted: ["but"], correct: "but", explanation: "Although A, B → A, but B." }
        ],
        level2: [
          { id: "g1l2a", type: "fillblank", prompt: "Rewrite: 'Although she felt scared, she reported the bully.' → She felt scared, ______________ (but) she reported the bully.", accepted: ["but"], correct: "but", explanation: "Although A, B → A, but B." }
        ],
        level3: [
          { id: "g1l3a", type: "fillblank", prompt: "Rewrite so it keeps the same meaning: 'Although he was stressed, he passed the exam.' → ______________ (He was stressed, but he passed the exam).", accepted: ["he was stressed, but he passed the exam"], correct: "He was stressed, but he passed the exam.", explanation: "Although A, B → A, but B." }
        ]
      }
    },
    {
      id: "g2", name: "If you don't V, ... ⇄ You should stop V-ing, or ...",
      usage: "Câu điều kiện cảnh báo \"If you don't stop V-ing, you will...\" có thể diễn đạt lại bằng câu mệnh lệnh khuyên nhủ \"You should stop V-ing, or you will...\" — cùng cảnh báo hậu quả.",
      formulas: [
        "If + S + don't stop + V-ing, + S + will + V.  →  S + should stop + V-ing, + or + S + will + V.",
        "If you don't stop spending so much time playing video games, you will get addicted. → You should stop spending so much time playing video games, or you will get addicted."
      ],
      signals: ["If you don't stop V-ing", "should stop V-ing, or"],
      examples: [
        { en: "If you don't stop spending so much time playing video games, you will get addicted.", vi: "Nếu bạn không ngừng dành quá nhiều thời gian chơi game, bạn sẽ bị nghiện." },
        { en: "You should stop spending so much time playing video games, or you will get addicted.", vi: "Bạn nên ngừng dành quá nhiều thời gian chơi game, nếu không bạn sẽ bị nghiện." }
      ],
      mistakes: [
        { wrong: "You should stop to play video games, or you will get addicted.", right: "You should stop playing video games, or you will get addicted." }
      ],
      practice: {
        level1: [
          { id: "g2l1a", type: "fillblank", prompt: "If you don't stop eating junk food, you will get sick. → You should stop ______________ (eat) junk food, or you will get sick.", accepted: ["eating"], correct: "eating", explanation: "If you don't stop V-ing → You should stop V-ing, or." }
        ],
        level2: [
          { id: "g2l2a", type: "fillblank", prompt: "Rewrite: 'If you don't stop staying up late, you will feel exhausted.' → You should stop ______________ (stay) up late, or you will feel exhausted.", accepted: ["staying"], correct: "staying", explanation: "If you don't stop V-ing → You should stop V-ing, or." }
        ],
        level3: [
          { id: "g2l3a", type: "fillblank", prompt: "Rewrite so it keeps the same meaning: 'If you don't stop ignoring your homework, you will fail the exam.' → ______________ (You should stop ignoring your homework, or you will fail the exam).", accepted: ["you should stop ignoring your homework, or you will fail the exam"], correct: "You should stop ignoring your homework, or you will fail the exam.", explanation: "If you don't stop V-ing → You should stop V-ing, or." }
        ]
      }
    },
    {
      id: "g3", name: "It is + adj + for sb + to V ⇄ V-ing ... is + adj + for sb",
      usage: "\"It is + adj + for sb + to V\" có thể diễn đạt lại bằng cách đưa danh động từ (V-ing) lên làm chủ ngữ của câu: \"V-ing ... is + adj + for sb\" — cùng nghĩa.",
      formulas: [
        "It is + adj + for sb + to V.  →  V-ing ... is + adj + for sb.",
        "It is very important for teenagers to develop essential social skills. → Developing essential social skills is very important for teenagers."
      ],
      signals: ["It is + adj + for sb + to V", "V-ing ... is + adj + for sb"],
      examples: [
        { en: "It is very important for teenagers to develop essential social skills.", vi: "Việc phát triển các kỹ năng xã hội thiết yếu rất quan trọng đối với thanh thiếu niên." },
        { en: "Developing essential social skills is very important for teenagers.", vi: "Phát triển các kỹ năng xã hội thiết yếu rất quan trọng đối với thanh thiếu niên." }
      ],
      mistakes: [
        { wrong: "Develop essential social skills is very important.", right: "Developing essential social skills is very important." }
      ],
      practice: {
        level1: [
          { id: "g3l1a", type: "fillblank", prompt: "It is necessary for students to manage their time well. → ______________ (Managing) their time well is necessary for students.", accepted: ["Managing"], correct: "Managing", explanation: "It is + adj + for sb + to V → V-ing ... is + adj + for sb." }
        ],
        level2: [
          { id: "g3l2a", type: "fillblank", prompt: "Rewrite: 'It is helpful for teenagers to talk about their problems.' → ______________ (Talking) about their problems is helpful for teenagers.", accepted: ["Talking"], correct: "Talking", explanation: "It is + adj + for sb + to V → V-ing ... is + adj + for sb." }
        ],
        level3: [
          { id: "g3l3a", type: "fillblank", prompt: "Rewrite so it keeps the same meaning: 'It is essential for teens to get enough sleep.' → ______________ (Getting enough sleep is essential for teens).", accepted: ["getting enough sleep is essential for teens"], correct: "Getting enough sleep is essential for teens.", explanation: "It is + adj + for sb + to V → V-ing ... is + adj + for sb." }
        ]
      }
    },
    {
      id: "g4", name: "Chủ động ⇄ Bị động với \"ought to\"",
      usage: "Câu chủ động với động từ khuyết thiếu \"ought to\" có thể chuyển sang câu bị động bằng cấu trúc \"S (tân ngữ cũ) + ought to + be + V3/ed + (by + O)\" — giữ nguyên nghĩa nhưng đổi trọng tâm câu.",
      formulas: [
        "S1 + ought to + V + O (+ by S1).  →  O + ought to + be + V3/ed (+ by S1).",
        "Parents ought to listen to their children more carefully. → Children ought to be listened to more carefully by their parents."
      ],
      signals: ["ought to + V (chủ động)", "ought to + be + V3 (bị động)"],
      examples: [
        { en: "Parents ought to listen to their children more carefully.", vi: "Cha mẹ nên lắng nghe con cái cẩn thận hơn." },
        { en: "Children ought to be listened to more carefully by their parents.", vi: "Con cái nên được cha mẹ lắng nghe cẩn thận hơn." }
      ],
      mistakes: [
        { wrong: "Children ought to listened to by their parents.", right: "Children ought to be listened to by their parents." }
      ],
      practice: {
        level1: [
          { id: "g4l1a", type: "fillblank", prompt: "Teachers ought to encourage students more often. → Students ought to ______________ (be) encouraged more often by teachers.", accepted: ["be"], correct: "be", explanation: "Chủ động → bị động: ought to + be + V3." }
        ],
        level2: [
          { id: "g4l2a", type: "fillblank", prompt: "Rewrite: 'Schools ought to support stressed students.' → Stressed students ought to ______________ (be supported) by schools.", accepted: ["be supported"], correct: "be supported", explanation: "Chủ động → bị động: ought to + be + V3." }
        ],
        level3: [
          { id: "g4l3a", type: "fillblank", prompt: "Rewrite so it keeps the same meaning: 'Parents ought to praise their children's efforts.' → ______________ (Children's efforts ought to be praised by their parents).", accepted: ["children's efforts ought to be praised by their parents"], correct: "Children's efforts ought to be praised by their parents.", explanation: "Chủ động → bị động: ought to + be + V3." }
        ]
      }
    },
    {
      id: "g5", name: "ought to (động từ khuyết thiếu chỉ lời khuyên)",
      usage: "\"ought to + V\" mang nghĩa tương tự \"should\" (nên làm gì), thường dùng để đưa ra lời khuyên hoặc nhận định về điều đúng đắn nên làm.",
      formulas: [
        "S + ought to + V (nguyên mẫu không \"to\" sau \"ought\").",
        "S + ought not to + V (phủ định)."
      ],
      signals: ["ought to", "ought not to"],
      examples: [
        { en: "Parents ought to listen to their children more carefully.", vi: "Cha mẹ nên lắng nghe con cái cẩn thận hơn." },
        { en: "Teenagers ought not to ignore their stress signals.", vi: "Thanh thiếu niên không nên phớt lờ những dấu hiệu căng thẳng của mình." }
      ],
      mistakes: [
        { wrong: "Parents ought listen to their children.", right: "Parents ought to listen to their children." }
      ],
      practice: {
        level1: [
          { id: "g5l1a", type: "fillblank", prompt: "You ______________ (ought) to get enough sleep every night.", accepted: ["ought"], correct: "ought", explanation: "ought to + V (nên làm gì)." }
        ],
        level2: [
          { id: "g5l2a", type: "fillblank", prompt: "Teenagers ought ______________ (to) manage their time effectively.", accepted: ["to"], correct: "to", explanation: "ought + to + V." }
        ],
        level3: [
          { id: "g5l3a", type: "fillblank", prompt: "Students ought ______________ (not) to ignore their teachers' advice.", accepted: ["not"], correct: "not", explanation: "Phủ định: ought not to + V." }
        ]
      }
    }
  ],

  // ---------------------------------------------------------
  // PART 3 — READING PRACTICE
  // ---------------------------------------------------------
  reading: {
    passage: "<b>TEEN STRESS</b><br><br>Teenagers today live in a very <mark data-w=\"competitive\">competitive</mark> world. It is more important than ever to succeed at school if you hope to have a chance in the job market afterwards. It's no wonder that many young people worry about letting down their parents, their peers and themselves. To try to please everyone, they take on too many tasks until it becomes harder and harder to balance homework assignments, parties, sports activities, and friends. The result is that young people suffer from stress.<br><br>There are different ways of dealing with stress. Everyone knows that <mark data-w=\"caffeine\">caffeine</mark>, in the form of coffee or soft drinks, keeps you awake and <mark data-w=\"alert\">alert</mark>. But caffeine is a drug which can become <mark data-w=\"addictive\">addictive</mark>. In the end, like other drugs, caffeine only leads to more stress. There are better ways to deal with stress: physical exercise is a good <mark data-w=\"release\">release</mark> for stress, because it increases certain chemicals in the brain which calm you down. You have to get enough sleep to avoid stress and to stay healthy and full of energy.<br><br>Another way to avoid stress is to manage your time effectively. It is better to do a few tasks really well, than lots of tasks badly. Know your limits and try not to take on too much. Finally, if it all gets beyond your control, don't panic or get <mark data-w=\"hysterical\">hysterical</mark>. Find the time to sit down quietly and breathe deeply for ten to twenty minutes. Do this regularly, and it will help you calm down and put things into perspective.",
    vocabInContext: {
      competitive: "cạnh tranh",
      caffeine: "caffein",
      alert: "tỉnh táo, cảnh giác",
      addictive: "gây nghiện",
      release: "sự giải tỏa",
      hysterical: "kích động, mất kiểm soát"
    },
    translation: "<b>CĂNG THẲNG Ở THANH THIẾU NIÊN</b><br><br>Thanh thiếu niên ngày nay sống trong một thế giới rất cạnh tranh. Việc thành công ở trường học quan trọng hơn bao giờ hết nếu bạn hy vọng có cơ hội trên thị trường việc làm sau này. Không có gì lạ khi nhiều bạn trẻ lo lắng về việc làm cha mẹ, bạn bè và chính mình thất vọng. Để cố làm hài lòng mọi người, họ nhận quá nhiều việc đến mức ngày càng khó cân bằng giữa bài tập, tiệc tùng, hoạt động thể thao và bạn bè. Kết quả là các bạn trẻ bị căng thẳng.<br><br>Có nhiều cách khác nhau để đối phó với căng thẳng. Ai cũng biết caffein, dưới dạng cà phê hay nước ngọt, giúp bạn thức và tỉnh táo. Nhưng caffein là một chất có thể gây nghiện. Cuối cùng, giống như các chất khác, caffein chỉ dẫn đến nhiều căng thẳng hơn. Có những cách tốt hơn để đối phó với căng thẳng: tập thể dục là một cách giải tỏa căng thẳng tốt, vì nó làm tăng một số chất hóa học trong não giúp bạn bình tĩnh lại. Bạn cần ngủ đủ giấc để tránh căng thẳng và luôn khỏe mạnh, tràn đầy năng lượng.<br><br>Một cách khác để tránh căng thẳng là quản lý thời gian hiệu quả. Tốt hơn là làm tốt một vài việc còn hơn làm nhiều việc mà tệ. Hãy biết giới hạn của mình và cố gắng không nhận quá nhiều việc. Cuối cùng, nếu mọi thứ vượt ngoài tầm kiểm soát, đừng hoảng loạn hay kích động. Hãy dành thời gian ngồi yên tĩnh và hít thở sâu trong mười đến hai mươi phút. Làm điều này thường xuyên sẽ giúp bạn bình tĩnh lại và nhìn nhận mọi việc đúng đắn hơn.",
    practice: [
      { id: "r1", type: "truefalse", prompt: "School success is less important nowadays because there are many jobs available.", correct: "False", explanation: "Sai. Bài đọc: 'It is more important than ever to succeed at school.'" },
      { id: "r2", type: "truefalse", prompt: "Doing physical exercise helps reduce stress because of the chemicals it produces in the brain.", correct: "True", explanation: "Bài đọc: 'physical exercise is a good release for stress, because it increases certain chemicals in the brain.'" },
      { id: "r3", type: "truefalse", prompt: "Drinking coffee or soft drinks is the best long-term solution to cure teenager stress.", correct: "False", explanation: "Sai. Bài đọc: 'caffeine only leads to more stress' trong dài hạn." },
      { id: "r4", type: "truefalse", prompt: "Sitting quietly and breathing deeply can help you feel calmer when you lose control.", correct: "True", explanation: "Bài đọc: 'Find the time to sit down quietly and breathe deeply... it will help you calm down.'" },
      { id: "r5", type: "mcq", prompt: "What is the main idea of the passage?", options: { A: "The reasons why teenagers suffer from stress and the ways they can manage it.", B: "The dangerous effects of caffeine on teenagers' school performance.", C: "How to find a good job in a highly competitive world.", D: "The importance of balancing homework and parties." }, correct: "A", explanation: "Bài đọc giải thích nguyên nhân gây stress và các cách quản lý nó." },
      { id: "r6", type: "mcq", prompt: "Which of the following is NOT true according to the passage?", options: { A: "It is recommended to complete a large number of tasks at the same time to save time.", B: "Teenagers often worry about disappointing their parents, friends, and themselves.", C: "Lack of sleep can prevent teenagers from staying healthy and energetic.", D: "Caffeine can make people become addicted and cause more stress in the end." }, correct: "A", explanation: "Bài đọc khuyên ngược lại: nên làm ít việc thật tốt hơn là ôm đồm nhiều việc." },
      { id: "r7", type: "fillblank", prompt: "Find the word in the passage that means 'gây nghiện' (adj).", accepted: ["addictive"], correct: "addictive", explanation: "'caffeine is a drug which can become addictive' — addictive (adj) = gây nghiện." },
      { id: "r8", type: "mcq", prompt: "According to the passage, what should you do if things get beyond your control?", options: { A: "Sit down quietly and breathe deeply.", B: "Drink more coffee to stay alert.", C: "Take on even more tasks to finish faster.", D: "Panic and get hysterical." }, correct: "A", explanation: "Bài đọc: 'don't panic or get hysterical. Find the time to sit down quietly and breathe deeply.'" },
      { id: "r9", type: "truefalse", prompt: "According to the passage, teenagers today live in a world with very little competition.", correct: "False", explanation: "Sai. Bài đọc: 'Teenagers today live in a very competitive world.'" }
    ]
  },

  // ---------------------------------------------------------
  // PART 4 — TRANSLATION PRACTICE
  // ---------------------------------------------------------
  translation: [
    { id: "t1", en: "Teenagers today live in a very competitive world.", suggested: "Thanh thiếu niên ngày nay sống trong một thế giới rất cạnh tranh.", notes: "Tính từ 'competitive' (cạnh tranh) bổ nghĩa cho 'world'." },
    { id: "t2", en: "It's no wonder that many young people worry about letting down their parents, their peers and themselves.", suggested: "Không có gì lạ khi nhiều bạn trẻ lo lắng về việc làm cha mẹ, bạn bè và chính mình thất vọng.", notes: "Cụm 'It's no wonder that...' (không có gì lạ khi...)." },
    { id: "t3", en: "Caffeine is a drug which can become addictive.", suggested: "Caffein là một chất có thể gây nghiện.", notes: "Mệnh đề quan hệ 'which can become addictive' bổ nghĩa cho 'a drug'." },
    { id: "t4", en: "It is better to do a few tasks really well, than lots of tasks badly.", suggested: "Tốt hơn là làm tốt một vài việc còn hơn làm nhiều việc mà tệ.", notes: "Cấu trúc so sánh 'It is better to V1 ... than to V2 ...'" },
    { id: "t5", en: "Do this regularly, and it will help you calm down and put things into perspective.", suggested: "Hãy làm điều này thường xuyên, và nó sẽ giúp bạn bình tĩnh lại và nhìn nhận mọi việc đúng đắn hơn.", notes: "Cấu trúc mệnh lệnh + 'and' + kết quả." }
  ],

  // ---------------------------------------------------------
  // PART 5 — SENTENCE TRANSFORMATION PRACTICE
  // ---------------------------------------------------------
  transformation: [
    {
      id: "tr1", name: "Although + mệnh đề A, mệnh đề B ⇄ mệnh đề A, but mệnh đề B",
      formula: "Although + S1 + V1, S2 + V2  →  S1 + V1, but S2 + V2",
      example: { before: "Although teens don't know how to avoid bullies, they don't want to tell their teachers.", after: "Teens don't know how to avoid bullies, but they don't want to tell their teachers." },
      practice: [
        { id: "tr1p1", type: "fillblank", prompt: "Although Lan felt nervous, she gave a great presentation. → Lan felt nervous, ______________ (but) she gave a great presentation.", accepted: ["but"], correct: "but", explanation: "Although A, B → A, but B." },
        { id: "tr1p2", type: "fillblank", prompt: "Rewrite: 'Although he was busy, he helped his friend.' → He was busy, ______________ (but) he helped his friend.", accepted: ["but"], correct: "but", explanation: "Although A, B → A, but B." }
      ]
    },
    {
      id: "tr2", name: "If you don't stop V-ing ⇄ You should stop V-ing, or",
      formula: "If S don't stop V-ing, S will V  →  S should stop V-ing, or S will V",
      example: { before: "If you don't stop spending so much time playing video games, you will get addicted.", after: "You should stop spending so much time playing video games, or you will get addicted." },
      practice: [
        { id: "tr2p1", type: "fillblank", prompt: "If you don't stop skipping meals, you will get sick. → You should stop ______________ (skip) meals, or you will get sick.", accepted: ["skipping"], correct: "skipping", explanation: "If you don't stop V-ing → You should stop V-ing, or." },
        { id: "tr2p2", type: "fillblank", prompt: "Rewrite: 'If you don't stop procrastinating, you will fail.' → You should stop ______________ (procrastinate), or you will fail.", accepted: ["procrastinating"], correct: "procrastinating", explanation: "If you don't stop V-ing → You should stop V-ing, or." }
      ]
    },
    {
      id: "tr3", name: "It is + adj + for sb + to V ⇄ V-ing ... is + adj + for sb",
      formula: "It is + adj + for sb + to V  →  V-ing ... is + adj + for sb",
      example: { before: "It is very important for teenagers to develop essential social skills.", after: "Developing essential social skills is very important for teenagers." },
      practice: [
        { id: "tr3p1", type: "fillblank", prompt: "It is essential for students to get enough sleep. → ______________ (Getting) enough sleep is essential for students.", accepted: ["Getting"], correct: "Getting", explanation: "It is + adj + for sb + to V → V-ing ... is + adj + for sb." },
        { id: "tr3p2", type: "fillblank", prompt: "Rewrite: 'It is useful for teens to manage their time well.' → ______________ (Managing) their time well is useful for teens.", accepted: ["Managing"], correct: "Managing", explanation: "It is + adj + for sb + to V → V-ing ... is + adj + for sb." }
      ]
    },
    {
      id: "tr4", name: "Chủ động ⇄ Bị động với ought to",
      formula: "S1 + ought to + V + O  →  O + ought to + be + V3/ed (+ by S1)",
      example: { before: "Parents ought to listen to their children more carefully.", after: "Children ought to be listened to more carefully by their parents." },
      practice: [
        { id: "tr4p1", type: "fillblank", prompt: "Teachers ought to praise hard-working students. → Hard-working students ought to ______________ (be praised) by teachers.", accepted: ["be praised"], correct: "be praised", explanation: "Chủ động → bị động: ought to + be + V3." },
        { id: "tr4p2", type: "fillblank", prompt: "Rewrite: 'Schools ought to support stressed teenagers.' → Stressed teenagers ought to ______________ (be supported) by schools.", accepted: ["be supported"], correct: "be supported", explanation: "Chủ động → bị động: ought to + be + V3." }
      ]
    }
  ],

  // ---------------------------------------------------------
  // PART 6 — QUICK REVIEW (mini test, all skills)
  // ---------------------------------------------------------
  quickReview: [
    { id: "q1", cat: "Vocabulary", type: "mcq", prompt: "'Addictive' means:", options: { A: "gây nghiện", B: "tỉnh táo", C: "thực tế", D: "cạnh tranh" }, correct: "A", explanation: "addictive (adj) = gây nghiện." },
    { id: "q2", cat: "Vocabulary", type: "mcq", prompt: "'Alleviate' means:", options: { A: "làm tăng thêm", B: "làm giảm bớt, xoa dịu", C: "bỏ qua", D: "gây ra" }, correct: "B", explanation: "alleviate (v) = làm giảm bớt, xoa dịu." },
    { id: "q3", cat: "Vocabulary", type: "fillblank", prompt: "Physical exercise is a good ______________ (giải tỏa) for stress.", accepted: ["release"], correct: "release", explanation: "release (n) = sự giải tỏa." },
    { id: "q4", cat: "Grammar", type: "mcq", prompt: "Although teens don't know how to avoid bullies, they don't want to tell. → Teens don't know how to avoid bullies, ______ they don't want to tell.", options: { A: "but", B: "so", C: "and", D: "or" }, correct: "A", explanation: "Although A, B → A, but B." },
    { id: "q5", cat: "Grammar", type: "mcq", prompt: "If you don't stop playing games, you will get addicted. → You should stop ______ games, or you will get addicted.", options: { A: "play", B: "playing", C: "to play", D: "played" }, correct: "B", explanation: "should stop V-ing." },
    { id: "q6", cat: "Grammar", type: "fillblank", prompt: "It is important for teens to develop social skills. → ______________ (Develop) social skills is important for teens.", accepted: ["Developing"], correct: "Developing", explanation: "V-ing làm chủ ngữ." },
    { id: "q7", cat: "Grammar", type: "fillblank", prompt: "Parents ought to listen to their children. → Children ought to ______________ (be) listened to by their parents.", accepted: ["be"], correct: "be", explanation: "Chủ động → bị động với ought to." },
    { id: "q8", cat: "Reading", type: "truefalse", prompt: "School success is less important nowadays because there are many jobs available.", correct: "False", explanation: "Sai. Bài đọc nói thành công ở trường quan trọng hơn bao giờ hết." },
    { id: "q9", cat: "Reading", type: "truefalse", prompt: "Drinking coffee or soft drinks is the best long-term solution to cure teenager stress.", correct: "False", explanation: "Sai. Bài đọc nói caffein chỉ dẫn đến nhiều căng thẳng hơn." },
    { id: "q10", cat: "Reading", type: "mcq", prompt: "What is the main idea of the Teen Stress passage?", options: { A: "The reasons why teenagers suffer from stress and the ways they can manage it.", B: "The benefits of drinking coffee for teenagers.", C: "How to become successful in a competitive job market.", D: "The history of stress research." }, correct: "A", explanation: "Bài đọc giải thích nguyên nhân gây stress và cách quản lý nó." },
    { id: "q11", cat: "Writing", type: "fillblank", prompt: "If you don't stop spending time on games, you will get addicted. → You should stop spending time on games, ______________ you will get addicted.", accepted: ["or"], correct: "or", explanation: "should stop V-ing, or + kết quả." },
    { id: "q12", cat: "Writing", type: "fillblank", prompt: "Regular exercise helps teenagers maintain their physical ______________ (well).", accepted: ["well-being"], correct: "well-being", explanation: "well (adv) → well-being (n)." },
    { id: "q13", cat: "Writing", type: "fillblank", prompt: "Parents ought to listen to their children more carefully. → Children ought to be listened to more carefully ______________ their parents.", accepted: ["by"], correct: "by", explanation: "Bị động: ... ought to be V3 + by + tác nhân." },
    { id: "q14", cat: "Vocabulary", type: "mcq", prompt: "Everyone knows that ______ keeps you awake and alert.", options: { A: "caffeine", B: "mindset", C: "release", D: "balance" }, correct: "A", explanation: "caffeine (n) = caffein, chất giúp tỉnh táo." }
  ]
};
