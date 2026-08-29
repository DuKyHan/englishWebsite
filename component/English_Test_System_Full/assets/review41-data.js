const REVIEW = {
  id: "test41",
  testFile: "test41.html",
  grade: "Grade 7 — Global Success",
  unit: "Unit 3: Community service",
  title: "Knowledge Review — Unit 3, Practice Test 1",

  // ---------------------------------------------------------
  // PART 1 — VOCABULARY REVIEW
  // ---------------------------------------------------------
  vocabulary: [
    { word: "donate", pos: "v", ipa: "/ˈdoʊneɪt/", meaning: "quyên góp, hiến tặng", example: "I often donate books, toys, and clothes to homeless children and elderly people.", exampleVi: "Tôi thường quyên góp sách, đồ chơi và quần áo cho trẻ em vô gia cư và người già." },
    { word: "homeless", pos: "adj", ipa: "/ˈhoʊmləs/", meaning: "vô gia cư", example: "I often donate books, toys, and clothes to homeless children and elderly people.", exampleVi: "Tôi thường quyên góp sách, đồ chơi và quần áo cho trẻ em vô gia cư và người già." },
    { word: "charity", pos: "n", ipa: "/ˈtʃærəti/", meaning: "tổ chức từ thiện, lòng từ thiện", example: "Last Sunday, I donated books and clothes to a charity organization.", exampleVi: "Chủ nhật tuần trước, tôi đã quyên góp sách và quần áo cho một tổ chức từ thiện." },
    { word: "voluntary", pos: "adj", ipa: "/ˈvɒləntri/", meaning: "tự nguyện", example: "It is very common in America for a person to join a voluntary group.", exampleVi: "Việc một người tham gia một nhóm tình nguyện là rất phổ biến ở Mỹ." },
    { word: "confidence", pos: "n", ipa: "/ˈkɒnfɪdəns/", meaning: "sự tự tin", example: "People can gain confidence and have lots of fun when doing volunteer work.", exampleVi: "Mọi người có thể có được sự tự tin và có nhiều niềm vui khi làm công việc tình nguyện." },
    { word: "nursing home", pos: "n", ipa: "/ˈnɜːrsɪŋ hoʊm/", meaning: "viện dưỡng lão", example: "She wants to work in a nursing home to care for old and lonely people.", exampleVi: "Cô ấy muốn làm việc ở viện dưỡng lão để chăm sóc người già và cô đơn." },
    { word: "adolescent", pos: "n", ipa: "/ˌædəˈlesnt/", meaning: "thanh thiếu niên", example: "Voluntary work provides adolescents with many precious opportunities.", exampleVi: "Công việc tình nguyện mang lại cho thanh thiếu niên nhiều cơ hội quý giá." },
    { word: "foster", pos: "v", ipa: "/ˈfɒstər/", meaning: "nuôi dưỡng, thúc đẩy (sự phát triển)", example: "Voluntary work helps to foster independence in young people.", exampleVi: "Công việc tình nguyện giúp thúc đẩy tính độc lập ở người trẻ." },
    { word: "tackle", pos: "v", ipa: "/ˈtækl/", meaning: "giải quyết, đối phó với", example: "The experience you gain will be valuable, helping you tackle serious problems in later life.", exampleVi: "Kinh nghiệm bạn có được sẽ quý giá, giúp bạn giải quyết những vấn đề nghiêm trọng trong cuộc sống sau này." },
    { word: "adapt", pos: "v", ipa: "/əˈdæpt/", meaning: "thích nghi", example: "Volunteer work can help us adapt to something new.", exampleVi: "Công việc tình nguyện có thể giúp chúng ta thích nghi với những điều mới mẻ." },
    { word: "precious", pos: "adj", ipa: "/ˈpreʃəs/", meaning: "quý giá", example: "Voluntary work provides adolescents with many precious opportunities.", exampleVi: "Công việc tình nguyện mang lại cho thanh thiếu niên nhiều cơ hội quý giá." },
    { word: "valuable", pos: "adj", ipa: "/ˈvæljuəbl/", meaning: "có giá trị, quý báu", example: "The experience you gain will be valuable for your future.", exampleVi: "Kinh nghiệm bạn có được sẽ có giá trị cho tương lai của bạn." },
    { word: "responsibility", pos: "n", ipa: "/rɪˌspɒnsəˈbɪləti/", meaning: "trách nhiệm", example: "Keeping our environment clean is the responsibility of everyone in society.", exampleVi: "Giữ gìn môi trường sạch sẽ là trách nhiệm của mọi người trong xã hội." },
    { word: "disabled", pos: "adj", ipa: "/dɪsˈeɪbld/", meaning: "khuyết tật", example: "Volunteers also give support to the disabled children in orphanages.", exampleVi: "Các tình nguyện viên cũng hỗ trợ trẻ em khuyết tật trong trại trẻ mồ côi." },
    { word: "clean-up", pos: "n", ipa: "/ˈkliːn ʌp/", meaning: "việc dọn dẹp", example: "The local youth club organized a successful neighborhood clean-up last Sunday.", exampleVi: "Câu lạc bộ thanh niên địa phương đã tổ chức một buổi dọn dẹp khu phố thành công vào chủ nhật tuần trước." },
    { word: "orphan", pos: "n", ipa: "/ˈɔːrfən/", meaning: "trẻ mồ côi", example: "I met the orphans there. They were so lovely.", exampleVi: "Tôi đã gặp những đứa trẻ mồ côi ở đó. Chúng thật đáng yêu." },
    { word: "elderly", pos: "adj/n", ipa: "/ˈeldərli/", meaning: "người cao tuổi", example: "She wants to work in a nursing home to care for old and lonely people.", exampleVi: "Cô ấy muốn làm việc ở viện dưỡng lão để chăm sóc người già và cô đơn." },
    { word: "waste of time", pos: "phrase", ipa: "/weɪst əv taɪm/", meaning: "lãng phí thời gian", example: "Some people think that doing volunteer work is a waste of time.", exampleVi: "Một số người nghĩ rằng làm công việc tình nguyện là lãng phí thời gian." }
  ],

  vocabPractice: {
    mcq: [
      { id: "vp1", prompt: "Choose the word that means 'vô gia cư':", options: { A: "homeless", B: "disabled", C: "elderly", D: "voluntary" }, correct: "A", explanation: "<b>homeless</b> (adj) = vô gia cư." },
      { id: "vp2", prompt: "Choose the word that means 'trẻ mồ côi':", options: { A: "orphan", B: "adolescent", C: "volunteer", D: "charity" }, correct: "A", explanation: "<b>orphan</b> (n) = trẻ mồ côi." },
      { id: "vp3", prompt: "\"People can gain ______ and have lots of fun when doing volunteer work.\"", options: { A: "confidence", B: "responsibility", C: "charity", D: "disability" }, correct: "A", explanation: "\"<b>confidence</b>\" (sự tự tin) phù hợp với ngữ cảnh làm việc tình nguyện." },
      { id: "vp4", prompt: "Choose the word that means 'thích nghi':", options: { A: "adapt", B: "tackle", C: "foster", D: "donate" }, correct: "A", explanation: "<b>adapt</b> (v) = thích nghi." },
      { id: "vp5", prompt: "\"Some people think that doing volunteer work is a ______ of time.\"", options: { A: "waste", B: "gain", C: "loss (money)", D: "save" }, correct: "A", explanation: "\"<b>waste</b> of time\" (lãng phí thời gian) là cụm cố định." },
      { id: "vp6", prompt: "Choose the word that means 'giải quyết, đối phó với':", options: { A: "tackle", B: "adapt", C: "foster", D: "donate" }, correct: "A", explanation: "<b>tackle</b> (v) = giải quyết, đối phó với." }
    ],
    fillblank: [
      { id: "vf1", prompt: "I often ______________ (quyên góp) books, toys, and clothes to homeless children.", accepted: ["donate"], correct: "donate", explanation: "<b>donate</b> (v) = quyên góp, hiến tặng." },
      { id: "vf2", prompt: "She wants to work in a ______________ (viện dưỡng lão) to care for old and lonely people.", accepted: ["nursing home"], correct: "nursing home", explanation: "<b>nursing home</b> (n) = viện dưỡng lão." },
      { id: "vf3", prompt: "Voluntary work provides ______________ (thanh thiếu niên) with many precious opportunities.", accepted: ["adolescents"], correct: "adolescents", explanation: "<b>adolescent</b> (n) = thanh thiếu niên." },
      { id: "vf4", prompt: "Volunteers also give support to the ______________ (khuyết tật) children in orphanages.", accepted: ["disabled"], correct: "disabled", explanation: "<b>disabled</b> (adj) = khuyết tật." },
      { id: "vf5", prompt: "The experience you gain will be ______________ (có giá trị) for your future.", accepted: ["valuable"], correct: "valuable", explanation: "<b>valuable</b> (adj) = có giá trị, quý báu." },
      { id: "vf6", prompt: "Keeping our environment clean is the ______________ (trách nhiệm) of everyone in society.", accepted: ["responsibility"], correct: "responsibility", explanation: "<b>responsibility</b> (n) = trách nhiệm." }
    ],
    matching: {
      left: ["foster", "precious", "charity", "elderly", "clean-up", "voluntary"],
      right: ["nuôi dưỡng, thúc đẩy", "quý giá", "tổ chức từ thiện", "người cao tuổi", "việc dọn dẹp", "tự nguyện"],
      correctMap: [0, 1, 2, 3, 4, 5]
    },
    chooseWord: [
      { id: "cw1", prompt: "\"It is very common in America for a person to join a ______ group.\" (VOLUNTEER)", options: { A: "volunteer", B: "voluntary", C: "voluntarily", D: "volunteering" }, correct: "B", explanation: "Cần tính từ trước \"group\" → volunteer (n) → <b>voluntary</b> (adj, +ary)." },
      { id: "cw2", prompt: "\"Most ______ activities are organized by local churches and schools.\" (CHARITY)", options: { A: "charity", B: "charitable", C: "charitably", D: "charities" }, correct: "B", explanation: "Cần tính từ trước \"activities\" → charity (n) → <b>charitable</b> (adj, +able)." },
      { id: "cw3", prompt: "\"Doing charity work helps school children build up their ______.\" (CONFIDENT)", options: { A: "confident", B: "confidently", C: "confidence", D: "confiding" }, correct: "C", explanation: "Cần danh từ sau \"their\" → confident (adj) → <b>confidence</b> (n)." }
    ],
    wordMeaning: [
      { id: "wm1", prompt: "What does 'donate' mean?", options: { A: "quyên góp, hiến tặng", B: "vay mượn", C: "mua bán", D: "cất giữ" }, correct: "A", explanation: "donate (v) = quyên góp, hiến tặng." },
      { id: "wm2", prompt: "What does 'waste of time' mean?", options: { A: "sử dụng thời gian hiệu quả", B: "lãng phí thời gian", C: "tiết kiệm thời gian", D: "quản lý thời gian" }, correct: "B", explanation: "waste of time (phrase) = lãng phí thời gian." },
      { id: "wm3", prompt: "What does 'foster' mean (in this context)?", options: { A: "nuôi dưỡng, thúc đẩy", B: "phá hủy", C: "ngăn cản", D: "trì hoãn" }, correct: "A", explanation: "foster (v) = nuôi dưỡng, thúc đẩy (sự phát triển)." }
    ],
    wordForm: [
      { id: "wf1", prompt: "It is very common in America for a person to join a ______________ (VOLUNTEER) group.", accepted: ["voluntary"], correct: "voluntary", explanation: "volunteer (n) → voluntary (adj, +ary)." },
      { id: "wf2", prompt: "Most ______________ (CHARITY) activities are organized by local churches and schools.", accepted: ["charitable"], correct: "charitable", explanation: "charity (n) → charitable (adj, +able)." },
      { id: "wf3", prompt: "Volunteers also give support to the ______________ (DISABILITY) children in orphanages.", accepted: ["disabled"], correct: "disabled", explanation: "disability (n) → disabled (adj)." }
    ]
  },

  // ---------------------------------------------------------
  // PART 2 — GRAMMAR REVIEW & PRACTICE
  // ---------------------------------------------------------
  grammar: [
    {
      id: "g1", name: "V-ing... is good ⇄ It's good to V",
      usage: "\"V-ing + is good\" (làm gì đó là tốt) có thể viết lại bằng \"It's good to + V\", giữ nguyên nghĩa nhận xét tích cực về một hành động.",
      formulas: [
        "V-ing + is good + (because...).  →  It's good to + V + (because...).",
        "Donating blood is good because you can save people's lives. → It's good to donate blood because you can save people's lives."
      ],
      signals: ["V-ing... is good", "It's good to V"],
      examples: [
        { en: "Donating blood is good because you can save people's lives.", vi: "Hiến máu là tốt vì bạn có thể cứu sống người khác." },
        { en: "It's good to donate blood because you can save people's lives.", vi: "Thật tốt khi hiến máu vì bạn có thể cứu sống người khác." }
      ],
      mistakes: [
        { wrong: "It's good donate blood.", right: "It's good to donate blood. (cần \"to\" trước động từ nguyên thể)" }
      ],
      practice: {
        level1: [
          { id: "g1l1a", type: "fillblank", prompt: "Helping others is good. → It's good ______________ (to help) others.", accepted: ["to help"], correct: "to help", explanation: "V-ing... is good → It's good to V." }
        ],
        level2: [
          { id: "g1l2a", type: "fillblank", prompt: "Rewrite: 'Recycling paper is good for the environment.' → It's good ______________ (to recycle) paper for the environment.", accepted: ["to recycle"], correct: "to recycle", explanation: "V-ing... is good → It's good to V." }
        ],
        level3: [
          { id: "g1l3a", type: "fillblank", prompt: "Rewrite so it keeps the same meaning: 'Volunteering at weekends is good because it helps the community.' → ______________ (It's good to volunteer at weekends because it helps the community).", accepted: ["it's good to volunteer at weekends because it helps the community"], correct: "It's good to volunteer at weekends because it helps the community", explanation: "V-ing... is good → It's good to V." }
        ]
      }
    },
    {
      id: "g2", name: "S was a very good N teacher ⇄ S taught N very well",
      usage: "\"S + was + a very good + N + teacher\" (là một giáo viên môn gì rất giỏi) có thể viết lại bằng \"S + taught + N + very well\" (dạy môn gì rất giỏi), giữ nguyên nghĩa.",
      formulas: [
        "S + was + a very good + N + teacher.  →  S + taught + N + very well.",
        "Mr. Robert was a very good maths teacher. → Mr. Robert taught maths very well."
      ],
      signals: ["was a very good N teacher", "taught N very well"],
      examples: [
        { en: "Mr. Robert was a very good maths teacher.", vi: "Thầy Robert là một giáo viên toán rất giỏi." },
        { en: "Mr. Robert taught maths very well.", vi: "Thầy Robert dạy toán rất giỏi." }
      ],
      mistakes: [
        { wrong: "Mr. Robert taught very well maths.", right: "Mr. Robert taught maths very well. (trạng từ \"very well\" đứng cuối câu, sau tân ngữ)" }
      ],
      practice: {
        level1: [
          { id: "g2l1a", type: "fillblank", prompt: "She was a very good English teacher. → She taught English very ______________ (well).", accepted: ["well"], correct: "well", explanation: "was a very good N teacher → taught N very well." }
        ],
        level2: [
          { id: "g2l2a", type: "fillblank", prompt: "Rewrite: 'He was a very good music teacher.' → He taught music very ______________ (well).", accepted: ["well"], correct: "well", explanation: "was a very good N teacher → taught N very well." }
        ],
        level3: [
          { id: "g2l3a", type: "fillblank", prompt: "Rewrite so it keeps the same meaning: 'Ms. Lan was a very good art teacher.' → ______________ (Ms. Lan taught art very well).", accepted: ["ms. lan taught art very well"], correct: "Ms. Lan taught art very well", explanation: "was a very good N teacher → taught N very well." }
        ]
      }
    },
    {
      id: "g3", name: "Volunteers + V ⇄ Volunteering in + N + makes/V-s",
      usage: "Câu có chủ ngữ là người (\"Volunteers\") có thể viết lại với chủ ngữ là danh động từ chỉ hoạt động (\"Volunteering in + N\"), giữ nguyên nghĩa nhưng đổi trọng tâm từ người sang hành động.",
      formulas: [
        "Volunteers + in + N + V(s).  →  Volunteering + in + N + V-s (số ít).",
        "Volunteers in the community make a big difference. → Volunteering in the community makes a big difference."
      ],
      signals: ["Volunteers in N V", "Volunteering in N V-s"],
      examples: [
        { en: "Volunteers in the community make a big difference.", vi: "Những người tình nguyện trong cộng đồng tạo ra sự khác biệt lớn." },
        { en: "Volunteering in the community makes a big difference.", vi: "Việc tình nguyện trong cộng đồng tạo ra sự khác biệt lớn." }
      ],
      mistakes: [
        { wrong: "Volunteering in the community make a big difference.", right: "Volunteering in the community makes a big difference. (V-ing làm chủ ngữ số ít cần động từ chia số ít)" }
      ],
      practice: {
        level1: [
          { id: "g3l1a", type: "fillblank", prompt: "Volunteers at the shelter help many animals. → Volunteering at the shelter ______________ (helps) many animals.", accepted: ["helps"], correct: "helps", explanation: "Volunteers + V → Volunteering + V-s (số ít)." }
        ],
        level2: [
          { id: "g3l2a", type: "fillblank", prompt: "Rewrite: 'Volunteers in hospitals bring comfort to patients.' → Volunteering in hospitals ______________ (brings) comfort to patients.", accepted: ["brings"], correct: "brings", explanation: "Volunteers + V → Volunteering + V-s (số ít)." }
        ],
        level3: [
          { id: "g3l3a", type: "fillblank", prompt: "Rewrite so it keeps the same meaning: 'Volunteers at schools improve children's reading skills.' → ______________ (Volunteering at schools improves children's reading skills).", accepted: ["volunteering at schools improves children's reading skills"], correct: "Volunteering at schools improves children's reading skills", explanation: "Volunteers + V → Volunteering + V-s (số ít)." }
        ]
      }
    },
    {
      id: "g4", name: "Active ⇄ Passive (collect → be collected)",
      usage: "Câu chủ động \"S + V + O\" có thể chuyển sang câu bị động \"O + be + V3/ed + (by S)\" khi muốn nhấn mạnh vào đối tượng chịu tác động hơn là người thực hiện.",
      formulas: [
        "S + collect(s) + O + (thời gian).  →  O + is/are + collected + (thời gian).",
        "Every year we collect old books and clothes... → Old books and clothes are collected every year..."
      ],
      signals: ["active: S + V + O", "passive: O + be + V3/ed"],
      examples: [
        { en: "Every year we collect old books and clothes to help poor children.", vi: "Mỗi năm chúng tôi thu gom sách cũ và quần áo để giúp trẻ em nghèo." },
        { en: "Old books and clothes are collected every year to help poor children.", vi: "Sách cũ và quần áo được thu gom mỗi năm để giúp trẻ em nghèo." }
      ],
      mistakes: [
        { wrong: "Old books and clothes are collect every year.", right: "Old books and clothes are collected every year. (cần V3/ed sau \"be\" trong câu bị động)" }
      ],
      practice: {
        level1: [
          { id: "g4l1a", type: "fillblank", prompt: "We donate books every month. → Books ______________ (are donated) every month.", accepted: ["are donated"], correct: "are donated", explanation: "Active → Passive: O + be + V3/ed." }
        ],
        level2: [
          { id: "g4l2a", type: "fillblank", prompt: "Rewrite: 'They organize a clean-up every year.' → A clean-up ______________ (is organized) every year.", accepted: ["is organized"], correct: "is organized", explanation: "Active → Passive: O + be + V3/ed." }
        ],
        level3: [
          { id: "g4l3a", type: "fillblank", prompt: "Rewrite so it keeps the same meaning: 'Volunteers deliver food to elderly people every week.' → ______________ (Food is delivered to elderly people every week by volunteers).", accepted: ["food is delivered to elderly people every week by volunteers"], correct: "Food is delivered to elderly people every week by volunteers", explanation: "Active → Passive: O + be + V3/ed + by S." }
        ]
      }
    },
    {
      id: "g5", name: "(Bonus) provide sb with sth",
      usage: "Cấu trúc \"provide sb + with + sth\" (cung cấp cho ai điều gì) dùng để nói về việc trao tặng, mang lại điều có giá trị cho ai đó.",
      formulas: [
        "provide + sb + with + sth",
        "Voluntary work provides adolescents with many precious opportunities."
      ],
      signals: ["provide sb with sth"],
      examples: [
        { en: "Voluntary work provides adolescents with many precious opportunities.", vi: "Công việc tình nguyện mang lại cho thanh thiếu niên nhiều cơ hội quý giá." },
        { en: "The charity provides homeless people with food and shelter.", vi: "Tổ chức từ thiện cung cấp cho người vô gia cư thức ăn và nơi trú ẩn." }
      ],
      mistakes: [
        { wrong: "provide adolescents opportunities", right: "provide adolescents with opportunities (cần giới từ \"with\" trước tân ngữ thứ hai)" }
      ],
      practice: {
        level1: [
          { id: "g5l1a", type: "fillblank", prompt: "The school provides students ______________ (with) free lunches.", accepted: ["with"], correct: "with", explanation: "provide sb with sth." }
        ],
        level2: [
          { id: "g5l2a", type: "fillblank", prompt: "Rewrite: 'The volunteers gave the orphans books and toys.' → The volunteers provided the orphans ______________ (with) books and toys.", accepted: ["with"], correct: "with", explanation: "provide sb with sth." }
        ],
        level3: [
          { id: "g5l3a", type: "fillblank", prompt: "Complete: 'This program provides young volunteers ______________ (with) valuable experience.'", accepted: ["with"], correct: "with", explanation: "provide sb with sth." }
        ]
      }
    }
  ],

  // ---------------------------------------------------------
  // PART 3 — READING PRACTICE
  // ---------------------------------------------------------
  reading: {
    passage: "The Benefits of Voluntary Work. Nowadays, volunteer work attracts a large number of participants from different age groups because of its huge benefits. Firstly, voluntary work provides adolescents with <mark data-w=\"many precious opportunities to develop social skills, foster independence, and form the ability to deal with difficulties\">many precious opportunities to develop social skills, foster independence, and form the ability to deal with difficulties</mark> in different situations. Secondly, every member will be taught how to work in a team, the way to make conversation, or the responsibility of finishing a task. <mark data-w=\"The experience you gain will be valuable for your future, helping you tackle serious problems in later life\">The experience you gain will be valuable for your future, helping you tackle serious problems in later life</mark>. In addition, <mark data-w=\"volunteer work can help us adapt to something new and make many new friends\">volunteer work can help us adapt to something new and make many new friends</mark> through regular activities of clubs or organizations. <mark data-w=\"We can also have a chance to travel more and explore more interesting things\">We can also have a chance to travel more and explore more interesting things</mark> we have not experienced before. In conclusion, <mark data-w=\"it is very good to do voluntary work\">it is very good to do voluntary work</mark>.",
    vocabInContext: {
      "many precious opportunities to develop social skills, foster independence, and form the ability to deal with difficulties": "nhiều cơ hội quý giá để phát triển kỹ năng xã hội, thúc đẩy tính độc lập và hình thành khả năng đối phó với khó khăn",
      "The experience you gain will be valuable for your future, helping you tackle serious problems in later life": "kinh nghiệm bạn có được sẽ có giá trị cho tương lai, giúp bạn giải quyết những vấn đề nghiêm trọng sau này",
      "volunteer work can help us adapt to something new and make many new friends": "công việc tình nguyện có thể giúp chúng ta thích nghi với điều mới và kết bạn mới",
      "We can also have a chance to travel more and explore more interesting things": "chúng ta cũng có cơ hội đi du lịch nhiều hơn và khám phá những điều thú vị hơn",
      "it is very good to do voluntary work": "làm công việc tình nguyện là rất tốt"
    },
    translation: "<b>LỢI ÍCH CỦA CÔNG VIỆC TÌNH NGUYỆN</b><br><br>Ngày nay, công việc tình nguyện thu hút một lượng lớn người tham gia từ nhiều nhóm tuổi khác nhau vì những lợi ích to lớn của nó. Thứ nhất, công việc tình nguyện mang lại cho thanh thiếu niên nhiều cơ hội quý giá để phát triển kỹ năng xã hội, thúc đẩy tính độc lập và hình thành khả năng đối phó với khó khăn trong các tình huống khác nhau. Thứ hai, mỗi thành viên sẽ được dạy cách làm việc nhóm, cách trò chuyện, hoặc trách nhiệm hoàn thành một nhiệm vụ. Kinh nghiệm bạn có được sẽ có giá trị cho tương lai, giúp bạn giải quyết những vấn đề nghiêm trọng trong cuộc sống sau này. Ngoài ra, công việc tình nguyện có thể giúp chúng ta thích nghi với điều mới và kết thêm nhiều bạn mới thông qua các hoạt động thường xuyên của câu lạc bộ hoặc tổ chức. Chúng ta cũng có cơ hội đi du lịch nhiều hơn và khám phá những điều thú vị hơn mà chúng ta chưa từng trải nghiệm trước đây. Tóm lại, làm công việc tình nguyện là rất tốt.",
    practice: [
      { id: "r1", type: "truefalse", prompt: "Only young people do volunteer work nowadays.", correct: "False", explanation: "Sai. Bài đọc: \"voluntary work attracts a large number of participants from different age groups.\"" },
      { id: "r2", type: "truefalse", prompt: "Doing volunteer work helps people learn how to work with others in a team.", correct: "True", explanation: "Đúng. Bài đọc: \"every member will be taught how to work in a team.\"" },
      { id: "r3", type: "truefalse", prompt: "Volunteer work can help you make new friends.", correct: "True", explanation: "Đúng. Bài đọc: \"volunteer work can help us adapt to something new and make many new friends.\"" },
      { id: "r4", type: "truefalse", prompt: "Volunteers have fewer chances to travel to new places.", correct: "False", explanation: "Sai. Bài đọc: \"We can also have a chance to travel more.\"" },
      { id: "r5", type: "mcq", prompt: "What is the word \"adolescents\" in the text closest in meaning to?", options: { A: "young people", B: "old people", C: "baby twins", D: "adult workers" }, correct: "A", explanation: "\"adolescents\" gần nghĩa nhất với \"young people\"." },
      { id: "r6", type: "mcq", prompt: "What does the text suggest about the experience gained from volunteer work?", options: { A: "It helps you deal with difficulties in later life.", B: "It makes you stay away from future problems.", C: "It allows you to buy expensive items.", D: "It is boring and has no real value." }, correct: "A", explanation: "Bài đọc: \"helping you tackle serious problems in later life.\"" },
      { id: "r7", type: "fillblank", prompt: "Find the word in the passage that means 'thúc đẩy, nuôi dưỡng (sự phát triển)'.", accepted: ["foster"], correct: "foster", explanation: "\"foster independence\" — foster = nuôi dưỡng, thúc đẩy." },
      { id: "r8", type: "mcq", prompt: "According to the passage, what does volunteer work help members learn?", options: { A: "How to work in a team and finish tasks responsibly.", B: "How to earn a lot of money quickly.", C: "How to avoid meeting new people.", D: "How to stay in one place without traveling." }, correct: "A", explanation: "Bài đọc: \"every member will be taught how to work in a team... the responsibility of finishing a task.\"" },
      { id: "r9", type: "truefalse", prompt: "The passage concludes that voluntary work is not worth doing.", correct: "False", explanation: "Sai. Bài đọc kết luận: \"it is very good to do voluntary work.\"" }
    ]
  },

  // ---------------------------------------------------------
  // PART 4 — TRANSLATION PRACTICE
  // ---------------------------------------------------------
  translation: [
    { id: "t1", en: "Volunteer work attracts a large number of participants from different age groups.", suggested: "Công việc tình nguyện thu hút một lượng lớn người tham gia từ nhiều nhóm tuổi khác nhau.", notes: "\"attract + O\" (thu hút điều gì)." },
    { id: "t2", en: "Voluntary work provides adolescents with many precious opportunities.", suggested: "Công việc tình nguyện mang lại cho thanh thiếu niên nhiều cơ hội quý giá.", notes: "\"provide sb with sth\" (cung cấp cho ai điều gì)." },
    { id: "t3", en: "The experience you gain will be valuable for your future.", suggested: "Kinh nghiệm bạn có được sẽ có giá trị cho tương lai của bạn.", notes: "Mệnh đề quan hệ rút gọn \"(that) you gain\"." },
    { id: "t4", en: "Volunteer work can help us adapt to something new.", suggested: "Công việc tình nguyện có thể giúp chúng ta thích nghi với những điều mới.", notes: "\"help sb + V (nguyên thể)\"." },
    { id: "t5", en: "It is very good to do voluntary work.", suggested: "Làm công việc tình nguyện là rất tốt.", notes: "\"It is + adj + to V\" (làm gì đó thì như thế nào)." }
  ],

  // ---------------------------------------------------------
  // PART 5 — SENTENCE TRANSFORMATION PRACTICE
  // ---------------------------------------------------------
  transformation: [
    {
      id: "tr1", name: "V-ing... is good ⇄ It's good to V",
      formula: "V-ing + is good + (because...).  →  It's good to + V + (because...).",
      example: { before: "Donating blood is good because you can save people's lives.", after: "It's good to donate blood because you can save people's lives." },
      practice: [
        { id: "tr1p1", type: "fillblank", prompt: "Helping others is good. → It's good ______________ (to help) others.", accepted: ["to help"], correct: "to help", explanation: "V-ing... is good → It's good to V." },
        { id: "tr1p2", type: "fillblank", prompt: "Rewrite: 'Recycling paper is good for the environment.' → It's good ______________ (to recycle) paper for the environment.", accepted: ["to recycle"], correct: "to recycle", explanation: "V-ing... is good → It's good to V." }
      ]
    },
    {
      id: "tr2", name: "S was a very good N teacher ⇄ S taught N very well",
      formula: "S + was + a very good + N + teacher.  →  S + taught + N + very well.",
      example: { before: "Mr. Robert was a very good maths teacher.", after: "Mr. Robert taught maths very well." },
      practice: [
        { id: "tr2p1", type: "fillblank", prompt: "She was a very good English teacher. → She taught English very ______________ (well).", accepted: ["well"], correct: "well", explanation: "was a very good N teacher → taught N very well." },
        { id: "tr2p2", type: "fillblank", prompt: "Rewrite: 'He was a very good music teacher.' → He taught music very ______________ (well).", accepted: ["well"], correct: "well", explanation: "was a very good N teacher → taught N very well." }
      ]
    },
    {
      id: "tr3", name: "Volunteers + V ⇄ Volunteering in + N + V-s",
      formula: "Volunteers + in + N + V(s).  →  Volunteering + in + N + V-s (số ít).",
      example: { before: "Volunteers in the community make a big difference.", after: "Volunteering in the community makes a big difference." },
      practice: [
        { id: "tr3p1", type: "fillblank", prompt: "Volunteers at the shelter help many animals. → Volunteering at the shelter ______________ (helps) many animals.", accepted: ["helps"], correct: "helps", explanation: "Volunteers + V → Volunteering + V-s (số ít)." },
        { id: "tr3p2", type: "fillblank", prompt: "Rewrite: 'Volunteers in hospitals bring comfort to patients.' → Volunteering in hospitals ______________ (brings) comfort to patients.", accepted: ["brings"], correct: "brings", explanation: "Volunteers + V → Volunteering + V-s (số ít)." }
      ]
    },
    {
      id: "tr4", name: "Active ⇄ Passive (collect → be collected)",
      formula: "S + collect(s) + O + (thời gian).  →  O + is/are + collected + (thời gian).",
      example: { before: "Every year we collect old books and clothes to help poor children.", after: "Old books and clothes are collected every year to help poor children." },
      practice: [
        { id: "tr4p1", type: "fillblank", prompt: "We donate books every month. → Books ______________ (are donated) every month.", accepted: ["are donated"], correct: "are donated", explanation: "Active → Passive: O + be + V3/ed." },
        { id: "tr4p2", type: "fillblank", prompt: "Rewrite: 'They organize a clean-up every year.' → A clean-up ______________ (is organized) every year.", accepted: ["is organized"], correct: "is organized", explanation: "Active → Passive: O + be + V3/ed." }
      ]
    }
  ],

  // ---------------------------------------------------------
  // PART 6 — QUICK REVIEW (mini test, all skills)
  // ---------------------------------------------------------
  quickReview: [
    { id: "q1", cat: "Vocabulary", type: "mcq", prompt: "'Homeless' means:", options: { A: "vô gia cư", B: "giàu có", C: "khỏe mạnh", D: "hạnh phúc" }, correct: "A", explanation: "homeless (adj) = vô gia cư." },
    { id: "q2", cat: "Vocabulary", type: "mcq", prompt: "'Orphan' means:", options: { A: "trẻ mồ côi", B: "người tình nguyện", C: "người cao tuổi", D: "học sinh giỏi" }, correct: "A", explanation: "orphan (n) = trẻ mồ côi." },
    { id: "q3", cat: "Vocabulary", type: "fillblank", prompt: "I often ______________ (quyên góp) books, toys, and clothes to homeless children.", accepted: ["donate"], correct: "donate", explanation: "donate (v) = quyên góp." },
    { id: "q4", cat: "Grammar", type: "mcq", prompt: "Donating blood is good. → It's good ______ donate blood.", options: { A: "to", B: "for", C: "of", D: "at" }, correct: "A", explanation: "It's good to V." },
    { id: "q5", cat: "Grammar", type: "mcq", prompt: "Mr. Robert was a very good maths teacher. → Mr. Robert taught maths very ______.", options: { A: "well", B: "good", C: "goodly", D: "best" }, correct: "A", explanation: "taught N very well." },
    { id: "q6", cat: "Grammar", type: "fillblank", prompt: "Volunteers in the community make a big difference. → Volunteering in the community ______________ (makes) a big difference.", accepted: ["makes"], correct: "makes", explanation: "Volunteering + V-s (số ít)." },
    { id: "q7", cat: "Grammar", type: "fillblank", prompt: "We collect old books every year. → Old books ______________ (are collected) every year.", accepted: ["are collected"], correct: "are collected", explanation: "Active → Passive." },
    { id: "q8", cat: "Reading", type: "truefalse", prompt: "Only young people do volunteer work nowadays.", correct: "False", explanation: "Sai theo bài đọc — mọi lứa tuổi đều tham gia." },
    { id: "q9", cat: "Reading", type: "truefalse", prompt: "Volunteer work can help you make new friends.", correct: "True", explanation: "Đúng theo bài đọc." },
    { id: "q10", cat: "Reading", type: "mcq", prompt: "What does the text suggest about the experience gained from volunteer work?", options: { A: "It helps you deal with difficulties in later life.", B: "It makes you stay away from future problems.", C: "It allows you to buy expensive items.", D: "It is boring and has no real value." }, correct: "A", explanation: "Bài đọc nêu rõ lợi ích lâu dài." },
    { id: "q11", cat: "Writing", type: "fillblank", prompt: "It is very common in America for a person to join a ______________ (VOLUNTEER) group.", accepted: ["voluntary"], correct: "voluntary", explanation: "volunteer (n) → voluntary (adj)." },
    { id: "q12", cat: "Writing", type: "fillblank", prompt: "Most ______________ (CHARITY) activities are organized by local churches and schools.", accepted: ["charitable"], correct: "charitable", explanation: "charity (n) → charitable (adj)." },
    { id: "q13", cat: "Writing", type: "fillblank", prompt: "Keeping our environment clean is the ______________ (RESPONSIBLE) of everyone in society.", accepted: ["responsibility"], correct: "responsibility", explanation: "responsible (adj) → responsibility (n)." },
    { id: "q14", cat: "Vocabulary", type: "mcq", prompt: "Which word means 'viện dưỡng lão'?", options: { A: "nursing home", B: "orphanage", C: "hospital", D: "shelter" }, correct: "A", explanation: "nursing home (n) = viện dưỡng lão." }
  ]
};
