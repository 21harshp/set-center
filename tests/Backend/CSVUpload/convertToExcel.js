import xlsx from 'xlsx';

// Your JSON data
const data = [
    {
      "companyId": "65377cb707261dc34a88d7e7",
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
          "_id": "6655b7f90eff12f99be0b45f",
          "createdAt": "2024-05-28T10:54:49.678Z",
          "updatedAt": "2024-05-28T10:54:49.678Z",
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
          "_id": "6655b7f90eff12f99be0b45f",
          "createdAt": "2024-05-28T10:54:49.678Z",
          "updatedAt": "2024-05-28T10:54:49.678Z",
          "__v": 0
        }
      ]
    },
    {
      "companyId": "65377cb707261dc34a88d7e7",
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
          "_id": "6655b7f90eff12f99be0b45f",
          "createdAt": "2024-05-28T10:54:49.678Z",
          "updatedAt": "2024-05-28T10:54:49.678Z",
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
          "_id": "6655b7f90eff12f99be0b45f",
          "createdAt": "2024-05-28T10:54:49.678Z",
          "updatedAt": "2024-05-28T10:54:49.678Z",
          "__v": 0
        }
      ]
    },
    {
      "companyId": "654add6572708314c8705e68",
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
          "name": "舞台監督（進行管理）"
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
          "_id": "6655b7970eff12f99be0a047",
          "name": "施工管理（イベント）"
        },
        {
          "_id": "6655b7970eff12f99be0a04a",
          "name": "制作管理（イベント）"
        },
        {
          "_id": "6655b7a30eff12f99be0a1de",
          "name": "PAエンジニア"
        },
        {
          "_id": "6655b7a30eff12f99be0a1e1",
          "name": "レコーディングエンジニア"
        },
        {
          "_id": "6655b7a30eff12f99be0a1e4",
          "name": "MAエンジニア"
        },
        {
          "_id": "6655b7a30eff12f99be0a1e7",
          "name": "音声"
        },
        {
          "_id": "6655b7a30eff12f99be0a1ea",
          "name": "音響スタッフ"
        },
        {
          "_id": "6655b7bb0eff12f99be0a929",
          "name": "照明オペレーター（プランナー）"
        },
        {
          "_id": "6655b7bb0eff12f99be0a92c",
          "name": "レーザーオペレーター"
        },
        {
          "_id": "6655b7bb0eff12f99be0a92f",
          "name": "ピンスポットオペレーター"
        },
        {
          "_id": "6655b7bb0eff12f99be0a932",
          "name": "撮影照明"
        },
        {
          "_id": "6655b7bb0eff12f99be0a935",
          "name": "照明スタッフ"
        },
        {
          "_id": "6655b7c80eff12f99be0acc3",
          "name": "映像オペレーター（スイッチャー）"
        },
        {
          "_id": "6655b7c80eff12f99be0acc6",
          "name": "配信管理オペレーター"
        },
        {
          "_id": "6655b7c80eff12f99be0acc9",
          "name": "映像アシスタント（設営スタッフ）"
        },
        {
          "_id": "6655b7d70eff12f99be0afd9",
          "name": "映像編集"
        },
        {
          "_id": "6655b7d80eff12f99be0afdc",
          "name": "映像制作"
        },
        {
          "_id": "6655b7f50eff12f99be0b3c7",
          "name": "設計士"
        },
        {
          "_id": "6655b7f50eff12f99be0b3ca",
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
          "name": "舞台監督（進行管理）"
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
          "_id": "6655b7970eff12f99be0a047",
          "name": "施工管理（イベント）"
        },
        {
          "_id": "6655b7970eff12f99be0a04a",
          "name": "制作管理（イベント）"
        },
        {
          "_id": "6655b7a30eff12f99be0a1de",
          "name": "PAエンジニア"
        },
        {
          "_id": "6655b7a30eff12f99be0a1e1",
          "name": "レコーディングエンジニア"
        },
        {
          "_id": "6655b7a30eff12f99be0a1e4",
          "name": "MAエンジニア"
        },
        {
          "_id": "6655b7a30eff12f99be0a1e7",
          "name": "音声"
        },
        {
          "_id": "6655b7a30eff12f99be0a1ea",
          "name": "音響スタッフ"
        },
        {
          "_id": "6655b7bb0eff12f99be0a929",
          "name": "照明オペレーター（プランナー）"
        },
        {
          "_id": "6655b7bb0eff12f99be0a92c",
          "name": "レーザーオペレーター"
        },
        {
          "_id": "6655b7bb0eff12f99be0a92f",
          "name": "ピンスポットオペレーター"
        },
        {
          "_id": "6655b7bb0eff12f99be0a932",
          "name": "撮影照明"
        },
        {
          "_id": "6655b7bb0eff12f99be0a935",
          "name": "照明スタッフ"
        },
        {
          "_id": "6655b7c80eff12f99be0acc3",
          "name": "映像オペレーター（スイッチャー）"
        },
        {
          "_id": "6655b7c80eff12f99be0acc6",
          "name": "配信管理オペレーター"
        },
        {
          "_id": "6655b7c80eff12f99be0acc9",
          "name": "映像アシスタント（設営スタッフ）"
        },
        {
          "_id": "6655b7d70eff12f99be0afd9",
          "name": "映像編集"
        },
        {
          "_id": "6655b7d80eff12f99be0afdc",
          "name": "映像制作"
        },
        {
          "_id": "6655b7f50eff12f99be0b3c7",
          "name": "設計士"
        },
        {
          "_id": "6655b7f50eff12f99be0b3ca",
          "name": "CADオペレーター"
        },
        {
          "tab": "64a244765ce4869a0cce4aab",
          "group": "64a244765ce4869a0cce4aae",
          "name": "サイン加工・貼り手",
          "status": true,
          "order": 700,
          "_id": "6655b7f90eff12f99be0b45f",
          "createdAt": "2024-05-28T10:54:49.678Z",
          "updatedAt": "2024-05-28T10:54:49.678Z",
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
          "_id": "6655b7f90eff12f99be0b45f",
          "createdAt": "2024-05-28T10:54:49.678Z",
          "updatedAt": "2024-05-28T10:54:49.678Z",
          "__v": 0
        }
      ]
    },
    {
      "companyId": "6552d02d250a940909eefa95",
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
          "_id": "6655b7f90eff12f99be0b45f",
          "createdAt": "2024-05-28T10:54:49.678Z",
          "updatedAt": "2024-05-28T10:54:49.678Z",
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
          "_id": "6655b7f90eff12f99be0b45f",
          "createdAt": "2024-05-28T10:54:49.678Z",
          "updatedAt": "2024-05-28T10:54:49.678Z",
          "__v": 0
        }
      ]
    },
    {
      "companyId": "655ac509250a940909ef1721",
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
          "_id": "6655b7970eff12f99be0a047",
          "name": "施工管理（イベント）"
        },
        {
          "_id": "6655b7970eff12f99be0a04a",
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
          "_id": "6655b7970eff12f99be0a047",
          "name": "施工管理（イベント）"
        },
        {
          "_id": "6655b7970eff12f99be0a04a",
          "name": "制作管理（イベント）"
        },
        {
          "tab": "64a244765ce4869a0cce4aab",
          "group": "64a244765ce4869a0cce4aae",
          "name": "サイン加工・貼り手",
          "status": true,
          "order": 700,
          "_id": "6655b7f90eff12f99be0b45f",
          "createdAt": "2024-05-28T10:54:49.678Z",
          "updatedAt": "2024-05-28T10:54:49.678Z",
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
          "_id": "6655b7f90eff12f99be0b45f",
          "createdAt": "2024-05-28T10:54:49.678Z",
          "updatedAt": "2024-05-28T10:54:49.678Z",
          "__v": 0
        }
      ]
    },
    {
      "companyId": "655ac509250a940909ef1721",
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
          "_id": "6655b7970eff12f99be0a047",
          "name": "施工管理（イベント）"
        },
        {
          "_id": "6655b7970eff12f99be0a04a",
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
          "_id": "6655b7970eff12f99be0a047",
          "name": "施工管理（イベント）"
        },
        {
          "_id": "6655b7970eff12f99be0a04a",
          "name": "制作管理（イベント）"
        },
        {
          "tab": "64a244765ce4869a0cce4aab",
          "group": "64a244765ce4869a0cce4aae",
          "name": "サイン加工・貼り手",
          "status": true,
          "order": 700,
          "_id": "6655b7f90eff12f99be0b45f",
          "createdAt": "2024-05-28T10:54:49.678Z",
          "updatedAt": "2024-05-28T10:54:49.678Z",
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
          "_id": "6655b7f90eff12f99be0b45f",
          "createdAt": "2024-05-28T10:54:49.678Z",
          "updatedAt": "2024-05-28T10:54:49.678Z",
          "__v": 0
        }
      ]
    },
    {
      "companyId": "655d917ab6cd39373d816c4a",
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
          "_id": "6655b7970eff12f99be0a047",
          "name": "施工管理（イベント）"
        },
        {
          "_id": "6655b7970eff12f99be0a04a",
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
          "_id": "6655b7970eff12f99be0a047",
          "name": "施工管理（イベント）"
        },
        {
          "_id": "6655b7970eff12f99be0a04a",
          "name": "制作管理（イベント）"
        },
        {
          "tab": "64a244765ce4869a0cce4aab",
          "group": "64a244765ce4869a0cce4aae",
          "name": "サイン加工・貼り手",
          "status": true,
          "order": 700,
          "_id": "6655b7f90eff12f99be0b45f",
          "createdAt": "2024-05-28T10:54:49.678Z",
          "updatedAt": "2024-05-28T10:54:49.678Z",
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
          "_id": "6655b7f90eff12f99be0b45f",
          "createdAt": "2024-05-28T10:54:49.678Z",
          "updatedAt": "2024-05-28T10:54:49.678Z",
          "__v": 0
        }
      ]
    },
    {
      "companyId": "65a8eb3d25cb34b552968a7f",
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
          "_id": "6655b7970eff12f99be0a047",
          "name": "施工管理（イベント）"
        },
        {
          "_id": "6655b7970eff12f99be0a04a",
          "name": "制作管理（イベント）"
        },
        {
          "_id": "6655b7f50eff12f99be0b3c7",
          "name": "設計士"
        },
        {
          "_id": "6655b7f50eff12f99be0b3ca",
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
          "_id": "6655b7970eff12f99be0a047",
          "name": "施工管理（イベント）"
        },
        {
          "_id": "6655b7970eff12f99be0a04a",
          "name": "制作管理（イベント）"
        },
        {
          "_id": "6655b7f50eff12f99be0b3c7",
          "name": "設計士"
        },
        {
          "_id": "6655b7f50eff12f99be0b3ca",
          "name": "CADオペレーター"
        },
        {
          "tab": "64a244765ce4869a0cce4aab",
          "group": "64a244765ce4869a0cce4aae",
          "name": "サイン加工・貼り手",
          "status": true,
          "order": 700,
          "_id": "6655b7f90eff12f99be0b45f",
          "createdAt": "2024-05-28T10:54:49.678Z",
          "updatedAt": "2024-05-28T10:54:49.678Z",
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
          "_id": "6655b7f90eff12f99be0b45f",
          "createdAt": "2024-05-28T10:54:49.678Z",
          "updatedAt": "2024-05-28T10:54:49.678Z",
          "__v": 0
        }
      ]
    },
    {
      "companyId": "65a8eb3d25cb34b552968a7f",
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
          "_id": "6655b7970eff12f99be0a047",
          "name": "施工管理（イベント）"
        },
        {
          "_id": "6655b7970eff12f99be0a04a",
          "name": "制作管理（イベント）"
        },
        {
          "_id": "6655b7f50eff12f99be0b3c7",
          "name": "設計士"
        },
        {
          "_id": "6655b7f50eff12f99be0b3ca",
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
          "_id": "6655b7970eff12f99be0a047",
          "name": "施工管理（イベント）"
        },
        {
          "_id": "6655b7970eff12f99be0a04a",
          "name": "制作管理（イベント）"
        },
        {
          "_id": "6655b7f50eff12f99be0b3c7",
          "name": "設計士"
        },
        {
          "_id": "6655b7f50eff12f99be0b3ca",
          "name": "CADオペレーター"
        },
        {
          "tab": "64a244765ce4869a0cce4aab",
          "group": "64a244765ce4869a0cce4aae",
          "name": "サイン加工・貼り手",
          "status": true,
          "order": 700,
          "_id": "6655b7f90eff12f99be0b45f",
          "createdAt": "2024-05-28T10:54:49.678Z",
          "updatedAt": "2024-05-28T10:54:49.678Z",
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
          "_id": "6655b7f90eff12f99be0b45f",
          "createdAt": "2024-05-28T10:54:49.678Z",
          "updatedAt": "2024-05-28T10:54:49.678Z",
          "__v": 0
        }
      ]
    },
    {
      "companyId": "65b1c9b0629198361fe9522a",
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
          "_id": "6655b7970eff12f99be0a047",
          "name": "施工管理（イベント）"
        },
        {
          "_id": "6655b7970eff12f99be0a04a",
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
          "_id": "6655b7970eff12f99be0a047",
          "name": "施工管理（イベント）"
        },
        {
          "_id": "6655b7970eff12f99be0a04a",
          "name": "制作管理（イベント）"
        },
        {
          "tab": "64a244765ce4869a0cce4aab",
          "group": "64a244765ce4869a0cce4aae",
          "name": "サイン加工・貼り手",
          "status": true,
          "order": 700,
          "_id": "6655b7f90eff12f99be0b45f",
          "createdAt": "2024-05-28T10:54:49.678Z",
          "updatedAt": "2024-05-28T10:54:49.678Z",
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
          "_id": "6655b7f90eff12f99be0b45f",
          "createdAt": "2024-05-28T10:54:49.678Z",
          "updatedAt": "2024-05-28T10:54:49.678Z",
          "__v": 0
        }
      ]
    },
    {
      "companyId": "65b1c9b0629198361fe9522a",
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
          "_id": "6655b7970eff12f99be0a047",
          "name": "施工管理（イベント）"
        },
        {
          "_id": "6655b7970eff12f99be0a04a",
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
          "_id": "6655b7970eff12f99be0a047",
          "name": "施工管理（イベント）"
        },
        {
          "_id": "6655b7970eff12f99be0a04a",
          "name": "制作管理（イベント）"
        },
        {
          "tab": "64a244765ce4869a0cce4aab",
          "group": "64a244765ce4869a0cce4aae",
          "name": "サイン加工・貼り手",
          "status": true,
          "order": 700,
          "_id": "6655b7f90eff12f99be0b45f",
          "createdAt": "2024-05-28T10:54:49.678Z",
          "updatedAt": "2024-05-28T10:54:49.678Z",
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
          "_id": "6655b7f90eff12f99be0b45f",
          "createdAt": "2024-05-28T10:54:49.678Z",
          "updatedAt": "2024-05-28T10:54:49.678Z",
          "__v": 0
        }
      ]
    },
    {
      "companyId": "6639b6d467983388e45492a7",
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
          "_id": "6655b7970eff12f99be0a047",
          "name": "施工管理（イベント）"
        },
        {
          "_id": "6655b7970eff12f99be0a04a",
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
          "_id": "6655b7970eff12f99be0a047",
          "name": "施工管理（イベント）"
        },
        {
          "_id": "6655b7970eff12f99be0a04a",
          "name": "制作管理（イベント）"
        },
        {
          "tab": "64a244765ce4869a0cce4aab",
          "group": "64a244765ce4869a0cce4aae",
          "name": "サイン加工・貼り手",
          "status": true,
          "order": 700,
          "_id": "6655b7f90eff12f99be0b45f",
          "createdAt": "2024-05-28T10:54:49.678Z",
          "updatedAt": "2024-05-28T10:54:49.678Z",
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
          "_id": "6655b7f90eff12f99be0b45f",
          "createdAt": "2024-05-28T10:54:49.678Z",
          "updatedAt": "2024-05-28T10:54:49.678Z",
          "__v": 0
        }
      ]
    },
    {
      "companyId": "654add6572708314c8705e68",
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
          "name": "舞台監督（進行管理）"
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
          "_id": "6655b7970eff12f99be0a047",
          "name": "施工管理（イベント）"
        },
        {
          "_id": "6655b7970eff12f99be0a04a",
          "name": "制作管理（イベント）"
        },
        {
          "_id": "6655b7a30eff12f99be0a1de",
          "name": "PAエンジニア"
        },
        {
          "_id": "6655b7a30eff12f99be0a1e1",
          "name": "レコーディングエンジニア"
        },
        {
          "_id": "6655b7a30eff12f99be0a1e4",
          "name": "MAエンジニア"
        },
        {
          "_id": "6655b7a30eff12f99be0a1e7",
          "name": "音声"
        },
        {
          "_id": "6655b7a30eff12f99be0a1ea",
          "name": "音響スタッフ"
        },
        {
          "_id": "6655b7bb0eff12f99be0a929",
          "name": "照明オペレーター（プランナー）"
        },
        {
          "_id": "6655b7bb0eff12f99be0a92c",
          "name": "レーザーオペレーター"
        },
        {
          "_id": "6655b7bb0eff12f99be0a92f",
          "name": "ピンスポットオペレーター"
        },
        {
          "_id": "6655b7bb0eff12f99be0a932",
          "name": "撮影照明"
        },
        {
          "_id": "6655b7bb0eff12f99be0a935",
          "name": "照明スタッフ"
        },
        {
          "_id": "6655b7c80eff12f99be0acc3",
          "name": "映像オペレーター（スイッチャー）"
        },
        {
          "_id": "6655b7c80eff12f99be0acc6",
          "name": "配信管理オペレーター"
        },
        {
          "_id": "6655b7c80eff12f99be0acc9",
          "name": "映像アシスタント（設営スタッフ）"
        },
        {
          "_id": "6655b7d70eff12f99be0afd9",
          "name": "映像編集"
        },
        {
          "_id": "6655b7d80eff12f99be0afdc",
          "name": "映像制作"
        },
        {
          "_id": "6655b7f50eff12f99be0b3c7",
          "name": "設計士"
        },
        {
          "_id": "6655b7f50eff12f99be0b3ca",
          "name": "CADオペレーター"
        },
        {
          "_id": "6655b7f90eff12f99be0b45f",
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
          "name": "舞台監督（進行管理）"
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
          "_id": "6655b7970eff12f99be0a047",
          "name": "施工管理（イベント）"
        },
        {
          "_id": "6655b7970eff12f99be0a04a",
          "name": "制作管理（イベント）"
        },
        {
          "_id": "6655b7a30eff12f99be0a1de",
          "name": "PAエンジニア"
        },
        {
          "_id": "6655b7a30eff12f99be0a1e1",
          "name": "レコーディングエンジニア"
        },
        {
          "_id": "6655b7a30eff12f99be0a1e4",
          "name": "MAエンジニア"
        },
        {
          "_id": "6655b7a30eff12f99be0a1e7",
          "name": "音声"
        },
        {
          "_id": "6655b7a30eff12f99be0a1ea",
          "name": "音響スタッフ"
        },
        {
          "_id": "6655b7bb0eff12f99be0a929",
          "name": "照明オペレーター（プランナー）"
        },
        {
          "_id": "6655b7bb0eff12f99be0a92c",
          "name": "レーザーオペレーター"
        },
        {
          "_id": "6655b7bb0eff12f99be0a92f",
          "name": "ピンスポットオペレーター"
        },
        {
          "_id": "6655b7bb0eff12f99be0a932",
          "name": "撮影照明"
        },
        {
          "_id": "6655b7bb0eff12f99be0a935",
          "name": "照明スタッフ"
        },
        {
          "_id": "6655b7c80eff12f99be0acc3",
          "name": "映像オペレーター（スイッチャー）"
        },
        {
          "_id": "6655b7c80eff12f99be0acc6",
          "name": "配信管理オペレーター"
        },
        {
          "_id": "6655b7c80eff12f99be0acc9",
          "name": "映像アシスタント（設営スタッフ）"
        },
        {
          "_id": "6655b7d70eff12f99be0afd9",
          "name": "映像編集"
        },
        {
          "_id": "6655b7d80eff12f99be0afdc",
          "name": "映像制作"
        },
        {
          "_id": "6655b7f50eff12f99be0b3c7",
          "name": "設計士"
        },
        {
          "_id": "6655b7f50eff12f99be0b3ca",
          "name": "CADオペレーター"
        },
        {
          "_id": "6655b7f90eff12f99be0b45f",
          "name": "サイン加工・貼り手"
        },
        {
          "tab": "64a244765ce4869a0cce4aab",
          "group": "64a244765ce4869a0cce4b33",
          "name": "内装床工事（OA含む）",
          "status": true,
          "order": 701,
          "_id": "6655b8040eff12f99be0b4fe",
          "createdAt": "2024-05-28T10:55:00.700Z",
          "updatedAt": "2024-05-28T10:55:00.700Z",
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
          "_id": "6655b8040eff12f99be0b4fe",
          "createdAt": "2024-05-28T10:55:00.700Z",
          "updatedAt": "2024-05-28T10:55:00.700Z",
          "__v": 0
        }
      ]
    },
    {
      "companyId": "6552d02d250a940909eefa95",
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
          "_id": "6655b7f90eff12f99be0b45f",
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
          "_id": "6655b7f90eff12f99be0b45f",
          "name": "サイン加工・貼り手"
        },
        {
          "tab": "64a244765ce4869a0cce4aab",
          "group": "64a244765ce4869a0cce4b33",
          "name": "内装床工事（OA含む）",
          "status": true,
          "order": 701,
          "_id": "6655b8040eff12f99be0b4fe",
          "createdAt": "2024-05-28T10:55:00.700Z",
          "updatedAt": "2024-05-28T10:55:00.700Z",
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
          "_id": "6655b8040eff12f99be0b4fe",
          "createdAt": "2024-05-28T10:55:00.700Z",
          "updatedAt": "2024-05-28T10:55:00.700Z",
          "__v": 0
        }
      ]
    },
    {
      "companyId": "6566ecb6b6cd39373d81a7ec",
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
          "_id": "6655b8040eff12f99be0b4fe",
          "createdAt": "2024-05-28T10:55:00.700Z",
          "updatedAt": "2024-05-28T10:55:00.700Z",
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
          "_id": "6655b8040eff12f99be0b4fe",
          "createdAt": "2024-05-28T10:55:00.700Z",
          "updatedAt": "2024-05-28T10:55:00.700Z",
          "__v": 0
        }
      ]
    }
  ]

function transformData(data) {
    let result = [];

    data.forEach(company => {
        const companyId = company.companyId;
        const maxRows = Math.max(company?.companyOccupationBefore?.length, company?.companyOccupationAfter?.length);

        for (let i = 0; i < maxRows; i++) {
            const before = company.companyOccupationBefore[i] || { _id: '', name: '' };
            const after = company.companyOccupationAfter[i] || { _id: '', name: '' };

            result.push({
                companyId: companyId,
                'companyOccupationBefore._id': before._id,
                'companyOccupationBefore.name': before.name,
                'companyOccupationAfter._id': after._id,
                'companyOccupationAfter.name': after.name
            });
        }
    });

    return result;
}

const transformedData = transformData(data);

const worksheet = xlsx.utils.json_to_sheet(transformedData, {
    header: ["companyId", "companyOccupationBefore._id", "companyOccupationBefore.name", "companyOccupationAfter._id", "companyOccupationAfter.name"]
});

const workbook = xlsx.utils.book_new();
xlsx.utils.book_append_sheet(workbook, worksheet, "Sheet1");

xlsx.writeFile(workbook, 'output.xlsx');

console.log('Excel file has been created.');
