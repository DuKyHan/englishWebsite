const TEST = {
  id: "test12",
  grade: "Grade 8 — Global Success",
  unit: "Unit 3: Teenagers",
  title: "Grade 8 · Unit 3: Teenagers · Test 2",
  duration: 35,
  totalPoints: 10,
  reviewPage: "review_test12.html",
  instructions: [
    "Bài kiểm tra gồm 40 câu, chia thành 7 phần (I → VII), tổng 10 điểm.",
    "Bấm chọn đáp án A/B/C/D cho câu trắc nghiệm, hoặc gõ câu trả lời vào ô trống cho câu điền từ / viết lại câu.",
    "Em có thể dùng nút Previous / Next hoặc bấm số câu ở bảng điều hướng để di chuyển giữa các câu.",
    "Khi hết giờ, bài làm sẽ tự động được nộp.",
    "Sau khi nộp bài, em sẽ thấy điểm số, đáp án đúng và giải thích chi tiết cho từng câu."
  ],
  sections: [
    { id: "I", title: "Choose the word / phrase / sentence (A, B, C or D) that best fits the space or best answers the question given in each sentence.", points: "3.5 pts", range: [1, 14] },
    { id: "II", title: "Look at the sign or the notice. Choose the best answer (A, B, C or D).", points: "0.5 pt", range: [15, 16] },
    { id: "III", title: "Choose the word (A, B, C or D) that best fits each space in the following passage.", points: "1.5 pts", range: [17, 22] },
    { id: "IV", title: "Read the passage. Decide True/False (23–26) and choose the best answer (27–28).", points: "1.5 pts", range: [23, 28] },
    { id: "V", title: "Use the correct form of the word given in each sentence.", points: "1.5 pts", range: [29, 34] },
    { id: "VI", title: "Look at the dictionary entry of “bully”. Complete the sentences with no more than three words.", points: "0.5 pt", range: [35, 36] },
    { id: "VII", title: "Rewrite each sentence so that it means almost the same as the sentence printed before it.", points: "1.0 pt", range: [37, 40] }
  ],
  passages: {
    studyTechniquesCloze: "Studying often adds stress to my life due to the pressure of performing well and the fear of failure. The overwhelming amount of information to absorb and retain can be very difficult at times. To tackle this problem, I have adopted (17) ________ effective study techniques.<br><br>First, teenagers (18) ________ to have a balanced diet with plenty of fruits and vegetables. Eating healthy foods will contribute (19) ________ our energy levels and overall health. Second, engaging in regular physical activity, like playing sports or exercising, is also (20) ________ recommended because it is a good release for stress. Exercise increases certain chemicals in the brain which calm you down.<br><br>Additionally, practicing self-care by prioritizing enough sleep every night helps me maintain a productive (21) ________. Utilizing online resources or seeking support from peers by forming study groups can also alleviate pressure. By breaking down the learning material into smaller sections and creating a (22) ________ study schedule, school will no longer be a major source of anxiety.",
    teenStressReading: "<b>TEEN STRESS</b><br><br>Teenagers today live in a very competitive world. It is more important than ever to succeed at school if you hope to have a chance in the job market afterwards. It's no wonder that many young people worry about letting down their parents, their peers and themselves. To try to please everyone, they take on too many tasks until it becomes harder and harder to balance homework assignments, parties, sports activities, and friends. The result is that young people suffer from stress.<br><br>There are different ways of dealing with stress. Everyone knows that caffeine, in the form of coffee or soft drinks, keeps you awake and alert. But caffeine is a drug which can become addictive. In the end, like other drugs, caffeine only leads to more stress. There are better ways to deal with stress: physical exercise is a good release for stress, because it increases certain chemicals in the brain which calm you down. You have to get enough sleep to avoid stress and to stay healthy and full of energy.<br><br>Another way to avoid stress is to manage your time effectively. It is better to do a few tasks really well, than lots of tasks badly. Know your limits and try not to take on too much. Finally, if it all gets beyond your control, don't panic or get hysterical. Find the time to sit down quietly and breathe deeply for ten to twenty minutes. Do this regularly, and it will help you calm down and put things into perspective.",
    bullyEntry: {
      word: "bully", ipa: "/ˈbʊli/", pos: "verb",
      def: "to frighten or hurt a weaker person; to use your strength or power to make somebody do something",
      examples: [
        "Bullying is a problem in many schools — some students <b>bully their classmates</b>.",
        "He was <b>bullied into signing</b> the contract by his boss.",
        "She refused to be <b>bullied by threats</b> of violence.",
        "The older boys used to <b>cyberbully younger students</b> on social media."
      ]
    }
  },
  images: {
    signTreePlanting: "assets/images/sign_tree_planting.jpg",
    signLibrarySilent: "assets/images/sign_library_silent.jpg"
  },
  questions: [
    // ---------------- SECTION I (1-14) ----------------
    { id: 1, section: "I", type: "mcq",
      prompt: "Which word has the underlined part pronounced differently from that of the others?",
      display: { A: "soup", B: "wound", C: "group", D: "tour" },
      correct: "D",
      explanation: "\"ou\" trong \"soup\" /suːp/, \"wound\" /wuːnd/, \"group\" /ɡruːp/ đều phát âm là <b>/uː/</b>. Riêng \"tour\" /tʊər/ có \"ou\" phát âm khác → khác biệt, đáp án D."
    },
    { id: 2, section: "I", type: "mcq",
      prompt: "Which word has the underlined part pronounced differently from that of the others?",
      display: { A: "picture", B: "account", C: "art", D: "parental" },
      correct: "B",
      explanation: "Theo đáp án gốc, phần gạch chân trong \"account\" phát âm khác với \"picture\", \"art\", \"parental\" → đáp án B."
    },
    { id: 3, section: "I", type: "mcq",
      prompt: "Which word has a different stress pattern from that of the others?",
      display: { A: "personal", B: "technical", C: "practical", D: "creative" },
      correct: "D",
      explanation: "\"personal\" /ˈpɜːrsənl/, \"technical\" /ˈteknɪkl/, \"practical\" /ˈpræktɪkl/ đều có trọng âm rơi vào <b>âm tiết 1</b>. Riêng \"creative\" /kriˈeɪtɪv/ có trọng âm rơi vào <b>âm tiết 2</b> → khác biệt, đáp án D."
    },
    { id: 4, section: "I", type: "mcq",
      prompt: "Which word has a different stress pattern from that of the others?",
      display: { A: "connect", B: "suffer", C: "focus", D: "bully" },
      correct: "A",
      explanation: "\"suffer\" /ˈsʌfər/, \"focus\" /ˈfoʊkəs/, \"bully\" /ˈbʊli/ đều có trọng âm rơi vào <b>âm tiết 1</b>. Riêng \"connect\" /kəˈnekt/ có trọng âm rơi vào <b>âm tiết 2</b> → khác biệt, đáp án A."
    },
    { id: 5, section: "I", type: "mcq",
      context: "Tom: \"I see the teacher talking to everyone about the upcoming test.\"",
      prompt: "Nam: \"Yes, she asks the whole class to ______ on studying to prepare well for it.\"",
      display: { A: "focus", B: "connect", C: "advise", D: "coach" },
      correct: "A",
      explanation: "\"<b>focus</b> on studying\" (tập trung vào việc học) là cụm động từ cố định."
    },
    { id: 6, section: "I", type: "mcq",
      context: "Lan: \"Do you know why ______ teenagers today use Facebook or TikTok?\"",
      prompt: "Minh: \"Well, most of them have at least one social media account for entertainment.\"",
      display: { A: "much", B: "most", C: "lots", D: "every" },
      correct: "B",
      explanation: "\"<b>most</b> teenagers\" (hầu hết thanh thiếu niên) là lượng từ đứng trước danh từ số nhiều không cần \"of the\"."
    },
    { id: 7, section: "I", type: "mcq",
      context: "An: \"How do you often update your new photos and talk to your friends?\"",
      prompt: "Hoa: \"I usually log ______ to my personal account to post things and chat with everyone.\"",
      display: { A: "on", B: "with", C: "about", D: "at" },
      correct: "A",
      explanation: "\"log <b>on</b> to\" (đăng nhập vào) là cụm động từ cố định."
    },
    { id: 8, section: "I", type: "mcq",
      context: "Peter: \"Your father is a construction engineer, isn't he?\"",
      prompt: "Mary: \"Yes, ______ he often has to work away from home on big projects.\"",
      display: { A: "and", B: "so", C: "but", D: "or" },
      correct: "B",
      explanation: "\"<b>so</b>\" nối kết quả (là kỹ sư xây dựng → thường phải đi công tác xa nhà)."
    },
    { id: 9, section: "I", type: "mcq",
      context: "Jane: \"Are those two girls still close to each other?\"",
      prompt: "Kelly: \"They used to be very good friends, ______ now they are not anymore.\"",
      display: { A: "but", B: "or", C: "and", D: "so" },
      correct: "A",
      explanation: "\"<b>but</b>\" thể hiện sự tương phản giữa quá khứ (bạn thân) và hiện tại (không còn thân nữa)."
    },
    { id: 10, section: "I", type: "mcq",
      context: "Phong: \"Why shouldn't I comment on his new shoes?\"",
      prompt: "Quan: \"Because Ann is very sensitive; ______, you might easily hurt his feelings.\"",
      display: { A: "therefore", B: "so", C: "but", D: "however" },
      correct: "A",
      explanation: "\"<b>therefore</b>\" (do đó) nối kết quả logic (nhạy cảm → dễ tổn thương)."
    },
    { id: 11, section: "I", type: "mcq",
      context: "Binh: \"I stayed up very late last night studying for this important English exam.\"",
      prompt: "Jack: \"______ Stay calm, everything will be all right!\"",
      display: { A: "You're welcome.", B: "Well done!", C: "A really great job.", D: "I know how you feel." },
      correct: "D",
      explanation: "\"<b>I know how you feel.</b>\" thể hiện sự đồng cảm, phù hợp trước lời động viên \"Stay calm...\"."
    },
    { id: 12, section: "I", type: "mcq",
      context: "Laura: \"Why did you turn on the desk lamp?\"",
      prompt: "David: \"It was getting dark in the room, ______ I switched on the light to read.\"",
      display: { A: "for", B: "so", C: "nor", D: "but" },
      correct: "B",
      explanation: "\"<b>so</b>\" nối kết quả (trời tối → bật đèn)."
    },
    { id: 13, section: "I", type: "mcq",
      context: "Alex: \"I feel so stressed out with the heavy school workload this semester.\"",
      prompt: "Ben: \"______\"",
      display: {
        A: "I don't think it is important.",
        B: "It's difficult for many teenagers.",
        C: "Don't panic. You should manage your time.",
        D: "No problem, I can do it well."
      },
      correct: "C",
      explanation: "\"<b>Don't panic. You should manage your time.</b>\" đưa ra lời khuyên hữu ích, phù hợp khi ai đó chia sẻ cảm giác căng thẳng."
    },
    { id: 14, section: "I", type: "mcq",
      context: "Teacher: \"We need to finish our group presentation by this Friday afternoon.\"",
      prompt: "Student: \"_______\"",
      display: {
        A: "Yes, the presentation was organized successfully by our class last week.",
        B: "Don't worry, we are breaking down the material into smaller sections now.",
        C: "Studying often adds stress to my daily life because of the peer pressure.",
        D: "Parents ought to listen to their children more carefully to know their limits."
      },
      correct: "B",
      explanation: "\"<b>Don't worry, we are breaking down the material into smaller sections now.</b>\" trả lời trực tiếp, trấn an giáo viên rằng nhóm đang chuẩn bị đúng tiến độ."
    },

    // ---------------- SECTION II (15-16) — signs/notices ----------------
    { id: 15, section: "II", type: "mcq", image: "signTreePlanting",
      prompt: "What does this sign tell you to do?",
      display: {
        A: "You must use heavy machinery to remove trees.",
        B: "You should not cut down any big plants here.",
        C: "You should plant new green trees in this area.",
        D: "You should not dig up the ground in this area."
      },
      correct: "D",
      explanation: "Biển ghi \"TREE PLANTING ZONE — DO NOT DIG\" (Khu trồng cây — Không đào bới) → đáp án D."
    },
    { id: 16, section: "II", type: "mcq", image: "signLibrarySilent",
      prompt: "What does this notification from the school library mean?",
      display: {
        A: "You can return or check out reference books.",
        B: "You are allowed to talk quietly with your peers.",
        C: "You cannot use the computer devices at this time.",
        D: "You can read newspapers loudly with your friends."
      },
      correct: "C",
      explanation: "Biển ghi \"LIBRARY SILENT STUDY AREA — NO COMPUTERS OR BOOK CHECK-OUTS\" (Khu vực học yên tĩnh — Không dùng máy tính hoặc mượn sách) → đáp án C."
    },

    // ---------------- SECTION III (17-22) — cloze passage ----------------
    { id: 17, section: "III", type: "mcq", passage: "studyTechniquesCloze", blankNum: 17,
      prompt: "Choose the best word for blank (17).",
      display: { A: "little", B: "much", C: "several", D: "every" },
      correct: "C",
      explanation: "\"I have adopted <b>several</b> effective study techniques\" (áp dụng một vài phương pháp) — \"several\" + danh từ đếm được số nhiều."
    },
    { id: 18, section: "III", type: "mcq", passage: "studyTechniquesCloze", blankNum: 18,
      prompt: "Choose the best word for blank (18).",
      display: { A: "should", B: "have", C: "must", D: "ought" },
      correct: "D",
      explanation: "\"teenagers <b>ought</b> to have a balanced diet\" — \"ought to\" (nên) là cụm động từ khuyết thiếu cố định."
    },
    { id: 19, section: "III", type: "mcq", passage: "studyTechniquesCloze", blankNum: 19,
      prompt: "Choose the best word for blank (19).",
      display: { A: "with", B: "on", C: "to", D: "for" },
      correct: "C",
      explanation: "\"contribute <b>to</b>\" (góp phần vào) là cụm giới từ cố định."
    },
    { id: 20, section: "III", type: "mcq", passage: "studyTechniquesCloze", blankNum: 20,
      prompt: "Choose the best word for blank (20).",
      display: { A: "deeply", B: "highly", C: "strongly", D: "heavily" },
      correct: "B",
      explanation: "\"is also <b>highly</b> recommended\" (được khuyến khích rất nhiều) — \"highly recommended\" là cụm cố định."
    },
    { id: 21, section: "III", type: "mcq", passage: "studyTechniquesCloze", blankNum: 21,
      prompt: "Choose the best word for blank (21).",
      display: { A: "memory", B: "purpose", C: "opinion", D: "mindset" },
      correct: "D",
      explanation: "\"maintain a productive <b>mindset</b>\" (duy trì tư duy tích cực, hiệu quả) phù hợp với ngữ cảnh về học tập và tự chăm sóc bản thân."
    },
    { id: 22, section: "III", type: "mcq", passage: "studyTechniquesCloze", blankNum: 22,
      prompt: "Choose the best word for blank (22).",
      display: { A: "imaginative", B: "temporary", C: "traditional", D: "realistic" },
      correct: "D",
      explanation: "\"creating a <b>realistic</b> study schedule\" (lập thời gian biểu thực tế) phù hợp với việc giảm bớt lo âu trong học tập."
    },

    // ---------------- SECTION IV (23-28) — reading ----------------
    { id: 23, section: "IV", type: "truefalse", passage: "teenStressReading",
      prompt: "School success is less important nowadays because there are many jobs available.",
      correct: "False",
      explanation: "Sai. Bài đọc: \"It is <b>more</b> important than ever to succeed at school if you hope to have a chance in the job market.\""
    },
    { id: 24, section: "IV", type: "truefalse", passage: "teenStressReading",
      prompt: "Doing physical exercise helps reduce stress because of the chemicals it produces in the brain.",
      correct: "True",
      explanation: "Đúng. Bài đọc: \"physical exercise is a good release for stress, because it increases certain chemicals in the brain which calm you down.\""
    },
    { id: 25, section: "IV", type: "truefalse", passage: "teenStressReading",
      prompt: "Drinking coffee or soft drinks is the best long-term solution to cure teenager stress.",
      correct: "False",
      explanation: "Sai. Bài đọc: \"caffeine only leads to <b>more</b> stress\" trong dài hạn, không phải giải pháp tốt nhất."
    },
    { id: 26, section: "IV", type: "truefalse", passage: "teenStressReading",
      prompt: "Sitting quietly and breathing deeply can help you feel calmer when you lose control.",
      correct: "True",
      explanation: "Đúng. Bài đọc: \"Find the time to sit down quietly and breathe deeply... it will help you calm down.\""
    },
    { id: 27, section: "IV", type: "mcq", passage: "teenStressReading",
      prompt: "What is the main idea of the passage?",
      display: {
        A: "The reasons why teenagers suffer from stress and the ways they can manage it.",
        B: "The dangerous effects of caffeine on teenagers' school performance.",
        C: "How to find a good job in a highly competitive world after finishing school.",
        D: "The importance of balancing homework assignments and going to parties."
      },
      correct: "A",
      explanation: "Bài đọc giải thích nguyên nhân gây stress ở thanh thiếu niên và đưa ra nhiều cách xử lý (tập thể dục, ngủ đủ, quản lý thời gian, hít thở sâu) → đáp án A bao quát toàn bài."
    },
    { id: 28, section: "IV", type: "mcq", passage: "teenStressReading",
      prompt: "Which of the following is NOT true according to the passage?",
      display: {
        A: "It is recommended to complete a large number of tasks at the same time to save time.",
        B: "Teenagers often worry about disappointing their parents, friends, and themselves.",
        C: "Lack of sleep can prevent teenagers from staying healthy and energetic.",
        D: "Caffeine can make people become addicted and cause more stress in the end."
      },
      correct: "A",
      explanation: "Bài đọc khuyên ngược lại: \"It is better to do a few tasks really well, than lots of tasks badly\" — không nên ôm đồm nhiều việc cùng lúc → câu A SAI."
    },

    // ---------------- SECTION V (29-34) — word form ----------------
    { id: 29, section: "V", type: "fillblank",
      prompt: "Teenagers today live in a highly ________________ world where success is vital.",
      wordGiven: "compete", accepted: ["competitive"], correct: "competitive",
      explanation: "Cần tính từ đứng trước danh từ \"world\". <b>compete</b> (v) → <b>competitive</b> (adj, +itive): cạnh tranh."
    },
    { id: 30, section: "V", type: "fillblank",
      prompt: "Many young people worry about letting down their parents and ________________.",
      wordGiven: "peer", accepted: ["peers"], correct: "peers",
      explanation: "Cần danh từ số nhiều song song với \"parents\". <b>peer</b> (n, số nhiều: peers): bạn bè cùng trang lứa."
    },
    { id: 31, section: "V", type: "fillblank",
      prompt: "Drinking too much coffee can be very ________________, so you should avoid it.",
      wordGiven: "addict", accepted: ["addictive"], correct: "addictive",
      explanation: "Cần tính từ đứng sau \"very\". <b>addict</b> (n/v) → <b>addictive</b> (adj, +ive): gây nghiện."
    },
    { id: 32, section: "V", type: "fillblank",
      prompt: "Regular exercise helps teenagers maintain their physical ________________.",
      wordGiven: "well", accepted: ["well-being", "wellbeing"], correct: "well-being",
      explanation: "Cần danh từ làm tân ngữ của \"maintain\". <b>well</b> (adv) → <b>well-being</b> (n): sự khỏe mạnh, hạnh phúc."
    },
    { id: 33, section: "V", type: "fillblank",
      prompt: "To avoid stress, you need to manage your study time ________________.",
      wordGiven: "effect", accepted: ["effectively"], correct: "effectively",
      explanation: "Cần trạng từ bổ nghĩa cho động từ \"manage\". <b>effect</b> (n) → <b>effectively</b> (adv, +ive +ly): một cách hiệu quả."
    },
    { id: 34, section: "V", type: "fillblank",
      prompt: "When things get beyond your control, don't panic or get ________________.",
      wordGiven: "hysteria", accepted: ["hysterical"], correct: "hysterical",
      explanation: "Cần tính từ đứng sau \"get\". <b>hysteria</b> (n) → <b>hysterical</b> (adj, +al): kích động, mất kiểm soát."
    },

    // ---------------- SECTION VI (35-36) — dictionary entry ----------------
    { id: 35, section: "VI", type: "fillblank", passage: "bullyEntry",
      prompt: "With the rise of smartphones, it has become easier for teenagers to ____________________, which causes severe mental health issues.",
      accepted: ["cyberbully younger students"], correct: "cyberbully younger students",
      explanation: "Từ điển cho ví dụ \"The older boys used to <b>cyberbully younger students</b> on social media.\" — khớp với ngữ cảnh smartphone và bắt nạt trên mạng."
    },
    { id: 36, section: "VI", type: "fillblank", passage: "bullyEntry",
      prompt: "The school has a strict rule against students who try to ____________________ during break time.",
      accepted: ["bully their classmates"], correct: "bully their classmates",
      explanation: "Từ điển cho ví dụ \"some students <b>bully their classmates</b>.\" — khớp với ngữ cảnh quy định của nhà trường."
    },

    // ---------------- SECTION VII (37-40) — sentence rewriting ----------------
    { id: 37, section: "VII", type: "rewrite",
      prompt: "Although teens don't know how to avoid bullies, they don't want to tell their teachers.",
      starter: "Teens don't know how",
      accepted: ["teens don't know how to avoid bullies, but they don't want to tell their teachers"],
      correct: "Teens don't know how to avoid bullies, but they don't want to tell their teachers.",
      explanation: "\"Although + mệnh đề A, mệnh đề B\" chuyển thành \"mệnh đề A, <b>but</b> mệnh đề B\" — cùng diễn tả sự tương phản.<br>→ <i>Teens don't know how to avoid bullies, but they don't want to tell their teachers.</i>"
    },
    { id: 38, section: "VII", type: "rewrite",
      prompt: "If you don't stop spending so much time playing video games, you will get addicted.",
      starter: "You should stop",
      accepted: ["you should stop spending so much time playing video games, or you will get addicted"],
      correct: "You should stop spending so much time playing video games, or you will get addicted.",
      explanation: "Câu điều kiện \"If you don't V, ...\" chuyển thành mệnh lệnh khuyên nhủ \"<b>You should stop V-ing, or...</b>\" — cùng cảnh báo hậu quả nếu không dừng lại.<br>→ <i>You should stop spending so much time playing video games, or you will get addicted.</i>"
    },
    { id: 39, section: "VII", type: "rewrite",
      prompt: "It is very important for teenagers to develop essential social skills.",
      starter: "Developing essential",
      accepted: ["developing essential social skills is very important for teenagers"],
      correct: "Developing essential social skills is very important for teenagers.",
      explanation: "\"It is + adj + for sb + to V\" chuyển thành danh động từ làm chủ ngữ \"<b>V-ing ... is + adj + for sb</b>\" — cùng nghĩa.<br>→ <i>Developing essential social skills is very important for teenagers.</i>"
    },
    { id: 40, section: "VII", type: "rewrite",
      prompt: "Parents ought to listen to their children more carefully.",
      starter: "Children ought",
      accepted: ["children ought to be listened to more carefully by their parents"],
      correct: "Children ought to be listened to more carefully by their parents.",
      explanation: "Câu chủ động \"Parents ought to listen to their children\" chuyển thành câu bị động \"<b>Children ought to be listened to ... by their parents</b>\" — cùng nghĩa, đổi trọng tâm câu.<br>→ <i>Children ought to be listened to more carefully by their parents.</i>"
    }
  ]
};
