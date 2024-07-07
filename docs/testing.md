# Please note that the following customization options do not apply to modded dinosaurs.

To manually assign each value for each dinosaur, navigate to the `Game.ini` file. Its file path is as follows: `PathOfTitans/Saved/Config/LinuxServer`

In this file, you can adjust the statistics for each dinosaur. The dinosaur's name must correspond precisely to its full name as the game lists. Each stat is followed by a series of five numbers, representing different growth stages of the dinosaur: Hatchling, Juvenile, Adolescent, Sub-Adult, and Adult. This allows you to set specific values for each stage.

For example, if you wish to adjust the maximum health of a dinosaur, you might input the following values: `MaxHealth=150,250,350,500,650`. These values correspond to the maximum health at each growth stage, from Hatchling to Adult.

## Please ensure that all lines are added below the IGameSession heading.

Here’s an example of how an override entry should look:

    [/Script/PathOfTitans.IGameSession]

    CurveOverrides=(CurveName="Struthiomimus.Core.Struthiomimus",Values=(2,2,2,1,1))

    CurveOverrides=(CurveName="Struthiomimus.Core.BleedingHealRate",Values=(1,1,1,1,1))

    CurveOverrides=(CurveName="Struthiomimus.Core.MaxOxygen",Values=(100,200,300,400,500))

Below is a list of all stats you can edit, along with a brief description of each and an example of the values you might use:

- `MaxHealth`: This represents the maximum health of your dinosaur at each growth stage. For example, `150,250,350,500,650`.
- `MaxStamina`: This value determines the maximum endurance level of your dinosaur. For example, `100,100,100,100,100`.
- `CombatWeight`: This value affects the damage your dinosaur can inflict and withstand during combat. Heavier dinosaurs generally deal more damage and are more resilient. For example, `350,800,1100,2000,2700`.
- `Armor`: This value provides extra protection, reducing the damage taken in combat. For example, `1,1,1,1,1`.
- `MovementSpeedMultiplier`: This adjusts the speed of all forms of movement. For example, 1,1,1,1,1.
- `SprintingSpeedMultiplier`: This value only affects sprinting speed. For example, `1,1,1,1,1`.
- `TrottingSpeedMultiplier`: This only changes the trotting speed. For example, `1,1,1,1,1`.
- `BodyFoodAmount`: This represents the amount of food available from the carcass of this dinosaur. For example, `100,200,300,400,500`.
- `MaxHunger`: This is the maximum amount of food this dinosaur can consume before it is satiated. For example, `50,100,150,200,250`.
- `MaxThirst`: This is the maximum amount of water this dinosaur can drink before it is quenched. For example, `50,100,150,200,250`.
- `HungerDepletionRate`: This is the rate at which hunger increases per second. For example, `0.03,0.07,0.10,0.13,0.17`.
- `ThirstDepletionRate`: This is the rate at which thirst increases per second. For example, `0.03,0.07,0.10,0.13,0.17`.
- `FoodConsumptionRate`: This is the rate at which food is consumed per second. For example, `20,25,35,45,50`.
- `WaterConsumptionRate`: This is the rate at which water is consumed per second. For example, `20,25,35,45,50`.
- `MaxOxygen`: This is the maximum amount of oxygen this dinosaur can store for underwater activity. For example, `100,100,100,100,100`.
- `OxygenDepletionRate`: This is the rate at which oxygen depletes while the dinosaur is underwater. For example, `2,2,2,2,2`.
- `OxygenRecoveryRate`: This is the rate at which oxygen is recovered when the dinosaur surfaces. For example, `5,5,5,5,5`.
- `FallingLegDamage`: This is the amount of damage a dinosaur's leg incurs from a fall that results in a broken leg. For example, `10,50,50,50,50`.
- `LegHealRate`: This is the rate at which a broken leg heals per second. For example, `1,1,1,1,1`.
- `BleedingRate`: This is the amount of active bleeding per second. It should ideally be kept at 0. For example, `0,0,0,0,0`.
- `BleedingHealRate`: This is the rate at which bleeding heals per second. For example, `0.032,0.032,0.032,0.032,0.032`.
- `PoisonRate`: This is the amount of active poison damage per second. It should ideally be kept at 0. For example, `0,0,0,0,0`.
- `PoisonHealRate`: This is the rate at which poison is cured per second. For example, `0.032,0.032,0.032,0.032,0.032`.
- `VenomRate`: This is the amount of venom damage per second. It should ideally be kept at 0. For example, `0,0,0,0,0`.
- `VenomHealRate`: This is the rate at which venom is cured per second. For example, `0.016,0.016,0.016,0.016,0.016`.
- `HungerDamage`: This is the damage inflicted per second during starvation, calculated as a percentage of total health. For instance: `0.2,0.2,0.2,0.2,0.2`.
- `ThirstDamage`: This is the damage done per second when the dinosaur dies of thirst, measured as a percentage of total health. An example could be `0.2,0.2,0.2,0.2,0.2`.
- `OxygenDamage`: This is the damage done per second when the dinosaur is drowning, again measured as a percentage of total health. Example: `6,6,6,6,6`.
- `PoisonDamage`: This is the damage inflicted per second due to poison, calculated as a percentage of total health. For instance: `0.2,0.2,0.2,0.2,0.2`.
- `LimpHealthThreshold`: This value determines when a dinosaur will suffer a bone break from a fall based on its total health. For example, `0.5,0.3,0.3,0.3,0.3`.
- `BodyFoodCorpseThreshold`: This value is currently not in use.
- `HealthRecoveryRate`: This is the rate at which life points are restored outside combat per second. An example could be `0.83,1.19,1.46,1.67,1.83`.
- `StaminaRecoveryRate`: This is the rate at which stamina is restored outside of combat per second. For instance: `3.33,2.96,2.67,2.42,2.22`.
- `GrowthPerSecond`: This value allows you to modify the incoming growth per dinosaur. It's also affected by server growth multipliers and passive growth. The default value for all dinosaurs is, `1,1,1,1,1`.
- `FallDeathSpeed`: This is the velocity upon impact with the ground, resulting in the dinosaur's death. An example could be `2600,2600,2600,2600,2600`.
- `TurnRadiusMultiplier`: This adjusts the curve radius of the dinosaur when it moves, excluding precise movements. For instance: `2,1.75,1.5,1.25,1`.
- `TurnInPlaceRadiusMultiplier`: This adjusts the rotation speed when a precise movement is used. Example: `1,1,1,1,1`.

Please note that these are just examples of values, and they can be adjusted according to your preference for each dinosaur and each growth stage. Remember to save the permanently `Game.ini` file after making any changes.

---

Experience seamless gameplay with our top-of-the-line "**Path Of Titans**" video game servers for hosting. Dominate the virtual world and build your killer dinosaur-themed world with your gaming squad. With **lightning-fast hardware**, **unrivaled performance**, and **reliable uptime**, our servers ensure an immersive gaming experience for your community's needs. Take advantage of our cutting-edge features, including **customizable settings**, an **intuitive control panel**, and **dedicated support**. Don't miss out on this opportunity to level up your gaming experience.

Get your Path Of Titans server at our website now and unleash your gaming prowess! [**Click To Learn More!**](https://gameservershub.com/billing/index.php?rp=/store/path-of-titans "Path Of Titans Game Server Rental")

---
