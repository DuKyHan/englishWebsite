const REVIEW = {
  id: "test23",
  testFile: "test23.html",
  grade: "Grade 9 — Global Success",
  unit: "Unit 6: Vietnamese lifestyle: then and now",
  title: "Knowledge Review — Unit 6, Practice Test 1",

  // ---------------------------------------------------------
  // PART 1 — VOCABULARY REVIEW
  // ---------------------------------------------------------
  vocabulary: [
    { word: "learning facilities", pos: "n phr", ipa: "/ˈlɜːrnɪŋ fəˈsɪlətiz/", meaning: "cơ sở vật chất học tập", example: "Our school has modern learning facilities like computer labs and science rooms.", exampleVi: "Trường chúng tôi có cơ sở vật chất học tập hiện đại như phòng máy tính và phòng khoa học." },
    { word: "generation gap", pos: "n phr", ipa: "/ˌdʒenəˈreɪʃn ɡæp/", meaning: "khoảng cách thế hệ", example: "That's a clear example of a generation gap in your family.", exampleVi: "Đó là một ví dụ rõ ràng về khoảng cách thế hệ trong gia đình bạn." },
    { word: "rely on", pos: "phr v", ipa: "/rɪˈlaɪ ɒn/", meaning: "phụ thuộc vào, dựa vào", example: "Vietnamese people used to rely on natural materials for their daily lives.", exampleVi: "Người Việt Nam trước đây thường dựa vào các vật liệu tự nhiên cho cuộc sống hằng ngày." },
    { word: "advanced", pos: "adj", ipa: "/ədˈvænst/", meaning: "tiên tiến", example: "Today, farmers use advanced machines that make their work easier and faster.", exampleVi: "Ngày nay, nông dân sử dụng máy móc tiên tiến giúp công việc dễ dàng và nhanh hơn." },
    { word: "productivity", pos: "n", ipa: "/ˌprɒdʌkˈtɪvəti/", meaning: "năng suất", example: "These changes have improved productivity.", exampleVi: "Những thay đổi này đã cải thiện năng suất." },
    { word: "family values", pos: "n phr", ipa: "/ˈfæməli ˈvæljuːz/", meaning: "giá trị gia đình", example: "Family values were highly emphasized in the past.", exampleVi: "Giá trị gia đình được đề cao mạnh mẽ trong quá khứ." },
    { word: "confident", pos: "adj", ipa: "/ˈkɒnfɪdənt/", meaning: "tự tin", example: "Vietnamese teenagers have become more confident in communicating with others.", exampleVi: "Thanh thiếu niên Việt Nam đã trở nên tự tin hơn khi giao tiếp với người khác." },
    { word: "customs", pos: "n", ipa: "/ˈkʌstəmz/", meaning: "phong tục", example: "Many customs and traditions are passed from generation to generation.", exampleVi: "Nhiều phong tục và truyền thống được truyền từ thế hệ này sang thế hệ khác." },
    { word: "difference", pos: "n", ipa: "/ˈdɪfrəns/", meaning: "sự khác biệt", example: "The difference of Vietnamese lifestyle can be seen in teenagers' fashion.", exampleVi: "Sự khác biệt trong lối sống của người Việt có thể thấy qua thời trang của giới trẻ." },
    { word: "traditional", pos: "adj", ipa: "/trəˈdɪʃənl/", meaning: "truyền thống", example: "My grandfather prefers traditional farming methods to modern ones.", exampleVi: "Ông tôi thích các phương pháp canh tác truyền thống hơn là hiện đại." },
    { word: "technological", pos: "adj", ipa: "/ˌteknəˈlɒdʒɪkl/", meaning: "thuộc về công nghệ", example: "Many farmers use technological tools to improve their productivity.", exampleVi: "Nhiều nông dân sử dụng công cụ công nghệ để cải thiện năng suất." },
    { word: "permission", pos: "n", ipa: "/pərˈmɪʃn/", meaning: "sự cho phép", example: "Teenagers often ask for permission from their parents before making decisions.", exampleVi: "Thanh thiếu niên thường xin phép cha mẹ trước khi đưa ra quyết định." },
    { word: "active lifestyle", pos: "n phr", ipa: "/ˈæktɪv ˈlaɪfstaɪl/", meaning: "lối sống năng động", example: "She enjoys an active lifestyle, spending her weekends hiking and swimming.", exampleVi: "Cô ấy có lối sống năng động, dành cuối tuần để leo núi và bơi lội." },
    { word: "modern lifestyle", pos: "n phr", ipa: "/ˈmɒdərn ˈlaɪfstaɪl/", meaning: "lối sống hiện đại", example: "Stress is a common problem in our fast-paced modern lifestyle.", exampleVi: "Căng thẳng là vấn đề phổ biến trong lối sống hiện đại, nhịp độ nhanh của chúng ta." },
    { word: "sedentary", pos: "adj", ipa: "/ˈsednteri/", meaning: "ít vận động", example: "Office workers are often at risk of developing a sedentary lifestyle.", exampleVi: "Nhân viên văn phòng thường có nguy cơ hình thành lối sống ít vận động." },
    { word: "plow", pos: "n", ipa: "/plaʊ/", meaning: "cái cày", example: "He spent two hours fixing the traditional plow.", exampleVi: "Anh ấy đã dành hai tiếng để sửa cái cày truyền thống." },
    { word: "buffalo", pos: "n", ipa: "/ˈbʌfəloʊ/", meaning: "con trâu", example: "In the past, many families often rode buffaloes to help their parents in the fields.", exampleVi: "Trong quá khứ, nhiều gia đình thường cưỡi trâu để giúp bố mẹ làm việc đồng áng." },
    { word: "outdoor activity", pos: "n phr", ipa: "/ˈaʊtdɔːr ækˈtɪvəti/", meaning: "hoạt động ngoài trời", example: "Vietnamese people still enjoy outdoor activities to stay fit.", exampleVi: "Người Việt Nam vẫn thích các hoạt động ngoài trời để giữ gìn sức khỏe." }
  ],

  vocabPractice: {
    mcq: [
      { id: "vp1", prompt: "Choose the phrase that means 'khoảng cách thế hệ':", options: { A: "generation gap", B: "family values", C: "learning facilities", D: "outdoor activity" }, correct: "A", explanation: "<b>generation gap</b> (n phr) = khoảng cách thế hệ." },
      { id: "vp2", prompt: "Choose the word that means 'năng suất':", options: { A: "productivity", B: "permission", C: "difference", D: "custom" }, correct: "A", explanation: "<b>productivity</b> (n) = năng suất." },
      { id: "vp3", prompt: "\"Our school has modern ______ like computer labs and science rooms.\"", options: { A: "learning facilities", B: "family values", C: "eating habits", D: "professional trainings" }, correct: "A", explanation: "\"<b>learning facilities</b>\" (cơ sở vật chất học tập) khớp với ví dụ \"computer labs and science rooms\"." },
      { id: "vp4", prompt: "Choose the word that means 'ít vận động':", options: { A: "sedentary", B: "active", C: "confident", D: "advanced" }, correct: "A", explanation: "<b>sedentary</b> (adj) = ít vận động." },
      { id: "vp5", prompt: "\"In the past, many families often rode ______ to help their parents in the fields.\"", options: { A: "buffaloes", B: "plows", C: "bicycles", D: "carts" }, correct: "A", explanation: "<b>buffalo</b> (n) = con trâu, phương tiện lao động phổ biến trong nông nghiệp truyền thống." },
      { id: "vp6", prompt: "Choose the phrase that means 'phụ thuộc vào, dựa vào':", options: { A: "rely on", B: "ask for", C: "care for", D: "look for" }, correct: "A", explanation: "<b>rely on</b> (phr v) = phụ thuộc vào, dựa vào." }
    ],
    fillblank: [
      { id: "vf1", prompt: "Vietnamese people used to ______________ (dựa vào) natural materials for their daily lives.", accepted: ["rely on"], correct: "rely on", explanation: "<b>rely on</b> (phr v) = phụ thuộc vào, dựa vào." },
      { id: "vf2", prompt: "Today, farmers use ______________ (tiên tiến) machines that make their work easier.", accepted: ["advanced"], correct: "advanced", explanation: "<b>advanced</b> (adj) = tiên tiến." },
      { id: "vf3", prompt: "These changes have improved ______________ (năng suất).", accepted: ["productivity"], correct: "productivity", explanation: "<b>productivity</b> (n) = năng suất." },
      { id: "vf4", prompt: "He spent two hours fixing the traditional ______________ (cái cày).", accepted: ["plow"], correct: "plow", explanation: "<b>plow</b> (n) = cái cày." },
      { id: "vf5", prompt: "She enjoys an ______________ (lối sống năng động), spending her weekends hiking and swimming.", accepted: ["active lifestyle"], correct: "active lifestyle", explanation: "<b>active lifestyle</b> (n phr) = lối sống năng động." },
      { id: "vf6", prompt: "That's a clear example of a ______________ (khoảng cách thế hệ) in your family.", accepted: ["generation gap"], correct: "generation gap", explanation: "<b>generation gap</b> (n phr) = khoảng cách thế hệ." }
    ],
    matching: {
      left: ["rely on", "productivity", "sedentary", "buffalo", "plow", "generation gap"],
      right: ["phụ thuộc vào, dựa vào", "năng suất", "ít vận động", "con trâu", "cái cày", "khoảng cách thế hệ"],
      correctMap: [0, 1, 2, 3, 4, 5]
    },
    chooseWord: [
      { id: "cw1", prompt: "\"Vietnamese teenagers have become more ______ in communicating with others.\" (CONFIDENCE)", options: { A: "confidence", B: "confident", C: "confidently", D: "confidential" }, correct: "B", explanation: "Cần tính từ sau \"more\" → confidence (n) → <b>confident</b> (adj)." },
      { id: "cw2", prompt: "\"My grandfather prefers ______ farming methods to modern ones.\" (TRADITION)", options: { A: "tradition", B: "traditional", C: "traditionally", D: "traditions" }, correct: "B", explanation: "Cần tính từ trước danh từ \"methods\" → tradition (n) → <b>traditional</b> (adj)." },
      { id: "cw3", prompt: "\"Nowadays, many farmers use ______ tools to improve their productivity.\" (TECHNOLOGY)", options: { A: "technology", B: "technological", C: "technologically", D: "technologist" }, correct: "B", explanation: "Cần tính từ trước danh từ \"tools\" → technology (n) → <b>technological</b> (adj)." }
    ],
    wordMeaning: [
      { id: "wm1", prompt: "What does 'rely on' mean?", options: { A: "phụ thuộc vào, dựa vào", B: "tránh xa", C: "so sánh với", D: "thay thế cho" }, correct: "A", explanation: "rely on (phr v) = phụ thuộc vào, dựa vào." },
      { id: "wm2", prompt: "What does 'sedentary' mean?", options: { A: "năng động", B: "ít vận động", C: "vui vẻ", D: "hiện đại" }, correct: "B", explanation: "sedentary (adj) = ít vận động." },
      { id: "wm3", prompt: "What does 'generation gap' mean?", options: { A: "khoảng cách thế hệ", B: "sự đoàn kết gia đình", C: "kỳ nghỉ dài", D: "buổi họp mặt gia đình" }, correct: "A", explanation: "generation gap (n phr) = khoảng cách thế hệ." }
    ],
    wordForm: [
      { id: "wf1", prompt: "Many ______________ (CUSTOMARY) and traditions are passed from generation to generation.", accepted: ["customs"], correct: "customs", explanation: "customary (adj) → customs (n)." },
      { id: "wf2", prompt: "The ______________ (DIFFER) of Vietnamese lifestyle can be seen in teenagers' fashion.", accepted: ["difference"], correct: "difference", explanation: "differ (v) → difference (n)." },
      { id: "wf3", prompt: "Teenagers often ask for ______________ (PERMIT) from their parents before making decisions.", accepted: ["permission"], correct: "permission", explanation: "permit (v) → permission (n)." }
    ]
  },

  // ---------------------------------------------------------
  // PART 2 — GRAMMAR REVIEW & PRACTICE
  // ---------------------------------------------------------
  grammar: [
    {
      id: "g1", name: "The last time + quá khứ đơn + was + ... + ago ⇄ haven't/hasn't + V3 + for + khoảng thời gian",
      usage: "\"The last time + S + V(quá khứ đơn) + was + khoảng thời gian + ago\" có nghĩa tương đương với \"S + haven't/hasn't + V3 + for + khoảng thời gian\" — cùng diễn tả khoảng cách kể từ lần cuối một hành động xảy ra.",
      formulas: [
        "The last time + S + V(quá khứ đơn) + was + khoảng thời gian + ago.  →  S + haven't/hasn't + V3 + for + khoảng thời gian.",
        "The last time I visited my grandparents was a year ago. → I haven't visited my grandparents for a year."
      ],
      signals: ["The last time + quá khứ đơn + was + ... + ago", "haven't/hasn't + V3 + for"],
      examples: [
        { en: "The last time I visited my grandparents was a year ago.", vi: "Lần cuối tôi thăm ông bà là một năm trước." },
        { en: "I haven't visited my grandparents for a year.", vi: "Tôi đã không thăm ông bà trong một năm." }
      ],
      mistakes: [
        { wrong: "I haven't visited my grandparents since a year.", right: "I haven't visited my grandparents for a year. (dùng \"for\" với khoảng thời gian, không dùng \"since\")" }
      ],
      practice: {
        level1: [
          { id: "g1l1a", type: "fillblank", prompt: "The last time we cleaned the garden was two weeks ago. → We haven't ______________ (cleaned) the garden for two weeks.", accepted: ["cleaned"], correct: "cleaned", explanation: "The last time + quá khứ đơn + was + ... + ago → haven't + V3 + for." }
        ],
        level2: [
          { id: "g1l2a", type: "fillblank", prompt: "Rewrite: 'The last time he played chess was three months ago.' → He hasn't ______________ (played) chess for three months.", accepted: ["played"], correct: "played", explanation: "The last time + quá khứ đơn + was + ... + ago → hasn't + V3 + for." }
        ],
        level3: [
          { id: "g1l3a", type: "fillblank", prompt: "Rewrite so it keeps the same meaning: 'The last time they used a bamboo plow was ten years ago.' → ______________ (They haven't used a bamboo plow for ten years).", accepted: ["they haven't used a bamboo plow for ten years"], correct: "They haven't used a bamboo plow for ten years", explanation: "The last time + quá khứ đơn + was + ... + ago → haven't + V3 + for." }
        ]
      }
    },
    {
      id: "g2", name: "like/want + to own + N ⇄ wish + S + V(quá khứ đơn) (điều ước hiện tại)",
      usage: "Khi một người mong muốn có được điều gì đó ở hiện tại nhưng chưa có, ta dùng \"wish + S + V(quá khứ đơn)\" để diễn tả điều ước không có thật ở hiện tại.",
      formulas: [
        "S + really like(s)/want(s) + to own/have + N.  →  S + wish(es) + S + V(quá khứ đơn).",
        "My brother really likes to own a cat. → My brother wishes he owned a cat."
      ],
      signals: ["like/want to own/have + N", "wish + V(quá khứ đơn)"],
      examples: [
        { en: "My brother really likes to own a cat.", vi: "Anh trai tôi thực sự thích có một con mèo." },
        { en: "My brother wishes he owned a cat.", vi: "Anh trai tôi ước gì mình có một con mèo." }
      ],
      mistakes: [
        { wrong: "My brother wishes he owns a cat.", right: "My brother wishes he owned a cat. (cần quá khứ đơn sau wish, không dùng hiện tại đơn)" }
      ],
      practice: {
        level1: [
          { id: "g2l1a", type: "fillblank", prompt: "She really wants to have a bigger house. → She wishes she ______________ (had) a bigger house.", accepted: ["had"], correct: "had", explanation: "want to have + N → wish + V(quá khứ đơn)." }
        ],
        level2: [
          { id: "g2l2a", type: "fillblank", prompt: "Rewrite: 'He really likes to own a motorbike.' → He wishes he ______________ (owned) a motorbike.", accepted: ["owned"], correct: "owned", explanation: "like to own + N → wish + V(quá khứ đơn)." }
        ],
        level3: [
          { id: "g2l3a", type: "fillblank", prompt: "Rewrite so it keeps the same meaning: 'They really want to have a traditional wooden house.' → ______________ (They wish they had a traditional wooden house).", accepted: ["they wish they had a traditional wooden house"], correct: "They wish they had a traditional wooden house", explanation: "want to have + N → wish + V(quá khứ đơn)." }
        ]
      }
    },
    {
      id: "g3", name: "No other + N + is + so sánh hơn + than ⇄ so sánh nhất (superlative)",
      usage: "\"No other + N (số ít) + is/was + so sánh hơn + than + N\" (không có N nào khác... hơn) có nghĩa tương đương với câu so sánh nhất, khẳng định N đó là nhất trong nhóm.",
      formulas: [
        "No other + N + is/was + so sánh hơn + than + N.  →  N + is/was + the + so sánh nhất.",
        "No other house in the village is older than this one. → This house is the oldest in the village."
      ],
      signals: ["No other + N + so sánh hơn + than", "the + so sánh nhất"],
      examples: [
        { en: "No other house in the village is older than this one.", vi: "Không có ngôi nhà nào khác trong làng cũ hơn ngôi nhà này." },
        { en: "This house is the oldest in the village.", vi: "Ngôi nhà này cũ nhất trong làng." }
      ],
      mistakes: [
        { wrong: "This house is the older in the village.", right: "This house is the oldest in the village. (cần so sánh nhất \"the oldest\", không dùng so sánh hơn)" }
      ],
      practice: {
        level1: [
          { id: "g3l1a", type: "fillblank", prompt: "No other student in the class is taller than Nam. → Nam is the ______________ (tallest) student in the class.", accepted: ["tallest"], correct: "tallest", explanation: "No other + so sánh hơn + than → so sánh nhất." }
        ],
        level2: [
          { id: "g3l2a", type: "fillblank", prompt: "Rewrite: 'No other river in Vietnam is longer than the Mekong.' → The Mekong is the ______________ (longest) river in Vietnam.", accepted: ["longest"], correct: "longest", explanation: "No other + so sánh hơn + than → so sánh nhất." }
        ],
        level3: [
          { id: "g3l3a", type: "fillblank", prompt: "Rewrite so it keeps the same meaning: 'No other festival in our village is more traditional than the Mid-Autumn Festival.' → ______________ (The Mid-Autumn Festival is the most traditional festival in our village).", accepted: ["the mid-autumn festival is the most traditional festival in our village"], correct: "The Mid-Autumn Festival is the most traditional festival in our village", explanation: "No other + so sánh hơn + than → so sánh nhất." }
        ]
      }
    },
    {
      id: "g4", name: "S + spent + khoảng thời gian + V-ing ⇄ It + took + O + khoảng thời gian + to V",
      usage: "\"S + spend/spent + khoảng thời gian + V-ing\" (dành bao nhiêu thời gian làm gì) có nghĩa tương đương với \"It + takes/took + O + khoảng thời gian + to V\" — cùng diễn tả thời gian cần thiết để hoàn thành một việc.",
      formulas: [
        "S + spent + khoảng thời gian + V-ing.  →  It + took + O + khoảng thời gian + to V.",
        "He spent two hours fixing the traditional plow. → It took him two hours to fix the traditional plow."
      ],
      signals: ["spend/spent + time + V-ing", "It takes/took + O + time + to V"],
      examples: [
        { en: "He spent two hours fixing the traditional plow.", vi: "Anh ấy đã dành hai tiếng để sửa cái cày truyền thống." },
        { en: "It took him two hours to fix the traditional plow.", vi: "Anh ấy đã mất hai tiếng để sửa cái cày truyền thống." }
      ],
      mistakes: [
        { wrong: "It took him two hours fixing the traditional plow.", right: "It took him two hours to fix the traditional plow. (cần \"to V\" sau \"It took + O + time\", không dùng V-ing)" }
      ],
      practice: {
        level1: [
          { id: "g4l1a", type: "fillblank", prompt: "She spent an hour cleaning the house. → It took her an hour ______________ (to clean) the house.", accepted: ["to clean"], correct: "to clean", explanation: "spent + time + V-ing → It took + O + time + to V." }
        ],
        level2: [
          { id: "g4l2a", type: "fillblank", prompt: "Rewrite: 'They spent three days building the bamboo bridge.' → It took them three days ______________ (to build) the bamboo bridge.", accepted: ["to build"], correct: "to build", explanation: "spent + time + V-ing → It took + O + time + to V." }
        ],
        level3: [
          { id: "g4l3a", type: "fillblank", prompt: "Rewrite so it keeps the same meaning: 'We spent a whole afternoon planting rice.' → ______________ (It took us a whole afternoon to plant rice).", accepted: ["it took us a whole afternoon to plant rice"], correct: "It took us a whole afternoon to plant rice", explanation: "spent + time + V-ing → It took + O + time + to V." }
        ]
      }
    },
    {
      id: "g5", name: "suggest + V-ing ⇄ suggest + (that) + S + (should) + V (nguyên mẫu)",
      usage: "Động từ \"suggest\" (đề nghị, gợi ý) có hai cách dùng phổ biến: theo sau bởi danh động từ \"V-ing\" khi không nêu rõ chủ ngữ thực hiện, hoặc theo sau bởi mệnh đề \"that + S + (should) + V (nguyên mẫu)\" khi cần nêu rõ ai thực hiện hành động.",
      formulas: [
        "S + suggest(s) + V-ing.  ⇄  S + suggest(s) + (that) + S2 + (should) + V (nguyên mẫu).",
        "He suggested changing our learning style. ⇄ He suggested that we (should) change our learning style."
      ],
      signals: ["suggest + V-ing", "suggest that + S + (should) + V nguyên mẫu"],
      examples: [
        { en: "He suggested changing our learning style to improve our grades.", vi: "Thầy ấy đề nghị thay đổi cách học của chúng tôi để cải thiện điểm số." },
        { en: "I suggested the children should go to bed early.", vi: "Tôi đã đề nghị rằng bọn trẻ nên đi ngủ sớm." }
      ],
      mistakes: [
        { wrong: "I suggested the children to go to bed early.", right: "I suggested the children should go to bed early. (không dùng \"suggest + O + to V\"; phải dùng \"suggest that + S + (should) + V\")" }
      ],
      practice: {
        level1: [
          { id: "g5l1a", type: "fillblank", prompt: "The doctor suggested that he ______________ (rest) for a few days.", accepted: ["rest", "should rest"], correct: "rest", explanation: "suggest that + S + (should) + V (nguyên mẫu)." }
        ],
        level2: [
          { id: "g5l2a", type: "fillblank", prompt: "Rewrite: 'The teacher suggests reviewing the lesson before the test.' → The teacher suggests that students ______________ (review) the lesson before the test.", accepted: ["review", "should review"], correct: "review", explanation: "suggest + V-ing ⇄ suggest that + S + (should) + V." }
        ],
        level3: [
          { id: "g5l3a", type: "fillblank", prompt: "Rewrite so it keeps the same meaning: 'My mother suggested cooking a traditional dish for Tet.' → ______________ (My mother suggested that we (should) cook a traditional dish for Tet).", accepted: ["my mother suggested that we should cook a traditional dish for tet", "my mother suggested that we cook a traditional dish for tet"], correct: "My mother suggested that we (should) cook a traditional dish for Tet", explanation: "suggest + V-ing ⇄ suggest that + S + (should) + V." }
        ]
      }
    }
  ],

  // ---------------------------------------------------------
  // PART 3 — READING PRACTICE
  // ---------------------------------------------------------
  reading: {
    passage: "The lifestyle of Vietnamese people has undergone significant changes from the past to the present. In the past, many families relied on <mark data-w=\"traditional agriculture\">traditional agriculture</mark>, using simple farming tools and often <mark data-w=\"riding buffaloes\">riding buffaloes</mark> to help their parents in the fields. Family values were highly emphasized, with extended families living together and supporting one another. Today, life has become more modern with the advent of <mark data-w=\"electronic devices\">electronic devices</mark>. Students now have more opportunities to learn and connect through the internet, allowing for <mark data-w=\"greater independence\">greater independence</mark> in their lives. However, Vietnamese people still maintain healthy eating habits and often enjoy outdoor activities to stay fit. Although lifestyles have changed, family values and strong connections <mark data-w=\"remain vital aspects\">remain vital aspects</mark> of Vietnamese culture.",
    vocabInContext: {
      "traditional agriculture": "nông nghiệp truyền thống",
      "riding buffaloes": "cưỡi trâu",
      "electronic devices": "thiết bị điện tử",
      "greater independence": "sự độc lập lớn hơn",
      "remain vital aspects": "vẫn là những khía cạnh thiết yếu"
    },
    translation: "<b>LỐI SỐNG TRUYỀN THỐNG VÀ HIỆN ĐẠI CỦA NGƯỜI VIỆT NAM</b><br><br>Lối sống của người Việt Nam đã trải qua những thay đổi đáng kể từ quá khứ đến hiện tại. Trong quá khứ, nhiều gia đình dựa vào nông nghiệp truyền thống, sử dụng các công cụ canh tác đơn giản và thường cưỡi trâu để giúp bố mẹ làm việc đồng áng. Giá trị gia đình được đề cao mạnh mẽ, với các gia đình nhiều thế hệ sống cùng nhau và hỗ trợ lẫn nhau. Ngày nay, cuộc sống đã trở nên hiện đại hơn với sự xuất hiện của các thiết bị điện tử. Học sinh hiện nay có nhiều cơ hội học tập và kết nối qua internet hơn, tạo điều kiện cho sự độc lập lớn hơn trong cuộc sống của họ. Tuy nhiên, người Việt Nam vẫn duy trì thói quen ăn uống lành mạnh và thường tham gia các hoạt động ngoài trời để giữ gìn sức khỏe. Dù lối sống đã thay đổi, giá trị gia đình và những mối liên kết bền chặt vẫn là những khía cạnh thiết yếu của văn hóa Việt Nam.",
    practice: [
      { id: "r1", type: "truefalse", prompt: "In the past, Vietnamese families used advanced machinery for farming.", correct: "False", explanation: "Sai. Bài đọc: gia đình xưa dùng \"simple farming tools\", không phải máy móc hiện đại." },
      { id: "r2", type: "truefalse", prompt: "Extended families used to live together under one roof to support each other.", correct: "True", explanation: "Đúng. Bài đọc: \"extended families living together and supporting one another.\"" },
      { id: "r3", type: "truefalse", prompt: "The internet helps modern Vietnamese students become more independent.", correct: "True", explanation: "Đúng. Bài đọc: học qua internet \"allowing for greater independence.\"" },
      { id: "r4", type: "truefalse", prompt: "Vietnamese people today no longer care about traditional family values.", correct: "False", explanation: "Sai. Bài đọc: giá trị gia đình \"remain vital aspects of Vietnamese culture.\"" },
      { id: "r5", type: "mcq", prompt: "What is the main idea of the passage?", options: { A: "The history of traditional agriculture in Vietnam.", B: "The negative impacts of electronic devices on Vietnamese youth.", C: "The changes and continuity in Vietnamese lifestyles over time.", D: "The importance of outdoor activities for Vietnamese people." }, correct: "C", explanation: "Bài đọc trình bày cả sự thay đổi và những giá trị vẫn duy trì trong lối sống người Việt." },
      { id: "r6", type: "mcq", prompt: "Which of the following is NOT true according to the passage?", options: { A: "Modern electronic devices have changed how Vietnamese people live.", B: "Vietnamese people nowadays prefer fast food over healthy eating habits.", C: "Children in the past used to help their parents in the fields.", D: "Family values are still an essential part of Vietnamese culture today." }, correct: "B", explanation: "Bài đọc nói ngược lại: người Việt vẫn duy trì \"healthy eating habits\"." },
      { id: "r7", type: "fillblank", prompt: "Find the phrase in the passage that means 'cưỡi trâu'.", accepted: ["riding buffaloes"], correct: "riding buffaloes", explanation: "'...often riding buffaloes to help their parents in the fields.' — riding buffaloes = cưỡi trâu." },
      { id: "r8", type: "mcq", prompt: "According to the passage, what do Vietnamese people still maintain today?", options: { A: "Healthy eating habits and outdoor activities.", B: "Only traditional farming tools.", C: "A complete rejection of modern technology.", D: "Living without any family support." }, correct: "A", explanation: "Bài đọc: 'Vietnamese people still maintain healthy eating habits and often enjoy outdoor activities to stay fit.'" },
      { id: "r9", type: "truefalse", prompt: "According to the passage, family values and strong connections remain vital in Vietnamese culture today.", correct: "True", explanation: "Đúng. Bài đọc: 'family values and strong connections remain vital aspects of Vietnamese culture.'" }
    ]
  },

  // ---------------------------------------------------------
  // PART 4 — TRANSLATION PRACTICE
  // ---------------------------------------------------------
  translation: [
    { id: "t1", en: "The lifestyle of Vietnamese people has undergone significant changes from the past to the present.", suggested: "Lối sống của người Việt Nam đã trải qua những thay đổi đáng kể từ quá khứ đến hiện tại.", notes: "\"undergo changes\" (trải qua những thay đổi) là cách diễn đạt trang trọng, thường dùng trong văn viết." },
    { id: "t2", en: "In the past, many families relied on traditional agriculture, using simple farming tools.", suggested: "Trong quá khứ, nhiều gia đình dựa vào nông nghiệp truyền thống, sử dụng các công cụ canh tác đơn giản.", notes: "\"using + N\" là cụm phân từ bổ sung, diễn tả cách thức đi kèm hành động chính." },
    { id: "t3", en: "Today, life has become more modern with the advent of electronic devices.", suggested: "Ngày nay, cuộc sống đã trở nên hiện đại hơn với sự xuất hiện của các thiết bị điện tử.", notes: "\"the advent of + N\" (sự xuất hiện của) là cách diễn đạt trang trọng cho \"sự ra đời\"." },
    { id: "t4", en: "Vietnamese people still maintain healthy eating habits and often enjoy outdoor activities to stay fit.", suggested: "Người Việt Nam vẫn duy trì thói quen ăn uống lành mạnh và thường tham gia các hoạt động ngoài trời để giữ gìn sức khỏe.", notes: "\"to stay fit\" (để giữ dáng/khỏe mạnh) là cụm động từ nguyên mẫu chỉ mục đích." },
    { id: "t5", en: "Although lifestyles have changed, family values and strong connections remain vital aspects of Vietnamese culture.", suggested: "Dù lối sống đã thay đổi, giá trị gia đình và những mối liên kết bền chặt vẫn là những khía cạnh thiết yếu của văn hóa Việt Nam.", notes: "\"Although + mệnh đề\" diễn tả sự nhượng bộ/tương phản." }
  ],

  // ---------------------------------------------------------
  // PART 5 — SENTENCE TRANSFORMATION PRACTICE
  // ---------------------------------------------------------
  transformation: [
    {
      id: "tr1", name: "The last time + quá khứ đơn + was + ... + ago ⇄ haven't/hasn't + V3 + for",
      formula: "The last time + S + V(quá khứ đơn) + was + khoảng thời gian + ago  →  S + haven't/hasn't + V3 + for + khoảng thời gian",
      example: { before: "The last time I visited my grandparents was a year ago.", after: "I haven't visited my grandparents for a year." },
      practice: [
        { id: "tr1p1", type: "fillblank", prompt: "The last time she called her friend was a week ago. → She hasn't ______________ (called) her friend for a week.", accepted: ["called"], correct: "called", explanation: "The last time + quá khứ đơn + was + ... + ago → hasn't + V3 + for." },
        { id: "tr1p2", type: "fillblank", prompt: "Rewrite: 'The last time we played badminton was two months ago.' → We haven't ______________ (played) badminton for two months.", accepted: ["played"], correct: "played", explanation: "The last time + quá khứ đơn + was + ... + ago → haven't + V3 + for." }
      ]
    },
    {
      id: "tr2", name: "like/want + to own + N ⇄ wish + V(quá khứ đơn)",
      formula: "S + really like(s)/want(s) + to own/have + N  →  S + wish(es) + S + V(quá khứ đơn)",
      example: { before: "My brother really likes to own a cat.", after: "My brother wishes he owned a cat." },
      practice: [
        { id: "tr2p1", type: "fillblank", prompt: "I really want to have more free time. → I wish I ______________ (had) more free time.", accepted: ["had"], correct: "had", explanation: "want to have + N → wish + V(quá khứ đơn)." },
        { id: "tr2p2", type: "fillblank", prompt: "Rewrite: 'She really likes to own a traditional ao dai.' → She wishes she ______________ (owned) a traditional ao dai.", accepted: ["owned"], correct: "owned", explanation: "like to own + N → wish + V(quá khứ đơn)." }
      ]
    },
    {
      id: "tr3", name: "No other + N + so sánh hơn + than ⇄ so sánh nhất",
      formula: "No other + N + is/was + so sánh hơn + than + N  →  N + is/was + the + so sánh nhất",
      example: { before: "No other house in the village is older than this one.", after: "This house is the oldest in the village." },
      practice: [
        { id: "tr3p1", type: "fillblank", prompt: "No other dish in the menu is more delicious than this one. → This dish is the ______________ (most delicious) in the menu.", accepted: ["most delicious"], correct: "most delicious", explanation: "No other + so sánh hơn + than → so sánh nhất." },
        { id: "tr3p2", type: "fillblank", prompt: "Rewrite: 'No other city in the country is busier than Ho Chi Minh City.' → Ho Chi Minh City is the ______________ (busiest) city in the country.", accepted: ["busiest"], correct: "busiest", explanation: "No other + so sánh hơn + than → so sánh nhất." }
      ]
    },
    {
      id: "tr4", name: "spend + time + V-ing ⇄ It takes/took + O + time + to V",
      formula: "S + spent + khoảng thời gian + V-ing  →  It + took + O + khoảng thời gian + to V",
      example: { before: "He spent two hours fixing the traditional plow.", after: "It took him two hours to fix the traditional plow." },
      practice: [
        { id: "tr4p1", type: "fillblank", prompt: "We spent a day preparing food for Tet. → It took us a day ______________ (to prepare) food for Tet.", accepted: ["to prepare"], correct: "to prepare", explanation: "spent + time + V-ing → It took + O + time + to V." },
        { id: "tr4p2", type: "fillblank", prompt: "Rewrite: 'She spent thirty minutes writing the report.' → It took her thirty minutes ______________ (to write) the report.", accepted: ["to write"], correct: "to write", explanation: "spent + time + V-ing → It took + O + time + to V." }
      ]
    }
  ],

  // ---------------------------------------------------------
  // PART 6 — QUICK REVIEW (mini test, all skills)
  // ---------------------------------------------------------
  quickReview: [
    { id: "q1", cat: "Vocabulary", type: "mcq", prompt: "'Generation gap' means:", options: { A: "khoảng cách thế hệ", B: "gia đình mở rộng", C: "phong tục", D: "lối sống hiện đại" }, correct: "A", explanation: "generation gap (n phr) = khoảng cách thế hệ." },
    { id: "q2", cat: "Vocabulary", type: "mcq", prompt: "'Sedentary' means:", options: { A: "năng động", B: "ít vận động", C: "tự tin", D: "truyền thống" }, correct: "B", explanation: "sedentary (adj) = ít vận động." },
    { id: "q3", cat: "Vocabulary", type: "fillblank", prompt: "Today, farmers use ______________ (advanced) machines that make their work easier.", accepted: ["advanced"], correct: "advanced", explanation: "advanced (adj) = tiên tiến." },
    { id: "q4", cat: "Grammar", type: "mcq", prompt: "The last time I visited my grandparents was a year ago. → I ______ visited my grandparents for a year.", options: { A: "haven't", B: "didn't", C: "don't", D: "wasn't" }, correct: "A", explanation: "The last time + quá khứ đơn + was + ... + ago → haven't + V3 + for." },
    { id: "q5", cat: "Grammar", type: "mcq", prompt: "My brother really likes to own a cat. → My brother wishes he ______ a cat.", options: { A: "owns", B: "owned", C: "own", D: "will own" }, correct: "B", explanation: "like to own + N → wish + V(quá khứ đơn)." },
    { id: "q6", cat: "Grammar", type: "fillblank", prompt: "No other house in the village is older than this one. → This house is the ______________ (oldest) in the village.", accepted: ["oldest"], correct: "oldest", explanation: "No other + so sánh hơn + than → so sánh nhất." },
    { id: "q7", cat: "Grammar", type: "fillblank", prompt: "He spent two hours fixing the traditional plow. → It took him two hours ______________ (to fix) the traditional plow.", accepted: ["to fix"], correct: "to fix", explanation: "spent + time + V-ing → It took + O + time + to V." },
    { id: "q8", cat: "Reading", type: "truefalse", prompt: "Extended families used to live together under one roof to support each other.", correct: "True", explanation: "Đúng theo bài đọc." },
    { id: "q9", cat: "Reading", type: "truefalse", prompt: "Vietnamese people today no longer care about traditional family values.", correct: "False", explanation: "Sai. Giá trị gia đình vẫn được coi trọng." },
    { id: "q10", cat: "Reading", type: "mcq", prompt: "What is the main idea of the passage about Vietnamese lifestyles?", options: { A: "The changes and continuity in Vietnamese lifestyles over time.", B: "The history of traditional agriculture only.", C: "The dangers of using electronic devices.", D: "The importance of buffaloes in farming." }, correct: "A", explanation: "Bài đọc trình bày cả sự thay đổi và giá trị vẫn được duy trì." },
    { id: "q11", cat: "Writing", type: "fillblank", prompt: "Vietnamese teenagers have become more ______________ (confidence) in communicating with others.", accepted: ["confident"], correct: "confident", explanation: "confidence (n) → confident (adj)." },
    { id: "q12", cat: "Writing", type: "fillblank", prompt: "The ______________ (differ) of Vietnamese lifestyle can be seen in teenagers' fashion.", accepted: ["difference"], correct: "difference", explanation: "differ (v) → difference (n)." },
    { id: "q13", cat: "Writing", type: "fillblank", prompt: "Teenagers often ask for ______________ (permit) from their parents before making decisions.", accepted: ["permission"], correct: "permission", explanation: "permit (v) → permission (n)." },
    { id: "q14", cat: "Vocabulary", type: "mcq", prompt: "Which word means 'cơ sở vật chất học tập'?", options: { A: "learning facilities", B: "family values", C: "outdoor activity", D: "generation gap" }, correct: "A", explanation: "learning facilities (n phr) = cơ sở vật chất học tập." }
  ]
};
