import z from 'zod';

export const ItemSchema = z.object({
  key: z.string(),
  priority: z.string(),
  name: z.string().max(10),
  time: z.string(),
  deadline: z.string(),
  status: z.enum(['done', 'in progress', 'todo']),
  description: z.string().min(10).max(1000),
});

export const ItemArraySchema = z.array(ItemSchema);


export type FormData = z.infer<typeof ItemArraySchema>;


const parssedData = ItemSchema.safeParse({})

export let dataSource: z.infer<typeof ItemArraySchema> = [
  {
    key: '1',
    priority: '1',
    name: 'task',
    time: 'one day',
    deadline: '2024-12-20',
    status  : 'done',
    description:'test'
  },
  {
    key: '2',
    priority: '2',
    name: 'buy book',
    time: 'lauch time',
    deadline: '2024-12-21',
    status  : 'in progress',
    description:'test'
  },
  {
    key: '3',
    priority: '3',
    name: 'english',
    time: 'subway time',
    deadline: '2024-12-21',
    status  : 'done',
    description:'test'
  },
];
