
import { useForm } from 'react-hook-form';
import {  message,} from 'antd';
import { dataSource } from '../../mockData/data';
import { useNavigate } from 'react-router-dom'
import z from 'zod';
import { zodResolver } from "@hookform/resolvers/zod";


const userSchema = z.object({
  username: z.string()
    .min(3, "Username must be at least 3 characters")
    .max(20, "Username cannot exceed 20 characters"),
  email: z.string()
    .email("Please enter a valid email"),
  password: z.string()
    .min(8, "Password must be at least 8 characters")
    .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
    .regex(/[0-9]/, "Password must contain at least one number"),
  confirmPassword: z.string()
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"],
});

 const navigate = useNavigate()


type UserFormData = z.infer<typeof userSchema>;

const DetailV2 = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserFormData>({
    resolver: zodResolver(userSchema),
  });

  const onSubmit = (data: UserFormData) => {
    console.log('onSubmit==========',data);
    // Handle form submission

    dataSource.push(data);
    navigate('/todo')
    message.success('successful!');
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("username")} placeholder="Username" />
      {errors.username && <span>{errors.username.message}</span>}

      <input {...register("email")} placeholder="Email" />
      {errors.email && <span>{errors.email.message}</span>}

      <input
        type="password"
        {...register("password")}
        placeholder="Password"
      />
      {errors.password && <span>{errors.password.message}</span>}

      <input
        type="password"
        {...register("confirmPassword")}
        placeholder="Confirm Password"
      />
      {errors.confirmPassword && (
        <span>{errors.confirmPassword.message}</span>
      )}

      <button type="submit">Register</button>
    </form>
  );
};



export default DetailV2;

