import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'landing', pathMatch: 'full' },
  { path: 'landing', loadChildren: './landing/landing.module#LandingPageModule' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'signup', loadChildren: './signup/signup.module#SignupPageModule' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'hospitals', loadChildren: './hospitals/hospitals.module#HospitalsPageModule' },
  { path: 'pharmacies', loadChildren: './pharmacies/pharmacies.module#PharmaciesPageModule' },
  { path: 'tabs-hospital', loadChildren: './tabs-hospital/tabs-hospital.module#TabsHospitalPageModule' },
  { path: 'tabs-pharmacies', loadChildren: './tabs-pharmacies/tabs-pharmacies.module#TabsPharmaciesPageModule' },
  { path: 'hospital', loadChildren: './hospital/hospital.module#HospitalPageModule' },
  { path: 'chatbot', loadChildren: './chatbot/chatbot.module#ChatbotPageModule' },
  { path: 'profile', loadChildren: './profile/profile.module#ProfilePageModule' },
  { path: 'appointments', loadChildren: './appointments/appointments.module#AppointmentsPageModule' },
  { path: 'more', loadChildren: './more/more.module#MorePageModule' },
  { path: 'help', loadChildren: './help/help.module#HelpPageModule' },
  { path: 'call', loadChildren: './call/call.module#CallPageModule' },
  { path: 'library', loadChildren: './library/library.module#LibraryPageModule' },
  { path: 'programs', loadChildren: './programs/programs.module#ProgramsPageModule' },
  { path: 'consult', loadChildren: './consult/consult.module#ConsultPageModule' },
  { path: 'accomplishment', loadChildren: './accomplishment/accomplishment.module#AccomplishmentPageModule' },
  { path: 'pricing', loadChildren: './pricing/pricing.module#PricingPageModule' },
  { path: 'tips', loadChildren: './tips/tips.module#TipsPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
