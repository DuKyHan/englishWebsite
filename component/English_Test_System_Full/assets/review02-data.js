const REVIEW = {
  id: "test02",
  testFile: "test02.html",
  grade: "Grade 8 — Global Success",
  unit: "Unit 4: Ethnic groups of Viet Nam",
  title: "Knowledge Review — Unit 4, Practice Test 2",

  // ---------------------------------------------------------
  // PART 6 — VOCABULARY
  // ---------------------------------------------------------
  vocabulary: [
    { word:"ancestor", pos:"n", ipa:"/ˈænsestər/", meaning:"tổ tiên",
      example:"The Hung Temple Festival honors the sacred ancestors of all Vietnamese people.", exampleVi:"Lễ hội Đền Hùng tôn vinh các vị tổ tiên linh thiêng của toàn thể người Việt." },
    { word:"symbol", pos:"n", ipa:"/ˈsɪmbl/", meaning:"biểu tượng",
      example:"The Rong house is a great symbol of the Central Highlanders.", exampleVi:"Nhà Rông là một biểu tượng lớn của người Tây Nguyên." },
    { word:"stilt house", pos:"n", ipa:"/stɪlt haʊs/", meaning:"nhà sàn",
      example:"The Rong House is a large, beautifully decorated stilt house.", exampleVi:"Nhà Rông là một ngôi nhà sàn lớn, được trang trí đẹp mắt." },
    { word:"heritage", pos:"n", ipa:"/ˈherɪtɪdʒ/", meaning:"di sản",
      example:"The Space of Gong Culture is a heritage recognized by UNESCO.", exampleVi:"Không gian văn hoá Cồng Chiêng là một di sản được UNESCO công nhận." },
    { word:"folktale", pos:"n", ipa:"/ˈfəʊkteɪl/", meaning:"truyện dân gian",
      example:"Ancient culture is passed down through myths and folktales.", exampleVi:"Văn hoá cổ xưa được truyền lại qua các huyền thoại và truyện dân gian." },
    { word:"pride", pos:"n", ipa:"/praɪd/", meaning:"niềm tự hào",
      example:"The Rong House is a source of great pride for the whole village.", exampleVi:"Nhà Rông là nguồn tự hào lớn của cả ngôi làng." },
    { word:"diversity", pos:"n", ipa:"/daɪˈvɜːsəti/", meaning:"sự đa dạng",
      example:"Each ethnic group contributes to the cultural diversity of Viet Nam.", exampleVi:"Mỗi dân tộc góp phần vào sự đa dạng văn hoá của Việt Nam." },
    { word:"resiliency", pos:"n", ipa:"/rɪˈzɪliənsi/", meaning:"khả năng phục hồi (nhanh)",
      example:"Bamboo represents resiliency in Vietnamese culture.", exampleVi:"Tre đại diện cho khả năng phục hồi nhanh trong văn hoá Việt Nam." },
    { word:"engraved", pos:"adj", ipa:"/ɪnˈɡreɪvd/", meaning:"khắc sâu, in sâu (vào)",
      example:"Bamboo is engraved in Vietnamese culture and daily life.", exampleVi:"Tre đã in sâu vào văn hoá và đời sống hằng ngày của người Việt." },
    { word:"minority", pos:"n", ipa:"/maɪˈnɒrəti/", meaning:"dân tộc thiểu số; phần nhỏ hơn",
      example:"The government protects the rights of ethnic minorities.", exampleVi:"Chính phủ bảo vệ quyền lợi của các dân tộc thiểu số." },
    { word:"ethnologist", pos:"n", ipa:"/eθˈnɒlədʒɪst/", meaning:"nhà dân tộc học",
      example:"How long have you been an ethnologist?", exampleVi:"Bạn đã làm nhà dân tộc học được bao lâu rồi?" },
    { word:"nomad", pos:"n", ipa:"/ˈnəʊmæd/", meaning:"người du mục",
      example:"Cattle provide the nomads with dairy products, meat, and clothing.", exampleVi:"Gia súc cung cấp cho người du mục các sản phẩm từ sữa, thịt và quần áo." },
    { word:"majestic", pos:"adj", ipa:"/məˈdʒestɪk/", meaning:"hùng vĩ, uy nghi",
      example:"Look at the majestic Rong house!", exampleVi:"Hãy nhìn ngôi nhà Rông uy nghi kìa!" },
    { word:"flourishing", pos:"adj", ipa:"/ˈflʌrɪʃɪŋ/", meaning:"đang phát triển mạnh, thịnh vượng",
      example:"The Cham people once boasted a flourishing culture.", exampleVi:"Người Chăm từng có một nền văn hoá phát triển rực rỡ." },
    { word:"disappearance", pos:"n", ipa:"/ˌdɪsəˈpɪərəns/", meaning:"sự biến mất",
      example:"The local authorities are trying to prevent the disappearance of traditional crafts.", exampleVi:"Chính quyền địa phương đang cố ngăn chặn sự biến mất của các nghề thủ công truyền thống." },
    { word:"provide someone with something", pos:"phr.", ipa:"/prəˈvaɪd/", meaning:"cung cấp cho ai cái gì",
      example:"Cattle provide the nomads with dairy products.", exampleVi:"Gia súc cung cấp cho người du mục các sản phẩm từ sữa." }
  ],

  vocabPractice: {
    mcq: [
      { id:"vp1", prompt:"Choose the word that means 'niềm tự hào':",
        options:{A:"pride",B:"diversity",C:"resiliency",D:"minority"}, correct:"A",
        explanation:"<b>pride</b> (n) = niềm tự hào. Ví dụ: a source of great pride." },
      { id:"vp2", prompt:"'Cattle ______ the nomads with dairy products, meat, and clothing.'",
        options:{A:"provide",B:"prevent",C:"contribute",D:"boast"}, correct:"A",
        explanation:"provide sb with sth = cung cấp cho ai cái gì." },
      { id:"vp3", prompt:"A house built on stilts, used for community activities in the Central Highlands, is called a ______.",
        options:{A:"heritage site",B:"stilt house",C:"open-air market",D:"boarding school"}, correct:"B",
        explanation:"<b>stilt house</b> (nhà sàn) — Rong House là một loại nhà sàn lớn." },
      { id:"vp4", prompt:"Which word best fits: 'Bamboo represents ______ — the ability to recover quickly from difficulties.'",
        options:{A:"resiliency",B:"minority",C:"pride",D:"diversity"}, correct:"A",
        explanation:"<b>resiliency</b> (n) = khả năng phục hồi nhanh." },
      { id:"vp5", prompt:"'The Cham people once boasted a ______ culture early in history' means their culture was:",
        options:{A:"disappearing",B:"flourishing",C:"minor",D:"engraved"}, correct:"B",
        explanation:"<b>flourishing</b> (adj) = đang phát triển mạnh, thịnh vượng." },
      { id:"vp6", prompt:"A person who studies different ethnic groups and cultures is called a/an ______.",
        options:{A:"nomad",B:"tourist",C:"ethnologist",D:"ancestor"}, correct:"C",
        explanation:"<b>ethnologist</b> (n) = nhà dân tộc học." }
    ],
    fillblank: [
      { id:"vf1", prompt:"The Hung Temple Festival honors the sacred ______________ (tổ tiên) of Vietnamese people.", accepted:["ancestors","ancestor"], correct:"ancestors",
        explanation:"<b>ancestor</b> (n) = tổ tiên." },
      { id:"vf2", prompt:"The Rong House is a great ______________ (biểu tượng) of the Central Highlanders.", accepted:["symbol"], correct:"symbol",
        explanation:"<b>symbol</b> (n) = biểu tượng." },
      { id:"vf3", prompt:"Bamboo is ______________ (khắc sâu) in Vietnamese culture and daily life.", accepted:["engraved"], correct:"engraved",
        explanation:"<b>engraved</b> (adj/v-ed) = khắc sâu, in sâu vào." },
      { id:"vf4", prompt:"Ethnic ______________ (dân tộc thiểu số) in Viet Nam each have their own unique traditions.", accepted:["minorities","minority"], correct:"minorities",
        explanation:"<b>minority</b> (n, số nhiều: minorities) = dân tộc thiểu số." },
      { id:"vf5", prompt:"The local authorities want to prevent the ______________ (sự biến mất) of traditional crafts.", accepted:["disappearance"], correct:"disappearance",
        explanation:"<b>disappearance</b> (n) = sự biến mất." },
      { id:"vf6", prompt:"Each ethnic group contributes to the cultural ______________ (sự đa dạng) of Viet Nam.", accepted:["diversity"], correct:"diversity",
        explanation:"<b>diversity</b> (n) = sự đa dạng." }
    ],
    matching: {
      left: ["ancestor","symbol","pride","flourishing","resiliency","nomad"],
      right: ["tổ tiên","biểu tượng","niềm tự hào","đang phát triển mạnh","khả năng phục hồi nhanh","người du mục"],
      correctMap: [0,1,2,3,4,5]
    },
    chooseWord: [
      { id:"cw1", prompt:"'Nick: How often do the ethnic groups hold this special festival?' Mary: '______ month, as far as I know.'",
        options:{A:"Many",B:"All",C:"Each of",D:"Every"}, correct:"D",
        explanation:"'Every' + danh từ số ít diễn tả tần suất → Every month." },
      { id:"cw2", prompt:"'Most ancient customs are passed down ______ myths and folktales.'",
        options:{A:"at",B:"over",C:"with",D:"through"}, correct:"D",
        explanation:"passed down through + phương tiện truyền tải." },
      { id:"cw3", prompt:"'It is held ______ Phu Tho province every year.'",
        options:{A:"in",B:"on",C:"under",D:"at"}, correct:"A",
        explanation:"'in' + tên tỉnh/vùng đất rộng." }
    ],
    wordMeaning: [
      { id:"wm1", prompt:"What does 'ethnologist' mean?",
        options:{A:"nhà dân tộc học",B:"hướng dẫn viên du lịch",C:"nông dân",D:"nghệ nhân"}, correct:"A",
        explanation:"ethnologist (n) = nhà dân tộc học, người nghiên cứu về các dân tộc và văn hoá." },
      { id:"wm2", prompt:"What does 'majestic' mean?",
        options:{A:"nhỏ bé",B:"hùng vĩ, uy nghi",C:"cổ xưa",D:"đơn giản"}, correct:"B",
        explanation:"majestic (adj) = hùng vĩ, uy nghi, gây ấn tượng mạnh." },
      { id:"wm3", prompt:"What does 'nomad' mean?",
        options:{A:"người du mục",B:"người thợ săn",C:"người nông dân",D:"người thợ thủ công"}, correct:"A",
        explanation:"nomad (n) = người du mục, không sống cố định một chỗ." }
    ],
    wordForm: [
      { id:"wf1", prompt:"The Rong House shows the (HISTORY) ______________ development of Central Highlands architecture.", accepted:["historical"], correct:"historical",
        explanation:"history (n) → <b>historical</b> (adj, +ical)." },
      { id:"wf2", prompt:"Ethnic minorities have (SUCCESS) ______________ preserved many ancient customs.", accepted:["successfully"], correct:"successfully",
        explanation:"success (n) → successful (adj) → <b>successfully</b> (adv, +ly)." },
      { id:"wf3", prompt:"Losing traditional crafts would be a great (APPEAR) ______________ for Vietnamese culture.", accepted:["disappearance"], correct:"disappearance",
        explanation:"appear (v) → disappear (v, dis-) → <b>disappearance</b> (n, +ance)." }
    ]
  },

  // ---------------------------------------------------------
  // PART 8 & 9 — GRAMMAR REVIEW + PRACTICE
  // ---------------------------------------------------------
  grammar: [
    {
      id:"g1", name:"Every / Each of / All (định từ chỉ số lượng)",
      usage:"<b>Every</b> + danh từ số ít = mỗi (một cách chung chung, nhấn mạnh từng cái một trong toàn bộ). <b>Each of</b> + the/these/possessive + danh từ số nhiều = mỗi (một) trong số... <b>All</b> + danh từ số nhiều (không mạo từ) hoặc <b>all of</b> + the + danh từ số nhiều = tất cả.",
      formulas:[
        "Every + N (số ít) + V (số ít) — Every month, ...",
        "Each of + the/these/possessive + N (số nhiều) + V (số ít) — Each of the villages has its own festival.",
        "All (of) + the + N (số nhiều) + V (số nhiều) — All (of) the villages have their own festivals."
      ],
      signals:["every","each of","all (of)","month","day","group","village"],
      examples:[
        {en:"The ethnic groups hold this special festival every month.", vi:"Các dân tộc tổ chức lễ hội đặc biệt này mỗi tháng."},
        {en:"Each of the villages has its own Rong House.", vi:"Mỗi ngôi làng (trong số các làng) đều có nhà Rông riêng."},
        {en:"All the ethnic groups in Viet Nam have unique traditions.", vi:"Tất cả các dân tộc ở Việt Nam đều có truyền thống riêng."}
      ],
      mistakes:[
        {wrong:"Each of village has its own festival.", right:"Each of the villages has its own festival."},
        {wrong:"Every villages hold a festival.", right:"Every village holds a festival."}
      ],
      practice:{
        level1:[
          { id:"g1l1a", type:"mcq", prompt:"______ month, the villagers hold a small festival.", options:{A:"Each of",B:"All",C:"Every",D:"Many"}, correct:"C",
            explanation:"'Every' + danh từ số ít (month)." },
          { id:"g1l1b", type:"mcq", prompt:"______ the villages in this area have a Rong House.", options:{A:"Every",B:"All",C:"Each of",D:"Each"}, correct:"B",
            explanation:"'All' + danh từ số nhiều (villages)." }
        ],
        level2:[
          { id:"g1l2a", type:"mcq", prompt:"______ of the ethnic groups has its own unique costume.", options:{A:"All",B:"Every",C:"Each",D:"Many"}, correct:"C",
            explanation:"'Each of' + the + danh từ số nhiều + động từ số ít (has)." },
          { id:"g1l2b", type:"fillblank", prompt:"Rewrite with the same meaning: 'Every ethnic group has its own culture.' → ______________ the ethnic groups has its own culture.", accepted:["each of"], correct:"Each of",
            explanation:"'Every + N số ít' và 'Each of + the + N số nhiều' đều diễn tả 'mỗi'." }
        ],
        level3:[
          { id:"g1l3a", type:"fillblank", prompt:"Find and correct the mistake: 'Each of village has its own festival.' → Each of ______________ village(s) has its own festival.", accepted:["the"], correct:"the",
            explanation:"'Each of' luôn cần 'the/these/possessive' + danh từ số nhiều: Each of THE villages." }
        ]
      }
    },
    {
      id:"g2", name:"The reason why + mệnh đề (mệnh đề quan hệ với 'why')",
      usage:"Dùng đại từ quan hệ <b>why</b> để giải thích lý do, luôn đi sau danh từ 'reason'.",
      formulas:[
        "S + V + the reason why + S + V (mệnh đề giải thích lý do).",
        "Có thể lược bỏ 'why' hoặc 'the reason': the reason (why) + S + V..."
      ],
      signals:["reason","why"],
      examples:[
        {en:"Do you know the reason why the Hung Temple Festival is so famous?", vi:"Bạn có biết lý do vì sao lễ hội Đền Hùng nổi tiếng đến vậy không?"},
        {en:"That is the reason why bamboo is used for so many purposes.", vi:"Đó là lý do vì sao tre được dùng cho rất nhiều mục đích."}
      ],
      mistakes:[
        {wrong:"The reason that why he left is unknown.", right:"The reason why he left is unknown."},
        {wrong:"Do you know the reason where it is famous?", right:"Do you know the reason why it is famous?"}
      ],
      practice:{
        level1:[
          { id:"g2l1a", type:"mcq", prompt:"Nobody knows the reason ______ the Rong House is built so tall.", options:{A:"where",B:"why",C:"what",D:"who"}, correct:"B",
            explanation:"Sau 'reason' dùng 'why'." }
        ],
        level2:[
          { id:"g2l2a", type:"fillblank", prompt:"Do you know the reason ______________ bamboo is so important in Vietnamese culture?", accepted:["why"], correct:"why",
            explanation:"the reason + why + mệnh đề." }
        ],
        level3:[
          { id:"g2l3a", type:"fillblank", prompt:"Combine: 'I don't know the reason. + He moved to the Central Highlands for that reason.' → I don't know the reason ______________ he moved to the Central Highlands.", accepted:["why"], correct:"why",
            explanation:"Ghép 2 câu bằng 'the reason why'." }
        ]
      }
    },
    {
      id:"g3", name:"So sánh kép: The + so sánh hơn..., the + so sánh hơn...",
      usage:"Diễn tả hai sự việc thay đổi cùng lúc, cái này tăng/giảm thì cái kia cũng tăng/giảm theo.",
      formulas:[
        "The + comparative + S + V, the + comparative + S + V.",
        "Ví dụ: The bigger the house, the wealthier the village is."
      ],
      signals:["the more...the more","the bigger...the more","the + so sánh hơn, the + so sánh hơn"],
      examples:[
        {en:"The bigger the house, the wealthier the village is.", vi:"Nhà càng to, làng càng giàu có."},
        {en:"The more festivals a region has, the richer its culture is.", vi:"Một vùng càng có nhiều lễ hội, văn hoá của vùng đó càng phong phú."}
      ],
      mistakes:[
        {wrong:"The house is bigger, the village is wealthier.", right:"The bigger the house, the wealthier the village is."},
        {wrong:"The more big, the more wealthy.", right:"The bigger, the wealthier."}
      ],
      practice:{
        level1:[
          { id:"g3l1a", type:"mcq", prompt:"______ the festival, the more visitors it attracts.", options:{A:"Bigger",B:"The bigger",C:"More big",D:"The more big"}, correct:"B",
            explanation:"Cấu trúc: The + so sánh hơn + S + V, the + so sánh hơn + S + V." }
        ],
        level2:[
          { id:"g3l2a", type:"fillblank", prompt:"Rewrite using 'the...the...': 'If a costume is more colorful, it looks more beautiful.' → The more colorful a costume is, ______________ it looks.", accepted:["the more beautiful"], correct:"the more beautiful",
            explanation:"The + so sánh hơn (more colorful), the + so sánh hơn (more beautiful)." }
        ],
        level3:[
          { id:"g3l3a", type:"fillblank", prompt:"Rewrite: 'As the Rong House gets bigger, the village becomes wealthier.' → The bigger the Rong House gets, ______________.", accepted:["the wealthier the village becomes"], correct:"the wealthier the village becomes",
            explanation:"Đảo hai vế thành cấu trúc song song The...the..." }
        ]
      }
    },
    {
      id:"g4", name:"Whose is...? ⇄ Who does... belong to?",
      usage:"Hai cách hỏi về CHỦ SỞ HỮU của một vật.",
      formulas:[
        "Whose + is/are + N?",
        "Who + does/do + N + belong to?"
      ],
      signals:["whose","belong to"],
      examples:[
        {en:"Whose is this beautiful traditional costume?", vi:"Bộ trang phục truyền thống đẹp này là của ai?"},
        {en:"Who does this beautiful traditional costume belong to?", vi:"Bộ trang phục truyền thống đẹp này thuộc về ai?"}
      ],
      mistakes:[
        {wrong:"Whose does this costume belong to?", right:"Who does this costume belong to?"},
        {wrong:"Whose this costume is?", right:"Whose is this costume?"}
      ],
      practice:{
        level1:[
          { id:"g4l1a", type:"mcq", prompt:"______ is this handmade craft wallet?", options:{A:"Who",B:"Whose",C:"Whom",D:"What"}, correct:"B",
            explanation:"Hỏi về chủ sở hữu, có 'is' theo sau → Whose." }
        ],
        level2:[
          { id:"g4l2a", type:"fillblank", prompt:"Rewrite: 'Whose is this national costume?' → Who does this national costume ______________?", accepted:["belong to"], correct:"belong to",
            explanation:"Whose is + N ⇄ Who does + N + belong to?" }
        ],
        level3:[
          { id:"g4l3a", type:"fillblank", prompt:"Rewrite: 'Who does this traditional musical instrument belong to?' → ______________ is this traditional musical instrument?", accepted:["whose"], correct:"Whose",
            explanation:"Who does...belong to? ⇄ Whose is...?" }
        ]
      }
    },
    {
      id:"g5", name:"It is + time + since... ⇄ S + haven't/hasn't + V(pp) + for + time",
      usage:"Diễn tả một việc đã lâu không xảy ra, tính đến hiện tại.",
      formulas:[
        "It is/has been + khoảng thời gian + since + S + last + V (quá khứ đơn).",
        "S + haven't/hasn't + V(p.p) + for + khoảng thời gian."
      ],
      signals:["since","for","last","haven't/hasn't"],
      examples:[
        {en:"It is a long time since they last attended a festival in the Central Highlands.", vi:"Đã lâu rồi họ chưa tham dự lễ hội nào ở Tây Nguyên."},
        {en:"They haven't attended a festival in the Central Highlands for a long time.", vi:"Họ đã không tham dự lễ hội nào ở Tây Nguyên trong một thời gian dài."}
      ],
      mistakes:[
        {wrong:"They haven't attend a festival for a long time.", right:"They haven't attended a festival for a long time."},
        {wrong:"It is a long time since they haven't attended.", right:"It is a long time since they last attended."}
      ],
      practice:{
        level1:[
          { id:"g5l1a", type:"mcq", prompt:"It is two years ______ they last visited the Central Highlands.", options:{A:"for",B:"since",C:"ago",D:"before"}, correct:"B",
            explanation:"'It is + time + since + S + last + V(qk)'." }
        ],
        level2:[
          { id:"g5l2a", type:"fillblank", prompt:"Rewrite: 'It is a long time since he last wore this costume.' → He ______________ this costume for a long time.", accepted:["hasnt worn"], correct:"hasn't worn",
            explanation:"It is + time + since + S + last + V(qk) ⇄ S + haven't/hasn't + V(p.p) + for + time." }
        ],
        level3:[
          { id:"g5l3a", type:"fillblank", prompt:"Rewrite: 'They haven't held this festival for three years.' → It is three years ______________ they last held this festival.", accepted:["since"], correct:"since",
            explanation:"S + haven't + V(pp) + for + time ⇄ It is + time + since + S + last + V(qk)." }
        ]
      }
    }
  ],

  // ---------------------------------------------------------
  // PART 10 — READING PRACTICE
  // ---------------------------------------------------------
  reading: {
    passage: `Bamboo is <mark data-w="engraved">engraved</mark> in Vietnamese culture and daily life, providing protection, and representing <mark data-w="resiliency">resiliency</mark>. Bamboo can be <mark data-w="manipulated">manipulated</mark> in any shape or form to assist in the simplest or most complex of functions. Here in Viet Nam, and especially in the countryside, bamboo is used for everything — from chopsticks, to chairs, to agricultural tools, to roofs, to instruments and to home decorations.<br><br>Bamboo is embedded even in Vietnamese dance culture! A series of bamboo sticks are set up in a line, with people holding them in place on either side. Dancers move in and out of the bamboo sticks, trying to time their dancing so as not to get caught between the bamboo sticks. Performers typically dance hand in hand, slowly making their way sideways along the bamboo line and even the best of dancers always tend to get stuck a few times, resulting in bunches of <mark data-w="giggles">giggles</mark> and loads of smiles.`,
    vocabInContext: {
      "engraved": "khắc sâu, in sâu vào",
      "resiliency": "khả năng phục hồi nhanh",
      "manipulated": "biến đổi, uốn nắn (thành hình dạng khác)",
      "giggles": "những tiếng cười khúc khích"
    },
    translation: `Tre đã in sâu vào văn hoá và đời sống hằng ngày của người Việt Nam, mang lại sự bảo vệ và thể hiện khả năng phục hồi nhanh chóng. Tre có thể được uốn nắn thành bất kỳ hình dạng nào để phục vụ cho những công việc đơn giản nhất cho đến phức tạp nhất. Ở Việt Nam, đặc biệt là ở vùng nông thôn, tre được dùng cho hầu như mọi thứ — từ đôi đũa, chiếc ghế, dụng cụ nông nghiệp, mái nhà, cho đến nhạc cụ và đồ trang trí trong nhà.<br><br>Tre thậm chí còn gắn liền với văn hoá múa của người Việt! Một hàng gậy tre được xếp thành dãy, có người giữ cố định ở hai bên. Các vũ công di chuyển vào ra giữa những cây gậy tre, cố gắng canh đúng nhịp điệu để không bị kẹt giữa các gậy tre. Người biểu diễn thường nắm tay nhau, di chuyển chầm chậm theo chiều ngang dọc theo hàng gậy tre, và ngay cả những vũ công giỏi nhất cũng thường xuyên bị vướng vài lần, tạo nên những tràng cười khúc khích và nụ cười rạng rỡ.`,
    practice: [
      { id:"r1", type:"truefalse", prompt:"Bamboo is only used to make simple things in Viet Nam.", correct:"False",
        explanation:"Bài đọc: bamboo được dùng cho cả việc đơn giản lẫn phức tạp." },
      { id:"r2", type:"truefalse", prompt:"In the traditional dance, people hold bamboo sticks on both sides of a line.", correct:"True",
        explanation:"Bài đọc: 'holding them in place on either side'." },
      { id:"r3", type:"truefalse", prompt:"Experienced dancers never get stuck between the bamboo sticks.", correct:"False",
        explanation:"Bài đọc: 'even the best of dancers always tend to get stuck a few times'." },
      { id:"r4", type:"truefalse", prompt:"Bamboo represents the ability to recover quickly from difficulties.", correct:"True",
        explanation:"Bài đọc: bamboo 'representing resiliency'." },
      { id:"r5", type:"mcq", prompt:"What is the main idea of the passage?",
        options:{A:"The importance of bamboo in Vietnamese culture, daily life, and traditional dance.",
                 B:"The way people in the Vietnamese countryside use bamboo to build houses.",
                 C:"The historical reasons why bamboo became popular in Viet Nam.",
                 D:"The rules of a traditional Vietnamese dance using bamboo sticks."}, correct:"A",
        explanation:"Bài đọc nói về vai trò của tre trong văn hoá, đời sống và múa truyền thống." },
      { id:"r6", type:"mcq", prompt:"Which is NOT true according to the passage?",
        options:{A:"Dancers usually hold the bamboo sticks while moving sideways.",
                 B:"Bamboo can be shaped in many ways to serve different purposes.",
                 C:"People use bamboo to make furniture and musical instruments.",
                 D:"Getting stuck during the bamboo dance creates a joyful atmosphere."}, correct:"A",
        explanation:"Người GIỮ gậy khác với các vũ công — vũ công chỉ di chuyển vào/ra và nhảy, không cầm gậy." },
      { id:"r7", type:"mcq", prompt:"(Wh-question) Why do dancers sometimes get stuck during the bamboo dance?",
        options:{A:"Because the bamboo sticks are too heavy.",
                 B:"Because they must time their dance so as not to get caught between the moving sticks.",
                 C:"Because the music is too fast for everyone.",
                 D:"Because they are not allowed to hold hands."}, correct:"B",
        explanation:"Bài đọc: 'trying to time their dancing so as not to get caught between the bamboo sticks'." },
      { id:"r8", type:"mcq", prompt:"(Find information) According to the passage, bamboo is used to make all of the following EXCEPT:",
        options:{A:"chopsticks and chairs",B:"agricultural tools and roofs",C:"musical instruments",D:"cars and motorbikes"}, correct:"D",
        explanation:"Bài đọc liệt kê: chopsticks, chairs, agricultural tools, roofs, instruments, home decorations — không có 'cars and motorbikes'." },
      { id:"r9", type:"mcq", prompt:"(Vocabulary in context) In the passage, 'embedded' is closest in meaning to:",
        options:{A:"removed",B:"deeply fixed or rooted in something",C:"expensive",D:"forgotten"}, correct:"B",
        explanation:"'embedded' = gắn liền, in sâu vào (một phần không thể tách rời)." }
    ]
  },

  // ---------------------------------------------------------
  // PART 11 — TRANSLATION PRACTICE
  // ---------------------------------------------------------
  translation: [
    { id:"t1", en:"The Rong House is a symbol of the culture of Central Highlanders.",
      suggested:"Nhà Rông là một biểu tượng của văn hoá người Tây Nguyên.",
      notes:"Từ vựng: <i>symbol</i> (biểu tượng), <i>Central Highlanders</i> (người Tây Nguyên)." },
    { id:"t2", en:"Bamboo is engraved in Vietnamese culture and daily life.",
      suggested:"Tre đã in sâu vào văn hoá và đời sống hằng ngày của người Việt Nam.",
      notes:"Từ vựng: <i>engraved</i> (khắc sâu, in sâu vào) — dịch thoát nghĩa tự nhiên hơn là 'được khắc'." },
    { id:"t3", en:"Each ethnic group has its own culture, which contributes to the incredible cultural diversity of Viet Nam.",
      suggested:"Mỗi dân tộc có một nền văn hoá riêng, góp phần tạo nên sự đa dạng văn hoá đáng kinh ngạc của Việt Nam.",
      notes:"Cấu trúc: mệnh đề quan hệ 'which contributes to...' bổ nghĩa cho cả vế trước." },
    { id:"t4", en:"The bigger the house, the wealthier the village is.",
      suggested:"Nhà càng to, làng càng giàu có.",
      notes:"Cấu trúc so sánh kép 'the...the...' dịch thành 'càng...càng...' trong tiếng Việt." },
    { id:"t5", en:"It is a long time since they last attended a festival in the Central Highlands.",
      suggested:"Đã lâu rồi họ chưa tham dự một lễ hội nào ở Tây Nguyên.",
      notes:"Cấu trúc 'It is + time + since + S + last + V' dịch tự nhiên là 'Đã (bao lâu) rồi... chưa...'." }
  ],

  // ---------------------------------------------------------
  // PART 12 — SENTENCE TRANSFORMATION PRACTICE
  // ---------------------------------------------------------
  transformation: [
    {
      id:"tr1", name:"How long have you been...? → When did you start working as/become...?",
      formula:"How long + have/has + S + been + N/Adj?  →  When + did + S + start working as/become + N  (hoặc + start being/become + Adj)?",
      example:{ before:"How long have you been an ethnologist?", after:"When did you start working as an ethnologist?" },
      practice:[
        { id:"tr1p1", type:"fillblank", prompt:"How long has she been a tour guide? → When did she ______________ a tour guide?", accepted:["start working as","become"], correct:"start working as / become",
          explanation:"When did + S + start working as/become + N (nghề nghiệp)?" },
        { id:"tr1p2", type:"fillblank", prompt:"How long have they been interested in ethnic culture? → When did they ______________ interested in ethnic culture?", accepted:["become","start being"], correct:"become",
          explanation:"When did + S + become/start being + adj?" }
      ]
    },
    {
      id:"tr2", name:"Who does...belong to? ⇄ Whose is...?",
      formula:"Who + does/do + N + belong to?  ⇄  Whose + is/are + N?",
      example:{ before:"Who does this beautiful traditional costume belong to?", after:"Whose is this beautiful traditional costume?" },
      practice:[
        { id:"tr2p1", type:"fillblank", prompt:"Who does this handmade wallet belong to? → ______________ is this handmade wallet?", accepted:["whose"], correct:"Whose",
          explanation:"Who does...belong to? ⇄ Whose is...?" },
        { id:"tr2p2", type:"fillblank", prompt:"Whose is this Gong instrument? → Who does this Gong instrument ______________?", accepted:["belong to"], correct:"belong to",
          explanation:"Whose is...? ⇄ Who does...belong to?" }
      ]
    },
    {
      id:"tr3", name:"S + V (chủ động) → S(mới) + are/is where + S + V / are/is + V-ed by + O",
      formula:"Many + N + V + in + place  →  Place + is/are + where + N + V  /  Place + is/are + V-ed by + N",
      example:{ before:"Many ethnic groups live in remote areas of Viet Nam.", after:"Remote areas of Viet Nam are where many ethnic groups live." },
      practice:[
        { id:"tr3p1", type:"fillblank", prompt:"Many H'Mong families live in the mountains of Ha Giang. → The mountains of Ha Giang are ______________ many H'Mong families live.", accepted:["where"], correct:"where",
          explanation:"Place + is/are + where + S + V." },
        { id:"tr3p2", type:"fillblank", prompt:"Several ethnic groups inhabit the Central Highlands. → The Central Highlands ______________ by several ethnic groups.", accepted:["are inhabited"], correct:"are inhabited",
          explanation:"Đổi sang câu bị động: Place + is/are + inhabited + by + N." }
      ]
    },
    {
      id:"tr4", name:"It is + time + since... ⇄ haven't/hasn't + V(pp) + for...",
      formula:"It is + time + since + S + last + V(qk)  ⇄  S + haven't/hasn't + V(p.p) + for + time",
      example:{ before:"It is a long time since they last attended a festival in the Central Highlands.", after:"They haven't attended a festival in the Central Highlands for a long time." },
      practice:[
        { id:"tr4p1", type:"fillblank", prompt:"It is three years since he last visited the Rong House. → He ______________ the Rong House for three years.", accepted:["hasnt visited"], correct:"hasn't visited",
          explanation:"S + hasn't + V(p.p) + for + time." },
        { id:"tr4p2", type:"fillblank", prompt:"They haven't worn this costume for a decade. → It is a decade ______________ they last wore this costume.", accepted:["since"], correct:"since",
          explanation:"It is + time + since + S + last + V(qk)." }
      ]
    }
  ],

  // ---------------------------------------------------------
  // PART 13 — QUICK REVIEW (mini test, ~14 questions)
  // ---------------------------------------------------------
  quickReview: [
    { id:"q1", cat:"Vocabulary", type:"mcq", prompt:"'Pride' means:", options:{A:"niềm tự hào",B:"sự biến mất",C:"người du mục",D:"khả năng phục hồi"}, correct:"A",
      explanation:"pride (n) = niềm tự hào." },
    { id:"q2", cat:"Vocabulary", type:"mcq", prompt:"'Cattle ______ the nomads with dairy products.'", options:{A:"provide",B:"prevent",C:"boast",D:"contribute"}, correct:"A",
      explanation:"provide sb with sth." },
    { id:"q3", cat:"Vocabulary", type:"fillblank", prompt:"A house built on stilts is called a ______________ house.", accepted:["stilt"], correct:"stilt",
      explanation:"stilt house = nhà sàn." },
    { id:"q4", cat:"Vocabulary", type:"mcq", prompt:"'Flourishing' most likely describes a culture that is:", options:{A:"disappearing",B:"declining",C:"developing strongly",D:"unknown"}, correct:"C",
      explanation:"flourishing (adj) = đang phát triển mạnh." },
    { id:"q5", cat:"Grammar", type:"mcq", prompt:"______ month, the villagers hold a small festival.", options:{A:"Each of",B:"All",C:"Every",D:"Many"}, correct:"C",
      explanation:"Every + danh từ số ít." },
    { id:"q6", cat:"Grammar", type:"mcq", prompt:"Do you know the reason ______ this festival is so famous?", options:{A:"where",B:"why",C:"what",D:"when"}, correct:"B",
      explanation:"the reason why + mệnh đề." },
    { id:"q7", cat:"Grammar", type:"mcq", prompt:"Choose the correctly rewritten sentence: 'Who does this costume belong to?'",
      options:{A:"Whose is this costume?",B:"Whose does this costume belong?",C:"Who whose this costume?",D:"Whose this costume is?"}, correct:"A",
      explanation:"Who does...belong to? ⇄ Whose is...?" },
    { id:"q8", cat:"Grammar", type:"mcq", prompt:"Choose the correctly rewritten sentence: 'It is a long time since they last attended a festival.'",
      options:{A:"They haven't attended a festival for a long time.",B:"They didn't attend a festival for a long time.",C:"They haven't attend a festival for a long time.",D:"They don't attend a festival since a long time."}, correct:"A",
      explanation:"S + haven't + V(p.p) + for + time." },
    { id:"q9", cat:"Reading", type:"truefalse", prompt:"(Passage: bamboo) Bamboo is only used for simple things in Viet Nam.", correct:"False",
      explanation:"Bamboo dùng được cho cả việc đơn giản và phức tạp." },
    { id:"q10", cat:"Reading", type:"mcq", prompt:"Why do dancers sometimes get stuck in the bamboo dance?", options:{A:"The sticks are too heavy.",B:"They must time their steps carefully between moving sticks.",C:"The music is too fast.",D:"They are blindfolded."}, correct:"B",
      explanation:"Bài đọc: cần canh đúng nhịp để không bị kẹt giữa các gậy tre." },
    { id:"q11", cat:"Reading", type:"mcq", prompt:"What does bamboo represent, according to the passage?", options:{A:"Wealth and luxury",B:"Protection and resiliency",C:"Modern technology",D:"Foreign influence"}, correct:"B",
      explanation:"Bài đọc: 'providing protection, and representing resiliency'." },
    { id:"q12", cat:"Writing", type:"mcq", prompt:"Choose the best Vietnamese translation for: 'The bigger the house, the wealthier the village is.'",
      options:{A:"Nhà càng to, làng càng giàu có.",B:"Nhà to thì làng nghèo.",C:"Làng giàu thì nhà nhỏ.",D:"Nhà và làng không liên quan gì đến nhau."}, correct:"A",
      explanation:"Cấu trúc so sánh kép 'the...the...' = 'càng...càng...'." },
    { id:"q13", cat:"Writing", type:"mcq", prompt:"Choose the correct question for: 'Who does this beautiful traditional costume belong to?'",
      options:{A:"Whose is this beautiful traditional costume?",B:"Whose this costume belongs?",C:"Who whose is this costume?",D:"Belong to whose is this costume?"}, correct:"A",
      explanation:"Who does...belong to? ⇄ Whose is...?" },
    { id:"q14", cat:"Writing", type:"fillblank", prompt:"Rewrite: 'Many ethnic groups live in remote areas.' → Remote areas are ______________ many ethnic groups live.", accepted:["where"], correct:"where",
      explanation:"Place + is/are + where + S + V." }
  ]
};
