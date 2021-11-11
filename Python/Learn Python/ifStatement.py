is_hot=True
is_cold=False
if is_hot:
    print("It's a hot day")
    print("Drink plenty of water")
elif is_cold:
    print("It's a cold day")
    print("Wear warm clothes")
else:
    print("It's a cold day ")
    print("Nice")


print("Enjoy your day")

price=10000
has_good_credit= True
has_high_income = True
if has_good_credit and has_high_income:
    down_payment= 0.1 * price
elif has_good_credit and has_high_income:
    down_payment= 0.2 * price
else:
    down_payment= 0.2 * price

print(f"Down Payment ${down_payment}")