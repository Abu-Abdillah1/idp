import { config } from 'dotenv';
config();
import { app } from './app';

const PORT: number | string = process.env.PORT || 3333;

app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});
