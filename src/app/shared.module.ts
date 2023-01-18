import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { CalendarModule } from 'primeng/calendar';
import { InputTextModule } from 'primeng/inputtext';
import { RadioButtonModule } from 'primeng/radiobutton';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { DialogModule } from 'primeng/dialog';
import { KeyFilterModule } from 'primeng/keyfilter';
import { InputMaskModule } from 'primeng/inputmask';
import { InputSwitchModule } from 'primeng/inputswitch';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ToolbarModule } from 'primeng/toolbar';
import { BlockUIModule } from 'primeng/blockui';
import {StepsModule} from 'primeng/steps';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { CarouselModule } from 'primeng/carousel';
import { TabViewModule } from 'primeng/tabview';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { CheckboxModule } from 'primeng/checkbox';
import { MultiSelectModule } from 'primeng/multiselect';
import { ListboxModule } from 'primeng/listbox';
import {ProgressBarModule} from 'primeng/progressbar';
import { PanelModule } from 'primeng/panel';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';
import { ToastModule } from 'primeng/toast';
import { DropdownModule } from 'primeng/dropdown';
import { TableModule } from 'primeng/table';
import { DataViewModule } from 'primeng/dataview';
import { FieldsetModule } from 'primeng/fieldset';
import { SplitButtonModule } from 'primeng/splitbutton';
import { DialogService, DynamicDialogConfig, DynamicDialogModule } from 'primeng/dynamicdialog';
import {KnobModule} from 'primeng/knob';
import { AccordionModule } from 'primeng/accordion';
import { ConfirmationService, MessageService } from 'primeng/api';
import { BadgeModule } from 'primeng/badge';
import { CaptchaModule } from 'primeng/captcha';
import { ChipModule } from 'primeng/chip';
import { ChipsModule } from 'primeng/chips';
import { ConfirmPopupModule } from 'primeng/confirmpopup';
import { ContextMenuModule } from 'primeng/contextmenu';
import { DividerModule } from 'primeng/divider';
import { GalleriaModule } from 'primeng/galleria';
import { ImageModule } from 'primeng/image';
import { InputNumberModule } from 'primeng/inputnumber';
import { MenuModule } from 'primeng/menu';
import { PaginatorModule } from 'primeng/paginator';
import { SelectButtonModule } from 'primeng/selectbutton';
import { SidebarModule } from 'primeng/sidebar';
import { SlideMenuModule } from 'primeng/slidemenu';
import { TagModule } from 'primeng/tag';
import { TimelineModule } from 'primeng/timeline';
import { TooltipModule } from 'primeng/tooltip';
import {MenubarModule} from 'primeng/menubar';
import {ChartModule} from 'primeng/chart';
import {EditorModule} from 'primeng/editor';
import {FileUploadModule} from 'primeng/fileupload';

@NgModule({
  declarations: [],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    
    /* primeng */
    ScrollPanelModule,
    DropdownModule,
    SelectButtonModule,
    InputTextModule,
    CalendarModule,
    RadioButtonModule,
    ButtonModule,
    TableModule,
    DataViewModule,
    FieldsetModule,
    CardModule,
    AutoCompleteModule,
    MessagesModule,
    MessageModule,
    DialogModule,
    KeyFilterModule,
    InputMaskModule,
    InputSwitchModule,
    ConfirmDialogModule,
    ToolbarModule,
    BlockUIModule,
    ProgressSpinnerModule,
    CarouselModule,
    ChipsModule,
    ToastModule,
    TabViewModule,
    OverlayPanelModule,
    InputTextareaModule,
    CheckboxModule,
    MultiSelectModule,
    ProgressBarModule,
    ListboxModule,
    PanelModule,
    AccordionModule,
    SplitButtonModule,
    DynamicDialogModule,
    PaginatorModule,
    SidebarModule,
    ConfirmPopupModule,
    SlideMenuModule,
    ContextMenuModule,
    MenuModule,
    BadgeModule,
    TooltipModule,
    DividerModule,
    TagModule,
    InputNumberModule,
    TimelineModule,
    ImageModule,
    GalleriaModule,
    CaptchaModule,
    ChipModule,
    MenubarModule,
    ChartModule,
    EditorModule,
    FileUploadModule
  ],
  exports: [
  
    /* primeng */
    ScrollPanelModule,
    DropdownModule,
    InputTextModule,
    CalendarModule,
    RadioButtonModule,
    ButtonModule,
    SelectButtonModule,
    TableModule,
    DataViewModule,
    FieldsetModule,
    CardModule,
    AutoCompleteModule,
    MessagesModule,
    MessageModule,
    StepsModule,
    DialogModule,
    KeyFilterModule,
    InputMaskModule,
    InputSwitchModule,
    ChipsModule,
    ConfirmDialogModule,
    BlockUIModule,
    ToolbarModule,
    ProgressBarModule,
    CarouselModule,
    ToastModule,
    TabViewModule,
    OverlayPanelModule,
    InputTextareaModule,
    CheckboxModule,
    MultiSelectModule,
    ListboxModule,
    PanelModule,
    AccordionModule,
    SidebarModule,
    SplitButtonModule,
    DynamicDialogModule,
    PaginatorModule,
    ConfirmPopupModule,
    SlideMenuModule,
    ContextMenuModule,
    MenuModule,
    BadgeModule,
    TooltipModule,
    DividerModule,
    TagModule,
    InputNumberModule,
    TimelineModule,
    ImageModule,
    GalleriaModule,
    CaptchaModule,
    ChipModule,
    KnobModule,
    MenubarModule,
    ChartModule,
    EditorModule,
    FileUploadModule
  ],
  providers: []
})
export class SharedModule { }
