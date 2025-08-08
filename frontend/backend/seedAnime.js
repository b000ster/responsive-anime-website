require('dotenv').config();

const mongoose = require('mongoose');
const Anime = require('./models/Anime');

const mongoURI = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/responsiveAnimeDB';


const seedData = [
  // ============= 6 FEATURED / BANNERS =============
  {
    title: "One Piece",
    genres: ["Adventure", "Action", "Fantasy"],
    episodes: 1000,
    coverImage: "https://res.cloudinary.com/dbo1v8cqw/image/upload/v1754315446/anime%20photos/anime%20images/one_peice_ocymi5.jpg",
    bannerImage: "https://res.cloudinary.com/dbo1v8cqw/image/upload/v1754315446/anime%20photos/anime%20images/one_peice_ocymi5.jpg",
    description: "Luffy and his crew sail the Grand Line in search of the ultimate treasure.",
    section: "Featured",
  },
  {
    title: "Naruto",
    genres: ["Adventure", "Action", "Shounen"],
    episodes: 220,
    coverImage: "https://res.cloudinary.com/dbo1v8cqw/image/upload/v1754315445/anime%20photos/anime%20images/Naruto_ifkkml.jpg",
    bannerImage: "https://res.cloudinary.com/dbo1v8cqw/image/upload/v1754315445/anime%20photos/anime%20images/Naruto_ifkkml.jpg",
    description: "Naruto Uzumaki seeks recognition and dreams to become the Hokage.",
    section: "Featured",
  },
  {
    title: "Dragon Ball",
    genres: ["Adventure", "Martial Arts", "Action"],
    episodes: 153,
    coverImage: "https://res.cloudinary.com/dbo1v8cqw/image/upload/v1754315448/anime%20photos/anime%20images/DRAGON_BALL_tyi0e9.jpg",
    bannerImage: "https://res.cloudinary.com/dbo1v8cqw/image/upload/v1754315448/anime%20photos/anime%20images/DRAGON_BALL_tyi0e9.jpg",
    description: "Follow Goku’s action-packed journey to collect the Dragon Balls.",
    section: "Featured",
  },
  {
    title: "Blue Lock",
    genres: ["Sports", "Soccer", "Thriller"],
    episodes: 24,
    coverImage: "https://res.cloudinary.com/dbo1v8cqw/image/upload/v1754315446/anime%20photos/anime%20images/BLUE_LOCK_pmnswt.jpg",
    bannerImage: "https://res.cloudinary.com/dbo1v8cqw/image/upload/v1754315446/anime%20photos/anime%20images/BLUE_LOCK_pmnswt.jpg",
    description: "Japan’s top young soccer players compete to become the ultimate striker.",
    section: "Featured",
  },
  {
    title: "Solo Leveling",
    genres: ["Action", "Fantasy", "Supernatural"],
    episodes: 12,
    coverImage: "https://res.cloudinary.com/dbo1v8cqw/image/upload/v1754315447/anime%20photos/anime%20images/Solo_Leveling_kibh1k.jpg",
    bannerImage: "https://res.cloudinary.com/dbo1v8cqw/image/upload/v1754315447/anime%20photos/anime%20images/Solo_Leveling_kibh1k.jpg",
    description: "A weak hunter takes on dangerous dungeons to become the strongest.",
    section: "Featured",
  },
  {
    title: "Kuroko's Basketball",
    genres: ["Sports", "School", "Comedy"],
    episodes: 75,
    coverImage: "https://res.cloudinary.com/dbo1v8cqw/image/upload/v1754315444/anime%20photos/anime%20images/kuruko_s_basketball_ktpjfv.jpg",
    bannerImage: "https://res.cloudinary.com/dbo1v8cqw/image/upload/v1754315444/anime%20photos/anime%20images/kuruko_s_basketball_ktpjfv.jpg",
    description: "Kuroko and Kagami lead Seirin to the top of high school basketball.",
    section: "Featured",
  },

  // ============= ADVENTURE / ACTION =============
  {
    title: "Attack on Titan",
    genres: ["Action", "Drama", "Fantasy"],
    episodes: 87,
    coverImage: "https://res.cloudinary.com/dbo1v8cqw/image/upload/v1754315444/anime%20photos/anime%20images/Attack_on_titans_v4vpph.jpg",
    bannerImage: "",
    description: "Humanity fights for survival against giant man-eating Titans.",
    section: "Adventure",
  },
  {
    title: "Fullmetal Alchemist: Brotherhood",
    genres: ["Adventure", "Fantasy", "Drama"],
    episodes: 64,
    coverImage: "https://res.cloudinary.com/dbo1v8cqw/image/upload/v1754315449/anime%20photos/anime%20images/Fullmetal_Alchemist_Brotherhood_o26q8o.jpg",
    bannerImage: "",
    description: "Two brothers search for the Philosopher's Stone to restore their bodies.",
    section: "Adventure",
  },
  {
    title: "Hunter x Hunter",
    genres: ["Adventure", "Fantasy", "Action"],
    episodes: 148,
    coverImage: "https://res.cloudinary.com/dbo1v8cqw/image/upload/v1754315450/anime%20photos/anime%20images/Hunter_x_Hunter_nbjb3h.jpg",
    bannerImage: "",
    description: "Gon Freecss becomes a hunter to find his father.",
    section: "Adventure",
  },
  {
    title: "Vinland Saga",
    genres: ["Action", "Historical", "Drama"],
    episodes: 48,
    coverImage: "https://res.cloudinary.com/dbo1v8cqw/image/upload/v1754315450/anime%20photos/anime%20images/vinland_saga_alghkc.jpg",
    bannerImage: "",
    description: "Young Thorfinn’s viking revenge quest.",
    section: "Adventure"
  },
  {
    title: "Fairy Tail",
    genres: ["Adventure", "Magic", "Fantasy"],
    episodes: 328,
    coverImage: "https://res.cloudinary.com/dbo1v8cqw/image/upload/v1754315448/anime%20photos/anime%20images/Fairy_Tail_mdl64w.jpg",
    bannerImage: "",
    description: "Magical wizards go on thrilling adventures.",
    section: "Adventure",
  },
  {
    title: "Black Clover",
    genres: ["Action", "Magic", "Fantasy"],
    episodes: 170,
    coverImage: "https://res.cloudinary.com/dbo1v8cqw/image/upload/v1754315445/anime%20photos/anime%20images/Black_clover_nrgtoj.jpg",
    bannerImage: "",
    description: "Asta fights to become the Wizard King.",
    section: "Adventure",
  },
  {
    title: "Jujutsu Kaisen",
    genres: ["Action", "Supernatural", "Shounen"],
    episodes: 48,
    coverImage: "https://res.cloudinary.com/dbo1v8cqw/image/upload/v1754315451/anime%20photos/anime%20images/Jujutsu_Kaisen_papaxf.jpg",
    bannerImage: "",
    description: "A high school student battles curses with sorcery.",
    section: "Action",
  },
  {
    title: "Sword Art Online",
    genres: ["Sci-Fi", "Adventure", "Action"],
    episodes: 96,
    coverImage: "https://res.cloudinary.com/dbo1v8cqw/image/upload/v1754315448/anime%20photos/anime%20images/sword_art_online_a0mat4.jpg",
    bannerImage: "",
    description: "Players trapped inside a VRMMORPG fight to survive.",
    section: "Sci-Fi",
  },
  {
    title: "One Punch Man",
    genres: ["Action", "Comedy", "Superhero"],
    episodes: 24,
    coverImage: "https://res.cloudinary.com/dbo1v8cqw/image/upload/v1754315447/anime%20photos/anime%20images/One_punch_man_rvplst.jpg",
    bannerImage: "",
    description: "Saitama is a hero who can defeat anyone with one punch.",
    section: "Action",
  },
  {
    title: "Demon Slayer: Kimetsu no Yaiba",
    genres: ["Action", "Historical", "Supernatural"],
    episodes: 55,
    coverImage: "https://res.cloudinary.com/dbo1v8cqw/image/upload/v1754315447/anime%20photos/anime%20images/Demon_Slayer_Kimetsu_no_Yaiba_siz5sh.jpg",
    bannerImage: "",
    description: "Tanjiro Kamado seeks to save his demon-turned sister.",
    section: "Action",
  },
  {
    title: "Bleach",
    genres: ["Action", "Supernatural", "Shounen"],
    episodes: 366,
    coverImage: "https://res.cloudinary.com/dbo1v8cqw/image/upload/v1754315446/anime%20photos/anime%20images/Bleach_zedw9o.jpg",
    bannerImage: "",
    description: "Ichigo becomes a soul reaper and fights evil spirits.",
    section: "Action",
  },

  // ============= THRILLER / PSYCHOLOGICAL / HORROR =============
  {
    title: "Death Note",
    genres: ["Mystery", "Supernatural", "Psychological"],
    episodes: 37,
    coverImage: "https://res.cloudinary.com/dbo1v8cqw/image/upload/v1754315447/anime%20photos/anime%20images/death_note_ttw37n.jpg",
    bannerImage: "",
    description: "A notebook kills anyone whose name is written inside.",
    section: "Thriller",
  },
  {
    title: "Code Geass",
    genres: ["Mecha", "Psychological", "Action"],
    episodes: 50,
    coverImage: "https://res.cloudinary.com/dbo1v8cqw/image/upload/v1754315446/anime%20photos/anime%20images/Code_Geass_itqmuw.jpg",
    bannerImage: "",
    description: "Lelouch seeks to overthrow a dystopian empire.",
    section: "Thriller",
  },
  {
    title: "Steins;Gate",
    genres: ["Sci-Fi", "Thriller", "Drama"],
    episodes: 24,
    coverImage: "https://res.cloudinary.com/dbo1v8cqw/image/upload/v1754315448/anime%20photos/anime%20images/steins_gate_dsvjyh.jpg",
    bannerImage: "",
    description: "A group of friends discover time travel.",
    section: "Sci-Fi",
  },
  {
    title: "Tokyo Ghoul",
    genres: ["Horror", "Supernatural", "Psychological"],
    episodes: 48,
    coverImage: "https://res.cloudinary.com/dbo1v8cqw/image/upload/v1754315449/anime%20photos/anime%20images/tokyo_ghoul_zshj6g.jpg",
    bannerImage: "",
    description: "A student becomes part-ghoul after an attack.",
    section: "Thriller",
  },
  {
    title: "Parasyte -the maxim-",
    genres: ["Horror", "Sci-Fi", "Thriller"],
    episodes: 24,
    coverImage: "https://res.cloudinary.com/dbo1v8cqw/image/upload/v1754315447/anime%20photos/anime%20images/parasyte_the_maxim_wiewgh.jpg",
    bannerImage: "",
    description: "Alien parasites in the human world.",
    section: "Horror"
  },
  {
    title: "Monster",
    genres: ["Mystery", "Thriller", "Psychological"],
    episodes: 74,
    coverImage: "https://res.cloudinary.com/dbo1v8cqw/image/upload/v1754315445/anime%20photos/anime%20images/monster_wbcxpw.jpg",
    bannerImage: "",
    description: "A doctor sets out to stop a life he once saved.",
    section: "Thriller"
  },
  {
    title: "Gintama",
    genres: ["Action", "Comedy", "Sci-Fi"],
    episodes: 367,
    coverImage: "https://res.cloudinary.com/dbo1v8cqw/image/upload/v1754315450/anime%20photos/anime%20images/gintama_qzq88k.jpg",
    bannerImage: "",
    description: "An eccentric samurai and his friends do odd jobs.",
    section: "Comedy"
  },

  // ============= ROMANCE / DRAMA / SLICE OF LIFE =============
  {
    title: "Your Name",
    genres: ["Romance", "Supernatural", "Slice of Life"],
    episodes: 1,
    coverImage: "https://res.cloudinary.com/dbo1v8cqw/image/upload/v1754315451/anime%20photos/anime%20images/your_name_zoonei.jpg",
    bannerImage: "",
    description: "Two strangers linked across space and time.",
    section: "Romance",
  },
  {
    title: "Clannad: After Story",
    genres: ["Romance", "Drama", "Slice of Life"],
    episodes: 24,
    coverImage: "https://res.cloudinary.com/dbo1v8cqw/image/upload/v1754315446/anime%20photos/anime%20images/Clannad_After_Story_mdkcqs.jpg",
    bannerImage: "",
    description: "A young couple’s emotional journey.",
    section: "Romance",
  },
  {
    title: "Anohana: The Flower We Saw That Day",
    genres: ["Drama", "Supernatural", "Romance"],
    episodes: 11,
    coverImage: "https://res.cloudinary.com/dbo1v8cqw/image/upload/v1754315444/anime%20photos/anime%20images/Anohana_The_Flower_We_Saw_That_Day_kxfmrb.jpg",
    bannerImage: "",
    description: "Childhood friends, regrets, and a ghost.",
    section: "Romance",
  },
  {
    title: "Violet Evergarden",
    genres: ["Drama", "Slice of Life", "Romance"],
    episodes: 13,
    coverImage: "https://res.cloudinary.com/dbo1v8cqw/image/upload/v1754315450/anime%20photos/anime%20images/violet_evergarden_ufanno.jpg",
    bannerImage: "",
    description: "Wounded soldier learns about feelings through letters.",
    section: "Romance",
  },
  {
    title: "Fruits Basket (2019)",
    genres: ["Romance", "Drama", "Supernatural"],
    episodes: 63,
    coverImage: "https://res.cloudinary.com/dbo1v8cqw/image/upload/v1754315449/anime%20photos/anime%20images/This_Fruits_Basket_ebnqnv.jpg",
    bannerImage: "",
    description: "Girl befriends a zodiac-cursed family.",
    section: "Romance",
  },
  {
    title: "Toradora!",
    genres: ["Romance", "Comedy", "Slice of Life"],
    episodes: 25,
    coverImage: "https://res.cloudinary.com/dbo1v8cqw/image/upload/v1754315450/anime%20photos/anime%20images/Toradora_pqezhb.jpg",
    bannerImage: "",
    description: "Unlikely pair helps each other with romance.",
    section: "Romance",
  },
  {
    title: "March Comes in Like a Lion",
    genres: ["Drama", "Slice of Life"],
    episodes: 44,
    coverImage: "https://res.cloudinary.com/dbo1v8cqw/image/upload/v1754315445/anime%20photos/anime%20images/March_Comes_in_Like_a_Lion_sdv6ti.jpg",
    bannerImage: "",
    description: "Shogi, healing, and newfound family.",
    section: "Drama",
  },
  {
    title: "Oshi no Ko",
    genres: ["Drama", "Idol", "Supernatural"],
    episodes: 11,
    coverImage: "https://res.cloudinary.com/dbo1v8cqw/image/upload/v1754315447/anime%20photos/anime%20images/oshi_no_ko_ablv1d.jpg",
    bannerImage: "",
    description: "Reborn as an idol’s baby, seeking justice.",
    section: "Drama",
  },

  // ============= SCI-FI / FANTASY / ISEKAI =============
  {
    title: "Neon Genesis Evangelion",
    genres: ["Mecha", "Psychological", "Drama", "Sci-Fi"],
    episodes: 26,
    coverImage: "https://res.cloudinary.com/dbo1v8cqw/image/upload/v1754315446/anime%20photos/anime%20images/Neon_Genesis_Evangelion_ij8gew.jpg",
    bannerImage: "",
    description: "Teens pilot mechs to save mankind.",
    section: "Sci-Fi",
  },
  {
    title: "Akame ga Kill!",
    genres: ["Action", "Fantasy", "Drama"],
    episodes: 24,
    coverImage: "https://res.cloudinary.com/dbo1v8cqw/image/upload/v1754315444/anime%20photos/anime%20images/akame_ga_kill_iqlzik.jpg",
    bannerImage: "",
    description: "A rebel team topples a corrupt empire.",
    section: "Fantasy",
  },
  {
    title: "Made in Abyss",
    genres: ["Adventure", "Dark Fantasy", "Drama"],
    episodes: 25,
    coverImage: "https://res.cloudinary.com/dbo1v8cqw/image/upload/v1754315445/anime%20photos/anime%20images/Made_in_Abyss_mwxd1r.jpg",
    bannerImage: "",
    description: "Orphan and robot descend a deadly abyss.",
    section: "Fantasy",
  },
  {
    title: "Bungo Stray Dogs",
    genres: ["Action", "Supernatural", "Mystery"],
    episodes: 61,
    coverImage: "https://res.cloudinary.com/dbo1v8cqw/image/upload/v1754315446/anime%20photos/anime%20images/bungo_stray_dongs_zhd6uq.jpg",
    bannerImage: "",
    description: "Detectives solve cases with supernatural gifts.",
    section: "Supernatural",
  },
  {
    title: "Frieren: Beyond Journey's End",
    genres: ["Adventure", "Drama", "Fantasy"],
    episodes: 28,
    coverImage: "https://res.cloudinary.com/dbo1v8cqw/image/upload/v1754315448/anime%20photos/anime%20images/frieren_nypjxp.jpg",
    bannerImage: "",
    description: "Elf mage looks back after the hero’s quest.",
    section: "Fantasy",
  },
  {
    title: "Re:Zero",
    genres: ["Isekai", "Drama", "Fantasy"],
    episodes: 50,
    coverImage: "https://res.cloudinary.com/dbo1v8cqw/image/upload/v1754315447/anime%20photos/anime%20images/Re_Zero_fxiykb.jpg",
    bannerImage: "",
    description: "Guy endlessly revives in another world.",
    section: "Isekai",
  },
  {
    title: "The Rising of the Shield Hero",
    genres: ["Adventure", "Drama", "Isekai"],
    episodes: 38,
    coverImage: "https://res.cloudinary.com/dbo1v8cqw/image/upload/v1754315449/anime%20photos/anime%20images/The_Rising_of_the_sheild_hero_xo4am2.jpg",
    bannerImage: "",
    description: "Framed hero must rise against all odds.",
    section: "Isekai",
  },

  // ============= MYSTERY / DARK FANTASY / DRAMA =============
  {
    title: "The Promised Neverland",
    genres: ["Thriller", "Mystery", "Drama"],
    episodes: 23,
    coverImage: "https://res.cloudinary.com/dbo1v8cqw/image/upload/v1754315449/anime%20photos/anime%20images/The_Promised_Neverland_isanvo.jpg",
    bannerImage: "",
    description: "Orphans discover a terrifying truth.",
    section: "Thriller"
  },
  {
    title: "Hyouka",
    genres: ["Mystery", "Slice of Life", "School"],
    episodes: 22,
    coverImage: "https://res.cloudinary.com/dbo1v8cqw/image/upload/v1754315451/anime%20photos/anime%20images/Hyouka_frzfmq.jpg",
    bannerImage: "",
    description: "Student detectives unravel everyday puzzles.",
    section: "Mystery"
  },
  {
    title: "Dorohedoro",
    genres: ["Action", "Horror", "Dark Fantasy"],
    episodes: 12,
    coverImage: "https://res.cloudinary.com/dbo1v8cqw/image/upload/v1754315448/anime%20photos/anime%20images/dorohedoro_umj7ak.jpg",
    bannerImage: "",
    description: "A man and friend fight magic-users in a bizarre city.",
    section: "Dark Fantasy"
  },
  {
    title: "Hell's Paradise: Jigokuraku",
    genres: ["Action", "Supernatural", "Dark Fantasy"],
    episodes: 13,
    coverImage: "https://res.cloudinary.com/dbo1v8cqw/image/upload/v1754315450/anime%20photos/anime%20images/Hell_s_Paradise_Jigokuraku_pqhfmf.jpg",
    bannerImage: "",
    description: "Ninja joins a team to find the elixir of life.",
    section: "New"
  },

  // ============= SCHOOL LIFE / COMEDY =============
  {
    title: "Great Teacher Onizuka",
    genres: ["Comedy", "School", "Slice of Life"],
    episodes: 43,
    coverImage: "https://res.cloudinary.com/dbo1v8cqw/image/upload/v1754315449/anime%20photos/anime%20images/Great_Teacher_Onizuka_da176e.jpg",
    bannerImage: "",
    description: "Ex-gangster becomes a legendary (and wild) teacher.",
    section: "Comedy"
  },

  // ============= SPORTS ANIME =============
  {
    title: "Haikyuu!!",
    genres: ["Sports", "Volleyball", "School"],
    episodes: 85,
    coverImage: "https://res.cloudinary.com/dbo1v8cqw/image/upload/v1754315450/anime%20photos/anime%20images/Haikyuu_zvxccw.jpg",
    bannerImage: "",
    description: "Shoyo dreams of soaring as a spiker.",
    section: "Sports Anime"
  },
  {
    title: "Yuri on Ice",
    genres: ["Sports", "Drama", "Romance"],
    episodes: 12,
    coverImage: "https://res.cloudinary.com/dbo1v8cqw/image/upload/v1754315451/anime%20photos/anime%20images/Yuri_on_ice_jbbmej.jpg",
    bannerImage: "",
    description: "Nervous skater finds love and confidence on ice.",
    section: "Sports Anime"
  },
  {
    title: "Slam Dunk",
    genres: ["Sports", "Basketball", "Comedy"],
    episodes: 101,
    coverImage: "https://res.cloudinary.com/dbo1v8cqw/image/upload/v1754315448/anime%20photos/anime%20images/Slam_Dunk_zs9d90.jpg",
    bannerImage: "",
    description: "Gangster Sakuragi crashes into high school basketball greatness.",
    section: "Sports Anime"
  },
  {
    title: "Free!",
    genres: ["Sports", "School", "Slice of Life"],
    episodes: 12,
    coverImage: "https://res.cloudinary.com/dbo1v8cqw/image/upload/v1754315448/anime%20photos/anime%20images/Free_ppjpui.jpg",
    bannerImage: "",
    description: "Friends reunite for competitive swimming.",
    section: "Sports Anime"
  },
  {
    title: "Ace of Diamond",
    genres: ["Sports", "Baseball", "School"],
    episodes: 126,
    coverImage: "https://res.cloudinary.com/dbo1v8cqw/image/upload/v1754315672/anime%20photos/anime%20images/ace_of_diamonds_ofo08c.jpg",
    bannerImage: "",
    description: "Eijun trains to become a baseball ace.",
    section: "Sports Anime"
  }
];

mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(async () => {
    console.log('MongoDB connected for seeding!');
    await Anime.deleteMany({});
    await Anime.insertMany(seedData);
    console.log(`${seedData.length} anime seeded successfully.`);
    mongoose.disconnect();
  })
  .catch((err) => {
    console.error('Seeding error:', err);
  });
