import math
import random

def main():
	f = open("output.css", "w")
	n = 25
	initial = []
	
	for i in range(n):	# Top Light
		t, b = round(100*i/(n-2) + 2, 2), round(4*math.sin((1/5)*math.pi*i) + 20)
		l = round(t - (1/2)*b, 2)
		l2 = round(t - (1/2)*(b+1), 2)

		p0 = f'-webkit-clip-path: polygon({t}% 0, {round(t+0.1, 2)}% 0, {l}% {b}%, {round(l-0.1, 2)}% {b}%);'
		p1 = f'-webkit-clip-path: polygon({t}% 0, {round(t+0.1, 2)}% 0, {l2}% {b+1}%, {round(l2-0.1, 2)}% {b+1}%);'
		f.write(f'@keyframes s{i+1} {{\n\t0% {{ {p0} }}\n\t100% {{ {p1} }}\n}}\n\n')
		initial.append(p0)

	for i in range(n):	# Bottom Light
		t, b = round(100*i/(n-2) - 9.5, 2) , round(4*math.sin((1/5)*math.pi*i) + 20)
		r = round(t + (1/2)*b, 2)
		r2 = round(t + (1/2)*(b+1), 2)

		p0 = f'-webkit-clip-path: polygon({t}% 100%, {round(t+0.1, 2)}% 100%, {r}% {100-b}%, {round(r-0.1, 2)}% {100-b}%);'
		p1 = f'-webkit-clip-path: polygon({t}% 100%, {round(t+0.1, 2)}% 100%, {r2}% {99-b}%, {round(r2-0.1, 2)}% {99-b}%);'

		f.write(f'@keyframes s{i+n+1} {{\n\t0% {{ {p0} }}\n\t100% {{ {p1} }}\n}}\n\n')
		initial.append(p0)

	for i in range(n):	# Top Dark
		t, b = round(100*i/(n-2) + 3, 2), round(4*math.sin((1/5)*math.pi*i) + 20 + random.randint(3, 5))
		l = round(t - (1/2)*b, 2)
		l2 = round(t - (1/2)*(b+1), 2)

		p0 = f'-webkit-clip-path: polygon({t}% 0, {round(t+0.1, 2)}% 0, {l}% {b}%, {round(l-0.1, 2)}% {b}%);'
		p1 = f'-webkit-clip-path: polygon({t}% 0, {round(t+0.1, 2)}% 0, {l2}% {b+1}%, {round(l2-0.1, 2)}% {b+1}%);'
		
		f.write(f'@keyframes s{i+2*n+1} {{\n\t0% {{ {p0} }}\n\t100% {{ {p1} }}\n}}\n\n')
		initial.append(p0)

	for i in range(n):	# Bottom Dark
		t, b = round(100*i/(n-2) - 6.5, 2) , round(4*math.sin((1/5)*math.pi*i) + 20 + random.randint(3, 5))
		r = round(t + (1/2)*b, 2)
		r2 = round(t + (1/2)*(b+1), 2)

		p0 = f'-webkit-clip-path: polygon({t}% 100%, {round(t+0.1, 2)}% 100%, {r}% {100-b}%, {round(r-0.1, 2)}% {100-b}%);'
		p1 = f'-webkit-clip-path: polygon({t}% 100%, {round(t+0.1, 2)}% 100%, {r2}% {99-b}%, {round(r2-0.1, 2)}% {99-b}%);'

		f.write(f'@keyframes s{i+3*n+1} {{\n\t0% {{ {p0} }}\n\t100% {{ {p1} }}\n}}\n\n')
		initial.append(p0)

	for i in range(4*n):	# Animations
		f.write(f'#bgWrap div:nth-child({i+1}) {{\n\tanimation: s{i+1} ease-in-out 3s infinite alternate;\n\t')
		if i in range(17, 25): f.write(f'background-color: #272727;')
		if i in range(33, 50): f.write(f'background-color: #272727;')
		if i in range(50, 67): f.write(f'background-color: #272727;')
		if i in range(67, 75): f.write(f'background-color: #b5b5b5;')
		if i in range(75, 83): f.write(f'background-color: #272727;')
		if i in range(83, 100): f.write(f'background-color: #b5b5b5;')
		f.write(f'\n\t{initial[i]}\n}}\n\n')


if __name__ == "__main__":
	main()