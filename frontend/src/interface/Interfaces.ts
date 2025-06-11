export interface MenuItemType {
    label: string;
    icon: React.ReactNode;
    onClick: () => void;
    active?: boolean;
};

export interface UserInfoType {
    name: string;
    role: string;
    profilePhoto: string;
}

export interface DataRow {
  id: number;
  name: string;
  total: string;
  status: boolean;
  initialDate: string;
  finalDate: string;
};

export const mockData: DataRow[] = [
  {
    id: 1,
    name: 'Cachoeira do Vale',
    total: '10',
    status: true,
    initialDate: '2025-06-10',
    finalDate: '2025-06-12',
  },
  {
    id: 2,
    name: 'Festival de Inverno',
    total: '12',
    status: false,
    initialDate: '2025-06-08',
    finalDate: '2025-06-10',
  },
  {
    id: 3,
    name: 'Festival de Verão',
    total: '11',
    status: true,
    initialDate: '2025-06-05',
    finalDate: '2025-06-07',
  },
  {
    id: 4,
    name: 'Festival de Primavera',
    total: '10',
    status: false,
    initialDate: '2025-06-01',
    finalDate: '2025-06-03',
  },
  {
    id: 5,
    name: 'Festival de Outono',
    total: '10',
    status: true,
    initialDate: '2025-05-29',
    finalDate: '2025-05-31',
  },
];