const REVIEW = {
  id: "test07",
  testFile: "test07.html",
  grade: "Grade 8 — Global Success",
  unit: "Unit 1: Leisure time",
  title: "Knowledge Review — Unit 1, Practice Test 1",

  // ---------------------------------------------------------
  // PART 1 — VOCABULARY REVIEW
  // ---------------------------------------------------------
  vocabulary: [
    { word: "hobby", pos: "n", ipa: "/ˈhɑːbi/", meaning: "sở thích", example: "A hobby is a regular activity that is done for enjoyment.", exampleVi: "Sở thích là một hoạt động thường xuyên được thực hiện để giải trí." },
    { word: "leisure", pos: "n", ipa: "/ˈliːʒər/", meaning: "thời gian rảnh, giải trí", example: "Pop music is her absolute favorite in her free time.", exampleVi: "Nhạc pop là thứ cô ấy yêu thích nhất trong thời gian rảnh." },
    { word: "gardening", pos: "n", ipa: "/ˈɡɑːrdnɪŋ/", meaning: "làm vườn", example: "Many old people enjoy gardening.", exampleVi: "Nhiều người lớn tuổi thích làm vườn." },
    { word: "handicraft", pos: "n", ipa: "/ˈhændikræft/", meaning: "đồ thủ công, nghề thủ công", example: "People do handicrafts such as carving eggshells as a hobby.", exampleVi: "Mọi người làm đồ thủ công như khắc vỏ trứng như một sở thích." },
    { word: "activist", pos: "n", ipa: "/ˈæktɪvɪst/", meaning: "nhà hoạt động xã hội", example: "She's a famous activist known for her endless efforts to help poor people.", exampleVi: "Cô ấy là một nhà hoạt động xã hội nổi tiếng, được biết đến với nỗ lực không ngừng để giúp đỡ người nghèo." },
    { word: "face-to-face", pos: "adj", ipa: "/ˌfeɪs tə ˈfeɪs/", meaning: "trực tiếp, mặt đối mặt", example: "Virtual communication can be harmful because it reduces face-to-face contact.", exampleVi: "Giao tiếp ảo có thể gây hại vì nó làm giảm sự tiếp xúc trực tiếp." },
    { word: "virtual", pos: "adj", ipa: "/ˈvɜːrtʃuəl/", meaning: "ảo (trên mạng)", example: "Many teenagers feel more comfortable with virtual friends than with real ones.", exampleVi: "Nhiều thanh thiếu niên cảm thấy thoải mái hơn với bạn bè ảo hơn là bạn bè thật." },
    { word: "involved", pos: "adj", ipa: "/ɪnˈvɑːlvd/", meaning: "tham gia, có liên quan", example: "Parents should be involved in guiding their children to use social media safely.", exampleVi: "Cha mẹ nên tham gia hướng dẫn con cái sử dụng mạng xã hội an toàn." },
    { word: "uncomfortable", pos: "adj", ipa: "/ʌnˈkʌmftəbl/", meaning: "không thoải mái", example: "The lack of social skills makes many teenagers feel uncomfortable when talking to strangers.", exampleVi: "Việc thiếu kỹ năng xã hội khiến nhiều thanh thiếu niên cảm thấy không thoải mái khi nói chuyện với người lạ." },
    { word: "pleasure", pos: "n", ipa: "/ˈpleʒər/", meaning: "niềm vui, sự thích thú", example: "A hobby will give you pleasure and help you relax after long hours of hard work.", exampleVi: "Một sở thích sẽ mang lại cho bạn niềm vui và giúp bạn thư giãn sau nhiều giờ làm việc vất vả." },
    { word: "colorful", pos: "adj", ipa: "/ˈkʌlərfl/", meaning: "đầy màu sắc", example: "My sister wants to make her bedroom more colorful.", exampleVi: "Chị tôi muốn làm phòng ngủ của mình rực rỡ màu sắc hơn." },
    { word: "surf", pos: "v", ipa: "/sɜːrf/", meaning: "lướt (mạng, TikTok)", example: "I like to surf TikTok to watch short clips whenever I have some leisure time.", exampleVi: "Tôi thích lướt TikTok để xem các đoạn video ngắn mỗi khi có thời gian rảnh." },
    { word: "in common", pos: "phr", ipa: "/ɪn ˈkɑːmən/", meaning: "có điểm chung", example: "She and I share many things in common.", exampleVi: "Cô ấy và tôi có nhiều điểm chung." },
    { word: "fancy", pos: "adj", ipa: "/ˈfænsi/", meaning: "sang trọng, cầu kỳ, đẹp mắt", example: "Her dress looks so fancy! I want to buy it.", exampleVi: "Chiếc váy của cô ấy trông sang trọng quá! Tôi muốn mua nó." },
    { word: "screen time", pos: "n", ipa: "/skriːn taɪm/", meaning: "thời gian dùng thiết bị màn hình", example: "Thanks for your advice. I'll reduce my screen time.", exampleVi: "Cảm ơn lời khuyên của bạn. Mình sẽ giảm thời gian dùng thiết bị màn hình." },
    { word: "outdoor", pos: "adj", ipa: "/ˈaʊtdɔːr/", meaning: "ngoài trời", example: "We should encourage her to do more outdoor activities.", exampleVi: "Chúng ta nên khuyến khích cô ấy tham gia nhiều hoạt động ngoài trời hơn." },
    { word: "collect", pos: "v", ipa: "/kəˈlekt/", meaning: "sưu tầm", example: "If you like collecting stamps, you can join a stamp club.", exampleVi: "Nếu bạn thích sưu tầm tem, bạn có thể tham gia một câu lạc bộ sưu tầm tem." },
    { word: "relax", pos: "v", ipa: "/rɪˈlæks/", meaning: "thư giãn", example: "A hobby will help you relax after long hours of hard work.", exampleVi: "Một sở thích sẽ giúp bạn thư giãn sau nhiều giờ làm việc vất vả." }
  ],

  vocabPractice: {
    mcq: [
      { id: "vp1", prompt: "Choose the word that means 'nhà hoạt động xã hội':", options: { A: "activist", B: "hobby", C: "handicraft", D: "pastime" }, correct: "A", explanation: "<b>activist</b> (n) = nhà hoạt động xã hội." },
      { id: "vp2", prompt: "Choose the word that means 'ảo (trên mạng)':", options: { A: "virtual", B: "colorful", C: "fancy", D: "involved" }, correct: "A", explanation: "<b>virtual</b> (adj) = ảo, trên mạng." },
      { id: "vp3", prompt: "Choose the best word: \"I like to ______ TikTok to watch short clips.\"", options: { A: "collect", B: "surf", C: "relax", D: "involve" }, correct: "B", explanation: "\"<b>surf</b> TikTok\" (lướt xem TikTok) là cụm cố định." },
      { id: "vp4", prompt: "Choose the word that means 'không thoải mái':", options: { A: "comfortable", B: "colorful", C: "uncomfortable", D: "involved" }, correct: "C", explanation: "<b>uncomfortable</b> (adj) = không thoải mái." },
      { id: "vp5", prompt: "\"Virtual communication reduces ______ contact.\"", options: { A: "face-to-face", B: "outdoor", C: "screen time", D: "leisure" }, correct: "A", explanation: "\"<b>face-to-face</b> contact\" (tiếp xúc trực tiếp) là cụm cố định." },
      { id: "vp6", prompt: "Choose the word that means 'sưu tầm':", options: { A: "surf", B: "collect", C: "relax", D: "involve" }, correct: "B", explanation: "<b>collect</b> (v) = sưu tầm." }
    ],
    fillblank: [
      { id: "vf1", prompt: "Many old people enjoy ______________ (làm vườn).", accepted: ["gardening"], correct: "gardening", explanation: "<b>gardening</b> (n) = làm vườn." },
      { id: "vf2", prompt: "She and I share many things ______________ (điểm chung).", accepted: ["in common"], correct: "in common", explanation: "\"have things <b>in common</b>\" = có điểm chung." },
      { id: "vf3", prompt: "We should encourage her to do more ______________ (ngoài trời) activities.", accepted: ["outdoor"], correct: "outdoor", explanation: "<b>outdoor</b> (adj) = ngoài trời." },
      { id: "vf4", prompt: "Thanks for your advice. I'll reduce my ______________ (thời gian dùng thiết bị màn hình).", accepted: ["screen time"], correct: "screen time", explanation: "<b>screen time</b> (n) = thời gian dùng thiết bị màn hình." },
      { id: "vf5", prompt: "A hobby will give you ______________ (niềm vui) and help you relax.", accepted: ["pleasure"], correct: "pleasure", explanation: "<b>pleasure</b> (n) = niềm vui, sự thích thú." },
      { id: "vf6", prompt: "Parents should be ______________ (tham gia, có liên quan) in guiding their children.", accepted: ["involved"], correct: "involved", explanation: "<b>involved</b> (adj) = tham gia, có liên quan." }
    ],
    matching: {
      left: ["hobby", "virtual", "activist", "pleasure", "fancy", "relax"],
      right: ["sở thích", "ảo (trên mạng)", "nhà hoạt động xã hội", "niềm vui, sự thích thú", "sang trọng, cầu kỳ", "thư giãn"],
      correctMap: [0, 1, 2, 3, 4, 5]
    },
    chooseWord: [
      { id: "cw1", prompt: "\"Parents should be ______ in guiding their children to use social media safely.\" (INVOLVE)", options: { A: "involve", B: "involving", C: "involved", D: "involvement" }, correct: "C", explanation: "Cần tính từ đứng sau \"be\" → involve (v) → <b>involved</b> (adj)." },
      { id: "cw2", prompt: "\"The lack of social skills makes many teenagers feel ______ when talking to strangers.\" (COMFORT)", options: { A: "comfort", B: "comfortable", C: "uncomfortable", D: "comfortably" }, correct: "C", explanation: "Cần tính từ mang nghĩa phủ định sau \"feel\" → comfort (n) → <b>uncomfortable</b> (adj)." },
      { id: "cw3", prompt: "\"My sister likes doing DIY because she wants to make her bedroom more ______.\" (COLOR)", options: { A: "color", B: "colored", C: "colorful", D: "coloring" }, correct: "C", explanation: "Cần tính từ đứng sau \"more\" → color (n) → <b>colorful</b> (adj)." }
    ],
    wordMeaning: [
      { id: "wm1", prompt: "What does 'virtual' mean?", options: { A: "thật, có thực", B: "ảo, trên mạng", C: "cổ điển", D: "đắt tiền" }, correct: "B", explanation: "virtual (adj) = ảo, trên mạng (không phải đời thực)." },
      { id: "wm2", prompt: "What does 'face-to-face' mean?", options: { A: "trực tiếp, mặt đối mặt", B: "qua điện thoại", C: "qua thư từ", D: "một mình" }, correct: "A", explanation: "face-to-face (adj) = trực tiếp, mặt đối mặt." },
      { id: "wm3", prompt: "What does 'handicraft' mean?", options: { A: "đồ thủ công", B: "đồ điện tử", C: "thực phẩm", D: "trang phục" }, correct: "A", explanation: "handicraft (n) = đồ thủ công, nghề thủ công." }
    ],
    wordForm: [
      { id: "wf1", prompt: "Playing board games with family members is very (INTEREST) ______________.", accepted: ["interesting"], correct: "interesting", explanation: "Cần tính từ sau \"very\" → interest (n/v) → <b>interesting</b> (adj)." },
      { id: "wf2", prompt: "The fair brought a lot of (PLEASE) ______________ to the students.", accepted: ["pleasure"], correct: "pleasure", explanation: "Cần danh từ làm tân ngữ → please (v) → <b>pleasure</b> (n)." },
      { id: "wf3", prompt: "Virtual communication reduces (FACE) ______________ contact.", accepted: ["face-to-face"], correct: "face-to-face", explanation: "Cần tính từ ghép trước \"contact\" → face (n) → <b>face-to-face</b> (adj ghép)." }
    ]
  },

  // ---------------------------------------------------------
  // PART 2 — GRAMMAR REVIEW & PRACTICE
  // ---------------------------------------------------------
  grammar: [
    {
      id: "g1", name: "Danh động từ làm chủ ngữ ⇄ It is + adj + to V",
      usage: "Khi một danh động từ (V-ing) làm chủ ngữ của câu để nhận xét về một hành động, ta có thể chuyển sang cấu trúc \"It is + adj + to V\" mà không làm thay đổi nghĩa.",
      formulas: [
        "V-ing + ... + is/was + adj.  →  It is/was + adj + to V.",
        "Playing board games is very interesting. → It is very interesting to play board games."
      ],
      signals: ["V-ing làm chủ ngữ", "It is + adj + to V"],
      examples: [
        { en: "Playing board games is very interesting.", vi: "Chơi board game rất thú vị." },
        { en: "It is very interesting to play board games.", vi: "Thật thú vị khi chơi board game." }
      ],
      mistakes: [
        { wrong: "It is very interesting play board games.", right: "It is very interesting to play board games." }
      ],
      practice: {
        level1: [
          { id: "g1l1a", type: "fillblank", prompt: "Collecting stamps is quite relaxing. → It is quite relaxing ______________ (collect) stamps.", accepted: ["to collect"], correct: "to collect", explanation: "V-ing làm chủ ngữ → It is + adj + to V." }
        ],
        level2: [
          { id: "g1l2a", type: "fillblank", prompt: "Rewrite: 'Doing gardening every morning is good for your health.' → It is good for your health ______________ (do) gardening every morning.", accepted: ["to do"], correct: "to do", explanation: "V-ing làm chủ ngữ → It is + adj + to V." }
        ],
        level3: [
          { id: "g1l3a", type: "fillblank", prompt: "Rewrite so it keeps the same meaning: 'Surfing the Internet for hours is not beneficial.' → It is not beneficial ______________ (surf the Internet for hours).", accepted: ["to surf the internet for hours"], correct: "to surf the Internet for hours", explanation: "V-ing làm chủ ngữ → It is + adj + to V." }
        ]
      }
    },
    {
      id: "g2", name: "insist on sb's V-ing ⇄ want sb to V",
      usage: "\"insist on sb's V-ing\" (khăng khăng đòi ai làm gì) có thể diễn đạt lại bằng \"want sb to V\" (muốn ai làm gì) khi ngữ cảnh chỉ đơn thuần là mong muốn/yêu cầu.",
      formulas: [
        "S + insist(s) on + sb's + V-ing.",
        "S + want(s) + O + to + V.",
        "My parents insist on my learning another language. → My parents want me to learn another language."
      ],
      signals: ["insist on sb's V-ing", "want sb to V"],
      examples: [
        { en: "My parents insist on my learning another language.", vi: "Bố mẹ tôi khăng khăng muốn tôi học thêm một ngôn ngữ khác." },
        { en: "My parents want me to learn another language.", vi: "Bố mẹ tôi muốn tôi học thêm một ngôn ngữ khác." }
      ],
      mistakes: [
        { wrong: "My parents want I learn another language.", right: "My parents want me to learn another language." }
      ],
      practice: {
        level1: [
          { id: "g2l1a", type: "fillblank", prompt: "My teacher insists on my joining the art club. → My teacher wants ______________ (join) the art club.", accepted: ["me to join"], correct: "me to join", explanation: "insist on sb's V-ing → want sb to V." }
        ],
        level2: [
          { id: "g2l2a", type: "fillblank", prompt: "Rewrite: 'Our coach insists on our practicing every day.' → Our coach wants ______________ (practice) every day.", accepted: ["us to practice"], correct: "us to practice", explanation: "insist on sb's V-ing → want sb to V." }
        ],
        level3: [
          { id: "g2l3a", type: "fillblank", prompt: "Rewrite so it keeps the same meaning: 'My mother insists on my doing more outdoor activities.' → My mother ______________ (want me to do more outdoor activities).", accepted: ["wants me to do more outdoor activities"], correct: "wants me to do more outdoor activities", explanation: "insist on sb's V-ing → want sb to V." }
        ]
      }
    },
    {
      id: "g3", name: "spend time V-ing ⇄ take up time V-ing / take time to V",
      usage: "\"spend + time + V-ing\" (dành thời gian làm gì) có thể diễn đạt lại bằng \"take up + time + V-ing\" hoặc \"take time to V\" — cùng nói về việc dùng thời gian vào một hoạt động.",
      formulas: [
        "S + spend(s) + time + V-ing.",
        "S + take(s) up + time + V-ing.  /  S + take(s) time + to V.",
        "My brother spends his free time playing computer games. → My brother takes up his free time playing computer games."
      ],
      signals: ["spend time V-ing", "take up time V-ing", "take time to V"],
      examples: [
        { en: "My brother usually spends his free time playing computer games.", vi: "Anh trai tôi thường dành thời gian rảnh để chơi game." },
        { en: "My brother usually takes up his free time playing computer games.", vi: "Anh trai tôi thường dùng thời gian rảnh của mình để chơi game." }
      ],
      mistakes: [
        { wrong: "My brother takes his free time to playing computer games.", right: "My brother takes up his free time playing computer games." }
      ],
      practice: {
        level1: [
          { id: "g3l1a", type: "fillblank", prompt: "She spends two hours reading every day. → She ______________ (take up) two hours reading every day.", accepted: ["takes up"], correct: "takes up", explanation: "spend time V-ing → take up time V-ing." }
        ],
        level2: [
          { id: "g3l2a", type: "fillblank", prompt: "Rewrite: 'They spend their weekends gardening.' → They ______________ (take up) their weekends gardening.", accepted: ["take up"], correct: "take up", explanation: "spend time V-ing → take up time V-ing." }
        ],
        level3: [
          { id: "g3l3a", type: "fillblank", prompt: "Rewrite so it keeps the same meaning: 'He spends a lot of time collecting stamps.' → He ______________ (take a lot of time to collect stamps).", accepted: ["takes a lot of time to collect stamps"], correct: "takes a lot of time to collect stamps", explanation: "spend time V-ing → take time to V." }
        ]
      }
    },
    {
      id: "g4", name: "shouldn't ⇄ had better not (lời khuyên không nên làm gì)",
      usage: "\"shouldn't + V\" và \"had better not + V\" đều dùng để khuyên ai đó KHÔNG nên làm gì.",
      formulas: [
        "S + shouldn't + V.",
        "S + had better not + V.",
        "You should not spend too much time surfing the Internet. → You had better not spend too much time surfing the Internet."
      ],
      signals: ["shouldn't", "had better not"],
      examples: [
        { en: "You should not spend too much time surfing the Internet.", vi: "Bạn không nên dành quá nhiều thời gian lướt Internet." },
        { en: "You had better not spend too much time surfing the Internet.", vi: "Bạn tốt hơn hết là không nên dành quá nhiều thời gian lướt Internet." }
      ],
      mistakes: [
        { wrong: "You had not better spend too much time.", right: "You had better not spend too much time." }
      ],
      practice: {
        level1: [
          { id: "g4l1a", type: "fillblank", prompt: "You shouldn't spend all day playing video games. → You ______________ spend all day playing video games.", accepted: ["had better not"], correct: "had better not", explanation: "shouldn't ⇄ had better not." }
        ],
        level2: [
          { id: "g4l2a", type: "fillblank", prompt: "Rewrite: 'Teenagers shouldn't ignore their parents' advice.' → Teenagers ______________ ignore their parents' advice.", accepted: ["had better not"], correct: "had better not", explanation: "shouldn't ⇄ had better not." }
        ],
        level3: [
          { id: "g4l3a", type: "fillblank", prompt: "Rewrite so it keeps the same meaning: 'It's a bad idea to share your passwords online.' → You ______________ (had better) share your passwords online.", accepted: ["had better not"], correct: "had better not", explanation: "Ý khuyên không nên làm gì → had better not + V." }
        ]
      }
    },
    {
      id: "g5", name: "Động từ + V-ing (mind, fancy, enjoy, like...)",
      usage: "Một số động từ như \"mind\", \"fancy\", \"enjoy\", \"like\", \"love\" được theo sau bởi một danh động từ (V-ing), không phải động từ nguyên mẫu có \"to\".",
      formulas: [
        "mind/fancy/enjoy/like/love + V-ing.",
        "He doesn't mind doing a lot of homework.",
        "Do you fancy going around the West Lake with me?"
      ],
      signals: ["mind + V-ing", "fancy + V-ing", "enjoy + V-ing"],
      examples: [
        { en: "He doesn't mind doing a lot of homework.", vi: "Anh ấy không phiền khi phải làm nhiều bài tập." },
        { en: "Do you fancy going around the West Lake with me this Sunday morning?", vi: "Bạn có thích đi vòng quanh Hồ Tây với mình sáng Chủ nhật này không?" }
      ],
      mistakes: [
        { wrong: "He doesn't mind to do a lot of homework.", right: "He doesn't mind doing a lot of homework." },
        { wrong: "Do you fancy to go around the lake?", right: "Do you fancy going around the lake?" }
      ],
      practice: {
        level1: [
          { id: "g5l1a", type: "fillblank", prompt: "She really enjoys ______________ (collect) stamps in her free time.", accepted: ["collecting"], correct: "collecting", explanation: "enjoy + V-ing." }
        ],
        level2: [
          { id: "g5l2a", type: "fillblank", prompt: "Do you fancy ______________ (go) to the cinema this weekend?", accepted: ["going"], correct: "going", explanation: "fancy + V-ing." }
        ],
        level3: [
          { id: "g5l3a", type: "fillblank", prompt: "Rewrite so it keeps the same meaning: 'He doesn't mind if he has to do a lot of homework.' → He doesn't mind ______________ (do) a lot of homework.", accepted: ["doing"], correct: "doing", explanation: "mind + V-ing." }
        ]
      }
    }
  ],

  // ---------------------------------------------------------
  // PART 3 — READING PRACTICE
  // ---------------------------------------------------------
  reading: {
    passage: "One of the most obvious negative aspects of social networking is losing face-to-face contact with other people. Teens are sitting around with their phones in their hands all day long, tapping messages onto screens instead of communicating with real people. Many teenagers feel more comfortable with <mark data-w=\"virtual\">virtual</mark> friends than with real ones. The majority think that it is easier to chat on the Internet because they lack communication skills.<br><br>It is also true that parents often have no knowledge about what their kids do with their phones or computers. Experts say that while kids are <mark data-w=\"plugged\">plugged in</mark> to social media, only about 40% of parents are <mark data-w=\"involved\">involved</mark> themselves. And because parents don't know the full picture, they don't know how to deal with a teenager's <mark data-w=\"potential\">potential</mark> overuse of social media and might not even be <mark data-w=\"aware\">aware</mark> that a problem exists. Therefore, social networking can be much more immediately <mark data-w=\"engaging\">engaging</mark> with the teenager's life than parents are, and this fact makes virtual communication feel more \"real\" than face-to-face communication.",
    vocabInContext: {
      virtual: "ảo, trên mạng",
      plugged: "được kết nối/cắm vào (mạng)",
      involved: "tham gia, có liên quan",
      potential: "tiềm ẩn, có thể xảy ra",
      aware: "nhận thức được, biết về",
      engaging: "hấp dẫn, lôi cuốn"
    },
    translation: "Một trong những khía cạnh tiêu cực rõ ràng nhất của mạng xã hội là mất đi sự tiếp xúc trực tiếp với người khác. Thanh thiếu niên ngồi cả ngày với điện thoại trong tay, gõ tin nhắn lên màn hình thay vì giao tiếp với người thật. Nhiều thanh thiếu niên cảm thấy thoải mái hơn với bạn bè ảo hơn là bạn bè thật. Phần lớn nghĩ rằng trò chuyện trên Internet dễ dàng hơn vì họ thiếu kỹ năng giao tiếp.<br><br>Cũng đúng là các bậc phụ huynh thường không biết con cái họ làm gì với điện thoại hoặc máy tính. Các chuyên gia cho biết trong khi trẻ em kết nối với mạng xã hội, chỉ khoảng 40% phụ huynh tham gia cùng. Và vì phụ huynh không biết toàn bộ bức tranh, họ không biết cách xử lý việc lạm dụng mạng xã hội tiềm ẩn của con và thậm chí có thể không nhận ra rằng vấn đề đang tồn tại. Do đó, mạng xã hội có thể gắn kết trực tiếp hơn với cuộc sống của thanh thiếu niên so với phụ huynh, và điều này khiến giao tiếp ảo cảm thấy \"thật\" hơn giao tiếp trực tiếp.",
    practice: [
      { id: "r1", type: "truefalse", prompt: "Many teenagers prefer interacting with virtual friends because they find online communication easier.", correct: "True", explanation: "Bài đọc: 'Many teenagers feel more comfortable with virtual friends... it is easier to chat on the Internet.'" },
      { id: "r2", type: "truefalse", prompt: "According to the passage, teens lose face-to-face contact because they don't have mobile phones.", correct: "False", explanation: "Sai. Bài đọc nói ngược lại: họ mất kết nối trực tiếp VÌ luôn cầm điện thoại." },
      { id: "r3", type: "truefalse", prompt: "More than half of all parents are actively involved in supervising their children's social media use.", correct: "False", explanation: "Sai. Chỉ khoảng 40% phụ huynh tham gia — dưới một nửa." },
      { id: "r4", type: "truefalse", prompt: "Virtual communication can feel more real to teenagers than talking to people in person.", correct: "True", explanation: "Đúng. Bài đọc: 'this fact makes virtual communication feel more \"real\" than face-to-face communication.'" },
      { id: "r5", type: "mcq", prompt: "What is the main idea of the passage?", options: { A: "The negative impacts of social networks on teenagers' real-life contact and the lack of parental awareness.", B: "The benefits of using social media to improve teenagers' communication skills.", C: "The reasons why modern parents prefer virtual communication to face-to-face contact.", D: "The statistical evidence showing how technology helps teenagers connect with their families." }, correct: "A", explanation: "Bài đọc nói về việc mạng xã hội khiến teen mất kết nối trực tiếp và phụ huynh thiếu giám sát." },
      { id: "r6", type: "mcq", prompt: "Which of the following is NOT true according to the passage?", options: { A: "Parents always know how to handle their children's excessive use of social media.", B: "Many teenagers feel more comfortable with online friends than real-life friends.", C: "A large number of teenagers lack interpersonal communication skills.", D: "Only about 40% of parents are involved while their children use social media." }, correct: "A", explanation: "Bài đọc nói phụ huynh KHÔNG phải lúc nào cũng biết cách xử lý." },
      { id: "r7", type: "mcq", prompt: "According to the passage, why do many teenagers find it easier to chat on the Internet?", options: { A: "Because they lack communication skills.", B: "Because they are forced to by their parents.", C: "Because the Internet is free.", D: "Because their friends live far away." }, correct: "A", explanation: "Bài đọc: 'The majority think that it is easier to chat on the Internet because they lack communication skills.'" },
      { id: "r8", type: "fillblank", prompt: "Find the word in the passage that means 'nhận thức được, biết về' (adj).", accepted: ["aware"], correct: "aware", explanation: "'might not even be aware that a problem exists' — aware (adj) = nhận thức được." },
      { id: "r9", type: "mcq", prompt: "According to the passage, what percentage of parents are involved in their children's social media use?", options: { A: "About 40%.", B: "About 60%.", C: "About 90%.", D: "Almost 100%." }, correct: "A", explanation: "Bài đọc: 'only about 40% of parents are involved themselves.'" }
    ]
  },

  // ---------------------------------------------------------
  // PART 4 — TRANSLATION PRACTICE
  // ---------------------------------------------------------
  translation: [
    { id: "t1", en: "A hobby is a regular activity that is done for enjoyment, typically during one's free time.", suggested: "Sở thích là một hoạt động thường xuyên được thực hiện để giải trí, thường vào thời gian rảnh của một người.", notes: "Từ vựng: <i>free time</i> (thời gian rảnh). Mệnh đề quan hệ 'that is done for enjoyment' bổ nghĩa cho 'activity'." },
    { id: "t2", en: "Indulging in a hobby is actually good for a sound health.", suggested: "Đắm mình vào một sở thích thực ra rất tốt cho sức khỏe.", notes: "Cấu trúc 'V-ing + is + adj' — danh động từ làm chủ ngữ." },
    { id: "t3", en: "Teens are sitting around with their phones in their hands all day long.", suggested: "Thanh thiếu niên ngồi cả ngày với điện thoại trong tay.", notes: "Thì hiện tại tiếp diễn 'are sitting' diễn tả thói quen đáng chú ý/phàn nàn." },
    { id: "t4", en: "Parents often have no knowledge about what their kids do with their phones or computers.", suggested: "Phụ huynh thường không biết con cái họ làm gì với điện thoại hoặc máy tính.", notes: "Mệnh đề danh từ 'what their kids do...' làm tân ngữ của giới từ 'about'." },
    { id: "t5", en: "Social networking can be much more immediately engaging with the teenager's life than parents are.", suggested: "Mạng xã hội có thể gắn kết trực tiếp hơn nhiều với cuộc sống của thanh thiếu niên so với phụ huynh.", notes: "So sánh hơn 'much more engaging... than' nhấn mạnh sự chênh lệch." }
  ],

  // ---------------------------------------------------------
  // PART 5 — SENTENCE TRANSFORMATION PRACTICE
  // ---------------------------------------------------------
  transformation: [
    {
      id: "tr1", name: "Danh động từ làm chủ ngữ ⇄ It is + adj + to V",
      formula: "V-ing + is + adj  →  It is + adj + to V",
      example: { before: "Playing board games is very interesting.", after: "It is very interesting to play board games." },
      practice: [
        { id: "tr1p1", type: "fillblank", prompt: "Doing DIY projects is quite relaxing. → It is quite relaxing ______________ (do) DIY projects.", accepted: ["to do"], correct: "to do", explanation: "V-ing làm chủ ngữ → It is + adj + to V." },
        { id: "tr1p2", type: "fillblank", prompt: "Collecting stamps is very enjoyable. → It is very enjoyable ______________ (collect) stamps.", accepted: ["to collect"], correct: "to collect", explanation: "V-ing làm chủ ngữ → It is + adj + to V." }
      ]
    },
    {
      id: "tr2", name: "insist on sb's V-ing ⇄ want sb to V",
      formula: "S + insist(s) on + sb's + V-ing  →  S + want(s) + O + to + V",
      example: { before: "My parents insist on my learning another language.", after: "My parents want me to learn another language." },
      practice: [
        { id: "tr2p1", type: "fillblank", prompt: "The teacher insists on our finishing the project this week. → The teacher wants ______________ (finish) the project this week.", accepted: ["us to finish"], correct: "us to finish", explanation: "insist on sb's V-ing → want sb to V." },
        { id: "tr2p2", type: "fillblank", prompt: "My dad insists on my joining a sports club. → My dad wants ______________ (join) a sports club.", accepted: ["me to join"], correct: "me to join", explanation: "insist on sb's V-ing → want sb to V." }
      ]
    },
    {
      id: "tr3", name: "spend time V-ing ⇄ take up time V-ing / take time to V",
      formula: "S + spend(s) + time + V-ing  →  S + take(s) up + time + V-ing",
      example: { before: "My brother spends his free time playing computer games.", after: "My brother takes up his free time playing computer games." },
      practice: [
        { id: "tr3p1", type: "fillblank", prompt: "She spends every weekend gardening. → She ______________ (take up) every weekend gardening.", accepted: ["takes up"], correct: "takes up", explanation: "spend time V-ing → take up time V-ing." },
        { id: "tr3p2", type: "fillblank", prompt: "We spend hours chatting online. → We ______________ (take up) hours chatting online.", accepted: ["take up"], correct: "take up", explanation: "spend time V-ing → take up time V-ing." }
      ]
    },
    {
      id: "tr4", name: "shouldn't ⇄ had better not",
      formula: "S + shouldn't + V  →  S + had better not + V",
      example: { before: "You should not spend too much time surfing the Internet.", after: "You had better not spend too much time surfing the Internet." },
      practice: [
        { id: "tr4p1", type: "fillblank", prompt: "You shouldn't ignore your homework. → You ______________ ignore your homework.", accepted: ["had better not"], correct: "had better not", explanation: "shouldn't ⇄ had better not." },
        { id: "tr4p2", type: "fillblank", prompt: "We shouldn't waste our free time doing nothing. → We ______________ waste our free time doing nothing.", accepted: ["had better not"], correct: "had better not", explanation: "shouldn't ⇄ had better not." }
      ]
    }
  ],

  // ---------------------------------------------------------
  // PART 6 — QUICK REVIEW (mini test, all skills)
  // ---------------------------------------------------------
  quickReview: [
    { id: "q1", cat: "Vocabulary", type: "mcq", prompt: "'Activist' means:", options: { A: "nhà hoạt động xã hội", B: "diễn viên", C: "vận động viên", D: "nghệ sĩ" }, correct: "A", explanation: "activist (n) = nhà hoạt động xã hội." },
    { id: "q2", cat: "Vocabulary", type: "mcq", prompt: "'Virtual' means:", options: { A: "thật, có thực", B: "ảo, trên mạng", C: "quan trọng", D: "nguy hiểm" }, correct: "B", explanation: "virtual (adj) = ảo, trên mạng." },
    { id: "q3", cat: "Vocabulary", type: "fillblank", prompt: "We should encourage her to do more ______________ (ngoài trời) activities.", accepted: ["outdoor"], correct: "outdoor", explanation: "outdoor (adj) = ngoài trời." },
    { id: "q4", cat: "Grammar", type: "mcq", prompt: "Playing board games is very interesting. → It is very interesting ______ play board games.", options: { A: "to", B: "for", C: "at", D: "of" }, correct: "A", explanation: "It is + adj + to V." },
    { id: "q5", cat: "Grammar", type: "mcq", prompt: "He doesn't mind ______ a lot of homework.", options: { A: "to do", B: "doing", C: "does", D: "did" }, correct: "B", explanation: "mind + V-ing." },
    { id: "q6", cat: "Grammar", type: "fillblank", prompt: "You should not spend too much time surfing the Internet. → You ______________ spend too much time surfing the Internet.", accepted: ["had better not"], correct: "had better not", explanation: "shouldn't ⇄ had better not." },
    { id: "q7", cat: "Grammar", type: "fillblank", prompt: "My parents insist on my learning another language. → My parents want ______________ (learn) another language.", accepted: ["me to learn"], correct: "me to learn", explanation: "insist on sb's V-ing → want sb to V." },
    { id: "q8", cat: "Reading", type: "truefalse", prompt: "According to the passage, teens lose face-to-face contact because they don't have mobile phones.", correct: "False", explanation: "Bài đọc nói ngược lại: họ mất kết nối trực tiếp vì luôn cầm điện thoại." },
    { id: "q9", cat: "Reading", type: "truefalse", prompt: "Virtual communication can feel more real to teenagers than talking to people in person.", correct: "True", explanation: "Bài đọc: 'this fact makes virtual communication feel more real...'" },
    { id: "q10", cat: "Reading", type: "mcq", prompt: "What is the main idea of the social networking passage?", options: { A: "The negative impacts of social networks on teenagers' real-life contact and the lack of parental awareness.", B: "How to become a social media influencer.", C: "The benefits of using social media for education.", D: "The history of social networking sites." }, correct: "A", explanation: "Bài đọc nói về tác động tiêu cực của mạng xã hội và việc phụ huynh thiếu giám sát." },
    { id: "q11", cat: "Writing", type: "fillblank", prompt: "My brother usually spends his free time playing computer games. → My brother usually ______________ his free time playing computer games.", accepted: ["takes up"], correct: "takes up", explanation: "spend time V-ing → take up time V-ing." },
    { id: "q12", cat: "Writing", type: "fillblank", prompt: "Julie finds making crafts boring. → Julie is not ______________ making crafts.", accepted: ["interested in"], correct: "interested in", explanation: "find sth boring → not be interested in sth." },
    { id: "q13", cat: "Writing", type: "fillblank", prompt: "Playing board games is very interesting. → It is very interesting ______________ (play) board games.", accepted: ["to play"], correct: "to play", explanation: "V-ing làm chủ ngữ → It is + adj + to V." },
    { id: "q14", cat: "Vocabulary", type: "mcq", prompt: "If you like ______ stamps, you can join a stamp club.", options: { A: "collecting", B: "involving", C: "surfing", D: "relaxing" }, correct: "A", explanation: "'collect stamps' = sưu tầm tem." }
  ]
};
