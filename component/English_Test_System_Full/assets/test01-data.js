const TEST = {
  id: "test01",
  grade: "Grade 8 — Global Success",
  unit: "Unit 4: Ethnic groups of Viet Nam",
  title: "Grade 8 · Unit 4: Ethnic groups of Viet Nam · Test 1",
  duration: 35, // minutes
  totalPoints: 10,
  reviewPage: "review_test01.html",
  instructions: [
    "Bài kiểm tra gồm 40 câu, chia thành 7 phần (I → VII), tổng 10 điểm.",
    "Bấm chọn đáp án A/B/C/D cho câu trắc nghiệm, hoặc gõ câu trả lời vào ô trống cho câu điền từ / viết lại câu.",
    "Em có thể dùng nút Previous / Next hoặc bấm số câu ở bảng điều hướng để di chuyển giữa các câu.",
    "Khi hết giờ, bài làm sẽ tự động được nộp.",
    "Sau khi nộp bài, em sẽ thấy điểm số, đáp án đúng và giải thích chi tiết cho từng câu."
  ],
  sections: [
    { id: "I",   title: "Choose the word / phrase / sentence (A, B, C or D) that best fits the space or best answers the question given in each sentence.", points: "3.5 pts", range: [1,14] },
    { id: "II",  title: "Look at the sign or the notice. Choose the best answer (A, B, C or D).", points: "0.5 pt", range: [15,16] },
    { id: "III", title: "Choose the word (A, B, C or D) that best fits each space in the following passage.", points: "1.5 pts", range: [17,22] },
    { id: "IV",  title: "Read the passage. Decide True/False (23–26) and choose the best answer (27–28).", points: "1.5 pts", range: [23,28] },
    { id: "V",   title: "Use the correct form of the word given in each sentence.", points: "1.5 pts", range: [29,34] },
    { id: "VI",  title: "Look at the dictionary entry of “costume”. Complete the sentences with no more than three words.", points: "0.5 pt", range: [35,36] },
    { id: "VII", title: "Rewrite each sentence so that it means almost the same as the sentence printed before it.", points: "1.0 pt", range: [37,40] }
  ],
  passages: {
    cloze1: `Viet Nam is a multi-nationality country with 54 ethnic (17) ______. The Viet (Kinh) people account (18) ______ 87% of the country's population and mainly inhabit the Red River delta, the central coastal delta, the Mekong delta and major cities. The other 53 ethnic minority groups, totalling over 8 million people, are scattered over mountain areas spreading from the North to the South.<br><br>Among ethnic minorities, the largest ones are Tay, Thai, Muong, Hoa, Khmer, and Nung with a (19) ______ of around 1 million each. A number of ethnic minorities had mastered some farming techniques. They grew rice plants in swamped paddy fields and carried out irrigation. Others (20) ______ hunting, fishing, or collecting forest products. Each group had (21) ______ own culture, which is diverse and special. Learning about these cultures is a fascinating journey (22) ______ everyone who loves exploring the beauty of Vietnamese heritage.`,
    reading1: `In Viet Nam, a market is a trading place, but many markets are not only about buying and selling things. They reflect the life of the community. A traditional market is a social gathering point for people of all ages and it is a new and exciting experience for children, a trading place for local craftsmen, and a chance for young people to meet. People go to the traditional market not only to buy and sell things but also to eat, drink, play games, and socialize. For example, if you go to Sa Pa Market, which is in the highlands in the north of Viet Nam, you can see people wearing their nicest clothes and spending all day long at the market. They buy things, play the flute, dance, and sing. This is also a time to meet, make friends or look for lovers. That is why this kind of gathering is also called "Love Market". Some other countryside markets in the Mekong Delta are held on boats. Most of the goods are sold at a floating market. The most exciting time is in the early morning when boats arrive loaded up with agricultural products.`,
    costumeEntry: {
      word: "costume", ipa: "/ˈkɒstjuːm/", pos: "noun",
      def: "the clothes worn by actors in a play or film/movie, or worn by somebody pretending to be somebody else",
      examples: [
        "The actors were already in <b>full costume</b>.",
        "The film won an Oscar for <b>best costume design</b>.",
        "She wore an elaborate <b>historical costume</b> to the party.",
        "The children dressed up in <b>Halloween costumes</b>.",
        "She wears a traditional <b>national costume</b> for the festival."
      ]
    }
  },
  images: {
    signNoPets: "assets/images/sign_no_pets.jpg",
    signLostFound: "assets/images/sign_lost_found.jpg"
  },
  questions: [
    // ---------------- SECTION I (1-14) ----------------
    {
      id: 1, section: "I", type: "mcq",
      prompt: "Which word has the underlined part pronounced differently from that of the others?",
      display: { A: "<u>ch</u>emist", B: "s<u>ch</u>ool", C: "<u>ch</u>ance", D: "<u>ch</u>aos" },
      correct: "C",
      explanation: "Trong 3 từ <b>chemist</b> /ˈkemɪst/, <b>school</b> /skuːl/ và <b>chaos</b> /ˈkeɪɒs/, chữ <i>ch</i> được đọc là /k/ (đây đều là những từ gốc Hy Lạp). Riêng <b>chance</b> /tʃɑːns/ thì <i>ch</i> đọc là /tʃ/. → Đáp án <b>C. chance</b> là từ phát âm khác."
    },
    {
      id: 2, section: "I", type: "mcq",
      prompt: "Which word has the underlined part pronounced differently from that of the others?",
      display: { A: "<u>v</u>illage", B: "<u>g</u>roup", C: "<u>g</u>ong", D: "<u>g</u>ardening" },
      correct: "A",
      explanation: "Chữ <i>g</i> trong <b>group</b> /ɡruːp/, <b>gong</b> /ɡɒŋ/, <b>gardening</b> /ˈɡɑːdnɪŋ/ đều đọc là /ɡ/. Riêng <b>village</b> /ˈvɪlɪdʒ/ có <i>g</i> đọc là /dʒ/. → Đáp án <b>A. village</b> là từ phát âm khác."
    },
    {
      id: 3, section: "I", type: "mcq",
      prompt: "Which word has a different stress pattern from that of the others?",
      display: { A: "personal", B: "national", C: "pharmacy", D: "religious" },
      correct: "D",
      explanation: "<b>PER</b>sonal, <b>NA</b>tional, <b>PHAR</b>macy đều trọng âm rơi vào âm tiết 1. Riêng <b>reLIgious</b> /rɪˈlɪdʒəs/ trọng âm rơi vào âm tiết 2. → Đáp án <b>D. religious</b> có trọng âm khác."
    },
    {
      id: 4, section: "I", type: "mcq",
      prompt: "Which word has a different stress pattern from that of the others?",
      display: { A: "domestic", B: "specific", C: "religious", D: "physical" },
      correct: "D",
      explanation: "<b>doMEStic</b>, <b>speCIfic</b>, <b>reLIgious</b> đều có trọng âm rơi vào âm tiết 2. Riêng <b>PHYsical</b> /ˈfɪzɪkl/ trọng âm rơi vào âm tiết 1. → Đáp án <b>D. physical</b> có trọng âm khác."
    },
    {
      id: 5, section: "I", type: "mcq",
      context: `<b>Nam:</b> Look! That boy is ______ the buffalo so skillfully in the rice field.<br><b>Tuấn:</b> Wow, life in the countryside seems so peaceful.`,
      prompt: "Choose the best answer.",
      display: { A: "playing", B: "herding", C: "fighting", D: "running" },
      correct: "B",
      explanation: "<b>Herd</b> (v) /hɜːd/ nghĩa là <i>chăn, lùa (gia súc)</i>. \"Herd the buffalo\" = chăn/lùa con trâu — đúng với hình ảnh cậu bé làm việc ngoài đồng ở nông thôn. Các đáp án khác (chơi, đánh nhau, chạy) không hợp nghĩa với \"buffalo... in the rice field\"."
    },
    {
      id: 6, section: "I", type: "mcq",
      context: `<b>Lan:</b> I love your village. There are not many high buildings to block ______ here.<br><b>Mai:</b> Yes, that's why we can enjoy the beautiful landscape every morning.`,
      prompt: "Choose the best answer.",
      display: { A: "the view", B: "view", C: "some views", D: "a view" },
      correct: "A",
      explanation: "\"<b>Block the view</b>\" là cụm cố định nghĩa là <i>che khuất tầm nhìn</i>. Ta dùng mạo từ <b>the</b> vì \"the view\" ở đây là tầm nhìn cụ thể (từ ngôi làng đang được nhắc đến), người nghe hiểu rõ là view nào."
    },
    {
      id: 7, section: "I", type: "mcq",
      context: `<b>John:</b> Look at those beautiful fields over there! How can people grow rice there?<br><b>Hoa:</b> Oh, those are terraced fields. They are very common in this ______ area.`,
      prompt: "Choose the best answer.",
      display: { A: "mountain", B: "mountainful", C: "mountainous", D: "mountaineer" },
      correct: "C",
      explanation: "Cần một <b>tính từ</b> đứng trước danh từ \"area\". <b>Mountainous</b> (adj) = có nhiều núi, thuộc vùng núi. \"mountainful\" không phải là từ tiếng Anh; \"mountaineer\" (n) = người leo núi; \"mountain\" (n) = ngọn núi — đều không phải tính từ phù hợp."
    },
    {
      id: 8, section: "I", type: "mcq",
      context: `<b>Tom:</b> Is it true that My Son Sanctuary is a world ______ site?<br><b>Mary:</b> Yes, it was recognized by UNESCO many years ago.`,
      prompt: "Choose the best answer.",
      display: { A: "heritage", B: "open-air market", C: "terraced field", D: "ethnic minority" },
      correct: "A",
      explanation: "\"<b>World heritage site</b>\" (di sản thế giới) là cụm từ cố định, đặc biệt hợp lý khi đi cùng \"recognized by UNESCO\". Các đáp án khác đều không tạo thành cụm từ có nghĩa với \"world ___ site\"."
    },
    {
      id: 9, section: "I", type: "mcq",
      context: `<b>Elena:</b> If you go to Sa Pa, how can you distinguish people from different ethnic groups?<br><b>Biên:</b> It's quite easy. You can recognize them by their unique traditional ______.`,
      prompt: "Choose the best answer.",
      display: { A: "highlands", B: "livestock", C: "staircases", D: "costumes" },
      correct: "D",
      explanation: "<b>Costumes</b> (n) = trang phục. Người ta thường phân biệt các dân tộc qua <i>trang phục truyền thống</i> của họ. \"highlands\" (cao nguyên), \"livestock\" (gia súc), \"staircases\" (cầu thang) đều không liên quan đến việc nhận diện một dân tộc."
    },
    {
      id: 10, section: "I", type: "mcq",
      context: `<b>Mom:</b> Is there any milk left in the fridge for breakfast, Nick?<br><b>Nick:</b> There's ______ milk left. It should be enough for our coffee.`,
      prompt: "Choose the best answer.",
      display: { A: "little", B: "few", C: "a little", D: "a few" },
      correct: "C",
      explanation: "\"Milk\" là danh từ không đếm được nên dùng <b>little / a little</b> (không dùng few/a few — dành cho danh từ đếm được). Về nghĩa: <b>a little</b> mang nghĩa khẳng định (một chút, đủ dùng) — khớp với \"It should be enough\"; còn <b>little</b> mang nghĩa phủ định (hầu như không có gì), sẽ mâu thuẫn với vế sau."
    },
    {
      id: 11, section: "I", type: "mcq",
      context: `<b>Jane:</b> I am doing a small project on Vietnamese culture. How ______ ethnic groups in Viet Nam do you know?<br><b>Minh:</b> There are 54 groups in total, and each has its own beautiful traditions.`,
      prompt: "Choose the best answer.",
      display: { A: "much", B: "often", C: "many", D: "tall" },
      correct: "C",
      explanation: "\"Ethnic groups\" là danh từ đếm được, số nhiều → dùng <b>How many</b> để hỏi về số lượng. (How much dùng với danh từ không đếm được; how often hỏi tần suất; how tall hỏi chiều cao — đều không phù hợp)."
    },
    {
      id: 12, section: "I", type: "mcq",
      context: `<b>Andrew:</b> Excuse me, Alex. Whose is this book about ethnic minority groups?<br><b>Alex:</b> ______ I bought it yesterday at the local bookshop.`,
      prompt: "Choose the best answer.",
      display: { A: "Here you are.", B: "It's mine.", C: "It's a book.", D: "Thanks." },
      correct: "B",
      explanation: "Câu hỏi \"Whose is this book?\" hỏi về <i>chủ sở hữu</i>, nên câu trả lời hợp lý là khẳng định quyền sở hữu: <b>\"It's mine.\"</b> (Nó là của tôi). \"Here you are\" dùng khi đưa vật gì đó cho ai; \"It's a book\" không trả lời về chủ sở hữu; \"Thanks\" không phù hợp ngữ cảnh."
    },
    {
      id: 13, section: "I", type: "mcq",
      context: `<b>Peter:</b> I'm going to visit an open-air market in Ha Giang this weekend!<br><b>Nam:</b> ______ Have a wonderful trip and take lots of photos!`,
      prompt: "Choose the best answer.",
      display: { A: "Thanks! The same to you!", B: "I've no idea.", C: "That's great!", D: "What's happening?" },
      correct: "C",
      explanation: "Khi ai đó chia sẻ một kế hoạch thú vị, ta thường đáp lại bằng lời khen/thể hiện sự hào hứng: <b>\"That's great!\"</b>. \"Thanks! The same to you!\" chỉ dùng khi đối phương chúc mình trước; \"I've no idea\" và \"What's happening?\" lạc đề."
    },
    {
      id: 14, section: "I", type: "mcq",
      context: `<b>Teacher:</b> Can anyone tell me how the Muong people get water for their terraced land?<br><b>Long:</b> ______`,
      prompt: "Choose the best answer.",
      display: {
        A: "They build their traditional houses on stilts with 4 roofs.",
        B: "They usually water their fields using small brooks.",
        C: "Muong language belongs to the Mon-Khmer group.",
        D: "They cultivate mainly wet rice in the valleys."
      },
      correct: "B",
      explanation: "Câu hỏi hỏi <i>cách</i> người Mường lấy nước cho ruộng bậc thang (how... get water), nên câu trả lời phải nói về nguồn nước / cách tưới tiêu: <b>\"They usually water their fields using small brooks.\"</b> Các đáp án khác nói về nhà ở, ngôn ngữ, loại cây trồng — không trả lời đúng câu hỏi \"how... get water\"."
    },

    // ---------------- SECTION II (15-16) ----------------
    {
      id: 15, section: "II", type: "mcq",
      image: "signNoPets",
      prompt: "What does the sign tell you?",
      display: {
        A: "Only local pets are welcome here.",
        B: "Pets are allowed if they are on a leash.",
        C: "Pets are allowed in this area.",
        D: "You are not allowed to bring pets here."
      },
      correct: "D",
      explanation: "Biển báo ghi rõ \"NO PETS ALLOWED IN THE PROTECTED HERITAGE SITE\" (Không được mang vật nuôi vào khu di sản được bảo vệ) → nghĩa là <b>không được mang thú cưng vào khu vực này</b>, đáp án D."
    },
    {
      id: 16, section: "II", type: "mcq",
      image: "signLostFound",
      prompt: "What does this notice mean?",
      display: {
        A: "Contact the school office to get the lost item back.",
        B: "Go to the school gate if you want to sell your wallet.",
        C: "Wait for someone to call you from the school office.",
        D: "You can buy a handmade craft wallet at the school yard."
      },
      correct: "A",
      explanation: "Thông báo \"Lost & Found\" cho biết có một chiếc ví thủ công được tìm thấy ở sân trường, và yêu cầu \"CONTACT THE SCHOOL OFFICE\" (liên hệ văn phòng nhà trường) để nhận lại → đáp án A."
    },

    // ---------------- SECTION III (17-22) — cloze passage ----------------
    { id: 17, section: "III", type: "mcq", passage: "cloze1", blankNum: 17,
      prompt: "Choose the best word for blank (17).",
      display: { A: "minorities", B: "majorities", C: "groups", D: "teams" }, correct: "C",
      explanation: "\"54 ethnic <b>groups</b>\" — Việt Nam có 54 dân tộc (nhóm dân tộc), đây là kiến thức thực tế và cũng là cách diễn đạt tự nhiên nhất. \"minorities\" không hợp vì ngay câu sau đã nói riêng về \"53 ethnic minority groups\" (nhóm thiểu số) — 54 phải là tổng số nhóm nói chung."
    },
    { id: 18, section: "III", type: "mcq", passage: "cloze1", blankNum: 18,
      prompt: "Choose the best word for blank (18).",
      display: { A: "at", B: "of", C: "in", D: "for" }, correct: "D",
      explanation: "Cụm động từ cố định: <b>account for + tỉ lệ %</b> = chiếm (bao nhiêu phần trăm). Ví dụ: \"The Kinh people account for 87% of the population.\" = Người Kinh chiếm 87% dân số."
    },
    { id: 19, section: "III", type: "mcq", passage: "cloze1", blankNum: 19,
      prompt: "Choose the best word for blank (19).",
      display: { A: "population", B: "inhabitant", C: "religion", D: "livestock" }, correct: "A",
      explanation: "\"with a <b>population</b> of around 1 million each\" = với dân số khoảng 1 triệu người mỗi nhóm. \"population\" (dân số) là từ đúng khi nói về số lượng người của một nhóm dân tộc."
    },
    { id: 20, section: "III", type: "mcq", passage: "cloze1", blankNum: 20,
      prompt: "Choose the best word for blank (20).",
      display: { A: "made", B: "went", C: "did", D: "used" }, correct: "C",
      explanation: "\"Others <b>did</b> hunting, fishing, or collecting forest products.\" — \"did\" ở đây được dùng như một động từ chung thay cho các hoạt động (hunting/fishing/collecting) được liệt kê ngay sau. <i>Lưu ý:</i> đây là một điểm ngữ pháp khá tinh tế; nếu em thấy \"went\" cũng nghe hợp lý thì đó là băn khoăn hợp lý — nhưng theo đáp án gốc của đề, <b>did</b> mới là lựa chọn được chọn vì nó dùng chung được cho cả ba hoạt động liệt kê."
    },
    { id: 21, section: "III", type: "mcq", passage: "cloze1", blankNum: 21,
      prompt: "Choose the best word for blank (21).",
      display: { A: "our", B: "its", C: "his", D: "their" }, correct: "B",
      explanation: "\"Each group had <b>its</b> own culture\" — \"each\" luôn đi với động từ/đại từ số ít. Vì \"group\" (nhóm) là vật/tổ chức (không phải người) nên dùng đại từ sở hữu số ít <b>its</b>, không dùng \"their\" (số nhiều)."
    },
    { id: 22, section: "III", type: "mcq", passage: "cloze1", blankNum: 22,
      prompt: "Choose the best word for blank (22).",
      display: { A: "with", B: "of", C: "in", D: "for" }, correct: "D",
      explanation: "\"a fascinating journey <b>for</b> everyone who loves...\" — giới từ \"for\" chỉ đối tượng mà hành trình này hướng đến/dành cho."
    },

    // ---------------- SECTION IV (23-28) — reading ----------------
    { id: 23, section: "IV", type: "truefalse", passage: "reading1",
      prompt: "Traditional markets in Viet Nam show the lifestyle and culture of the local people.",
      correct: "True",
      explanation: "Đúng. Bài đọc nói: \"They reflect the life of the community\" (Chợ phản ánh đời sống của cộng đồng) → chợ truyền thống thể hiện lối sống và văn hoá của người dân địa phương."
    },
    { id: 24, section: "IV", type: "truefalse", passage: "reading1",
      prompt: "People only visit traditional markets when they need to buy or sell something.",
      correct: "False",
      explanation: "Sai. Bài đọc nêu rõ: \"many markets are not only about buying and selling things\" và người ta đến chợ \"to eat, drink, play games, and socialize\" — không chỉ để mua bán."
    },
    { id: 25, section: "IV", type: "truefalse", passage: "reading1",
      prompt: "Visitors can enjoy musical activities and dancing at Sa Pa Market.",
      correct: "True",
      explanation: "Đúng. Bài đọc viết: \"They buy things, play the flute, dance, and sing\" tại chợ Sa Pa → có hoạt động âm nhạc (thổi sáo, hát) và khiêu vũ."
    },
    { id: 26, section: "IV", type: "truefalse", passage: "reading1",
      prompt: "Floating markets in the Mekong Delta are most exciting in the late afternoon.",
      correct: "False",
      explanation: "Sai. Bài đọc nói thời điểm sôi động nhất là \"in the early morning\" (buổi sáng sớm), không phải chiều muộn."
    },
    { id: 27, section: "IV", type: "mcq", passage: "reading1",
      prompt: "What is the main idea of the passage?",
      display: {
        A: "Traditional markets in Viet Nam are not just for trading but also have cultural and social values.",
        B: "The differences between modern supermarkets and traditional markets in Viet Nam.",
        C: "How local craftsmen and farmers produce agricultural goods in different regions.",
        D: "The history of floating markets and why they are popular in the south of Viet Nam."
      },
      correct: "A",
      explanation: "Cả bài đọc xoay quanh ý: chợ truyền thống không chỉ để mua bán mà còn mang giá trị văn hoá, xã hội (nơi gặp gỡ, giao lưu, giải trí). Đây chính là ý chính của toàn bài, đáp án A. Các đáp án B, C, D chỉ là chi tiết nhỏ hoặc không được nhắc đến."
    },
    { id: 28, section: "IV", type: "mcq", passage: "reading1",
      prompt: "Which of the following is NOT true according to the passage?",
      display: {
        A: "Children often find traditional markets boring because they are too crowded.",
        B: "Sa Pa Market is also known by another name because people can look for lovers there.",
        C: "Countryside markets in the Mekong Delta take place on boats.",
        D: "People of different ages can find something interesting at a traditional market."
      },
      correct: "A",
      explanation: "Bài đọc nói ngược lại: chợ truyền thống \"is a new and exciting experience for children\" (là trải nghiệm mới mẻ, thú vị đối với trẻ em) chứ không hề \"boring\" (nhàm chán). → Đáp án A là câu SAI so với bài đọc, nên được chọn."
    },

    // ---------------- SECTION V (29-34) — word form ----------------
    { id: 29, section: "V", type: "fillblank",
      prompt: "Cultural ______________ is one of the most beautiful features of Viet Nam.",
      wordGiven: "diverse", accepted: ["diversity"], correct: "diversity",
      explanation: "Cần một <b>danh từ</b> làm chủ ngữ của câu (đứng sau tính từ \"Cultural\" và trước động từ \"is\"). <b>diverse</b> (adj, đa dạng) → <b>diversity</b> (n, sự đa dạng) bằng cách thêm hậu tố <b>-ity</b>. → \"Cultural diversity\" = sự đa dạng văn hoá."
    },
    { id: 30, section: "V", type: "fillblank",
      prompt: "The Muong people are famous for their ______________ wooden houses on stilts.",
      wordGiven: "tradition", accepted: ["traditional"], correct: "traditional",
      explanation: "Cần một <b>tính từ</b> đứng trước danh từ \"wooden houses\". <b>tradition</b> (n, truyền thống) → <b>traditional</b> (adj, mang tính truyền thống) bằng hậu tố <b>-al</b>."
    },
    { id: 31, section: "V", type: "fillblank",
      prompt: "______________, many small ethnic groups still preserve their unique languages perfectly.",
      wordGiven: "surprise", accepted: ["surprisingly"], correct: "Surprisingly",
      explanation: "Đứng đầu câu, bổ nghĩa cho cả câu phía sau → cần <b>trạng từ</b>. <b>surprise</b> (v/n) → <b>surprising</b> (adj) → <b>surprisingly</b> (adv, đáng ngạc nhiên là) bằng hậu tố <b>-ly</b>. Nhớ viết hoa chữ cái đầu vì đứng đầu câu."
    },
    { id: 32, section: "V", type: "fillblank",
      prompt: "My Son Sanctuary is a globally recognized cultural ______________ site.",
      wordGiven: "heritage", accepted: ["heritage"], correct: "heritage",
      explanation: "Từ cho sẵn \"heritage\" (di sản) vốn đã là danh từ và đứng làm định ngữ (danh từ bổ nghĩa cho danh từ khác) trước \"site\" → giữ nguyên không đổi dạng: \"cultural heritage site\" = di sản văn hoá."
    },
    { id: 33, section: "V", type: "fillblank",
      prompt: "Organizers are finalising the ______________ for the upcoming Cultural Exchange Day.",
      wordGiven: "prepare", accepted: ["preparation", "preparations"], correct: "preparation(s)",
      explanation: "Cần một <b>danh từ</b> làm tân ngữ của \"finalising\". <b>prepare</b> (v) → <b>preparation</b> (n, sự chuẩn bị) bằng hậu tố <b>-tion</b>. Có thể dùng số nhiều \"preparations\" (các công việc chuẩn bị) — cả hai dạng đều được chấp nhận."
    },
    { id: 34, section: "V", type: "fillblank",
      prompt: "The H'Mong women make beautiful, ______________ clothing with colorful patterns.",
      wordGiven: "impress", accepted: ["impressive"], correct: "impressive",
      explanation: "Cần một <b>tính từ</b> bổ nghĩa cho danh từ \"clothing\". <b>impress</b> (v, gây ấn tượng) → <b>impressive</b> (adj, ấn tượng) bằng hậu tố <b>-ive</b>."
    },

    // ---------------- SECTION VI (35-36) — dictionary entry ----------------
    { id: 35, section: "VI", type: "fillblank", passage: "costumeEntry",
      prompt: "For the museum's opening night, the staff wore ____________________ from the 18th century.",
      accepted: ["historical costumes", "historical costume"], correct: "historical costumes",
      explanation: "Từ điển cho ví dụ \"She wore an elaborate <b>historical costume</b>...\" — \"historical\" nghĩa là thuộc về một giai đoạn lịch sử, rất khớp với \"from the 18th century\" (từ thế kỷ 18). Vì chủ ngữ \"the staff\" số nhiều nên dùng \"costumes\" số nhiều."
    },
    { id: 36, section: "VI", type: "fillblank", passage: "costumeEntry",
      prompt: "At the international cultural fair, each participant proudly wears their ____________________.",
      accepted: ["national costume", "national costumes"], correct: "national costume",
      explanation: "Từ điển cho ví dụ \"She wears a traditional <b>national costume</b> for the festival.\" — \"national costume\" (trang phục dân tộc/quốc gia) rất phù hợp với ngữ cảnh một hội chợ văn hoá quốc tế, nơi mỗi người đại diện cho đất nước mình."
    },

    // ---------------- SECTION VII (37-40) — sentence rewriting ----------------
    { id: 37, section: "VII", type: "rewrite",
      prompt: "In this mountainous area, it often takes the students two hours to go to their boarding school.",
      starter: "How long",
      accepted: [
        "how long does it often take the students to go to their boarding school in this mountainous area",
        "how long does it take the students to go to their boarding school in this mountainous area"
      ],
      correct: "How long does it often take the students to go to their boarding school in this mountainous area?",
      explanation: "Cấu trúc gốc: <b>It takes + O + thời gian + to V</b> (mất bao nhiêu thời gian để làm gì). Muốn hỏi về khoảng thời gian, ta dùng: <b>How long + does/do + it take + O + to V...?</b><br>→ <i>How long does it often take the students to go to their boarding school in this mountainous area?</i>"
    },
    { id: 38, section: "VII", type: "rewrite",
      prompt: "The H'Mong traditional costumes are as colorful as their festivals.",
      starter: "The H'Mong traditional festivals",
      accepted: [
        "the h'mong traditional festivals are as colorful as their traditional costumes",
        "the hmong traditional festivals are as colorful as their traditional costumes"
      ],
      correct: "The H'Mong traditional festivals are as colorful as their traditional costumes.",
      explanation: "Cấu trúc so sánh ngang bằng: <b>A + is/are + as + adj + as + B</b>. Khi đảo ngược vị trí A và B, ý nghĩa so sánh vẫn giữ nguyên (A và B ngang bằng nhau về mức độ \"colorful\").<br>→ <i>The H'Mong traditional festivals are as colorful as their traditional costumes.</i>"
    },
    { id: 39, section: "VII", type: "rewrite",
      prompt: "Could you tell me the way to the traditional open-air market?",
      starter: "Could you tell me where",
      accepted: [
        "could you tell me where the traditional open-air market is",
        "could you tell me where the traditional open air market is"
      ],
      correct: "Could you tell me where the traditional open-air market is?",
      explanation: "Đây là câu hỏi gián tiếp (indirect/embedded question). Cấu trúc: <b>Could you tell me + từ để hỏi (where/what/how...) + S + V</b> (giữ trật tự từ xuôi, KHÔNG đảo ngữ như câu hỏi trực tiếp).<br>\"the way to a place\" ⇔ \"where a place is\"<br>→ <i>Could you tell me where the traditional open-air market is?</i>"
    },
    { id: 40, section: "VII", type: "rewrite",
      prompt: "Tet is the most important festival in Viet Nam.",
      starter: "No other festival",
      accepted: [
        "no other festival in viet nam is more important than tet",
        "no other festival in viet nam is as important as tet",
        "no other festival in vietnam is more important than tet",
        "no other festival in vietnam is as important as tet"
      ],
      correct: "No other festival in Viet Nam is more important than Tet. / No other festival in Viet Nam is as important as Tet.",
      explanation: "Chuyển so sánh nhất sang so sánh hơn/ngang bằng ở dạng phủ định: <b>S + is + the most + adj + N</b> → <b>No other + N + is + more + adj + than + S</b> (hoặc <b>is as + adj + as + S</b>). Cả hai cách đều giữ nguyên ý nghĩa \"Tet là lễ hội quan trọng nhất\".<br>→ <i>No other festival in Viet Nam is more important than Tet.</i>"
    }
  ]
};
