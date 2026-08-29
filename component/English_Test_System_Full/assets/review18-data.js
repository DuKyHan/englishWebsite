const REVIEW = {
  id: "test18",
  testFile: "test18.html",
  grade: "Grade 9 — Global Success",
  unit: "Unit 3: Healthy living for teens",
  title: "Knowledge Review — Unit 3, Practice Test 2",

  // ---------------------------------------------------------
  // PART 1 — VOCABULARY REVIEW
  // ---------------------------------------------------------
  vocabulary: [
    { word: "achieve", pos: "v", ipa: "/əˈtʃiːv/", meaning: "đạt được", example: "You should try to achieve a study-life balance to stay healthy.", exampleVi: "Bạn nên cố gắng đạt được sự cân bằng học tập-cuộc sống để giữ sức khỏe." },
    { word: "worried about", pos: "adj phr", ipa: "/ˈwʌrid əˈbaʊt/", meaning: "lo lắng về", example: "Are you still worried about your upcoming final exams?", exampleVi: "Bạn vẫn còn lo lắng về kỳ thi cuối kỳ sắp tới à?" },
    { word: "distraction", pos: "n", ipa: "/dɪˈstrækʃn/", meaning: "sự xao nhãng", example: "There are too many distractions in this room.", exampleVi: "Có quá nhiều thứ gây xao nhãng trong phòng này." },
    { word: "by heart", pos: "adv phr", ipa: "/baɪ hɑːrt/", meaning: "thuộc lòng", example: "I spent the whole morning learning it by heart.", exampleVi: "Tôi đã dành cả buổi sáng để học thuộc lòng nó." },
    { word: "dehydrated", pos: "adj", ipa: "/diːˈhaɪdreɪtɪd/", meaning: "mất nước", example: "Unless you drink enough water, you will become dehydrated.", exampleVi: "Trừ khi bạn uống đủ nước, nếu không bạn sẽ bị mất nước." },
    { word: "accomplish", pos: "v", ipa: "/əˈkʌmplɪʃ/", meaning: "hoàn thành", example: "I accomplished the project, but it took me all night.", exampleVi: "Tôi đã hoàn thành dự án, nhưng phải mất cả đêm." },
    { word: "maintain good posture", pos: "v phr", ipa: "/meɪnˈteɪn ɡʊd ˈpɒstʃər/", meaning: "duy trì tư thế đúng", example: "If you maintain good posture, you may avoid back pain.", exampleVi: "Nếu bạn duy trì tư thế đúng, bạn có thể tránh được đau lưng." },
    { word: "incorporate", pos: "v", ipa: "/ɪnˈkɔːrpəreɪt/", meaning: "kết hợp, đưa vào", example: "You should incorporate several minutes of activity into your routine.", exampleVi: "Bạn nên đưa vài phút hoạt động thể chất vào thói quen hằng ngày." },
    { word: "time management", pos: "n phr", ipa: "/taɪm ˈmænɪdʒmənt/", meaning: "quản lý thời gian", example: "With some good time management techniques, it's possible to achieve a study-life balance.", exampleVi: "Với vài kỹ thuật quản lý thời gian tốt, có thể đạt được cân bằng học tập-cuộc sống." },
    { word: "allocate", pos: "v", ipa: "/ˈæləkeɪt/", meaning: "phân bổ", example: "Plan your week in advance, allocating specific times for studying and doing homework.", exampleVi: "Lên kế hoạch trước cho tuần của bạn, phân bổ thời gian cụ thể cho việc học và làm bài tập." },
    { word: "prioritise", pos: "v", ipa: "/praɪˈɒrətaɪz/", meaning: "ưu tiên", example: "Secondly, learn to prioritise.", exampleVi: "Thứ hai, hãy học cách ưu tiên." },
    { word: "overwhelmed", pos: "adj", ipa: "/ˌoʊvərˈwelmd/", meaning: "quá tải, choáng ngợp", example: "It's okay to say no sometimes if you feel overwhelmed.", exampleVi: "Không sao cả nếu đôi khi bạn từ chối vì cảm thấy quá tải." },
    { word: "take advantage of", pos: "v phr", ipa: "/teɪk ədˈvæntɪdʒ əv/", meaning: "tận dụng", example: "Take advantage of any free time during the day.", exampleVi: "Hãy tận dụng bất kỳ thời gian rảnh nào trong ngày." },
    { word: "balanced diet", pos: "n phr", ipa: "/ˈbælənst ˈdaɪət/", meaning: "chế độ ăn cân bằng", example: "Eating healthily consists of eating a balance of the five food groups.", exampleVi: "Ăn uống lành mạnh bao gồm việc ăn cân bằng năm nhóm thực phẩm." },
    { word: "brain function", pos: "n phr", ipa: "/breɪn ˈfʌŋkʃn/", meaning: "chức năng não bộ", example: "Having a balanced diet will result in better brain function.", exampleVi: "Có một chế độ ăn cân bằng sẽ giúp chức năng não bộ tốt hơn." },
    { word: "priority", pos: "n", ipa: "/praɪˈɒrəti/", meaning: "sự ưu tiên", example: "The company's top priority is to improve customer service.", exampleVi: "Ưu tiên hàng đầu của công ty là cải thiện dịch vụ khách hàng." },
    { word: "give priority to", pos: "v phr", ipa: "/ɡɪv praɪˈɒrəti tuː/", meaning: "ưu tiên cho", example: "The government must give priority to education and healthcare.", exampleVi: "Chính phủ phải ưu tiên cho giáo dục và y tế." },
    { word: "come up with", pos: "phr v", ipa: "/kʌm ʌp wɪð/", meaning: "đưa ra, nghĩ ra (giải pháp)", example: "The team finally came up with a good solution to the problem.", exampleVi: "Cuối cùng đội đã nghĩ ra một giải pháp tốt cho vấn đề." }
  ],

  vocabPractice: {
    mcq: [
      { id: "vp1", prompt: "Choose the word that means 'quản lý thời gian':", options: { A: "time management", B: "brain function", C: "balanced diet", D: "distraction" }, correct: "A", explanation: "<b>time management</b> (n phr) = quản lý thời gian." },
      { id: "vp2", prompt: "Choose the word that means 'mất nước':", options: { A: "overwhelmed", B: "dehydrated", C: "accomplish", D: "incorporate" }, correct: "B", explanation: "<b>dehydrated</b> (adj) = mất nước." },
      { id: "vp3", prompt: "\"I spent the whole morning learning it ______, sir.\"", options: { A: "by heart", B: "by memory", C: "academic", D: "compulsory" }, correct: "A", explanation: "\"learn something <b>by heart</b>\" (học thuộc lòng) là cụm cố định." },
      { id: "vp4", prompt: "Choose the word that means 'tận dụng':", options: { A: "take advantage of", B: "give priority to", C: "come up with", D: "maintain good posture" }, correct: "A", explanation: "<b>take advantage of</b> (v phr) = tận dụng." },
      { id: "vp5", prompt: "\"The team finally ______ a good solution to the problem.\"", options: { A: "gave priority to", B: "came up with", C: "took advantage of", D: "allocated" }, correct: "B", explanation: "\"<b>came up with</b> a solution\" (nghĩ ra một giải pháp) phù hợp với ngữ cảnh." },
      { id: "vp6", prompt: "Choose the word that means 'quá tải, choáng ngợp':", options: { A: "overwhelmed", B: "optimistic", C: "motivated", D: "balanced" }, correct: "A", explanation: "<b>overwhelmed</b> (adj) = quá tải, choáng ngợp." }
    ],
    fillblank: [
      { id: "vf1", prompt: "You should try to ______________ (đạt được) a study-life balance to stay healthy.", accepted: ["achieve"], correct: "achieve", explanation: "<b>achieve</b> (v) = đạt được." },
      { id: "vf2", prompt: "Unless you drink enough water, you will become ______________ (mất nước).", accepted: ["dehydrated"], correct: "dehydrated", explanation: "<b>dehydrated</b> (adj) = mất nước." },
      { id: "vf3", prompt: "If you ______________ (duy trì tư thế đúng), you may avoid back pain.", accepted: ["maintain good posture"], correct: "maintain good posture", explanation: "<b>maintain good posture</b> (v phr) = duy trì tư thế đúng." },
      { id: "vf4", prompt: "You should ______________ (kết hợp) several minutes of activity into your routine.", accepted: ["incorporate"], correct: "incorporate", explanation: "<b>incorporate</b> (v) = kết hợp, đưa vào." },
      { id: "vf5", prompt: "The team finally ______________ (đưa ra) a good solution to the problem.", accepted: ["came up with"], correct: "came up with", explanation: "<b>come up with</b> (phr v) = đưa ra, nghĩ ra (giải pháp)." },
      { id: "vf6", prompt: "The government must ______________ (ưu tiên cho) education and healthcare.", accepted: ["give priority to"], correct: "give priority to", explanation: "<b>give priority to</b> (v phr) = ưu tiên cho." }
    ],
    matching: {
      left: ["time management", "priority", "balanced diet", "overwhelmed", "incorporate", "come up with"],
      right: ["quản lý thời gian", "sự ưu tiên", "chế độ ăn cân bằng", "quá tải, choáng ngợp", "kết hợp, đưa vào", "đưa ra, nghĩ ra (giải pháp)"],
      correctMap: [0, 1, 2, 3, 4, 5]
    },
    chooseWord: [
      { id: "cw1", prompt: "\"You should find activities that you enjoy to stay ______.\" (MOTIVATE)", options: { A: "motivate", B: "motivated", C: "motivation", D: "motivating" }, correct: "B", explanation: "Cần tính từ sau \"stay\" → motivate (v) → <b>motivated</b> (adj)." },
      { id: "cw2", prompt: "\"Eating a ______ diet helps in maintaining energy levels.\" (BALANCE)", options: { A: "balance", B: "balancing", C: "balanced", D: "balances" }, correct: "C", explanation: "Cần tính từ trước \"diet\" → balance (n/v) → <b>balanced</b> (adj)." },
      { id: "cw3", prompt: "\"The ______ advised the student on how to reduce stress.\" (COUNSEL)", options: { A: "counsel", B: "counselling", C: "counsellor", D: "counselled" }, correct: "C", explanation: "Cần danh từ chỉ người làm chủ ngữ → counsel (v) → <b>counsellor</b> (n)." }
    ],
    wordMeaning: [
      { id: "wm1", prompt: "What does 'priority' mean?", options: { A: "sự lo âu", B: "sự ưu tiên", C: "sự xao nhãng", D: "sự mệt mỏi" }, correct: "B", explanation: "priority (n) = sự ưu tiên." },
      { id: "wm2", prompt: "What does 'incorporate' mean?", options: { A: "loại bỏ", B: "kết hợp, đưa vào", C: "trì hoãn", D: "sao chép" }, correct: "B", explanation: "incorporate (v) = kết hợp, đưa vào." },
      { id: "wm3", prompt: "What does 'come up with' mean?", options: { A: "từ bỏ", B: "đưa ra, nghĩ ra (giải pháp)", C: "phá hủy", D: "che giấu" }, correct: "B", explanation: "come up with (phr v) = đưa ra, nghĩ ra (giải pháp)." }
    ],
    wordForm: [
      { id: "wf1", prompt: "You should find activities that you enjoy to stay (MOTIVATE) ______________.", accepted: ["motivated"], correct: "motivated", explanation: "motivate (v) → motivated (adj)." },
      { id: "wf2", prompt: "Eating a (BALANCE) ______________ diet helps in maintaining energy levels.", accepted: ["balanced"], correct: "balanced", explanation: "balance (n/v) → balanced (adj)." },
      { id: "wf3", prompt: "High levels of (ANXIOUS) ______________ can lead to poor health in teens.", accepted: ["anxiety"], correct: "anxiety", explanation: "anxious (adj) → anxiety (n)." }
    ]
  },

  // ---------------------------------------------------------
  // PART 2 — GRAMMAR REVIEW & PRACTICE
  // ---------------------------------------------------------
  grammar: [
    {
      id: "g1", name: "suggest + V-ing ⇄ Lời đề nghị trực tiếp \"said: Perhaps we should + V\"",
      usage: "Cấu trúc \"suggest + V-ing\" (đề nghị làm gì) có thể được diễn đạt lại thành lời nói trực tiếp dùng \"said: Perhaps we should + V\" khi tường thuật lại đề xuất của ai đó.",
      formulas: [
        "S + suggested + V-ing.  →  S + said: \"Perhaps we should + V.\"",
        "Nam suggested cycling around the West Lake this weekend. → Nam said: \"Perhaps we should cycle around the West Lake this weekend.\""
      ],
      signals: ["suggested + V-ing", "said: \"Perhaps we should + V\""],
      examples: [
        { en: "Nam suggested cycling around the West Lake this weekend.", vi: "Nam đã đề nghị đạp xe quanh Hồ Tây cuối tuần này." },
        { en: "Nam said: \"Perhaps we should cycle around the West Lake this weekend.\"", vi: "Nam nói: \"Có lẽ chúng ta nên đạp xe quanh Hồ Tây cuối tuần này.\"" }
      ],
      mistakes: [
        { wrong: "Nam suggested to cycle around the West Lake.", right: "Nam suggested cycling around the West Lake. (suggest + V-ing, không dùng suggest + to V)" }
      ],
      practice: {
        level1: [
          { id: "g1l1a", type: "fillblank", prompt: "Lan suggested joining the yoga class. → Lan said: \"Perhaps we ______________ (should join) the yoga class.\"", accepted: ["should join"], correct: "should join", explanation: "suggested + V-ing → said: \"Perhaps we should + V.\"" }
        ],
        level2: [
          { id: "g1l2a", type: "fillblank", prompt: "Rewrite: 'Minh suggested making a weekly schedule.' → Minh said: \"Perhaps we ______________ (should make) a weekly schedule.\"", accepted: ["should make"], correct: "should make", explanation: "suggested + V-ing → said: \"Perhaps we should + V.\"" }
        ],
        level3: [
          { id: "g1l3a", type: "fillblank", prompt: "Rewrite so it keeps the same meaning: 'The doctor suggested drinking more water every day.' → ______________ (The doctor said: \"Perhaps we should drink more water every day.\").", accepted: ["the doctor said: \"perhaps we should drink more water every day.\""], correct: "The doctor said: \"Perhaps we should drink more water every day.\"", explanation: "suggested + V-ing → said: \"Perhaps we should + V.\"" }
        ]
      }
    },
    {
      id: "g2", name: "Chủ ngữ giả It (+ for sb) ⇄ Chủ ngữ thật V-ing (+ for sb)",
      usage: "\"It is + adj + for sb + to V\" có thể chuyển sang chủ ngữ thật là danh động từ đứng đầu câu, giữ nguyên cụm \"for sb\", cùng ý nghĩa.",
      formulas: [
        "It is + adj + for sb + to V.  →  V-ing + is + adj + for sb.",
        "It is really difficult for students to give priority to work and school. → Giving priority to work and school is really difficult for students."
      ],
      signals: ["It is + adj + for sb + to V", "V-ing + is + adj + for sb"],
      examples: [
        { en: "It is really difficult for students to give priority to work and school.", vi: "Việc ưu tiên cho công việc và trường học thực sự khó khăn đối với học sinh." },
        { en: "Giving priority to work and school is really difficult for students.", vi: "Ưu tiên cho công việc và trường học thực sự khó khăn đối với học sinh." }
      ],
      mistakes: [
        { wrong: "Give priority to work is difficult for students.", right: "Giving priority to work is difficult for students. (cần V-ing làm chủ ngữ, không dùng V nguyên mẫu)" }
      ],
      practice: {
        level1: [
          { id: "g2l1a", type: "fillblank", prompt: "It is important for teenagers to get enough sleep. → ______________ (Getting) enough sleep is important for teenagers.", accepted: ["Getting"], correct: "Getting", explanation: "It is + adj + for sb + to V → V-ing + is + adj + for sb." }
        ],
        level2: [
          { id: "g2l2a", type: "fillblank", prompt: "Rewrite: 'It is necessary for students to maintain a balanced diet.' → ______________ (Maintaining) a balanced diet is necessary for students.", accepted: ["Maintaining"], correct: "Maintaining", explanation: "It is + adj + for sb + to V → V-ing + is + adj + for sb." }
        ],
        level3: [
          { id: "g2l3a", type: "fillblank", prompt: "Rewrite so it keeps the same meaning: 'It is difficult for teenagers to avoid distractions while studying.' → ______________ (Avoiding distractions while studying is difficult for teenagers).", accepted: ["avoiding distractions while studying is difficult for teenagers"], correct: "Avoiding distractions while studying is difficult for teenagers", explanation: "It is + adj + for sb + to V → V-ing + is + adj + for sb." }
        ]
      }
    },
    {
      id: "g3", name: "If ... don't ⇄ Unless",
      usage: "\"If + S + don't/doesn't + V\" có thể chuyển thành \"Unless + S + V (khẳng định)\" — \"unless\" đã mang nghĩa phủ định (= if...not), nên bỏ \"don't/doesn't\".",
      formulas: [
        "If + S + don't/doesn't + V, S + will + V.  →  Unless + S + V, S + will + V.",
        "If you don't drink enough water, you will become dehydrated. → Unless you drink enough water, you will become dehydrated."
      ],
      signals: ["If ... don't ...", "Unless ..."],
      examples: [
        { en: "If you don't drink enough water, you will become dehydrated.", vi: "Nếu bạn không uống đủ nước, bạn sẽ bị mất nước." },
        { en: "Unless you drink enough water, you will become dehydrated.", vi: "Trừ khi bạn uống đủ nước, nếu không bạn sẽ bị mất nước." }
      ],
      mistakes: [
        { wrong: "Unless you don't maintain good posture, you may avoid back pain.", right: "Unless you maintain good posture, you may avoid back pain. (không dùng \"don't\" sau \"unless\")" }
      ],
      practice: {
        level1: [
          { id: "g3l1a", type: "fillblank", prompt: "If you don't take enough rest, you will get sick. → ______________ (Unless) you take enough rest, you will get sick.", accepted: ["Unless"], correct: "Unless", explanation: "If ... don't → Unless." }
        ],
        level2: [
          { id: "g3l2a", type: "fillblank", prompt: "Rewrite: 'If you don't eat a balanced diet, you will lack energy.' → ______________ (Unless) you eat a balanced diet, you will lack energy.", accepted: ["Unless"], correct: "Unless", explanation: "If ... don't → Unless." }
        ],
        level3: [
          { id: "g3l3a", type: "fillblank", prompt: "Rewrite so it keeps the same meaning: 'If you don't exercise regularly, you will gain weight.' → ______________ (Unless you exercise regularly, you will gain weight).", accepted: ["unless you exercise regularly, you will gain weight"], correct: "Unless you exercise regularly, you will gain weight", explanation: "If ... don't → Unless." }
        ]
      }
    },
    {
      id: "g4", name: "produce a solution ⇄ come up with a solution",
      usage: "\"produce a solution\" và \"come up with a solution\" là hai cách diễn đạt đồng nghĩa, đều có nghĩa là tìm ra/đưa ra một giải pháp.",
      formulas: [
        "S + produced + a solution.  →  S + came up with + a solution.",
        "The team finally produced a good solution to the problem. → The team finally came up with a good solution to the problem."
      ],
      signals: ["produce a solution", "come up with a solution"],
      examples: [
        { en: "The team finally produced a good solution to the problem.", vi: "Cuối cùng đội đã đưa ra một giải pháp tốt cho vấn đề." },
        { en: "The team finally came up with a good solution to the problem.", vi: "Cuối cùng đội đã nghĩ ra một giải pháp tốt cho vấn đề." }
      ],
      mistakes: [
        { wrong: "The team came up a good solution.", right: "The team came up with a good solution. (cụm động từ đầy đủ là \"come up with\")" }
      ],
      practice: {
        level1: [
          { id: "g4l1a", type: "fillblank", prompt: "She produced a great idea for the project. → She ______________ (came up with) a great idea for the project.", accepted: ["came up with"], correct: "came up with", explanation: "produce a solution/idea → come up with a solution/idea." }
        ],
        level2: [
          { id: "g4l2a", type: "fillblank", prompt: "Rewrite: 'The scientists produced a new method to save energy.' → The scientists ______________ (came up with) a new method to save energy.", accepted: ["came up with"], correct: "came up with", explanation: "produce → come up with." }
        ],
        level3: [
          { id: "g4l3a", type: "fillblank", prompt: "Rewrite so it keeps the same meaning: 'The students produced an interesting solution to the problem.' → ______________ (The students came up with an interesting solution to the problem).", accepted: ["the students came up with an interesting solution to the problem"], correct: "The students came up with an interesting solution to the problem", explanation: "produce → come up with." }
        ]
      }
    },
    {
      id: "g5", name: "Câu điều kiện loại 1 với \"may\" diễn tả khả năng",
      usage: "Câu điều kiện loại 1 có thể dùng \"may\" thay cho \"will\" ở mệnh đề chính để diễn tả một khả năng có thể xảy ra (không chắc chắn tuyệt đối như \"will\").",
      formulas: [
        "If + S + V(hiện tại đơn), S + may + V.",
        "If you maintain good posture, you may avoid back pain."
      ],
      signals: ["If + hiện tại đơn, may + V"],
      examples: [
        { en: "If you maintain good posture, you may avoid back pain.", vi: "Nếu bạn duy trì tư thế đúng, bạn có thể tránh được đau lưng." },
        { en: "If you eat more vegetables, you may improve your health.", vi: "Nếu bạn ăn nhiều rau hơn, bạn có thể cải thiện sức khỏe." }
      ],
      mistakes: [
        { wrong: "If you maintain good posture, you may avoided back pain.", right: "If you maintain good posture, you may avoid back pain. (sau \"may\" dùng động từ nguyên mẫu)" }
      ],
      practice: {
        level1: [
          { id: "g5l1a", type: "fillblank", prompt: "If you drink enough water, you ______________ (may avoid) dehydration.", accepted: ["may avoid"], correct: "may avoid", explanation: "If + hiện tại đơn, S + may + V." }
        ],
        level2: [
          { id: "g5l2a", type: "fillblank", prompt: "Combine: 'You get enough sleep. You may feel more energetic.' → If you ______________ (get) enough sleep, you may feel more energetic.", accepted: ["get"], correct: "get", explanation: "If + hiện tại đơn, S + may + V." }
        ],
        level3: [
          { id: "g5l3a", type: "fillblank", prompt: "Rewrite so it keeps the same meaning: 'You take short breaks. You may concentrate better.' → ______________ (If you take short breaks, you may concentrate better).", accepted: ["if you take short breaks, you may concentrate better"], correct: "If you take short breaks, you may concentrate better", explanation: "If + hiện tại đơn, S + may + V." }
        ]
      }
    }
  ],

  // ---------------------------------------------------------
  // PART 3 — READING PRACTICE
  // ---------------------------------------------------------
  reading: {
    passage: "Teenagers can live a balanced lifestyle by getting enough exercise, eating healthily and having enough rest. They need to be involved in a fair level of <mark data-w=\"physical activity\">physical activity</mark> to maintain a fit and healthy lifestyle. Physical activity can include a variety of activities such as cycling, playing sports, or walking a dog. Teenagers should aim to perform two or more of these activities regularly. Healthy eating is also an important part of a teenager's life. A human needs food to create energy so that they can function. Eating healthily consists of eating a balance of the five food groups. These include: fruit, vegetables, meat, dairy and a small amount of <mark data-w=\"sugary foods\">sugary foods</mark>. Having a balanced diet will result in better <mark data-w=\"brain function\">brain function</mark>, healthy weight gain and greater fitness. Finally, a person needs to stop work or movement in order to relax, <mark data-w=\"refresh\">refresh</mark> oneself and <mark data-w=\"recover\">recover</mark>. Many people think that rest and sleep are the same thing but they are not. Sleep is when your body shuts down to repair and refresh itself. Rest is a time where your body relaxes such as when you go on a holiday or engage in activities that make you happy and give you pleasure. When you rest, you relax and relieve your mind and body of all the things in life that may cause you stress.",
    vocabInContext: {
      "physical activity": "hoạt động thể chất",
      "sugary foods": "đồ ăn có đường",
      "brain function": "chức năng não bộ",
      refresh: "làm mới, hồi sức",
      recover: "hồi phục"
    },
    translation: "<b>LỐI SỐNG CÂN BẰNG CỦA THANH THIẾU NIÊN</b><br><br>Thanh thiếu niên có thể sống một lối sống cân bằng bằng cách tập thể dục đầy đủ, ăn uống lành mạnh và nghỉ ngơi đầy đủ. Các em cần tham gia mức độ hoạt động thể chất hợp lý để duy trì lối sống khỏe mạnh. Hoạt động thể chất có thể bao gồm nhiều hoạt động khác nhau như đạp xe, chơi thể thao, hoặc dắt chó đi dạo. Thanh thiếu niên nên cố gắng thực hiện hai hoạt động trở lên trong số này một cách đều đặn. Ăn uống lành mạnh cũng là một phần quan trọng trong cuộc sống của thanh thiếu niên. Con người cần thức ăn để tạo ra năng lượng để có thể hoạt động. Ăn uống lành mạnh bao gồm việc ăn cân bằng năm nhóm thực phẩm. Các nhóm này gồm: trái cây, rau củ, thịt, sữa và một lượng nhỏ đồ ăn có đường. Có một chế độ ăn cân bằng sẽ giúp chức năng não tốt hơn, tăng cân lành mạnh và thể lực tốt hơn. Cuối cùng, một người cần ngừng công việc hoặc vận động để thư giãn, làm mới bản thân và hồi phục. Nhiều người nghĩ rằng nghỉ ngơi và ngủ là một, nhưng thực ra không phải vậy. Ngủ là khi cơ thể ngừng hoạt động để tự sửa chữa và hồi phục. Nghỉ ngơi là khoảng thời gian cơ thể thư giãn, chẳng hạn như khi đi nghỉ mát hoặc tham gia các hoạt động khiến bạn vui vẻ và thích thú. Khi nghỉ ngơi, bạn thư giãn và giải tỏa tâm trí cũng như cơ thể khỏi những điều trong cuộc sống có thể gây ra căng thẳng.",
    practice: [
      { id: "r1", type: "truefalse", prompt: "Teenagers are advised to do at least two types of physical activities on a regular basis.", correct: "True", explanation: "Bài đọc: 'Teenagers should aim to perform two or more of these activities regularly.'" },
      { id: "r2", type: "truefalse", prompt: "A healthy diet for teenagers should completely exclude foods that contain sugar.", correct: "False", explanation: "Sai. Bài đọc: 'a small amount of sugary foods' vẫn được bao gồm, không loại bỏ hoàn toàn." },
      { id: "r3", type: "truefalse", prompt: "Eating a balanced diet helps improve the way a person's brain works.", correct: "True", explanation: "Bài đọc: 'Having a balanced diet will result in better brain function.'" },
      { id: "r4", type: "truefalse", prompt: "According to the passage, rest and sleep have exactly the same meaning.", correct: "False", explanation: "Sai. Bài đọc: 'Many people think that rest and sleep are the same thing but they are not.'" },
      { id: "r5", type: "mcq", prompt: "What is the main idea of the passage?", options: { A: "The differences between sleep and rest for modern teenagers.", B: "How teenagers can achieve a balanced life through exercise, diet, and rest.", C: "The reasons why teenagers need more energy to function during the day.", D: "The best physical activities for teenagers to reduce stress and anxiety." }, correct: "B", explanation: "Bài đọc trình bày ba yếu tố (tập thể dục, ăn uống, nghỉ ngơi) giúp thiếu niên sống cân bằng." },
      { id: "r6", type: "mcq", prompt: "Which of the following is NOT true according to the passage?", options: { A: "Cycling and walking a dog are examples of good physical activities.", B: "Food is necessary for the human body to generate energy.", C: "Going on a holiday is considered a form of sleep to repair the body.", D: "Resting helps people reduce stress in their mind and body." }, correct: "C", explanation: "Bài đọc nói đi nghỉ mát là ví dụ của 'rest' (nghỉ ngơi), không phải 'sleep' (ngủ)." },
      { id: "r7", type: "fillblank", prompt: "Find the phrase in the passage that means 'chức năng não bộ' (n phr).", accepted: ["brain function"], correct: "brain function", explanation: "'Having a balanced diet will result in better brain function.' — brain function (n phr) = chức năng não bộ." },
      { id: "r8", type: "mcq", prompt: "According to the passage, what happens when you rest?", options: { A: "You relax and relieve your mind and body of stress.", B: "Your body shuts down completely like sleep.", C: "You automatically fall asleep.", D: "You stop eating and drinking." }, correct: "A", explanation: "Bài đọc: 'When you rest, you relax and relieve your mind and body of all the things in life that may cause you stress.'" },
      { id: "r9", type: "truefalse", prompt: "According to the passage, food gives humans the energy they need to function.", correct: "True", explanation: "Đúng. Bài đọc: 'A human needs food to create energy so that they can function.'" }
    ]
  },

  // ---------------------------------------------------------
  // PART 4 — TRANSLATION PRACTICE
  // ---------------------------------------------------------
  translation: [
    { id: "t1", en: "Teenagers can live a balanced lifestyle by getting enough exercise, eating healthily and having enough rest.", suggested: "Thanh thiếu niên có thể sống một lối sống cân bằng bằng cách tập thể dục đầy đủ, ăn uống lành mạnh và nghỉ ngơi đầy đủ.", notes: "\"by + V-ing\" (bằng cách làm gì) nêu phương tiện/cách thức." },
    { id: "t2", en: "A human needs food to create energy so that they can function.", suggested: "Con người cần thức ăn để tạo ra năng lượng để có thể hoạt động.", notes: "\"so that + S + can + V\" (để có thể làm gì) diễn tả mục đích." },
    { id: "t3", en: "Having a balanced diet will result in better brain function, healthy weight gain and greater fitness.", suggested: "Có một chế độ ăn cân bằng sẽ dẫn đến chức năng não tốt hơn, tăng cân lành mạnh và thể lực tốt hơn.", notes: "\"result in\" (dẫn đến, gây ra kết quả)." },
    { id: "t4", en: "Many people think that rest and sleep are the same thing but they are not.", suggested: "Nhiều người nghĩ rằng nghỉ ngơi và ngủ là một, nhưng thực ra không phải vậy.", notes: "\"think that + mệnh đề\" nêu suy nghĩ/quan điểm." },
    { id: "t5", en: "When you rest, you relax and relieve your mind and body of all the things in life that may cause you stress.", suggested: "Khi bạn nghỉ ngơi, bạn thư giãn và giải tỏa tâm trí cũng như cơ thể khỏi những điều trong cuộc sống có thể gây ra căng thẳng.", notes: "\"relieve sb/sth of sth\" (giải tỏa/giải phóng ai/cái gì khỏi điều gì)." }
  ],

  // ---------------------------------------------------------
  // PART 5 — SENTENCE TRANSFORMATION PRACTICE
  // ---------------------------------------------------------
  transformation: [
    {
      id: "tr1", name: "suggest + V-ing ⇄ said: \"Perhaps we should + V\"",
      formula: "S + suggested + V-ing  →  S + said: \"Perhaps we should + V.\"",
      example: { before: "Nam suggested cycling around the West Lake this weekend.", after: "Nam said: \"Perhaps we should cycle around the West Lake this weekend.\"" },
      practice: [
        { id: "tr1p1", type: "fillblank", prompt: "Lan suggested joining the yoga class. → Lan said: \"Perhaps we ______________ (should join) the yoga class.\"", accepted: ["should join"], correct: "should join", explanation: "suggested + V-ing → said: \"Perhaps we should + V.\"" },
        { id: "tr1p2", type: "fillblank", prompt: "Rewrite: 'The doctor suggested reducing sugar intake.' → The doctor said: \"Perhaps we ______________ (should reduce) sugar intake.\"", accepted: ["should reduce"], correct: "should reduce", explanation: "suggested + V-ing → said: \"Perhaps we should + V.\"" }
      ]
    },
    {
      id: "tr2", name: "Chủ ngữ giả It (+ for sb) ⇄ Chủ ngữ thật V-ing (+ for sb)",
      formula: "It is + adj + for sb + to V  →  V-ing + is + adj + for sb",
      example: { before: "It is really difficult for students to give priority to work and school.", after: "Giving priority to work and school is really difficult for students." },
      practice: [
        { id: "tr2p1", type: "fillblank", prompt: "It is essential for teenagers to maintain a balanced diet. → ______________ (Maintaining) a balanced diet is essential for teenagers.", accepted: ["Maintaining"], correct: "Maintaining", explanation: "It is + adj + for sb + to V → V-ing + is + adj + for sb." },
        { id: "tr2p2", type: "fillblank", prompt: "Rewrite: 'It is helpful for students to take short breaks.' → ______________ (Taking) short breaks is helpful for students.", accepted: ["Taking"], correct: "Taking", explanation: "It is + adj + for sb + to V → V-ing + is + adj + for sb." }
      ]
    },
    {
      id: "tr3", name: "If ... don't ⇄ Unless",
      formula: "If + S + don't/doesn't + V, S + will + V  →  Unless + S + V, S + will + V",
      example: { before: "If you don't drink enough water, you will become dehydrated.", after: "Unless you drink enough water, you will become dehydrated." },
      practice: [
        { id: "tr3p1", type: "fillblank", prompt: "If you don't rest enough, you will feel exhausted. → ______________ (Unless) you rest enough, you will feel exhausted.", accepted: ["Unless"], correct: "Unless", explanation: "If ... don't → Unless." },
        { id: "tr3p2", type: "fillblank", prompt: "Rewrite: 'If you don't eat breakfast, you will lack energy.' → ______________ (Unless) you eat breakfast, you will lack energy.", accepted: ["Unless"], correct: "Unless", explanation: "If ... don't → Unless." }
      ]
    },
    {
      id: "tr4", name: "produce a solution ⇄ come up with a solution",
      formula: "S + produced + a solution  →  S + came up with + a solution",
      example: { before: "The team finally produced a good solution to the problem.", after: "The team finally came up with a good solution to the problem." },
      practice: [
        { id: "tr4p1", type: "fillblank", prompt: "The class produced a creative plan for the trip. → The class ______________ (came up with) a creative plan for the trip.", accepted: ["came up with"], correct: "came up with", explanation: "produce → come up with." },
        { id: "tr4p2", type: "fillblank", prompt: "Rewrite: 'He produced a smart idea to save time.' → He ______________ (came up with) a smart idea to save time.", accepted: ["came up with"], correct: "came up with", explanation: "produce → come up with." }
      ]
    }
  ],

  // ---------------------------------------------------------
  // PART 6 — QUICK REVIEW (mini test, all skills)
  // ---------------------------------------------------------
  quickReview: [
    { id: "q1", cat: "Vocabulary", type: "mcq", prompt: "'Priority' means:", options: { A: "sự ưu tiên", B: "sự lo âu", C: "sự xao nhãng", D: "sự mệt mỏi" }, correct: "A", explanation: "priority (n) = sự ưu tiên." },
    { id: "q2", cat: "Vocabulary", type: "mcq", prompt: "'Dehydrated' means:", options: { A: "no nước", B: "mất nước", C: "tràn đầy năng lượng", D: "căng thẳng" }, correct: "B", explanation: "dehydrated (adj) = mất nước." },
    { id: "q3", cat: "Vocabulary", type: "fillblank", prompt: "You should ______________ (incorporate) several minutes of activity into your routine.", accepted: ["incorporate"], correct: "incorporate", explanation: "incorporate (v) = kết hợp, đưa vào." },
    { id: "q4", cat: "Grammar", type: "mcq", prompt: "Nam suggested cycling around the lake. → Nam said: \"Perhaps we ______ cycle around the lake.\"", options: { A: "should", B: "must", C: "can", D: "will" }, correct: "A", explanation: "said: \"Perhaps we should + V.\"" },
    { id: "q5", cat: "Grammar", type: "mcq", prompt: "It is difficult for students to balance work and study. → ______ work and study is difficult for students.", options: { A: "Balance", B: "Balancing", C: "Balanced", D: "To balance" }, correct: "B", explanation: "It is + adj + for sb + to V → V-ing + is + adj + for sb." },
    { id: "q6", cat: "Grammar", type: "fillblank", prompt: "If you don't drink enough water, you will become dehydrated. → ______________ (Unless) you drink enough water, you will become dehydrated.", accepted: ["Unless"], correct: "Unless", explanation: "If ... don't → Unless." },
    { id: "q7", cat: "Grammar", type: "fillblank", prompt: "The team produced a good solution. → The team ______________ (came up with) a good solution.", accepted: ["came up with"], correct: "came up with", explanation: "produce → come up with." },
    { id: "q8", cat: "Reading", type: "truefalse", prompt: "A healthy diet for teenagers should completely exclude foods that contain sugar.", correct: "False", explanation: "Sai. Vẫn được ăn một lượng nhỏ đồ ngọt." },
    { id: "q9", cat: "Reading", type: "truefalse", prompt: "Eating a balanced diet helps improve the way a person's brain works.", correct: "True", explanation: "Đúng theo bài đọc." },
    { id: "q10", cat: "Reading", type: "mcq", prompt: "What is the main idea of the healthy lifestyle passage?", options: { A: "How teenagers can achieve a balanced life through exercise, diet, and rest.", B: "The dangers of sugary foods.", C: "The best way to build muscle.", D: "How to make a weekly study schedule." }, correct: "A", explanation: "Bài đọc trình bày ba yếu tố giúp thiếu niên sống cân bằng." },
    { id: "q11", cat: "Writing", type: "fillblank", prompt: "You should find activities that you enjoy to stay ______________ (motivate).", accepted: ["motivated"], correct: "motivated", explanation: "motivate (v) → motivated (adj)." },
    { id: "q12", cat: "Writing", type: "fillblank", prompt: "Eating a ______________ (balance) diet helps in maintaining energy levels.", accepted: ["balanced"], correct: "balanced", explanation: "balance (n/v) → balanced (adj)." },
    { id: "q13", cat: "Writing", type: "fillblank", prompt: "The ______________ (counsel) advised the student on how to reduce stress.", accepted: ["counsellor", "counselor"], correct: "counsellor", explanation: "counsel (v) → counsellor (n)." },
    { id: "q14", cat: "Vocabulary", type: "mcq", prompt: "Which word means 'đưa ra, nghĩ ra (giải pháp)'?", options: { A: "come up with", B: "give priority to", C: "take advantage of", D: "maintain good posture" }, correct: "A", explanation: "come up with (phr v) = đưa ra, nghĩ ra (giải pháp)." }
  ]
};
