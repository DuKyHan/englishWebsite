const REVIEW = {
  id: "test01",
  testFile: "test01.html",
  grade: "Grade 8 — Global Success",
  unit: "Unit 4: Ethnic groups of Viet Nam",
  title: "Knowledge Review — Unit 4, Practice Test 1",

  // ---------------------------------------------------------
  // PART 6 — VOCABULARY
  // ---------------------------------------------------------
  vocabulary: [
    { word:"ethnic group", pos:"n", ipa:"/ˈeθnɪk ɡruːp/", meaning:"nhóm dân tộc",
      example:"Viet Nam has 54 ethnic groups.", exampleVi:"Việt Nam có 54 dân tộc." },
    { word:"ethnic minority", pos:"n", ipa:"/ˈeθnɪk maɪˈnɒrəti/", meaning:"dân tộc thiểu số",
      example:"The Tay are the largest ethnic minority in Viet Nam.", exampleVi:"Người Tày là dân tộc thiểu số đông nhất ở Việt Nam." },
    { word:"heritage", pos:"n", ipa:"/ˈherɪtɪdʒ/", meaning:"di sản",
      example:"My Son Sanctuary is a world heritage site.", exampleVi:"Thánh địa Mỹ Sơn là di sản thế giới." },
    { word:"costume", pos:"n", ipa:"/ˈkɒstjuːm/", meaning:"trang phục (truyền thống)",
      example:"She wears a traditional national costume for the festival.", exampleVi:"Cô ấy mặc trang phục dân tộc truyền thống trong lễ hội." },
    { word:"terraced field", pos:"n", ipa:"/ˈterəst fiːld/", meaning:"ruộng bậc thang",
      example:"The terraced fields in Sa Pa are very beautiful.", exampleVi:"Những ruộng bậc thang ở Sa Pa rất đẹp." },
    { word:"mountainous", pos:"adj", ipa:"/ˈmaʊntənəs/", meaning:"có nhiều núi, thuộc miền núi",
      example:"They live in a mountainous area.", exampleVi:"Họ sống ở một vùng núi." },
    { word:"herd", pos:"v", ipa:"/hɜːd/", meaning:"chăn, lùa (gia súc)",
      example:"The boy is herding buffaloes in the field.", exampleVi:"Cậu bé đang chăn trâu ngoài đồng." },
    { word:"boarding school", pos:"n", ipa:"/ˈbɔːdɪŋ skuːl/", meaning:"trường nội trú",
      example:"Many ethnic minority students study at boarding schools.", exampleVi:"Nhiều học sinh dân tộc thiểu số học ở trường nội trú." },
    { word:"open-air market", pos:"n", ipa:"/ˈəʊpən eə ˈmɑːkɪt/", meaning:"chợ phiên, chợ ngoài trời",
      example:"We visited an open-air market in Ha Giang.", exampleVi:"Chúng tôi đã đến thăm một phiên chợ ở Hà Giang." },
    { word:"floating market", pos:"n", ipa:"/ˈfləʊtɪŋ ˈmɑːkɪt/", meaning:"chợ nổi",
      example:"Floating markets are common in the Mekong Delta.", exampleVi:"Chợ nổi phổ biến ở đồng bằng sông Cửu Long." },
    { word:"diversity", pos:"n", ipa:"/daɪˈvɜːsəti/", meaning:"sự đa dạng",
      example:"Cultural diversity makes Viet Nam special.", exampleVi:"Sự đa dạng văn hoá khiến Việt Nam trở nên đặc biệt." },
    { word:"account for", pos:"phr.v", ipa:"/əˈkaʊnt fɔː/", meaning:"chiếm (tỉ lệ, phần trăm)",
      example:"The Kinh people account for 87% of the population.", exampleVi:"Người Kinh chiếm 87% dân số." },
    { word:"inhabit", pos:"v", ipa:"/ɪnˈhæbɪt/", meaning:"sinh sống, cư trú tại",
      example:"Ethnic minorities inhabit the mountain areas.", exampleVi:"Các dân tộc thiểu số sinh sống ở vùng núi." },
    { word:"gathering", pos:"n", ipa:"/ˈɡæðərɪŋ/", meaning:"cuộc tụ họp",
      example:"The market is a social gathering point.", exampleVi:"Chợ là nơi tụ họp của cộng đồng." },
    { word:"distinguish", pos:"v", ipa:"/dɪˈstɪŋɡwɪʃ/", meaning:"phân biệt",
      example:"You can distinguish ethnic groups by their costumes.", exampleVi:"Bạn có thể phân biệt các dân tộc qua trang phục của họ." },
    { word:"impressive", pos:"adj", ipa:"/ɪmˈpresɪv/", meaning:"gây ấn tượng, ấn tượng",
      example:"The H'Mong make impressive clothing.", exampleVi:"Người H'Mông làm ra những bộ trang phục ấn tượng." },
    { word:"surprisingly", pos:"adv", ipa:"/səˈpraɪzɪŋli/", meaning:"đáng ngạc nhiên là",
      example:"Surprisingly, they still keep their old customs.", exampleVi:"Đáng ngạc nhiên là họ vẫn giữ những phong tục cũ." },
    { word:"craftsman", pos:"n (pl. craftsmen)", ipa:"/ˈkrɑːftsmən/", meaning:"thợ thủ công",
      example:"The market is a trading place for local craftsmen.", exampleVi:"Chợ là nơi buôn bán của các thợ thủ công địa phương." }
  ],

  // Vocabulary practice --------------------------------------
  vocabPractice: {
    mcq: [
      { id:"vp1", prompt:"Choose the word that means 'sự đa dạng':",
        options:{A:"heritage",B:"diversity",C:"gathering",D:"costume"}, correct:"B",
        explanation:"<b>Diversity</b> (n) = sự đa dạng. Ví dụ: Cultural diversity makes Viet Nam special." },
      { id:"vp2", prompt:"'The Kinh people ______ 87% of the population.' Choose the correct phrase.",
        options:{A:"account for",B:"inhabit",C:"distinguish",D:"herd"}, correct:"A",
        explanation:"<b>account for</b> = chiếm (tỉ lệ %). 'account for 87%' = chiếm 87%." },
      { id:"vp3", prompt:"A place where people gather to buy and sell goods outdoors is called a/an ______.",
        options:{A:"boarding school",B:"terraced field",C:"open-air market",D:"heritage site"}, correct:"C",
        explanation:"<b>open-air market</b> = chợ phiên/chợ ngoài trời — nơi buôn bán ngoài trời." },
      { id:"vp4", prompt:"Which word best fits: 'My Son Sanctuary is a world ______ site recognized by UNESCO.'",
        options:{A:"heritage",B:"costume",C:"minority",D:"gathering"}, correct:"A",
        explanation:"<b>heritage</b> (n) = di sản. 'world heritage site' = di sản thế giới." },
      { id:"vp5", prompt:"'You can ______ ethnic groups by their traditional costumes' means you can tell them apart.",
        options:{A:"herd",B:"distinguish",C:"inhabit",D:"account"}, correct:"B",
        explanation:"<b>distinguish</b> (v) = phân biệt." },
      { id:"vp6", prompt:"A market built on boats on a river is called a ______.",
        options:{A:"floating market",B:"open-air market",C:"boarding school",D:"terraced field"}, correct:"A",
        explanation:"<b>floating market</b> = chợ nổi, phổ biến ở đồng bằng sông Cửu Long." }
    ],
    fillblank: [
      { id:"vf1", prompt:"Ethnic minorities mostly ______________ (live in) the mountain areas of Viet Nam.", accepted:["inhabit"], correct:"inhabit",
        explanation:"<b>inhabit</b> (v) = sinh sống, cư trú tại." },
      { id:"vf2", prompt:"The H'Mong women make beautiful and ______________ (impress) clothing.", accepted:["impressive"], correct:"impressive",
        explanation:"impress (v) → <b>impressive</b> (adj) bằng hậu tố -ive." },
      { id:"vf3", prompt:"That boy is ______________ (chăn) the buffalo in the rice field.", accepted:["herding","herd"], correct:"herding",
        explanation:"<b>herd</b> (v) = chăn, lùa gia súc." },
      { id:"vf4", prompt:"Sa Pa is famous for its beautiful ______________ (ruộng bậc thang).", accepted:["terraced fields","terraced field"], correct:"terraced fields",
        explanation:"<b>terraced field(s)</b> = ruộng bậc thang." },
      { id:"vf5", prompt:"Students in mountainous areas often study far from home, at a ______________ (trường nội trú).", accepted:["boarding school"], correct:"boarding school",
        explanation:"<b>boarding school</b> = trường nội trú." },
      { id:"vf6", prompt:"Cultural ______________ (sự đa dạng) is one of Viet Nam's most beautiful features.", accepted:["diversity"], correct:"diversity",
        explanation:"diverse (adj) → <b>diversity</b> (n) bằng hậu tố -ity." }
    ],
    matching: {
      left: ["heritage","costume","ethnic minority","gathering","account for","distinguish"],
      right: ["di sản","trang phục truyền thống","dân tộc thiểu số","cuộc tụ họp","chiếm (tỉ lệ)","phân biệt"],
      correctMap: [0,1,2,3,4,5] // index in `right` that matches each `left` item
    },
    chooseWord: [
      { id:"cw1", prompt:"Lan: 'Look at those beautiful fields! How can people grow rice there?' Hoa: 'Those are terraced fields. They're common in this ______ area.'",
        options:{A:"mountain",B:"mountainous",C:"mountaineer",D:"mountainful"}, correct:"B",
        explanation:"Cần tính từ đứng trước danh từ 'area' → <b>mountainous</b>." },
      { id:"cw2", prompt:"'Each ethnic group had ______ own culture, diverse and special.'",
        options:{A:"our",B:"their",C:"its",D:"his"}, correct:"C",
        explanation:"'each' đi với đại từ số ít; 'group' không phải người nên dùng <b>its</b>." },
      { id:"cw3", prompt:"'There's ______ milk left. It should be enough for our coffee.'",
        options:{A:"little",B:"few",C:"a little",D:"a few"}, correct:"C",
        explanation:"milk không đếm được + nghĩa khẳng định (đủ dùng) → <b>a little</b>." }
    ],
    wordMeaning: [
      { id:"wm1", prompt:"What does 'costume' mean?",
        options:{A:"trang phục truyền thống",B:"cầu thang",C:"gia súc",D:"cao nguyên"}, correct:"A",
        explanation:"costume (n) = trang phục, đặc biệt là trang phục biểu diễn hoặc trang phục truyền thống." },
      { id:"wm2", prompt:"What does 'gathering' mean?",
        options:{A:"cuộc tụ họp",B:"sự chuẩn bị",C:"sự đa dạng",D:"cuộc thi"}, correct:"A",
        explanation:"gathering (n) = cuộc tụ họp, buổi tụ tập đông người." },
      { id:"wm3", prompt:"What does 'craftsman' mean?",
        options:{A:"nông dân",B:"thợ thủ công",C:"thương nhân",D:"nghệ sĩ"}, correct:"B",
        explanation:"craftsman (n, số nhiều: craftsmen) = thợ thủ công." }
    ],
    wordForm: [
      { id:"wf1", prompt:"Learning about other cultures is a very (SURPRISE) ______________ experience.", accepted:["surprising"], correct:"surprising",
        explanation:"Cần tính từ bổ nghĩa cho 'experience' → surprise (v) → <b>surprising</b> (adj, +ing vì mang nghĩa chủ động 'gây ngạc nhiên')." },
      { id:"wf2", prompt:"The organizers are responsible for the (PREPARE) ______________ of the festival.", accepted:["preparation","preparations"], correct:"preparation(s)",
        explanation:"Cần danh từ → prepare (v) → <b>preparation(s)</b> (n, +tion)." },
      { id:"wf3", prompt:"The Muong people are proud of their (TRADITION) ______________ stilt houses.", accepted:["traditional"], correct:"traditional",
        explanation:"Cần tính từ bổ nghĩa cho 'houses' → tradition (n) → <b>traditional</b> (adj, +al)." }
    ]
  },

  // ---------------------------------------------------------
  // PART 8 & 9 — GRAMMAR REVIEW + PRACTICE
  // ---------------------------------------------------------
  grammar: [
    {
      id:"g1", name:"Quantifiers: much / many / little / a little / few / a few",
      usage:"Dùng để nói về SỐ LƯỢNG của danh từ. <b>Many/(a) few</b> đi với danh từ đếm được (số nhiều). <b>Much/(a) little</b> đi với danh từ không đếm được. Có 'a' phía trước (a little/a few) mang nghĩa khẳng định (có một chút/vài, đủ dùng); KHÔNG có 'a' (little/few) mang nghĩa phủ định (hầu như không có, không đủ).",
      formulas:[
        "How many + N (đếm được, số nhiều) + ...? — How many ethnic groups are there?",
        "How much + N (không đếm được) + ...? — How much milk is there?",
        "There is + a little/little + N không đếm được.",
        "There are + a few/few + N đếm được số nhiều."
      ],
      signals:["many","much","a little","little","a few","few","How many...?","How much...?"],
      examples:[
        {en:"There are 54 ethnic groups in Viet Nam.", vi:"Có 54 dân tộc ở Việt Nam."},
        {en:"There's a little milk left — enough for our coffee.", vi:"Còn một chút sữa — đủ pha cà phê."},
        {en:"We have little time, so let's hurry.", vi:"Chúng ta có rất ít thời gian, nên hãy nhanh lên."}
      ],
      mistakes:[
        {wrong:"How much ethnic groups do you know?", right:"How many ethnic groups do you know?"},
        {wrong:"There's a few milk in the fridge.", right:"There's a little milk in the fridge."}
      ],
      practice:{
        level1:[
          { id:"g1l1a", type:"mcq", prompt:"How ______ ethnic groups are there in Viet Nam?", options:{A:"much",B:"many",C:"little",D:"a little"}, correct:"B",
            explanation:"'ethnic groups' đếm được, số nhiều → How many." },
          { id:"g1l1b", type:"mcq", prompt:"There isn't ______ rice left in the bowl.", options:{A:"many",B:"few",C:"much",D:"a few"}, correct:"C",
            explanation:"'rice' không đếm được → much." }
        ],
        level2:[
          { id:"g1l2a", type:"mcq", prompt:"She has ______ Vietnamese friends, so she knows a lot about the culture here.", options:{A:"much",B:"a little",C:"many",D:"little"}, correct:"C",
            explanation:"'friends' đếm được, số nhiều, nghĩa khẳng định (có nhiều bạn) → many." },
          { id:"g1l2b", type:"fillblank", prompt:"There is only ______________ (chút ít) water in the bottle — we should buy more.", accepted:["a little"], correct:"a little",
            explanation:"'water' không đếm được, nghĩa 'chỉ còn một chút — cần mua thêm' → a little." }
        ],
        level3:[
          { id:"g1l3a", type:"fillblank", prompt:"Rewrite so it keeps the same meaning: 'He has almost no free time for hobbies.' → He has ______________ free time for hobbies.", accepted:["little"], correct:"little",
            explanation:"'almost no' (hầu như không có) mang nghĩa phủ định → dùng little (không có 'a')." }
        ]
      }
    },
    {
      id:"g2", name:"It takes + O + time + to V  →  How long does it take...?",
      usage:"Dùng để nói về khoảng THỜI GIAN cần để làm một việc gì đó.",
      formulas:[
        "Khẳng định: S + take(s) + O + thời gian + to V.  (It takes the students two hours to go to school.)",
        "Câu hỏi: How long + does/do + it take + O + to V...?"
      ],
      signals:["how long","take(s)","to + V"],
      examples:[
        {en:"It often takes the students two hours to go to their boarding school in this mountainous area.", vi:"Học sinh thường mất hai tiếng để đến trường nội trú ở vùng núi này."},
        {en:"How long does it take you to learn the Tay language?", vi:"Bạn mất bao lâu để học tiếng Tày?"}
      ],
      mistakes:[
        {wrong:"How long take it to go to school?", right:"How long does it take to go to school?"},
        {wrong:"It takes two hours the students to go to school.", right:"It takes the students two hours to go to school."}
      ],
      practice:{
        level1:[
          { id:"g2l1a", type:"mcq", prompt:"It ______ her ten minutes to put on a traditional costume.", options:{A:"take",B:"takes",C:"took",D:"taking"}, correct:"B",
            explanation:"Chủ ngữ 'It' số ít, thì hiện tại đơn → takes." },
          { id:"g2l1b", type:"mcq", prompt:"______ does it take to walk to the floating market from here?", options:{A:"How much",B:"How many",C:"How long",D:"How often"}, correct:"C",
            explanation:"Hỏi khoảng thời gian → How long." }
        ],
        level2:[
          { id:"g2l2a", type:"fillblank", prompt:"Rewrite: 'It takes visitors three hours to explore the whole market.' → How long ______________ visitors to explore the whole market?", accepted:["does it take"], correct:"does it take",
            explanation:"Câu hỏi: How long + does it take + O + to V?" }
        ],
        level3:[
          { id:"g2l3a", type:"fillblank", prompt:"Rewrite: 'In this mountainous area, it often takes the students two hours to go to their boarding school.' → How long ______________ (đầy đủ, bắt đầu bằng 'does')?", accepted:["does it often take the students to go to their boarding school in this mountainous area","does it take the students to go to their boarding school in this mountainous area"], correct:"does it often take the students to go to their boarding school in this mountainous area?",
            explanation:"Đây chính là câu 37 trong đề: How long does it often take the students to go to their boarding school in this mountainous area?" }
        ]
      }
    },
    {
      id:"g3", name:"Comparisons: as...as (ngang bằng) & Superlative ⇄ 'No other...'",
      usage:"So sánh ngang bằng dùng khi hai đối tượng ở cùng một mức độ. Có thể chuyển câu so sánh nhất (the most) sang cấu trúc phủ định 'No other + N + is + adj hơn/ngang bằng' mà ý nghĩa không đổi.",
      formulas:[
        "So sánh ngang bằng: S1 + is/are + as + adj + as + S2.",
        "So sánh nhất: S + is/are + the + most + adj (+N) (trong nhóm).",
        "Chuyển đổi: S + is the most + adj  →  No other (+N) + is + more + adj + than + S.  /  No other (+N) + is + as + adj + as + S."
      ],
      signals:["as...as","the most","No other...than","the + adj-est"],
      examples:[
        {en:"The H'Mong traditional costumes are as colorful as their festivals.", vi:"Trang phục truyền thống của người H'Mông rực rỡ như các lễ hội của họ."},
        {en:"Tet is the most important festival in Viet Nam.", vi:"Tết là lễ hội quan trọng nhất ở Việt Nam."},
        {en:"No other festival in Viet Nam is more important than Tet.", vi:"Không lễ hội nào ở Việt Nam quan trọng hơn Tết."}
      ],
      mistakes:[
        {wrong:"The costumes are as colorful than the festivals.", right:"The costumes are as colorful as the festivals."},
        {wrong:"No other festival is more important as Tet.", right:"No other festival is more important than Tet. / No other festival is as important as Tet."}
      ],
      practice:{
        level1:[
          { id:"g3l1a", type:"mcq", prompt:"Sa Pa Market is ______ crowded ______ Ha Giang Market on festival days.", options:{A:"as / as",B:"more / than",C:"the most / in",D:"as / than"}, correct:"A",
            explanation:"So sánh ngang bằng: as + adj + as." },
          { id:"g3l1b", type:"mcq", prompt:"My Son Sanctuary is one of ______ heritage sites in Viet Nam.", options:{A:"more famous",B:"the most famous",C:"as famous as",D:"famous"}, correct:"B",
            explanation:"'one of + the most + adj + số nhiều' → so sánh nhất." }
        ],
        level2:[
          { id:"g3l2a", type:"fillblank", prompt:"Rewrite: 'The H'Mong traditional costumes are as colorful as their festivals.' → The H'Mong traditional festivals ______________ (đảo ngược, giữ nguyên nghĩa).", accepted:["are as colorful as their traditional costumes","are as colorful as their costumes"], correct:"are as colorful as their traditional costumes",
            explanation:"Đảo ngược 2 vế trong so sánh ngang bằng: B + is/are + as + adj + as + A." }
        ],
        level3:[
          { id:"g3l3a", type:"fillblank", prompt:"Rewrite: 'Tet is the most important festival in Viet Nam.' → No other festival in Viet Nam ______________.", accepted:["is more important than tet","is as important as tet"], correct:"is more important than Tet. / is as important as Tet.",
            explanation:"So sánh nhất → 'No other + N + is + more + adj + than + S' hoặc 'is as + adj + as + S'." }
        ]
      }
    },
    {
      id:"g4", name:"Indirect (Embedded) Questions",
      usage:"Dùng để hỏi lịch sự hơn, thường bắt đầu bằng 'Could/Can you tell me...', 'Do you know...'. Sau từ để hỏi, giữ TRẬT TỰ TỪ XUÔI (S + V), KHÔNG đảo ngữ như câu hỏi trực tiếp.",
      formulas:[
        "Could you tell me + wh-word + S + V...?",
        "'the way to + place' ⇔ 'where + S(place) + is'"
      ],
      signals:["Could you tell me...","Do you know...","I wonder..."],
      examples:[
        {en:"Could you tell me where the traditional open-air market is?", vi:"Bạn có thể cho tôi biết chợ phiên truyền thống ở đâu không?"},
        {en:"Do you know how far the boarding school is from here?", vi:"Bạn có biết trường nội trú cách đây bao xa không?"}
      ],
      mistakes:[
        {wrong:"Could you tell me where is the market?", right:"Could you tell me where the market is?"},
        {wrong:"Do you know what does she do?", right:"Do you know what she does?"}
      ],
      practice:{
        level1:[
          { id:"g4l1a", type:"mcq", prompt:"Could you tell me ______ the nearest floating market is?", options:{A:"where",B:"where is",C:"is where",D:"does"}, correct:"A",
            explanation:"Câu hỏi gián tiếp: giữ trật tự từ xuôi, không đảo ngữ 'is'." }
        ],
        level2:[
          { id:"g4l2a", type:"fillblank", prompt:"Rewrite: 'Could you tell me the way to the boarding school?' → Could you tell me ______________?", accepted:["where the boarding school is"], correct:"where the boarding school is",
            explanation:"'the way to a place' ⇔ 'where a place is'." }
        ],
        level3:[
          { id:"g4l3a", type:"fillblank", prompt:"Rewrite: 'How far is My Son Sanctuary from here?' → Do you know ______________?", accepted:["how far my son sanctuary is from here"], correct:"how far My Son Sanctuary is from here",
            explanation:"Câu hỏi trực tiếp 'How far is X?' → gián tiếp: 'how far X is' (không đảo ngữ)." }
        ]
      }
    },
    {
      id:"g5", name:"Word Formation (danh từ / tính từ / trạng từ)",
      usage:"Thêm hậu tố (suffix) để chuyển một từ gốc sang từ loại khác, phù hợp với vị trí ngữ pháp cần điền: danh từ (-tion/-ity/-ment), tính từ (-al/-ive/-ous/-ful), trạng từ (-ly).",
      formulas:[
        "V/adj + -tion/-ity/-ment → danh từ (prepare→preparation, diverse→diversity)",
        "N/V + -al/-ive/-ous → tính từ (tradition→traditional, impress→impressive)",
        "adj + -ly → trạng từ (surprising→surprisingly)"
      ],
      signals:["đứng trước danh từ → cần tính từ","làm chủ ngữ/tân ngữ → cần danh từ","đứng đầu câu, bổ nghĩa cả câu → cần trạng từ"],
      examples:[
        {en:"Cultural diversity is one of Viet Nam's most beautiful features.", vi:"Sự đa dạng văn hoá là một trong những nét đẹp nhất của Việt Nam."},
        {en:"The H'Mong women make beautiful, impressive clothing.", vi:"Người phụ nữ H'Mông làm ra những bộ trang phục đẹp và ấn tượng."},
        {en:"Surprisingly, many small ethnic groups still preserve their languages.", vi:"Đáng ngạc nhiên là nhiều dân tộc nhỏ vẫn giữ được ngôn ngữ của mình."}
      ],
      mistakes:[
        {wrong:"Cultural diverse is beautiful.", right:"Cultural diversity is beautiful."},
        {wrong:"They wear tradition costumes.", right:"They wear traditional costumes."}
      ],
      practice:{
        level1:[
          { id:"g5l1a", type:"fillblank", prompt:"The Muong people live in (TRADITION) ______________ wooden houses.", accepted:["traditional"], correct:"traditional",
            explanation:"Cần tính từ trước danh từ 'houses' → traditional." }
        ],
        level2:[
          { id:"g5l2a", type:"fillblank", prompt:"(SURPRISE) ______________, some ethnic groups still use very old farming tools.", accepted:["surprisingly"], correct:"Surprisingly",
            explanation:"Đứng đầu câu, bổ nghĩa cả câu → trạng từ surprisingly." }
        ],
        level3:[
          { id:"g5l3a", type:"fillblank", prompt:"The (PREPARE) ______________ for the cultural festival took the whole village almost a month.", accepted:["preparation","preparations"], correct:"preparation(s)",
            explanation:"Cần danh từ làm chủ ngữ → preparation(s)." }
        ]
      }
    }
  ],

  // ---------------------------------------------------------
  // PART 10 — READING PRACTICE
  // ---------------------------------------------------------
  reading: {
    passage: `In Viet Nam, a market is a trading place, but many markets are not only about buying and selling things. They reflect the life of the community. A traditional market is a social <mark data-w="gathering">gathering</mark> point for people of all ages and it is a new and exciting experience for children, a trading place for local <mark data-w="craftsmen">craftsmen</mark>, and a chance for young people to meet. People go to the traditional market not only to buy and sell things but also to eat, drink, play games, and <mark data-w="socialize">socialize</mark>. For example, if you go to Sa Pa Market, which is in the highlands in the north of Viet Nam, you can see people wearing their nicest clothes and spending all day long at the market. They buy things, play the flute, dance, and sing. This is also a time to meet, make friends or look for lovers. That is why this kind of gathering is also called "Love Market". Some other countryside markets in the Mekong Delta are held on boats. Most of the goods are sold at a <mark data-w="floating market">floating market</mark>. The most exciting time is in the early morning when boats arrive <mark data-w="loaded up">loaded up</mark> with agricultural products.`,
    vocabInContext: {
      "gathering": "cuộc tụ họp",
      "craftsmen": "thợ thủ công (số nhiều của craftsman)",
      "socialize": "giao lưu, giao tiếp xã hội",
      "floating market": "chợ nổi",
      "loaded up": "chất đầy, chở đầy"
    },
    translation: `Ở Việt Nam, chợ là một nơi buôn bán, nhưng nhiều khu chợ không chỉ đơn thuần là để mua và bán đồ. Chúng phản ánh đời sống của cộng đồng. Chợ truyền thống là nơi tụ họp của người dân ở mọi lứa tuổi, là một trải nghiệm mới mẻ và thú vị đối với trẻ em, là nơi buôn bán của những người thợ thủ công địa phương, và là dịp để những người trẻ gặp gỡ nhau. Người ta đến chợ truyền thống không chỉ để mua bán mà còn để ăn uống, chơi trò chơi và giao lưu. Ví dụ, nếu bạn đến chợ Sa Pa — nằm ở vùng cao phía Bắc Việt Nam — bạn sẽ thấy mọi người mặc những bộ quần áo đẹp nhất và ở lại chợ cả ngày. Họ mua sắm, thổi sáo, nhảy múa và ca hát. Đây cũng là dịp để gặp gỡ, kết bạn hoặc tìm người yêu — đó là lý do vì sao kiểu tụ họp này còn được gọi là "Chợ Tình". Một số khu chợ vùng quê khác ở đồng bằng sông Cửu Long được họp trên thuyền. Hầu hết hàng hoá được bán tại chợ nổi. Thời điểm nhộn nhịp nhất là vào sáng sớm, khi các thuyền chở đầy nông sản cập bến.`,
    practice: [
      { id:"r1", type:"truefalse", prompt:"Traditional markets in Viet Nam show the lifestyle and culture of the local people.", correct:"True",
        explanation:"Bài đọc: 'They reflect the life of the community.'" },
      { id:"r2", type:"truefalse", prompt:"People only visit traditional markets when they need to buy or sell something.", correct:"False",
        explanation:"Bài đọc nói markets 'are not only about buying and selling things'." },
      { id:"r3", type:"truefalse", prompt:"Visitors can enjoy musical activities and dancing at Sa Pa Market.", correct:"True",
        explanation:"Bài đọc: 'They... play the flute, dance, and sing.'" },
      { id:"r4", type:"truefalse", prompt:"Floating markets in the Mekong Delta are most exciting in the late afternoon.", correct:"False",
        explanation:"Bài đọc: 'The most exciting time is in the early morning.'" },
      { id:"r5", type:"mcq", prompt:"What is the main idea of the passage?",
        options:{A:"Traditional markets in Viet Nam are not just for trading but also have cultural and social values.",
                 B:"The differences between modern supermarkets and traditional markets.",
                 C:"How craftsmen produce agricultural goods.",
                 D:"The history of floating markets in the south of Viet Nam."}, correct:"A",
        explanation:"Toàn bài xoay quanh việc chợ truyền thống có cả giá trị văn hoá – xã hội, không chỉ để mua bán." },
      { id:"r6", type:"mcq", prompt:"Which is NOT true according to the passage?",
        options:{A:"Children often find traditional markets boring.",
                 B:"Sa Pa Market is also called 'Love Market'.",
                 C:"Some countryside markets are held on boats.",
                 D:"People of all ages can find something interesting at a market."}, correct:"A",
        explanation:"Bài đọc nói ngược lại: chợ 'is a new and exciting experience for children' (thú vị, không nhàm chán)." },
      { id:"r7", type:"mcq", prompt:"(Wh-question) Why is Sa Pa Market also called 'Love Market'?",
        options:{A:"Because it only sells flowers.",
                 B:"Because young people go there to meet, make friends or look for lovers.",
                 C:"Because it is only open on Valentine's Day.",
                 D:"Because only couples are allowed to enter."}, correct:"B",
        explanation:"Bài đọc: 'This is also a time to meet, make friends or look for lovers. That is why this kind of gathering is also called \"Love Market\".'" },
      { id:"r8", type:"mcq", prompt:"(Find information) Where are floating markets mentioned in the passage mostly found?",
        options:{A:"In the highlands of the north",B:"In the Mekong Delta",C:"In My Son Sanctuary",D:"In Ha Giang"}, correct:"B",
        explanation:"Bài đọc: 'Some other countryside markets in the Mekong Delta are held on boats... sold at a floating market.'" },
      { id:"r9", type:"mcq", prompt:"(Vocabulary in context) In the passage, 'socialize' is closest in meaning to:",
        options:{A:"to buy expensive things",B:"to interact and talk with other people",C:"to work quietly alone",D:"to sell goods at a high price"}, correct:"B",
        explanation:"'socialize' = giao lưu, trò chuyện, kết nối với người khác." }
    ]
  },

  // ---------------------------------------------------------
  // PART 11 — TRANSLATION PRACTICE
  // ---------------------------------------------------------
  translation: [
    { id:"t1", en:"Traditional markets in Viet Nam show the lifestyle and culture of the local people.",
      suggested:"Chợ truyền thống ở Việt Nam thể hiện lối sống và văn hoá của người dân địa phương.",
      notes:"Từ vựng: <i>lifestyle</i> (lối sống), <i>culture</i> (văn hoá). Cấu trúc: S + V + O đơn giản, dịch xuôi theo trật tự câu." },
    { id:"t2", en:"Viet Nam is a multi-nationality country with 54 ethnic groups.",
      suggested:"Việt Nam là một quốc gia đa dân tộc với 54 dân tộc.",
      notes:"Từ vựng: <i>multi-nationality</i> (đa dân tộc/đa quốc tịch), <i>ethnic groups</i> (các dân tộc/nhóm dân tộc)." },
    { id:"t3", en:"My Son Sanctuary is a globally recognized cultural heritage site.",
      suggested:"Thánh địa Mỹ Sơn là một di sản văn hoá được công nhận trên toàn thế giới.",
      notes:"Từ vựng: <i>globally recognized</i> (được công nhận toàn cầu), <i>cultural heritage site</i> (di sản văn hoá)." },
    { id:"t4", en:"The H'Mong women make beautiful, impressive clothing with colorful patterns.",
      suggested:"Những người phụ nữ H'Mông làm ra những bộ trang phục đẹp, ấn tượng với hoạ tiết đầy màu sắc.",
      notes:"Từ vựng: <i>impressive</i> (ấn tượng), <i>colorful patterns</i> (hoạ tiết sặc sỡ). Lưu ý tính từ trong tiếng Anh đứng trước danh từ, nhưng tiếng Việt có thể đảo ra sau." },
    { id:"t5", en:"In this mountainous area, it often takes the students two hours to go to their boarding school.",
      suggested:"Ở vùng núi này, học sinh thường mất hai tiếng đồng hồ để đến trường nội trú của các em.",
      notes:"Cấu trúc: <i>It takes + O + time + to V</i> → dịch là '...mất (khoảng thời gian) để làm gì'." }
  ],

  // ---------------------------------------------------------
  // PART 12 — SENTENCE TRANSFORMATION PRACTICE
  // ---------------------------------------------------------
  transformation: [
    {
      id:"tr1", name:"It takes + O + time + to V → How long does it take...?",
      formula:"How long + does/do + it take + O + to V...?",
      example:{ before:"It takes visitors three hours to explore the whole market.", after:"How long does it take visitors to explore the whole market?" },
      practice:[
        { id:"tr1p1", type:"fillblank", prompt:"It takes tourists a whole day to visit every stall at the festival. → How long ______________ tourists to visit every stall at the festival?", accepted:["does it take"], correct:"does it take",
          explanation:"How long + does it take + O + to V?" },
        { id:"tr1p2", type:"fillblank", prompt:"It took Nam twenty minutes to put on the traditional costume. → How long ______________ Nam to put on the traditional costume?", accepted:["did it take"], correct:"did it take",
          explanation:"Thì quá khứ: How long + did it take + O + to V?" }
      ]
    },
    {
      id:"tr2", name:"As...as (đảo ngược hai vế so sánh ngang bằng)",
      formula:"A + is/are + as + adj + as + B  →  B + is/are + as + adj + as + A",
      example:{ before:"The H'Mong traditional costumes are as colorful as their festivals.", after:"The H'Mong traditional festivals are as colorful as their traditional costumes." },
      practice:[
        { id:"tr2p1", type:"fillblank", prompt:"Sa Pa Market is as crowded as Bac Ha Market on Sundays. → Bac Ha Market ______________ on Sundays.", accepted:["is as crowded as sa pa market"], correct:"is as crowded as Sa Pa Market",
          explanation:"Đảo ngược 2 vế, giữ nguyên 'as crowded as'." },
        { id:"tr2p2", type:"fillblank", prompt:"The Tay costumes are as simple as the Thai costumes. → The Thai costumes ______________.", accepted:["are as simple as the tay costumes"], correct:"are as simple as the Tay costumes",
          explanation:"Đảo ngược 2 vế, giữ nguyên 'as simple as'." }
      ]
    },
    {
      id:"tr3", name:"Superlative ⇄ No other... (so sánh nhất → phủ định)",
      formula:"S + is + the most + adj  →  No other + N + is + more + adj + than + S  (hoặc: is + as + adj + as + S)",
      example:{ before:"Tet is the most important festival in Viet Nam.", after:"No other festival in Viet Nam is more important than Tet." },
      practice:[
        { id:"tr3p1", type:"fillblank", prompt:"My Son Sanctuary is the most famous heritage site in this region. → No other heritage site in this region ______________.", accepted:["is more famous than my son sanctuary","is as famous as my son sanctuary"], correct:"is more famous than My Son Sanctuary",
          explanation:"No other + N + is + more + adj + than + S." },
        { id:"tr3p2", type:"fillblank", prompt:"Sa Pa Market is the largest open-air market in the area. → No other open-air market in the area ______________.", accepted:["is larger than sa pa market","is as large as sa pa market"], correct:"is larger than Sa Pa Market",
          explanation:"No other + N + is + more/-er + adj + than + S." }
      ]
    },
    {
      id:"tr4", name:"Indirect questions (câu hỏi gián tiếp lịch sự)",
      formula:"Could you tell me + wh-word + S + V...?  (giữ trật tự từ xuôi)",
      example:{ before:"Could you tell me the way to the traditional open-air market?", after:"Could you tell me where the traditional open-air market is?" },
      practice:[
        { id:"tr4p1", type:"fillblank", prompt:"Could you tell me the way to My Son Sanctuary? → Could you tell me ______________?", accepted:["where my son sanctuary is"], correct:"where My Son Sanctuary is",
          explanation:"'the way to a place' ⇔ 'where a place is'." },
        { id:"tr4p2", type:"fillblank", prompt:"How old is this traditional costume? → Do you know ______________?", accepted:["how old this traditional costume is"], correct:"how old this traditional costume is",
          explanation:"Giữ trật tự từ xuôi trong câu hỏi gián tiếp, không đảo 'is'." }
      ]
    }
  ],

  // ---------------------------------------------------------
  // PART 13 — QUICK REVIEW (mini test, ~14 questions)
  // ---------------------------------------------------------
  quickReview: [
    { id:"q1", cat:"Vocabulary", type:"mcq", prompt:"'Heritage' means:", options:{A:"di sản",B:"gia súc",C:"cầu thang",D:"cao nguyên"}, correct:"A",
      explanation:"heritage (n) = di sản." },
    { id:"q2", cat:"Vocabulary", type:"mcq", prompt:"'The Kinh people ______ 87% of the population.'", options:{A:"account for",B:"herd",C:"distinguish",D:"inhabit"}, correct:"A",
      explanation:"account for = chiếm (tỉ lệ)." },
    { id:"q3", cat:"Vocabulary", type:"fillblank", prompt:"A market held on boats is called a ______________ market.", accepted:["floating"], correct:"floating",
      explanation:"floating market = chợ nổi." },
    { id:"q4", cat:"Vocabulary", type:"mcq", prompt:"'Costumes' most likely refers to:", options:{A:"traditional clothes",B:"farming tools",C:"musical instruments",D:"types of food"}, correct:"A",
      explanation:"costume (n) = trang phục truyền thống." },
    { id:"q5", cat:"Grammar", type:"mcq", prompt:"How ______ ethnic groups are there in Viet Nam?", options:{A:"much",B:"many",C:"little",D:"few"}, correct:"B",
      explanation:"'ethnic groups' đếm được số nhiều → How many." },
    { id:"q6", cat:"Grammar", type:"mcq", prompt:"Each group had ______ own traditions.", options:{A:"their",B:"its",C:"his",D:"our"}, correct:"B",
      explanation:"'each' + danh từ không phải người, số ít → its." },
    { id:"q7", cat:"Grammar", type:"mcq", prompt:"Choose the correctly rewritten sentence: 'It takes the students two hours to get to school.'",
      options:{A:"How long does it take the students to get to school?",B:"How long do the students take to school?",C:"How long take it the students to school?",D:"How long is it take the students to school?"}, correct:"A",
      explanation:"How long + does it take + O + to V?" },
    { id:"q8", cat:"Grammar", type:"mcq", prompt:"Choose the correctly rewritten sentence: 'Tet is the most important festival in Viet Nam.'",
      options:{A:"No other festival in Viet Nam is more important than Tet.",B:"No other festival in Viet Nam is more important as Tet.",C:"No other festival is import than Tet.",D:"Tet is more important than no other festival."}, correct:"A",
      explanation:"No other + N + is + more + adj + than + S." },
    { id:"q9", cat:"Reading", type:"truefalse", prompt:"(Passage: traditional markets) Traditional markets in Viet Nam are only about buying and selling.", correct:"False",
      explanation:"Bài đọc: chợ không chỉ để mua bán mà còn mang giá trị xã hội." },
    { id:"q10", cat:"Reading", type:"mcq", prompt:"Why is Sa Pa Market called 'Love Market'?", options:{A:"It only sells flowers.",B:"Young people go there to meet and look for lovers.",C:"It is only open on Valentine's Day.",D:"Couples get married there."}, correct:"B",
      explanation:"Bài đọc: đây cũng là dịp để gặp gỡ, kết bạn hoặc tìm người yêu." },
    { id:"q11", cat:"Reading", type:"mcq", prompt:"Floating markets mentioned in the passage are mostly found in:", options:{A:"the Mekong Delta",B:"Sa Pa",C:"My Son Sanctuary",D:"Ha Giang"}, correct:"A",
      explanation:"Bài đọc: 'countryside markets in the Mekong Delta are held on boats'." },
    { id:"q12", cat:"Writing", type:"mcq", prompt:"Choose the best Vietnamese translation for: 'My Son Sanctuary is a globally recognized cultural heritage site.'",
      options:{A:"Thánh địa Mỹ Sơn là một di sản văn hoá được công nhận trên toàn thế giới.",
               B:"Thánh địa Mỹ Sơn là một khu chợ nổi tiếng thế giới.",
               C:"Thánh địa Mỹ Sơn là nơi sinh sống của nhiều dân tộc.",
               D:"Thánh địa Mỹ Sơn là một trường học nổi tiếng."}, correct:"A",
      explanation:"Câu gốc nói về 'cultural heritage site' (di sản văn hoá) được công nhận toàn cầu." },
    { id:"q13", cat:"Writing", type:"mcq", prompt:"Choose the correct indirect question for: 'Could you tell me the way to the open-air market?'",
      options:{A:"Could you tell me where the open-air market is?",B:"Could you tell me where is the open-air market?",C:"Could you tell me the open-air market where is?",D:"Could you tell me where does the open-air market?"}, correct:"A",
      explanation:"Câu hỏi gián tiếp giữ trật tự từ xuôi: where + S + V." },
    { id:"q14", cat:"Writing", type:"fillblank", prompt:"Rewrite: 'The H'Mong costumes are as colorful as their festivals.' → The H'Mong festivals are as colorful as their ______________.", accepted:["costumes","traditional costumes"], correct:"costumes",
      explanation:"Đảo ngược 2 vế trong so sánh ngang bằng, giữ nguyên 'as colorful as'." }
  ]
};
