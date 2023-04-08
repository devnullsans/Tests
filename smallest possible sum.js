/*
if X[i] > X[j] then X[i] = X[i] - X[j]
        j   i
X = [6, 9, 21]
if X[2]<21> > X[1]<9> {i=2,j=1}
  then X[2#]<12> = X[2]<21> - X[1]<9>

X = [6, 9, 12]
if X[2]<12> > X[0]<6> {i=2,j=0}
  then X[2]<6> = X[2]<12> - X[0]<6>

X = [6, 9, 6]
if X[i<2>]<12> > X[j<0>]<6> {i=2,j=0}
  then X[i<2>]<6> = X[i<2>]<12> - X[j<0>]<6>
X_3 = [6, 3, 6]  # -> X_3[1] = X_2[1] - X_2[0] = 9 - 6
X_4 = [6, 3, 3]  # -> X_4[2] = X_3[2] - X_3[1] = 6 - 3
X_5 = [3, 3, 3]  # -> X_5[1] = X_4[0] - X_4[1] = 6 - 3

The returning output is the sum of the final transformation (here 9).
*/

const x = [6, 9, 21]

let i,j

while (true) {

const c = x[0]

if (x.some(x => !!(c-x))) {

for (i=x.length-1; i>0; i--) {

for (j=i-1; j>=0; j--) {

if (x[i] > x[j]) {

x[i] -= x[j]
}
}
}
} else break;
}

return x.reduce((t, i) => t+i)
