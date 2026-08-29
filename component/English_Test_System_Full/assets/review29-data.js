const REVIEW = {
  id: "test29",
  testFile: "test29.html",
  grade: "Grade 6 — Global Success",
  unit: "Unit 3: My friends",
  title: "Knowledge Review — Unit 3, Practice Test 1",

  // ---------------------------------------------------------
  // PART 1 — VOCABULARY REVIEW
  // ---------------------------------------------------------
  vocabulary: [
    { word: "patient", pos: "adj", ipa: "/ˈpeɪʃnt/", meaning: "kiên nhẫn", example: "Tom can wait hours for his friends without getting angry. He is a very patient boy.", exampleVi: "Tom có thể chờ bạn hàng giờ mà không hề tức giận. Cậu ấy là một cậu bé rất kiên nhẫn." },
    { word: "careful", pos: "adj", ipa: "/ˈkeəfl/", meaning: "cẩn thận", example: "Please be careful when you have to use fire to cook.", exampleVi: "Hãy cẩn thận khi con phải dùng lửa để nấu ăn." },
    { word: "care", pos: "n", ipa: "/keər/", meaning: "sự chăm sóc", example: "Some people were badly injured and needed medical care.", exampleVi: "Một số người bị thương nặng và cần được chăm sóc y tế." },
    { word: "injured", pos: "adj", ipa: "/ˈɪndʒərd/", meaning: "bị thương", example: "Some people were badly injured in the accident.", exampleVi: "Một số người bị thương nặng trong vụ tai nạn." },
    { word: "clever", pos: "adj", ipa: "/ˈklevər/", meaning: "thông minh", example: "Patrick is very clever. He always does well in difficult tests.", exampleVi: "Patrick rất thông minh. Cậu ấy luôn làm tốt các bài kiểm tra khó." },
    { word: "dangerous", pos: "adj", ipa: "/ˈdeɪndʒərəs/", meaning: "nguy hiểm", example: "That's a great idea, but it's too dangerous!", exampleVi: "Đó là một ý tưởng hay, nhưng quá nguy hiểm!" },
    { word: "appearance", pos: "n", ipa: "/əˈpɪərəns/", meaning: "ngoại hình, vẻ ngoài", example: "Helen is very beautiful, and her appearance always catches everyone's attention.", exampleVi: "Helen rất xinh đẹp, và ngoại hình của cô ấy luôn thu hút sự chú ý của mọi người." },
    { word: "whitish", pos: "adj", ipa: "/ˈwaɪtɪʃ/", meaning: "hơi trắng, ngả trắng", example: "My grandmother has a round face with long whitish hair.", exampleVi: "Bà tôi có khuôn mặt tròn với mái tóc dài hơi bạc trắng." },
    { word: "friendly", pos: "adj", ipa: "/ˈfrendli/", meaning: "thân thiện", example: "The camp leaders are very friendly and help us take part in many activities.", exampleVi: "Các trưởng trại rất thân thiện và giúp chúng tôi tham gia nhiều hoạt động." },
    { word: "shyness", pos: "n", ipa: "/ˈʃaɪnəs/", meaning: "sự nhút nhát", example: "Lan felt very shy before standing on stage to sing in front of the school.", exampleVi: "Lan cảm thấy rất nhút nhát trước khi đứng trên sân khấu hát trước toàn trường." },
    { word: "patiently", pos: "adv", ipa: "/ˈpeɪʃntli/", meaning: "một cách kiên nhẫn", example: "Thu always listens to her friends' problems patiently.", exampleVi: "Thu luôn kiên nhẫn lắng nghe những vấn đề của bạn bè." },
    { word: "straighten", pos: "v", ipa: "/ˈstreɪtn/", meaning: "làm thẳng, sắp xếp ngay ngắn", example: "The teacher asked the students to straighten the lines before painting the picture.", exampleVi: "Cô giáo yêu cầu học sinh xếp thẳng hàng trước khi vẽ tranh." },
    { word: "close friends", pos: "phrase", ipa: "/kloʊs frendz/", meaning: "bạn thân thiết", example: "They always help each other because they have been close friends since childhood.", exampleVi: "Họ luôn giúp đỡ nhau vì đã là bạn thân từ thuở nhỏ." },
    { word: "meet friends", pos: "phrase", ipa: "/miːt frendz/", meaning: "gặp gỡ bạn bè", example: "I don't have any plans today except to meet friends at the shopping mall.", exampleVi: "Hôm nay tôi không có kế hoạch gì ngoài việc gặp bạn bè ở trung tâm mua sắm." },
    { word: "chubby", pos: "adj", ipa: "/ˈtʃʌbi/", meaning: "bầu bĩnh, mũm mĩm", example: "Helen has blonde hair, chubby cheeks and round blue eyes.", exampleVi: "Helen có mái tóc vàng, đôi má bầu bĩnh và đôi mắt xanh tròn." },
    { word: "blonde", pos: "adj", ipa: "/blɒnd/", meaning: "(tóc) vàng hoe", example: "She has short blonde hair and big blue eyes.", exampleVi: "Cô ấy có mái tóc vàng ngắn và đôi mắt xanh to." },
    { word: "intelligent", pos: "adj", ipa: "/ɪnˈtelɪdʒənt/", meaning: "thông minh", example: "Thu is an intelligent girl. Her favourite subject is Math.", exampleVi: "Thu là một cô gái thông minh. Môn học yêu thích của cô ấy là Toán." },
    { word: "lucky", pos: "adj", ipa: "/ˈlʌki/", meaning: "may mắn", example: "I feel really lucky to have a best friend like Thu.", exampleVi: "Tôi cảm thấy thực sự may mắn khi có một người bạn thân như Thu." }
  ],

  vocabPractice: {
    mcq: [
      { id: "vp1", prompt: "Choose the word that means 'kiên nhẫn':", options: { A: "patient", B: "dangerous", C: "clever", D: "friendly" }, correct: "A", explanation: "<b>patient</b> (adj) = kiên nhẫn." },
      { id: "vp2", prompt: "Choose the word that means 'ngoại hình, vẻ ngoài':", options: { A: "appearance", B: "shyness", C: "care", D: "activity" }, correct: "A", explanation: "<b>appearance</b> (n) = ngoại hình, vẻ ngoài." },
      { id: "vp3", prompt: "\"Please be ______ when you have to use fire to cook.\"", options: { A: "careful", B: "dangerous", C: "shy", D: "lucky" }, correct: "A", explanation: "\"<b>careful</b>\" (cẩn thận) phù hợp với việc dùng lửa để nấu ăn." },
      { id: "vp4", prompt: "Choose the word that means 'thông minh' (dùng cho người học giỏi):", options: { A: "clever", B: "chubby", C: "whitish", D: "injured" }, correct: "A", explanation: "<b>clever</b> (adj) = thông minh." },
      { id: "vp5", prompt: "\"Some people were badly ______ in the accident and needed medical care.\"", options: { A: "injured", B: "friendly", C: "patient", D: "lucky" }, correct: "A", explanation: "\"<b>injured</b>\" (bị thương) khớp với ngữ cảnh tai nạn cần chăm sóc y tế." },
      { id: "vp6", prompt: "Choose the word that means 'may mắn':", options: { A: "lucky", B: "careful", C: "intelligent", D: "close" }, correct: "A", explanation: "<b>lucky</b> (adj) = may mắn." }
    ],
    fillblank: [
      { id: "vf1", prompt: "The camp leaders are very ______________ (thân thiện) and help us take part in many activities.", accepted: ["friendly"], correct: "friendly", explanation: "<b>friendly</b> (adj) = thân thiện." },
      { id: "vf2", prompt: "Thu is an ______________ (thông minh) girl. Her favourite subject is Math.", accepted: ["intelligent"], correct: "intelligent", explanation: "<b>intelligent</b> (adj) = thông minh." },
      { id: "vf3", prompt: "I feel really ______________ (may mắn) to have a best friend like Thu.", accepted: ["lucky"], correct: "lucky", explanation: "<b>lucky</b> (adj) = may mắn." },
      { id: "vf4", prompt: "Helen has blonde hair, ______________ (bầu bĩnh) cheeks and round blue eyes.", accepted: ["chubby"], correct: "chubby", explanation: "<b>chubby</b> (adj) = bầu bĩnh, mũm mĩm." },
      { id: "vf5", prompt: "They have been ______________ (bạn thân thiết) since childhood.", accepted: ["close friends"], correct: "close friends", explanation: "<b>close friends</b> (phrase) = bạn thân thiết." },
      { id: "vf6", prompt: "Some people were badly injured and needed medical ______________ (sự chăm sóc).", accepted: ["care"], correct: "care", explanation: "<b>care</b> (n) = sự chăm sóc." }
    ],
    matching: {
      left: ["patient", "dangerous", "clever", "shyness", "intelligent", "lucky"],
      right: ["kiên nhẫn", "nguy hiểm", "thông minh", "sự nhút nhát", "thông minh (học giỏi)", "may mắn"],
      correctMap: [0, 1, 2, 3, 4, 5]
    },
    chooseWord: [
      { id: "cw1", prompt: "\"Lan felt very ______ before standing on stage to sing.\" (SHYNESS)", options: { A: "shyness", B: "shy", C: "shyly", D: "shyful" }, correct: "B", explanation: "Cần tính từ sau \"felt very\" → shyness (n) → <b>shy</b> (adj)." },
      { id: "cw2", prompt: "\"Thu always listens to her friends' problems ______.\" (PATIENT)", options: { A: "patient", B: "patience", C: "patiently", D: "impatient" }, correct: "C", explanation: "Cần trạng từ bổ nghĩa cho động từ \"listens\" → patient (adj) → <b>patiently</b> (adv, +ly)." },
      { id: "cw3", prompt: "\"Helen's ______ always catches everyone's attention.\" (APPEAR)", options: { A: "appear", B: "appearing", C: "appearance", D: "appeared" }, correct: "C", explanation: "Cần danh từ sau tính từ sở hữu \"her\" → appear (v) → <b>appearance</b> (n, +ance)." }
    ],
    wordMeaning: [
      { id: "wm1", prompt: "What does 'careful' mean?", options: { A: "cẩn thận", B: "vội vàng", C: "lười biếng", D: "hào phóng" }, correct: "A", explanation: "careful (adj) = cẩn thận." },
      { id: "wm2", prompt: "What does 'dangerous' mean?", options: { A: "an toàn", B: "nguy hiểm", C: "thú vị", D: "yên tĩnh" }, correct: "B", explanation: "dangerous (adj) = nguy hiểm." },
      { id: "wm3", prompt: "What does 'straighten' mean?", options: { A: "làm cong", B: "làm bẩn", C: "làm thẳng, sắp xếp ngay ngắn", D: "làm vỡ" }, correct: "C", explanation: "straighten (v) = làm thẳng, sắp xếp ngay ngắn." }
    ],
    wordForm: [
      { id: "wf1", prompt: "My grandmother has a round face with long ______________ (WHITEN) hair.", accepted: ["whitish"], correct: "whitish", explanation: "whiten (v) → whitish (adj, +ish)." },
      { id: "wf2", prompt: "The teacher asked the students to ______________ (STRAIGHT) the lines.", accepted: ["straighten"], correct: "straighten", explanation: "straight (adj) → straighten (v, +en)." },
      { id: "wf3", prompt: "The camp leaders are very ______________ (FRIEND) and help us in many activities.", accepted: ["friendly"], correct: "friendly", explanation: "friend (n) → friendly (adj, +ly)." }
    ]
  },

  // ---------------------------------------------------------
  // PART 2 — GRAMMAR REVIEW & PRACTICE
  // ---------------------------------------------------------
  grammar: [
    {
      id: "g1", name: "want to + V ⇄ would like to + V",
      usage: "\"want to + V\" (muốn làm gì) và \"would like to + V\" (muốn làm gì, lịch sự hơn) có nghĩa tương đương, thường dùng trong lời mời hoặc câu hỏi.",
      formulas: [
        "Do you want to + V...?  →  Would you like to + V...?",
        "Do you want to go for a drink with me after class? → Would you like to go for a drink with me after class?"
      ],
      signals: ["want to + V", "would like to + V"],
      examples: [
        { en: "Do you want to go for a drink with me after class?", vi: "Bạn có muốn đi uống nước cùng tôi sau giờ học không?" },
        { en: "Would you like to go for a drink with me after class?", vi: "Bạn có muốn đi uống nước cùng tôi sau giờ học không? (lịch sự hơn)" }
      ],
      mistakes: [
        { wrong: "Would you like go for a drink with me?", right: "Would you like to go for a drink with me? (\"would like\" luôn đi với \"to + V\", không bỏ \"to\")" }
      ],
      practice: {
        level1: [
          { id: "g1l1a", type: "fillblank", prompt: "Do you want to join our team? → Would you ______________ (like) to join our team?", accepted: ["like"], correct: "like", explanation: "want to V → would like to V." }
        ],
        level2: [
          { id: "g1l2a", type: "fillblank", prompt: "Rewrite: 'Do you want to have lunch with us?' → Would you ______________ (like) to have lunch with us?", accepted: ["like"], correct: "like", explanation: "want to V → would like to V." }
        ],
        level3: [
          { id: "g1l3a", type: "fillblank", prompt: "Rewrite so it keeps the same meaning: 'Do you want to come to my birthday party?' → ______________ (Would you like to come to my birthday party?).", accepted: ["would you like to come to my birthday party"], correct: "Would you like to come to my birthday party?", explanation: "want to V → would like to V." }
        ]
      }
    },
    {
      id: "g2", name: "How about + V-ing? ⇄ Why don't we + V?",
      usage: "\"How about + V-ing?\" và \"Why don't we + V?\" đều là cách đưa ra lời đề nghị/gợi ý, có nghĩa tương đương \"Sao chúng ta không...?\".",
      formulas: [
        "How about + V-ing...?  →  Why don't we + V...?",
        "How about going camping this Saturday? → Why don't we go camping this Saturday?"
      ],
      signals: ["How about + V-ing", "Why don't we + V"],
      examples: [
        { en: "How about going camping on Mount Everest this Saturday?", vi: "Đi cắm trại ở núi Everest vào thứ Bảy này thì sao?" },
        { en: "Why don't we go camping on Mount Everest this Saturday?", vi: "Sao chúng ta không đi cắm trại ở núi Everest vào thứ Bảy này?" }
      ],
      mistakes: [
        { wrong: "Why don't we going camping this Saturday?", right: "Why don't we go camping this Saturday? (sau \"Why don't we\" dùng động từ nguyên mẫu, không thêm \"-ing\")" }
      ],
      practice: {
        level1: [
          { id: "g2l1a", type: "fillblank", prompt: "How about playing football after school? → Why don't we ______________ (play) football after school?", accepted: ["play"], correct: "play", explanation: "How about V-ing → Why don't we + V (nguyên mẫu)." }
        ],
        level2: [
          { id: "g2l2a", type: "fillblank", prompt: "Rewrite: 'How about visiting the museum this weekend?' → Why don't we ______________ (visit) the museum this weekend?", accepted: ["visit"], correct: "visit", explanation: "How about V-ing → Why don't we + V." }
        ],
        level3: [
          { id: "g2l3a", type: "fillblank", prompt: "Rewrite so it keeps the same meaning: 'How about having a picnic in the park?' → ______________ (Why don't we have a picnic in the park?).", accepted: ["why don't we have a picnic in the park"], correct: "Why don't we have a picnic in the park?", explanation: "How about V-ing → Why don't we + V." }
        ]
      }
    },
    {
      id: "g3", name: "Are you doing anything...? ⇄ Do you have any plans / anything to do...?",
      usage: "Thì hiện tại tiếp diễn \"be + V-ing\" có thể dùng để hỏi về kế hoạch tương lai; câu hỏi này có nghĩa tương đương với \"Do you have any plans...?\" hoặc \"Do you have anything to do...?\".",
      formulas: [
        "Are you doing anything + thời gian?  →  Do you have any plans for + thời gian? / Do you have anything to do + thời gian?",
        "Are you doing anything this Saturday evening? → Do you have any plans for this Saturday evening?"
      ],
      signals: ["Are you doing anything...?", "Do you have any plans / anything to do...?"],
      examples: [
        { en: "Are you doing anything this Saturday evening?", vi: "Bạn có định làm gì vào tối thứ Bảy này không?" },
        { en: "Do you have any plans for this Saturday evening?", vi: "Bạn có kế hoạch gì cho tối thứ Bảy này không?" }
      ],
      mistakes: [
        { wrong: "Do you have any plan for this Saturday evening?", right: "Do you have any plans for this Saturday evening? (\"plans\" thường dùng ở dạng số nhiều trong cấu trúc này)" }
      ],
      practice: {
        level1: [
          { id: "g3l1a", type: "fillblank", prompt: "Are you doing anything tomorrow? → Do you have ______________ (any) plans for tomorrow?", accepted: ["any"], correct: "any", explanation: "Are you doing anything...? → Do you have any plans...?" }
        ],
        level2: [
          { id: "g3l2a", type: "fillblank", prompt: "Rewrite: 'Are you doing anything next weekend?' → Do you have ______________ (any) plans for next weekend?", accepted: ["any"], correct: "any", explanation: "Are you doing anything...? → Do you have any plans...?" }
        ],
        level3: [
          { id: "g3l3a", type: "fillblank", prompt: "Rewrite so it keeps the same meaning: 'Are you doing anything this afternoon?' → ______________ (Do you have any plans for this afternoon?).", accepted: ["do you have any plans for this afternoon"], correct: "Do you have any plans for this afternoon?", explanation: "Are you doing anything...? → Do you have any plans...?" }
        ]
      }
    },
    {
      id: "g4", name: "ask sb to + V ⇄ suggest that + S + (should) + V",
      usage: "\"ask sb to + V\" (yêu cầu ai làm gì) có thể diễn đạt lại bằng cấu trúc gợi ý/đề nghị \"suggest that + S + (should) + V\" khi nội dung mang tính đề nghị hơn là ra lệnh.",
      formulas: [
        "S1 + asked + S2 + to + V.  →  S1 + suggested that + S2 + (should) + V.",
        "Our teacher asked us to write emails in English. → Our teacher suggested that we should write emails in English."
      ],
      signals: ["ask sb to + V", "suggest that + S + (should) + V"],
      examples: [
        { en: "Our teacher asked us to write emails in English.", vi: "Giáo viên của chúng tôi yêu cầu chúng tôi viết email bằng tiếng Anh." },
        { en: "Our teacher suggested that we should write emails in English.", vi: "Giáo viên của chúng tôi đề nghị rằng chúng tôi nên viết email bằng tiếng Anh." }
      ],
      mistakes: [
        { wrong: "Our teacher suggested us to write emails in English.", right: "Our teacher suggested that we (should) write emails in English. (\"suggest\" không đi trực tiếp với \"sb to V\")" }
      ],
      practice: {
        level1: [
          { id: "g4l1a", type: "fillblank", prompt: "The doctor asked him to rest more. → The doctor suggested ______________ (that) he should rest more.", accepted: ["that"], correct: "that", explanation: "ask sb to V → suggest that + S + (should) + V." }
        ],
        level2: [
          { id: "g4l2a", type: "fillblank", prompt: "Rewrite: 'My mom asked me to clean my room.' → My mom suggested ______________ (that) I should clean my room.", accepted: ["that"], correct: "that", explanation: "ask sb to V → suggest that + S + (should) + V." }
        ],
        level3: [
          { id: "g4l3a", type: "fillblank", prompt: "Rewrite so it keeps the same meaning: 'The coach asked the players to practice harder.' → ______________ (The coach suggested that the players should practice harder).", accepted: ["the coach suggested that the players should practice harder"], correct: "The coach suggested that the players should practice harder", explanation: "ask sb to V → suggest that + S + (should) + V." }
        ]
      }
    },
    {
      id: "g5", name: "so + adj + that + S + V (mệnh đề kết quả)",
      usage: "Cấu trúc \"so + adj + that + S + V\" dùng để diễn tả một mức độ cao của tính chất dẫn đến một kết quả nào đó (quá... đến nỗi mà...).",
      formulas: [
        "S + is/are + so + adj + that + S + V (kết quả).",
        "Her jokes are so funny that they make us laugh a lot."
      ],
      signals: ["so + adj + that + mệnh đề kết quả"],
      examples: [
        { en: "Her jokes are so funny that they make us laugh a lot.", vi: "Những câu chuyện đùa của cô ấy buồn cười đến mức khiến chúng tôi cười rất nhiều." },
        { en: "The test was so difficult that many students failed it.", vi: "Bài kiểm tra khó đến mức nhiều học sinh đã trượt." }
      ],
      mistakes: [
        { wrong: "Her jokes are so funny which they make us laugh.", right: "Her jokes are so funny that they make us laugh. (dùng \"that\", không dùng \"which\", để nối mệnh đề kết quả)" }
      ],
      practice: {
        level1: [
          { id: "g5l1a", type: "fillblank", prompt: "The house is so big ______________ (that) all of us can live there comfortably.", accepted: ["that"], correct: "that", explanation: "so + adj + that + mệnh đề kết quả." }
        ],
        level2: [
          { id: "g5l2a", type: "fillblank", prompt: "Rewrite: 'This book is very interesting. I can't stop reading it.' → This book is so interesting ______________ (that) I can't stop reading it.", accepted: ["that"], correct: "that", explanation: "so + adj + that + mệnh đề kết quả." }
        ],
        level3: [
          { id: "g5l3a", type: "fillblank", prompt: "Combine using 'so...that': 'The weather was very cold. We stayed home.' → ______________ (The weather was so cold that we stayed home).", accepted: ["the weather was so cold that we stayed home"], correct: "The weather was so cold that we stayed home", explanation: "so + adj + that + mệnh đề kết quả." }
        ]
      }
    }
  ],

  // ---------------------------------------------------------
  // PART 3 — READING PRACTICE
  // ---------------------------------------------------------
  reading: {
    passage: "My name is Hoa and my best friend is Thu. She is my <mark data-w=\"classmate\">classmate</mark>. We are both in grade 6 at Nguyen Hue Secondary School. Thu lives next to my house. Every day, my father takes us to school on his motorbike, and we come home <mark data-w=\"on foot\">on foot</mark> in the evening. She is an <mark data-w=\"intelligent girl\">intelligent girl</mark>. Her favourite subject is Math, and she is really good at it. Mine is English. We usually <mark data-w=\"help each other with our homework\">help each other with our homework</mark>. Whenever I am sad, Thu always tells me stories to make me happy. I <mark data-w=\"feel really lucky\">feel really lucky</mark> to have a best friend like Thu.",
    vocabInContext: {
      "classmate": "bạn cùng lớp",
      "on foot": "đi bộ",
      "intelligent girl": "cô gái thông minh",
      "help each other with our homework": "giúp đỡ nhau làm bài tập về nhà",
      "feel really lucky": "cảm thấy thực sự may mắn"
    },
    translation: "<b>HOA VÀ THU</b><br><br>Tôi tên là Hoa và bạn thân nhất của tôi là Thu. Cô ấy là bạn cùng lớp của tôi. Cả hai chúng tôi đều học lớp 6 tại trường Trung học cơ sở Nguyễn Huệ. Thu sống cạnh nhà tôi. Mỗi ngày, bố tôi chở chúng tôi đến trường bằng xe máy, và chúng tôi đi bộ về nhà vào buổi tối. Cô ấy là một cô gái thông minh. Môn học yêu thích của cô ấy là Toán, và cô ấy học rất giỏi môn đó. Còn môn yêu thích của tôi là tiếng Anh. Chúng tôi thường giúp đỡ nhau làm bài tập về nhà. Bất cứ khi nào tôi buồn, Thu luôn kể chuyện để khiến tôi vui lên. Tôi cảm thấy thực sự may mắn khi có một người bạn thân như Thu.",
    practice: [
      { id: "r1", type: "truefalse", prompt: "Hoa and Thu are in different classes at school.", correct: "False", explanation: "Sai. Hoa và Thu học cùng lớp 6, Thu là bạn cùng lớp của Hoa." },
      { id: "r2", type: "truefalse", prompt: "Hoa's father drives the girls to school every day.", correct: "True", explanation: "Đúng. Bố của Hoa chở cả hai đến trường bằng xe máy mỗi ngày." },
      { id: "r3", type: "truefalse", prompt: "Thu and Hoa walk home together in the evening.", correct: "True", explanation: "Đúng. Họ đi bộ về nhà cùng nhau vào buổi tối (\"on foot\")." },
      { id: "r4", type: "truefalse", prompt: "Thu's favourite subject at school is English.", correct: "False", explanation: "Sai. Môn yêu thích của Thu là Toán; tiếng Anh là môn yêu thích của Hoa." },
      { id: "r5", type: "mcq", prompt: "What do Hoa and Thu usually do together?", options: { A: "They help each other with homework.", B: "They go to the cinema.", C: "They play sports after school.", D: "They cook dinner for their families." }, correct: "A", explanation: "Bài đọc: \"We usually help each other with our homework.\"" },
      { id: "r6", type: "mcq", prompt: "What does Thu do when Hoa is sad?", options: { A: "She tells Hoa stories to make her happy.", B: "She buys a gift for Hoa.", C: "She calls Hoa's father.", D: "She visits Hoa's house to do Math." }, correct: "A", explanation: "Bài đọc: \"Thu always tells me stories to make me happy.\"" },
      { id: "r7", type: "fillblank", prompt: "Find the word in the passage that means 'thông minh'.", accepted: ["intelligent"], correct: "intelligent", explanation: "\"She is an intelligent girl.\" — intelligent = thông minh." },
      { id: "r8", type: "mcq", prompt: "Where do Hoa and Thu live in relation to each other?", options: { A: "In the same house.", B: "Next door to each other.", C: "In different neighborhoods.", D: "Far from each other." }, correct: "B", explanation: "Bài đọc: \"Thu lives next to my house.\" — nhà Thu ở ngay cạnh nhà Hoa." },
      { id: "r9", type: "truefalse", prompt: "According to the passage, Hoa's favourite subject is Math.", correct: "False", explanation: "Sai. Bài đọc: \"Mine is English\" — môn yêu thích của Hoa là tiếng Anh, còn Toán là môn yêu thích của Thu." }
    ]
  },

  // ---------------------------------------------------------
  // PART 4 — TRANSLATION PRACTICE
  // ---------------------------------------------------------
  translation: [
    { id: "t1", en: "She is my classmate. We are both in grade 6 at Nguyen Hue Secondary School.", suggested: "Cô ấy là bạn cùng lớp của tôi. Cả hai chúng tôi đều học lớp 6 tại trường Trung học cơ sở Nguyễn Huệ.", notes: "\"classmate\" (bạn cùng lớp) khác với \"friend\" (bạn bè) nói chung." },
    { id: "t2", en: "Every day, my father takes us to school on his motorbike, and we come home on foot in the evening.", suggested: "Mỗi ngày, bố tôi chở chúng tôi đến trường bằng xe máy, và chúng tôi đi bộ về nhà vào buổi tối.", notes: "\"on foot\" (đi bộ) là trạng ngữ chỉ phương tiện, không cần giới từ khác." },
    { id: "t3", en: "Her favourite subject is Math, and she is really good at it.", suggested: "Môn học yêu thích của cô ấy là Toán, và cô ấy học rất giỏi môn đó.", notes: "\"be good at + N/V-ing\" (giỏi về việc gì) là cấu trúc thường gặp." },
    { id: "t4", en: "We usually help each other with our homework.", suggested: "Chúng tôi thường giúp đỡ nhau làm bài tập về nhà.", notes: "\"help each other with + N\" (giúp đỡ lẫn nhau việc gì)." },
    { id: "t5", en: "Whenever I am sad, Thu always tells me stories to make me happy.", suggested: "Bất cứ khi nào tôi buồn, Thu luôn kể chuyện để khiến tôi vui lên.", notes: "\"whenever\" (bất cứ khi nào) là liên từ chỉ thời gian lặp lại." }
  ],

  // ---------------------------------------------------------
  // PART 5 — SENTENCE TRANSFORMATION PRACTICE
  // ---------------------------------------------------------
  transformation: [
    {
      id: "tr1", name: "want to V ⇄ would like to V",
      formula: "Do you want to + V...?  →  Would you like to + V...?",
      example: { before: "Do you want to go for a drink with me after class?", after: "Would you like to go for a drink with me after class?" },
      practice: [
        { id: "tr1p1", type: "fillblank", prompt: "Do you want to join our team? → Would you ______________ (like) to join our team?", accepted: ["like"], correct: "like", explanation: "want to V → would like to V." },
        { id: "tr1p2", type: "fillblank", prompt: "Rewrite: 'Do you want to have lunch with us?' → Would you ______________ (like) to have lunch with us?", accepted: ["like"], correct: "like", explanation: "want to V → would like to V." }
      ]
    },
    {
      id: "tr2", name: "How about V-ing ⇄ Why don't we V",
      formula: "How about + V-ing...?  →  Why don't we + V...?",
      example: { before: "How about going camping on Mount Everest this Saturday?", after: "Why don't we go camping on Mount Everest this Saturday?" },
      practice: [
        { id: "tr2p1", type: "fillblank", prompt: "How about playing football after school? → Why don't we ______________ (play) football after school?", accepted: ["play"], correct: "play", explanation: "How about V-ing → Why don't we + V." },
        { id: "tr2p2", type: "fillblank", prompt: "Rewrite: 'How about visiting the museum this weekend?' → Why don't we ______________ (visit) the museum this weekend?", accepted: ["visit"], correct: "visit", explanation: "How about V-ing → Why don't we + V." }
      ]
    },
    {
      id: "tr3", name: "Are you doing anything...? ⇄ Do you have any plans...?",
      formula: "Are you doing anything + thời gian?  →  Do you have any plans for + thời gian?",
      example: { before: "Are you doing anything this Saturday evening?", after: "Do you have any plans for this Saturday evening?" },
      practice: [
        { id: "tr3p1", type: "fillblank", prompt: "Are you doing anything tomorrow? → Do you have ______________ (any) plans for tomorrow?", accepted: ["any"], correct: "any", explanation: "Are you doing anything...? → Do you have any plans...?" },
        { id: "tr3p2", type: "fillblank", prompt: "Rewrite: 'Are you doing anything next weekend?' → Do you have ______________ (any) plans for next weekend?", accepted: ["any"], correct: "any", explanation: "Are you doing anything...? → Do you have any plans...?" }
      ]
    },
    {
      id: "tr4", name: "ask sb to V ⇄ suggest that + S + (should) + V",
      formula: "S1 + asked + S2 + to + V  →  S1 + suggested that + S2 + (should) + V",
      example: { before: "Our teacher asked us to write emails in English.", after: "Our teacher suggested that we should write emails in English." },
      practice: [
        { id: "tr4p1", type: "fillblank", prompt: "The doctor asked him to rest more. → The doctor suggested ______________ (that) he should rest more.", accepted: ["that"], correct: "that", explanation: "ask sb to V → suggest that + S + (should) + V." },
        { id: "tr4p2", type: "fillblank", prompt: "Rewrite: 'My mom asked me to clean my room.' → My mom suggested ______________ (that) I should clean my room.", accepted: ["that"], correct: "that", explanation: "ask sb to V → suggest that + S + (should) + V." }
      ]
    }
  ],

  // ---------------------------------------------------------
  // PART 6 — QUICK REVIEW (mini test, all skills)
  // ---------------------------------------------------------
  quickReview: [
    { id: "q1", cat: "Vocabulary", type: "mcq", prompt: "'Clever' means:", options: { A: "thông minh", B: "nguy hiểm", C: "nhút nhát", D: "hào phóng" }, correct: "A", explanation: "clever (adj) = thông minh." },
    { id: "q2", cat: "Vocabulary", type: "mcq", prompt: "'Dangerous' means:", options: { A: "an toàn", B: "nguy hiểm", C: "thú vị", D: "yên tĩnh" }, correct: "B", explanation: "dangerous (adj) = nguy hiểm." },
    { id: "q3", cat: "Vocabulary", type: "fillblank", prompt: "I feel really ______________ (may mắn) to have a best friend like Thu.", accepted: ["lucky"], correct: "lucky", explanation: "lucky (adj) = may mắn." },
    { id: "q4", cat: "Grammar", type: "mcq", prompt: "Do you want to go for a drink with me? → ______ you like to go for a drink with me?", options: { A: "Would", B: "Do", C: "Are", D: "Will" }, correct: "A", explanation: "want to V → would like to V." },
    { id: "q5", cat: "Grammar", type: "mcq", prompt: "How about going camping this Saturday? → Why ______ we go camping this Saturday?", options: { A: "aren't", B: "isn't", C: "don't", D: "doesn't" }, correct: "C", explanation: "\"Why don't we + V?\" là cấu trúc cố định để đề nghị." },
    { id: "q6", cat: "Grammar", type: "fillblank", prompt: "Are you doing anything this Saturday evening? → Do you have ______________ (any) plans for this Saturday evening?", accepted: ["any"], correct: "any", explanation: "Are you doing anything...? → Do you have any plans...?" },
    { id: "q7", cat: "Grammar", type: "fillblank", prompt: "Our teacher asked us to write emails in English. → Our teacher suggested ______________ (that) we should write emails in English.", accepted: ["that"], correct: "that", explanation: "ask sb to V → suggest that + S + (should) + V." },
    { id: "q8", cat: "Reading", type: "truefalse", prompt: "Hoa and Thu are in different classes at school.", correct: "False", explanation: "Sai theo bài đọc — họ học cùng lớp." },
    { id: "q9", cat: "Reading", type: "truefalse", prompt: "Thu's favourite subject at school is English.", correct: "False", explanation: "Sai. Môn yêu thích của Thu là Toán." },
    { id: "q10", cat: "Reading", type: "mcq", prompt: "What does Thu do when Hoa is sad?", options: { A: "She tells Hoa stories to make her happy.", B: "She buys a gift for Hoa.", C: "She calls Hoa's father.", D: "She visits Hoa's house to do Math." }, correct: "A", explanation: "Bài đọc nêu rõ Thu kể chuyện để Hoa vui lên." },
    { id: "q11", cat: "Writing", type: "fillblank", prompt: "The camp leaders are very ______________ (FRIEND) and help us take part in many activities.", accepted: ["friendly"], correct: "friendly", explanation: "friend (n) → friendly (adj, +ly)." },
    { id: "q12", cat: "Writing", type: "fillblank", prompt: "Lan felt very ______________ (SHYNESS) before standing on stage.", accepted: ["shy"], correct: "shy", explanation: "shyness (n) → shy (adj)." },
    { id: "q13", cat: "Writing", type: "fillblank", prompt: "Helen's ______________ (APPEAR) always catches everyone's attention.", accepted: ["appearance"], correct: "appearance", explanation: "appear (v) → appearance (n, +ance)." },
    { id: "q14", cat: "Vocabulary", type: "mcq", prompt: "Which word means 'bị thương'?", options: { A: "injured", B: "careful", C: "patient", D: "lucky" }, correct: "A", explanation: "injured (adj) = bị thương." }
  ]
};
