---
head:
  - - meta
    - property: "og:image"
      content: /path of titans - 667x260.webp
  - - meta
    - name: description
      content: Explore GameServersHub's Gaming Wiki for in-depth info on Path of Titans. Find details on gameplay, features, and updates for the ultimate dino MMO adventure!
  - - meta
    - name: keywords
      content: Path Of Titans
title: Global Dinosaur Stats
---

# Path of Titans Edit Dinosaur and Global Stats

You are able to edit base game dinosaur stats without the need to install mods. This allows you to balance dinosaurs or edit your gameplay without having to download the Dev Kit and create your own mod. However, if you plan on making a large number of edits we do suggest creating a mod as it can be easier to manage and more user-friendly. Follow this tutorial to learn how to edit base game dinosaur stats.

::: warning
The server must be stopped while editing server files. You must save your edits and restart your server for any edits to take effect.
:::

To edit dinosaur stats, you must edit the `Game.ini` file. You can find this file in the following location:

`PathofTitans/Saved/Config/LinuxServer/Game.ini`

::: info
`LinuxServer` is the folder name for Linux servers. If you are using a different operating system, the folder name will be different but the other folders will be the same.
:::

## Editing Dinosaur Stats

### Here a list for all Alderon Dinos & Mod Dinos

#### [Alderon Dinos](./alderons/index)

#### [Mod Dinos](./modded-dinosaurs/index)

#### [Alderon AI Critters](./critter/index)

These listed are the default vaules curve overrides.

::: tip
Each stat edit must be on it's own line and must be listed under the `[/Script/PathOfTitans.IGameSession]` header.
:::

To edit a dinosaurs stats without requiring mods, you must manually set each stat value for each dinosaur, including growth stages. The format for stats are as follows:

`CurveOverrides=(CurveName="Styracosaurus.Core.MaxThirst",Values=(1000,2000,3000,4000,5000))`

Where the name of the dinosaur must correspond to the full name of the dino species, and the 5 numbers correspond to each growth stage of the dinosaur starting from Hatchling (Hatchling, Juvenile, Adolescent, Sub-Adult, Adult). The stats will linearly scale between each growth stage.

### Editing Core Stats

These are the core attributes of the dinosaur. They are in the format: `CurveOverrides=(CurveName="Styracosaurus.Core.MaxThirst",Values=(1000,2000,3000,4000,5000))`

| Stat Name | Description |
| ---- | ------- |
| MaxHealth | Maximum health. Example: `150,250,350,500,650`|
| MaxStamina | Maximum stamina. Example: `100,100,100,100,100` |
| CombatWeight | The combat weight of a dinosaur that affects how much damage is taken from attacks. Heavy weights will take significantly less damaged compared to light weights. Example: `350,800,1100,2000,2700` |
| Armor | Additional damage reduction from combat. Example: `1,1,1,1,1` |
| MovementSpeedMultiplier | Adjusts all forms of movement speed. Example: `1,1,1,1,1` |
| SprintingSpeedMultiplier | Adjusts only sprinting speed. Example: `1,1,1,1,1`|
| TrottingSpeedMultiplier | Adjusts only trotting speed. Example: `1,1,1,1,1` |
| BodyFoodAmount | The amount of food the corpse of this dinosaur contains. Example: `100,200,300,400,500` |
| MaxHunger | Maximum food this dinosaur can eat until it's full. Example: `50,100,150,200,250` |
| MaxThirst | Maximum water this dinosaur can drink until it's full. Example: `50,100,150,200,250` |
| HungerDepletionRate | Hunger drained per second. Example: `0.03,0.07,0.10,0.13,0.17` |
| ThirstDepletionRate | Thirst drained per second. Example: `0.03,0.07,0.10,0.13,0.17` |
| FoodConsumptionRate | Food ingested per second while eating from a food item. Example: `20,25,35,45,50` |
| WaterConsumptionRate | Water ingested per second while drinking from a water source. Example: `20,25,35,45,50` |
| MaxOxygen | Maximum oxygen when underwater. Example: `100,100,100,100,100` |
| OxygenDepletionRate | Oxygen drained per second when underwater. Example: `2,2,2,2,2` |
| OxygenRecoveryRate | Oxygen recovered when above water. Example: `5,5,5,5,5` |
| FallingLegDamage | Damage applied to the leg of a dinosaur when it falls hard enough to break a leg. Example: `10,50,50,50,50` |
| LegHealRate | Bone break damage healed per second. Example: `1,1,1,1,1` |
| BleedingRate | Amount of active bleeding per second. Should be kept at 0 Example: `0,0,0,0,0` |
| BleedingHealRate | Amount of bleeding healed per second. Example: `0.032,0.032,0.032,0.032,0.032` |
| PoisonRate| Amount of active poison damage per second. Should be kept at 0 Example: `0,0,0,0,0` |
| PoisonHealRate | Amount of poison healed per second. Example: `0.032,0.032,0.032,0.032,0.032`|
| VenomRate | Amount of active venom damage per second. Should be kept at 0 Example: `0,0,0,0,0` |
| VenomHealRate | Amount of venom healed per second. Example: `0.016,0.016,0.016,0.016,0.016` |
| HungerDamage | Damage per second applied when starving, as a percentage of total health. Example: `0.2,0.2,0.2,0.2,0.2` |
| ThirstDamage | Damage per second applied when dying of thirst, as a percentage of total health. Example: `0.2,0.2,0.2,0.2,0.2` |
| OxygenDamage | Damage per second applied when drowning, as a percentage of total health. Example: `6,6,6,6,6` |
| PoisonDamage | Damage per second applied when dying of poison, as a percentage of total health. Example: `0.2,0.2,0.2,0.2,0.2` |
| LimpHealthThreshold | Applies bone break when a dinosaur falls and has this amount or less of its total health bar. Example: `0.5,0.3,0.3,0.3,0.3` |
| BodyFoodCorpseThreshold | Currently unused. |
| HealthRecoveryRate | Health recovered per second when out of combat. Example: `0.83,1.19,1.46,1.67,1.83` |
| StaminaRecoveryRate | Stamina recovered per second when out of combat. Example: `3.33,2.96,2.67,2.42,2.22` |
| GrowthPerSecond | Allows you to change the incoming growth amount per dinosaur. Is also affected by Server Growth Multipliers and Passive Growth. Example: `1,1,1,1,1 (Default value for all dinosaurs)` |
| FallDeathSpeed | Velocity at impact on ground that will kill this dinosaur. Example: `2600,2600,2600,2600,2600` |
| TurnRadiusMultiplier | Adjusts the turn radius of the dinosaur when moving, excluding precise movement. Example: `2,1.75,1.5,1.25,1` |
| TurnInPlaceRadiusMultiplier | Adjusts the turning speed when using precise movement. Example: `1,1,1,1,1` |
| BuffDurationMultiplier | Adjusts the duration of all buffs applied to this creature. Example: `1,1,1,1,1`|
| SpikeDamageMultiplier | Adjusts the spike damage caused by this creature if it causes damage when attacked, such as Kentrosaurus or Amargasaurus. Example: `1,1,1,1,1` |
| KnockbackMultiplier | Adjust the amount of knockback this creature causes when attacking. Example: `1,1,1,1,1` |
| GroundAccelerationMultiplier | Adjusts how quickly this creature accelerates. Example: `1,1,1,1,1v |
| GroundPreciseAccelerationMultiplier | Adjusts how quickly this creature accelerates when using precise movement. Example: `1,1,1,1,1` |
| SwimmingAccelerationMultiplier | Adjusts how quickly this creature accelerates when swimming. Example: `1,1,1,1,1` |
| KnockbackTractionMultiplier | Adjusts how far this creature gets knocked back when hit. Example: `1,1,1,1,1` |
| StaminaCostMultiplier | Adjusts how much stamina this creature depletes when using attacks. Example: `1,1,1,1,1` |
| StaminaJumpCostMultiplier | Adjusts how much stamina this creature depletes when jumping. Example: `1,1,1,1,1` |
| StaminaSprintCostMultiplier | Adjusts how much stamina this creature depletes when sprinting. Example: `1,1,1,1,1` |
| StaminaFastSwimCostMultiplier | Adjusts how much stamina this creature depletes when sprint swimming. Example: `1,1,1,1,1` |
| StaminaFastDiveCostMultiplier | Adjusts how much stamina this creature depletes when sprint swimming underwater. Example: `1,1,1,1,1` |
| StaminaFlyCostMultiplier | Adjusts how much stamina this creature depletes when flying. Example: `1,1,1,1,1` |
| StaminaFastFlyCostMultiplier | Adjusts how much stamina this creature depletes when sprint flying. Example: `1,1,1,1,1` |

### Editing Multipliers Stats

These are multipliers the dinosaur uses to alter its base stats depending on its specific state. For example, when a dinosaur sits down it will replenish health at a 15% increased rate. They are in the format: `Styracosaurus.Multiplier.HealthRecovery.Resting,1.15,1.15,1.15,1.15,1.15`

::: tip
You must also specify the locomotion state the multiplier applies to. All locomotion states are:
:::

- `Resting`
- `Sleeping`
- `Standing`
- `Walking`
- `Trotting`
- `Sprinting`
- `Swimming`
- `FastSwimming`
- `Diving`
- `FastDiving`
- `Crouching`
- `CrouchWalking`
- `Jumping`
- `Flying`
- `FastFlying`

**Examples:**

- `CurveOverrides=(CurveName="Styracosaurus.Multiplier.PoisonHealRate.FastDiving",Values=(0.25,0.25,0.25,0.25,0.25))`
- `CurveOverrides=(Styracosaurus.Multiplier.BleedingHealRate.Walking",Values=(0.75,0.75,0.75,0.75,0.75))`
- `CurveOverrides=(CurveName="Styracosaurus.Multiplier.HealthRecovery.Crouching",Values=(1,1,1,1,1))`
- `CurveOverrides=(CurveName="Styracosaurus.BodyFoodDecayPerSecond",Values=(2,1,1,1,0.95))`

| Stat Name | Description |
| ------------------------ | ------------------------------------------------------------ |
| `HealthRecovery` | Rate at which you recover health. |
| `StaminaRecovery` | Rate at which you recover stamina. |
| `OxygenDepletion` | Rate at which you lose oxygen when you are underwater. |
| `OxygenRecovery` | Rate at which you recover oxygen when out of water. |
| `LegHealRate` | Rate at which you heal broken bones. |
| `BleedingRate` | Rate at which your creature takes bleed damage. |
| `BleedingHealRate` | Rate at which you recover from bleed. |
| `PoisonRate` | Rate at which your creature takes poison damage. |
| `PoisonHealRate` | Rate at which you recover from poison. |
| `VenomRate` | Rate at which your creature takes venom damage. |
| `VenomHealRate` | Rate at which you recover from venom. |
| `HungerDepletionRate` | Rate at which your creature loses hunger. |
| `ThirstDepletionRate` | Rate at which your creature loses thirst. |
| `HungerDamage` | Rate at which health is lost when starving. |
| `ThirstDamage` | Rate at which health is lost when dying of thirst. |
| `OxygenDamage` | Rate at which health is lost when drowning. |
| `IncomingDamage` | A flat damage multiplier on all incoming damage via attacks. |
| `BodyFoodDecayPerSecond` | The speed at which this creature's dead body will decay. |

### Editing Combat Stats

You can directly edit damage that creatures deal, including bleed, venom, bone break, and more. However, you currently cannot add status effects to attacks if they do not already exist. For example, you cannot add Venom to the Styracosaurus Headbutt attack, as the stock attack does not have an attribute for it. You can, however, edit the amount of bleed the Headbutt causes, because the stock attack has a bleed attribute.

To edit combat stats, you must look at the provided .CSV files (download link at the top of this page). Every attack has different names, so it will be important to refer to the stats provided to get the naming convention correct.

**Examples:**

- `CurveOverrides=(CurveName="Styracosaurus.HeadbuttDamage",Values=(30,50,70,90,120))`
- `CurveOverrides=(CurveName="Styracosaurus.ChargeSpeedIncrease",Values=(700,900,1500,1800,2000))`

## Editing Global Stats

You can also edit global stats that affect all dinosaurs on the server. These are in the format: `CurveOverrides=(CurveName="Global.LoginDebuffDuration",Values=(60))`

Some of these that are available are as follows:

| Stat Name | Description |
| --------------------------- | ------------------------------------------------------------------------------------------------------------------ |
| `LoginDebuffDuration` | The duration of the debuff applied to a player when they log in. Example: 60 will keep the debuff for 60 seconds. |
| `LoginDebuffSpeedReduction` | The percentage of speed the dinosaur is reduced to. Example: .75 will keep the dinosaur at 75% of its usual speed. |
| `LoginDebuffIncomingDamage` | The percentage of damage that the dinosaur takes. Example: 2 will make the dinosaur take 200% damage. |
| `LoginDebuffAttackDamage` | The percentage of damage that the dinosaur deals. Example: .4 will make the dinosaur deal 40% of the usual damage. |

## Example Contents of Game.ini

::: tip
Each stat edit must be on it's own line and must be listed under the IGameSession header.
:::

```ini
[/Script/PathOfTitans.IGameSession]
CurveOverrides=(CurveName="Styracosaurus.Core.MaxThirst",Values=(500,600,700,800,900))
CurveOverrides=(CurveName="Styracosaurus.Multiplier.StaminaRecovery.Standing",Values=(1,2,3,4,5))
CurveOverrides=(CurveName="Styracosaurus.HeadbuttDamage",Values=(30,50,70,90,120))
CurveOverrides=(CurveName="Styracosaurus.ChargeSpeedIncrease",Values=(700,900,1500,1800,2000))
```
