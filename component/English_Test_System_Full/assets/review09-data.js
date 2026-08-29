const REVIEW = {
  id: "test09",
  testFile: "test09.html",
  grade: "Grade 8 — Global Success",
  unit: "Unit 2: Life in the countryside",
  title: "Knowledge Review — Unit 2, Practice Test 1",

  // ---------------------------------------------------------
  // PART 1 — VOCABULARY REVIEW
  // ---------------------------------------------------------
  vocabulary: [
    { word: "rural", pos: "adj", ipa: "/ˈrʊrəl/", meaning: "thuộc về nông thôn", example: "In some rural areas, it's difficult to find electrical appliances in a house.", exampleVi: "Ở một số vùng nông thôn, rất khó tìm thấy thiết bị điện trong nhà." },
    { word: "countryside", pos: "n", ipa: "/ˈkʌntrisaɪd/", meaning: "vùng nông thôn, miền quê", example: "Living in the country is something that people from the city often dream about.", exampleVi: "Sống ở nông thôn là điều mà người thành phố thường mơ ước." },
    { word: "electrical appliance", pos: "n phr", ipa: "/ɪˌlektrɪkl əˈplaɪəns/", meaning: "thiết bị điện", example: "It's difficult to find electrical appliances in a rural house.", exampleVi: "Rất khó tìm thiết bị điện trong một ngôi nhà ở nông thôn." },
    { word: "generosity", pos: "n", ipa: "/ˌdʒenəˈrɒsəti/", meaning: "lòng hào phóng", example: "The villager's generosity saved you from starving.", exampleVi: "Lòng hào phóng của người dân làng đã cứu bạn khỏi bị đói." },
    { word: "nomadic", pos: "adj", ipa: "/noʊˈmædɪk/", meaning: "du mục", example: "People living a nomadic life have to move a lot to find grass for their animals.", exampleVi: "Những người sống cuộc sống du mục phải di chuyển nhiều để tìm cỏ cho vật nuôi." },
    { word: "pick", pos: "v", ipa: "/pɪk/", meaning: "hái (trái cây)", example: "Picking fruits on a farm is one of the most popular part-time jobs.", exampleVi: "Hái trái cây ở nông trại là một trong những công việc làm thêm phổ biến nhất." },
    { word: "brilliant", pos: "adj", ipa: "/ˈbrɪliənt/", meaning: "xuất sắc, tài giỏi", example: "It seems to be the most brilliant idea so far.", exampleVi: "Đó có vẻ là ý tưởng xuất sắc nhất từ trước đến giờ." },
    { word: "farther", pos: "adv", ipa: "/ˈfɑːrðər/", meaning: "xa hơn", example: "His office and farm are farther away than mine.", exampleVi: "Văn phòng và nông trại của anh ấy xa hơn của tôi." },
    { word: "two-day trip", pos: "n phr", ipa: "/tuː deɪ trɪp/", meaning: "chuyến đi hai ngày", example: "John invited Ann to join his family on a two-day trip to his home village.", exampleVi: "John mời Ann tham gia cùng gia đình anh ấy trong chuyến đi hai ngày về quê." },
    { word: "fence", pos: "n", ipa: "/fens/", meaning: "hàng rào", example: "I am repairing the fence and feeding the chickens.", exampleVi: "Tôi đang sửa hàng rào và cho gà ăn." },
    { word: "destruction", pos: "n", ipa: "/dɪˈstrʌkʃn/", meaning: "sự phá hủy", example: "The continuous destruction of forests will lead to the disappearance of many rare plants.", exampleVi: "Sự phá hủy liên tục các khu rừng sẽ dẫn đến sự biến mất của nhiều loài thực vật quý hiếm." },
    { word: "disappearance", pos: "n", ipa: "/ˌdɪsəˈpɪrəns/", meaning: "sự biến mất", example: "Cutting down trees leads to the disappearance of wildlife habitats.", exampleVi: "Việc chặt cây dẫn đến sự biến mất của môi trường sống hoang dã." },
    { word: "picturesque", pos: "adj", ipa: "/ˌpɪktʃərˈesk/", meaning: "đẹp như tranh vẽ", example: "The guide showed us a picturesque village nestled in the valley.", exampleVi: "Người hướng dẫn đưa chúng tôi đến một ngôi làng đẹp như tranh nằm trong thung lũng." },
    { word: "entertainment", pos: "n", ipa: "/ˌentərˈteɪnmənt/", meaning: "sự giải trí", example: "Entertainment is difficult to find in the countryside, particularly in the evening.", exampleVi: "Giải trí khó tìm ở nông thôn, đặc biệt là vào buổi tối." },
    { word: "drawback", pos: "n", ipa: "/ˈdrɔːbæk/", meaning: "nhược điểm, hạn chế", example: "There are certain disadvantages or drawbacks to life outside the city.", exampleVi: "Có một số bất lợi hoặc hạn chế khi sống ngoài thành phố." },
    { word: "quietness", pos: "n", ipa: "/ˈkwaɪətnəs/", meaning: "sự yên tĩnh", example: "You can enjoy peace and quietness in the countryside.", exampleVi: "Bạn có thể tận hưởng sự bình yên và tĩnh lặng ở nông thôn." },
    { word: "peace", pos: "n", ipa: "/piːs/", meaning: "sự bình yên", example: "There are many advantages to living in the country, such as peace and quietness.", exampleVi: "Có nhiều lợi ích khi sống ở nông thôn, chẳng hạn như sự bình yên và tĩnh lặng." },
    { word: "indulge (in)", pos: "v", ipa: "/ɪnˈdʌldʒ/", meaning: "đắm mình, thỏa thích tham gia vào", example: "Indulging in a hobby is actually good for a sound health.", exampleVi: "Đắm mình vào một sở thích thực ra rất tốt cho sức khỏe." }
  ],

  vocabPractice: {
    mcq: [
      { id: "vp1", prompt: "Choose the word that means 'du mục':", options: { A: "nomadic", B: "rural", C: "picturesque", D: "brilliant" }, correct: "A", explanation: "<b>nomadic</b> (adj) = du mục." },
      { id: "vp2", prompt: "Choose the word that means 'lòng hào phóng':", options: { A: "destruction", B: "generosity", C: "quietness", D: "entertainment" }, correct: "B", explanation: "<b>generosity</b> (n) = lòng hào phóng." },
      { id: "vp3", prompt: "Choose the best word: \"______ fruits on a farm is a popular part-time job.\"", options: { A: "Doing", B: "Picking", C: "Making", D: "Taking" }, correct: "B", explanation: "\"<b>pick</b> fruits\" (hái trái cây) là cụm cố định." },
      { id: "vp4", prompt: "Choose the word that means 'đẹp như tranh':", options: { A: "picturesque", B: "crowded", C: "vast", D: "rural" }, correct: "A", explanation: "<b>picturesque</b> (adj) = đẹp như tranh vẽ." },
      { id: "vp5", prompt: "\"His farm is ______ away than mine.\" (xa hơn)", options: { A: "farther", B: "father", C: "far", D: "farer" }, correct: "A", explanation: "<b>farther</b> (adv) = xa hơn, so sánh hơn bất quy tắc của \"far\"." },
      { id: "vp6", prompt: "Choose the word that means 'nhược điểm, hạn chế':", options: { A: "advantage", B: "drawback", C: "entertainment", D: "generosity" }, correct: "B", explanation: "<b>drawback</b> (n) = nhược điểm, hạn chế." }
    ],
    fillblank: [
      { id: "vf1", prompt: "You can enjoy peace and ______________ (sự yên tĩnh) in the countryside.", accepted: ["quietness"], correct: "quietness", explanation: "<b>quietness</b> (n) = sự yên tĩnh." },
      { id: "vf2", prompt: "I am repairing the ______________ (hàng rào) and feeding the chickens.", accepted: ["fence"], correct: "fence", explanation: "<b>fence</b> (n) = hàng rào." },
      { id: "vf3", prompt: "The continuous ______________ (sự phá hủy) of forests harms the environment.", accepted: ["destruction"], correct: "destruction", explanation: "<b>destruction</b> (n) = sự phá hủy." },
      { id: "vf4", prompt: "It's difficult to find ______________ (thiết bị điện) in some rural houses.", accepted: ["electrical appliances"], correct: "electrical appliances", explanation: "<b>electrical appliances</b> (n phr) = thiết bị điện." },
      { id: "vf5", prompt: "______________ (Giải trí) is difficult to find in the countryside at night.", accepted: ["Entertainment"], correct: "Entertainment", explanation: "<b>entertainment</b> (n) = sự giải trí." },
      { id: "vf6", prompt: "______________ (Đắm mình vào) a hobby is good for your health.", accepted: ["Indulging in"], correct: "Indulging in", explanation: "<b>indulge in</b> (v) = đắm mình, thỏa thích tham gia vào." }
    ],
    matching: {
      left: ["nomadic", "picturesque", "brilliant", "drawback", "peace", "countryside"],
      right: ["du mục", "đẹp như tranh vẽ", "xuất sắc, tài giỏi", "nhược điểm, hạn chế", "sự bình yên", "vùng nông thôn"],
      correctMap: [0, 1, 2, 3, 4, 5]
    },
    chooseWord: [
      { id: "cw1", prompt: "\"The local farmers welcomed the tourists very ______.\" (GENEROUS)", options: { A: "generous", B: "generosity", C: "generously", D: "generousness" }, correct: "C", explanation: "Cần trạng từ bổ nghĩa cho động từ \"welcomed\" → generous (adj) → <b>generously</b> (adv)." },
      { id: "cw2", prompt: "\"The scenery at the local farm is truly ______.\" (WONDER)", options: { A: "wonder", B: "wondering", C: "wonderful", D: "wonders" }, correct: "C", explanation: "Cần tính từ sau \"truly\" → wonder (n/v) → <b>wonderful</b> (adj)." },
      { id: "cw3", prompt: "\"Nam is an ______ story teller.\" (ATTRACT)", options: { A: "attract", B: "attractive", C: "attraction", D: "attractively" }, correct: "B", explanation: "Cần tính từ trước danh từ \"story teller\" → attract (v) → <b>attractive</b> (adj)." }
    ],
    wordMeaning: [
      { id: "wm1", prompt: "What does 'vast' mean?", options: { A: "nhỏ bé", B: "rộng lớn", C: "chật hẹp", D: "yên tĩnh" }, correct: "B", explanation: "vast (adj) = rộng lớn." },
      { id: "wm2", prompt: "What does 'picturesque' mean?", options: { A: "hiện đại", B: "ồn ào", C: "đẹp như tranh vẽ", D: "nguy hiểm" }, correct: "C", explanation: "picturesque (adj) = đẹp như tranh vẽ." },
      { id: "wm3", prompt: "What does 'drawback' mean?", options: { A: "ưu điểm", B: "nhược điểm", C: "sở thích", D: "kỷ niệm" }, correct: "B", explanation: "drawback (n) = nhược điểm, hạn chế." }
    ],
    wordForm: [
      { id: "wf1", prompt: "Living in the country brings a lot of (HAPPY) ______________.", accepted: ["happiness"], correct: "happiness", explanation: "Cần danh từ → happy (adj) → <b>happiness</b> (n)." },
      { id: "wf2", prompt: "This will lead to the (APPEAR) ______________ of many rare plants.", accepted: ["disappearance"], correct: "disappearance", explanation: "Cần danh từ mang nghĩa đối lập → appear (v) → <b>disappearance</b> (n)." },
      { id: "wf3", prompt: "An exciting (DAILY) ______________ trip to the farm is planned.", accepted: ["day"], correct: "day", explanation: "Cần danh từ ghép \"day trip\" → daily (adv) rút gọn thành <b>day</b> (n)." }
    ]
  },

  // ---------------------------------------------------------
  // PART 2 — GRAMMAR REVIEW & PRACTICE
  // ---------------------------------------------------------
  grammar: [
    {
      id: "g1", name: "So sánh hơn của tính từ ⇄ So sánh hơn của trạng từ",
      usage: "Khi câu gốc dùng \"S + be + more + adj + than\" để so sánh, ta có thể diễn đạt lại bằng trạng từ so sánh hơn bổ nghĩa cho động từ chính: \"S + V + more + adv + than\" — với nghĩa không đổi.",
      formulas: [
        "S + be + more + adj + than.  →  S + V + more + adv + than.",
        "Nam is a more attractive story teller than Mai. → Nam tells stories more attractively than Mai."
      ],
      signals: ["more + adj + than", "more + adv + than"],
      examples: [
        { en: "Nam is a more attractive story teller than Mai.", vi: "Nam là người kể chuyện hấp dẫn hơn Mai." },
        { en: "Nam tells stories more attractively than Mai.", vi: "Nam kể chuyện hấp dẫn hơn Mai." }
      ],
      mistakes: [
        { wrong: "Nam tells stories more attractive than Mai.", right: "Nam tells stories more attractively than Mai." }
      ],
      practice: {
        level1: [
          { id: "g1l1a", type: "fillblank", prompt: "Lan is a more careful driver than her brother. → Lan drives ______________ (more careful) than her brother.", accepted: ["more carefully"], correct: "more carefully", explanation: "Tính từ so sánh hơn → trạng từ so sánh hơn." }
        ],
        level2: [
          { id: "g1l2a", type: "fillblank", prompt: "Rewrite: 'He is a more confident speaker than his classmates.' → He speaks ______________ (more confident) than his classmates.", accepted: ["more confidently"], correct: "more confidently", explanation: "Tính từ so sánh hơn → trạng từ so sánh hơn." }
        ],
        level3: [
          { id: "g1l3a", type: "fillblank", prompt: "Rewrite so it keeps the same meaning: 'Mai is a more skillful singer than her sister.' → Mai sings ______________ (more skillfully than her sister).", accepted: ["more skillfully than her sister"], correct: "more skillfully than her sister", explanation: "Tính từ so sánh hơn → trạng từ so sánh hơn." }
        ]
      }
    },
    {
      id: "g2", name: "\"X + V + better than anybody\" ⇄ \"No one + V + better than X\"",
      usage: "Khi khẳng định X giỏi nhất trong nhóm bằng \"X + V + better than anybody\", ta có thể diễn đạt lại bằng phủ định \"No one + V + better than X\" (Không ai làm gì đó tốt hơn X) — cùng khẳng định X là giỏi nhất.",
      formulas: [
        "X + V + better than anybody (in + place).  →  No one (in + place) + V + better than X.",
        "Ronaldo plays better than anybody in the team. → No one in the team plays better than Ronaldo."
      ],
      signals: ["better than anybody", "No one ... better than"],
      examples: [
        { en: "Ronaldo plays better than anybody in the team.", vi: "Ronaldo chơi hay hơn bất kỳ ai trong đội." },
        { en: "No one in the team plays better than Ronaldo.", vi: "Không ai trong đội chơi hay hơn Ronaldo." }
      ],
      mistakes: [
        { wrong: "No one plays good than Ronaldo.", right: "No one plays better than Ronaldo." }
      ],
      practice: {
        level1: [
          { id: "g2l1a", type: "fillblank", prompt: "Mai sings better than anybody in the class. → ______________ (No) one in the class sings better than Mai.", accepted: ["No"], correct: "No", explanation: "X + better than anybody → No one + better than X." }
        ],
        level2: [
          { id: "g2l2a", type: "fillblank", prompt: "Rewrite: 'Long runs faster than anybody in the school.' → No one in the school ______________ (run) faster than Long.", accepted: ["runs"], correct: "runs", explanation: "X + faster than anybody → No one + runs faster than X." }
        ],
        level3: [
          { id: "g2l3a", type: "fillblank", prompt: "Rewrite so it keeps the same meaning: 'She cooks better than anybody in the family.' → ______________ (No one in the family cooks better than she does).", accepted: ["no one in the family cooks better than she does"], correct: "No one in the family cooks better than she does", explanation: "X + better than anybody → No one + better than X." }
        ]
      }
    },
    {
      id: "g3", name: "more + adj + than ⇄ not as + adj + as (so sánh bằng phủ định)",
      usage: "\"more + adj + than\" (so sánh hơn) có thể diễn đạt lại theo hướng ngược lại bằng \"not as + adj + as\" (so sánh bằng ở dạng phủ định) khi đảo vị trí hai đối tượng so sánh.",
      formulas: [
        "A + is/are + more + adj + than + B.  →  B + is/are + not as + adj + as + A.",
        "Life in the city is more crowded than life in the countryside. → Life in the countryside isn't as crowded as life in the city."
      ],
      signals: ["more + adj + than", "not as + adj + as"],
      examples: [
        { en: "Life in the city is more crowded than life in the countryside.", vi: "Cuộc sống ở thành phố đông đúc hơn ở nông thôn." },
        { en: "Life in the countryside isn't as crowded as life in the city.", vi: "Cuộc sống ở nông thôn không đông đúc bằng ở thành phố." }
      ],
      mistakes: [
        { wrong: "Life in the countryside isn't so crowded than life in the city.", right: "Life in the countryside isn't as crowded as life in the city." }
      ],
      practice: {
        level1: [
          { id: "g3l1a", type: "fillblank", prompt: "The city is more polluted than the countryside. → The countryside ______________ (isn't) as polluted as the city.", accepted: ["isn't"], correct: "isn't", explanation: "more + adj + than → not as + adj + as (đảo vị trí)." }
        ],
        level2: [
          { id: "g3l2a", type: "fillblank", prompt: "Rewrite: 'The countryside is quieter than the city.' → The city ______________ (isn't as quiet as) the countryside.", accepted: ["isn't as quiet as"], correct: "isn't as quiet as", explanation: "quieter than → isn't as quiet as (đảo vị trí)." }
        ],
        level3: [
          { id: "g3l3a", type: "fillblank", prompt: "Rewrite so it keeps the same meaning: 'The mountain air is fresher than the city air.' → The city air ______________ (is not as fresh as the mountain air).", accepted: ["is not as fresh as the mountain air"], correct: "is not as fresh as the mountain air", explanation: "fresher than → is not as fresh as (đảo vị trí)." }
        ]
      }
    },
    {
      id: "g4", name: "V ... in one's free time ⇄ spend + time + V-ing",
      usage: "Hành động diễn ra \"in one's free time\" (vào thời gian rảnh) có thể diễn đạt lại bằng cấu trúc \"spend + time + V-ing\" (dành thời gian làm gì).",
      formulas: [
        "S + V + ... + in + possessive + free time.  →  S + spend(s) + possessive + free time + V-ing.",
        "Children often ride bicycles through the fields in their free time. → Children often spend their free time riding bicycles through the fields."
      ],
      signals: ["in one's free time", "spend time V-ing"],
      examples: [
        { en: "Children often ride bicycles through the fields in their free time.", vi: "Trẻ em thường đạp xe qua các cánh đồng vào thời gian rảnh." },
        { en: "Children often spend their free time riding bicycles through the fields.", vi: "Trẻ em thường dành thời gian rảnh để đạp xe qua các cánh đồng." }
      ],
      mistakes: [
        { wrong: "Children often spend their free time to ride bicycles.", right: "Children often spend their free time riding bicycles." }
      ],
      practice: {
        level1: [
          { id: "g4l1a", type: "fillblank", prompt: "She reads books in her free time. → She spends her free time ______________ (read) books.", accepted: ["reading"], correct: "reading", explanation: "V in free time → spend time V-ing." }
        ],
        level2: [
          { id: "g4l2a", type: "fillblank", prompt: "Rewrite: 'We often fish by the river in our free time.' → We often spend our free time ______________ (fish) by the river.", accepted: ["fishing"], correct: "fishing", explanation: "V in free time → spend time V-ing." }
        ],
        level3: [
          { id: "g4l3a", type: "fillblank", prompt: "Rewrite so it keeps the same meaning: 'He grows vegetables in his garden in his free time.' → He ______________ (spends his free time growing vegetables in his garden).", accepted: ["spends his free time growing vegetables in his garden"], correct: "spends his free time growing vegetables in his garden", explanation: "V in free time → spend time V-ing." }
        ]
      }
    },
    {
      id: "g5", name: "far → farther / further (so sánh bất quy tắc)",
      usage: "Tính từ/trạng từ \"far\" (xa) có hai dạng so sánh hơn bất quy tắc: \"farther\" (thường dùng cho khoảng cách vật lý) và \"further\" (thường dùng cho nghĩa trừu tượng, mở rộng).",
      formulas: [
        "far → farther / further (so sánh hơn) → farthest / furthest (so sánh nhất).",
        "His office and farm are farther away than mine."
      ],
      signals: ["far", "farther", "further"],
      examples: [
        { en: "His office and farm are farther away than mine.", vi: "Văn phòng và nông trại của anh ấy xa hơn của tôi." },
        { en: "We need further information before we decide.", vi: "Chúng tôi cần thêm thông tin trước khi quyết định." }
      ],
      mistakes: [
        { wrong: "His farm is more far than mine.", right: "His farm is farther than mine." }
      ],
      practice: {
        level1: [
          { id: "g5l1a", type: "fillblank", prompt: "My house is ______________ (far, so sánh hơn) from school than yours.", accepted: ["farther", "further"], correct: "farther", explanation: "far → farther (so sánh hơn, khoảng cách vật lý)." }
        ],
        level2: [
          { id: "g5l2a", type: "fillblank", prompt: "Rewrite: 'The village is far from the city.' → The village is ______________ (farther) from the city than the town.", accepted: ["farther"], correct: "farther", explanation: "far → farther (so sánh hơn)." }
        ],
        level3: [
          { id: "g5l3a", type: "fillblank", prompt: "We need to discuss this topic in ______________ (far, nghĩa trừu tượng) detail next time.", accepted: ["further"], correct: "further", explanation: "further dùng cho nghĩa trừu tượng, mở rộng (thêm nữa)." }
        ]
      }
    }
  ],

  // ---------------------------------------------------------
  // PART 3 — READING PRACTICE
  // ---------------------------------------------------------
  reading: {
    passage: "Living in the country is something that people from the city often dream about. However, in reality, it has both advantages and disadvantages. There are certainly many advantages to living in the country. First, you can enjoy <mark data-w=\"peace\">peace</mark> and <mark data-w=\"quietness\">quietness</mark>. Moreover, people tend to be friendlier. A further advantage is that there is less traffic, so it is safer for young children. However, there are certain disadvantages or <mark data-w=\"drawbacks\">drawbacks</mark> to life outside the city. First, because there are fewer people, you are likely to have few friends. In addition, <mark data-w=\"entertainment\">entertainment</mark> is difficult to find, particularly in the evening. Furthermore, the fact that there are fewer shops and services means that it is hard to find jobs. In short, it can be seen that the country is more suitable for some people than others. On the whole, it is often the best for those who are <mark data-w=\"retired\">retired</mark> or who have young children. In contrast, young people who have a career are better provided in the city.",
    vocabInContext: {
      peace: "sự bình yên",
      quietness: "sự yên tĩnh",
      drawbacks: "những nhược điểm, hạn chế",
      entertainment: "sự giải trí",
      retired: "đã nghỉ hưu"
    },
    translation: "Sống ở nông thôn là điều mà người thành phố thường mơ ước. Tuy nhiên, trên thực tế, nó có cả ưu điểm và nhược điểm. Chắc chắn có nhiều ưu điểm khi sống ở nông thôn. Trước hết, bạn có thể tận hưởng sự bình yên và tĩnh lặng. Hơn nữa, mọi người có xu hướng thân thiện hơn. Một ưu điểm nữa là ít giao thông hơn, nên an toàn hơn cho trẻ nhỏ. Tuy nhiên, cũng có những nhược điểm hoặc hạn chế khi sống ngoài thành phố. Trước hết, vì ít người hơn, bạn có khả năng có ít bạn bè. Ngoài ra, giải trí khó tìm, đặc biệt vào buổi tối. Hơn nữa, việc có ít cửa hàng và dịch vụ hơn có nghĩa là khó tìm việc làm. Tóm lại, có thể thấy rằng nông thôn phù hợp với một số người hơn những người khác. Nhìn chung, nó thường tốt nhất cho những người đã nghỉ hưu hoặc có con nhỏ. Ngược lại, người trẻ có sự nghiệp thì được đáp ứng tốt hơn ở thành phố.",
    practice: [
      { id: "r1", type: "truefalse", prompt: "Country life is considered safer for small children because there is less traffic.", correct: "True", explanation: "Bài đọc: 'there is less traffic, so it is safer for young children.'" },
      { id: "r2", type: "truefalse", prompt: "It is very easy to find different forms of entertainment in the countryside at night.", correct: "False", explanation: "Sai. Bài đọc: 'entertainment is difficult to find, particularly in the evening.'" },
      { id: "r3", type: "truefalse", prompt: "Having fewer shops and services makes it difficult for people to find employment in the country.", correct: "True", explanation: "Bài đọc: 'fewer shops and services means that it is hard to find jobs.'" },
      { id: "r4", type: "truefalse", prompt: "The countryside is the most ideal place for young people who want to develop their careers.", correct: "False", explanation: "Sai. Bài đọc: 'young people who have a career are better provided in the city.'" },
      { id: "r5", type: "mcq", prompt: "What is the main idea of the passage?", options: { A: "A comparison of the pros and cons of country life and who it suits best.", B: "The reasons why city people always dream about living in the countryside.", C: "The continuous development of shops and services in rural areas.", D: "The difficulties of finding jobs and entertainment for retired people." }, correct: "A", explanation: "Bài đọc so sánh ưu và nhược điểm của cuộc sống nông thôn và kết luận nó phù hợp với ai." },
      { id: "r6", type: "mcq", prompt: "Which of the following is NOT true according to the passage?", options: { A: "Living in the countryside helps you make more friends because there are fewer people.", B: "People in the countryside are generally friendlier than those in the city.", C: "Rural areas offer a peaceful and quiet living environment.", D: "The city provides better conditions and opportunities for young professionals." }, correct: "A", explanation: "Bài đọc nói ngược lại: ít người hơn → ít bạn hơn, không phải nhiều bạn hơn." },
      { id: "r7", type: "fillblank", prompt: "Find the word in the passage that means 'đã nghỉ hưu' (adj).", accepted: ["retired"], correct: "retired", explanation: "'it is often the best for those who are retired' — retired (adj) = đã nghỉ hưu." },
      { id: "r8", type: "mcq", prompt: "According to the passage, who does country life suit best?", options: { A: "Those who are retired or who have young children.", B: "Young professionals with a busy career.", C: "People who need many shops and services nearby.", D: "People who dislike peace and quietness." }, correct: "A", explanation: "Bài đọc: 'it is often the best for those who are retired or who have young children.'" },
      { id: "r9", type: "truefalse", prompt: "According to the passage, people in the countryside tend to be less friendly than those in the city.", correct: "False", explanation: "Sai. Bài đọc: 'people tend to be friendlier' (thân thiện hơn) khi nói về nông thôn." }
    ]
  },

  // ---------------------------------------------------------
  // PART 4 — TRANSLATION PRACTICE
  // ---------------------------------------------------------
  translation: [
    { id: "t1", en: "A hobby is a regular activity that is done for enjoyment, typically during one's free time.", suggested: "Sở thích là một hoạt động thường xuyên được thực hiện để giải trí, thường vào thời gian rảnh của một người.", notes: "Mệnh đề quan hệ 'that is done for enjoyment' bổ nghĩa cho 'activity'." },
    { id: "t2", en: "Indulging in a hobby is actually good for a sound health.", suggested: "Đắm mình vào một sở thích thực ra rất tốt cho sức khỏe.", notes: "Danh động từ 'Indulging in' làm chủ ngữ của câu." },
    { id: "t3", en: "There are certain disadvantages or drawbacks to life outside the city.", suggested: "Có một số bất lợi hoặc hạn chế khi sống ngoài thành phố.", notes: "Cấu trúc 'there are' + danh từ số nhiều để liệt kê." },
    { id: "t4", en: "It can be seen that the country is more suitable for some people than others.", suggested: "Có thể thấy rằng nông thôn phù hợp với một số người hơn những người khác.", notes: "Cấu trúc bị động 'It can be seen that...' (có thể thấy rằng...)." },
    { id: "t5", en: "The continuous destruction of forests will lead to the disappearance of many rare plants.", suggested: "Sự phá hủy liên tục các khu rừng sẽ dẫn đến sự biến mất của nhiều loài thực vật quý hiếm.", notes: "Cụm 'lead to' (dẫn đến) + danh từ." }
  ],

  // ---------------------------------------------------------
  // PART 5 — SENTENCE TRANSFORMATION PRACTICE
  // ---------------------------------------------------------
  transformation: [
    {
      id: "tr1", name: "So sánh hơn của tính từ ⇄ So sánh hơn của trạng từ",
      formula: "S + be + more + adj + than  →  S + V + more + adv + than",
      example: { before: "Nam is a more attractive story teller than Mai.", after: "Nam tells stories more attractively than Mai." },
      practice: [
        { id: "tr1p1", type: "fillblank", prompt: "She is a more careful worker than her colleagues. → She works ______________ (more careful) than her colleagues.", accepted: ["more carefully"], correct: "more carefully", explanation: "Tính từ so sánh hơn → trạng từ so sánh hơn." },
        { id: "tr1p2", type: "fillblank", prompt: "He is a more patient teacher than his brother. → He teaches ______________ (more patient) than his brother.", accepted: ["more patiently"], correct: "more patiently", explanation: "Tính từ so sánh hơn → trạng từ so sánh hơn." }
      ]
    },
    {
      id: "tr2", name: "\"X + better than anybody\" ⇄ \"No one + better than X\"",
      formula: "X + V + better than anybody  →  No one + V + better than X",
      example: { before: "Ronaldo plays better than anybody in the team.", after: "No one in the team plays better than Ronaldo." },
      practice: [
        { id: "tr2p1", type: "fillblank", prompt: "Lan cooks better than anybody in her family. → No one in her family ______________ (cook) better than Lan.", accepted: ["cooks"], correct: "cooks", explanation: "X + better than anybody → No one + better than X." },
        { id: "tr2p2", type: "fillblank", prompt: "Tom swims better than anybody in the class. → ______________ (No one) in the class swims better than Tom.", accepted: ["No one"], correct: "No one", explanation: "X + better than anybody → No one + better than X." }
      ]
    },
    {
      id: "tr3", name: "more + adj + than ⇄ not as + adj + as",
      formula: "A + is more + adj + than + B  →  B + is not as + adj + as + A",
      example: { before: "Life in the city is more crowded than life in the countryside.", after: "Life in the countryside isn't as crowded as life in the city." },
      practice: [
        { id: "tr3p1", type: "fillblank", prompt: "The lake is more beautiful than the pond. → The pond ______________ (isn't) as beautiful as the lake.", accepted: ["isn't"], correct: "isn't", explanation: "more + adj + than → not as + adj + as." },
        { id: "tr3p2", type: "fillblank", prompt: "Rewrite: 'The city is noisier than the village.' → The village ______________ (isn't as noisy as) the city.", accepted: ["isn't as noisy as"], correct: "isn't as noisy as", explanation: "more + adj + than → not as + adj + as." }
      ]
    },
    {
      id: "tr4", name: "V ... in one's free time ⇄ spend + time + V-ing",
      formula: "S + V + ... + in free time  →  S + spend(s) + free time + V-ing",
      example: { before: "Children often ride bicycles through the fields in their free time.", after: "Children often spend their free time riding bicycles through the fields." },
      practice: [
        { id: "tr4p1", type: "fillblank", prompt: "We often play badminton in our free time. → We often spend our free time ______________ (play) badminton.", accepted: ["playing"], correct: "playing", explanation: "V in free time → spend time V-ing." },
        { id: "tr4p2", type: "fillblank", prompt: "He waters the plants in his free time. → He spends his free time ______________ (water) the plants.", accepted: ["watering"], correct: "watering", explanation: "V in free time → spend time V-ing." }
      ]
    }
  ],

  // ---------------------------------------------------------
  // PART 6 — QUICK REVIEW (mini test, all skills)
  // ---------------------------------------------------------
  quickReview: [
    { id: "q1", cat: "Vocabulary", type: "mcq", prompt: "'Nomadic' means:", options: { A: "du mục", B: "định cư", C: "hiện đại", D: "cổ điển" }, correct: "A", explanation: "nomadic (adj) = du mục." },
    { id: "q2", cat: "Vocabulary", type: "mcq", prompt: "'Picturesque' means:", options: { A: "ồn ào", B: "đẹp như tranh vẽ", C: "nguy hiểm", D: "chật hẹp" }, correct: "B", explanation: "picturesque (adj) = đẹp như tranh vẽ." },
    { id: "q3", cat: "Vocabulary", type: "fillblank", prompt: "There are certain disadvantages or ______________ (nhược điểm) to life outside the city.", accepted: ["drawbacks"], correct: "drawbacks", explanation: "drawback (n) = nhược điểm, hạn chế." },
    { id: "q4", cat: "Grammar", type: "mcq", prompt: "Nam is a more attractive story teller than Mai. → Nam tells stories more ______ than Mai.", options: { A: "attractive", B: "attractively", C: "attraction", D: "attract" }, correct: "B", explanation: "Tính từ so sánh hơn → trạng từ so sánh hơn." },
    { id: "q5", cat: "Grammar", type: "mcq", prompt: "Ronaldo plays better than anybody in the team. → No one in the team ______ better than Ronaldo.", options: { A: "play", B: "plays", C: "playing", D: "played" }, correct: "B", explanation: "'No one' là chủ ngữ số ít → động từ chia số ít 'plays'." },
    { id: "q6", cat: "Grammar", type: "fillblank", prompt: "Life in the city is more crowded than life in the countryside. → Life in the countryside isn't ______________ crowded as life in the city.", accepted: ["as"], correct: "as", explanation: "more + adj + than → not as + adj + as." },
    { id: "q7", cat: "Grammar", type: "fillblank", prompt: "Children often ride bicycles in their free time. → Children often spend their free time ______________ (ride) bicycles.", accepted: ["riding"], correct: "riding", explanation: "V in free time → spend time V-ing." },
    { id: "q8", cat: "Reading", type: "truefalse", prompt: "Country life is considered safer for small children because there is less traffic.", correct: "True", explanation: "Bài đọc: 'there is less traffic, so it is safer for young children.'" },
    { id: "q9", cat: "Reading", type: "truefalse", prompt: "It is very easy to find different forms of entertainment in the countryside at night.", correct: "False", explanation: "Bài đọc nói ngược lại: giải trí khó tìm vào buổi tối." },
    { id: "q10", cat: "Reading", type: "mcq", prompt: "What is the main idea of the country-life passage?", options: { A: "A comparison of the pros and cons of country life and who it suits best.", B: "The disadvantages of living in the city.", C: "How to find entertainment in the countryside.", D: "The history of rural development." }, correct: "A", explanation: "Bài đọc so sánh ưu nhược điểm cuộc sống nông thôn." },
    { id: "q11", cat: "Writing", type: "fillblank", prompt: "Ronaldo plays better than anybody in the team. → No one in the team plays ______________ Ronaldo.", accepted: ["better than"], correct: "better than", explanation: "X + better than anybody → No one + better than X." },
    { id: "q12", cat: "Writing", type: "fillblank", prompt: "The local farmers welcomed the tourists very ______________ (generous).", accepted: ["generously"], correct: "generously", explanation: "generous (adj) → generously (adv)." },
    { id: "q13", cat: "Writing", type: "fillblank", prompt: "Nam is a more attractive story teller than Mai. → Nam tells stories ______________ than Mai.", accepted: ["more attractively"], correct: "more attractively", explanation: "Tính từ so sánh hơn → trạng từ so sánh hơn." },
    { id: "q14", cat: "Vocabulary", type: "mcq", prompt: "If your farm is far from the market, it is ______ away than the village shop.", options: { A: "farther", B: "father", C: "farer", D: "far" }, correct: "A", explanation: "far → farther (so sánh hơn bất quy tắc)." }
  ]
};
