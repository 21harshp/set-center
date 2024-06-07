import xlsx from 'xlsx';
import fs from 'fs';

// Your JSON data
const data = [
    {
      "companyId": "65377cb707261dc34a88d7e7",
      "companyName": "株式会社第一広房TOKYO(サイン部)",
      "companyOccupationBefore": [
        {
          "_id": "64a244765ce4869a0cce4abb",
          "name": "サイン・加工"
        },
        {
          "_id": "64a244765ce4869a0cce4ac0",
          "name": "サインオペレーター（DTP）"
        },
        {
          "_id": "64a244765ce4869a0cce4ac5",
          "name": "サイン・貼り手"
        }
      ],
      "companyOccupationAfter": [
        {
          "_id": "64a244765ce4869a0cce4ac0",
          "name": "サインオペレーター（DTP）"
        },
        {
          "tab": "64a244765ce4869a0cce4aab",
          "group": "64a244765ce4869a0cce4aae",
          "name": "サイン加工・貼り手",
          "status": true,
          "order": 700,
          "_id": "6656cb52e1132a8850134dfc",
          "createdAt": "2024-05-29T06:29:38.677Z",
          "updatedAt": "2024-05-29T06:29:38.677Z",
          "__v": 0
        }
      ],
      "mergegedOccupations": [
        {
          "_id": "64a244765ce4869a0cce4abb",
          "tab": "64a244765ce4869a0cce4aab",
          "group": "64a244765ce4869a0cce4aae",
          "name": "サイン・加工",
          "status": true,
          "order": 3,
          "createdAt": "2023-07-03T03:45:58.691Z",
          "updatedAt": "2023-07-03T03:45:58.691Z",
          "__v": 0
        },
        {
          "_id": "64a244765ce4869a0cce4ac5",
          "tab": "64a244765ce4869a0cce4aab",
          "group": "64a244765ce4869a0cce4aae",
          "name": "サイン・貼り手",
          "status": true,
          "order": 5,
          "createdAt": "2023-07-03T03:45:58.707Z",
          "updatedAt": "2023-07-03T03:45:58.707Z",
          "__v": 0
        }
      ],
      "insertedNewOccupation": [
        {
          "tab": "64a244765ce4869a0cce4aab",
          "group": "64a244765ce4869a0cce4aae",
          "name": "サイン加工・貼り手",
          "status": true,
          "order": 700,
          "_id": "6656cb52e1132a8850134dfc",
          "createdAt": "2024-05-29T06:29:38.677Z",
          "updatedAt": "2024-05-29T06:29:38.677Z",
          "__v": 0
        }
      ]
    },
    {
      "companyId": "65377cb707261dc34a88d7e7",
      "companyName": "株式会社第一広房TOKYO(サイン部)",
      "companyOccupationAsContractorBefore": [
        {
          "_id": "64a244765ce4869a0cce4abb",
          "name": "サイン・加工"
        },
        {
          "_id": "64a244765ce4869a0cce4ac0",
          "name": "サインオペレーター（DTP）"
        },
        {
          "_id": "64a244765ce4869a0cce4ac5",
          "name": "サイン・貼り手"
        }
      ],
      "companyOccupationAsContractorAfter": [
        {
          "_id": "64a244765ce4869a0cce4ac0",
          "name": "サインオペレーター（DTP）"
        },
        {
          "tab": "64a244765ce4869a0cce4aab",
          "group": "64a244765ce4869a0cce4aae",
          "name": "サイン加工・貼り手",
          "status": true,
          "order": 700,
          "_id": "6656cb52e1132a8850134dfc",
          "createdAt": "2024-05-29T06:29:38.677Z",
          "updatedAt": "2024-05-29T06:29:38.677Z",
          "__v": 0
        }
      ],
      "mergegedOccupations": [
        {
          "_id": "64a244765ce4869a0cce4abb",
          "tab": "64a244765ce4869a0cce4aab",
          "group": "64a244765ce4869a0cce4aae",
          "name": "サイン・加工",
          "status": true,
          "order": 3,
          "createdAt": "2023-07-03T03:45:58.691Z",
          "updatedAt": "2023-07-03T03:45:58.691Z",
          "__v": 0
        },
        {
          "_id": "64a244765ce4869a0cce4ac5",
          "tab": "64a244765ce4869a0cce4aab",
          "group": "64a244765ce4869a0cce4aae",
          "name": "サイン・貼り手",
          "status": true,
          "order": 5,
          "createdAt": "2023-07-03T03:45:58.707Z",
          "updatedAt": "2023-07-03T03:45:58.707Z",
          "__v": 0
        }
      ],
      "insertedNewOccupationAsContractor": [
        {
          "tab": "64a244765ce4869a0cce4aab",
          "group": "64a244765ce4869a0cce4aae",
          "name": "サイン加工・貼り手",
          "status": true,
          "order": 700,
          "_id": "6656cb52e1132a8850134dfc",
          "createdAt": "2024-05-29T06:29:38.677Z",
          "updatedAt": "2024-05-29T06:29:38.677Z",
          "__v": 0
        }
      ]
    },
    {
      "companyId": "654add6572708314c8705e68",
      "companyName": "株式会社ケシオン",
      "companyOccupationBefore": [
        {
          "_id": "64a244765ce4869a0cce4ab1",
          "name": "大工（イベント）"
        },
        {
          "_id": "64eefba6d0fc7b08377c5bce",
          "name": "大道具"
        },
        {
          "_id": "64a244765ce4869a0cce4abb",
          "name": "サイン・加工"
        },
        {
          "_id": "64a244765ce4869a0cce4ac5",
          "name": "サイン・貼り手"
        },
        {
          "_id": "64a244765ce4869a0cce4aca",
          "name": "経師/表具"
        },
        {
          "_id": "64a244765ce4869a0cce4acf",
          "name": "電気工事（仮設）"
        },
        {
          "_id": "64a244765ce4869a0cce4ad4",
          "name": "給排水工事（仮設）"
        },
        {
          "_id": "64ee8e8a3c69e74ccffba6ba",
          "name": "テント設営"
        },
        {
          "_id": "64ee8ea43c69e74ccffba6c3",
          "name": "システムパネル設営"
        },
        {
          "_id": "64ee8eea6277a3953e348899",
          "name": "トラス設営"
        },
        {
          "_id": "6576723b13421357c39c62e5",
          "name": "施工スタッフ/手元"
        },
        {
          "_id": "6576725013421357c39c62ee",
          "name": "運搬"
        },
        {
          "_id": "64a244765ce4869a0cce4ae0",
          "name": "クリエイティブディレクター"
        },
        {
          "_id": "64a244765ce4869a0cce4ae5",
          "name": "グラフィックデザイナー"
        },
        {
          "_id": "64a244765ce4869a0cce4aea",
          "name": "空間デザイナー"
        },
        {
          "_id": "64a244765ce4869a0cce4aef",
          "name": "Webデザイナー"
        },
        {
          "_id": "64a244765ce4869a0cce4af4",
          "name": "CGデザイナー"
        },
        {
          "_id": "64a244765ce4869a0cce4ad9",
          "name": "デコレーター"
        },
        {
          "_id": "64a244765ce4869a0cce4b00",
          "name": "イベント運営ディレクター"
        },
        {
          "_id": "64a244765ce4869a0cce4b05",
          "name": "イベント運営アシスタントディレクター"
        },
        {
          "_id": "64a244765ce4869a0cce4b0a",
          "name": "イベント運営スタッフ"
        },
        {
          "_id": "64a244765ce4869a0cce4af9",
          "name": "イベントプランナー"
        },
        {
          "_id": "64a244765ce4869a0cce4b36",
          "name": "内装大工"
        },
        {
          "_id": "64a244765ce4869a0cce4b3b",
          "name": "塗装工事"
        },
        {
          "_id": "64a244765ce4869a0cce4b40",
          "name": "クロス工事"
        },
        {
          "_id": "64a244765ce4869a0cce4b45",
          "name": "床仕上工事"
        },
        {
          "_id": "64f67e5f244e38b9948a5be6",
          "name": "床工事(OA含む)"
        },
        {
          "_id": "64a244765ce4869a0cce4b4a",
          "name": "化粧フィルム・シート工事"
        },
        {
          "_id": "64a244765ce4869a0cce4b4f",
          "name": "防音工事"
        },
        {
          "_id": "64a244765ce4869a0cce4b54",
          "name": "軽鉄工事"
        },
        {
          "_id": "64a244765ce4869a0cce4b59",
          "name": "軽量ボード工事"
        },
        {
          "_id": "64a244765ce4869a0cce4b5e",
          "name": "電気工事(内装)"
        },
        {
          "_id": "64a244765ce4869a0cce4b63",
          "name": "給排水・給湯設備工事"
        },
        {
          "_id": "64a244765ce4869a0cce4b68",
          "name": "内装解体工事"
        },
        {
          "_id": "64a244765ce4869a0cce4b6d",
          "name": "内装清掃"
        },
        {
          "_id": "64a244765ce4869a0cce4b20",
          "name": "舞台監督"
        },
        {
          "_id": "64a244765ce4869a0cce4b25",
          "name": "カメラマン・スチール"
        },
        {
          "_id": "64a244765ce4869a0cce4b2a",
          "name": "カメラマン・ムービー"
        },
        {
          "_id": "64a244765ce4869a0cce4b2f",
          "name": "通訳"
        },
        {
          "_id": "64a244765ce4869a0cce4ab6",
          "name": "鳶（イベント）"
        },
        {
          "_id": "64a244765ce4869a0cce4ac0",
          "name": "サインオペレーター（DTP）"
        },
        {
          "_id": "6656cb51e1132a8850133916",
          "name": "施工管理（イベント）"
        },
        {
          "_id": "6656cb51e1132a8850133919",
          "name": "制作管理（イベント）"
        },
        {
          "_id": "6656cb51e1132a8850133aad",
          "name": "PAエンジニア"
        },
        {
          "_id": "6656cb51e1132a8850133ab0",
          "name": "レコーディングエンジニア"
        },
        {
          "_id": "6656cb51e1132a8850133ab3",
          "name": "MAエンジニア"
        },
        {
          "_id": "6656cb51e1132a8850133ab6",
          "name": "音声"
        },
        {
          "_id": "6656cb51e1132a8850133ab9",
          "name": "音響スタッフ"
        },
        {
          "_id": "6656cb52e1132a88501341f8",
          "name": "照明オペレーター（プランナー）"
        },
        {
          "_id": "6656cb52e1132a88501341fb",
          "name": "レーザーオペレーター"
        },
        {
          "_id": "6656cb52e1132a88501341fe",
          "name": "ピンスポットオペレーター"
        },
        {
          "_id": "6656cb52e1132a8850134201",
          "name": "撮影照明"
        },
        {
          "_id": "6656cb52e1132a8850134204",
          "name": "照明スタッフ"
        },
        {
          "_id": "6656cb52e1132a8850134592",
          "name": "映像オペレーター（スイッチャー）"
        },
        {
          "_id": "6656cb52e1132a8850134595",
          "name": "配信管理オペレーター"
        },
        {
          "_id": "6656cb52e1132a8850134598",
          "name": "映像アシスタント（設営スタッフ）"
        },
        {
          "_id": "6656cb52e1132a88501348a8",
          "name": "映像編集"
        },
        {
          "_id": "6656cb52e1132a88501348ab",
          "name": "映像制作"
        },
        {
          "_id": "6656cb52e1132a8850134d64",
          "name": "設計士"
        },
        {
          "_id": "6656cb52e1132a8850134d67",
          "name": "CADオペレーター"
        }
      ],
      "companyOccupationAfter": [
        {
          "_id": "64a244765ce4869a0cce4ab1",
          "name": "大工（イベント）"
        },
        {
          "_id": "64eefba6d0fc7b08377c5bce",
          "name": "大道具"
        },
        {
          "_id": "64a244765ce4869a0cce4aca",
          "name": "経師/表具"
        },
        {
          "_id": "64a244765ce4869a0cce4acf",
          "name": "電気工事（仮設）"
        },
        {
          "_id": "64a244765ce4869a0cce4ad4",
          "name": "給排水工事（仮設）"
        },
        {
          "_id": "64ee8e8a3c69e74ccffba6ba",
          "name": "テント設営"
        },
        {
          "_id": "64ee8ea43c69e74ccffba6c3",
          "name": "システムパネル設営"
        },
        {
          "_id": "64ee8eea6277a3953e348899",
          "name": "トラス設営"
        },
        {
          "_id": "6576723b13421357c39c62e5",
          "name": "施工スタッフ/手元"
        },
        {
          "_id": "6576725013421357c39c62ee",
          "name": "運搬"
        },
        {
          "_id": "64a244765ce4869a0cce4ae0",
          "name": "クリエイティブディレクター"
        },
        {
          "_id": "64a244765ce4869a0cce4ae5",
          "name": "グラフィックデザイナー"
        },
        {
          "_id": "64a244765ce4869a0cce4aea",
          "name": "空間デザイナー"
        },
        {
          "_id": "64a244765ce4869a0cce4aef",
          "name": "Webデザイナー"
        },
        {
          "_id": "64a244765ce4869a0cce4af4",
          "name": "CGデザイナー"
        },
        {
          "_id": "64a244765ce4869a0cce4ad9",
          "name": "デコレーター"
        },
        {
          "_id": "64a244765ce4869a0cce4b00",
          "name": "イベント運営ディレクター"
        },
        {
          "_id": "64a244765ce4869a0cce4b05",
          "name": "イベント運営アシスタントディレクター"
        },
        {
          "_id": "64a244765ce4869a0cce4b0a",
          "name": "イベント運営スタッフ"
        },
        {
          "_id": "64a244765ce4869a0cce4af9",
          "name": "イベントプランナー"
        },
        {
          "_id": "64a244765ce4869a0cce4b36",
          "name": "内装大工"
        },
        {
          "_id": "64a244765ce4869a0cce4b3b",
          "name": "塗装工事"
        },
        {
          "_id": "64a244765ce4869a0cce4b40",
          "name": "クロス工事"
        },
        {
          "_id": "64a244765ce4869a0cce4b45",
          "name": "床仕上工事"
        },
        {
          "_id": "64f67e5f244e38b9948a5be6",
          "name": "床工事(OA含む)"
        },
        {
          "_id": "64a244765ce4869a0cce4b4a",
          "name": "化粧フィルム・シート工事"
        },
        {
          "_id": "64a244765ce4869a0cce4b4f",
          "name": "防音工事"
        },
        {
          "_id": "64a244765ce4869a0cce4b54",
          "name": "軽鉄工事"
        },
        {
          "_id": "64a244765ce4869a0cce4b59",
          "name": "軽量ボード工事"
        },
        {
          "_id": "64a244765ce4869a0cce4b5e",
          "name": "電気工事(内装)"
        },
        {
          "_id": "64a244765ce4869a0cce4b63",
          "name": "給排水・給湯設備工事"
        },
        {
          "_id": "64a244765ce4869a0cce4b68",
          "name": "内装解体工事"
        },
        {
          "_id": "64a244765ce4869a0cce4b6d",
          "name": "内装清掃"
        },
        {
          "_id": "64a244765ce4869a0cce4b20",
          "name": "舞台監督"
        },
        {
          "_id": "64a244765ce4869a0cce4b25",
          "name": "カメラマン・スチール"
        },
        {
          "_id": "64a244765ce4869a0cce4b2a",
          "name": "カメラマン・ムービー"
        },
        {
          "_id": "64a244765ce4869a0cce4b2f",
          "name": "通訳"
        },
        {
          "_id": "64a244765ce4869a0cce4ab6",
          "name": "鳶（イベント）"
        },
        {
          "_id": "64a244765ce4869a0cce4ac0",
          "name": "サインオペレーター（DTP）"
        },
        {
          "_id": "6656cb51e1132a8850133916",
          "name": "施工管理（イベント）"
        },
        {
          "_id": "6656cb51e1132a8850133919",
          "name": "制作管理（イベント）"
        },
        {
          "_id": "6656cb51e1132a8850133aad",
          "name": "PAエンジニア"
        },
        {
          "_id": "6656cb51e1132a8850133ab0",
          "name": "レコーディングエンジニア"
        },
        {
          "_id": "6656cb51e1132a8850133ab3",
          "name": "MAエンジニア"
        },
        {
          "_id": "6656cb51e1132a8850133ab6",
          "name": "音声"
        },
        {
          "_id": "6656cb51e1132a8850133ab9",
          "name": "音響スタッフ"
        },
        {
          "_id": "6656cb52e1132a88501341f8",
          "name": "照明オペレーター（プランナー）"
        },
        {
          "_id": "6656cb52e1132a88501341fb",
          "name": "レーザーオペレーター"
        },
        {
          "_id": "6656cb52e1132a88501341fe",
          "name": "ピンスポットオペレーター"
        },
        {
          "_id": "6656cb52e1132a8850134201",
          "name": "撮影照明"
        },
        {
          "_id": "6656cb52e1132a8850134204",
          "name": "照明スタッフ"
        },
        {
          "_id": "6656cb52e1132a8850134592",
          "name": "映像オペレーター（スイッチャー）"
        },
        {
          "_id": "6656cb52e1132a8850134595",
          "name": "配信管理オペレーター"
        },
        {
          "_id": "6656cb52e1132a8850134598",
          "name": "映像アシスタント（設営スタッフ）"
        },
        {
          "_id": "6656cb52e1132a88501348a8",
          "name": "映像編集"
        },
        {
          "_id": "6656cb52e1132a88501348ab",
          "name": "映像制作"
        },
        {
          "_id": "6656cb52e1132a8850134d64",
          "name": "設計士"
        },
        {
          "_id": "6656cb52e1132a8850134d67",
          "name": "CADオペレーター"
        },
        {
          "tab": "64a244765ce4869a0cce4aab",
          "group": "64a244765ce4869a0cce4aae",
          "name": "サイン加工・貼り手",
          "status": true,
          "order": 700,
          "_id": "6656cb52e1132a8850134dfc",
          "createdAt": "2024-05-29T06:29:38.677Z",
          "updatedAt": "2024-05-29T06:29:38.677Z",
          "__v": 0
        }
      ],
      "mergegedOccupations": [
        {
          "_id": "64a244765ce4869a0cce4abb",
          "tab": "64a244765ce4869a0cce4aab",
          "group": "64a244765ce4869a0cce4aae",
          "name": "サイン・加工",
          "status": true,
          "order": 3,
          "createdAt": "2023-07-03T03:45:58.691Z",
          "updatedAt": "2023-07-03T03:45:58.691Z",
          "__v": 0
        },
        {
          "_id": "64a244765ce4869a0cce4ac5",
          "tab": "64a244765ce4869a0cce4aab",
          "group": "64a244765ce4869a0cce4aae",
          "name": "サイン・貼り手",
          "status": true,
          "order": 5,
          "createdAt": "2023-07-03T03:45:58.707Z",
          "updatedAt": "2023-07-03T03:45:58.707Z",
          "__v": 0
        }
      ],
      "insertedNewOccupation": [
        {
          "tab": "64a244765ce4869a0cce4aab",
          "group": "64a244765ce4869a0cce4aae",
          "name": "サイン加工・貼り手",
          "status": true,
          "order": 700,
          "_id": "6656cb52e1132a8850134dfc",
          "createdAt": "2024-05-29T06:29:38.677Z",
          "updatedAt": "2024-05-29T06:29:38.677Z",
          "__v": 0
        }
      ]
    },
    {
      "companyId": "6552d02d250a940909eefa95",
      "companyName": "株式会社SHO-CASE",
      "companyOccupationBefore": [
        {
          "_id": "64a244765ce4869a0cce4ab1",
          "name": "大工（イベント）"
        },
        {
          "_id": "64a244765ce4869a0cce4ab6",
          "name": "鳶（イベント）"
        },
        {
          "_id": "64a244765ce4869a0cce4abb",
          "name": "サイン・加工"
        },
        {
          "_id": "64a244765ce4869a0cce4ac0",
          "name": "サインオペレーター（DTP）"
        },
        {
          "_id": "64a244765ce4869a0cce4ac5",
          "name": "サイン・貼り手"
        },
        {
          "_id": "64a244765ce4869a0cce4aca",
          "name": "経師/表具"
        },
        {
          "_id": "64a244765ce4869a0cce4acf",
          "name": "電気工事（仮設）"
        },
        {
          "_id": "64a244765ce4869a0cce4ad4",
          "name": "給排水工事（仮設）"
        },
        {
          "_id": "64a244765ce4869a0cce4ad9",
          "name": "デコレーター"
        },
        {
          "_id": "64a244765ce4869a0cce4b36",
          "name": "内装大工"
        },
        {
          "_id": "64a244765ce4869a0cce4b3b",
          "name": "塗装工事"
        },
        {
          "_id": "64a244765ce4869a0cce4b40",
          "name": "クロス工事"
        },
        {
          "_id": "64a244765ce4869a0cce4b45",
          "name": "床仕上工事"
        },
        {
          "_id": "64a244765ce4869a0cce4b4a",
          "name": "化粧フィルム・シート工事"
        },
        {
          "_id": "64a244765ce4869a0cce4b4f",
          "name": "防音工事"
        },
        {
          "_id": "64a244765ce4869a0cce4b54",
          "name": "軽鉄工事"
        },
        {
          "_id": "64a244765ce4869a0cce4b59",
          "name": "軽量ボード工事"
        },
        {
          "_id": "64a244765ce4869a0cce4b5e",
          "name": "電気工事(内装)"
        },
        {
          "_id": "64a244765ce4869a0cce4b63",
          "name": "給排水・給湯設備工事"
        },
        {
          "_id": "64a244765ce4869a0cce4b68",
          "name": "内装解体工事"
        },
        {
          "_id": "64a244765ce4869a0cce4b6d",
          "name": "内装清掃"
        },
        {
          "_id": "64ee8e8a3c69e74ccffba6ba",
          "name": "テント設営"
        },
        {
          "_id": "64ee8ea43c69e74ccffba6c3",
          "name": "システムパネル設営"
        },
        {
          "_id": "64ee8eea6277a3953e348899",
          "name": "トラス設営"
        },
        {
          "_id": "64eefba6d0fc7b08377c5bce",
          "name": "大道具"
        },
        {
          "_id": "64f67e5f244e38b9948a5be6",
          "name": "床工事(OA含む)"
        }
      ],
      "companyOccupationAfter": [
        {
          "_id": "64a244765ce4869a0cce4ab1",
          "name": "大工（イベント）"
        },
        {
          "_id": "64a244765ce4869a0cce4ab6",
          "name": "鳶（イベント）"
        },
        {
          "_id": "64a244765ce4869a0cce4ac0",
          "name": "サインオペレーター（DTP）"
        },
        {
          "_id": "64a244765ce4869a0cce4aca",
          "name": "経師/表具"
        },
        {
          "_id": "64a244765ce4869a0cce4acf",
          "name": "電気工事（仮設）"
        },
        {
          "_id": "64a244765ce4869a0cce4ad4",
          "name": "給排水工事（仮設）"
        },
        {
          "_id": "64a244765ce4869a0cce4ad9",
          "name": "デコレーター"
        },
        {
          "_id": "64a244765ce4869a0cce4b36",
          "name": "内装大工"
        },
        {
          "_id": "64a244765ce4869a0cce4b3b",
          "name": "塗装工事"
        },
        {
          "_id": "64a244765ce4869a0cce4b40",
          "name": "クロス工事"
        },
        {
          "_id": "64a244765ce4869a0cce4b45",
          "name": "床仕上工事"
        },
        {
          "_id": "64a244765ce4869a0cce4b4a",
          "name": "化粧フィルム・シート工事"
        },
        {
          "_id": "64a244765ce4869a0cce4b4f",
          "name": "防音工事"
        },
        {
          "_id": "64a244765ce4869a0cce4b54",
          "name": "軽鉄工事"
        },
        {
          "_id": "64a244765ce4869a0cce4b59",
          "name": "軽量ボード工事"
        },
        {
          "_id": "64a244765ce4869a0cce4b5e",
          "name": "電気工事(内装)"
        },
        {
          "_id": "64a244765ce4869a0cce4b63",
          "name": "給排水・給湯設備工事"
        },
        {
          "_id": "64a244765ce4869a0cce4b68",
          "name": "内装解体工事"
        },
        {
          "_id": "64a244765ce4869a0cce4b6d",
          "name": "内装清掃"
        },
        {
          "_id": "64ee8e8a3c69e74ccffba6ba",
          "name": "テント設営"
        },
        {
          "_id": "64ee8ea43c69e74ccffba6c3",
          "name": "システムパネル設営"
        },
        {
          "_id": "64ee8eea6277a3953e348899",
          "name": "トラス設営"
        },
        {
          "_id": "64eefba6d0fc7b08377c5bce",
          "name": "大道具"
        },
        {
          "_id": "64f67e5f244e38b9948a5be6",
          "name": "床工事(OA含む)"
        },
        {
          "tab": "64a244765ce4869a0cce4aab",
          "group": "64a244765ce4869a0cce4aae",
          "name": "サイン加工・貼り手",
          "status": true,
          "order": 700,
          "_id": "6656cb52e1132a8850134dfc",
          "createdAt": "2024-05-29T06:29:38.677Z",
          "updatedAt": "2024-05-29T06:29:38.677Z",
          "__v": 0
        }
      ],
      "mergegedOccupations": [
        {
          "_id": "64a244765ce4869a0cce4abb",
          "tab": "64a244765ce4869a0cce4aab",
          "group": "64a244765ce4869a0cce4aae",
          "name": "サイン・加工",
          "status": true,
          "order": 3,
          "createdAt": "2023-07-03T03:45:58.691Z",
          "updatedAt": "2023-07-03T03:45:58.691Z",
          "__v": 0
        },
        {
          "_id": "64a244765ce4869a0cce4ac5",
          "tab": "64a244765ce4869a0cce4aab",
          "group": "64a244765ce4869a0cce4aae",
          "name": "サイン・貼り手",
          "status": true,
          "order": 5,
          "createdAt": "2023-07-03T03:45:58.707Z",
          "updatedAt": "2023-07-03T03:45:58.707Z",
          "__v": 0
        }
      ],
      "insertedNewOccupation": [
        {
          "tab": "64a244765ce4869a0cce4aab",
          "group": "64a244765ce4869a0cce4aae",
          "name": "サイン加工・貼り手",
          "status": true,
          "order": 700,
          "_id": "6656cb52e1132a8850134dfc",
          "createdAt": "2024-05-29T06:29:38.677Z",
          "updatedAt": "2024-05-29T06:29:38.677Z",
          "__v": 0
        }
      ]
    },
    {
      "companyId": "655ac509250a940909ef1721",
      "companyName": "株式会社ユニティー",
      "companyOccupationBefore": [
        {
          "_id": "64a244765ce4869a0cce4ab1",
          "name": "大工（イベント）"
        },
        {
          "_id": "64a244765ce4869a0cce4abb",
          "name": "サイン・加工"
        },
        {
          "_id": "64a244765ce4869a0cce4ac0",
          "name": "サインオペレーター（DTP）"
        },
        {
          "_id": "64a244765ce4869a0cce4ac5",
          "name": "サイン・貼り手"
        },
        {
          "_id": "64a244765ce4869a0cce4aca",
          "name": "経師/表具"
        },
        {
          "_id": "64ee8ea43c69e74ccffba6c3",
          "name": "システムパネル設営"
        },
        {
          "_id": "64eefba6d0fc7b08377c5bce",
          "name": "大道具"
        },
        {
          "_id": "6656cb51e1132a8850133916",
          "name": "施工管理（イベント）"
        },
        {
          "_id": "6656cb51e1132a8850133919",
          "name": "制作管理（イベント）"
        }
      ],
      "companyOccupationAfter": [
        {
          "_id": "64a244765ce4869a0cce4ab1",
          "name": "大工（イベント）"
        },
        {
          "_id": "64a244765ce4869a0cce4ac0",
          "name": "サインオペレーター（DTP）"
        },
        {
          "_id": "64a244765ce4869a0cce4aca",
          "name": "経師/表具"
        },
        {
          "_id": "64ee8ea43c69e74ccffba6c3",
          "name": "システムパネル設営"
        },
        {
          "_id": "64eefba6d0fc7b08377c5bce",
          "name": "大道具"
        },
        {
          "_id": "6656cb51e1132a8850133916",
          "name": "施工管理（イベント）"
        },
        {
          "_id": "6656cb51e1132a8850133919",
          "name": "制作管理（イベント）"
        },
        {
          "tab": "64a244765ce4869a0cce4aab",
          "group": "64a244765ce4869a0cce4aae",
          "name": "サイン加工・貼り手",
          "status": true,
          "order": 700,
          "_id": "6656cb52e1132a8850134dfc",
          "createdAt": "2024-05-29T06:29:38.677Z",
          "updatedAt": "2024-05-29T06:29:38.677Z",
          "__v": 0
        }
      ],
      "mergegedOccupations": [
        {
          "_id": "64a244765ce4869a0cce4abb",
          "tab": "64a244765ce4869a0cce4aab",
          "group": "64a244765ce4869a0cce4aae",
          "name": "サイン・加工",
          "status": true,
          "order": 3,
          "createdAt": "2023-07-03T03:45:58.691Z",
          "updatedAt": "2023-07-03T03:45:58.691Z",
          "__v": 0
        },
        {
          "_id": "64a244765ce4869a0cce4ac5",
          "tab": "64a244765ce4869a0cce4aab",
          "group": "64a244765ce4869a0cce4aae",
          "name": "サイン・貼り手",
          "status": true,
          "order": 5,
          "createdAt": "2023-07-03T03:45:58.707Z",
          "updatedAt": "2023-07-03T03:45:58.707Z",
          "__v": 0
        }
      ],
      "insertedNewOccupation": [
        {
          "tab": "64a244765ce4869a0cce4aab",
          "group": "64a244765ce4869a0cce4aae",
          "name": "サイン加工・貼り手",
          "status": true,
          "order": 700,
          "_id": "6656cb52e1132a8850134dfc",
          "createdAt": "2024-05-29T06:29:38.677Z",
          "updatedAt": "2024-05-29T06:29:38.677Z",
          "__v": 0
        }
      ]
    },
    {
      "companyId": "655ac509250a940909ef1721",
      "companyName": "株式会社ユニティー",
      "companyOccupationAsContractorBefore": [
        {
          "_id": "64a244765ce4869a0cce4ab1",
          "name": "大工（イベント）"
        },
        {
          "_id": "64a244765ce4869a0cce4abb",
          "name": "サイン・加工"
        },
        {
          "_id": "64a244765ce4869a0cce4ac0",
          "name": "サインオペレーター（DTP）"
        },
        {
          "_id": "64ee8ea43c69e74ccffba6c3",
          "name": "システムパネル設営"
        },
        {
          "_id": "6576723b13421357c39c62e5",
          "name": "施工スタッフ/手元"
        },
        {
          "_id": "6656cb51e1132a8850133916",
          "name": "施工管理（イベント）"
        },
        {
          "_id": "6656cb51e1132a8850133919",
          "name": "制作管理（イベント）"
        }
      ],
      "companyOccupationAsContractorAfter": [
        {
          "_id": "64a244765ce4869a0cce4ab1",
          "name": "大工（イベント）"
        },
        {
          "_id": "64a244765ce4869a0cce4ac0",
          "name": "サインオペレーター（DTP）"
        },
        {
          "_id": "64ee8ea43c69e74ccffba6c3",
          "name": "システムパネル設営"
        },
        {
          "_id": "6576723b13421357c39c62e5",
          "name": "施工スタッフ/手元"
        },
        {
          "_id": "6656cb51e1132a8850133916",
          "name": "施工管理（イベント）"
        },
        {
          "_id": "6656cb51e1132a8850133919",
          "name": "制作管理（イベント）"
        },
        {
          "tab": "64a244765ce4869a0cce4aab",
          "group": "64a244765ce4869a0cce4aae",
          "name": "サイン加工・貼り手",
          "status": true,
          "order": 700,
          "_id": "6656cb52e1132a8850134dfc",
          "createdAt": "2024-05-29T06:29:38.677Z",
          "updatedAt": "2024-05-29T06:29:38.677Z",
          "__v": 0
        }
      ],
      "mergegedOccupations": [
        {
          "_id": "64a244765ce4869a0cce4abb",
          "tab": "64a244765ce4869a0cce4aab",
          "group": "64a244765ce4869a0cce4aae",
          "name": "サイン・加工",
          "status": true,
          "order": 3,
          "createdAt": "2023-07-03T03:45:58.691Z",
          "updatedAt": "2023-07-03T03:45:58.691Z",
          "__v": 0
        },
        {
          "_id": "64a244765ce4869a0cce4ac5",
          "tab": "64a244765ce4869a0cce4aab",
          "group": "64a244765ce4869a0cce4aae",
          "name": "サイン・貼り手",
          "status": true,
          "order": 5,
          "createdAt": "2023-07-03T03:45:58.707Z",
          "updatedAt": "2023-07-03T03:45:58.707Z",
          "__v": 0
        }
      ],
      "insertedNewOccupationAsContractor": [
        {
          "tab": "64a244765ce4869a0cce4aab",
          "group": "64a244765ce4869a0cce4aae",
          "name": "サイン加工・貼り手",
          "status": true,
          "order": 700,
          "_id": "6656cb52e1132a8850134dfc",
          "createdAt": "2024-05-29T06:29:38.677Z",
          "updatedAt": "2024-05-29T06:29:38.677Z",
          "__v": 0
        }
      ]
    },
    {
      "companyId": "655d917ab6cd39373d816c4a",
      "companyName": "株式会社東真",
      "companyOccupationBefore": [
        {
          "_id": "64a244765ce4869a0cce4abb",
          "name": "サイン・加工"
        },
        {
          "_id": "64a244765ce4869a0cce4ac0",
          "name": "サインオペレーター（DTP）"
        },
        {
          "_id": "64a244765ce4869a0cce4ac5",
          "name": "サイン・貼り手"
        },
        {
          "_id": "64a244765ce4869a0cce4aca",
          "name": "経師/表具"
        },
        {
          "_id": "64a244765ce4869a0cce4acf",
          "name": "電気工事（仮設）"
        },
        {
          "_id": "64ee8ea43c69e74ccffba6c3",
          "name": "システムパネル設営"
        },
        {
          "_id": "64ee8eea6277a3953e348899",
          "name": "トラス設営"
        },
        {
          "_id": "6576723b13421357c39c62e5",
          "name": "施工スタッフ/手元"
        },
        {
          "_id": "6576725013421357c39c62ee",
          "name": "運搬"
        },
        {
          "_id": "64a244765ce4869a0cce4ae0",
          "name": "クリエイティブディレクター"
        },
        {
          "_id": "64a244765ce4869a0cce4ae5",
          "name": "グラフィックデザイナー"
        },
        {
          "_id": "64a244765ce4869a0cce4aea",
          "name": "空間デザイナー"
        },
        {
          "_id": "64a244765ce4869a0cce4ad9",
          "name": "デコレーター"
        },
        {
          "_id": "64a244765ce4869a0cce4af4",
          "name": "CGデザイナー"
        },
        {
          "_id": "6656cb51e1132a8850133916",
          "name": "施工管理（イベント）"
        },
        {
          "_id": "6656cb51e1132a8850133919",
          "name": "制作管理（イベント）"
        }
      ],
      "companyOccupationAfter": [
        {
          "_id": "64a244765ce4869a0cce4ac0",
          "name": "サインオペレーター（DTP）"
        },
        {
          "_id": "64a244765ce4869a0cce4aca",
          "name": "経師/表具"
        },
        {
          "_id": "64a244765ce4869a0cce4acf",
          "name": "電気工事（仮設）"
        },
        {
          "_id": "64ee8ea43c69e74ccffba6c3",
          "name": "システムパネル設営"
        },
        {
          "_id": "64ee8eea6277a3953e348899",
          "name": "トラス設営"
        },
        {
          "_id": "6576723b13421357c39c62e5",
          "name": "施工スタッフ/手元"
        },
        {
          "_id": "6576725013421357c39c62ee",
          "name": "運搬"
        },
        {
          "_id": "64a244765ce4869a0cce4ae0",
          "name": "クリエイティブディレクター"
        },
        {
          "_id": "64a244765ce4869a0cce4ae5",
          "name": "グラフィックデザイナー"
        },
        {
          "_id": "64a244765ce4869a0cce4aea",
          "name": "空間デザイナー"
        },
        {
          "_id": "64a244765ce4869a0cce4ad9",
          "name": "デコレーター"
        },
        {
          "_id": "64a244765ce4869a0cce4af4",
          "name": "CGデザイナー"
        },
        {
          "_id": "6656cb51e1132a8850133916",
          "name": "施工管理（イベント）"
        },
        {
          "_id": "6656cb51e1132a8850133919",
          "name": "制作管理（イベント）"
        },
        {
          "tab": "64a244765ce4869a0cce4aab",
          "group": "64a244765ce4869a0cce4aae",
          "name": "サイン加工・貼り手",
          "status": true,
          "order": 700,
          "_id": "6656cb52e1132a8850134dfc",
          "createdAt": "2024-05-29T06:29:38.677Z",
          "updatedAt": "2024-05-29T06:29:38.677Z",
          "__v": 0
        }
      ],
      "mergegedOccupations": [
        {
          "_id": "64a244765ce4869a0cce4abb",
          "tab": "64a244765ce4869a0cce4aab",
          "group": "64a244765ce4869a0cce4aae",
          "name": "サイン・加工",
          "status": true,
          "order": 3,
          "createdAt": "2023-07-03T03:45:58.691Z",
          "updatedAt": "2023-07-03T03:45:58.691Z",
          "__v": 0
        },
        {
          "_id": "64a244765ce4869a0cce4ac5",
          "tab": "64a244765ce4869a0cce4aab",
          "group": "64a244765ce4869a0cce4aae",
          "name": "サイン・貼り手",
          "status": true,
          "order": 5,
          "createdAt": "2023-07-03T03:45:58.707Z",
          "updatedAt": "2023-07-03T03:45:58.707Z",
          "__v": 0
        }
      ],
      "insertedNewOccupation": [
        {
          "tab": "64a244765ce4869a0cce4aab",
          "group": "64a244765ce4869a0cce4aae",
          "name": "サイン加工・貼り手",
          "status": true,
          "order": 700,
          "_id": "6656cb52e1132a8850134dfc",
          "createdAt": "2024-05-29T06:29:38.677Z",
          "updatedAt": "2024-05-29T06:29:38.677Z",
          "__v": 0
        }
      ]
    },
    {
      "companyId": "65a8eb3d25cb34b552968a7f",
      "companyName": "株式会社シミズオクト（イベント・スペース）",
      "companyOccupationBefore": [
        {
          "_id": "64a244765ce4869a0cce4ab1",
          "name": "大工（イベント）"
        },
        {
          "_id": "64eefba6d0fc7b08377c5bce",
          "name": "大道具"
        },
        {
          "_id": "64a244765ce4869a0cce4ab6",
          "name": "鳶（イベント）"
        },
        {
          "_id": "64a244765ce4869a0cce4abb",
          "name": "サイン・加工"
        },
        {
          "_id": "64a244765ce4869a0cce4ac0",
          "name": "サインオペレーター（DTP）"
        },
        {
          "_id": "64a244765ce4869a0cce4ac5",
          "name": "サイン・貼り手"
        },
        {
          "_id": "64a244765ce4869a0cce4aca",
          "name": "経師/表具"
        },
        {
          "_id": "64a244765ce4869a0cce4acf",
          "name": "電気工事（仮設）"
        },
        {
          "_id": "64a244765ce4869a0cce4ad4",
          "name": "給排水工事（仮設）"
        },
        {
          "_id": "64ee8e8a3c69e74ccffba6ba",
          "name": "テント設営"
        },
        {
          "_id": "64ee8ea43c69e74ccffba6c3",
          "name": "システムパネル設営"
        },
        {
          "_id": "64ee8eea6277a3953e348899",
          "name": "トラス設営"
        },
        {
          "_id": "6576723b13421357c39c62e5",
          "name": "施工スタッフ/手元"
        },
        {
          "_id": "6576725013421357c39c62ee",
          "name": "運搬"
        },
        {
          "_id": "64a244765ce4869a0cce4ae5",
          "name": "グラフィックデザイナー"
        },
        {
          "_id": "64a244765ce4869a0cce4aea",
          "name": "空間デザイナー"
        },
        {
          "_id": "64a244765ce4869a0cce4ae0",
          "name": "クリエイティブディレクター"
        },
        {
          "_id": "64a244765ce4869a0cce4af4",
          "name": "CGデザイナー"
        },
        {
          "_id": "64a244765ce4869a0cce4ad9",
          "name": "デコレーター"
        },
        {
          "_id": "64a244765ce4869a0cce4b00",
          "name": "イベント運営ディレクター"
        },
        {
          "_id": "64a244765ce4869a0cce4b05",
          "name": "イベント運営アシスタントディレクター"
        },
        {
          "_id": "64a244765ce4869a0cce4b0a",
          "name": "イベント運営スタッフ"
        },
        {
          "_id": "64a244765ce4869a0cce4af9",
          "name": "イベントプランナー"
        },
        {
          "_id": "6656cb51e1132a8850133916",
          "name": "施工管理（イベント）"
        },
        {
          "_id": "6656cb51e1132a8850133919",
          "name": "制作管理（イベント）"
        },
        {
          "_id": "6656cb52e1132a8850134d64",
          "name": "設計士"
        },
        {
          "_id": "6656cb52e1132a8850134d67",
          "name": "CADオペレーター"
        }
      ],
      "companyOccupationAfter": [
        {
          "_id": "64a244765ce4869a0cce4ab1",
          "name": "大工（イベント）"
        },
        {
          "_id": "64eefba6d0fc7b08377c5bce",
          "name": "大道具"
        },
        {
          "_id": "64a244765ce4869a0cce4ab6",
          "name": "鳶（イベント）"
        },
        {
          "_id": "64a244765ce4869a0cce4ac0",
          "name": "サインオペレーター（DTP）"
        },
        {
          "_id": "64a244765ce4869a0cce4aca",
          "name": "経師/表具"
        },
        {
          "_id": "64a244765ce4869a0cce4acf",
          "name": "電気工事（仮設）"
        },
        {
          "_id": "64a244765ce4869a0cce4ad4",
          "name": "給排水工事（仮設）"
        },
        {
          "_id": "64ee8e8a3c69e74ccffba6ba",
          "name": "テント設営"
        },
        {
          "_id": "64ee8ea43c69e74ccffba6c3",
          "name": "システムパネル設営"
        },
        {
          "_id": "64ee8eea6277a3953e348899",
          "name": "トラス設営"
        },
        {
          "_id": "6576723b13421357c39c62e5",
          "name": "施工スタッフ/手元"
        },
        {
          "_id": "6576725013421357c39c62ee",
          "name": "運搬"
        },
        {
          "_id": "64a244765ce4869a0cce4ae5",
          "name": "グラフィックデザイナー"
        },
        {
          "_id": "64a244765ce4869a0cce4aea",
          "name": "空間デザイナー"
        },
        {
          "_id": "64a244765ce4869a0cce4ae0",
          "name": "クリエイティブディレクター"
        },
        {
          "_id": "64a244765ce4869a0cce4af4",
          "name": "CGデザイナー"
        },
        {
          "_id": "64a244765ce4869a0cce4ad9",
          "name": "デコレーター"
        },
        {
          "_id": "64a244765ce4869a0cce4b00",
          "name": "イベント運営ディレクター"
        },
        {
          "_id": "64a244765ce4869a0cce4b05",
          "name": "イベント運営アシスタントディレクター"
        },
        {
          "_id": "64a244765ce4869a0cce4b0a",
          "name": "イベント運営スタッフ"
        },
        {
          "_id": "64a244765ce4869a0cce4af9",
          "name": "イベントプランナー"
        },
        {
          "_id": "6656cb51e1132a8850133916",
          "name": "施工管理（イベント）"
        },
        {
          "_id": "6656cb51e1132a8850133919",
          "name": "制作管理（イベント）"
        },
        {
          "_id": "6656cb52e1132a8850134d64",
          "name": "設計士"
        },
        {
          "_id": "6656cb52e1132a8850134d67",
          "name": "CADオペレーター"
        },
        {
          "tab": "64a244765ce4869a0cce4aab",
          "group": "64a244765ce4869a0cce4aae",
          "name": "サイン加工・貼り手",
          "status": true,
          "order": 700,
          "_id": "6656cb52e1132a8850134dfc",
          "createdAt": "2024-05-29T06:29:38.677Z",
          "updatedAt": "2024-05-29T06:29:38.677Z",
          "__v": 0
        }
      ],
      "mergegedOccupations": [
        {
          "_id": "64a244765ce4869a0cce4abb",
          "tab": "64a244765ce4869a0cce4aab",
          "group": "64a244765ce4869a0cce4aae",
          "name": "サイン・加工",
          "status": true,
          "order": 3,
          "createdAt": "2023-07-03T03:45:58.691Z",
          "updatedAt": "2023-07-03T03:45:58.691Z",
          "__v": 0
        },
        {
          "_id": "64a244765ce4869a0cce4ac5",
          "tab": "64a244765ce4869a0cce4aab",
          "group": "64a244765ce4869a0cce4aae",
          "name": "サイン・貼り手",
          "status": true,
          "order": 5,
          "createdAt": "2023-07-03T03:45:58.707Z",
          "updatedAt": "2023-07-03T03:45:58.707Z",
          "__v": 0
        }
      ],
      "insertedNewOccupation": [
        {
          "tab": "64a244765ce4869a0cce4aab",
          "group": "64a244765ce4869a0cce4aae",
          "name": "サイン加工・貼り手",
          "status": true,
          "order": 700,
          "_id": "6656cb52e1132a8850134dfc",
          "createdAt": "2024-05-29T06:29:38.677Z",
          "updatedAt": "2024-05-29T06:29:38.677Z",
          "__v": 0
        }
      ]
    },
    {
      "companyId": "65a8eb3d25cb34b552968a7f",
      "companyName": "株式会社シミズオクト（イベント・スペース）",
      "companyOccupationAsContractorBefore": [
        {
          "_id": "64a244765ce4869a0cce4ab1",
          "name": "大工（イベント）"
        },
        {
          "_id": "64a244765ce4869a0cce4abb",
          "name": "サイン・加工"
        },
        {
          "_id": "64a244765ce4869a0cce4ac5",
          "name": "サイン・貼り手"
        },
        {
          "_id": "64a244765ce4869a0cce4aca",
          "name": "経師/表具"
        },
        {
          "_id": "64a244765ce4869a0cce4ae0",
          "name": "クリエイティブディレクター"
        },
        {
          "_id": "64a244765ce4869a0cce4ae5",
          "name": "グラフィックデザイナー"
        },
        {
          "_id": "64a244765ce4869a0cce4aea",
          "name": "空間デザイナー"
        },
        {
          "_id": "64a244765ce4869a0cce4af4",
          "name": "CGデザイナー"
        },
        {
          "_id": "64a244765ce4869a0cce4b00",
          "name": "イベント運営ディレクター"
        },
        {
          "_id": "64a244765ce4869a0cce4b05",
          "name": "イベント運営アシスタントディレクター"
        },
        {
          "_id": "64a244765ce4869a0cce4b0a",
          "name": "イベント運営スタッフ"
        },
        {
          "_id": "64ee8e8a3c69e74ccffba6ba",
          "name": "テント設営"
        },
        {
          "_id": "64ee8ea43c69e74ccffba6c3",
          "name": "システムパネル設営"
        },
        {
          "_id": "64ee8eea6277a3953e348899",
          "name": "トラス設営"
        },
        {
          "_id": "64eefba6d0fc7b08377c5bce",
          "name": "大道具"
        },
        {
          "_id": "6576723b13421357c39c62e5",
          "name": "施工スタッフ/手元"
        },
        {
          "_id": "6576725013421357c39c62ee",
          "name": "運搬"
        },
        {
          "_id": "6656cb51e1132a8850133916",
          "name": "施工管理（イベント）"
        },
        {
          "_id": "6656cb51e1132a8850133919",
          "name": "制作管理（イベント）"
        },
        {
          "_id": "6656cb52e1132a8850134d64",
          "name": "設計士"
        },
        {
          "_id": "6656cb52e1132a8850134d67",
          "name": "CADオペレーター"
        }
      ],
      "companyOccupationAsContractorAfter": [
        {
          "_id": "64a244765ce4869a0cce4ab1",
          "name": "大工（イベント）"
        },
        {
          "_id": "64a244765ce4869a0cce4aca",
          "name": "経師/表具"
        },
        {
          "_id": "64a244765ce4869a0cce4ae0",
          "name": "クリエイティブディレクター"
        },
        {
          "_id": "64a244765ce4869a0cce4ae5",
          "name": "グラフィックデザイナー"
        },
        {
          "_id": "64a244765ce4869a0cce4aea",
          "name": "空間デザイナー"
        },
        {
          "_id": "64a244765ce4869a0cce4af4",
          "name": "CGデザイナー"
        },
        {
          "_id": "64a244765ce4869a0cce4b00",
          "name": "イベント運営ディレクター"
        },
        {
          "_id": "64a244765ce4869a0cce4b05",
          "name": "イベント運営アシスタントディレクター"
        },
        {
          "_id": "64a244765ce4869a0cce4b0a",
          "name": "イベント運営スタッフ"
        },
        {
          "_id": "64ee8e8a3c69e74ccffba6ba",
          "name": "テント設営"
        },
        {
          "_id": "64ee8ea43c69e74ccffba6c3",
          "name": "システムパネル設営"
        },
        {
          "_id": "64ee8eea6277a3953e348899",
          "name": "トラス設営"
        },
        {
          "_id": "64eefba6d0fc7b08377c5bce",
          "name": "大道具"
        },
        {
          "_id": "6576723b13421357c39c62e5",
          "name": "施工スタッフ/手元"
        },
        {
          "_id": "6576725013421357c39c62ee",
          "name": "運搬"
        },
        {
          "_id": "6656cb51e1132a8850133916",
          "name": "施工管理（イベント）"
        },
        {
          "_id": "6656cb51e1132a8850133919",
          "name": "制作管理（イベント）"
        },
        {
          "_id": "6656cb52e1132a8850134d64",
          "name": "設計士"
        },
        {
          "_id": "6656cb52e1132a8850134d67",
          "name": "CADオペレーター"
        },
        {
          "tab": "64a244765ce4869a0cce4aab",
          "group": "64a244765ce4869a0cce4aae",
          "name": "サイン加工・貼り手",
          "status": true,
          "order": 700,
          "_id": "6656cb52e1132a8850134dfc",
          "createdAt": "2024-05-29T06:29:38.677Z",
          "updatedAt": "2024-05-29T06:29:38.677Z",
          "__v": 0
        }
      ],
      "mergegedOccupations": [
        {
          "_id": "64a244765ce4869a0cce4abb",
          "tab": "64a244765ce4869a0cce4aab",
          "group": "64a244765ce4869a0cce4aae",
          "name": "サイン・加工",
          "status": true,
          "order": 3,
          "createdAt": "2023-07-03T03:45:58.691Z",
          "updatedAt": "2023-07-03T03:45:58.691Z",
          "__v": 0
        },
        {
          "_id": "64a244765ce4869a0cce4ac5",
          "tab": "64a244765ce4869a0cce4aab",
          "group": "64a244765ce4869a0cce4aae",
          "name": "サイン・貼り手",
          "status": true,
          "order": 5,
          "createdAt": "2023-07-03T03:45:58.707Z",
          "updatedAt": "2023-07-03T03:45:58.707Z",
          "__v": 0
        }
      ],
      "insertedNewOccupationAsContractor": [
        {
          "tab": "64a244765ce4869a0cce4aab",
          "group": "64a244765ce4869a0cce4aae",
          "name": "サイン加工・貼り手",
          "status": true,
          "order": 700,
          "_id": "6656cb52e1132a8850134dfc",
          "createdAt": "2024-05-29T06:29:38.677Z",
          "updatedAt": "2024-05-29T06:29:38.677Z",
          "__v": 0
        }
      ]
    },
    {
      "companyId": "65b1c9b0629198361fe9522a",
      "companyName": "株式会社エイト",
      "companyOccupationBefore": [
        {
          "_id": "64a244765ce4869a0cce4ab1",
          "name": "大工（イベント）"
        },
        {
          "_id": "64a244765ce4869a0cce4ac5",
          "name": "サイン・貼り手"
        },
        {
          "_id": "64ee8e8a3c69e74ccffba6ba",
          "name": "テント設営"
        },
        {
          "_id": "64ee8ea43c69e74ccffba6c3",
          "name": "システムパネル設営"
        },
        {
          "_id": "64ee8eea6277a3953e348899",
          "name": "トラス設営"
        },
        {
          "_id": "6576723b13421357c39c62e5",
          "name": "施工スタッフ/手元"
        },
        {
          "_id": "6576725013421357c39c62ee",
          "name": "運搬"
        },
        {
          "_id": "6656cb51e1132a8850133916",
          "name": "施工管理（イベント）"
        },
        {
          "_id": "6656cb51e1132a8850133919",
          "name": "制作管理（イベント）"
        }
      ],
      "companyOccupationAfter": [
        {
          "_id": "64a244765ce4869a0cce4ab1",
          "name": "大工（イベント）"
        },
        {
          "_id": "64ee8e8a3c69e74ccffba6ba",
          "name": "テント設営"
        },
        {
          "_id": "64ee8ea43c69e74ccffba6c3",
          "name": "システムパネル設営"
        },
        {
          "_id": "64ee8eea6277a3953e348899",
          "name": "トラス設営"
        },
        {
          "_id": "6576723b13421357c39c62e5",
          "name": "施工スタッフ/手元"
        },
        {
          "_id": "6576725013421357c39c62ee",
          "name": "運搬"
        },
        {
          "_id": "6656cb51e1132a8850133916",
          "name": "施工管理（イベント）"
        },
        {
          "_id": "6656cb51e1132a8850133919",
          "name": "制作管理（イベント）"
        },
        {
          "tab": "64a244765ce4869a0cce4aab",
          "group": "64a244765ce4869a0cce4aae",
          "name": "サイン加工・貼り手",
          "status": true,
          "order": 700,
          "_id": "6656cb52e1132a8850134dfc",
          "createdAt": "2024-05-29T06:29:38.677Z",
          "updatedAt": "2024-05-29T06:29:38.677Z",
          "__v": 0
        }
      ],
      "mergegedOccupations": [
        {
          "_id": "64a244765ce4869a0cce4abb",
          "tab": "64a244765ce4869a0cce4aab",
          "group": "64a244765ce4869a0cce4aae",
          "name": "サイン・加工",
          "status": true,
          "order": 3,
          "createdAt": "2023-07-03T03:45:58.691Z",
          "updatedAt": "2023-07-03T03:45:58.691Z",
          "__v": 0
        },
        {
          "_id": "64a244765ce4869a0cce4ac5",
          "tab": "64a244765ce4869a0cce4aab",
          "group": "64a244765ce4869a0cce4aae",
          "name": "サイン・貼り手",
          "status": true,
          "order": 5,
          "createdAt": "2023-07-03T03:45:58.707Z",
          "updatedAt": "2023-07-03T03:45:58.707Z",
          "__v": 0
        }
      ],
      "insertedNewOccupation": [
        {
          "tab": "64a244765ce4869a0cce4aab",
          "group": "64a244765ce4869a0cce4aae",
          "name": "サイン加工・貼り手",
          "status": true,
          "order": 700,
          "_id": "6656cb52e1132a8850134dfc",
          "createdAt": "2024-05-29T06:29:38.677Z",
          "updatedAt": "2024-05-29T06:29:38.677Z",
          "__v": 0
        }
      ]
    },
    {
      "companyId": "65b1c9b0629198361fe9522a",
      "companyName": "株式会社エイト",
      "companyOccupationAsContractorBefore": [
        {
          "_id": "64a244765ce4869a0cce4ab1",
          "name": "大工（イベント）"
        },
        {
          "_id": "64a244765ce4869a0cce4ac5",
          "name": "サイン・貼り手"
        },
        {
          "_id": "64ee8e8a3c69e74ccffba6ba",
          "name": "テント設営"
        },
        {
          "_id": "64ee8ea43c69e74ccffba6c3",
          "name": "システムパネル設営"
        },
        {
          "_id": "64ee8eea6277a3953e348899",
          "name": "トラス設営"
        },
        {
          "_id": "6576723b13421357c39c62e5",
          "name": "施工スタッフ/手元"
        },
        {
          "_id": "6576725013421357c39c62ee",
          "name": "運搬"
        },
        {
          "_id": "6656cb51e1132a8850133916",
          "name": "施工管理（イベント）"
        },
        {
          "_id": "6656cb51e1132a8850133919",
          "name": "制作管理（イベント）"
        }
      ],
      "companyOccupationAsContractorAfter": [
        {
          "_id": "64a244765ce4869a0cce4ab1",
          "name": "大工（イベント）"
        },
        {
          "_id": "64ee8e8a3c69e74ccffba6ba",
          "name": "テント設営"
        },
        {
          "_id": "64ee8ea43c69e74ccffba6c3",
          "name": "システムパネル設営"
        },
        {
          "_id": "64ee8eea6277a3953e348899",
          "name": "トラス設営"
        },
        {
          "_id": "6576723b13421357c39c62e5",
          "name": "施工スタッフ/手元"
        },
        {
          "_id": "6576725013421357c39c62ee",
          "name": "運搬"
        },
        {
          "_id": "6656cb51e1132a8850133916",
          "name": "施工管理（イベント）"
        },
        {
          "_id": "6656cb51e1132a8850133919",
          "name": "制作管理（イベント）"
        },
        {
          "tab": "64a244765ce4869a0cce4aab",
          "group": "64a244765ce4869a0cce4aae",
          "name": "サイン加工・貼り手",
          "status": true,
          "order": 700,
          "_id": "6656cb52e1132a8850134dfc",
          "createdAt": "2024-05-29T06:29:38.677Z",
          "updatedAt": "2024-05-29T06:29:38.677Z",
          "__v": 0
        }
      ],
      "mergegedOccupations": [
        {
          "_id": "64a244765ce4869a0cce4abb",
          "tab": "64a244765ce4869a0cce4aab",
          "group": "64a244765ce4869a0cce4aae",
          "name": "サイン・加工",
          "status": true,
          "order": 3,
          "createdAt": "2023-07-03T03:45:58.691Z",
          "updatedAt": "2023-07-03T03:45:58.691Z",
          "__v": 0
        },
        {
          "_id": "64a244765ce4869a0cce4ac5",
          "tab": "64a244765ce4869a0cce4aab",
          "group": "64a244765ce4869a0cce4aae",
          "name": "サイン・貼り手",
          "status": true,
          "order": 5,
          "createdAt": "2023-07-03T03:45:58.707Z",
          "updatedAt": "2023-07-03T03:45:58.707Z",
          "__v": 0
        }
      ],
      "insertedNewOccupationAsContractor": [
        {
          "tab": "64a244765ce4869a0cce4aab",
          "group": "64a244765ce4869a0cce4aae",
          "name": "サイン加工・貼り手",
          "status": true,
          "order": 700,
          "_id": "6656cb52e1132a8850134dfc",
          "createdAt": "2024-05-29T06:29:38.677Z",
          "updatedAt": "2024-05-29T06:29:38.677Z",
          "__v": 0
        }
      ]
    },
    {
      "companyId": "6639b6d467983388e45492a7",
      "companyName": "株式会社一朶や",
      "companyOccupationBefore": [
        {
          "_id": "64a244765ce4869a0cce4ab1",
          "name": "大工（イベント）"
        },
        {
          "_id": "64eefba6d0fc7b08377c5bce",
          "name": "大道具"
        },
        {
          "_id": "64a244765ce4869a0cce4ac0",
          "name": "サインオペレーター（DTP）"
        },
        {
          "_id": "64a244765ce4869a0cce4ac5",
          "name": "サイン・貼り手"
        },
        {
          "_id": "64a244765ce4869a0cce4abb",
          "name": "サイン・加工"
        },
        {
          "_id": "64a244765ce4869a0cce4aca",
          "name": "経師/表具"
        },
        {
          "_id": "64ee8ea43c69e74ccffba6c3",
          "name": "システムパネル設営"
        },
        {
          "_id": "6576723b13421357c39c62e5",
          "name": "施工スタッフ/手元"
        },
        {
          "_id": "6576725013421357c39c62ee",
          "name": "運搬"
        },
        {
          "_id": "6656cb51e1132a8850133916",
          "name": "施工管理（イベント）"
        },
        {
          "_id": "6656cb51e1132a8850133919",
          "name": "制作管理（イベント）"
        }
      ],
      "companyOccupationAfter": [
        {
          "_id": "64a244765ce4869a0cce4ab1",
          "name": "大工（イベント）"
        },
        {
          "_id": "64eefba6d0fc7b08377c5bce",
          "name": "大道具"
        },
        {
          "_id": "64a244765ce4869a0cce4ac0",
          "name": "サインオペレーター（DTP）"
        },
        {
          "_id": "64a244765ce4869a0cce4aca",
          "name": "経師/表具"
        },
        {
          "_id": "64ee8ea43c69e74ccffba6c3",
          "name": "システムパネル設営"
        },
        {
          "_id": "6576723b13421357c39c62e5",
          "name": "施工スタッフ/手元"
        },
        {
          "_id": "6576725013421357c39c62ee",
          "name": "運搬"
        },
        {
          "_id": "6656cb51e1132a8850133916",
          "name": "施工管理（イベント）"
        },
        {
          "_id": "6656cb51e1132a8850133919",
          "name": "制作管理（イベント）"
        },
        {
          "tab": "64a244765ce4869a0cce4aab",
          "group": "64a244765ce4869a0cce4aae",
          "name": "サイン加工・貼り手",
          "status": true,
          "order": 700,
          "_id": "6656cb52e1132a8850134dfc",
          "createdAt": "2024-05-29T06:29:38.677Z",
          "updatedAt": "2024-05-29T06:29:38.677Z",
          "__v": 0
        }
      ],
      "mergegedOccupations": [
        {
          "_id": "64a244765ce4869a0cce4abb",
          "tab": "64a244765ce4869a0cce4aab",
          "group": "64a244765ce4869a0cce4aae",
          "name": "サイン・加工",
          "status": true,
          "order": 3,
          "createdAt": "2023-07-03T03:45:58.691Z",
          "updatedAt": "2023-07-03T03:45:58.691Z",
          "__v": 0
        },
        {
          "_id": "64a244765ce4869a0cce4ac5",
          "tab": "64a244765ce4869a0cce4aab",
          "group": "64a244765ce4869a0cce4aae",
          "name": "サイン・貼り手",
          "status": true,
          "order": 5,
          "createdAt": "2023-07-03T03:45:58.707Z",
          "updatedAt": "2023-07-03T03:45:58.707Z",
          "__v": 0
        }
      ],
      "insertedNewOccupation": [
        {
          "tab": "64a244765ce4869a0cce4aab",
          "group": "64a244765ce4869a0cce4aae",
          "name": "サイン加工・貼り手",
          "status": true,
          "order": 700,
          "_id": "6656cb52e1132a8850134dfc",
          "createdAt": "2024-05-29T06:29:38.677Z",
          "updatedAt": "2024-05-29T06:29:38.677Z",
          "__v": 0
        }
      ]
    },
    {
      "companyId": "654add6572708314c8705e68",
      "companyName": "株式会社ケシオン",
      "companyOccupationBefore": [
        {
          "_id": "64a244765ce4869a0cce4ab1",
          "name": "大工（イベント）"
        },
        {
          "_id": "64eefba6d0fc7b08377c5bce",
          "name": "大道具"
        },
        {
          "_id": "64a244765ce4869a0cce4aca",
          "name": "経師/表具"
        },
        {
          "_id": "64a244765ce4869a0cce4acf",
          "name": "電気工事（仮設）"
        },
        {
          "_id": "64a244765ce4869a0cce4ad4",
          "name": "給排水工事（仮設）"
        },
        {
          "_id": "64ee8e8a3c69e74ccffba6ba",
          "name": "テント設営"
        },
        {
          "_id": "64ee8ea43c69e74ccffba6c3",
          "name": "システムパネル設営"
        },
        {
          "_id": "64ee8eea6277a3953e348899",
          "name": "トラス設営"
        },
        {
          "_id": "6576723b13421357c39c62e5",
          "name": "施工スタッフ/手元"
        },
        {
          "_id": "6576725013421357c39c62ee",
          "name": "運搬"
        },
        {
          "_id": "64a244765ce4869a0cce4ae0",
          "name": "クリエイティブディレクター"
        },
        {
          "_id": "64a244765ce4869a0cce4ae5",
          "name": "グラフィックデザイナー"
        },
        {
          "_id": "64a244765ce4869a0cce4aea",
          "name": "空間デザイナー"
        },
        {
          "_id": "64a244765ce4869a0cce4aef",
          "name": "Webデザイナー"
        },
        {
          "_id": "64a244765ce4869a0cce4af4",
          "name": "CGデザイナー"
        },
        {
          "_id": "64a244765ce4869a0cce4ad9",
          "name": "デコレーター"
        },
        {
          "_id": "64a244765ce4869a0cce4b00",
          "name": "イベント運営ディレクター"
        },
        {
          "_id": "64a244765ce4869a0cce4b05",
          "name": "イベント運営アシスタントディレクター"
        },
        {
          "_id": "64a244765ce4869a0cce4b0a",
          "name": "イベント運営スタッフ"
        },
        {
          "_id": "64a244765ce4869a0cce4af9",
          "name": "イベントプランナー"
        },
        {
          "_id": "64a244765ce4869a0cce4b36",
          "name": "内装大工"
        },
        {
          "_id": "64a244765ce4869a0cce4b3b",
          "name": "塗装工事"
        },
        {
          "_id": "64a244765ce4869a0cce4b40",
          "name": "クロス工事"
        },
        {
          "_id": "64a244765ce4869a0cce4b45",
          "name": "床仕上工事"
        },
        {
          "_id": "64f67e5f244e38b9948a5be6",
          "name": "床工事(OA含む)"
        },
        {
          "_id": "64a244765ce4869a0cce4b4a",
          "name": "化粧フィルム・シート工事"
        },
        {
          "_id": "64a244765ce4869a0cce4b4f",
          "name": "防音工事"
        },
        {
          "_id": "64a244765ce4869a0cce4b54",
          "name": "軽鉄工事"
        },
        {
          "_id": "64a244765ce4869a0cce4b59",
          "name": "軽量ボード工事"
        },
        {
          "_id": "64a244765ce4869a0cce4b5e",
          "name": "電気工事(内装)"
        },
        {
          "_id": "64a244765ce4869a0cce4b63",
          "name": "給排水・給湯設備工事"
        },
        {
          "_id": "64a244765ce4869a0cce4b68",
          "name": "内装解体工事"
        },
        {
          "_id": "64a244765ce4869a0cce4b6d",
          "name": "内装清掃"
        },
        {
          "_id": "64a244765ce4869a0cce4b20",
          "name": "舞台監督"
        },
        {
          "_id": "64a244765ce4869a0cce4b25",
          "name": "カメラマン・スチール"
        },
        {
          "_id": "64a244765ce4869a0cce4b2a",
          "name": "カメラマン・ムービー"
        },
        {
          "_id": "64a244765ce4869a0cce4b2f",
          "name": "通訳"
        },
        {
          "_id": "64a244765ce4869a0cce4ab6",
          "name": "鳶（イベント）"
        },
        {
          "_id": "64a244765ce4869a0cce4ac0",
          "name": "サインオペレーター（DTP）"
        },
        {
          "_id": "6656cb51e1132a8850133916",
          "name": "施工管理（イベント）"
        },
        {
          "_id": "6656cb51e1132a8850133919",
          "name": "制作管理（イベント）"
        },
        {
          "_id": "6656cb51e1132a8850133aad",
          "name": "PAエンジニア"
        },
        {
          "_id": "6656cb51e1132a8850133ab0",
          "name": "レコーディングエンジニア"
        },
        {
          "_id": "6656cb51e1132a8850133ab3",
          "name": "MAエンジニア"
        },
        {
          "_id": "6656cb51e1132a8850133ab6",
          "name": "音声"
        },
        {
          "_id": "6656cb51e1132a8850133ab9",
          "name": "音響スタッフ"
        },
        {
          "_id": "6656cb52e1132a88501341f8",
          "name": "照明オペレーター（プランナー）"
        },
        {
          "_id": "6656cb52e1132a88501341fb",
          "name": "レーザーオペレーター"
        },
        {
          "_id": "6656cb52e1132a88501341fe",
          "name": "ピンスポットオペレーター"
        },
        {
          "_id": "6656cb52e1132a8850134201",
          "name": "撮影照明"
        },
        {
          "_id": "6656cb52e1132a8850134204",
          "name": "照明スタッフ"
        },
        {
          "_id": "6656cb52e1132a8850134592",
          "name": "映像オペレーター（スイッチャー）"
        },
        {
          "_id": "6656cb52e1132a8850134595",
          "name": "配信管理オペレーター"
        },
        {
          "_id": "6656cb52e1132a8850134598",
          "name": "映像アシスタント（設営スタッフ）"
        },
        {
          "_id": "6656cb52e1132a88501348a8",
          "name": "映像編集"
        },
        {
          "_id": "6656cb52e1132a88501348ab",
          "name": "映像制作"
        },
        {
          "_id": "6656cb52e1132a8850134d64",
          "name": "設計士"
        },
        {
          "_id": "6656cb52e1132a8850134d67",
          "name": "CADオペレーター"
        },
        {
          "_id": "6656cb52e1132a8850134dfc",
          "name": "サイン加工・貼り手"
        }
      ],
      "companyOccupationAfter": [
        {
          "_id": "64a244765ce4869a0cce4ab1",
          "name": "大工（イベント）"
        },
        {
          "_id": "64eefba6d0fc7b08377c5bce",
          "name": "大道具"
        },
        {
          "_id": "64a244765ce4869a0cce4aca",
          "name": "経師/表具"
        },
        {
          "_id": "64a244765ce4869a0cce4acf",
          "name": "電気工事（仮設）"
        },
        {
          "_id": "64a244765ce4869a0cce4ad4",
          "name": "給排水工事（仮設）"
        },
        {
          "_id": "64ee8e8a3c69e74ccffba6ba",
          "name": "テント設営"
        },
        {
          "_id": "64ee8ea43c69e74ccffba6c3",
          "name": "システムパネル設営"
        },
        {
          "_id": "64ee8eea6277a3953e348899",
          "name": "トラス設営"
        },
        {
          "_id": "6576723b13421357c39c62e5",
          "name": "施工スタッフ/手元"
        },
        {
          "_id": "6576725013421357c39c62ee",
          "name": "運搬"
        },
        {
          "_id": "64a244765ce4869a0cce4ae0",
          "name": "クリエイティブディレクター"
        },
        {
          "_id": "64a244765ce4869a0cce4ae5",
          "name": "グラフィックデザイナー"
        },
        {
          "_id": "64a244765ce4869a0cce4aea",
          "name": "空間デザイナー"
        },
        {
          "_id": "64a244765ce4869a0cce4aef",
          "name": "Webデザイナー"
        },
        {
          "_id": "64a244765ce4869a0cce4af4",
          "name": "CGデザイナー"
        },
        {
          "_id": "64a244765ce4869a0cce4ad9",
          "name": "デコレーター"
        },
        {
          "_id": "64a244765ce4869a0cce4b00",
          "name": "イベント運営ディレクター"
        },
        {
          "_id": "64a244765ce4869a0cce4b05",
          "name": "イベント運営アシスタントディレクター"
        },
        {
          "_id": "64a244765ce4869a0cce4b0a",
          "name": "イベント運営スタッフ"
        },
        {
          "_id": "64a244765ce4869a0cce4af9",
          "name": "イベントプランナー"
        },
        {
          "_id": "64a244765ce4869a0cce4b36",
          "name": "内装大工"
        },
        {
          "_id": "64a244765ce4869a0cce4b3b",
          "name": "塗装工事"
        },
        {
          "_id": "64a244765ce4869a0cce4b40",
          "name": "クロス工事"
        },
        {
          "_id": "64a244765ce4869a0cce4b4a",
          "name": "化粧フィルム・シート工事"
        },
        {
          "_id": "64a244765ce4869a0cce4b4f",
          "name": "防音工事"
        },
        {
          "_id": "64a244765ce4869a0cce4b54",
          "name": "軽鉄工事"
        },
        {
          "_id": "64a244765ce4869a0cce4b59",
          "name": "軽量ボード工事"
        },
        {
          "_id": "64a244765ce4869a0cce4b5e",
          "name": "電気工事(内装)"
        },
        {
          "_id": "64a244765ce4869a0cce4b63",
          "name": "給排水・給湯設備工事"
        },
        {
          "_id": "64a244765ce4869a0cce4b68",
          "name": "内装解体工事"
        },
        {
          "_id": "64a244765ce4869a0cce4b6d",
          "name": "内装清掃"
        },
        {
          "_id": "64a244765ce4869a0cce4b20",
          "name": "舞台監督"
        },
        {
          "_id": "64a244765ce4869a0cce4b25",
          "name": "カメラマン・スチール"
        },
        {
          "_id": "64a244765ce4869a0cce4b2a",
          "name": "カメラマン・ムービー"
        },
        {
          "_id": "64a244765ce4869a0cce4b2f",
          "name": "通訳"
        },
        {
          "_id": "64a244765ce4869a0cce4ab6",
          "name": "鳶（イベント）"
        },
        {
          "_id": "64a244765ce4869a0cce4ac0",
          "name": "サインオペレーター（DTP）"
        },
        {
          "_id": "6656cb51e1132a8850133916",
          "name": "施工管理（イベント）"
        },
        {
          "_id": "6656cb51e1132a8850133919",
          "name": "制作管理（イベント）"
        },
        {
          "_id": "6656cb51e1132a8850133aad",
          "name": "PAエンジニア"
        },
        {
          "_id": "6656cb51e1132a8850133ab0",
          "name": "レコーディングエンジニア"
        },
        {
          "_id": "6656cb51e1132a8850133ab3",
          "name": "MAエンジニア"
        },
        {
          "_id": "6656cb51e1132a8850133ab6",
          "name": "音声"
        },
        {
          "_id": "6656cb51e1132a8850133ab9",
          "name": "音響スタッフ"
        },
        {
          "_id": "6656cb52e1132a88501341f8",
          "name": "照明オペレーター（プランナー）"
        },
        {
          "_id": "6656cb52e1132a88501341fb",
          "name": "レーザーオペレーター"
        },
        {
          "_id": "6656cb52e1132a88501341fe",
          "name": "ピンスポットオペレーター"
        },
        {
          "_id": "6656cb52e1132a8850134201",
          "name": "撮影照明"
        },
        {
          "_id": "6656cb52e1132a8850134204",
          "name": "照明スタッフ"
        },
        {
          "_id": "6656cb52e1132a8850134592",
          "name": "映像オペレーター（スイッチャー）"
        },
        {
          "_id": "6656cb52e1132a8850134595",
          "name": "配信管理オペレーター"
        },
        {
          "_id": "6656cb52e1132a8850134598",
          "name": "映像アシスタント（設営スタッフ）"
        },
        {
          "_id": "6656cb52e1132a88501348a8",
          "name": "映像編集"
        },
        {
          "_id": "6656cb52e1132a88501348ab",
          "name": "映像制作"
        },
        {
          "_id": "6656cb52e1132a8850134d64",
          "name": "設計士"
        },
        {
          "_id": "6656cb52e1132a8850134d67",
          "name": "CADオペレーター"
        },
        {
          "_id": "6656cb52e1132a8850134dfc",
          "name": "サイン加工・貼り手"
        },
        {
          "tab": "64a244765ce4869a0cce4aab",
          "group": "64a244765ce4869a0cce4b33",
          "name": "内装床工事（OA含む）",
          "status": true,
          "order": 701,
          "_id": "6656cb52e1132a8850134e9b",
          "createdAt": "2024-05-29T06:29:38.750Z",
          "updatedAt": "2024-05-29T06:29:38.750Z",
          "__v": 0
        }
      ],
      "mergegedOccupations": [
        {
          "_id": "64a244765ce4869a0cce4b45",
          "tab": "64a244765ce4869a0cce4aab",
          "group": "64a244765ce4869a0cce4b33",
          "name": "床仕上工事",
          "status": true,
          "order": 504,
          "createdAt": "2023-07-03T03:45:58.890Z",
          "updatedAt": "2023-09-05T01:02:55.892Z",
          "__v": 0
        },
        {
          "_id": "64f67e5f244e38b9948a5be6",
          "tab": "64a244765ce4869a0cce4aab",
          "group": "64a244765ce4869a0cce4b33",
          "name": "床工事(OA含む)",
          "status": true,
          "order": 504,
          "createdAt": "2023-09-05T01:03:27.910Z",
          "updatedAt": "2023-09-05T01:03:38.507Z",
          "__v": 0
        }
      ],
      "insertedNewOccupation": [
        {
          "tab": "64a244765ce4869a0cce4aab",
          "group": "64a244765ce4869a0cce4b33",
          "name": "内装床工事（OA含む）",
          "status": true,
          "order": 701,
          "_id": "6656cb52e1132a8850134e9b",
          "createdAt": "2024-05-29T06:29:38.750Z",
          "updatedAt": "2024-05-29T06:29:38.750Z",
          "__v": 0
        }
      ]
    },
    {
      "companyId": "6552d02d250a940909eefa95",
      "companyName": "株式会社SHO-CASE",
      "companyOccupationBefore": [
        {
          "_id": "64a244765ce4869a0cce4ab1",
          "name": "大工（イベント）"
        },
        {
          "_id": "64a244765ce4869a0cce4ab6",
          "name": "鳶（イベント）"
        },
        {
          "_id": "64a244765ce4869a0cce4ac0",
          "name": "サインオペレーター（DTP）"
        },
        {
          "_id": "64a244765ce4869a0cce4aca",
          "name": "経師/表具"
        },
        {
          "_id": "64a244765ce4869a0cce4acf",
          "name": "電気工事（仮設）"
        },
        {
          "_id": "64a244765ce4869a0cce4ad4",
          "name": "給排水工事（仮設）"
        },
        {
          "_id": "64a244765ce4869a0cce4ad9",
          "name": "デコレーター"
        },
        {
          "_id": "64a244765ce4869a0cce4b36",
          "name": "内装大工"
        },
        {
          "_id": "64a244765ce4869a0cce4b3b",
          "name": "塗装工事"
        },
        {
          "_id": "64a244765ce4869a0cce4b40",
          "name": "クロス工事"
        },
        {
          "_id": "64a244765ce4869a0cce4b45",
          "name": "床仕上工事"
        },
        {
          "_id": "64a244765ce4869a0cce4b4a",
          "name": "化粧フィルム・シート工事"
        },
        {
          "_id": "64a244765ce4869a0cce4b4f",
          "name": "防音工事"
        },
        {
          "_id": "64a244765ce4869a0cce4b54",
          "name": "軽鉄工事"
        },
        {
          "_id": "64a244765ce4869a0cce4b59",
          "name": "軽量ボード工事"
        },
        {
          "_id": "64a244765ce4869a0cce4b5e",
          "name": "電気工事(内装)"
        },
        {
          "_id": "64a244765ce4869a0cce4b63",
          "name": "給排水・給湯設備工事"
        },
        {
          "_id": "64a244765ce4869a0cce4b68",
          "name": "内装解体工事"
        },
        {
          "_id": "64a244765ce4869a0cce4b6d",
          "name": "内装清掃"
        },
        {
          "_id": "64ee8e8a3c69e74ccffba6ba",
          "name": "テント設営"
        },
        {
          "_id": "64ee8ea43c69e74ccffba6c3",
          "name": "システムパネル設営"
        },
        {
          "_id": "64ee8eea6277a3953e348899",
          "name": "トラス設営"
        },
        {
          "_id": "64eefba6d0fc7b08377c5bce",
          "name": "大道具"
        },
        {
          "_id": "64f67e5f244e38b9948a5be6",
          "name": "床工事(OA含む)"
        },
        {
          "_id": "6656cb52e1132a8850134dfc",
          "name": "サイン加工・貼り手"
        }
      ],
      "companyOccupationAfter": [
        {
          "_id": "64a244765ce4869a0cce4ab1",
          "name": "大工（イベント）"
        },
        {
          "_id": "64a244765ce4869a0cce4ab6",
          "name": "鳶（イベント）"
        },
        {
          "_id": "64a244765ce4869a0cce4ac0",
          "name": "サインオペレーター（DTP）"
        },
        {
          "_id": "64a244765ce4869a0cce4aca",
          "name": "経師/表具"
        },
        {
          "_id": "64a244765ce4869a0cce4acf",
          "name": "電気工事（仮設）"
        },
        {
          "_id": "64a244765ce4869a0cce4ad4",
          "name": "給排水工事（仮設）"
        },
        {
          "_id": "64a244765ce4869a0cce4ad9",
          "name": "デコレーター"
        },
        {
          "_id": "64a244765ce4869a0cce4b36",
          "name": "内装大工"
        },
        {
          "_id": "64a244765ce4869a0cce4b3b",
          "name": "塗装工事"
        },
        {
          "_id": "64a244765ce4869a0cce4b40",
          "name": "クロス工事"
        },
        {
          "_id": "64a244765ce4869a0cce4b4a",
          "name": "化粧フィルム・シート工事"
        },
        {
          "_id": "64a244765ce4869a0cce4b4f",
          "name": "防音工事"
        },
        {
          "_id": "64a244765ce4869a0cce4b54",
          "name": "軽鉄工事"
        },
        {
          "_id": "64a244765ce4869a0cce4b59",
          "name": "軽量ボード工事"
        },
        {
          "_id": "64a244765ce4869a0cce4b5e",
          "name": "電気工事(内装)"
        },
        {
          "_id": "64a244765ce4869a0cce4b63",
          "name": "給排水・給湯設備工事"
        },
        {
          "_id": "64a244765ce4869a0cce4b68",
          "name": "内装解体工事"
        },
        {
          "_id": "64a244765ce4869a0cce4b6d",
          "name": "内装清掃"
        },
        {
          "_id": "64ee8e8a3c69e74ccffba6ba",
          "name": "テント設営"
        },
        {
          "_id": "64ee8ea43c69e74ccffba6c3",
          "name": "システムパネル設営"
        },
        {
          "_id": "64ee8eea6277a3953e348899",
          "name": "トラス設営"
        },
        {
          "_id": "64eefba6d0fc7b08377c5bce",
          "name": "大道具"
        },
        {
          "_id": "6656cb52e1132a8850134dfc",
          "name": "サイン加工・貼り手"
        },
        {
          "tab": "64a244765ce4869a0cce4aab",
          "group": "64a244765ce4869a0cce4b33",
          "name": "内装床工事（OA含む）",
          "status": true,
          "order": 701,
          "_id": "6656cb52e1132a8850134e9b",
          "createdAt": "2024-05-29T06:29:38.750Z",
          "updatedAt": "2024-05-29T06:29:38.750Z",
          "__v": 0
        }
      ],
      "mergegedOccupations": [
        {
          "_id": "64a244765ce4869a0cce4b45",
          "tab": "64a244765ce4869a0cce4aab",
          "group": "64a244765ce4869a0cce4b33",
          "name": "床仕上工事",
          "status": true,
          "order": 504,
          "createdAt": "2023-07-03T03:45:58.890Z",
          "updatedAt": "2023-09-05T01:02:55.892Z",
          "__v": 0
        },
        {
          "_id": "64f67e5f244e38b9948a5be6",
          "tab": "64a244765ce4869a0cce4aab",
          "group": "64a244765ce4869a0cce4b33",
          "name": "床工事(OA含む)",
          "status": true,
          "order": 504,
          "createdAt": "2023-09-05T01:03:27.910Z",
          "updatedAt": "2023-09-05T01:03:38.507Z",
          "__v": 0
        }
      ],
      "insertedNewOccupation": [
        {
          "tab": "64a244765ce4869a0cce4aab",
          "group": "64a244765ce4869a0cce4b33",
          "name": "内装床工事（OA含む）",
          "status": true,
          "order": 701,
          "_id": "6656cb52e1132a8850134e9b",
          "createdAt": "2024-05-29T06:29:38.750Z",
          "updatedAt": "2024-05-29T06:29:38.750Z",
          "__v": 0
        }
      ]
    },
    {
      "companyId": "6566ecb6b6cd39373d81a7ec",
      "companyName": "株式会社サンセーコー",
      "companyOccupationBefore": [
        {
          "_id": "64a244765ce4869a0cce4b40",
          "name": "クロス工事"
        },
        {
          "_id": "64a244765ce4869a0cce4b45",
          "name": "床仕上工事"
        },
        {
          "_id": "64a244765ce4869a0cce4aca",
          "name": "経師/表具"
        }
      ],
      "companyOccupationAfter": [
        {
          "_id": "64a244765ce4869a0cce4b40",
          "name": "クロス工事"
        },
        {
          "_id": "64a244765ce4869a0cce4aca",
          "name": "経師/表具"
        },
        {
          "tab": "64a244765ce4869a0cce4aab",
          "group": "64a244765ce4869a0cce4b33",
          "name": "内装床工事（OA含む）",
          "status": true,
          "order": 701,
          "_id": "6656cb52e1132a8850134e9b",
          "createdAt": "2024-05-29T06:29:38.750Z",
          "updatedAt": "2024-05-29T06:29:38.750Z",
          "__v": 0
        }
      ],
      "mergegedOccupations": [
        {
          "_id": "64a244765ce4869a0cce4b45",
          "tab": "64a244765ce4869a0cce4aab",
          "group": "64a244765ce4869a0cce4b33",
          "name": "床仕上工事",
          "status": true,
          "order": 504,
          "createdAt": "2023-07-03T03:45:58.890Z",
          "updatedAt": "2023-09-05T01:02:55.892Z",
          "__v": 0
        },
        {
          "_id": "64f67e5f244e38b9948a5be6",
          "tab": "64a244765ce4869a0cce4aab",
          "group": "64a244765ce4869a0cce4b33",
          "name": "床工事(OA含む)",
          "status": true,
          "order": 504,
          "createdAt": "2023-09-05T01:03:27.910Z",
          "updatedAt": "2023-09-05T01:03:38.507Z",
          "__v": 0
        }
      ],
      "insertedNewOccupation": [
        {
          "tab": "64a244765ce4869a0cce4aab",
          "group": "64a244765ce4869a0cce4b33",
          "name": "内装床工事（OA含む）",
          "status": true,
          "order": 701,
          "_id": "6656cb52e1132a8850134e9b",
          "createdAt": "2024-05-29T06:29:38.750Z",
          "updatedAt": "2024-05-29T06:29:38.750Z",
          "__v": 0
        }
      ]
    }
  ]

// Create a new workbook and worksheet
const workbook = xlsx.utils.book_new();
const worksheetData = [];

// Add header row
worksheetData.push([
    'companyId', 'companyName', 
    'companyOccupationBefore/_id', 'companyOccupationBefore/name', 
    'companyOccupationAfter/_id', 'companyOccupationAfter/name'
]);

// Process each company entry
data.forEach(company => {
    const maxRows = Math.max(company?.companyOccupationBefore?.length, company?.companyOccupationAfter?.length);
    for (let i = 0; i < maxRows; i++) {
        worksheetData.push([
            company.companyId,
            company.companyName,
            company.companyOccupationBefore[i] ? company.companyOccupationBefore[i]._id : '',
            company.companyOccupationBefore[i] ? company.companyOccupationBefore[i].name : '',
            company.companyOccupationAfter[i] ? company.companyOccupationAfter[i]._id : '',
            company.companyOccupationAfter[i] ? company.companyOccupationAfter[i].name : ''
        ]);
    }
});

// Add data to worksheet
const worksheet = xlsx.utils.aoa_to_sheet(worksheetData);

// Add worksheet to workbook
xlsx.utils.book_append_sheet(workbook, worksheet, 'Sheet1');

// Write to file
xlsx.writeFile(workbook, 'output1.xlsx');
console.log('Excel file created: output.xlsx');
